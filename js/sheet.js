/* HSK App — sheet (popup): tra nhanh từ vựng và bảng cách viết chữ Hán (xem nét, luyện viết). */
(function () {
  'use strict';
  const H = window.HSK;
  const { $, esc, ICONS } = H;

  const dlg = document.getElementById('sheet');
  const box = document.getElementById('sheetBody');
  let stack = [];
  let writer = null;
  let quizOn = false;
  let seq = 0; // chống chạy lại khi chuyển chữ nhanh

  /* ---------- tiện ích ---------- */
  const hvLabel = (hv) => (hv ? '<span class="hv">· ' + esc(hv.toUpperCase()) + '</span>' : '');
  const dash = (s) => String(s || '').replace(': ', ' – ');
  const hz = (c) => '<span class="hz">' + esc(c) + '</span>';
  const speakBtn = (text, label) =>
    '<button class="speak" type="button" data-say="' + esc(text) + '" aria-label="' + esc(label || 'Nghe') + '">' + ICONS.speaker + '</button>';

  const header = (title) =>
    '<div class="sh-bar">' +
      (stack.length > 1
        ? '<button class="iconbtn" type="button" data-act="back" aria-label="Quay lại">' + ICONS.chevL + '</button>'
        : '<span class="sh-spacer"></span>') +
      '<div class="sh-title">' + esc(title) + '</div>' +
      '<button class="iconbtn" type="button" data-act="close" aria-label="Đóng">' + ICONS.close + '</button>' +
    '</div>';

  /* ---------- hiển thị ---------- */
  function destroyWriter() {
    seq++;
    if (writer) { try { if (quizOn) writer.cancelQuiz(); } catch (e) { /* bỏ qua */ } }
    writer = null; quizOn = false;
  }
  function render() {
    destroyWriter();
    const top = stack[stack.length - 1];
    if (!top) return;
    box.innerHTML = top.kind === 'word' ? wordHtml(top) : charHtml(top);
    if (!dlg.open) dlg.showModal();
    box.scrollTop = 0;
    const body = $('.sh-body', box); if (body) body.scrollTop = 0;
    if (top.kind === 'word') afterWord(top); else afterChar(top);
  }
  H.openWord = (zh, lid) => { stack.push({ kind: 'word', zh, lid: lid || null }); render(); };
  H.openChar = (ch, ctx) => { stack.push({ kind: 'char', ch, ctx: ctx || { list: [ch] } }); render(); };
  H.closeSheet = () => { if (dlg.open) dlg.close(); };

  /* ---------- popup từ vựng ---------- */
  function wordHtml(top) {
    const e = H.lookup(top.zh, top.lid);
    const lesson = e && e.lid ? H.byId[e.lid] : null;
    const chars = Array.from(top.zh).filter(H.isHan);
    let out = header('Tra nhanh từ vựng') + '<div class="sh-body">';
    out += '<div class="w-head"><div class="w-zh">' + esc(top.zh) + '</div>' +
      '<div class="w-meta">' +
        (e ? '<div class="w-py">' + esc(e.py) + '</div><span class="v-pos">' + esc(e.pos) + '</span>' : '<div class="w-py muted">Chưa có trong từ điển bài</div>') +
      '</div>' + speakBtn(top.zh, 'Nghe ' + top.zh) + '</div>';
    if (e) out += '<p class="w-vi">' + esc(e.vi) + '</p>';
    out += '<div class="sh-sec"><h3>Cách viết</h3><div class="char-chips">' +
      chars.map((c) => '<button type="button" class="char-chip" data-char="' + esc(c) + '"><span class="ci-zh">' + esc(c) + '</span><span class="ci-py"></span></button>').join('') +
      '</div></div>';
    if (lesson) {
      out += '<div class="sh-sec"><h3>Có trong bài</h3><a class="lesson-link" href="#/lesson/' + esc(lesson.id) + '/vocab" data-act="close">' +
        '<span class="num sm' + (lesson.level === 'PH' ? ' ph' : lesson.level === 'HSK2' ? ' h2' : '') + '">' + esc(H.lessonTag(lesson)) + '</span>' +
        '<span><b>' + esc(H.lessonTitle(lesson)) + '</b><br><span class="muted small">' + esc(lesson.zh) + '</span></span></a></div>';
    }
    const sents = H.allSentences.filter((s) => s.zh.indexOf(top.zh) >= 0)
      .sort((a, b) => (b.lid === top.lid) - (a.lid === top.lid)).slice(0, 3);
    if (sents.length) {
      out += '<div class="sh-sec"><h3>Câu có từ này</h3>' + sents.map((s) => {
        const z = esc(s.zh).split(esc(top.zh)).join('<mark>' + esc(top.zh) + '</mark>');
        return '<div class="mini-sent"><div><div class="ms-zh">' + z + '</div>' +
          (s.py ? '<div class="ms-py">' + esc(s.py) + '</div>' : '') +
          '<div class="ms-vi">' + esc(s.vi) + '</div></div>' + speakBtn(s.zh, 'Nghe câu') + '</div>';
      }).join('') + '</div>';
    }
    return out + '</div>';
  }
  function afterWord() {
    H.loadInfo().then((info) => {
      H.$$('.char-chip', box).forEach((b) => {
        const i = info[b.getAttribute('data-char')];
        const py = i && i.py && i.py[0];
        if (py) $('.ci-py', b).textContent = py;
      });
    }).catch(() => { /* chưa có dữ liệu chữ */ });
  }

  /* ---------- bảng cách viết ---------- */
  function charHtml(top) {
    return header('Cách viết & bộ thủ') + '<div class="sh-body">' +
      '<div class="cs">' +
        '<div class="cs-stage"><div class="writer-grid" id="wgrid">' +
          '<svg class="grid-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
            '<line x1="50" y1="0" x2="50" y2="100"/><line x1="0" y1="50" x2="100" y2="50"/>' +
            '<line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>' +
          '<div id="wbox"></div></div>' +
          '<div class="w-status" id="wStatus" aria-live="polite">Đang tải nét chữ…</div></div>' +
        '<div class="cs-info" id="csInfo"><div class="skel"></div><div class="skel s2"></div><div class="skel s3"></div></div>' +
      '</div>' +
      '<div class="cs-actions">' +
        '<button class="btn btn-tonal" type="button" data-act="animate">' + ICONS.play + '<span>Xem nét viết</span></button>' +
        '<button class="btn btn-primary" type="button" data-act="quiz">' + ICONS.pen + '<span>Luyện viết</span></button>' +
        '<button class="btn btn-tonal" type="button" data-say="' + esc(top.ch) + '">' + ICONS.speaker + '<span>Nghe</span></button>' +
      '</div>' +
      '<div class="cs-tools">' +
        '<label class="switch"><input type="checkbox" id="tOutline" checked><span class="sw-track"></span><span>Gợi ý nét mờ</span></label>' +
        '<button class="btn btn-ghost btn-sm" type="button" data-act="reset">' + ICONS.replay + '<span>Làm lại</span></button>' +
      '</div>' +
      '<div id="csMore"></div>' +
      '<div class="cs-nav" id="csNav"></div>' +
    '</div>';
  }

  function infoRows(ch, info) {
    const o = info[ch] || {};
    const py = (o.py && o.py.length) ? o.py.join(' / ') : '';
    let out = '<div class="cs-line1"><span class="cs-zh">' + esc(ch) + '</span><b class="cs-py">' + esc(py) + '</b>' + hvLabel(o.hv) + '</div><dl class="cs-dl">';
    if (o.r) out += '<dt>Bộ thủ:</dt><dd>' + hz(o.r) + ' ' + esc(dash(o.rv || o.rp || '')) + '</dd>';
    out += '<dt>Số nét:</dt><dd><b>' + (o.n || '—') + '</b></dd>';
    if (o.t) out += '<dt>Loại:</dt><dd><b>' + esc(o.t) + '</b></dd>';
    if (o.c && o.c.length) {
      out += '<dt>Thành phần:</dt><dd>' + o.c.map((x) => {
        const label = x.role === 'phonetic' ? (x.py || '') : (x.vi || x.py || '');
        return hz(x.c) + (label ? ' (' + esc(label) + ')' : '');
      }).join(', ') + '</dd>';
    }
    return out + '</dl>';
  }

  function moreHtml(top) {
    const ch = top.ch; const ctx = top.ctx || {};
    const lesson = ctx.lid ? H.byId[ctx.lid] : null;
    let out = '';
    if (lesson) {
      const item = lesson.writing.find((w) => w.zh === ch || (w.zh.indexOf(ch) >= 0 && w.zh.length <= 4));
      const pc = lesson.chars.find((c) => c.zh === ch);
      if (pc) {
        out += '<div class="sh-sec"><h3>Thứ tự nét</h3><div class="ord">' +
          pc.strokes.map((s, i) => '<span class="ord-i"><i>' + (i + 1) + '</i>' + esc(s.name) + '</span>').join('') +
          '</div><p class="small muted" style="margin:8px 0 0">' + esc(pc.note) + '</p></div>';
      } else if (item) {
        out += '<div class="sh-sec"><h3>Mẹo nhớ</h3><p style="margin:0">' + esc(item.note) + '</p></div>';
      }
    }
    // Từ có chữ này
    const seen = new Set(); const words = [];
    H.LESSONS.forEach((l) => l.vocab.forEach((v) => {
      if (v[0].indexOf(ch) >= 0 && !seen.has(v[0])) { seen.add(v[0]); words.push({ zh: v[0], vi: v[3], lid: l.id }); }
    }));
    if (words.length) {
      out += '<div class="sh-sec"><h3>Từ có chữ này</h3><div class="word-chips">' +
        words.slice(0, 8).map((w) => '<button type="button" class="word-chip" data-word="' + esc(w.zh) + '" data-lid="' + esc(w.lid) + '"><span class="wc-zh">' + esc(w.zh) + '</span><span class="wc-vi">' + esc(w.vi) + '</span></button>').join('') +
        '</div></div>';
    }
    return out;
  }

  function navHtml(top) {
    const list = (top.ctx && top.ctx.list) || [top.ch];
    const i = list.indexOf(top.ch);
    if (list.length < 2 || i < 0) return '';
    const prev = list[(i - 1 + list.length) % list.length];
    const next = list[(i + 1) % list.length];
    return '<button class="btn btn-ghost" type="button" data-act="nav" data-ch="' + esc(prev) + '">' + ICONS.chevL + '<span class="nv-zh">' + esc(prev) + '</span></button>' +
      '<span class="muted small">' + (i + 1) + ' / ' + list.length + ' chữ</span>' +
      '<button class="btn btn-ghost" type="button" data-act="nav" data-ch="' + esc(next) + '"><span class="nv-zh">' + esc(next) + '</span>' + ICONS.chevR + '</button>';
  }

  const status = (t) => { const el = $('#wStatus', box); if (el) el.textContent = t; };

  function afterChar(top) {
    const my = seq;
    const ch = top.ch;
    $('#csMore', box).innerHTML = moreHtml(top);
    $('#csNav', box).innerHTML = navHtml(top);
    H.loadInfo().then((info) => { if (my === seq) $('#csInfo', box).innerHTML = infoRows(ch, info); })
      .catch(() => { if (my === seq) $('#csInfo', box).innerHTML = '<div class="cs-line1"><span class="cs-zh">' + esc(ch) + '</span></div><p class="muted small">Chưa tải được thông tin chữ (cần mạng ở lần đầu).</p>'; });
    H.loadStrokes().then((data) => {
      if (my !== seq) return;
      if (!window.HanziWriter) { status('Không tải được thư viện viết chữ.'); return; }
      if (!data[ch]) { status('Chữ này chưa có dữ liệu nét.'); return; }
      const grid = $('#wgrid', box);
      const size = Math.max(180, Math.min(300, Math.floor(grid.clientWidth) || 260));
      const wbox = $('#wbox', box);
      wbox.style.width = size + 'px'; wbox.style.height = size + 'px';
      const cs = getComputedStyle(document.documentElement);
      const col = (n) => cs.getPropertyValue(n).trim();
      writer = window.HanziWriter.create(wbox, ch, {
        width: size, height: size, padding: 14,
        showOutline: true, showCharacter: true,
        strokeAnimationSpeed: 1.3, delayBetweenStrokes: 280,
        strokeColor: col('--ink'), radicalColor: col('--seal'),
        outlineColor: col('--outline'), highlightColor: col('--accent'), drawingColor: col('--accent'),
        drawingWidth: 16, showHintAfterMisses: 2, highlightOnComplete: true, leniency: 1.2,
        charDataLoader: (c, ok, err) => { if (data[c]) ok(data[c]); else err(); }
      });
      status('Nhấn “Xem nét viết” để xem thứ tự, hoặc “Luyện viết” để tự viết.');
    }).catch(() => status('Không tải được dữ liệu nét chữ. Hãy kết nối mạng ở lần đầu mở.'));
  }

  /* ---------- hành động trong bảng chữ ---------- */
  function stopQuiz() { if (writer && quizOn) { try { writer.cancelQuiz(); } catch (e) { /* bỏ qua */ } quizOn = false; } }
  function doAnimate() {
    if (!writer) return;
    stopQuiz();
    writer.showCharacter(); writer.showOutline();
    status('Đang vẽ thứ tự nét…');
    writer.animateCharacter({ onComplete: () => status('Xong. Nhấn “Luyện viết” để tự viết lại.') });
  }
  function doQuiz(top) {
    if (!writer) return;
    stopQuiz();
    H.loadStrokes().then((data) => {
      const n = data[top.ch] ? data[top.ch].strokes.length : 0;
      quizOn = true;
      status('Viết nét 1/' + n + '. Vẽ bằng ngón tay hoặc chuột, đúng thứ tự nét.');
      writer.quiz({
        onCorrectStroke: (d) => {
          if (d.strokesRemaining > 0) status('Đúng. Tiếp theo: nét ' + (d.strokeNum + 2) + '/' + n);
        },
        onMistake: (d) => status('Chưa đúng ở nét ' + (d.strokeNum + 1) + '. Thử lại (số lỗi: ' + d.totalMistakes + ').'),
        onComplete: (s) => {
          quizOn = false;
          const db = H.db();
          const prev = db.writing[top.ch] || { n: 0 };
          db.writing[top.ch] = { n: (prev.n || 0) + 1, best: Math.min(prev.best == null ? 99 : prev.best, s.totalMistakes), ts: Date.now() };
          H.save(); H.touch();
          status(s.totalMistakes === 0 ? 'Hoàn hảo! Không sai nét nào.' : 'Hoàn thành. Số lỗi: ' + s.totalMistakes + '. Thử lại để viết sạch hơn.');
        }
      });
    });
  }

  box.addEventListener('click', (e) => {
    const top = stack[stack.length - 1];
    const act = e.target.closest('[data-act]');
    if (act) {
      const a = act.getAttribute('data-act');
      if (a === 'close') { H.closeSheet(); return; }
      if (a === 'back') { stack.pop(); render(); return; }
      if (a === 'animate') { doAnimate(); return; }
      if (a === 'quiz') { doQuiz(top); return; }
      if (a === 'reset') { if (writer) { stopQuiz(); writer.showCharacter(); writer.showOutline(); status('Đã làm lại. Chọn “Xem nét viết” hoặc “Luyện viết”.'); } return; }
      if (a === 'nav') { top.ch = act.getAttribute('data-ch'); render(); return; }
    }
    const ci = e.target.closest('.char-chip');
    if (ci) {
      const ch = ci.getAttribute('data-char');
      const list = Array.from(top.zh).filter(H.isHan);
      H.openChar(ch, { list, lid: top.lid });
      return;
    }
    const wc = e.target.closest('.word-chip');
    if (wc) { H.openWord(wc.getAttribute('data-word'), wc.getAttribute('data-lid')); return; }
  });
  box.addEventListener('change', (e) => {
    if (e.target.id === 'tOutline' && writer) {
      if (e.target.checked) writer.showOutline(); else writer.hideOutline();
    }
  });

  dlg.addEventListener('click', (e) => { if (e.target === dlg) H.closeSheet(); });
  dlg.addEventListener('close', () => {
    destroyWriter();
    stack = [];
    box.innerHTML = '';
    if (typeof H.afterSheet === 'function') H.afterSheet();
  });
})();
