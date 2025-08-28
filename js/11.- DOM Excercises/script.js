import hamburgerMenu from "./1.- hamburger_menu.js";
import { alarm, digitalClock, soundAlarm } from "./2.- digital_clock.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj", "#sound", "#activar-alarma");
    alarm("#sound", "#activar-alarma", "#desactivar-alarma", "#reloj", "#activar-reloj");
    soundAlarm("#reloj", "#activar-reloj", "desactivar-reloj", "#sound", "activar-alarma", "desactivar-alarma")
});