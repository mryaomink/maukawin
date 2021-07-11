'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "71644c80800399ff6ac912b65d5a9a19",
".git/config": "1bcd57ed031af74a2db56acae4fd9675",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "064ac2f40b7a204a952a51e6af0a4a64",
".git/HEAD": "64f2e9d34ca72f3b1c028b4b8f6635c7",
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
".git/index": "71b086f38ee4a0434f686401d85495c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42a04e1a745c6d839aa3fb92f5ba8acb",
".git/logs/refs/heads/bojoyao": "48b2ca98c7e12c851ac5168a301f19e1",
".git/logs/refs/heads/yaoprod": "4af8bb2e491e1e54b96ba2dfa9f93bab",
".git/logs/refs/remotes/origin/bojoyao": "daba5700579eea1e9ca812be8280185d",
".git/logs/refs/remotes/origin/main": "45deebce43e4eedf497977f1520283a8",
".git/logs/refs/remotes/origin/maukawinone": "42743746c0fca5fa836275e449346f12",
".git/logs/refs/remotes/origin/newbojo": "c3847ba9ed346dbe00609b729ed7c11b",
".git/logs/refs/remotes/origin/yaopod": "0fc636f5186bd26078870fbfd8602dff",
".git/logs/refs/remotes/origin/yaoprod": "5dff3cc61b3fdb9c5f230520058e7e93",
".git/logs/refs/remotes/origin/yaowedbojo": "45deebce43e4eedf497977f1520283a8",
".git/objects/06/5a5ae4a48dbe6500c49e23df281bdca63c3b73": "eb461a64e267924f051e2408647c31c9",
".git/objects/06/fffee532449a7741949eb0a1d85d4238286c80": "9b565a27d894a516aeffa1b13d1dca71",
".git/objects/09/06cc7030feaf3bbd991f1bb4d2d6f99e7f7421": "bf1023845fdacd782a880f13b260b174",
".git/objects/12/0fa146b090e5df18b9aef7a40bcc3bc057ca45": "f44996dc7fc5af641de354f6f69dc15a",
".git/objects/15/2b08390d68660880da25391bd3717a9eef1078": "8a92c1795daf10b8d351f2d89ad93863",
".git/objects/15/ac572cf0035f8ffc96955d74cc3ba8653fecb1": "1fcbca93a34bcdf443020c48290c890c",
".git/objects/1d/1a1aa561bee396c9fc88c7eed21d0c1e51cdb5": "0e490097c1373729e53fabd392b852c0",
".git/objects/1e/47f4240103f8358c246727b6760008553ab699": "b6ff582b0efe25a83bb9e5db5768393f",
".git/objects/20/2a75fc70cc0f574fb130da6e5a24e892050ca8": "af6e56ff7b2c3b496f97e53b3f22c9d6",
".git/objects/20/54d57a0438ccbca3684e0e2c7f476bec494695": "acc09849302d1fccb8b1e359a2fc4b77",
".git/objects/24/c446058cc8e2b791b862c66696a682120c346d": "e1fc2c3f971acd0e574bc89711c5801e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/b78f9d3989a5ee3c809d9de03512cac4e2d447": "1113be92b62bd04f76e2b2ba9d772584",
".git/objects/37/8e2fc181571545404407f94523ba46e2835804": "78d1e3cd05c59772dac83f573bed798c",
".git/objects/44/1e0c70db674c2167bff219d6c26314c2fe205d": "d8093dd80f4bbf207b7c5a486edd0f71",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/72ebed911460e970e1205cfc050088f4066f43": "61b03d95a84989cbeff61b7bb133574a",
".git/objects/4d/ae28fb0be1af7bb473e9fa68115a85f0e8e4c9": "4aba9023878c31463e248533bab251ed",
".git/objects/51/24023e7587d27c9af237e3a77d798736624b0c": "334fc52407eb03e576b584539acd117c",
".git/objects/55/710b011f59f80d087ff7bfa8103acdf7afe618": "1a095ad10af56ce5070d4e49ccffe087",
".git/objects/5c/1fddeeda4f9a5e84a5f0b218c02aae46485b33": "fb4894877d08da6b512fd07998307c29",
".git/objects/5e/08d35a1d44ff38b1ce06099dea7665d9bbaed7": "216af5f8cfec93d428658b5a4ccd776f",
".git/objects/65/b40b756785c1c3d842989f362c5d062a333a2a": "264b9fc6268bf85e84b337418030a061",
".git/objects/68/574b5778f55d1b84c5782e402a8112e8a15d21": "363e353f35988c2b6fbf015e60cae1d2",
".git/objects/6c/7c9d5fca55b288e56a3572ed04c2810a5278ae": "c0612fc8e8dcf97c36aef0aa2ae77f5a",
".git/objects/72/3d35c31828b30786911f40d3f251fff3e086e6": "672a34633d1db9e589c359d0a618155b",
".git/objects/74/4dec3649d711cc3b85aff2e5ecc6d60ebc3a4b": "39060a0d30191e97786071d74c9c9e9d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0e0b25a48ca593bc0e558f8eab9564f76731c9": "7047fbbfab1ea4af117ce3a43a319cad",
".git/objects/7b/ca1ca686ff68b447da36c7824badbc3da4c204": "9cafcf3cf568880d90bd30d19d77bfc1",
".git/objects/84/a8ff4df4ef44c7082d188b7622015442e922f4": "1b5b877c29ca493aa0db1372b25bac2a",
".git/objects/84/aa3e25f9dd7c66a3f3ea1266cdf98d379640be": "0816d669f36b10a4e45f1572a6157993",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/6663c50154703f3f5cfda9e75e46924acd9ff5": "5ba1d1f459270466cd4eff9dfb5aaca6",
".git/objects/8f/74b42ea55491cf02ba4c4ee145bc2e35a37a49": "4148aa483fdba86301a53939bd4da95f",
".git/objects/92/18722d24b7b1b04c978644c0aca5a33887a3b3": "c19dc70b38a2bd0edd68708e836af4f1",
".git/objects/92/1b0a8ac444fc621b45c5b1f18deb7be9027cde": "10cc30bb94062ba2b3e6141607d4b9e8",
".git/objects/92/7bd7e8ea3469c7ef73c6c5a24cb264f9d892cb": "be3704299d45d1cdec6dcf8b7d67e52d",
".git/objects/93/f5564e42cbdf55f83dec0393f9414434263b49": "9274af0ba0affe7e4eb05252c4737f6a",
".git/objects/99/a2441b5f55183c67d58540b620d344958e1f26": "b682e64157fe87ea7868e7a86f1c2072",
".git/objects/9f/fc7c374abe3944a85c1499d28e3446a693eaf8": "dba67181a897f4fef230e7cfb16160dc",
".git/objects/a0/af9e43e31c951aca297df30c1bb041ea11970a": "565836b46f0d4cdc6f9e6dc1989e844f",
".git/objects/a0/bcf1d3b1d99a1ab6604bf353a0bbe08f9ce2a2": "b147958e5d118891131843bea24b8857",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/36883486d5f4b74744395e4625d8b8422daa9b": "d50e851c21cde20792164b94df91806d",
".git/objects/a6/4b8ebfd7c48eb14ea70ebb2c66ed8e52ad29c3": "1ef53286042dc45b795af270b5f1a86b",
".git/objects/a6/b2a2c2e165340d77291f00dcccb5fbb26019c6": "b25c0fd183cf3bee0cf78ff632f02d1e",
".git/objects/a8/b91c611034ebe047c2d96107dafd13418a58fa": "8fd829b59dc7de22ca09db9e183c4db4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/d18dd00c6a930cd8b8b26ce4b8b9b3dd664731": "cecc16c93f06b5ab608f8135241f9297",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/a03c76e575190553883af2e228f3af9956476c": "2a498ebabc070b6d91d85b6294f3cb32",
".git/objects/b5/43de3b6df19510e5b6bcf1be2d8a3e9c100495": "f8dcdd7e659a9d3efaf344798b9fca04",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/516c1d977dc86266ac3cc4aa58cf078bb5ec47": "cd6572df1489d308e0d9b94a1e48a838",
".git/objects/b9/2956f263f4dc04eb6c0d6320c9b4756c21c112": "c9024e994194cbf86c6f8fd68552d901",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5cb947d037adc3145f3af9159bdb1874099619": "9d93f9c9a2dbce7faaca71409e6d3993",
".git/objects/bc/ff44123cfc766673e920cd973708ceb5877b7b": "41986215bbcda90d9ff676016ac8cca9",
".git/objects/be/2b1905070d9e0e2df66daf1193c95e555f526b": "8dbc81da97f746bbb843ff4d952e5244",
".git/objects/c2/a6e706056a43442f72d72fd1134c5578b3a8be": "c012da7ae11c8513125efe920abd9849",
".git/objects/c6/6ef2b2f83f35a965afdf67eadc2eb1eb16fc82": "f606a1ab51b726162f7fadebf8fb9e39",
".git/objects/cc/ab2292d68a3f240a45d2a33e2a566d03b6ee1d": "368b58ca46ad2a03bb30825a188949dd",
".git/objects/d0/d07e186aebff6426e5ea047696b4d98efe4bbd": "f4fc4720f1d65b3f9a7b95818dc18156",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/1bbd00c6f475d7b39cd6f96d6f0293bd1a54ed": "2c18ef87a49ac841f7bf3b1ed153ef10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/23526005b780358490d442fd7ebcbc9b5b11af": "f4b01df6eb822510e9353396e51a31b0",
".git/objects/f5/e5094a08e3186e96b9f678a299b4537e93f4ca": "5d786388d15d977b3d13681706237db6",
".git/objects/f6/92bdf5b35ebce61e7fe6039a6c7127f1e1293f": "23e2d8b49e31c2ac5fddb95c91b38ecf",
".git/objects/f8/5e89b3109aa3981b1d560bd05d262e8b280a9e": "d1f4b99712169a76e3a0b7b20905e46a",
".git/objects/f8/c377c3c817916674554372f84d7850119dd5ea": "6a06135b0d4fe3d77ce09fad6b949d38",
".git/objects/pack/pack-fd1725d449b17cdd48e68f8959f443da079449d5.idx": "19038d9a3e0f74ca77de10e1654a082c",
".git/objects/pack/pack-fd1725d449b17cdd48e68f8959f443da079449d5.pack": "25b29e1e50f85824baffd49c65b4ed0c",
".git/refs/heads/bojoyao": "bf142d3cf26711f44b57f2b88d0bee3f",
".git/refs/heads/yaoprod": "1ad19c2ce2662a02e4ce6450505ebed3",
".git/refs/remotes/origin/bojoyao": "0c990603fe009036e9e4595d8e9dd17e",
".git/refs/remotes/origin/main": "8341f4589702745a983a049378107c1c",
".git/refs/remotes/origin/maukawinone": "7abe1b132c0b2a9bfabbfb05841316a1",
".git/refs/remotes/origin/newbojo": "ab87e27a2a12f4075e9903e2976499c0",
".git/refs/remotes/origin/yaopod": "bf142d3cf26711f44b57f2b88d0bee3f",
".git/refs/remotes/origin/yaoprod": "1ad19c2ce2662a02e4ce6450505ebed3",
".git/refs/remotes/origin/yaowedbojo": "8341f4589702745a983a049378107c1c",
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
"index.html": "8189e18f77b41e630bebe454372b9dc8",
"/": "8189e18f77b41e630bebe454372b9dc8",
"main.dart.js": "4a6e53cebc116fd7de929313c144b879",
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
