/* Cambia este número en cada versión: así la app avisa que hay una actualización */
const V = "misseries-v1.5.0";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL))); });
self.addEventListener("message", e => { if (e.data === "skip") self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V && x !== "img").map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (u.origin === location.origin) {
    e.respondWith(fetch(e.request, { cache: "no-cache" }).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
  } else if (/image\.tmdb\.org|static\.tvmaze\.com/.test(u.host)) {
    e.respondWith(caches.open("img").then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { c.put(e.request, n.clone()); return n; }))));
  }
});
