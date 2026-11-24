// Tải font khải thư (nguồn mở) vào thư mục tạm để cắt nhỏ. Dùng: node scripts/fetch-fonts.js <outDir>
const fs = require('fs'), path = require('path');
const out = process.argv[2]; fs.mkdirSync(out, { recursive: true });
const SRC = {
  'LXGWWenKai-Regular.ttf': 'https://cdn.jsdelivr.net/gh/lxgw/LxgwWenKai@v1.520/fonts/TTF/LXGWWenKai-Regular.ttf',
  'ukai.ttc': 'https://cdn.jsdelivr.net/gh/mjvv/fonts-arphic-ukai@master/ukai.ttc'
};
(async () => {
  for (const [n, u] of Object.entries(SRC)) {
    const r = await fetch(u); console.log(n, r.status, u);
    if (!r.ok) continue;
    fs.writeFileSync(path.join(out, n), Buffer.from(await r.arrayBuffer()));
  }
})();
