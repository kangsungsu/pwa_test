self.caches;


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          'phones/galaxy_a12_1.jpg'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  //   여기에 코드를 넣지 않아도 설치는 가능하다.   
  console.log("fetch!!",event.request.url)
  
})

const offlineFallbackPage = "offline.html"