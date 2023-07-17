// service workers are running in the background and all about handling events.
// Therefore we allways attach event listeners to the service worker,
//we simply reatc to events.we do this by referrring with self keyword and then we add event listener after that.
self.addEventListener("install", function(event){ // we do not have any DOM events in the SWs but we have special set of events such as install, etc...
     console.log("[service worker] Installing Service Worker ...", event)
})  

self.addEventListener("activate", function(event){ 
    console.log("[service worker] Activating Service Worker ...", event);
    return self.clients.claims();
}) 

self.addEventListener("fetch", function(event){
console.log("[Srvice Worker] Fetching something ...", event);
event.respondWith(fetch(event.request));
})
