const CACHE_NAME = 'forest-game-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './forest_scene.png',
  './forest_collision.png',
  './normal_up.gif',
  './normal_down.gif',
  './normal_left.gif',
  './normal_right.gif',
  './normal_idle_back.png',
  './normal_idle_front.png',
  './normal_idle_left.png',
  './normal_idle_right.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.warn('缓存部分失败，但游戏仍可运行', err))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});