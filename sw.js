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
  './normal_idle_right.png',
  './awake_up.gif',
  './awake_down.gif',
  './awake_left.gif',
  './awake_right.gif',
  './awake_idle_back.png',
  './awake_idle_front.png',
  './awake_idle_left.png',
  './awake_idle_right.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});