/**
 * sw.js — Service Worker for Shelter Census Summary
 *
 * Scope: GitHub Pages deployment only (no offline/PWA caching).
 * Passes all requests straight through to the network.
 * Included to satisfy GitHub Pages best-practice structure and to
 * allow future caching strategies without a breaking change.
 */

const VERSION = "v1.0.0";

self.addEventListener("install", (event) => {
  console.log(`[SW ${VERSION}] Installed`);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log(`[SW ${VERSION}] Activated`);
  event.waitUntil(self.clients.claim());
});

// Network-only strategy — all requests go straight to the network.
// ArcGIS JSAPI and feature service calls must always be live.
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
