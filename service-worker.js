/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "/Portfolio/precache-manifest.1d8d42ab500e5ca43f3ea43456df909d.js"
=======
  "/Kah919/Portfolio/precache-manifest.108997d93cfa81c369fef6d6ef51b92d.js"
>>>>>>> Updates
=======
  "/Kah919/Portfolio/precache-manifest.5972b67849f83911cc3c4502d3aba87f.js"
>>>>>>> Updates
=======
  "/Portfolio/precache-manifest.42fb5b1fe275aee3a5bf50747c10b925.js"
>>>>>>> Updates
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
<<<<<<< HEAD
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/Portfolio/index.html"), {
=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/Kah919/Portfolio/index.html"), {
>>>>>>> Updates
=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/Portfolio/index.html"), {
>>>>>>> Updates
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
