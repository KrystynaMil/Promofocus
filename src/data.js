'use strict';

// each list instance stores it's own entries, that does not go here!
// but you could have an array that stores all of your list instances
const displayCount = document.getElementById('timer-string');
const progressBar = document.getElementById('progress-bar');
const pomoDoro = document.getElementById('pomodoro');
let newCount;
let state = [];
const ButtonClickSound = new Audio('../../public/sound/button.mp3');

export {displayCount, progressBar, pomoDoro, newCount , state, ButtonClickSound };
