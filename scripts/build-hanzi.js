// Dựng data/hanzi-info.json: thông tin từng chữ (pinyin, âm Hán Việt, số nét, bộ thủ, loại chữ, thành phần).
// Chạy sau khi đã chạy collect-chars.js và fetch-hanzi.js:  node scripts/build-hanzi.js
const fs = require('fs');
const path = require('path');
const { RAD_VI, HV } = require('./vi-tables');

const root = path.join(__dirname, '..');
const chars = [...new Set(fs.readFileSync(path.join(root, 'data/_chars.txt'), 'utf8'))];
const dict = JSON.parse(fs.readFileSync(path.join(root, 'data/_dict-subset.json'), 'utf8'));
const strokes = JSON.parse(fs.readFileSync(path.join(root, 'data/hanzi-strokes.json'), 'utf8'));

const TYPE_VI = {
  pictographic: 'Chữ tượng hình',
  ideographic: 'Chữ hội ý',
  pictophonetic: 'Chữ hình thanh'
};
const isIdc = (c) => /[⿰-⿿?？]/.test(c);
const isHan = (c) => /[⺀-鿿]/.test(c);
const pyOf = (c) => (dict[c] && dict[c].py && dict[c].py[0]) || '';

function comp(c, role) {
  const o = { c, role };
  const vi = RAD_VI[c];
  if (vi) o.vi = vi;
  const py = pyOf(c);
  if (py) o.py = py;
  return o;
}

const info = {};
const noType = [];
for (const ch of chars) {
  const e = dict[ch];
  const s = strokes[ch];
  const o = { n: s ? s.strokes.length : 0 };
  if (e) {
    o.py = (e.py || []).slice(0, 3);
    if (e.rad) {
      o.r = e.rad;
      if (RAD_VI[e.rad]) o.rv = RAD_VI[e.rad];
      else if (pyOf(e.rad)) o.rp = pyOf(e.rad);
    }
    const ety = e.ety;
    if (ety && TYPE_VI[ety.type]) o.t = TYPE_VI[ety.type];
    else noType.push(ch);
    const parts = [];
    if (ety && ety.type === 'pictophonetic') {
      if (ety.semantic) parts.push(comp(ety.semantic, 'semantic'));
      if (ety.phonetic) parts.push(comp(ety.phonetic, 'phonetic'));
    }
    if (!parts.length) {
      const seen = new Set();
      for (const c of (e.dec || '')) {
        if (isIdc(c) || !isHan(c) || seen.has(c) || c === ch) continue;
        seen.add(c);
        parts.push(comp(c, ''));
        if (parts.length >= 4) break;
      }
    }
    if (parts.length) o.c = parts;
  }
  if (HV[ch]) o.hv = HV[ch];
  info[ch] = o;
}

fs.writeFileSync(path.join(root, 'data/hanzi-info.json'), JSON.stringify(info), 'utf8');
const missHv = chars.filter((c) => !HV[c]);
console.log('hanzi-info.json:', Object.keys(info).length, 'chữ');
console.log('không rõ loại chữ:', noType.length);
console.log('thiếu Hán Việt:', missHv.join(''));
const noRv = Object.values(info).filter((o) => o.r && !o.rv).length;
console.log('bộ thủ thiếu tên Việt:', noRv);
console.log('mẫu 爸:', JSON.stringify(info['爸']));
console.log('mẫu 说:', JSON.stringify(info['说']));
