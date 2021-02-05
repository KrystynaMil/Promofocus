export const changeBg = (event) => {
	const target = event.target;

	switch (target.id) {
		case 'pomodoro': 
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(219, 82, 77)'; 
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(219, 82, 77)';
			
			const time = document.getElementsByClassName('time-count')[0]; 
			time.innerHTML = '25:00'; 
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time to work!'; 

			break;
		case 'short-break':
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(70, 142, 145)';
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(70, 142, 145)';
		
			document.getElementsByClassName('time-count')[0].innerHTML = '05:00';
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break';
			break;
		case 'long-break':
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(67, 126, 168)';
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(67, 126, 168)';

			document.getElementsByClassName('time-count')[0].innerHTML = '15:00';
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break';

			break;
	}

	function active(parent) {
		Array.from(parent.children).forEach((element) => {
			// make not clicked  buttons inactive
			if (element !== event.target) {
				element.className = 'time-btn';
			}
		});
	}
};