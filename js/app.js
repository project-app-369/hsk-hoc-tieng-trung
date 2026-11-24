/* HSK App — logic chính. Không phụ thuộc thư viện ngoài. */
(function () {
  'use strict';

  var LEVELS = { PH: 'Phát âm', HSK1: 'HSK 1', HSK2: 'HSK 2' };
  var SECTIONS = [
    { id: 'vocab', label: 'Từ mới' },
    { id: 'pron', label: 'Cách đọc' },
    { id: 'writing', label: 'Cách viết' },
    { id: 'grammar', label: 'Ngữ pháp' },
    { id: 'read', label: 'Đọc câu' },
    { id: 'quiz', label: 'Ôn tập' }
  ];
  var KEY = 'hsk.app.v2';
  var THEME_KEY = 'hsk.theme';
  var DAY = 86400000;
  var INTERVALS = [0, 1, 3, 7, 14, 30]; // ngày đến lần ôn kế tiếp theo hộp (Leitner)

  var LESSONS = window.LESSONS || [];
  var byId = {};
  LESSONS.forEach(function (l) { byId[l.id] = l; });

  /* ---------- helpers ---------- */
  var app = document.getElementById('app');
  function $(s, el) { return (el || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function label(l) { return l.level === 'PH' ? 'PH' + l.n : String(l.n); }
  function lessonTitle(l) { return LEVELS[l.level] + (l.level === 'PH' ? '' : ' · Bài ' + l.n); }
  function speak(t) {
    try {
      if (!('speechSynthesis' in window)) return;
      var u = new SpeechSynthesisUtterance(t);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) { /* thiết bị không hỗ trợ — bỏ qua */ }
  }

  /* ---------- storage (per viewer, có try/catch) ---------- */
  function normalize(o) {
    return {
      done: o.done || {},
      seen: o.seen || {},
      cards: o.cards || {},
      stats: o.stats || { ok: 0, tot: 0 },
      wrong: Array.isArray(o.wrong) ? o.wrong : []
    };
  }
  var db;
  try { db = normalize(JSON.parse(localStorage.getItem(KEY)) || {}); }
  catch (e) { db = normalize({}); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* bỏ qua */ } }

  /* ---------- routing ---------- */
  function setNav(name) {
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === name) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
  function route() {
    var raw = (location.hash || '#/lessons').replace(/^#\/?/, '');
    var qi = raw.indexOf('?');
    var path = qi >= 0 ? raw.slice(0, qi) : raw;
    var parts = path.split('/').filter(Boolean);
    var name = parts[0] || 'lessons';
    setNav(name === 'lesson' ? 'lessons' : name);
    if (name === 'lesson') viewLesson(parts[1], parts[2]);
    else if (name === 'flash') viewFlash();
    else if (name === 'review') viewReview();
    else if (name === 'progress') viewProgress();
    else viewLessons();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- Danh sách bài ---------- */
  var lvFilter = 'ALL';
  var qText = '';

  function matchesQuery(l, q) {
    if (!q) return true;
    var hay = [l.zh, l.vi, LEVELS[l.level]].concat(
      (l.vocab || []).map(function (v) { return v.join(' '); }),
      (l.grammar || []).map(function (g) { return g.t; })
    ).join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).filter(Boolean).every(function (w) { return hay.indexOf(w) >= 0; });
  }
  function lessonCard(l) {
    var seen = (db.seen[l.id] || []).length;
    var pct = Math.round(seen / SECTIONS.length * 100);
    var cls = l.level === 'PH' ? 'ph' : (l.level === 'HSK2' ? 'h2' : '');
    var status = db.done[l.id]
      ? '<span class="tick">✓ Xong</span>'
      : '<span class="pct">' + pct + '%</span>';
    return '<a class="lesson-card" href="#/lesson/' + esc(l.id) + '/vocab">' +
      '<div class="num ' + cls + '">' + esc(label(l)) + '</div>' +
      '<div><div class="lc-lv">' + esc(lessonTitle(l)) + '</div>' +
      '<div class="lc-zh">' + esc(l.zh) + '</div>' +
      '<div class="lc-vi">' + esc(l.vi) + '</div>' +
      '<div class="bar" role="img" aria-label="Đã xem ' + pct + '% bài"><i style="width:' + pct + '%"></i></div></div>' +
      '<div>' + status + '</div></a>';
  }
  function viewLessons() {
    var doneCount = LESSONS.filter(function (l) { return db.done[l.id]; }).length;
    app.innerHTML =
      '<h1 class="page-title">Bài học</h1>' +
      '<p class="page-sub">' + LESSONS.length + ' bài · đã hoàn thành ' + doneCount + '</p>' +
      '<input class="search" id="q" type="search" placeholder="Tìm bài, từ, ngữ pháp…" aria-label="Tìm bài học" value="' + esc(qText) + '">' +
      '<div class="chips" id="lvChips" role="group" aria-label="Cấp độ" style="margin:12px 0"></div>' +
      '<div class="grid cols" id="lessonGrid"></div>';
    function updateList() {
      var chips = [['ALL', 'Tất cả'], ['PH', 'Phát âm'], ['HSK1', 'HSK 1'], ['HSK2', 'HSK 2']];
      $('#lvChips').innerHTML = chips.map(function (c) {
        return '<button class="chip" type="button" data-lv="' + c[0] + '" aria-pressed="' + (lvFilter === c[0]) + '">' + c[1] + '</button>';
      }).join('');
      var list = LESSONS.filter(function (l) {
        return (lvFilter === 'ALL' || l.level === lvFilter) && matchesQuery(l, qText);
      });
      $('#lessonGrid').innerHTML = list.length
        ? list.map(lessonCard).join('')
        : '<div class="empty card" style="grid-column:1/-1">Không có bài nào khớp. Thử từ khóa khác.</div>';
    }
    $('#q').addEventListener('input', function (e) { qText = e.target.value.trim(); updateList(); });
    $('#lvChips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-lv]');
      if (!b) return;
      lvFilter = b.getAttribute('data-lv');
      updateList();
    });
    updateList();
  }

  /* ---------- Chi tiết bài ---------- */
  function markSeen(id, sec) {
    var s = db.seen[id] || [];
    if (s.indexOf(sec) < 0) { s.push(sec); db.seen[id] = s; save(); }
  }
  function exRow(a) {
    var zh = a[0];
    var py = a.length === 3 ? a[1] : '';
    var vi = a.length === 3 ? a[2] : a[1];
    return '<div class="ex"><div><div class="ez">' + esc(zh) + '</div>' +
      (py ? '<div class="ep">' + esc(py) + '</div>' : '') +
      '<div class="ev">' + esc(vi) + '</div></div>' +
      '<button class="speak" type="button" data-say="' + esc(zh) + '" aria-label="Nghe ' + esc(zh) + '">🔊</button></div>';
  }
  function renderSection(l, sec) {
    var out = '';
    if (sec === 'vocab') {
      out += '<p class="muted small">' + l.vocab.length + ' từ mới · nhấn 🔊 để nghe</p>';
      out += '<div class="card list">' + l.vocab.map(function (v) {
        return '<div class="vrow"><div><span class="v-zh">' + esc(v[0]) + '</span>' +
          '<span class="v-pos">' + esc(v[2]) + '</span>' +
          '<div class="v-py">' + esc(v[1]) + '</div>' +
          '<div class="v-vi">' + esc(v[3]) + '</div></div>' +
          '<button class="speak" type="button" data-say="' + esc(v[0]) + '" aria-label="Nghe ' + esc(v[0]) + '">🔊</button></div>';
      }).join('') + '</div>';
    }
    if (sec === 'pron') {
      out += '<div class="grid">' + (l.pron || []).map(function (p) {
        return '<div class="card note-card"><p style="margin:0">' + esc(p) + '</p></div>';
      }).join('') + '</div>';
    }
    if (sec === 'writing') {
      out += '<div class="grid">' + (l.writing || []).map(function (w) {
        return '<div class="card write-card"><div class="big-hanzi">' + esc(w.zh) + '</div>' +
          '<div><div style="font-weight:600;margin-bottom:4px">' + esc(w.py || '') + '</div>' +
          '<div>' + esc(w.note) + '</div></div></div>';
      }).join('') + '</div>';
    }
    if (sec === 'grammar') {
      out += '<div class="grid">' + (l.grammar || []).map(function (g) {
        return '<div class="card gram"><h3>' + esc(g.t) + '</h3>' +
          '<div class="formula">' + esc(g.f) + '</div>' +
          '<p style="margin:6px 0 0">' + esc(g.e) + '</p>' +
          (g.ex || []).map(exRow).join('') + '</div>';
      }).join('') + '</div>';
    }
    if (sec === 'read') {
      out += '<div class="grid">' + (l.read || []).map(function (r) {
        return '<div class="card sent"><div class="sent-row"><div class="sz">' + esc(r.zh) + '</div>' +
          '<button class="speak" type="button" data-say="' + esc(r.zh) + '" aria-label="Nghe câu">🔊</button></div>' +
          '<div class="sp">' + esc(r.py) + '</div>' +
          '<div class="sv">' + esc(r.vi) + '</div>' +
          (r.note ? '<div class="sn">' + esc(r.note) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }
    if (sec === 'quiz') {
      var quiz = l.quiz || [];
      out += '<div class="grid">' + quiz.map(function (q, i) {
        return '<div class="card q-card" data-qcard="' + i + '">' +
          '<p class="q-text">' + esc(q.q) + '</p><div class="opts">' +
          q.o.map(function (opt, k) {
            return '<button class="opt" type="button" data-lid="' + esc(l.id) + '" data-qi="' + i + '" data-k="' + k + '">' + esc(opt) + '</button>';
          }).join('') + '</div><div class="feedback" hidden></div></div>';
      }).join('') + '</div>';
    }
    return out;
  }
  function viewLesson(id, secId) {
    var l = byId[id];
    if (!l) {
      app.innerHTML = '<div class="empty card">Không tìm thấy bài này.</div>' +
        '<div class="row-end"><a class="btn" href="#/lessons">← Về danh sách bài</a></div>';
      return;
    }
    var sec = SECTIONS.some(function (s) { return s.id === secId; }) ? secId : 'vocab';
    markSeen(l.id, sec);
    var seen = db.seen[l.id] || [];
    var idx = LESSONS.indexOf(l);
    var prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
    var isDone = !!db.done[l.id];
    app.innerHTML =
      '<div class="lesson-head">' +
        '<a class="back" href="#/lessons" aria-label="Quay lại danh sách">←</a>' +
        '<div><div class="lc-lv">' + esc(lessonTitle(l)) + '</div>' +
        '<div class="lesson-hanzi">' + esc(l.zh) + '</div>' +
        '<div class="lesson-vi">' + esc(l.vi) + '</div></div></div>' +
      '<nav class="stabs" aria-label="Các phần của bài">' +
        SECTIONS.map(function (s) {
          return '<a class="stab" href="#/lesson/' + esc(l.id) + '/' + s.id + '"' +
            (s.id === sec ? ' aria-current="page"' : '') + '>' +
            (seen.indexOf(s.id) >= 0 ? '<span class="dot" aria-hidden="true"></span>' : '') +
            esc(s.label) + '</a>';
        }).join('') +
      '</nav>' +
      '<section id="sec" aria-live="polite">' + renderSection(l, sec) + '</section>' +
      '<div class="done-bar">' +
        (prev ? '<a class="btn" href="#/lesson/' + esc(prev.id) + '/vocab">← Bài trước</a>' : '<span></span>') +
        '<button class="btn ' + (isDone ? 'btn-ok' : 'btn-primary') + '" id="doneBtn" type="button">' +
          (isDone ? '✓ Đã hoàn thành' : 'Đánh dấu hoàn thành') + '</button>' +
        (next ? '<a class="btn" href="#/lesson/' + esc(next.id) + '/vocab">Bài sau →</a>' : '<span></span>') +
      '</div>';
    $('#doneBtn').addEventListener('click', function () {
      if (db.done[l.id]) delete db.done[l.id]; else db.done[l.id] = Date.now();
      save();
      viewLesson(l.id, sec);
    });
  }
  // Trả lời câu hỏi trong bài (ủy quyền sự kiện)
  app.addEventListener('click', function (e) {
    var opt = e.target.closest('.opt[data-lid]');
    if (!opt) return;
    var card = opt.closest('.q-card');
    if (!card || card.getAttribute('data-answered')) return;
    var l = byId[opt.getAttribute('data-lid')];
    var q = l.quiz[Number(opt.getAttribute('data-qi'))];
    var k = Number(opt.getAttribute('data-k'));
    card.setAttribute('data-answered', '1');
    var ok = k === q.a;
    var btns = card.querySelectorAll('.opt');
    btns.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.a) b.classList.add('correct');
      else if (i === k) b.classList.add('wrong');
    });
    var fb = card.querySelector('.feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.textContent = (ok ? 'Chính xác. ' : 'Chưa đúng. ') + (q.exp || '');
    recordAnswer(q, ok);
  });
  function recordAnswer(q, ok) {
    db.stats.tot += 1;
    if (ok) db.stats.ok += 1;
    var key = q.q + '|' + q.o.join('/');
    db.wrong = db.wrong.filter(function (w) { return w.key !== key; });
    if (!ok) {
      db.wrong.unshift({ key: key, q: q.q, o: q.o, a: q.a, exp: q.exp || '' });
      db.wrong = db.wrong.slice(0, 60);
    }
    save();
  }

  /* ---------- Flashcards ---------- */
  var fLv = 'ALL', fLesson = 'ALL';
  var fQueue = [], fIdx = 0, fFlipped = false;

  function scopeLessons(lv, lesson) {
    return LESSONS.filter(function (l) {
      return (lv === 'ALL' || l.level === lv) && (lesson === 'ALL' || l.id === lesson);
    });
  }
  function allCards(lv, lesson) {
    var out = [];
    scopeLessons(lv, lesson).forEach(function (l) {
      l.vocab.forEach(function (v) {
        out.push({ id: l.id + '|' + v[0], zh: v[0], py: v[1], pos: v[2], vi: v[3], lesson: l.id });
      });
    });
    return out;
  }
  function boxOf(id) { var r = db.cards[id]; return r ? r.b : -1; }
  function buildQueue(lv, lesson) {
    var now = Date.now();
    var due = [], fresh = [];
    allCards(lv, lesson).forEach(function (c) {
      var r = db.cards[c.id];
      if (!r) fresh.push(c);
      else if (r.d <= now) due.push(c);
    });
    return shuffle(due).concat(shuffle(fresh));
  }
  function viewFlash() {
    if (!fQueue.length) fQueue = buildQueue(fLv, fLesson);
    var total = allCards(fLv, fLesson).length;
    var mastered = allCards(fLv, fLesson).filter(function (c) { return boxOf(c.id) >= 4; }).length;
    var lessonOpts = '<option value="ALL">Tất cả bài</option>' + LESSONS.filter(function (l) {
      return fLv === 'ALL' || l.level === fLv;
    }).map(function (l) {
      return '<option value="' + esc(l.id) + '"' + (fLesson === l.id ? ' selected' : '') + '>' + esc(label(l)) + ' · ' + esc(l.zh) + '</option>';
    }).join('');
    app.innerHTML =
      '<h1 class="page-title">Flashcard</h1>' +
      '<p class="page-sub">Lật thẻ, tự đánh giá. Thẻ “chưa nhớ” sẽ quay lại sớm hơn.</p>' +
      '<div class="chips" id="fChips" role="group" aria-label="Cấp độ" style="margin-bottom:10px"></div>' +
      '<label class="small muted" for="fLesson">Phạm vi bài</label>' +
      '<select class="search" id="fLesson" style="margin-top:4px">' + lessonOpts + '</select>' +
      '<div class="flash-meta" style="margin:12px 0">' + total + ' thẻ · đã thuộc ' + mastered + ' · còn lại ' + Math.max(0, fQueue.length - fIdx) + ' trong phiên</div>' +
      '<div class="flash-stage" id="stage"></div>';
    function drawChips() {
      var chips = [['ALL', 'Tất cả'], ['PH', 'Phát âm'], ['HSK1', 'HSK 1'], ['HSK2', 'HSK 2']];
      $('#fChips').innerHTML = chips.map(function (c) {
        return '<button class="chip" type="button" data-fl="' + c[0] + '" aria-pressed="' + (fLv === c[0]) + '">' + c[1] + '</button>';
      }).join('');
    }
    drawChips();
    $('#fChips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-fl]'); if (!b) return;
      fLv = b.getAttribute('data-fl'); fLesson = 'ALL'; fQueue = []; fIdx = 0; viewFlash();
    });
    $('#fLesson').addEventListener('change', function (e) {
      fLesson = e.target.value; fQueue = []; fIdx = 0; viewFlash();
    });
    drawCard();
  }
  function drawCard() {
    var stage = $('#stage');
    if (!stage) return;
    if (!fQueue.length) {
      stage.innerHTML = '<div class="empty card" style="width:100%;max-width:520px">Không có thẻ nào trong phạm vi này.</div>';
      return;
    }
    if (fIdx >= fQueue.length) {
      stage.innerHTML = '<div class="card empty" style="width:100%;max-width:520px"><p style="font-size:18px;color:var(--ink);font-weight:700;margin:0 0 8px">Xong phiên này 🎉</p>' +
        '<p class="muted" style="margin:0 0 14px">Các thẻ đến hạn sẽ hiện lại sau.</p>' +
        '<button class="btn btn-primary" type="button" id="fAgain">Bắt đầu phiên mới</button></div>';
      $('#fAgain').addEventListener('click', function () { fQueue = buildQueue(fLv, fLesson); fIdx = 0; viewFlash(); });
      return;
    }
    var c = fQueue[fIdx];
    fFlipped = false;
    stage.innerHTML =
      '<div style="width:100%;max-width:520px;display:grid;gap:14px">' +
      '<button class="flash" id="card" type="button" aria-label="Lật thẻ">' +
        '<div class="f-zh">' + esc(c.zh) + '</div>' +
        '<div class="f-hint">Chạm để xem nghĩa</div></button>' +
      '<div class="flash-actions">' +
        '<button class="btn btn-danger" type="button" id="bad" disabled>Chưa nhớ</button>' +
        '<button class="btn btn-ok" type="button" id="good" disabled>Nhớ rồi</button>' +
      '</div>' +
      '<div class="flash-meta">' + (fIdx + 1) + ' / ' + fQueue.length + '</div></div>';
    $('#card').addEventListener('click', function () {
      if (fFlipped) { speak(c.zh); return; }
      fFlipped = true;
      $('#card').innerHTML =
        '<div class="f-zh">' + esc(c.zh) + '</div>' +
        '<div class="f-py">' + esc(c.py) + '</div>' +
        '<div class="f-pos">' + esc(c.pos) + '</div>' +
        '<div class="f-vi">' + esc(c.vi) + '</div>' +
        '<div class="f-hint">Chạm lại để nghe</div>';
      $('#bad').disabled = false;
      $('#good').disabled = false;
      speak(c.zh);
    });
    $('#good').addEventListener('click', function () { rateCard(c, true); });
    $('#bad').addEventListener('click', function () { rateCard(c, false); });
  }
  function rateCard(c, ok) {
    var now = Date.now();
    var r = db.cards[c.id] || { b: 0, d: 0 };
    if (ok) {
      r.b = Math.min(r.b + 1, INTERVALS.length - 1);
      r.d = now + INTERVALS[r.b] * DAY;
    } else {
      r.b = 0;
      r.d = now + 10 * 60000;
      fQueue.push(c); // gặp lại trong phiên
    }
    db.cards[c.id] = r;
    save();
    fIdx += 1;
    drawCard();
  }

  /* ---------- Ôn tập (trộn từ + ngữ pháp) ---------- */
  var rvLv = 'ALL', rvCount = 10;
  var rvState = null;

  function reviewPool(lv) {
    var lessons = LESSONS.filter(function (l) { return lv === 'ALL' || l.level === lv; });
    var vocabAll = [];
    LESSONS.forEach(function (l) { l.vocab.forEach(function (v) { vocabAll.push(v); }); });
    var qs = [];
    lessons.forEach(function (l) {
      var pool = [];
      l.vocab.forEach(function (v) { pool.push(v); });
      shuffle(pool).slice(0, 8).forEach(function (v) {
        var distractZh = shuffle(vocabAll.filter(function (x) { return x[0] !== v[0]; })).slice(0, 3);
        var mode = Math.random() < 0.5;
        if (mode) {
          qs.push({
            q: 'Từ “' + v[0] + '” (' + v[1] + ') có nghĩa là gì?',
            o: shuffle([v[3]].concat(distractZh.map(function (x) { return x[3]; }))),
            key: 'v1|' + v[0]
          });
        } else {
          qs.push({
            q: 'Từ nào có nghĩa là “' + v[3] + '”?',
            o: shuffle([v[0]].concat(distractZh.map(function (x) { return x[0]; }))),
            key: 'v2|' + v[0]
          });
        }
        qs[qs.length - 1].a = qs[qs.length - 1].o.indexOf(mode ? v[3] : v[0]);
      });
      (l.quiz || []).forEach(function (q, i) {
        qs.push({ q: q.q, o: q.o, a: q.a, exp: q.exp, key: 'g|' + l.id + '|' + i });
      });
    });
    // Ưu tiên câu đã sai (trong phạm vi)
    var wrongInScope = db.wrong.filter(function (w) {
      return lv === 'ALL' || qs.some(function (x) { return x.q === w.q; });
    });
    var wrongKeys = wrongInScope.map(function (w) { return w.q + '|' + w.o.join('/'); });
    var wrongQs = [], others = [];
    qs.forEach(function (x) {
      var k = x.q + '|' + x.o.join('/');
      if (wrongKeys.indexOf(k) >= 0) wrongQs.push(x); else others.push(x);
    });
    var picked = shuffle(wrongQs).slice(0, Math.min(3, wrongQs.length)).concat(shuffle(others));
    return picked;
  }
  function viewReview() {
    if (!rvState) rvState = null;
    var chips = [['ALL', 'Tất cả'], ['PH', 'Phát âm'], ['HSK1', 'HSK 1'], ['HSK2', 'HSK 2']];
    app.innerHTML =
      '<h1 class="page-title">Ôn tập</h1>' +
      '<p class="page-sub">Trộn từ mới và câu hỏi ngữ pháp. Câu sai sẽ được ưu tiên lần sau.</p>' +
      '<div class="chips" id="rvChips" role="group" aria-label="Cấp độ" style="margin-bottom:10px"></div>' +
      '<div class="row" style="margin-bottom:12px"><span class="small muted">Số câu:</span>' +
        [5, 10, 20].map(function (n) {
          return '<button class="chip" type="button" data-rc="' + n + '" aria-pressed="' + (rvCount === n) + '">' + n + '</button>';
        }).join('') + '</div>' +
      '<div id="rvBody"></div>';
    $('#rvChips').innerHTML = chips.map(function (c) {
      return '<button class="chip" type="button" data-rv="' + c[0] + '" aria-pressed="' + (rvLv === c[0]) + '">' + c[1] + '</button>';
    }).join('');
    $('#rvChips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-rv]'); if (!b) return;
      rvLv = b.getAttribute('data-rv'); viewReview();
    });
    app.querySelectorAll('[data-rc]').forEach(function (b) {
      b.addEventListener('click', function () { rvCount = Number(b.getAttribute('data-rc')); viewReview(); });
    });
    startReview();
  }
  function startReview() {
    var pool = reviewPool(rvLv);
    if (!pool.length) { $('#rvBody').innerHTML = '<div class="empty card">Chưa có câu hỏi.</div>'; return; }
    rvState = { items: pool.slice(0, rvCount), i: 0, ok: 0, answered: false, misses: [] };
    drawReview();
  }
  function drawReview() {
    var s = rvState, body = $('#rvBody');
    if (!s || !s.items.length) return;
    if (s.i >= s.items.length) {
      var pct = Math.round(s.ok / s.items.length * 100);
      body.innerHTML = '<div class="card" style="padding:22px;text-align:center">' +
        '<div class="muted">Kết quả</div><div class="score-big">' + s.ok + '/' + s.items.length + '</div>' +
        '<p class="muted" style="margin:0 0 14px">' + pct + '% đúng' + (pct >= 80 ? ' — làm tốt lắm!' : ' — ôn lại các câu sai nhé.') + '</p>' +
        '<div class="row" style="justify-content:center">' +
          '<button class="btn btn-primary" type="button" id="rvAgain">Làm bộ mới</button></div></div>';
      $('#rvAgain').addEventListener('click', startReview);
      return;
    }
    var q = s.items[s.i];
    s.answered = false;
    body.innerHTML = '<div class="q-count" style="margin-bottom:8px">Câu ' + (s.i + 1) + ' / ' + s.items.length + '</div>' +
      '<div class="card q-card"><p class="q-text">' + esc(q.q) + '</p>' +
      '<div class="opts">' + q.o.map(function (o, k) {
        return '<button class="opt" type="button" data-k="' + k + '">' + esc(o) + '</button>';
      }).join('') + '</div>' +
      '<div class="feedback" id="rvFb" hidden></div>' +
      '<div class="row-end" id="rvNext" hidden><button class="btn btn-primary" type="button" id="rvNextBtn">Câu tiếp theo →</button></div></div>';
    body.querySelectorAll('.opt').forEach(function (b) {
      b.addEventListener('click', function () { answerReview(Number(b.getAttribute('data-k'))); });
    });
    $('#rvNextBtn').addEventListener('click', function () { s.i += 1; drawReview(); });
  }
  function answerReview(k) {
    var s = rvState; if (!s || s.answered) return;
    var q = s.items[s.i];
    s.answered = true;
    var ok = k === q.a;
    if (ok) s.ok += 1;
    app.querySelectorAll('#rvBody .opt').forEach(function (b, i) {
      b.disabled = true;
      if (i === q.a) b.classList.add('correct');
      else if (i === k) b.classList.add('wrong');
    });
    var fb = $('#rvFb');
    fb.hidden = false;
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.textContent = ok ? 'Chính xác!' : 'Đáp án đúng: ' + q.o[q.a] + (q.exp ? '. ' + q.exp : '');
    $('#rvNext').hidden = false;
    recordAnswer({ q: q.q, o: q.o, a: q.a, exp: q.exp || '' }, ok);
  }

  /* ---------- Tiến độ ---------- */
  function viewProgress() {
    var totalLessons = LESSONS.length;
    var doneLessons = LESSONS.filter(function (l) { return db.done[l.id]; }).length;
    var totalSections = totalLessons * SECTIONS.length;
    var seenSections = LESSONS.reduce(function (a, l) { return a + (db.seen[l.id] || []).length; }, 0);
    var cards = allCards('ALL', 'ALL');
    var mastered = cards.filter(function (c) { return boxOf(c.id) >= 4; }).length;
    var learning = cards.filter(function (c) { var b = boxOf(c.id); return b >= 0 && b < 4; }).length;
    var acc = db.stats.tot ? Math.round(db.stats.ok / db.stats.tot * 100) : 0;
    var lvRows = ['PH', 'HSK1', 'HSK2'].map(function (lv) {
      var ls = LESSONS.filter(function (l) { return l.level === lv; });
      var d = ls.filter(function (l) { return db.done[l.id]; }).length;
      var pct = ls.length ? Math.round(d / ls.length * 100) : 0;
      return '<div class="lvl-row"><div class="row" style="justify-content:space-between"><b>' + LEVELS[lv] + '</b>' +
        '<span class="small muted">' + d + ' / ' + ls.length + ' bài</span></div>' +
        '<div class="bar" style="margin-top:0"><i style="width:' + pct + '%"></i></div></div>';
    }).join('');
    var theme = localStorage.getItem(THEME_KEY) || 'auto';
    app.innerHTML =
      '<h1 class="page-title">Tiến độ</h1>' +
      '<p class="page-sub">Lưu trên trình duyệt này. Xóa dữ liệu trình duyệt sẽ mất tiến độ.</p>' +
      '<div class="stat-grid">' +
        '<div class="stat"><b>' + doneLessons + '/' + totalLessons + '</b><span>Bài đã hoàn thành</span></div>' +
        '<div class="stat"><b>' + Math.round(seenSections / totalSections * 100) + '%</b><span>Phần đã xem</span></div>' +
        '<div class="stat"><b>' + mastered + '</b><span>Thẻ đã thuộc</span></div>' +
        '<div class="stat"><b>' + acc + '%</b><span>Đúng trong ôn tập (' + db.stats.tot + ' câu)</span></div>' +
      '</div>' +
      '<h2 class="section-title">Theo cấp độ</h2>' +
      '<div class="card" style="padding:4px 16px">' + lvRows + '</div>' +
      '<h2 class="section-title">Flashcard</h2>' +
      '<div class="card" style="padding:14px 16px"><p style="margin:0">Đang học: <b>' + learning + '</b> thẻ · Đã thuộc: <b>' + mastered + '</b> / ' + cards.length + ' thẻ</p></div>' +
      '<h2 class="section-title">Giao diện</h2>' +
      '<div class="chips" role="group" aria-label="Giao diện">' +
        [['auto', 'Tự động'], ['light', 'Sáng'], ['dark', 'Tối']].map(function (t) {
          return '<button class="chip" type="button" data-theme="' + t[0] + '" aria-pressed="' + (theme === t[0]) + '">' + t[1] + '</button>';
        }).join('') + '</div>' +
      '<h2 class="section-title">Dữ liệu</h2>' +
      '<div class="row"><button class="btn btn-danger" type="button" id="resetBtn">Xóa tiến độ</button></div>';
    app.querySelectorAll('[data-theme]').forEach(function (b) {
      b.addEventListener('click', function () { applyTheme(b.getAttribute('data-theme')); viewProgress(); });
    });
    var rb = $('#resetBtn');
    var armed = false;
    rb.addEventListener('click', function () {
      if (!armed) { armed = true; rb.textContent = 'Bấm lần nữa để xóa'; return; }
      db = normalize({}); save(); fQueue = []; fIdx = 0; rvState = null;
      viewProgress();
    });
  }
  function applyTheme(t) {
    var root = document.documentElement;
    if (t === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* bỏ qua */ }
  }
  (function initTheme() {
    var t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch (e) { /* bỏ qua */ }
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  })();

  /* ---------- Phát âm (nút 🔊) ---------- */
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-say]');
    if (s) speak(s.getAttribute('data-say'));
  });

  /* ---------- Cài đặt PWA ---------- */
  var installBtn = document.getElementById('installBtn');
  var dlg = document.getElementById('dlg');
  var deferredPrompt = null;
  function isStandalone() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  }
  function refreshInstall() { installBtn.hidden = isStandalone(); }
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    refreshInstall();
  });
  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    installBtn.hidden = true;
  });
  function instructionsHtml() {
    var ua = navigator.userAgent || '';
    if (/iphone|ipad|ipod/i.test(ua)) {
      return '<ol><li>Mở trang này bằng <b>Safari</b>.</li><li>Chạm nút <b>Chia sẻ</b> (ô vuông có mũi tên).</li><li>Chọn <b>Thêm vào Màn hình chính</b>.</li></ol>';
    }
    return '<ol><li>Mở menu của trình duyệt (⋮ hoặc biểu tượng ⊕ trên thanh địa chỉ).</li>' +
      '<li>Chọn <b>Cài đặt ứng dụng</b> hoặc <b>Install app</b>.</li>' +
      '<li>Xác nhận. Ứng dụng sẽ có biểu tượng riêng trên máy.</li></ol>';
  }
  installBtn.addEventListener('click', function () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function () { deferredPrompt = null; refreshInstall(); }, function () { deferredPrompt = null; });
      return;
    }
    $('#dlgText').innerHTML = instructionsHtml();
    dlg.showModal();
  });
  document.getElementById('dlgClose').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  refreshInstall();

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline không bắt buộc */ });
    });
  }

  /* ---------- khởi động ---------- */
  if (!location.hash) history.replaceState(null, '', '#/lessons');
  route();
})();
