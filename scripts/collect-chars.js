// Thu thập mọi chữ Hán xuất hiện trong dữ liệu bài học -> data/_chars.txt
// và liệt kê token (từ) trong câu ví dụ chưa có trong từ vựng.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ['js/data-ph.js', 'js/data-hsk1a.js', 'js/data-hsk1b.js', 'js/data-hsk2.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);
}
let extra = [];
try {
  vm.runInContext(fs.readFileSync(path.join(root, 'js/data-extra.js'), 'utf8'), ctx);
  extra = ctx.window.EXTRA_WORDS || [];
} catch (e) { /* chưa có file bổ sung */ }

const L = ctx.window.LESSONS;
const cj = /[一-鿿]/g;
const chars = new Set();
const sentences = [];
const add = (s) => (s.match(cj) || []).forEach((c) => chars.add(c));

L.forEach((l) => {
  (l.vocab || []).forEach((v) => add(v[0]));
  (l.grammar || []).forEach((g) => g.ex.forEach((e) => { sentences.push(e[0]); add(e[0]); }));
  (l.read || []).forEach((r) => { sentences.push(r.zh); add(r.zh); });
  (l.chars || []).forEach((c) => add(c.zh));
  (l.writing || []).forEach((w) => add(w.zh));
  (l.quiz || []).forEach((q) => { add(q.q); q.o.forEach(add); });
});
extra.forEach((w) => add(w[0]));
fs.mkdirSync(path.join(root, 'data'), { recursive: true });
fs.writeFileSync(path.join(root, 'data/_chars.txt'), [...chars].join(''), 'utf8');

// Từ điển: vocab + extra
const dict = new Map();
L.forEach((l) => (l.vocab || []).forEach((v) => { if (!dict.has(v[0])) dict.set(v[0], v); }));
extra.forEach((w) => { if (!dict.has(w[0])) dict.set(w[0], w); });
const maxLen = Math.max(...[...dict.keys()].map((k) => k.length));

// Phân đoạn greedy longest-match
const missing = new Map();
for (const s of sentences) {
  let i = 0;
  while (i < s.length) {
    if (!/[一-鿿]/.test(s[i])) { i++; continue; }
    let hit = null;
    for (let n = Math.min(maxLen, s.length - i); n >= 1; n--) {
      const sub = s.slice(i, i + n);
      if (dict.has(sub)) { hit = sub; break; }
    }
    if (hit) i += hit.length;
    else { missing.set(s[i], (missing.get(s[i]) || 0) + 1); i++; }
  }
}
console.log('chars:', chars.size, '| sentences:', sentences.length, '| dict words:', dict.size);
console.log('missing tokens:', [...missing.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}(${v})`).join(' '));
