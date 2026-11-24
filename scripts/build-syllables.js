// Dựng data/syllables.json: với mỗi âm tiết pinyin (không dấu) và 4 thanh, chọn một chữ Hán thông dụng
// để giọng đọc tiếng Trung của thiết bị phát âm đúng. Chạy: node scripts/build-syllables.js (cần mạng).
// Chọn chữ trong bảng GB2312 cấp 1 (3755 chữ thông dụng), ưu tiên chữ có trong bài học và chữ chỉ có một cách đọc.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const TONES = {
  'ā': ['a', 1], 'á': ['a', 2], 'ǎ': ['a', 3], 'à': ['a', 4],
  'ē': ['e', 1], 'é': ['e', 2], 'ě': ['e', 3], 'è': ['e', 4],
  'ī': ['i', 1], 'í': ['i', 2], 'ǐ': ['i', 3], 'ì': ['i', 4],
  'ō': ['o', 1], 'ó': ['o', 2], 'ǒ': ['o', 3], 'ò': ['o', 4],
  'ū': ['u', 1], 'ú': ['u', 2], 'ǔ': ['u', 3], 'ù': ['u', 4],
  'ǖ': ['ü', 1], 'ǘ': ['ü', 2], 'ǚ': ['ü', 3], 'ǜ': ['ü', 4]
};
function parse(py) {
  let tone = 5; let base = '';
  for (const c of py.toLowerCase()) {
    if (TONES[c]) { base += TONES[c][0]; tone = TONES[c][1]; } else base += c;
  }
  return { base: base.replace('v', 'ü'), tone };
}

function gbLevel1() {
  const dec = new TextDecoder('gbk');
  const set = new Set();
  for (let hi = 0xb0; hi <= 0xd7; hi++) {
    for (let lo = 0xa1; lo <= 0xfe; lo++) {
      if (hi === 0xd7 && lo > 0xf9) break;
      const ch = dec.decode(Uint8Array.of(hi, lo));
      if (ch && Array.from(ch).length === 1 && /[一-鿿]/.test(ch)) set.add(ch);
    }
  }
  return set;
}

(async () => {
  const lvl1 = gbLevel1();
  console.log('GB2312 cấp 1:', lvl1.size, 'chữ');
  const res = await fetch('https://cdn.jsdelivr.net/gh/skishore/makemeahanzi@master/dictionary.txt');
  if (!res.ok) throw new Error('Không tải được từ điển: ' + res.status);
  const text = await res.text();
  let lesson = new Set();
  try { lesson = new Set(Object.keys(JSON.parse(fs.readFileSync(path.join(root, 'data/hanzi-info.json'), 'utf8')))); } catch (e) { /* chưa có */ }

  const cand = {}; // 'ba|1' -> [{ch, score}]
  for (const line of text.split('\n')) {
    if (!line.trim()) continue;
    let o; try { o = JSON.parse(line); } catch (e) { continue; }
    if (!lvl1.has(o.character) || !o.pinyin || !o.pinyin.length) continue;
    o.pinyin.forEach((py, idx) => {
      const { base, tone } = parse(py);
      if (tone > 4 || !/^[a-zü]+$/.test(base)) return;
      let score = 0;
      if (lesson.has(o.character)) score += 4;
      if (o.pinyin.length === 1) score += 2;
      if (idx === 0) score += 1;
      (cand[base + '|' + tone] = cand[base + '|' + tone] || []).push({ ch: o.character, score });
    });
  }
  const out = {};
  const bases = new Set(Object.keys(cand).map((k) => k.split('|')[0]));
  for (const b of [...bases].sort()) {
    out[b] = [1, 2, 3, 4].map((t) => {
      const list = cand[b + '|' + t];
      if (!list) return '';
      list.sort((x, y) => y.score - x.score);
      return list[0].ch;
    });
  }
  // Bổ sung thủ công cho âm tiết thiếu chữ thông dụng cấp 1
  const OVERRIDE = { fo: ['', '佛', '', ''], ei: ['诶', '', '', ''] };
  for (const [k, v] of Object.entries(OVERRIDE)) {
    const cur = out[k] || ['', '', '', ''];
    out[k] = cur.map((c, i) => c || v[i]);
  }
  fs.writeFileSync(path.join(root, 'data/syllables.json'), JSON.stringify(out), 'utf8');
  console.log('syllables.json:', Object.keys(out).length, 'âm tiết');
  const sample = ['ba', 'ma', 'ji', 'zhi', 'nü', 'lü', 'ju', 'er', 'yu', 'wo', 'dong', 'fo'];
  console.log(sample.map((s) => s + '=' + (out[s] ? out[s].join('') : '—')).join('  '));
})().catch((e) => { console.error('LỖI', e.message); process.exit(1); });
