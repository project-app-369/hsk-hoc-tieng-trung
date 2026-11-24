/* HSK App — lõi: dữ liệu người dùng, icon, phân đoạn câu, nạp dữ liệu chữ Hán. */
(function () {
  'use strict';

  const HSK = (window.HSK = {});
  const LESSONS = window.LESSONS || [];
  HSK.LESSONS = LESSONS;

  HSK.LEVELS = { PH: 'Phát âm', HSK1: 'HSK 1', HSK2: 'HSK 2' };
  HSK.SECTIONS = [
    { id: 'vocab', label: 'Từ mới' },
    { id: 'pron', label: 'Cách đọc' },
    { id: 'writing', label: 'Cách viết' },
    { id: 'grammar', label: 'Ngữ pháp' },
    { id: 'examples', label: 'Câu ví dụ' },
    { id: 'quiz', label: 'Ôn tập' }
  ];
  const isHan = (c) => /[㐀-鿿]/.test(c);
  HSK.isHan = isHan;

  /* ---------- tiện ích ---------- */
  HSK.$ = (s, el) => (el || document).querySelector(s);
  HSK.$$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  HSK.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  HSK.shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  HSK.lessonTag = (l) => (l.level === 'PH' ? 'PH' + l.n : String(l.n));
  HSK.lessonTitle = (l) => HSK.LEVELS[l.level] + (l.level === 'PH' ? '' : ' · Bài ' + l.n);
  HSK.sectionLabel = (l, s) => {
    if (l.level === 'PH') {
      if (s.id === 'vocab') return 'Luyện âm';
      if (s.id === 'writing') return 'Nét & thứ tự';
      if (s.id === 'grammar') return 'Quy tắc';
    }
    return s.label;
  };

  /* ---------- chuẩn hóa dữ liệu bài ---------- */
  const byId = {};
  HSK.byId = byId;
  LESSONS.forEach((l) => {
    byId[l.id] = l;
    ['vocab', 'grammar', 'read', 'quiz', 'pron', 'writing', 'drill', 'strokes', 'chars'].forEach((k) => { l[k] = l[k] || []; });
    // Gộp mọi câu ví dụ trong bài (ngữ pháp + đọc câu), bỏ trùng.
    const seen = new Map();
    const list = [];
    const push = (zh, py, vi, note, tag, kind) => {
      if (!zh || !isHan(zh)) return;
      if (seen.has(zh)) { const s = seen.get(zh); if (tag && s.tags.indexOf(tag) < 0) s.tags.push(tag); return; }
      const s = { zh, py: py || '', vi: vi || '', note: note || '', tags: tag ? [tag] : [], kind, lid: l.id };
      seen.set(zh, s); list.push(s);
    };
    l.grammar.forEach((g) => g.ex.forEach((e) => {
      if (e.length === 3) push(e[0], e[1], e[2], '', g.t, 'grammar'); else push(e[0], '', e[1], '', g.t, 'grammar');
    }));
    l.read.forEach((r) => push(r.zh, r.py, r.vi, r.note, 'Bài đọc', 'read'));
    l.examples = list;
  });
  HSK.allSentences = LESSONS.reduce((a, l) => a.concat(l.examples), []);

  /* ---------- dữ liệu người dùng (localStorage, có try/catch) ---------- */
  const KEY = 'hsk.app.v2';
  const normalize = (o) => ({
    done: o.done || {}, seen: o.seen || {}, cards: o.cards || {},
    stats: o.stats || { ok: 0, tot: 0 }, wrong: Array.isArray(o.wrong) ? o.wrong : [],
    writing: o.writing || {}, days: o.days || {}, last: o.last || null
  });
  let db;
  try { db = normalize(JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { db = normalize({}); }
  HSK.db = () => db;
  HSK.resetDb = () => { db = normalize({}); HSK.save(); };
  HSK.save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* bỏ qua */ } };

  const dayKey = (t) => {
    const d = new Date(t == null ? Date.now() : t);
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  };
  HSK.touch = () => { const k = dayKey(); db.days[k] = (db.days[k] || 0) + 1; HSK.save(); };
  HSK.streak = () => {
    let t = Date.now(); let n = 0;
    if (!db.days[dayKey(t)]) t -= 86400000;
    while (db.days[dayKey(t)]) { n++; t -= 86400000; }
    return n;
  };
  HSK.last7 = () => {
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const t = Date.now() - i * 86400000;
      out.push({ k: dayKey(t), n: db.days[dayKey(t)] || 0, d: new Date(t).getDay() });
    }
    return out;
  };

  /* ---------- icon phẳng ---------- */
  const svg = (inner) => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner + '</svg>';
  const stroke = (d, w) => '<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="' + (w || 2.4) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  HSK.ICONS = {
    book: svg('<path fill="currentColor" d="M3 5.5C3 4.1 4.1 3 5.5 3H11v17H5.5C4.1 20 3 21.1 3 22.5z"/><path fill="currentColor" opacity=".5" d="M13 3h5.5C19.9 3 21 4.1 21 5.5v17c0-1.4-1.1-2.5-2.5-2.5H13z"/>'),
    cards: svg('<rect x="3" y="7" width="13" height="14" rx="2.5" fill="currentColor" opacity=".45"/><rect x="8" y="3" width="13" height="14" rx="2.5" fill="currentColor"/>'),
    check: svg('<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'),
    chart: svg('<rect x="3" y="12" width="4.5" height="9" rx="1.2" fill="currentColor" opacity=".5"/><rect x="9.75" y="7" width="4.5" height="14" rx="1.2" fill="currentColor"/><rect x="16.5" y="3" width="4.5" height="18" rx="1.2" fill="currentColor" opacity=".75"/>'),
    speaker: svg('<path fill="currentColor" d="M3 9.5h4.2L12 5.5v13l-4.8-4H3z"/>' + stroke('M15.5 9a4.2 4.2 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11', 2)),
    sun: svg('<circle cx="12" cy="12" r="4.5" fill="currentColor"/>' + stroke('M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8', 2)),
    moon: svg('<path fill="currentColor" d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/>'),
    install: svg(stroke('M12 3v11M7.5 9.5L12 14l4.5-4.5') + '<rect x="4" y="18" width="16" height="3" rx="1.5" fill="currentColor"/>'),
    play: svg('<path fill="currentColor" d="M7 4.5v15l12-7.5z"/>'),
    replay: svg(stroke('M5.2 12a7 7 0 1 0 2.1-5') + '<path fill="currentColor" d="M3 3.5V10h6.5z"/>'),
    pen: svg('<path fill="currentColor" d="M3 17.25V21h3.75L18.4 9.35l-3.75-3.75z"/><path fill="currentColor" opacity=".55" d="M20.7 7.05a1 1 0 0 0 0-1.4l-2.35-2.35a1 1 0 0 0-1.4 0l-1.5 1.5 3.75 3.75z"/>'),
    close: svg(stroke('M6 6l12 12M18 6L6 18')),
    chevL: svg(stroke('M15 5l-7 7 7 7')),
    chevR: svg(stroke('M9 5l7 7-7 7')),
    bulb: svg('<path fill="currentColor" d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/><rect x="9" y="18.5" width="6" height="2.5" rx="1.2" fill="currentColor" opacity=".55"/>'),
    list: svg(stroke('M8 6h12M8 12h12M8 18h12', 2.4) + '<circle cx="4" cy="6" r="1.6" fill="currentColor"/><circle cx="4" cy="12" r="1.6" fill="currentColor"/><circle cx="4" cy="18" r="1.6" fill="currentColor"/>'),
    search: svg('<circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.4"/>' + stroke('M15 15l5.5 5.5')),
    flame: svg('<path fill="currentColor" d="M12 2c.6 3.2-1.8 4.6-3.4 7.2C7.2 11.4 7 12.8 7 14a5 5 0 0 0 10 0c0-2-1-3.6-2.1-5.1-.1 1.6-.6 2.6-1.6 3.1.6-3.2-.3-8.2-1.3-10z"/>'),
    target: svg('<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>'),
    star: svg('<path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/>'),
    sparkle: svg('<path fill="currentColor" d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z"/>')
  };

  /* ---------- theme ---------- */
  const THEME_KEY = 'hsk.theme';
  HSK.themeIsDark = () => {
    const t = document.documentElement.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  };
  HSK.getThemePref = () => { try { return localStorage.getItem(THEME_KEY) || 'auto'; } catch (e) { return 'auto'; } };
  HSK.applyTheme = (t) => {
    const root = document.documentElement;
    if (t === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* bỏ qua */ }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', HSK.themeIsDark() ? '#14161d' : '#f6f3ee');
  };
  (() => {
    const t = HSK.getThemePref();
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  })();

  /* ---------- phát âm ---------- */
  HSK.speak = (text) => {
    try {
      if (!('speechSynthesis' in window)) return;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) { /* thiết bị không hỗ trợ */ }
  };

  /* ---------- từ điển + phân đoạn câu ---------- */
  const wordMap = new Map();
  const addWord = (zh, py, pos, vi, lid, extra) => {
    if (!wordMap.has(zh)) wordMap.set(zh, []);
    wordMap.get(zh).push({ zh, py, pos, vi, lid, extra: !!extra });
  };
  LESSONS.forEach((l) => l.vocab.forEach((v) => addWord(v[0], v[1], v[2], v[3], l.id, false)));
  (window.EXTRA_WORDS || []).forEach((w) => addWord(w[0], w[1], w[2], w[3], null, true));
  let maxLen = 1;
  wordMap.forEach((_, k) => { if (k.length > maxLen) maxLen = k.length; });

  HSK.lookup = (zh, lid) => {
    const arr = wordMap.get(zh);
    if (!arr) return null;
    return arr.find((e) => e.lid === lid) || arr.find((e) => !e.extra) || arr[0];
  };
  HSK.wordCount = () => wordMap.size;

  // Trả về mảng token: {t:'w', s, e} (chữ Hán, e = mục từ điển hoặc null) | {t:'x', s} (ký tự khác)
  HSK.tokenize = (text, lid) => {
    const out = [];
    let i = 0;
    const n = text.length;
    while (i < n) {
      if (!isHan(text[i])) {
        let j = i;
        while (j < n && !isHan(text[j])) j++;
        out.push({ t: 'x', s: text.slice(i, j) });
        i = j;
        continue;
      }
      let hit = null;
      for (let len = Math.min(maxLen, n - i); len >= 1; len--) {
        const sub = text.slice(i, i + len);
        if (wordMap.has(sub)) { hit = sub; break; }
      }
      if (hit) { out.push({ t: 'w', s: hit, e: HSK.lookup(hit, lid) }); i += hit.length; }
      else { out.push({ t: 'w', s: text[i], e: null }); i += 1; }
    }
    return out;
  };
  // HTML câu với từ bấm được
  HSK.sentenceHtml = (text, lid) => HSK.tokenize(text, lid).map((tk) => {
    if (tk.t === 'x') return HSK.esc(tk.s);
    return '<button type="button" class="tok" data-word="' + HSK.esc(tk.s) + '" data-lid="' + HSK.esc(lid || '') + '">' + HSK.esc(tk.s) + '</button>';
  }).join('');

  /* ---------- nạp dữ liệu chữ Hán (lười, có cache) ---------- */
  let infoP = null, strokesP = null;
  const fetchJson = (url) => fetch(url).then((r) => { if (!r.ok) throw new Error(url); return r.json(); });
  HSK.loadInfo = () => {
    if (!infoP) infoP = fetchJson('data/hanzi-info.json').catch((e) => { infoP = null; throw e; });
    return infoP;
  };
  HSK.loadStrokes = () => {
    if (!strokesP) strokesP = fetchJson('data/hanzi-strokes.json').catch((e) => { strokesP = null; throw e; });
    return strokesP;
  };

  // Danh sách chữ duy nhất trong từ vựng của bài (giữ thứ tự xuất hiện)
  HSK.lessonChars = (l) => {
    const seen = new Set(); const out = [];
    const add = (s) => Array.from(s).forEach((c) => { if (isHan(c) && !seen.has(c)) { seen.add(c); out.push(c); } });
    if (l.level === 'PH') l.chars.forEach((c) => add(c.zh));
    else l.vocab.forEach((v) => add(v[0]));
    return out;
  };
})();
