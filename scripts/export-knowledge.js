// Xuất dữ liệu bài học (js/data-*.js) ra knowledge/*.md trong thư mục dự án.
// Chạy: node scripts/export-knowledge.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'knowledge');
const files = ['js/data-ph.js', 'js/data-hsk1a.js', 'js/data-hsk1b.js', 'js/data-hsk2.js'];

const ctx = { window: {} };
vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);
const lessons = ctx.window.LESSONS;

const LEVELS = { PH: 'Phát âm', HSK1: 'HSK 1', HSK2: 'HSK 2' };
const fileName = (l) => `${l.id}.md`;
const title = (l) => `${LEVELS[l.level]}${l.level === 'PH' ? '' : ' · Bài ' + l.n} — ${l.zh}`;

fs.mkdirSync(outDir, { recursive: true });

function lessonMd(l) {
  const out = [];
  out.push(`# ${title(l)}`, '', `*${l.vi}*`, '', `Nguồn: \`${l.src}\``, '');
  if (l.level === 'PH') {
    out.push('## 1. Luyện âm', '');
    for (const g of l.drill || []) {
      out.push(`### ${g.title}`, '', g.note, '', g.items.map((s) => `\`${s}\``).join(' '), '');
    }
  } else {
    out.push('## 1. Từ mới', '', '| Từ | Pinyin | Từ loại | Nghĩa |', '|---|---|---|---|');
    for (const v of l.vocab) out.push(`| ${v[0]} | ${v[1]} | ${v[2]} | ${v[3]} |`);
    out.push('');
  }
  out.push('## 2. Cách đọc', '');
  for (const p of l.pron) out.push(`- ${p}`);
  out.push('', '## 3. Cách viết', '');
  if (l.level === 'PH') {
    out.push('### Nét cơ bản', '');
    for (const s of l.strokes || []) out.push(`- **${s.name}** (${s.py}): ${s.vi}`);
    out.push('');
    for (const c of l.chars || []) {
      out.push(`### ${c.zh} (${c.py} — ${c.vi})`, '');
      c.strokes.forEach((s, i) => out.push(`${i + 1}. ${s.name}`));
      out.push('', c.note, '');
    }
  } else {
    for (const w of l.writing) out.push(`- **${w.zh}**${w.py ? ` (${w.py})` : ''}: ${w.note}`);
  }
  out.push('', '## 4. Ngữ pháp', '');
  for (const g of l.grammar) {
    out.push(`### ${g.t}`, '', `Công thức: \`${g.f}\``, '', g.e, '');
    for (const e of g.ex) out.push(e.length === 3 ? `- ${e[0]} — ${e[1]} — ${e[2]}` : `- ${e[0]} — ${e[1]}`);
    out.push('');
  }
  out.push('## 5. Đọc câu', '');
  for (const r of l.read) {
    out.push(`- **${r.zh}**  `, `  ${r.py}  `, `  ${r.vi}${r.note ? `  *(${r.note})*` : ''}`);
  }
  out.push('', '## 6. Ôn tập', '');
  l.quiz.forEach((q, i) => {
    out.push(`${i + 1}. ${q.q}`);
    q.o.forEach((o, k) => out.push(`   - ${String.fromCharCode(65 + k)}. ${o}${k === q.a ? ' ✔' : ''}`));
    if (q.exp) out.push(`   - *Giải thích:* ${q.exp}`);
  });
  out.push('');
  return out.join('\n');
}

const index = ['# Kiến thức HSK — mục lục', '', `Tổng: ${lessons.length} bài.`, ''];
let level = null;
for (const l of lessons) {
  if (l.level !== level) { level = l.level; index.push(`## ${LEVELS[level]}`, ''); }
  const count = l.level === 'PH'
    ? `${(l.drill || []).length} nhóm luyện âm, ${(l.chars || []).length} chữ viết`
    : `${(l.vocab || []).length} từ`;
  index.push(`- [${title(l)}](${fileName(l)}) — ${count}, ${(l.grammar || []).length} điểm ngữ pháp`);
  fs.writeFileSync(path.join(outDir, fileName(l)), lessonMd(l), 'utf8');
}
index.push('');
fs.writeFileSync(path.join(outDir, 'README.md'), index.join('\n'), 'utf8');
console.log(`Đã xuất ${lessons.length} bài vào ${outDir}`);
