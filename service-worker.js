"use strict";var precacheConfig=[["/tour-de-ceuvel/index.html","6149a247efef78bf09d3008de407f19a"],["/tour-de-ceuvel/static/css/main.a5d66aa5.css","8659b9cce695959cfc3d06cf0160695b"],["/tour-de-ceuvel/static/js/main.ceb78d87.js","0d565176b1532f90d1cfc182d244f43e"],["/tour-de-ceuvel/static/media/404cat.c5371dea.jpeg","c5371deaca5758c99656c9aaf7b3f080"],["/tour-de-ceuvel/static/media/bio.9459f0d9.png","9459f0d9bb107778965d86ee2762c7ee"],["/tour-de-ceuvel/static/media/biogasboot.4613f248.jpeg","4613f248c00133b6b12223336571ae0a"],["/tour-de-ceuvel/static/media/ceuvel.051da5be.png","051da5be225d607266b844f8dd2072d8"],["/tour-de-ceuvel/static/media/chev.7ca8ee84.svg","7ca8ee847b1d0f65446e2422ae1df603"],["/tour-de-ceuvel/static/media/consumption.443f53c2.png","443f53c2891928bc13d96269320bb683"],["/tour-de-ceuvel/static/media/deceuvel-logo.6da4534c.svg","6da4534c7f0ee4a03b90c2889f58193f"],["/tour-de-ceuvel/static/media/heatpump.2e967b64.png","2e967b647ee53eef8ca684bd0842cd5a"],["/tour-de-ceuvel/static/media/hipster-chick.aeffe735.svg","aeffe735e46800f2e3d14801a8b36031"],["/tour-de-ceuvel/static/media/info.e42eeed4.svg","e42eeed40f72a2eec4392feec8fef71d"],["/tour-de-ceuvel/static/media/map.99cc5009.svg","99cc50098067973de45567317aed758e"],["/tour-de-ceuvel/static/media/metabolic.e947b69f.jpg","e947b69f08a8cd4f50d3192fd25280ec"],["/tour-de-ceuvel/static/media/production.dddfdf46.png","dddfdf464b4a5ea441950383bb39c04e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/tour-de-ceuvel/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});