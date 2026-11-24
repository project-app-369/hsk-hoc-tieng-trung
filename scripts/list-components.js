// In ra bộ thủ + thành phần cần tên tiếng Việt, và loại chữ thống kê.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const chars = [...new Set(fs.readFileSync(path.join(root, 'data/_chars.txt'), 'utf8'))];
const sub = JSON.parse(fs.readFileSync(path.join(root, 'data/_dict-subset.json'), 'utf8'));
const comps = new Map();
const types = {};
for (const ch of chars) {
  const e = sub[ch]; if (!e) continue;
  const t = e.ety ? e.ety.type : 'none'; types[t] = (types[t] || 0) + 1;
  const add = (c) => { if (c && /[⺀-鿿]/.test(c) && c !== ch) comps.set(c, (sub[c] && sub[c].def) || ''); };
  add(e.rad);
  for (const c of (e.dec || '')) if (!/[⿰-⿿?]/.test(c)) add(c);
  if (e.ety) { add(e.ety.semantic); add(e.ety.phonetic); }
}
console.log('types', JSON.stringify(types));
console.log('components', comps.size);
console.log([...comps.entries()].map(([c, d]) => `${c}=${(d || '').slice(0, 28)}`).join(' | '));
