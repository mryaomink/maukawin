'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "749de6db5191207c287334945c3fbc86",
"assets/assets/images/akadnikah.png": "7440fb9a56ade8775ca50e02a0e7d11f",
"assets/assets/images/backtiga.png": "db8210b5c5abbc925d2fcbcc41a76d8d",
"assets/assets/images/bgcop.png": "355aafc0012717030fecc6316a942baa",
"assets/assets/images/bojodepan.png": "a1374727fd512e38705fe2ac5e5d6a5f",
"assets/assets/images/bojosplash.jpg": "2e0426bdad62c1d320d4b9b64338274d",
"assets/assets/images/botbatik.png": "55d1475a415b5dde77d05c0e1e14336b",
"assets/assets/images/botri.png": "3cd19b17d1c9f829175aa2b99ebe297a",
"assets/assets/images/botright.png": "4f6bf648222b07eeb920c5fbc21c62d2",
"assets/assets/images/bottomr.png": "3d25f216b88e238562cc34ab38f05114",
"assets/assets/images/couplemid.png": "4982bc2139e656b4c0da81fbe3ff181e",
"assets/assets/images/delapan.jpg": "fdccadd1c5992316339a134ece4decd7",
"assets/assets/images/dua.JPG": "7c8213440f0792197fabe09f26e47919",
"assets/assets/images/empat.JPG": "eb7527324d8b571406cb75ebebc78e07",
"assets/assets/images/enam.jpg": "c6b66577a6ccfaf421c4a375d21c2452",
"assets/assets/images/imgwords.png": "59fc1b8af375a7027e1a91a57cbae07b",
"assets/assets/images/lima.jpg": "c35eca4cf74510164e827a5d446bb041",
"assets/assets/images/namapas.png": "cf4d5481bf02acf65106e67750791995",
"assets/assets/images/newbatik.png": "d361b572cbd2bc11c9b92ff53352ad18",
"assets/assets/images/satu.JPG": "2d7513d39024b3856558607198bf8440",
"assets/assets/images/sembilan.jpg": "10b3a2295919400d6231a8e83a732263",
"assets/assets/images/textcouple.png": "557e01438a342995388d696b30b4fc4d",
"assets/assets/images/tiga.JPG": "3c2a4c7ae4ef897cae51b262d08b4f46",
"assets/assets/images/topbatik.png": "1739c908cf0afb3e713204d4d9c92987",
"assets/assets/images/topleft.png": "d99ddea9489657cd4ff7fef36e9eb7fd",
"assets/assets/images/tujuh.jpg": "5b9b88aa15ad42c7003bbf0a613f3400",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4ee608832104104de3f132c5246e5950",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "12d5b0ace72edee11da02c5a32bbaffc",
"/": "12d5b0ace72edee11da02c5a32bbaffc",
"main.dart.js": "12ffc2b5a68e22051e233b0dbbd9572f",
"manifest.json": "c030de211e035243330f34830e0ae89c",
"version.json": "98124ffe5acdc992fbe7b0e2f7836451"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
