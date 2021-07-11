'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cc7999eeca652ea0bc3c1c5f616f8693",
"assets/assets/images/akadnikah.png": "7440fb9a56ade8775ca50e02a0e7d11f",
"assets/assets/images/backtiga.png": "db8210b5c5abbc925d2fcbcc41a76d8d",
"assets/assets/images/bgc.png": "1e1683bbbab19c14f461d24284770317",
"assets/assets/images/bgcop.png": "355aafc0012717030fecc6316a942baa",
"assets/assets/images/bojodepan.png": "a1374727fd512e38705fe2ac5e5d6a5f",
"assets/assets/images/bojosplash.jpg": "2e0426bdad62c1d320d4b9b64338274d",
"assets/assets/images/botbatik.png": "55d1475a415b5dde77d05c0e1e14336b",
"assets/assets/images/botri.png": "3cd19b17d1c9f829175aa2b99ebe297a",
"assets/assets/images/botright.png": "4f6bf648222b07eeb920c5fbc21c62d2",
"assets/assets/images/bottomr.png": "3d25f216b88e238562cc34ab38f05114",
"assets/assets/images/couplemid.png": "4982bc2139e656b4c0da81fbe3ff181e",
"assets/assets/images/delapan-min.jpg": "b43eaeff731ef07b28c9a1d0f9a23348",
"assets/assets/images/distance.png": "5332f6fbd31beb5db82590416067ba63",
"assets/assets/images/dua-min.JPG": "18ae3819bad8e6814864594372eed162",
"assets/assets/images/empat-min.JPG": "b26af259bd223d5ed430acea51f2ff54",
"assets/assets/images/enam-min.jpg": "d1cfc1c56d18302d65dbe167befd8f0c",
"assets/assets/images/imgwords.png": "59fc1b8af375a7027e1a91a57cbae07b",
"assets/assets/images/lima-min.jpg": "4d8baa8e8bf4b462b6223b71fe90cdd8",
"assets/assets/images/maps.png": "5f89d50a4d562df8733c4668a49cd387",
"assets/assets/images/mask.png": "c70b76996feb876402a9b66acd00664a",
"assets/assets/images/namapas.png": "cf4d5481bf02acf65106e67750791995",
"assets/assets/images/newbatik.png": "d361b572cbd2bc11c9b92ff53352ad18",
"assets/assets/images/pihakbini.png": "e5cdf74876c803270e39d3fffcb7204b",
"assets/assets/images/pihaklaki.png": "0526300a2228e07616a89badfbc4f64f",
"assets/assets/images/satu-min.JPG": "aa46e821363bd0812b042765b192c406",
"assets/assets/images/sembilan-min.jpg": "f73feca64494bbfdec1248e53c558d0c",
"assets/assets/images/separator.png": "67dc9c860b23b479e46dd53b0e0b27cd",
"assets/assets/images/textcouple.png": "557e01438a342995388d696b30b4fc4d",
"assets/assets/images/tiga-min.JPG": "e6f9ead42634a376307eff17976f8080",
"assets/assets/images/topbatik.png": "1739c908cf0afb3e713204d4d9c92987",
"assets/assets/images/topleft.png": "d99ddea9489657cd4ff7fef36e9eb7fd",
"assets/assets/images/tujuh-min.jpg": "5a9b393a00c1143c73bc96d8c58be5b5",
"assets/assets/images/wash.png": "d467248af6ee991c986c4d41d8f35a4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "598083802f75355b81d3d7a6a3cf418a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58fc6b315e0ffe1cdc0c285bf7b186e8",
"/": "58fc6b315e0ffe1cdc0c285bf7b186e8",
"main.dart.js": "739a0b9745798536b418557450d2e3e8",
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
