'use strict';

// import all listener files so they can attach to the DOM

// does your project have code that executes when the document or window are ready?
// that code can go here

'use strict';
import { pomoDoroHandler, longBreakHandler, shortBreakHandler, timeHandler, changeActive } from '../handlers/time-handeler.js';
import { changeBg } from '../handlers/background.js';

const startBtn = document.getElementById('start-btn');
const promoDoro = document.getElementById('pomodoro');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
promoDoro.addEventListener('click', pomoDoroHandler);
longBreak.addEventListener('click', longBreakHandler);
shortBreak.addEventListener('click', shortBreakHandler);
// start button
startBtn.addEventListener('click', timeHandler);

/*Change background color */
document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeBg);

// Clear new instance of the class when you change work or break
document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeActive);

