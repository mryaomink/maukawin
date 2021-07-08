'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "44f1b28322c5005baebc147bb38224dc",
".git/config": "e3ae9438c09141bcad96e816c9514aa8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "92f504d979f8344a185b69cd8c406a8c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1a3ae9860a7d60b9e7ccc4f49649ee43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b543b36f8221f45f69273bd60a5c149",
".git/logs/refs/heads/maukawinone": "26f66ac0e7bfb125f6a6bc4db256fcb9",
".git/logs/refs/remotes/origin/main": "1b09dc22b6b8ed21d2a5247f4fe225a8",
".git/logs/refs/remotes/origin/maukawinone": "42176b591095a6b4b2eb1542d0f3624e",
".git/objects/0c/f0cc88ee8859acdbe5e4f07f1a11dbc5d08d18": "f210662775152a159dd98851429466d5",
".git/objects/12/0fa146b090e5df18b9aef7a40bcc3bc057ca45": "f44996dc7fc5af641de354f6f69dc15a",
".git/objects/1d/1a1aa561bee396c9fc88c7eed21d0c1e51cdb5": "0e490097c1373729e53fabd392b852c0",
".git/objects/26/8676527f1c365b8159cbd5c0bf4442b9842540": "9302373d526ef20a4c96d59b59ab4936",
".git/objects/2e/a1993b3f4c2b7cb6a1c4d47e7fc8e9b65f78c9": "c24d891ba5e4db4c225eea2c993a0f5f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/41/5d9d9b05e602cf43a66d31df19ca9d65c31887": "544b5da3a83e77346e7567a459e59ec6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5aac862d49dc926cf948e0b37088e25d90f09d": "8626feb08dbca0c4aaa9f195a41edf1b",
".git/objects/54/cfca198fe0875f7d44d0b595a6d4c0fb2a0262": "0260d0be041b51126181b2eaabd141ae",
".git/objects/55/710b011f59f80d087ff7bfa8103acdf7afe618": "1a095ad10af56ce5070d4e49ccffe087",
".git/objects/58/d6fea752ea7576c0846bcc8b616e8b0b1e90ea": "8ba5c658d5dc467bdcd468ea141480ec",
".git/objects/5e/08d35a1d44ff38b1ce06099dea7665d9bbaed7": "216af5f8cfec93d428658b5a4ccd776f",
".git/objects/65/b40b756785c1c3d842989f362c5d062a333a2a": "264b9fc6268bf85e84b337418030a061",
".git/objects/6a/7345bbc49d9e10fdca5eb174950f89e6d35deb": "766b2d8bdd97e93719a4a48353a29f35",
".git/objects/6a/a0ab6e20e0241dad729a81f64a910b9360abc6": "9e3fdd1086d95d157a77efa3ffbb30d9",
".git/objects/72/3d35c31828b30786911f40d3f251fff3e086e6": "672a34633d1db9e589c359d0a618155b",
".git/objects/72/5c415b496c743b8a613c55f375acd54b5f9723": "cd23d0f3396362d1f1e4fc8d70aa6903",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/aa3e25f9dd7c66a3f3ea1266cdf98d379640be": "0816d669f36b10a4e45f1572a6157993",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9dd390823b5f136a666b746111ef276ef17a07": "b85ea5374a2009db94e4b169be2e5647",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f01a0df042ced65116c41ec68bee761219d8f7": "f0e2a06fb7868cf3a2c8c53e6eb466b8",
".git/objects/99/a2441b5f55183c67d58540b620d344958e1f26": "b682e64157fe87ea7868e7a86f1c2072",
".git/objects/9a/3f396bfd8291998e1305cd8860ca09431d5e13": "41c69d7b674b3b616c4b06695b88ba70",
".git/objects/9b/c77a493002adc3c6595476e1c8cc7ccd4e92f4": "68a577be26200e930bb00f2984bb01ad",
".git/objects/9f/cd6db912af13037c3c10765bd9de418327ca0a": "927e9ea51cba2ad6f438f04b74cbd4bc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/1296f0b4156be870b0d3de4cacea7b71b515bd": "6be9d179a87e719d88bcd44926b8d6a3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/87ca05ee8288b8bb532ef0acbaa83c59670ac8": "eaf7d80c9d260ddf0fa7407374cc7466",
".git/objects/b1/e04af9f14bb0f32ce0ce004adc489882f3f8cc": "d5e1d7d06b9b7ce8362a3fcba8ded54b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/516c1d977dc86266ac3cc4aa58cf078bb5ec47": "cd6572df1489d308e0d9b94a1e48a838",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/89778909664fb24819fa6abf864680dae33330": "b453d0017c1bf08d7d77cde0fe10c4d0",
".git/objects/c7/17a1fa925295aad61dceeb69cb34f1126616be": "a99571eb1b56e12885cf6c2df39fb4fe",
".git/objects/c8/7384f9ff285db84d229ca3619b3efbdd4b642a": "487d673fbd7cfa6809ce3a11f4eafbf6",
".git/objects/c9/a9540d92a7478464725a7662e628880fb89ccb": "d7852dedd08ab68fe3b79b4ee0b79c15",
".git/objects/cc/ab2292d68a3f240a45d2a33e2a566d03b6ee1d": "368b58ca46ad2a03bb30825a188949dd",
".git/objects/ce/68c4a69d9e432dc9fb1fc15790bd1ac56c5122": "ca7ab266bb9a56815097c5e0c0d61297",
".git/objects/cf/7b984a24abf91954022e8016af4c619b2b1518": "aa1cedef9196650047c3381f0db48eae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/884e21fe5f5c97d64d4e25d3e24c9ad9f7da8c": "ff7ebda00c9bc768a825454b1534f8c4",
".git/objects/da/dc73ed0b0c66da0740db3b711e50789966af7c": "b346f4d57fabe8510ec38467488d18d3",
".git/objects/db/d1b790769aa60794f67f5df0af926cb869573f": "2d631ae7a47db1d89ccd0f54caf4d9e1",
".git/objects/df/260eaccdb0ead2cae214a516f544d3d6723dbc": "4e326b6309a4652b860c6ce59ffae94c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/3cf0510e41a51eb0bde0ab9361f16aaaf61108": "54e8df6f8445dc7d4e26478b80069040",
".git/objects/e9/f6036cc4b3c32fddf98f079bac8f4cc05e85cf": "dcc569ad03c0a9591204e9d08fe5770d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/ab75b9379934dfb2a0bdf80ae3db14939e2273": "41316c3de2ebe15970d924f2444cf6f4",
".git/objects/f5/e5094a08e3186e96b9f678a299b4537e93f4ca": "5d786388d15d977b3d13681706237db6",
".git/objects/f8/5e89b3109aa3981b1d560bd05d262e8b280a9e": "d1f4b99712169a76e3a0b7b20905e46a",
".git/refs/heads/maukawinone": "2a068f666c31845a6f5601d155f8d368",
".git/refs/remotes/origin/main": "c1e3700d62a9c79833333b6238df39fe",
".git/refs/remotes/origin/maukawinone": "2a068f666c31845a6f5601d155f8d368",
"assets/AssetManifest.json": "f7f18ebc34408bd1dca567fca4404556",
"assets/assets/images/akadbojo.png": "887247114ad8d13b7229f8c7d1af6c8d",
"assets/assets/images/akadnikah.png": "7440fb9a56ade8775ca50e02a0e7d11f",
"assets/assets/images/backtiga.png": "db8210b5c5abbc925d2fcbcc41a76d8d",
"assets/assets/images/batikbojo.png": "a38c16cf51cba5f5a19519c4e6911d8e",
"assets/assets/images/batikjawa.png": "95fecddb4ecd1cea0eb7c50334075e80",
"assets/assets/images/bgcop.png": "355aafc0012717030fecc6316a942baa",
"assets/assets/images/bgutama.png": "3bc30ac715493c2e9db392c2477921b5",
"assets/assets/images/bojodepan.png": "a1374727fd512e38705fe2ac5e5d6a5f",
"assets/assets/images/bojokedua.png": "41f2855784717a6867c1673778bd2b16",
"assets/assets/images/bojosplash.jpg": "2e0426bdad62c1d320d4b9b64338274d",
"assets/assets/images/botbatik.png": "88eb9226f72e5c182f439b8def343f5b",
"assets/assets/images/couplemid.png": "4982bc2139e656b4c0da81fbe3ff181e",
"assets/assets/images/imgwords.png": "59fc1b8af375a7027e1a91a57cbae07b",
"assets/assets/images/nikahbojo.png": "d69f397dd2e02603c97b50b26e761977",
"assets/assets/images/textcouple.png": "557e01438a342995388d696b30b4fc4d",
"assets/assets/images/topbatik.png": "1739c908cf0afb3e713204d4d9c92987",
"assets/assets/images/words.png": "436cd4d44bc940881532b2d954dc7514",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c8f2ec2d66445fc45abd6394e52bc19a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "78622207e225477de09b1644281fdcb1",
"/": "78622207e225477de09b1644281fdcb1",
"main.dart.js": "653b420f555b7797d2070398363497f5",
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
