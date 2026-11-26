// Kiểm tra chữ Hán, pinyin và nghĩa khớp nhau. Dùng: node scripts/check-data.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const win = { LESSONS: [] }; vm.createContext(win); win.window = win;
for (const f of ['data-ph', 'data-hsk1a', 'data-hsk1b', 'data-hsk2', 'data-hsk2b', 'data-hsk2c', 'data-hsk2d', 'data-extra'])
  vm.runInContext(fs.readFileSync(path.join(root, 'js', f + '.js'), 'utf8'), win);
const info = JSON.parse(fs.readFileSync(path.join(root, 'data/hanzi-info.json'), 'utf8'));
const MARK = { ā:'a',á:'a',ǎ:'a',à:'a',ē:'e',é:'e',ě:'e',è:'e',ī:'i',í:'i',ǐ:'i',ì:'i',ō:'o',ó:'o',ǒ:'o',ò:'o',ū:'u',ú:'u',ǔ:'u',ù:'u',ǖ:'ü',ǘ:'ü',ǚ:'ü',ǜ:'ü' };
const base = (s) => [...s.toLowerCase()].map((c) => MARK[c] || c).join('').replace(/v/g, 'ü');
const isHan = (c) => /[一-鿿]/.test(c);
// Chữ có nhiều âm đọc hoặc biến âm: cho phép lệch thanh, so theo âm không dấu
const FLEX = new Set([...'一不了的得地着么们子吗吧呢啊呀']);
const POLY = { 儿: ['er', 'r'] };
function sylls(py) { // tách pinyin thành âm tiết; ’ và khoảng trắng tách; r cuối (erhua) gộp
  const t = py.replace(/[，。！？、；：“”‘’（）,.!?;:"()…—~]/g, ' ').replace(/['’]/g, ' ').trim().split(/\s+/).filter(Boolean);
  const out = [];
  for (const w of t) {
    const b = base(w);
    // chia từ ghép viết liền thành các âm tiết bằng regex pinyin
    const re = /(?:[bpmfdtnlgkhjqxzcsryw]|zh|ch|sh)?(?:[aeiouü]+(?:ng|n|r(?![aeiouü]))?|ng|n(?![aeiouü]))/gi;
    const parts = b.match(re);
    if (!parts || parts.join('') !== b) { out.push({ raw: w, bad: true }); continue; }
    // dịch ngược để giữ dấu: cắt theo độ dài
    let i = 0; for (const p of parts) { out.push({ raw: w.slice(i, i + p.length), b: p }); i += p.length; }
  }
  return out;
}
const problems = [];
const say = (loc, msg) => problems.push(loc + ': ' + msg);
const clean = (py) => py.toLowerCase().replace(/[^a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüv]/g, '').replace(/v/g, 'ü');
const FL = { '一': ['yī','yí','yì','yi'], '不': ['bù','bú','bu'], '了': ['le','liǎo','liao'], '的': ['de','dí','dì','dī'], '得': ['de','dé','děi'], '地': ['de','dì'], '着': ['zhe','zháo','zhuó'], '么': ['me','ma'], '们': ['men'], '子': ['zi','zǐ'], '吗': ['ma','mǎ'], '吧': ['ba','bā'], '呢': ['ne','ní'], '啊': ['a','ya','na','wa','á','ā'], '呀': ['ya','yā','a'], '儿': ['r','er','ér'], '喂': ['wèi','wéi'], '谁': ['shéi','shuí'], '便': ['pián','biàn'], '觉': ['jiào','jué'], '长': ['cháng','zhǎng'], '好': ['hǎo','hào','hāo'], '教': ['jiāo','jiào'], '会': ['huì','huǐ','kuài'], '妮': ['nī','ní'] };
function cands(c, strict) {
  const e = info[c]; let list = [...(FL[c] || []), ...((e && e.py) || [])].map((x) => x.toLowerCase());
  if (!strict) list = list.map(base);
  else list = list.concat(list.map(base)); // thanh nhẹ cho phép bỏ dấu
  if (!list.length) return null;
  return [...new Set(list)].sort((a, b) => b.length - a.length);
}
function align(han, str, strict) {
  const memo = new Map();
  const go = (i, j) => {
    if (i === han.length) return j === str.length;
    const k = i + ',' + j; if (memo.has(k)) return memo.get(k);
    const cs = cands(han[i], strict); let ok = false;
    if (!cs) ok = null; // chữ không có trong dữ liệu
    else for (const x of cs) if (str.startsWith(x, j) && go(i + 1, j + x.length)) { ok = true; break; }
    memo.set(k, ok); return ok;
  };
  return go(0, 0);
}
function checkPair(loc, zh, py) {
  const han = [...zh].filter(isHan);
  if (!han.length) return;
  const raw = clean(py); const strictStr = raw; const baseStr = base(raw);
  if (align(han, strictStr, true)) return;
  if (align(han, baseStr, false)) return say(loc, `SAI THANH | ${zh} | ${py}`);
  say(loc, `SAI ÂM | ${zh} | ${py}`);
}
let nV = 0, nS = 0;
for (const l of win.LESSONS) {
  for (const v of l.vocab || []) { nV++; checkPair(l.id + ' vocab', v[0], v[1]); if (!v[3] || v[3].length < 1) say(l.id, 'thiếu nghĩa ' + v[0]); }
  const sent = [];
  (l.grammar || []).forEach((g) => (g.ex || []).forEach((e) => sent.push(e)));
  (l.read || []).forEach((r) => sent.push([r.zh, r.py, r.vi]));
  for (const e of sent) { nS++; checkPair(l.id + ' câu', e[0], e[1]); if (!e[2]) say(l.id, 'thiếu nghĩa câu ' + e[0]); }
}
for (const w of win.EXTRA_WORDS) { nV++; checkPair('extra', w[0], w[1]); }
console.log('từ:', nV, '| câu:', nS, '| lỗi:', problems.length);
console.log(problems.join('\n'));

// Nhất quán chéo: cùng chữ nhưng khác pinyin / khác nghĩa giữa các bài, và câu trùng khác bản dịch
const seen = {}, issues = [];
const add = (zh, py, vi, loc) => { (seen[zh] = seen[zh] || []).push({ py, vi, loc }); };
for (const l of win.LESSONS) (l.vocab || []).forEach((v) => add(v[0], v[1], v[3], l.id));
for (const w of win.EXTRA_WORDS) add(w[0], w[1], w[3], 'extra');
for (const [zh, arr] of Object.entries(seen)) {
  const pys = [...new Set(arr.map((a) => a.py))];
  if (pys.length > 1) issues.push(`khác pinyin: ${zh} -> ${arr.map((a) => a.loc + ':' + a.py + ' = ' + a.vi).join(' | ')}`);
}
const sent = {};
for (const l of win.LESSONS) {
  const all = []; (l.grammar || []).forEach((g) => (g.ex || []).forEach((e) => all.push(e))); (l.read || []).forEach((r) => all.push([r.zh, r.py, r.vi]));
  for (const e of all) { const k = e[0]; (sent[k] = sent[k] || []).push({ py: e[1], vi: e[2], loc: l.id }); }
}
for (const [zh, arr] of Object.entries(sent)) {
  const pys = new Set(arr.map((a) => a.py.replace(/\s+/g, ' ').toLowerCase())); const vis = new Set(arr.map((a) => a.vi));
  if (pys.size > 1 || vis.size > 1) issues.push(`câu lệch: ${zh} -> ${arr.map((a) => a.loc + ': ' + a.py + ' / ' + a.vi).join(' | ')}`);
}
console.log('nhất quán chéo:', issues.length, 'vấn đề'); console.log(issues.join('\n'));
