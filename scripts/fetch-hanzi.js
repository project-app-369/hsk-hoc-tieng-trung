// Tải dữ liệu nét chữ (hanzi-writer-data) và từ điển Make Me a Hanzi cho các chữ trong bài học.
// Chạy: node scripts/collect-chars.js && node scripts/fetch-hanzi.js
// Kết quả: data/hanzi-strokes.json, data/_dict-subset.json, js/vendor/hanzi-writer.min.js
// Nguồn dữ liệu: hanzi-writer-data / Make Me a Hanzi (Arphic Public License), hanzi-writer (MIT).
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const CDN = 'https://cdn.jsdelivr.net';
const chars = [...new Set(fs.readFileSync(path.join(root, 'data/_chars.txt'), 'utf8'))];

async function getText(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
}

async function pool(items, size, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx]);
    }
  }));
  return out;
}

(async () => {
  // 1) Thư viện hanzi-writer (lưu local để chạy offline)
  const lib = await getText(`${CDN}/npm/hanzi-writer@3.7.2/dist/hanzi-writer.min.js`);
  fs.mkdirSync(path.join(root, 'js/vendor'), { recursive: true });
  fs.writeFileSync(path.join(root, 'js/vendor/hanzi-writer.min.js'), lib, 'utf8');
  console.log('hanzi-writer.min.js', lib.length, 'bytes');

  // 2) Dữ liệu nét chữ từng chữ
  const strokes = {};
  const fail = [];
  await pool(chars, 12, async (ch) => {
    try {
      const j = JSON.parse(await getText(`${CDN}/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(ch)}.json`));
      strokes[ch] = { strokes: j.strokes, medians: j.medians, radStrokes: j.radStrokes || [] };
    } catch (e) { fail.push(ch); }
  });
  fs.writeFileSync(path.join(root, 'data/hanzi-strokes.json'), JSON.stringify(strokes), 'utf8');
  console.log('strokes:', Object.keys(strokes).length, '/', chars.length, '| thiếu:', fail.join(''));

  // 3) Từ điển Make Me a Hanzi (bộ thủ, loại chữ, phân tích)
  const dictText = await getText(`${CDN}/gh/skishore/makemeahanzi@master/dictionary.txt`);
  const dict = new Map();
  for (const line of dictText.split('\n')) {
    if (!line.trim()) continue;
    try { const o = JSON.parse(line); dict.set(o.character, o); } catch (e) { /* bỏ dòng lỗi */ }
  }
  const need = new Set(chars);
  const addComp = (c) => { if (c && /[⺀-鿿]/.test(c)) need.add(c); };
  for (const ch of chars) {
    const e = dict.get(ch);
    if (!e) continue;
    addComp(e.radical);
    for (const c of (e.decomposition || '')) if (!/[⿰-⿿?]/.test(c)) addComp(c);
    if (e.etymology) { addComp(e.etymology.semantic); addComp(e.etymology.phonetic); }
  }
  const subset = {};
  for (const c of need) {
    const e = dict.get(c);
    if (e) subset[c] = { py: e.pinyin, def: e.definition, rad: e.radical, dec: e.decomposition, ety: e.etymology || null };
  }
  fs.writeFileSync(path.join(root, 'data/_dict-subset.json'), JSON.stringify(subset), 'utf8');
  console.log('dict subset:', Object.keys(subset).length, '| thiếu trong từ điển:', chars.filter((c) => !dict.has(c)).join(''));
})().catch((e) => { console.error('LỖI', e.message); process.exit(1); });
