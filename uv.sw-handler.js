importScripts('./Ultraviolet-Core-d815552396a9f13e19efc2320a7b8b935ef5fc9c/uv.sw.js');const sw=new UVServiceWorker();self.addEventListener('fetch',event=>event.respondWith(sw.fetch(event)));
