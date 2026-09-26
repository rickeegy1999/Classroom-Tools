const CACHE_NAME = "classroom-tools-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./toolicon-192.png",
  "./toolicon-512.png"
];


self.addEventListener("install", event => {

  event.waitUntil(

    caches
      .open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(APP_FILES);

      })

  );

  self.skipWaiting();

});


self.addEventListener("activate", event => {

  event.waitUntil(

    caches
      .keys()
      .then(keys => {

        return Promise.all(

          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))

        );

      })
      .then(() => {

        return self.clients.claim();

      })

  );

});


self.addEventListener("fetch", event => {

  /*
    Only handle normal GET requests.
  */

  if (event.request.method !== "GET") {

    return;

  }


  /*
    The root service worker covers the entire
    Classroom Tools repository.

    If a requested file is not in our cache,
    allow the browser to fetch it normally.

    This means NamePicker, Emote and
    ClassPointSystem continue working normally.
  */

  event.respondWith(

    caches
      .match(event.request)
      .then(cachedResponse => {

        return cachedResponse || fetch(event.request);

      })

  );

});