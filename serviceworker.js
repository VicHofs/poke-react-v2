const CACHE_NAME = 'v1';
const urlsToCache = [
  'index.html',
  'offline.html',
  'assets/fonts/pokemon_fire_red.otf',
  'assets/images/heart.png',
  'assets/images/logo.png',
  'assets/images/noSignal.png',
  'assets/images/pokeball.png',
];

const self = this;

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Installed cache');

      return cache.addAll(urlsToCache);
    }),
  );
});

// Wait
self.addEventListener('fetch', event => {
  console.log('requested ', event.request);
  if (
    event.request.destination === 'document' &&
    /poke-react-v2\/$/.test(event.request.url) &&
    navigator.onLine === false
  )
    event.respondWith(caches.match('offline.html'));
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'));
    }),
  );
});

// Activate
self.addEventListener('activate', event => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});
