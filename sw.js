const cacheName = 'hp-cache-v1';
const staticAssets = ['./', './index.html', './style.css', './script.js', './manifest.json'];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
    const req = e.request;
    e.respondWith(caches.match(req).then(res => res || fetch(req)));
});