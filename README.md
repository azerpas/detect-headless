# Detect-Headless

Created this page that compiles methods used by Akamai, Datadome, and other bot detection solutions and WAF (Web Application Firewall) to identify headless bots like Selenium, Puppeteer, Phantom...

## Set-up
- `npm i` **or** `yarn install`
- `npm run dev` **or** `yarn dev`

## To-do
- ✅ Set-up Chakra
- ✅ Deploy on Vercel

## Command To-do
- ✅ `window.navigator.userAgent.replace(/\\|"/g, '')`
- ❌ `window.screen ? window.screen.availWidth : -1`
- ❌ `window.screen ? window.screen.availHeight : -1`
- ❌ `window.screen ? window.screen.width : -1`
- ❌ `window.screen ? window.screen.height : -1`
- ❌ `window.innerHeight || (document.body && 'clientHeight' in document.body ? document.body.clientHeight : document.documentElement && 'clientHeight' in document.documentElement ? document.documentElement.clientHeight : -1)`
- ❌ `window.innerWidth || (document.body && 'clientWidth' in document.body ? document.body.clientWidth : document.documentElement && 'clientWidth' in document.documentElement ? document.documentElement.clientWidth : -1)`
- ❌ `window.outerWidth ? window.outerWidth : -1`
- ❌ `window.addEventListener ? 1 : 0`
- ❌ `window.XMLHttpRequest ? 1 : 0`
- ❌ `window.XDomainRequest ? 1 : 0`
- ❌ `window.emit ? 1 : 0`
- ❌ `window.DeviceOrientationEvent ? 1 : 0`
- ❌ `window.DeviceMotionEvent ? 1 : 0`
- ❌ `window.TouchEvent ? 1 : 0`
- ❌ `window.spawn ? 1 : 0`
- ❌ `window.chrome ? 1 : 0`
- ❌ `window.Buffer ? 1 : 0`
- ❌ `window.PointerEvent ? 1 : 0;`
- ❌ `window.innerWidth ? 1 : 0`
- ❌ `window.outerWidth ? 1 : 0`
- ✅ `window._phantom ? 1 : 0`
- ✅ `window.webdriver ? 1 : 0`
- ✅ `window.domAutomation ? 1 : 0`
- ❌ `window.callPhantom ? 1 : 0;`
- ❌ `window.ActiveXObject`
- ✅ `window.chrome && window.chrome.webstore ? 1 : 0;`
- ❌ `window.opera ? 1 : 0;`
- ❌ `window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ? 1 : 0;`
- ✅ `window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection ? 1 : 0;`
- ❌ `window.mozInnerScreenY : 0;`
- ✅ `window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? '1' : '0';`
- ✅ `window.document.documentElement.getAttribute('webdriver') ? '1' : '0';`
- ✅ `window.webdriver ? '1' : '0';`
- ✅ `window.XPathResult || void 0 !== document.XPathResult ? '1' : '0';`
- ✅ `window.document.documentElement.getAttribute('driver') ? '1' : '0';`
- ✅ `window.document.documentElement.getAttribute('selenium') ? '1' : '0', [a, t, e, n, o, m, r].join(',')`
- ❌ `window.event`
- ❌ `window.devicePixelRatio ? window.devicePixelRatio : -1`
- ❌ `window.speechSynthesis.getVoices();`
- ❌ `window.addEventListener && (window.addEventListener('deviceorientation', bmak.cdoa, !0), window.addEventListener('devicemotion', bmak.cdma, !0), bmak.doadma_en = 1), bmak.doa_throttle = 0, bmak.dma_throttle = 0`
- ❌ `window.DeviceOrientationEvent ? 'do_en' : 'do_dis'`
- ❌ `window.DeviceMotionEvent ? 'dm_en' : 'dm_dis'`
- ❌ `window.TouchEvent ? 't_en' : 't_dis'`
- ❌ `window.onblur = bmak.hb, window.onfocus = bmak.hf`
- ❌ `window.XMLHttpRequest ? a = new XMLHttpRequest : void 0 !== window.XDomainRequest ? (a = new XDomainRequest, a.onload = function () {`
- ❌ `window.XDomainRequest ? new XDomainRequest : window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP'), e.open('POST', a, t);`
- ❌ `window.sessionStorage`
- ❌ `window.localStorage`
- ❌ `window.indexedDB`

## Features to-do
- ❌ `Mouse movement detection`
- ❌ `Uniquely identify HTTPS certificate`
