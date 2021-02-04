export const changeBg = (event) => {
	const target = event.target;

	switch (target.id) {
		case 'pomodoro': //if clicked 
			target.className = 'time-btn-active'; //where you clicked
			active(event.currentTarget); //  button active
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(240, 91, 86)'; // change page color
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(240, 91, 86)'; // make button active
			
			const time = document.getElementsByClassName('time-count')[0]; //timer board
			time.innerHTML = '25:00'; // initial status
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time to work!'; // change state of plan

			break;
		case 'short-break':
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(76, 166, 169)';
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(76, 166, 169)';
		
			document.getElementsByClassName('time-count')[0].innerHTML = '05:00';
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break';
			break;
		case 'long-break':
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(73, 143, 193)';
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(73, 143, 193)';

			document.getElementsByClassName('time-count')[0].innerHTML = '15:00';
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break';

			break;
	}

	function active(parent) {
		Array.from(parent.children).forEach((element) => {
			// make unclicked buttons inactive
			if (element !== event.target) {
				element.className = 'time-btn';
			}
		});
	}
};