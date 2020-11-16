importScripts('/pseudosocial/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pseudosocial/_nuxt/17c60825739116ab52c5.js",
    "revision": "f9901afddbbad32ab472bfa041627b54"
  },
  {
    "url": "/pseudosocial/_nuxt/26a898571c62c9cc6eb1.js",
    "revision": "c5bc0a595cee14c2ac201ebe22762d5f"
  },
  {
    "url": "/pseudosocial/_nuxt/28a3a5da0b757986736a.js",
    "revision": "d7903a2cce0c5ed74fa26ac72cff0a5d"
  },
  {
    "url": "/pseudosocial/_nuxt/44c7e0d3b6ed616e4860.js",
    "revision": "036b6f89e05346cb620a9de69e368925"
  },
  {
    "url": "/pseudosocial/_nuxt/76092a5899b373d3f4e7.js",
    "revision": "3ce30edc4b452b12d712658e8a8ff4a2"
  },
  {
    "url": "/pseudosocial/_nuxt/859370bc89af6b754702.js",
    "revision": "9749f7d64ca3b09af4a4b3904e453705"
  },
  {
    "url": "/pseudosocial/_nuxt/8cb98d6b855821bedbfc.js",
    "revision": "4d7b83ff493f9503d8f7b90315601b0f"
  },
  {
    "url": "/pseudosocial/_nuxt/b4f0bd64206b6e11fd88.js",
    "revision": "11680e6f1186d5b0273f791c3834ea44"
  },
  {
    "url": "/pseudosocial/_nuxt/eab7427716666a60379e.js",
    "revision": "d033227765420e72f85f36463bf03100"
  },
  {
    "url": "/pseudosocial/_nuxt/f2adb3089a93b3a3aa72.js",
    "revision": "2a53a7febf4a9856af25a1f943ed5423"
  }
], {
  "cacheId": "pseudosocial",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/pseudosocial/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/pseudosocial/.*'), workbox.strategies.networkFirst({}), 'GET')
