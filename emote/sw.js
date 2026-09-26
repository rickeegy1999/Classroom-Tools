const CACHE_NAME = "teacher-emotion-v2";

const APP_FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./emoicon-192.png",
    "./emoicon-512.png"
];


self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {

            return cache.addAll(APP_FILES);

        })

    );

    self.skipWaiting();

});



self.addEventListener("activate", event => {

    event.waitUntil(
        self.clients.claim()
    );

});



self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })

    );

});
