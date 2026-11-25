/* HSK App — giao diện và điều hướng. */
(function () {
  'use strict';
  const H = window.HSK;
  const { $, $$, esc, ICONS, LESSONS, byId, LEVELS, SECTIONS, shuffle } = H;
  const app = $('#app');
  const DAY = 86400000;
  const INTERVALS = [0, 1, 3, 7, 14, 30]; // ngày đến lần ôn kế tiếp theo hộp (Leitner)
  const db = () => H.db();
  const SEC_ICON = { vocab: 'list', pron: 'speaker', writing: 'pen', grammar: 'bulb', examples: 'book', quiz: 'check' };

  /* ---------- trạng thái giao diện (không lưu) ---------- */
  const ui = { hidePy: false, hideVi: false, exFilter: { lid: '', tag: 'ALL' } };
  let lvFilter = 'ALL';
  let qText = '';

  /* ---------- tiện ích hiển thị ---------- */
  const speakBtn = (text, label) =>
    '<button class="speak" type="button" data-say="' + esc(text) + '" aria-label="' + esc(label || 'Nghe') + '">' + ICONS.speaker + '</button>';
  const numCls = (l) => (l.level === 'PH' ? 'ph' : l.level === 'HSK2' ? 'h2' : '');
  const switchHtml = (id, label, checked) =>
    '<label class="switch"><input type="checkbox" id="' + id + '"' + (checked ? ' checked' : '') + '><span class="sw-track"></span><span>' + esc(label) + '</span></label>';
  const ring = (pct, size) => {
    const r = 44, c = 2 * Math.PI * r;
    return '<svg class="ring" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" role="img" aria-label="' + pct + '%">' +
      '<circle cx="50" cy="50" r="' + r + '" class="ring-bg"/>' +
      '<circle cx="50" cy="50" r="' + r + '" class="ring-fg" stroke-dasharray="' + (c * pct / 100).toFixed(1) + ' ' + c.toFixed(1) + '" transform="rotate(-90 50 50)"/>' +
      '<text x="50" y="56" class="ring-txt">' + pct + '%</text></svg>';
  };

  /* ---------- điều hướng ---------- */
  function setNav(name) {
    $$('[data-nav]').forEach((a) => {
      if (a.getAttribute('data-nav') === name) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  let currentView = 'lessons';
  function render() {
    const raw = (location.hash || '#/lessons').replace(/^#\/?/, '');
    const qi = raw.indexOf('?');
    const path = qi >= 0 ? raw.slice(0, qi) : raw;
    const parts = path.split('/').filter(Boolean);
    const name = parts[0] || 'lessons';
    currentView = name;
    setNav(name === 'lesson' ? 'lessons' : name);
    if (name === 'lesson') viewLesson(parts[1], parts[2]);
    else if (name === 'flash') viewFlash();
    else if (name === 'review') viewReview();
    else if (name === 'progress') viewProgress();
    else viewLessons();
  }
  function route() {
    render();
    window.scrollTo(0, 0);
    app.classList.remove('enter'); void app.offsetWidth; app.classList.add('enter');
  }
  window.addEventListener('hashchange', route);
  H.afterSheet = () => { if (currentView === 'lesson') { const y = window.scrollY; render(); window.scrollTo(0, y); } };

  /* ======================================================
     TRANG CHỦ — danh sách bài
     ====================================================== */
  function dueCards() {
    const now = Date.now(); let n = 0;
    LESSONS.forEach((l) => l.vocab.forEach((v) => { const r = db().cards[l.id + '|' + v[0]]; if (r && r.d <= now) n++; }));
    return n;
  }
  function matchesQuery(l, q) {
    if (!q) return true;
    const hay = [l.zh, l.vi, LEVELS[l.level]].concat(
      l.vocab.map((v) => v.join(' ')), l.grammar.map((g) => g.t), l.examples.map((s) => s.zh + ' ' + s.vi + ' ' + s.py)
    ).join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.indexOf(w) >= 0);
  }
  function lessonCard(l) {
    const seen = db().seen[l.id] || [];
    const pct = Math.round(seen.length / SECTIONS.length * 100);
    const done = !!db().done[l.id];
    const dots = SECTIONS.map((s) => '<i class="' + (seen.indexOf(s.id) >= 0 ? 'on' : '') + '"></i>').join('');
    return '<a class="lesson-card" href="#/lesson/' + esc(l.id) + '/vocab">' +
      '<div class="num ' + numCls(l) + '">' + esc(H.lessonTag(l)) + '</div>' +
      '<div class="lc-body"><div class="lc-lv">' + esc(H.lessonTitle(l)) + '</div>' +
      '<div class="lc-zh">' + esc(l.zh) + '</div><div class="lc-vi">' + esc(l.vi) + '</div>' +
      '<div class="dots" role="img" aria-label="Đã xem ' + seen.length + '/' + SECTIONS.length + ' phần">' + dots + '</div></div>' +
      '<div class="lc-end">' + (done ? '<span class="tick">' + ICONS.check + '<span>Xong</span></span>' : '<span class="pct">' + pct + '%</span>') + '</div></a>';
  }
  function viewLessons() {
    const total = LESSONS.length;
    const doneN = LESSONS.filter((l) => db().done[l.id]).length;
    const pct = total ? Math.round(doneN / total * 100) : 0;
    const last = db().last && byId[db().last.id] ? db().last : null;
    const target = last || { id: LESSONS[0].id, sec: 'vocab' };
    const tl = byId[target.id];
    const secLabel = H.sectionLabel(tl, SECTIONS.find((s) => s.id === target.sec) || SECTIONS[0]);
    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-top"><div class="hero-txt">' +
          '<p class="eyebrow">Học tiếng Trung HSK</p>' +
          '<h1 class="page-title">' + (last ? 'Chào mừng quay lại' : 'Bắt đầu học thôi') + '</h1>' +
          '<p class="page-sub">' + doneN + ' / ' + total + ' bài đã hoàn thành. Mỗi bài có từ mới, cách đọc, cách viết, ngữ pháp, câu ví dụ và ôn tập.</p>' +
        '</div>' + ring(pct, 96) + '</div>' +
        '<a class="btn btn-primary btn-lg hero-cta" href="#/lesson/' + esc(tl.id) + '/' + esc(target.sec) + '">' +
          ICONS.play + '<span>' + (last ? 'Tiếp tục: ' : 'Bắt đầu: ') + esc(H.lessonTitle(tl)) + ' · ' + esc(secLabel) + '</span></a>' +
        '<div class="hero-stats">' +
          '<a class="mini-stat" href="#/progress"><span class="ms-ic flame">' + ICONS.flame + '</span><b>' + H.streak() + '</b><span>ngày liên tiếp</span></a>' +
          '<a class="mini-stat" href="#/flash"><span class="ms-ic">' + ICONS.cards + '</span><b>' + dueCards() + '</b><span>thẻ đến hạn</span></a>' +
          '<a class="mini-stat" href="#/review"><span class="ms-ic">' + ICONS.check + '</span><b>' + db().wrong.length + '</b><span>câu cần ôn</span></a>' +
        '</div>' +
      '</section>' +
      '<div class="toolbar">' +
        '<label class="search-box">' + ICONS.search + '<input class="search" id="q" type="search" placeholder="Tìm bài, từ, câu ví dụ…" aria-label="Tìm bài học" value="' + esc(qText) + '"></label>' +
        '<div class="seg" id="lvSeg" role="group" aria-label="Cấp độ"></div>' +
      '</div>' +
      '<div id="lessonGroups"></div>';
    function update() {
      const segs = [['ALL', 'Tất cả'], ['PH', 'Phát âm'], ['HSK1', 'HSK 1'], ['HSK2', 'HSK 2']];
      $('#lvSeg').innerHTML = segs.map((c) => '<button type="button" data-lv="' + c[0] + '" aria-pressed="' + (lvFilter === c[0]) + '">' + c[1] + '</button>').join('');
      let html = '';
      ['PH', 'HSK1', 'HSK2'].forEach((lv) => {
        if (lvFilter !== 'ALL' && lvFilter !== lv) return;
        const list = LESSONS.filter((l) => l.level === lv && matchesQuery(l, qText));
        if (!list.length) return;
        const all = LESSONS.filter((l) => l.level === lv);
        const d = all.filter((l) => db().done[l.id]).length;
        html += '<section class="lv-group"><div class="lv-head"><h2>' + LEVELS[lv] + '</h2><span class="muted small">' + d + '/' + all.length + ' bài</span></div>' +
          '<div class="grid cols">' + list.map(lessonCard).join('') + '</div></section>';
      });
      $('#lessonGroups').innerHTML = html || '<div class="empty card">Không có bài nào khớp. Thử từ khóa khác.</div>';
    }
    $('#q').addEventListener('input', (e) => { qText = e.target.value.trim(); update(); });
    $('#lvSeg').addEventListener('click', (e) => { const b = e.target.closest('[data-lv]'); if (!b) return; lvFilter = b.getAttribute('data-lv'); update(); });
    update();
  }

  /* ======================================================
     CHI TIẾT BÀI
     ====================================================== */
  function markSeen(id, sec) {
    const s = db().seen[id] || [];
    if (s.indexOf(sec) < 0) s.push(sec);
    db().seen[id] = s;
    db().last = { id, sec };
    H.save(); H.touch();
  }

  const exRow = (a, lid) => {
    const zh = a[0], py = a.length === 3 ? a[1] : '', vi = a.length === 3 ? a[2] : a[1];
    return '<div class="ex"><div><div class="ez">' + H.sentenceHtml(zh, lid) + '</div>' +
      (py ? '<div class="ep">' + esc(py) + '</div>' : '') + '<div class="ev">' + esc(vi) + '</div></div>' + speakBtn(zh, 'Nghe câu') + '</div>';
  };

  function vocabHtml(l) {
    if (l.level === 'PH') {
      return '<div class="grid">' + (l.sound ? H.soundHtml(l) : '') +
        '<div class="card drill"><h3 class="blk-h">Luyện đọc theo nhóm</h3><p class="muted small snd-sub">Chạm vào âm tiết để nghe. Đọc to theo, rồi đối chiếu thanh điệu.</p>' +
        l.drill.map((g) =>
          '<div class="drill-grp"><h4>' + esc(g.title) + '</h4><p class="muted small" style="margin:0 0 8px">' + esc(g.note) + '</p>' +
          '<div class="syl">' + g.items.map((s) => '<button type="button" class="syl-chip" data-syl="' + esc(s) + '">' + esc(s) + '</button>').join('') + '</div></div>').join('') +
        '</div></div>';
    }
    return '<div class="toolbar-row">' + switchHtml('sPy', 'Pinyin', !ui.hidePy) + switchHtml('sVi', 'Nghĩa', !ui.hideVi) + '</div>' +
      '<div class="card list vlist' + (ui.hidePy ? ' hide-py' : '') + (ui.hideVi ? ' hide-vi' : '') + '" id="vlist">' + l.vocab.map((v) =>
        '<div class="vrow"><button type="button" class="vmain" data-word="' + esc(v[0]) + '" data-lid="' + esc(l.id) + '">' +
          '<span class="v-zh">' + esc(v[0]) + '</span>' +
          '<span class="v-text"><span class="v-line"><span class="v-py">' + esc(v[1]) + '</span><span class="v-pos">' + esc(v[2]) + '</span></span>' +
          '<span class="v-vi">' + esc(v[3]) + '</span></span></button>' +
          '<div class="v-actions">' + speakBtn(v[0], 'Nghe ' + v[0]) +
          '<button class="speak tonal" type="button" data-pen="' + esc(v[0]) + '" data-lid="' + esc(l.id) + '" aria-label="Cách viết ' + esc(v[0]) + '">' + ICONS.pen + '</button></div></div>').join('') + '</div>';
  }
  function pronHtml(l) {
    return '<div class="grid">' + l.pron.map((p, i) => '<div class="card note-card"><span class="note-n">' + (i + 1) + '</span><p>' + esc(p) + '</p></div>').join('') + '</div>';
  }
  function strokeIcon(d) {
    return '<svg class="stk-ic" viewBox="0 0 48 48" aria-hidden="true"><path d="' + d + '" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function charGridHtml(l, chars) {
    const w = db().writing;
    return '<div class="char-grid" data-lid="' + esc(l.id) + '">' + chars.map((c) =>
      '<button type="button" class="char-tile' + (w[c] ? ' done' : '') + '" data-char="' + esc(c) + '"><span class="ct-zh">' + esc(c) + '</span><span class="ct-py"></span>' +
      (w[c] ? '<span class="ct-badge">' + ICONS.check + '</span>' : '') + '</button>').join('') + '</div>';
  }
  function writingHtml(l) {
    const chars = H.lessonChars(l);
    const w = db().writing;
    const practiced = chars.filter((c) => w[c]).length;
    let out = '';
    if (l.level === 'PH') {
      out += '<div class="card"><h3 class="blk-h">Nét cơ bản</h3><div class="stk-grid">' + l.strokes.map((s) =>
        '<div class="stk">' + strokeIcon(s.icon) + '<div><div><b>' + esc(s.name) + '</b> <span class="muted small">' + esc(s.py) + '</span></div><div class="small">' + esc(s.vi) + '</div></div></div>').join('') + '</div></div>';
    }
    out += '<div class="writing-head"><div><h3 class="blk-h" style="margin:0">' + (l.level === 'PH' ? 'Chữ mẫu thứ tự nét' : 'Chữ trong bài') + '</h3>' +
      '<p class="muted small" style="margin:2px 0 0">Chạm vào chữ để xem nét viết, bộ thủ, số nét và luyện viết bằng tay.</p></div>' +
      '<span class="pill">' + practiced + '/' + chars.length + ' đã luyện</span></div>' + charGridHtml(l, chars);
    if (l.level !== 'PH' && l.writing.length) {
      out += '<div class="card" style="margin-top:14px"><h3 class="blk-h">Mẹo nhớ</h3><ul class="tips">' + l.writing.map((x) =>
        '<li><span class="tip-zh">' + esc(x.zh) + '</span> <span class="muted">' + esc(x.py || '') + '</span><br>' + esc(x.note) + '</li>').join('') + '</ul></div>';
    }
    return out;
  }
  function grammarHtml(l) {
    return '<div class="grid">' + l.grammar.map((g) =>
      '<div class="card gram"><h3>' + esc(g.t) + '</h3><div class="formula">' + esc(g.f) + '</div><p style="margin:6px 0 0">' + esc(g.e) + '</p>' +
      g.ex.map((e) => exRow(e, l.id)).join('') + '</div>').join('') + '</div>';
  }
  function examplesHtml(l) {
    if (ui.exFilter.lid !== l.id) ui.exFilter = { lid: l.id, tag: 'ALL' };
    const tags = []; l.examples.forEach((s) => s.tags.forEach((t) => { if (tags.indexOf(t) < 0) tags.push(t); }));
    const list = l.examples.filter((s) => ui.exFilter.tag === 'ALL' || s.tags.indexOf(ui.exFilter.tag) >= 0);
    return '<div class="toolbar-row">' + switchHtml('sPy', 'Pinyin', !ui.hidePy) + switchHtml('sVi', 'Nghĩa', !ui.hideVi) +
      '<span class="pill" style="margin-left:auto">' + list.length + ' câu</span></div>' +
      (tags.length > 1 ? '<div class="chips" id="exChips">' +
        ['ALL'].concat(tags).map((t) => '<button class="chip" type="button" data-tag="' + esc(t) + '" aria-pressed="' + (ui.exFilter.tag === t) + '">' + (t === 'ALL' ? 'Tất cả (' + l.examples.length + ')' : esc(t)) + '</button>').join('') + '</div>' : '') +
      '<p class="muted small hint-line">' + ICONS.bulb + '<span>Chạm vào từng từ trong câu để tra nghĩa, cách viết và các câu khác có từ đó.</span></p>' +
      '<div class="sent-list' + (ui.hidePy ? ' hide-py' : '') + (ui.hideVi ? ' hide-vi' : '') + '" id="sentList">' + list.map((s, i) =>
        '<article class="card sent-card"><div class="sc-top"><span class="sc-n">' + (i + 1) + '</span>' +
        '<div class="sc-tags">' + s.tags.map((t) => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>' + speakBtn(s.zh, 'Nghe câu') + '</div>' +
        '<div class="sc-zh">' + H.sentenceHtml(s.zh, l.id) + '</div>' +
        (s.py ? '<div class="sc-py">' + esc(s.py) + '</div>' : '') +
        '<div class="sc-vi">' + esc(s.vi) + '</div>' +
        (s.note ? '<div class="sc-note">' + esc(s.note) + '</div>' : '') + '</article>').join('') + '</div>';
  }
  function quizHtml(l) {
    return '<div class="grid">' + l.quiz.map((q, i) =>
      '<div class="card q-card" data-qcard="' + i + '"><p class="q-text">' + esc(q.q) + '</p><div class="opts">' +
      q.o.map((opt, k) => '<button class="opt" type="button" data-lid="' + esc(l.id) + '" data-qi="' + i + '" data-k="' + k + '">' + esc(opt) + '</button>').join('') +
      '</div><div class="feedback" hidden></div></div>').join('') + '</div>';
  }
  const SEC_HINT = {
    vocab: (l) => (l.level === 'PH' ? 'Nghe từng thanh mẫu, vận mẫu và bảng ghép âm. Chạm để phát âm thành tiếng.' : l.vocab.length + ' từ mới. Chạm vào từ để tra nhanh; nút bút để xem cách viết.'),
    pron: () => 'Quy tắc đọc và lưu ý thanh điệu của bài.',
    writing: (l) => H.lessonChars(l).length + ' chữ. Mỗi chữ có thứ tự nét, bộ thủ và chế độ luyện viết.',
    grammar: (l) => l.grammar.length + ' điểm. Chạm vào từ trong ví dụ để tra nhanh.',
    examples: (l) => l.examples.length + ' câu ví dụ trong bài (ngữ pháp và bài đọc).',
    quiz: (l) => l.quiz.length + ' câu hỏi trắc nghiệm có giải thích.'
  };
  function sectionHtml(l, sec) {
    switch (sec) {
      case 'vocab': return vocabHtml(l);
      case 'pron': return pronHtml(l);
      case 'writing': return writingHtml(l);
      case 'grammar': return grammarHtml(l);
      case 'examples': return examplesHtml(l);
      default: return quizHtml(l);
    }
  }
  function viewLesson(id, secId) {
    const l = byId[id];
    if (!l) {
      app.innerHTML = '<div class="empty card">Không tìm thấy bài này.</div><div class="row-end"><a class="btn" href="#/lessons">Về danh sách bài</a></div>';
      return;
    }
    let sec = secId === 'read' ? 'examples' : secId;
    if (!SECTIONS.some((s) => s.id === sec)) sec = 'vocab';
    markSeen(l.id, sec);
    const seen = db().seen[l.id] || [];
    const idx = LESSONS.indexOf(l);
    const prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
    const isDone = !!db().done[l.id];
    const cur = SECTIONS.find((s) => s.id === sec);
    app.innerHTML =
      '<div class="lesson-layout">' +
        '<aside class="lesson-aside">' +
          '<a class="back-link" href="#/lessons">' + ICONS.chevL + '<span>Danh sách bài</span></a>' +
          '<div class="card lesson-head"><div class="lc-lv">' + esc(H.lessonTitle(l)) + '</div>' +
            '<div class="lesson-hanzi">' + esc(l.zh) + '</div><div class="lesson-vi">' + esc(l.vi) + '</div>' +
            '<div class="bar"><i style="width:' + Math.round(seen.length / SECTIONS.length * 100) + '%"></i></div>' +
            '<div class="small muted" style="margin-top:6px">' + seen.length + '/' + SECTIONS.length + ' phần đã xem</div></div>' +
          '<nav class="side-nav" aria-label="Các phần của bài">' + SECTIONS.map((s) =>
            '<a class="side-link" href="#/lesson/' + esc(l.id) + '/' + s.id + '"' + (s.id === sec ? ' aria-current="page"' : '') + '>' +
            '<span class="sl-ic">' + ICONS[SEC_ICON[s.id]] + '</span><span class="sl-tx">' + esc(H.sectionLabel(l, s)) + '</span>' +
            (seen.indexOf(s.id) >= 0 ? '<span class="sl-dot" aria-label="đã xem"></span>' : '') + '</a>').join('') + '</nav>' +
        '</aside>' +
        '<section class="lesson-main">' +
          '<div class="sec-head"><h2>' + esc(H.sectionLabel(l, cur)) + '</h2><p class="muted">' + esc(SEC_HINT[sec](l)) + '</p></div>' +
          '<div id="sec">' + sectionHtml(l, sec) + '</div>' +
          '<div class="done-bar">' +
            (prev ? '<a class="btn nav-btn" href="#/lesson/' + esc(prev.id) + '/vocab" aria-label="Bài trước" title="Bài trước">' + ICONS.chevL + '<span class="nb-txt">Bài trước</span></a>' : '<span class="nav-btn ghost-slot"></span>') +
            '<button class="btn done-btn ' + (isDone ? 'btn-ok' : 'btn-primary') + '" id="doneBtn" type="button">' + (isDone ? ICONS.check : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>') + '<span>' + (isDone ? 'Đã hoàn thành' : 'Hoàn thành') + '</span></button>' +
            (next ? '<a class="btn nav-btn" href="#/lesson/' + esc(next.id) + '/vocab" aria-label="Bài sau" title="Bài sau"><span class="nb-txt">Bài sau</span>' + ICONS.chevR + '</a>' : '<span class="nav-btn ghost-slot"></span>') +
          '</div>' +
        '</section>' +
      '</div>';
    $('#doneBtn').addEventListener('click', () => {
      if (db().done[l.id]) delete db().done[l.id]; else db().done[l.id] = Date.now();
      H.save(); render();
    });
    bindSection(l, sec);
  }
  function bindSection(l, sec) {
    const toggles = () => {
      const py = $('#sPy'), vi = $('#sVi');
      const target = $('#vlist') || $('#sentList');
      if (!py || !target) return;
      py.addEventListener('change', () => { ui.hidePy = !py.checked; target.classList.toggle('hide-py', ui.hidePy); });
      vi.addEventListener('change', () => { ui.hideVi = !vi.checked; target.classList.toggle('hide-vi', ui.hideVi); });
    };
    toggles();
    if (sec === 'vocab' && l.level === 'PH') {
      H.warmSyllables();
      const mx = $('#mx'); if (mx) H.fillMatrix(mx);
    }
    if (sec === 'writing') {
      H.loadInfo().then((info) => {
        $$('.char-tile').forEach((t) => {
          const o = info[t.getAttribute('data-char')];
          if (o && o.py && o.py[0]) $('.ct-py', t).textContent = o.py[0];
        });
      }).catch(() => { /* chưa có dữ liệu */ });
    }
    if (sec === 'examples') {
      const chips = $('#exChips');
      if (chips) chips.addEventListener('click', (e) => {
        const b = e.target.closest('[data-tag]'); if (!b) return;
        ui.exFilter.tag = b.getAttribute('data-tag');
        const y = window.scrollY; render(); window.scrollTo(0, y);
      });
    }
  }

  /* ---------- trả lời câu hỏi trong bài ---------- */
  function recordAnswer(q, ok) {
    const d = db();
    d.stats.tot += 1; if (ok) d.stats.ok += 1;
    const key = q.q + '|' + q.o.join('/');
    d.wrong = d.wrong.filter((w) => w.key !== key);
    if (!ok) { d.wrong.unshift({ key, q: q.q, o: q.o, a: q.a, exp: q.exp || '' }); d.wrong = d.wrong.slice(0, 60); }
    H.save(); H.touch();
  }
  app.addEventListener('click', (e) => {
    const opt = e.target.closest('.opt[data-lid]');
    if (!opt) return;
    const card = opt.closest('.q-card');
    if (!card || card.getAttribute('data-answered')) return;
    const l = byId[opt.getAttribute('data-lid')];
    const q = l.quiz[Number(opt.getAttribute('data-qi'))];
    const k = Number(opt.getAttribute('data-k'));
    card.setAttribute('data-answered', '1');
    const ok = k === q.a;
    $$('.opt', card).forEach((b, i) => { b.disabled = true; if (i === q.a) b.classList.add('correct'); else if (i === k) b.classList.add('wrong'); });
    const fb = $('.feedback', card);
    fb.hidden = false; fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.textContent = (ok ? 'Chính xác. ' : 'Chưa đúng. ') + (q.exp || '');
    recordAnswer(q, ok);
  });

  /* ======================================================
     FLASHCARD
     ====================================================== */
  let fLv = 'ALL', fLesson = 'ALL', fDir = 'zh';
  let fQueue = [], fIdx = 0, fFlipped = false, fStat = { good: 0, bad: 0 };

  function allCards(lv, lesson) {
    const out = [];
    LESSONS.forEach((l) => {
      if ((lv !== 'ALL' && l.level !== lv) || (lesson !== 'ALL' && l.id !== lesson)) return;
      l.vocab.forEach((v) => out.push({ id: l.id + '|' + v[0], zh: v[0], py: v[1], pos: v[2], vi: v[3], lid: l.id }));
    });
    return out;
  }
  const boxOf = (id) => { const r = db().cards[id]; return r ? r.b : -1; };
  function buildQueue(lv, lesson) {
    const now = Date.now(); const due = [], fresh = [];
    allCards(lv, lesson).forEach((c) => { const r = db().cards[c.id]; if (!r) fresh.push(c); else if (r.d <= now) due.push(c); });
    return shuffle(due).concat(shuffle(fresh));
  }
  function viewFlash() {
    if (!fQueue.length) { fQueue = buildQueue(fLv, fLesson); fIdx = 0; fStat = { good: 0, bad: 0 }; }
    const cards = allCards(fLv, fLesson);
    const mastered = cards.filter((c) => boxOf(c.id) >= 4).length;
    const lessonOpts = '<option value="ALL">Tất cả bài</option>' + LESSONS.filter((l) => l.vocab.length && (fLv === 'ALL' || l.level === fLv))
      .map((l) => '<option value="' + esc(l.id) + '"' + (fLesson === l.id ? ' selected' : '') + '>' + esc(H.lessonTitle(l)) + ' · ' + esc(l.zh) + '</option>').join('');
    app.innerHTML =
      '<h1 class="page-title">Flashcard</h1>' +
      '<p class="page-sub">Lật thẻ rồi tự đánh giá. Thẻ chưa nhớ sẽ quay lại sớm, thẻ đã nhớ giãn dần theo 1, 3, 7, 14 ngày.</p>' +
      '<div class="card fc-settings">' +
        '<div class="seg" id="fLv" role="group" aria-label="Cấp độ"></div>' +
        '<div class="row"><select class="select" id="fLesson" aria-label="Phạm vi bài">' + lessonOpts + '</select>' +
        '<div class="seg" id="fDir" role="group" aria-label="Chiều thẻ"><button type="button" data-d="zh" aria-pressed="' + (fDir === 'zh') + '">Hán → Nghĩa</button><button type="button" data-d="vi" aria-pressed="' + (fDir === 'vi') + '">Nghĩa → Hán</button></div></div>' +
        '<div class="small muted">' + cards.length + ' thẻ · đã thuộc ' + mastered + ' · còn ' + Math.max(0, fQueue.length - fIdx) + ' trong phiên</div>' +
      '</div>' +
      '<div id="stage"></div>';
    $('#fLv').innerHTML = [['ALL', 'Tất cả'], ['HSK1', 'HSK 1'], ['HSK2', 'HSK 2']].map((c) => '<button type="button" data-fl="' + c[0] + '" aria-pressed="' + (fLv === c[0]) + '">' + c[1] + '</button>').join('');
    $('#fLv').addEventListener('click', (e) => { const b = e.target.closest('[data-fl]'); if (!b) return; fLv = b.getAttribute('data-fl'); fLesson = 'ALL'; fQueue = []; viewFlash(); });
    $('#fLesson').addEventListener('change', (e) => { fLesson = e.target.value; fQueue = []; viewFlash(); });
    $('#fDir').addEventListener('click', (e) => { const b = e.target.closest('[data-d]'); if (!b) return; fDir = b.getAttribute('data-d'); fQueue = []; viewFlash(); });
    drawCard();
  }
  function cardFaces(c) {
    const actions = '<div class="f-actions">' + speakBtn(c.zh, 'Nghe ' + c.zh) +
      '<button class="speak tonal" type="button" data-pen="' + esc(c.zh) + '" data-lid="' + esc(c.lid) + '" aria-label="Cách viết">' + ICONS.pen + '</button></div>';
    if (fDir === 'zh') {
      return '<div class="fc-face fc-front"><div class="f-zh">' + esc(c.zh) + '</div><div class="f-hint">Chạm để lật</div></div>' +
        '<div class="fc-face fc-back"><div class="f-zh sm">' + esc(c.zh) + '</div><div class="f-py">' + esc(c.py) + '</div><div class="f-pos">' + esc(c.pos) + '</div><div class="f-vi">' + esc(c.vi) + '</div>' + actions + '</div>';
    }
    return '<div class="fc-face fc-front"><div class="f-vi big">' + esc(c.vi) + '</div><div class="f-pos">' + esc(c.pos) + '</div><div class="f-hint">Chạm để lật</div></div>' +
      '<div class="fc-face fc-back"><div class="f-zh">' + esc(c.zh) + '</div><div class="f-py">' + esc(c.py) + '</div>' + actions + '</div>';
  }
  function drawCard() {
    const stage = $('#stage'); if (!stage) return;
    if (!fQueue.length) { stage.innerHTML = '<div class="empty card">Không có thẻ nào trong phạm vi này.</div>'; return; }
    if (fIdx >= fQueue.length) {
      stage.innerHTML = '<div class="card summary"><div class="sum-ic">' + ICONS.star + '</div><h2>Xong phiên này</h2>' +
        '<p class="muted">Nhớ rồi: <b>' + fStat.good + '</b> · Chưa nhớ: <b>' + fStat.bad + '</b></p>' +
        '<div class="row" style="justify-content:center"><button class="btn btn-primary" type="button" id="fAgain">Phiên mới</button><a class="btn" href="#/review">Làm bài ôn tập</a></div></div>';
      $('#fAgain').addEventListener('click', () => { fQueue = buildQueue(fLv, fLesson); fIdx = 0; fStat = { good: 0, bad: 0 }; viewFlash(); });
      return;
    }
    const c = fQueue[fIdx]; fFlipped = false;
    const pct = Math.round(fIdx / fQueue.length * 100);
    stage.innerHTML =
      '<div class="fc-progress"><div class="bar"><i style="width:' + pct + '%"></i></div><span class="small muted">' + (fIdx + 1) + ' / ' + fQueue.length + '</span></div>' +
      '<div class="fc-wrap" id="fcWrap"><div class="fc" id="fc" role="button" tabindex="0" aria-label="Lật thẻ">' + cardFaces(c) + '</div></div>' +
      '<div class="fc-btns"><button class="btn btn-danger btn-lg" type="button" id="bad" disabled>Chưa nhớ</button><button class="btn btn-ok btn-lg" type="button" id="good" disabled>Nhớ rồi</button></div>' +
      '<p class="muted small center">Vuốt trái = chưa nhớ · vuốt phải = nhớ rồi · phím Space lật thẻ</p>';
    const fc = $('#fc'), wrap = $('#fcWrap');
    let sx = 0, dx = 0, drag = false, moved = false;
    wrap.addEventListener('pointerdown', (e) => { if (!fFlipped || e.target.closest('button')) return; drag = true; moved = false; sx = e.clientX; dx = 0; try { wrap.setPointerCapture(e.pointerId); } catch (x) { /* bỏ qua */ } });
    wrap.addEventListener('pointermove', (e) => {
      if (!drag) return; dx = e.clientX - sx; if (Math.abs(dx) > 8) moved = true;
      fc.style.transition = 'none'; fc.style.transform = 'translateX(' + dx + 'px) rotate(' + dx / 25 + 'deg) rotateY(180deg)';
      fc.classList.toggle('lean-l', dx < -40); fc.classList.toggle('lean-r', dx > 40);
    });
    const end = () => {
      if (!drag) return; drag = false; fc.style.transition = ''; fc.classList.remove('lean-l', 'lean-r');
      if (Math.abs(dx) > 90) rateCard(c, dx > 0); else fc.style.transform = '';
    };
    wrap.addEventListener('pointerup', end); wrap.addEventListener('pointercancel', end);
    fc.addEventListener('click', (e) => { if (e.target.closest('button') || moved) { moved = false; return; } flipCard(c); });
    $('#good').addEventListener('click', () => rateCard(c, true));
    $('#bad').addEventListener('click', () => rateCard(c, false));
  }
  function flipCard(c) {
    const fc = $('#fc'); if (!fc) return;
    fFlipped = !fFlipped; fc.classList.toggle('flipped', fFlipped);
    $('#bad').disabled = !fFlipped; $('#good').disabled = !fFlipped;
    if (fFlipped && fDir === 'zh') H.speak(c.zh);
  }
  function rateCard(c, ok) {
    const now = Date.now();
    const r = db().cards[c.id] || { b: 0, d: 0 };
    if (ok) { r.b = Math.min(r.b + 1, INTERVALS.length - 1); r.d = now + INTERVALS[r.b] * DAY; fStat.good++; }
    else { r.b = 0; r.d = now + 10 * 60000; fQueue.push(c); fStat.bad++; }
    db().cards[c.id] = r; H.save(); H.touch();
    fIdx += 1; drawCard();
  }
  document.addEventListener('keydown', (e) => {
    if (currentView !== 'flash' || e.target.closest('input,select,textarea') || $('#sheet').open) return;
    const c = fQueue[fIdx]; if (!c || !$('#fc')) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(c); }
    else if (fFlipped && e.key === 'ArrowLeft') rateCard(c, false);
    else if (fFlipped && e.key === 'ArrowRight') rateCard(c, true);
  });

  /* ======================================================
     ÔN TẬP
     ====================================================== */
  let rvLv = 'ALL', rvCount = 10, rvState = null;
  function reviewPool(lv) {
    const lessons = LESSONS.filter((l) => lv === 'ALL' || l.level === lv);
    const vocabAll = []; LESSONS.forEach((l) => l.vocab.forEach((v) => vocabAll.push(v)));
    const qs = [];
    lessons.forEach((l) => {
      shuffle(l.vocab.slice()).slice(0, 8).forEach((v) => {
        const d = shuffle(vocabAll.filter((x) => x[0] !== v[0] && x[3] !== v[3])).slice(0, 3);
        if (Math.random() < 0.5) {
          const o = shuffle([v[3]].concat(d.map((x) => x[3])));
          qs.push({ q: 'Từ “' + v[0] + '” (' + v[1] + ') có nghĩa là gì?', o, a: o.indexOf(v[3]) });
        } else {
          const o = shuffle([v[0]].concat(d.map((x) => x[0])));
          qs.push({ q: 'Từ nào có nghĩa là “' + v[3] + '”?', o, a: o.indexOf(v[0]) });
        }
      });
      l.quiz.forEach((q) => qs.push({ q: q.q, o: q.o, a: q.a, exp: q.exp }));
    });
    const wrongKeys = db().wrong.map((w) => w.key);
    const wr = [], rest = [];
    qs.forEach((x) => (wrongKeys.indexOf(x.q + '|' + x.o.join('/')) >= 0 ? wr : rest).push(x));
    return shuffle(wr).slice(0, 3).concat(shuffle(rest));
  }
  function viewReview() {
    app.innerHTML =
      '<h1 class="page-title">Ôn tập</h1>' +
      '<p class="page-sub">Trộn từ mới và câu hỏi ngữ pháp. Câu làm sai sẽ được ưu tiên ở lần sau.</p>' +
      '<div class="card fc-settings"><div class="seg" id="rvLv" role="group" aria-label="Cấp độ"></div>' +
      '<div class="row"><span class="small muted">Số câu:</span><div class="seg" id="rvN" role="group" aria-label="Số câu"></div></div></div>' +
      '<div id="rvBody"></div>';
    $('#rvLv').innerHTML = [['ALL', 'Tất cả'], ['PH', 'Phát âm'], ['HSK1', 'HSK 1'], ['HSK2', 'HSK 2']].map((c) => '<button type="button" data-v="' + c[0] + '" aria-pressed="' + (rvLv === c[0]) + '">' + c[1] + '</button>').join('');
    $('#rvN').innerHTML = [5, 10, 20].map((n) => '<button type="button" data-n="' + n + '" aria-pressed="' + (rvCount === n) + '">' + n + '</button>').join('');
    $('#rvLv').addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (b) { rvLv = b.getAttribute('data-v'); viewReview(); } });
    $('#rvN').addEventListener('click', (e) => { const b = e.target.closest('[data-n]'); if (b) { rvCount = Number(b.getAttribute('data-n')); viewReview(); } });
    startReview();
  }
  function startReview() {
    const pool = reviewPool(rvLv);
    if (!pool.length) { $('#rvBody').innerHTML = '<div class="empty card">Chưa có câu hỏi.</div>'; return; }
    rvState = { items: pool.slice(0, rvCount), i: 0, ok: 0, answered: false, misses: [] };
    drawReview();
  }
  function drawReview() {
    const s = rvState, body = $('#rvBody'); if (!s) return;
    if (s.i >= s.items.length) {
      const pct = Math.round(s.ok / s.items.length * 100);
      body.innerHTML = '<div class="card summary"><div class="muted">Kết quả</div><div class="score-big">' + s.ok + '/' + s.items.length + '</div>' +
        '<p class="muted">' + pct + '% đúng' + (pct >= 80 ? ' — rất tốt!' : ' — ôn lại các câu sai bên dưới.') + '</p>' +
        (s.misses.length ? '<div class="miss-list">' + s.misses.map((m) => '<div class="miss"><b>' + esc(m.q) + '</b><br><span class="ok-txt">' + esc(m.o[m.a]) + '</span></div>').join('') + '</div>' : '') +
        '<div class="row" style="justify-content:center"><button class="btn btn-primary" id="rvAgain" type="button">Làm bộ mới</button></div></div>';
      $('#rvAgain').addEventListener('click', startReview);
      return;
    }
    const q = s.items[s.i]; s.answered = false;
    body.innerHTML = '<div class="fc-progress"><div class="bar"><i style="width:' + Math.round(s.i / s.items.length * 100) + '%"></i></div><span class="small muted">Câu ' + (s.i + 1) + ' / ' + s.items.length + '</span></div>' +
      '<div class="card q-card"><p class="q-text">' + esc(q.q) + '</p><div class="opts">' +
      q.o.map((o, k) => '<button class="opt" type="button" data-k="' + k + '">' + esc(o) + '</button>').join('') + '</div>' +
      '<div class="feedback" id="rvFb" hidden></div><div class="row-end" id="rvNext" hidden><button class="btn btn-primary" id="rvNextBtn" type="button">' + (s.i + 1 === s.items.length ? 'Xem kết quả' : 'Câu tiếp theo') + ICONS.chevR + '</button></div></div>';
    $$('#rvBody .opt').forEach((b) => b.addEventListener('click', () => answerReview(Number(b.getAttribute('data-k')))));
    $('#rvNextBtn').addEventListener('click', () => { s.i += 1; drawReview(); });
  }
  function answerReview(k) {
    const s = rvState; if (!s || s.answered) return;
    const q = s.items[s.i]; s.answered = true;
    const ok = k === q.a;
    if (ok) s.ok += 1; else s.misses.push(q);
    $$('#rvBody .opt').forEach((b, i) => { b.disabled = true; if (i === q.a) b.classList.add('correct'); else if (i === k) b.classList.add('wrong'); });
    const fb = $('#rvFb'); fb.hidden = false; fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    fb.textContent = ok ? 'Chính xác!' : 'Đáp án đúng: ' + q.o[q.a] + (q.exp ? '. ' + q.exp : '');
    $('#rvNext').hidden = false;
    recordAnswer({ q: q.q, o: q.o, a: q.a, exp: q.exp || '' }, ok);
  }

  /* ======================================================
     TIẾN ĐỘ
     ====================================================== */
  const DOW = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  function viewProgress() {
    const total = LESSONS.length;
    const doneN = LESSONS.filter((l) => db().done[l.id]).length;
    const totalSec = total * SECTIONS.length;
    const seenSec = LESSONS.reduce((a, l) => a + (db().seen[l.id] || []).length, 0);
    const cards = allCards('ALL', 'ALL');
    const mastered = cards.filter((c) => boxOf(c.id) >= 4).length;
    const learning = cards.filter((c) => { const b = boxOf(c.id); return b >= 0 && b < 4; }).length;
    const acc = db().stats.tot ? Math.round(db().stats.ok / db().stats.tot * 100) : 0;
    const practiced = Object.keys(db().writing).length;
    const week = H.last7(); const maxN = Math.max(1, ...week.map((d) => d.n));
    const lvRows = ['PH', 'HSK1', 'HSK2'].map((lv) => {
      const ls = LESSONS.filter((l) => l.level === lv);
      const d = ls.filter((l) => db().done[l.id]).length;
      const pct = ls.length ? Math.round(d / ls.length * 100) : 0;
      return '<div class="lvl-row"><div class="row" style="justify-content:space-between"><b>' + LEVELS[lv] + '</b><span class="small muted">' + d + ' / ' + ls.length + ' bài</span></div><div class="bar"><i style="width:' + pct + '%"></i></div></div>';
    }).join('');
    const theme = H.getThemePref();
    app.innerHTML =
      '<h1 class="page-title">Tiến độ</h1>' +
      '<p class="page-sub">Dữ liệu lưu trên trình duyệt này. Xóa dữ liệu trình duyệt sẽ mất tiến độ.</p>' +
      '<div class="prog-top card"><div class="pt-ring">' + ring(total ? Math.round(doneN / total * 100) : 0, 112) + '<div class="small muted center">Bài hoàn thành</div></div>' +
        '<div class="stat-grid">' +
          '<div class="stat"><span class="st-ic flame">' + ICONS.flame + '</span><b>' + H.streak() + '</b><span>ngày liên tiếp</span></div>' +
          '<div class="stat"><span class="st-ic">' + ICONS.pen + '</span><b>' + practiced + '</b><span>chữ đã luyện viết</span></div>' +
          '<div class="stat"><span class="st-ic">' + ICONS.cards + '</span><b>' + mastered + '</b><span>thẻ đã thuộc</span></div>' +
          '<div class="stat"><span class="st-ic">' + ICONS.check + '</span><b>' + acc + '%</b><span>đúng (' + db().stats.tot + ' câu)</span></div>' +
        '</div></div>' +
      '<h2 class="section-title">7 ngày gần nhất</h2>' +
      '<div class="card week">' + week.map((d) => '<div class="wk"><div class="wk-bar"><i style="height:' + Math.round(d.n / maxN * 100) + '%"></i></div><span>' + DOW[d.d] + '</span></div>').join('') + '</div>' +
      '<h2 class="section-title">Theo cấp độ</h2><div class="card" style="padding:4px 16px">' + lvRows + '</div>' +
      '<h2 class="section-title">Chi tiết</h2><div class="card" style="padding:14px 16px"><p style="margin:0">Phần đã xem: <b>' + seenSec + '/' + totalSec + '</b> · Thẻ đang học: <b>' + learning + '</b> · Đã thuộc: <b>' + mastered + '/' + cards.length + '</b></p></div>' +
      '<h2 class="section-title">Giao diện</h2><div class="seg" id="themeSeg" role="group" aria-label="Giao diện">' +
        [['auto', 'Tự động'], ['light', 'Sáng'], ['dark', 'Tối']].map((t) => '<button type="button" data-theme="' + t[0] + '" aria-pressed="' + (theme === t[0]) + '">' + t[1] + '</button>').join('') + '</div>' +
      '<h2 class="section-title">Dữ liệu</h2><div class="row"><button class="btn btn-danger" id="resetBtn" type="button">Xóa tiến độ</button></div>' +
      '<p class="muted small" style="margin-top:22px">Dữ liệu nét chữ và bộ thủ: Make Me a Hanzi (Arphic Public License). Thư viện viết chữ: Hanzi Writer (MIT). Font chữ Hán: AR PL UKai (Arphic Public License), LXGW WenKai (SIL OFL).</p>';
    $('#themeSeg').addEventListener('click', (e) => { const b = e.target.closest('[data-theme]'); if (b) { H.applyTheme(b.getAttribute('data-theme')); paintThemeBtn(); viewProgress(); } });
    const rb = $('#resetBtn'); let armed = false;
    rb.addEventListener('click', () => {
      if (!armed) { armed = true; rb.textContent = 'Bấm lần nữa để xóa'; return; }
      H.resetDb(); fQueue = []; fIdx = 0; rvState = null; viewProgress();
    });
  }

  /* ======================================================
     SỰ KIỆN CHUNG: popup từ, bảng chữ, phát âm
     ====================================================== */
  document.addEventListener('click', (e) => {
    const say = e.target.closest('[data-say]');
    if (say) { H.speak(say.getAttribute('data-say'), say.hasAttribute('data-slow') ? 0.65 : undefined); return; }
    const syl = e.target.closest('[data-syl]');
    if (syl) {
      syl.classList.add('playing'); setTimeout(() => syl.classList.remove('playing'), 700);
      H.speakPinyin(syl.getAttribute('data-syl'));
      return;
    }
    const base = e.target.closest('[data-base]');
    if (base) { H.openSyllable(base.getAttribute('data-base')); return; }
    if (e.target.closest('#sheet')) return; // sheet tự xử lý
    const tok = e.target.closest('[data-word]');
    if (tok) { H.openWord(tok.getAttribute('data-word'), tok.getAttribute('data-lid') || null); return; }
    const pen = e.target.closest('[data-pen]');
    if (pen) {
      const list = Array.from(pen.getAttribute('data-pen')).filter(H.isHan);
      if (list.length) H.openChar(list[0], { list, lid: pen.getAttribute('data-lid') || null });
      return;
    }
    const tile = e.target.closest('.char-tile');
    if (tile) {
      const grid = tile.closest('.char-grid');
      const list = $$('.char-tile', grid).map((t) => t.getAttribute('data-char'));
      H.openChar(tile.getAttribute('data-char'), { list, lid: grid.getAttribute('data-lid') || null });
    }
  });

  /* ---------- nút theme + cài PWA ---------- */
  const themeBtn = $('#themeBtn');
  function paintThemeBtn() {
    const dark = H.themeIsDark();
    themeBtn.innerHTML = dark ? ICONS.sun : ICONS.moon;
    themeBtn.setAttribute('aria-label', dark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
    themeBtn.setAttribute('title', dark ? 'Giao diện sáng' : 'Giao diện tối');
  }
  themeBtn.addEventListener('click', () => { H.applyTheme(H.themeIsDark() ? 'light' : 'dark'); paintThemeBtn(); });
  paintThemeBtn();

  const installBtn = $('#installBtn');
  const dlg = $('#dlg');
  let deferredPrompt = null;
  const isStandalone = () => (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  const refreshInstall = () => { installBtn.hidden = isStandalone(); };
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; refreshInstall(); });
  window.addEventListener('appinstalled', () => { deferredPrompt = null; installBtn.hidden = true; });
  function instructionsHtml() {
    if (/iphone|ipad|ipod/i.test(navigator.userAgent || '')) {
      return '<ol><li>Mở trang này bằng <b>Safari</b>.</li><li>Chạm nút <b>Chia sẻ</b> (ô vuông có mũi tên).</li><li>Chọn <b>Thêm vào Màn hình chính</b>.</li></ol>';
    }
    return '<ol><li>Mở menu của trình duyệt (⋮ hoặc biểu tượng cài đặt trên thanh địa chỉ).</li><li>Chọn <b>Cài đặt ứng dụng</b> hoặc <b>Install app</b>.</li><li>Xác nhận. Ứng dụng sẽ có biểu tượng riêng trên máy.</li></ol>';
  }
  installBtn.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => { deferredPrompt = null; refreshInstall(); }, () => { deferredPrompt = null; });
      return;
    }
    $('#dlgText').innerHTML = instructionsHtml();
    dlg.showModal();
  });
  $('#dlgClose').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  refreshInstall();

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    // Có bản mới thì tải lại một lần để người dùng thấy ngay (chỉ khi trước đó đã có service worker).
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadController && !reloaded) { reloaded = true; location.reload(); }
    });
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { /* offline không bắt buộc */ }); });
  }

  /* ---------- khởi động ---------- */
  if (!location.hash) history.replaceState(null, '', '#/lessons');
  route();
})();
