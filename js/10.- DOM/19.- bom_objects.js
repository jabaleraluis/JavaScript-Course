// |---------- BOM: Browser Object Model ----------|
// |------ Objects: URL, History & Browser --------|
console.log("----- Objects: URL, History & Browser -----");

//> BOM: Objetos: URL, Historial y Navegador

console.log("---------- Objeto URL (location) ----------");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("---------- Objeto Historial (history) ----------");
console.log(history);
console.log(history.length);
//history.back(2);                // -> Te regresa a las páginas que has abierto antes
//history.forward(2);
//history.go(0);                // -> -N atrás, N adelante

console.log("---------- Objeto Navegador (navigator) ----------");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);                  // -> Cuando se pierde la conexión
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);