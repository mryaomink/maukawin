'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "28343a6d4d9efe06acc57d11c39fe54e",
".git/config": "3c513abe28a8a3fadb97589ba3e57654",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "17f4d19189ce1cbd3f3d8cba4ea602df",
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
".git/index": "3550d6d9ca3b5701295d08a9e67fe2ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2334cf14c5a4340f12e488d88ae9eea7",
".git/logs/refs/heads/bojoyao": "798ce43a8682a3a052a1047ecc56de58",
".git/logs/refs/remotes/origin/bojoyao": "4f73501edea024b7dc08c8a7e0265192",
".git/objects/03/0c18ae798b6894c4c81d87550cfc642ced3645": "49b4e5bad8bca1814fad9d6e750e5004",
".git/objects/03/1077a99c6bc3c29a6c864fe17f520f5cc91324": "b31d839c4a0962b3e18698f29fe41dbc",
".git/objects/05/1600982d4228b4e45c29cf1b96fa30a99175a2": "170d0ea27842157bbf4853d44a8b8e20",
".git/objects/06/5a5ae4a48dbe6500c49e23df281bdca63c3b73": "eb461a64e267924f051e2408647c31c9",
".git/objects/06/fffee532449a7741949eb0a1d85d4238286c80": "9b565a27d894a516aeffa1b13d1dca71",
".git/objects/08/591520a8b2a7a2f5d6dd5c370fb1f864b099ce": "7290576b9081998abc7b95c569ae499e",
".git/objects/08/68032f6003cf00a9b8ed092db95d501e1f079a": "8e7660afdfce0edce9609bf837c56d1e",
".git/objects/09/06cc7030feaf3bbd991f1bb4d2d6f99e7f7421": "bf1023845fdacd782a880f13b260b174",
".git/objects/0c/f0cc88ee8859acdbe5e4f07f1a11dbc5d08d18": "f210662775152a159dd98851429466d5",
".git/objects/0d/48cfc46010d1d9dea58559c6fbe57bf078a683": "780393ede883a276a548a0f29d4e6a3d",
".git/objects/12/0fa146b090e5df18b9aef7a40bcc3bc057ca45": "f44996dc7fc5af641de354f6f69dc15a",
".git/objects/13/a002a29a60850df9d5f42455e1777bc88f5d03": "709ef8fe5f6fe5cbd8483e882b4e8bd2",
".git/objects/18/f0c478ab4cf5ede0b2ac19f7d12f1949e255f4": "31f1f4ce2a5958d488aad19cf6e87803",
".git/objects/1b/3fc1d003bdab3bee55dafa8d5a8e84d14db05b": "9d18092cf1169d4f290c428e9a24eb5b",
".git/objects/1c/eb8ca6407a933bbf9e5d3390c7776b92dcf276": "b7014296ad717d2a1548c9c89c612d29",
".git/objects/1d/1a1aa561bee396c9fc88c7eed21d0c1e51cdb5": "0e490097c1373729e53fabd392b852c0",
".git/objects/1f/608b7a26d89c34f746bbeba0c0aea14f71291d": "259a1a59dae6bd30f4c21fc050b9f725",
".git/objects/1f/fff4f1aaef6dd4722708db828f738c310ac2a3": "447cab287e0ae914beefdef81c6f738b",
".git/objects/22/dd163ef5336fd050c6ccd33c33f67f847fb183": "3b1b5513cecbe96886a4260a466b6451",
".git/objects/26/8676527f1c365b8159cbd5c0bf4442b9842540": "9302373d526ef20a4c96d59b59ab4936",
".git/objects/26/8a448076abae4d41348ba190a1ab584fc401f7": "b6642697845fc28ad699e9d4aa7a949c",
".git/objects/28/b9324407c7d8691a472431a63dc45b497435e5": "e93a0bcac4b8924996cda3a0bb3a768f",
".git/objects/29/9233bcb546f3774440dae9cb62f880862802c8": "165a30fd341c3e1f2c3d059b9e5d539e",
".git/objects/2a/1d7b68b9298a4398606ec7034d41aeb547247d": "e8eeaa1bdd7a5cef02c2832770460236",
".git/objects/2c/e7a50c84bd3fceea3796d228e30c1b177a8b1e": "76e1e222f946c35fd51c551b5be43bdd",
".git/objects/2e/a1993b3f4c2b7cb6a1c4d47e7fc8e9b65f78c9": "c24d891ba5e4db4c225eea2c993a0f5f",
".git/objects/30/baa8179028449d75364d513abe8e518fcb5731": "a1e8833e3485cbc0513a408bf1c548e3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/8e2fc181571545404407f94523ba46e2835804": "78d1e3cd05c59772dac83f573bed798c",
".git/objects/37/9f71c22c9092a63d8400192edbac23622e817c": "082a4f6c11fbe77b362ede5d7d5017b5",
".git/objects/3a/f72379956955f89f72615f53a8ca77fde5aada": "1c03d3a420afb121a9d2770fab0009ec",
".git/objects/3b/ac191bb1b0a24ffa4beca4a092ccc0ec6744e9": "fe8c7f7c36e9989ce179e5c7c5bcd843",
".git/objects/3d/a04204d2bed9f591d3db07fbce5f895eb6c90c": "b91a9271215405c3c96f45ec81d7c615",
".git/objects/41/5d9d9b05e602cf43a66d31df19ca9d65c31887": "544b5da3a83e77346e7567a459e59ec6",
".git/objects/42/3d05635696494119d3aa39ecca7e16bd1f592c": "85c59785089a8b17072bb2155244c3fa",
".git/objects/44/2d7ba5b912e6555d0d0bcaf7fa8f10b6ed0833": "fc4bd16be838a01b7025de29f5b3186c",
".git/objects/46/21d7198037e6c5f40c8e3fb3f45e394e1905c5": "8b3246b293e466964ff8ac15b40552e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5aac862d49dc926cf948e0b37088e25d90f09d": "8626feb08dbca0c4aaa9f195a41edf1b",
".git/objects/48/8bee21d7f8c4b16d3bffacd7d536128b67930a": "014724591eda68e9b5fc11bb015acb99",
".git/objects/4d/08ccf5d162752d30529850ab698af4bb96f551": "29a1ee1e63dae1d876fba91765fd9a25",
".git/objects/53/f660d9a1e13bfd93d77093d22ab5d8468ff2a4": "1705ca38ec4d2118bb889a9041c65f7b",
".git/objects/54/cfca198fe0875f7d44d0b595a6d4c0fb2a0262": "0260d0be041b51126181b2eaabd141ae",
".git/objects/54/f399a8c3a92d0850c3927b179a27a6eff000cf": "aa3362854b48b6e8792520a9e9b1a448",
".git/objects/55/710b011f59f80d087ff7bfa8103acdf7afe618": "1a095ad10af56ce5070d4e49ccffe087",
".git/objects/58/d6b5ba882be9f2af66cb21277bee400f0382cc": "0a08a9b534bcd4447e67eb60b409d7d8",
".git/objects/58/d6fea752ea7576c0846bcc8b616e8b0b1e90ea": "8ba5c658d5dc467bdcd468ea141480ec",
".git/objects/5c/bc4b2c0b451f0ebb68caff45c436ccfbbe8ed3": "964382321bc986641af4082dbcd7c915",
".git/objects/5e/08d35a1d44ff38b1ce06099dea7665d9bbaed7": "216af5f8cfec93d428658b5a4ccd776f",
".git/objects/5e/bc58ef0061fc2e3f583acd7de7728aaabe9570": "2b353b36ae4f4a9f853578d31e21eb2b",
".git/objects/61/b861aec9822c29c80d8c0793886ed779b3562a": "8a1ea3df211067cd101356745548e6f2",
".git/objects/62/5fb2b6fc44bb94a9abf9052b3d75a13cb7b973": "2398af6d0dc748128323951ed4fa3404",
".git/objects/63/9ec5a984534e87425b62cd58e1f7464e3eec8e": "a1801936d9ffe6adea8ace5549b291cd",
".git/objects/64/c2ce6011132b7044e85ac45770ee2c3d136483": "53093f31ac9fef0d2cdd286f15f124f7",
".git/objects/65/b40b756785c1c3d842989f362c5d062a333a2a": "264b9fc6268bf85e84b337418030a061",
".git/objects/6a/7345bbc49d9e10fdca5eb174950f89e6d35deb": "766b2d8bdd97e93719a4a48353a29f35",
".git/objects/6a/a0ab6e20e0241dad729a81f64a910b9360abc6": "9e3fdd1086d95d157a77efa3ffbb30d9",
".git/objects/6c/7dbf6b18fbb3031f07cbc1e731d8d845072357": "1d5d76f5bcb918fe8ea37b8c529ae641",
".git/objects/6d/29a65c198ab51757d7d81b5f6c1fa0a68c7ff5": "3c85f7886546489d6c93f5b4ff0bbebe",
".git/objects/6d/35b9a7d8f81d93e7cfb4c82d58f6e92b8e09c9": "58894514850103bb38c26bc22882e62d",
".git/objects/72/3d35c31828b30786911f40d3f251fff3e086e6": "672a34633d1db9e589c359d0a618155b",
".git/objects/72/5c415b496c743b8a613c55f375acd54b5f9723": "cd23d0f3396362d1f1e4fc8d70aa6903",
".git/objects/72/d988726989b3b73dc3e1006b4f087100026ce0": "8aa335e453e46076f4bda18463f14000",
".git/objects/74/4dec3649d711cc3b85aff2e5ecc6d60ebc3a4b": "39060a0d30191e97786071d74c9c9e9d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/59b7c878fd350fd7cae9fadcb1aa5ed43c69b6": "2b9eba1f101be12b0708a39750aa94a6",
".git/objects/7b/ca1ca686ff68b447da36c7824badbc3da4c204": "9cafcf3cf568880d90bd30d19d77bfc1",
".git/objects/81/2da4f99dd6e733c67f103b4ca2dd87e061d169": "922775be6cea38bc530454c7977ff181",
".git/objects/84/10e852a97b743cf2ed1d6b570600c24369e47e": "7b6be75d78d666cd0c4d8ff5f1896a31",
".git/objects/84/a8ff4df4ef44c7082d188b7622015442e922f4": "1b5b877c29ca493aa0db1372b25bac2a",
".git/objects/84/aa3e25f9dd7c66a3f3ea1266cdf98d379640be": "0816d669f36b10a4e45f1572a6157993",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e318b62efa78650966a4eb9618588637d8fc94": "61c09eb9f4579b5687cc244d9b3ba106",
".git/objects/8a/9dd390823b5f136a666b746111ef276ef17a07": "b85ea5374a2009db94e4b169be2e5647",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/78f1fcf2cc81b35fd468e1d40520acfbcfc897": "8186dc210687739cd514e8945081a48b",
".git/objects/8e/6663c50154703f3f5cfda9e75e46924acd9ff5": "5ba1d1f459270466cd4eff9dfb5aaca6",
".git/objects/92/18722d24b7b1b04c978644c0aca5a33887a3b3": "c19dc70b38a2bd0edd68708e836af4f1",
".git/objects/92/1b0a8ac444fc621b45c5b1f18deb7be9027cde": "10cc30bb94062ba2b3e6141607d4b9e8",
".git/objects/93/511e5b02aa7599a983441a53d2329a7e5aec9d": "b775aaea1ab2f9e0aebef24ee6db86c1",
".git/objects/94/f01a0df042ced65116c41ec68bee761219d8f7": "f0e2a06fb7868cf3a2c8c53e6eb466b8",
".git/objects/95/9b340a948f13d1e2ea39808713fce367539dac": "0bc3f1563d084ec6e3a3b67dfe1535e7",
".git/objects/96/6d5a64fdd1ea8e0358af6d87c0284aef9c54dd": "95899312a45add047ca5ac22a76842ac",
".git/objects/99/a2441b5f55183c67d58540b620d344958e1f26": "b682e64157fe87ea7868e7a86f1c2072",
".git/objects/9a/3f396bfd8291998e1305cd8860ca09431d5e13": "41c69d7b674b3b616c4b06695b88ba70",
".git/objects/9b/c77a493002adc3c6595476e1c8cc7ccd4e92f4": "68a577be26200e930bb00f2984bb01ad",
".git/objects/9d/87cfcb99d79e1326c0dcf2c6936132a1a9993f": "62802b34e48f0776f6ad1577335f8062",
".git/objects/9f/cd6db912af13037c3c10765bd9de418327ca0a": "927e9ea51cba2ad6f438f04b74cbd4bc",
".git/objects/9f/fc7c374abe3944a85c1499d28e3446a693eaf8": "dba67181a897f4fef230e7cfb16160dc",
".git/objects/a0/804768aed3a1b1371d76c6ad5a6d13e1c89960": "a06bac7e8406f2e439d6e6df432dcecf",
".git/objects/a0/fdc34d5d3c9d3cee876f5ebc8daf48be9d4eab": "2cb4a6e98fd3e1d5e29d6cb3492387d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/1296f0b4156be870b0d3de4cacea7b71b515bd": "6be9d179a87e719d88bcd44926b8d6a3",
".git/objects/a8/b91c611034ebe047c2d96107dafd13418a58fa": "8fd829b59dc7de22ca09db9e183c4db4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6cf956dfb9ea5bf737c1582427eae2a1929034": "47f00678b9d6160bb114797b8ad30f45",
".git/objects/ad/e66656aa3a6eac9ae0b379a7aa97db5e646ca6": "c851b92b3e1afdf797fcc3bd37f9689b",
".git/objects/af/87ca05ee8288b8bb532ef0acbaa83c59670ac8": "eaf7d80c9d260ddf0fa7407374cc7466",
".git/objects/af/fd5b032dcb1275d5e48fab9f8e4430bdb66c05": "8df95672831a3416a67ab47552519988",
".git/objects/b1/e04af9f14bb0f32ce0ce004adc489882f3f8cc": "d5e1d7d06b9b7ce8362a3fcba8ded54b",
".git/objects/b3/392f6e32814cca9bf5ef6cf8659d3428d7e784": "1b75350b60eefa095e8f1cc4e973f5ed",
".git/objects/b4/a03c76e575190553883af2e228f3af9956476c": "2a498ebabc070b6d91d85b6294f3cb32",
".git/objects/b6/3780adf0bba7b34dc3655aa3acead599a4540d": "30a8baa28c5168ade6db974ca4877cef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/516c1d977dc86266ac3cc4aa58cf078bb5ec47": "cd6572df1489d308e0d9b94a1e48a838",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/89778909664fb24819fa6abf864680dae33330": "b453d0017c1bf08d7d77cde0fe10c4d0",
".git/objects/bc/ff44123cfc766673e920cd973708ceb5877b7b": "41986215bbcda90d9ff676016ac8cca9",
".git/objects/c2/a6e706056a43442f72d72fd1134c5578b3a8be": "c012da7ae11c8513125efe920abd9849",
".git/objects/c7/17a1fa925295aad61dceeb69cb34f1126616be": "a99571eb1b56e12885cf6c2df39fb4fe",
".git/objects/c8/7384f9ff285db84d229ca3619b3efbdd4b642a": "487d673fbd7cfa6809ce3a11f4eafbf6",
".git/objects/c9/a9540d92a7478464725a7662e628880fb89ccb": "d7852dedd08ab68fe3b79b4ee0b79c15",
".git/objects/cb/c3113ce41376de240f0fe66a889a931a084f69": "81322e0c77ddbcc500916f1a81d48a72",
".git/objects/cc/ab2292d68a3f240a45d2a33e2a566d03b6ee1d": "368b58ca46ad2a03bb30825a188949dd",
".git/objects/cd/2c702c5e68f330253099f5cb53e043531c1718": "83fbe44784155156163246ca17f5a826",
".git/objects/cd/8d3bde1ec2688edd83377442f9c679e0dc8451": "ec6c086bd26bc894662c75cc8d7d5d5f",
".git/objects/ce/68c4a69d9e432dc9fb1fc15790bd1ac56c5122": "ca7ab266bb9a56815097c5e0c0d61297",
".git/objects/cf/386af321bb0560d0901a95d63320178027498d": "643b909ea23f417da77e5902408cca68",
".git/objects/cf/7b984a24abf91954022e8016af4c619b2b1518": "aa1cedef9196650047c3381f0db48eae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/46ad9f77e9b632087fbb705663bf5eae6c4924": "a626c97d4e90a7755bf700d5b88c05af",
".git/objects/d7/cd8b8adbd18945654542760a7a320d6daffe28": "403d767e1d77f6da5b15162d07f40733",
".git/objects/d8/a24a33889d70baede03765a1ade4c1d27ad47b": "03f44864f4c10e8faa19239bdfbf8d22",
".git/objects/d9/884e21fe5f5c97d64d4e25d3e24c9ad9f7da8c": "ff7ebda00c9bc768a825454b1534f8c4",
".git/objects/da/dc73ed0b0c66da0740db3b711e50789966af7c": "b346f4d57fabe8510ec38467488d18d3",
".git/objects/db/d1b790769aa60794f67f5df0af926cb869573f": "2d631ae7a47db1d89ccd0f54caf4d9e1",
".git/objects/dd/7d78354108f30ab4dc7f8ebd2674d238d93791": "1715fed14f7aaa957af42a9d55cd5d16",
".git/objects/df/260eaccdb0ead2cae214a516f544d3d6723dbc": "4e326b6309a4652b860c6ce59ffae94c",
".git/objects/e0/9dc9bd1e360171aa5eafef161ffa4335abe03a": "b3fe85751aeba35711d3423784ef6528",
".git/objects/e2/979cd79f0878c31253493f30e970bff1369a17": "6f10ac628b74ec8e1ca59c17ed1d3783",
".git/objects/e2/ac5cc0158098a4c023fb791e3c4d8fb93dcf0f": "159bf658b4f34e3155a6411ac847f96d",
".git/objects/e3/4d03f5662e7f08a5691df4ef4c2ca2e7d4aef4": "2907569a9f1ff9ff57aedecabc1c8e9c",
".git/objects/e4/e70fd599c11e2f3b85c396af754cb11cff3206": "e8ec480732762a939b549e0be092c8ab",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/3cf0510e41a51eb0bde0ab9361f16aaaf61108": "54e8df6f8445dc7d4e26478b80069040",
".git/objects/e9/f6036cc4b3c32fddf98f079bac8f4cc05e85cf": "dcc569ad03c0a9591204e9d08fe5770d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/9dae72dbfb648972e4b84a554ab1b553ecc030": "6485020a7fbd9ed28e89c0c0e4183482",
".git/objects/f1/3d1921f58e2bef6978dc84eafc4de5d8561886": "00827d4017814dd74dcd76fbf55aa7a8",
".git/objects/f1/dcc0d15d5b517ec698b960362eca8e3aa2ef6b": "4663e358a0ba65dc8cb03c66de990bf8",
".git/objects/f2/a2d55fce097eab62cc573731df3250c63282a2": "d36865ef3e1b85d8df5f88b5e338f1c5",
".git/objects/f3/d194ff3bfd4fac37ffbe972ebf541c6cc6b572": "05ef98b471d1b7cd8b2badf83b87a995",
".git/objects/f4/bb21335cd31b1e2dd306094d74d422cecc0e89": "a716fb391c0a81cbc593fff604f17157",
".git/objects/f5/ab75b9379934dfb2a0bdf80ae3db14939e2273": "41316c3de2ebe15970d924f2444cf6f4",
".git/objects/f5/e5094a08e3186e96b9f678a299b4537e93f4ca": "5d786388d15d977b3d13681706237db6",
".git/objects/f6/150e48ab3a09732f987a8fe9cdf8c516b25253": "e020e9b3751014370d6e8a8a0acb739f",
".git/objects/f6/92bdf5b35ebce61e7fe6039a6c7127f1e1293f": "23e2d8b49e31c2ac5fddb95c91b38ecf",
".git/objects/f8/5e89b3109aa3981b1d560bd05d262e8b280a9e": "d1f4b99712169a76e3a0b7b20905e46a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/bojoyao": "6fa1615db93044c072ccd18b963430dd",
".git/refs/remotes/origin/bojoyao": "6fa1615db93044c072ccd18b963430dd",
"assets/AssetManifest.json": "7f81eecdf96d65e0d04c2a2020e5a26d",
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
"assets/assets/images/delapan-min.jpg": "b43eaeff731ef07b28c9a1d0f9a23348",
"assets/assets/images/distance.png": "5332f6fbd31beb5db82590416067ba63",
"assets/assets/images/dua-min.JPG": "18ae3819bad8e6814864594372eed162",
"assets/assets/images/empat-min.JPG": "b26af259bd223d5ed430acea51f2ff54",
"assets/assets/images/enam-min.jpg": "d1cfc1c56d18302d65dbe167befd8f0c",
"assets/assets/images/imgwords.png": "59fc1b8af375a7027e1a91a57cbae07b",
"assets/assets/images/lima-min.jpg": "4d8baa8e8bf4b462b6223b71fe90cdd8",
"assets/assets/images/mask.png": "c70b76996feb876402a9b66acd00664a",
"assets/assets/images/namapas.png": "cf4d5481bf02acf65106e67750791995",
"assets/assets/images/newbatik.png": "d361b572cbd2bc11c9b92ff53352ad18",
"assets/assets/images/pihakbini.png": "e5cdf74876c803270e39d3fffcb7204b",
"assets/assets/images/pihaklaki.png": "0526300a2228e07616a89badfbc4f64f",
"assets/assets/images/satu-min.JPG": "aa46e821363bd0812b042765b192c406",
"assets/assets/images/sembilan-min.jpg": "f73feca64494bbfdec1248e53c558d0c",
"assets/assets/images/textcouple.png": "557e01438a342995388d696b30b4fc4d",
"assets/assets/images/tiga-min.JPG": "e6f9ead42634a376307eff17976f8080",
"assets/assets/images/topbatik.png": "1739c908cf0afb3e713204d4d9c92987",
"assets/assets/images/topleft.png": "d99ddea9489657cd4ff7fef36e9eb7fd",
"assets/assets/images/tujuh-min.jpg": "5a9b393a00c1143c73bc96d8c58be5b5",
"assets/assets/images/wash.png": "d467248af6ee991c986c4d41d8f35a4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fea7259e0d593aa996690d07b35f2865",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "133846fa5a4cea93d4efeeeb355af252",
"/": "133846fa5a4cea93d4efeeeb355af252",
"main.dart.js": "9dbab93fe0cc8323d221db9c8c20d14c",
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
