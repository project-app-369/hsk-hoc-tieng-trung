// Service worker: cache app shell để mở được khi mất mạng sau lần đầu truy cập.
const CACHE = 'hsk-app-v5';
const SHELL = [
  './',
  './index.html',
  './css/style.css',
  './js/core.js',
  './js/sheet.js',
  './js/app.js',
  './js/data-ph.js',
  './js/data-hsk1a.js',
  './js/data-hsk1b.js',
  './js/data-hsk2.js',
  './js/data-extra.js',
  './js/vendor/hanzi-writer.min.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
// Dữ liệu chữ Hán khá nặng: tải nền, lỗi thì bỏ qua (sẽ được cache khi dùng lần đầu).
const DATA = ['./data/hanzi-info.json', './data/hanzi-strokes.json'];

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
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
