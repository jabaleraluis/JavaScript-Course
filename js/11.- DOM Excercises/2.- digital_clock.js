const d = document;
let clockTempo;

export function soundAlarm(clock, btnPlayClock, btnStopClock, sound, btnPlaySound, btnStopSound) {
  const $sound = d.querySelector("sound");
}

export function digitalClock(clock, btnPlay, btnStop, sound, btnSound) {
  const $sound = d.querySelector(sound);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 0, 1000);

      d.querySelector(sound).classList.remove("is-active");
      $sound.pause();
      $sound.currentTime = 0;
      d.querySelector(btnSound).disabled = false;
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

/* export function alarm(sound, btnPlay, btnStop) {
  const $alarm = document.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if(e.target.matches(btnPlay)){
      $alarm.play();
      e.target.disabled = true;
    }

    if(e.target.matches(btnStop)){
      $alarm.pause();
      d.querySelector(btnPlay).disabled = false;
      $alarm.currentTime = 0;
    }
  })
} */

export function alarm(sound, btnPlay, btnStop, clock, btnClock) {
  const $sound = d.querySelector(sound);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)){
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnClock).disabled = false;

      $sound.play();
      e.target.disabled = true;
      d.querySelector(sound).classList.add("is-active");
    }

    if (e.target.matches(btnStop)){
      $sound.pause();
      $sound.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });

  $sound.addEventListener("pause", (e) => {
    d.querySelector(btnPlay).disabled = false;
    $sound.currentTime = 0;
  });

  $sound.addEventListener("play", (e) => {
    d.querySelector(btnPlay).disabled = true;
  });
}