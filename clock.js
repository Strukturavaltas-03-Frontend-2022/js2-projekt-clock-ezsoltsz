'use strict'
const DigitalClock = document.querySelector(".Digital__clock");
setInterval(() => {
DigitalClock.textContent = `${new Date().toLocaleTimeString()}`;
}, 1000);