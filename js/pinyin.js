/* HSK App — phát âm: bảng ghép thanh mẫu × vận mẫu, thanh điệu, giọng đọc từng âm tiết. */
(function () {
  'use strict';
  const H = window.HSK;
  const { esc, ICONS, byId } = H;

  /* ---------- dấu thanh ---------- */
  const MARK = {
    a: ['ā', 'á', 'ǎ', 'à'], e: ['ē', 'é', 'ě', 'è'], i: ['ī', 'í', 'ǐ', 'ì'],
    o: ['ō', 'ó', 'ǒ', 'ò'], u: ['ū', 'ú', 'ǔ', 'ù'], 'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
  };
  const UNMARK = {};
  Object.keys(MARK).forEach((b) => MARK[b].forEach((c, i) => { UNMARK[c] = [b, i + 1]; }));

  H.parsePinyin = (py) => {
    let tone = 5, base = '';
    for (const c of String(py).toLowerCase()) {
      if (UNMARK[c]) { base += UNMARK[c][0]; tone = UNMARK[c][1]; } else base += c;
    }
    return { base: base.replace(/v/g, 'ü'), tone };
  };
  // Gắn dấu thanh theo quy tắc: a > e > o (trong ou) > nguyên âm cuối (iu → u, ui → i)
  H.addTone = (base, tone) => {
    if (!tone || tone > 4) return base;
    const idx = base.indexOf('a') >= 0 ? base.indexOf('a')
      : base.indexOf('e') >= 0 ? base.indexOf('e')
      : base.indexOf('ou') >= 0 ? base.indexOf('o')
      : (() => { let k = -1; for (let j = 0; j < base.length; j++) if (MARK[base[j]]) k = j; return k; })();
    if (idx < 0) return base;
    return base.slice(0, idx) + MARK[base[idx]][tone - 1] + base.slice(idx + 1);
  };

  /* ---------- dữ liệu âm tiết ---------- */
  let synP = null; let SYL = null;
  H.loadSyllables = () => {
    if (!synP) {
      synP = fetch('data/syllables.json').then((r) => { if (!r.ok) throw new Error('syl'); return r.json(); })
        .then((d) => { SYL = d; return d; }).catch((e) => { synP = null; throw e; });
    }
    return synP;
  };
  H.syllables = () => SYL;
  // Chữ mẫu cho một âm tiết có dấu (vd. "bā" -> 八). Thiếu đúng thanh thì lấy thanh khác.
  H.syllableChar = (py) => {
    if (!SYL) return '';
    const { base, tone } = H.parsePinyin(py);
    const arr = SYL[base]; if (!arr) return '';
    return (tone >= 1 && tone <= 4 && arr[tone - 1]) || arr.find(Boolean) || '';
  };
  H.speakPinyin = (text, rate) => {
    H.loadSyllables().then(() => {
      const parts = String(text).trim().split(/\s+/);
      const chars = parts.map((p) => H.syllableChar(p)).filter(Boolean);
      if (chars.length) H.speak(chars.join(''), rate || 0.7);
    }).catch(() => { /* chưa nạp được dữ liệu */ });
  };

  /* ---------- ghép thanh mẫu + vận mẫu ---------- */
  const ZERO = {
    i: 'yi', in: 'yin', ing: 'ying', ia: 'ya', ie: 'ye', iao: 'yao', iu: 'you', ian: 'yan', iang: 'yang', iong: 'yong',
    u: 'wu', ua: 'wa', uo: 'wo', uai: 'wai', ui: 'wei', uan: 'wan', un: 'wen', uang: 'wang', ueng: 'weng',
    'ü': 'yu', 'üe': 'yue', 'üan': 'yuan', 'ün': 'yun'
  };
  const RETRO = /^(zh|ch|sh|r|z|c|s)$/;
  H.compose = (ini, fin) => {
    if (!ini) return fin === '-i' ? null : (ZERO[fin] || fin);
    if (fin === '-i') return RETRO.test(ini) ? ini + 'i' : null;
    if (fin === 'i' && RETRO.test(ini)) return null;
    let f = fin;
    if (/^[jqx]$/.test(ini)) f = f.replace('ü', 'u');
    return ini + f;
  };

  // Âm tiết mẫu để nghe riêng thanh mẫu / vận mẫu
  const INIT_SAMPLE = { b: 'bō', p: 'pō', m: 'mō', f: 'fó', d: 'dé', t: 'tè', n: 'nè', l: 'lè', g: 'gē', k: 'kē', h: 'hē', j: 'jī', q: 'qī', x: 'xī', zh: 'zhī', ch: 'chī', sh: 'shī', r: 'rì', z: 'zī', c: 'cī', s: 'sī' };
  const FINAL_SAMPLE = {
    a: 'ā', o: 'ō', e: 'ē', i: 'yī', u: 'wū', 'ü': 'yū', ai: 'āi', ei: 'ēi', ao: 'āo', ou: 'ōu', an: 'ān', en: 'ēn', ang: 'āng',
    eng: 'fēng', ong: 'dōng', ia: 'yā', ie: 'yē', iao: 'yāo', iu: 'yōu', ian: 'yān', in: 'yīn', iang: 'yāng', ing: 'yīng', iong: 'yōng',
    'üe': 'yuē', 'üan': 'yuān', 'ün': 'yūn', '-i': 'zhī', ua: 'wā', uo: 'wō', uai: 'wāi', ui: 'wēi', uan: 'wān', un: 'wēn',
    uang: 'wāng', ueng: 'wēng', er: 'ér'
  };

  // Các bài phát âm theo thứ tự, và tập thanh mẫu / vận mẫu tích lũy đến một bài
  const phLessons = () => H.LESSONS.filter((l) => l.level === 'PH' && l.sound);
  H.soundUpTo = (l) => {
    const inits = [], finals = [];
    for (const x of phLessons()) {
      x.sound.inits.forEach((i) => inits.push(i));
      x.sound.finals.forEach((f) => finals.push(f));
      if (x.id === l.id) break;
    }
    return { inits, finals };
  };

  /* ---------- HTML các khối ---------- */
  const chip = (main, sub, py, cls) =>
    '<button type="button" class="snd-chip ' + (cls || '') + '" data-syl="' + esc(py) + '"><b>' + esc(main) + '</b><small>' + esc(py) + '</small></button>';

  H.voiceNoteHtml = () => {
    const v = H.hasZhVoice();
    if (v === false) {
      return '<div class="voice-note">' + ICONS.speaker + '<span>Thiết bị chưa có giọng đọc tiếng Trung nên chưa phát âm được. Hãy cài giọng “Chinese (zh-CN)” trong phần Giọng nói của hệ điều hành.</span></div>';
    }
    return '';
  };

  H.soundHtml = (l) => {
    const s = l.sound;
    let out = H.voiceNoteHtml();
    out += '<div class="card snd-card"><h3 class="blk-h">Thanh mẫu mới</h3><p class="muted small snd-sub">Chạm để nghe. Mỗi thanh mẫu đọc kèm một vận mẫu để dễ nghe.</p><div class="snd-row">' +
      s.inits.map((i) => chip(i, '', INIT_SAMPLE[i] || i, 'ini')).join('') + '</div></div>';
    out += '<div class="card snd-card"><h3 class="blk-h">Vận mẫu mới</h3><div class="snd-row">' +
      s.finals.map((f) => chip(f, '', FINAL_SAMPLE[f] || f, 'fin')).join('') + '</div>' +
      '<div class="rules"><h4>Quy tắc viết</h4><p class="muted small" style="margin:0 0 8px">' + esc(s.ruleNote || '') + '</p><div class="rule-row">' +
      s.rules.map((r) => '<span class="rule"><b>' + esc(r[0]) + '</b><i>→</i><b>' + esc(r[1]) + '</b></span>').join('') + '</div></div></div>';
    if (s.tones) out += tonesHtml();
    out += '<div class="card snd-card"><h3 class="blk-h">Bảng ghép thanh mẫu và vận mẫu</h3>' +
      '<p class="muted small snd-sub">Hàng là thanh mẫu, cột là vận mẫu. Chạm vào một ô để nghe cả 4 thanh của âm tiết đó. Từ buổi 2, hàng và cột mới của buổi đó được tô nổi bật.</p>' +
      '<div class="mx-wrap" id="mx" data-lid="' + esc(l.id) + '"><div class="skel"></div><div class="skel s2"></div></div></div>';
    return out;
  };

  const CONTOUR = {
    1: 'M4 7 L36 7', 2: 'M4 19 L36 7', 3: 'M4 11 Q16 30 36 8', 4: 'M4 6 L36 26'
  };
  const TONE_NAME = { 1: 'Thanh 1 · ngang', 2: 'Thanh 2 · lên', 3: 'Thanh 3 · xuống rồi lên', 4: 'Thanh 4 · xuống' };
  function tonesHtml() {
    return '<div class="card snd-card"><h3 class="blk-h">Bốn thanh điệu</h3><p class="muted small snd-sub">Chạm từng thanh để nghe. Đường kẻ cho thấy cao độ của giọng.</p>' +
      '<div class="tone-grid" id="toneGrid">' + [1, 2, 3, 4].map((t) =>
        '<button type="button" class="tone-btn" data-syl="' + esc(H.addTone('ma', t)) + '"><svg viewBox="0 0 40 32" aria-hidden="true"><path d="' + CONTOUR[t] + '" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>' +
        '<b>' + esc(H.addTone('ma', t)) + '</b><small>' + esc(TONE_NAME[t]) + '</small></button>').join('') + '</div></div>';
  }
  H.toneContour = (t) => '<svg viewBox="0 0 40 32" aria-hidden="true"><path d="' + CONTOUR[t] + '" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>';
  H.toneName = (t) => TONE_NAME[t];

  // Vẽ bảng ma trận vào #mx (sau khi nạp dữ liệu âm tiết)
  H.fillMatrix = (root) => {
    const l = byId[root.getAttribute('data-lid')]; if (!l) return;
    H.loadSyllables().then((syl) => {
      const all = H.soundUpTo(l);
      // Chỉ tô nổi bật phần mới khi bảng có cả phần đã học từ các buổi trước
      const hasPrev = all.inits.length > l.sound.inits.length || all.finals.length > l.sound.finals.length;
      const newIni = new Set(hasPrev ? l.sound.inits : []), newFin = new Set(hasPrev ? l.sound.finals : []);
      const cell = (ini, fin) => {
        const b = H.compose(ini, fin);
        const hl = (newIni.has(ini) || newFin.has(fin)) ? ' hl' : '';
        if (b && syl[b]) return '<td><button type="button" class="mx-cell' + hl + '" data-base="' + esc(b) + '">' + esc(b) + '</button></td>';
        return '<td class="mx-empty"></td>';
      };
      const head = '<tr><th class="mx-corner"><span>Thanh mẫu ↓</span><span>Vận mẫu →</span></th>' +
        all.finals.map((f) => '<th class="' + (newFin.has(f) ? 'new' : '') + '">' + esc(f) + '</th>').join('') + '</tr>';
      const rows = all.inits.map((i) => '<tr><th class="' + (newIni.has(i) ? 'new' : '') + '">' + esc(i) + '</th>' + all.finals.map((f) => cell(i, f)).join('') + '</tr>').join('');
      const zero = '<tr><th class="zero">y · w</th>' + all.finals.map((f) => cell('', f)).join('') + '</tr>';
      root.innerHTML = '<table class="mx"><thead>' + head + '</thead><tbody>' + rows + zero + '</tbody></table>';
    }).catch(() => { root.innerHTML = '<p class="muted small">Chưa tải được dữ liệu âm tiết (cần mạng ở lần đầu mở).</p>'; });
  };

  // Chuẩn bị dữ liệu khi vào trang phát âm (để nút nghe phản hồi ngay)
  H.warmSyllables = () => { H.loadSyllables().catch(() => { /* bỏ qua */ }); };
})();
