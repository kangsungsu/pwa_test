self.caches;
var cacheName = "cache"
localStorage = window.localStorage;
localStorage.setItem('name','/phones/galaxy_a12_1.jpg')
self.addEventListener('install', function (event) {
  console.log("install!!","install")
  
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/phones/galaxy_a12_1.jpg',
          '/phones/galaxy_a12_2.jpg',
          '/phones/galaxy_a12_3.jpg',
          '/phones/galaxy_a12_4.jpg',
          '/phones/galaxy_a12_5.jpg',
          '/phones/galaxy_a12_6.jpg',
          '/phones/galaxy_a12_7.jpg',
          '/phones/galaxy_a12_8.jpg',
          '/phones/galaxy_a12_9.jpg',
          '/phones/galaxy_a12_10.jpg',
          
          '/phones/galaxy_a12_11.jpg',
          '/phones/galaxy_a12_12.jpg',
          '/phones/galaxy_a12_13.jpg',
          '/phones/galaxy_a12_14.jpg',
          '/phones/galaxy_a12_15.jpg',
          '/phones/galaxy_a12_16.jpg',
          '/phones/galaxy_a12_17.jpg',
          '/phones/galaxy_a12_18.jpg',
          '/phones/galaxy_a12_19.jpg',
          '/phones/galaxy_a12_20.jpg',
          '/phones/galaxy_a12_21.jpg',
          '/phones/galaxy_a12_22.jpg',
          '/phones/galaxy_a12_23.jpg',
          '/phones/galaxy_a12_24.jpg',
          '/phones/galaxy_a12_25.jpg',
          '/phones/galaxy_a12_26.jpg',
          '/phones/galaxy_a12_27.jpg',
          '/phones/galaxy_a12_28.jpg',
          '/phones/galaxy_a12_29.jpg',
          '/phones/galaxy_a12_30.jpg',

        
        ]
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  //   여기에 코드를 넣지 않아도 설치는 가능하다.   
  console.log("fetch!!", event.request.url)
  caches.match(event.request).then((respond)=>{
    console.log("response",respond)
  })

  //caches.open(캐시 이름).then((cache)=>{
  //  caches.match(리소스).then((respond)=>{})  
  //})
  event.respondWith(
    caches.match(event.request).then((response) => { 
      console.log("response", response)
      
      return response || fetch(event.request);
    })
  )
  
})

const offlineFallbackPage = "offline.html"