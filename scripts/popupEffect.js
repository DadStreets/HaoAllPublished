let popupOfFollowers = document.querySelector('.followers-list');
let popupOfSubscribes = document.querySelector('.subscribes-list');

let buttonOfFollowers = document.querySelector('.about-followers');
let buttonOfSubscribes = document.querySelector('.about-subscribes');

let closeButton = document.getElementById('closeListButton');

buttonOfFollowers.addEventListener('click', () => {
	popupOfSubscribes.classList.add('hidden');
	popupOfSubscribes.classList.remove('open');
	popupOfFollowers.classList.remove('hidden');
	popupOfFollowers.classList.add('open');
	displayCloseButton();
})

buttonOfSubscribes.addEventListener('click', () => {
	popupOfFollowers.classList.add('hidden');
	popupOfFollowers.classList.remove('open');
	popupOfSubscribes.classList.remove('hidden');
	popupOfSubscribes.classList.add('open');
	displayCloseButton();
})

closeButton.addEventListener('click', () => {
	popupOfFollowers.classList.add('hidden');
	popupOfSubscribes.classList.add('hidden');
	popupOfSubscribes.classList.remove('open');
	popupOfFollowers.classList.remove('open');
	hideCloseButton();
})


function hideCloseButton() {
	if (popupOfSubscribes.classList.contains('hidden')) {
		closeButton.classList.add('hidden');
	} else if (popupOfFollowers.classList.contains('hidden')) {
		closeButton.classList.add('hidden');
	}
}

function displayCloseButton() {
	if (popupOfSubscribes.classList.contains('hidden') == false) {
		closeButton.classList.remove('hidden');
		closeButton.classList.add('active');
	} else if (popupOfFollowers.classList.contains('hidden') == false) {
		closeButton.classList.remove('hidden');
		closeButton.classList.add('active');
	}
}