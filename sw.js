// Service worker: cache app shell để mở được khi mất mạng sau lần đầu truy cập.
const CACHE = 'hsk-app-v24';
const SHELL = [
  './',
  './index.html',
  './css/style.css',
  './css/soft.css',
  './css/theme-suzhou.css',
  './js/core.js',
  './js/pinyin.js',
  './js/sheet.js',
  './js/app.js',
  './js/data-ph.js',
  './js/data-hsk1a.js',
  './js/data-hsk1b.js',
  './js/data-hsk2.js',
  './js/data-hsk2b.js',
  './js/data-hsk2c.js',
  './js/data-hsk2d.js',
  './js/data-extra.js',
  './js/data-dialogues.js',
  './js/firebase-config.js',
  './js/auth.js',
  './js/vendor/hanzi-writer.min.js',
  './manifest.webmanifest',
  './favicon.ico',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
// Dữ liệu chữ Hán khá nặng: tải nền, lỗi thì bỏ qua (sẽ được cache khi dùng lần đầu).
const DATA = ['./data/hanzi-info.json', './data/hanzi-strokes.json', './data/syllables.json', './fonts/ukai-subset.woff2', './fonts/wenkai-subset.woff2'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      await c.addAll(SHELL);
      await Promise.all(DATA.map((u) => c.add(u).catch(() => null)));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Google Fonts: để trình duyệt tự cache
  const keep = (res) => {
    if (res && res.status === 200) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
    }
    return res;
  };
  // Dữ liệu chữ Hán và icon ít đổi: ưu tiên cache. Mã và giao diện: ưu tiên mạng để luôn nhận bản mới,
  // mất mạng thì dùng bản đã lưu.
  if (/\/(data|icons|fonts)\//.test(url.pathname)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then(keep)));
    return;
  }
  e.respondWith(
    // cache: 'no-cache' = luôn hỏi lại server (304 nếu không đổi), tránh dùng bản cũ trong bộ nhớ đệm HTTP của GitHub Pages
    fetch(req, { cache: 'no-cache' }).then(keep).catch(() =>
      caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'))
    )
  );
});
