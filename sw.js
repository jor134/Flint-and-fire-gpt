const CACHE="flint-fire-v1";const SHELL=["/","/index.html","/manifest.json","/icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
 if(e.request.url.includes("/api/")) return;
 if(e.request.mode==="navigate") e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match("/index.html")));
 else e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});