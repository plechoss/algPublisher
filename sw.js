'use strict';
importScripts('sw-toolbox.js');
toolbox.precache([“/algPublisher/index.html”,”/algPublisher/css/style.css”, ”/algPublisher/js/init.js”, ”/algPublisher/js/materialize.min.js”, ”/algPublisher/css/materialize.min.css”]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
