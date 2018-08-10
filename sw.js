‘use strict’;
importScripts(‘sw-toolbox.js’);
toolbox.precache([“index.html”,”css/style.css”, "js/init.js"]);
toolbox.router.get(‘/images/*’, toolbox.cacheFirst);
toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});
