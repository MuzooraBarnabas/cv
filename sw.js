var cacheName = 'pwa-mycv-v1';

var filesToCache = [
    '',
    'css/resume.css',
    'css/resume.min.css',
    'img/fav.png',
    'img/wifi-off.PNG',
    'img/android-chrome-192x192.png',
    'img/android-chrome-512x512.png',
    'img/favicon-16x16.png',
    'img/favicon-32x32.png',
    'js/offline.js',
    'js/resume.js',
    'js/resume.min.js',
    'vendor/',
    'scss/',
    'index/html',
    'manifest.json',
    'offline.html',
    'sw_register.js',
];

// Install Service Worker
self.addEventListener('install', function(event) {

    console.log('Service Worker: Installing....');

    event.waitUntil(

        // Open the Cache
        caches.open(cacheName).then(function(cache) {
            console.log('Service Worker: Caching App Shell at the moment......');

            // Add Files to the Cache
            return cache.addAll(filesToCache);
        })
    );
});


// Fired when the Service Worker starts up
self.addEventListener('activate', function(event) {

    console.log('Service Worker: Activating....');

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(key) {
                if( key !== cacheName) {
                    console.log('Service Worker: Removing Old Cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});


self.addEventListener('fetch', function(event) {

    console.log('Service Worker: Fetch', event.request.url);

    console.log("Url", event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});