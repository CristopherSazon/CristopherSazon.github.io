// api: https://api.github.com/users/<username>
var ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'https://api.github.com/users/cristophersazon');
ajaxRequest.onreadystatechange = function() {
	console.log(this.status);
	console.log(ajaxRequest.responseText);
}



function sendMessage() {
	let submitResult = document.getElementById('submitResult');
	let nameInput = document.getElementById('nameInput');
	let phoneInput = document.getElementById('phoneInput');
	let emailInput = document.getElementById('emailInput');
	let messageInput = document.getElementById('messageInput');
	if (!nameInput.value || !phoneInput.value || !emailInput.value || !messageInput.value) {
		submitResult.innerHTML = 'Message not sent. Other fields are empty.'		
		submitResult.style.color = 'red'
		ajaxRequest.send();
	} else {
		nameInput.value = ''
		phoneInput.value = ''
		emailInput.value = ''
		messageInput.value = ''
		submitResult.innerHTML = 'Message Sent!'
		submitResult.style.color = '#fff';
	}
};

function fieldOnFocus() {
	let submitResult = document.getElementById('submitResult');
	submitResult.innerHTML = ''
}





var header = document.getElementById("header");
var content = document.getElementById("content");
var sticky = header.offsetTop;
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky-header");
	} else {
		header.classList.remove("sticky-header");
	}

	if (window.pageYOffset <= 1590) {
		header.style.backgroundColor = '#001f3f';
	} else if (window.pageYOffset > 1590 && window.pageYOffset < 2330) {
		header.style.backgroundColor = '#001f3f';
	} else {
		header.style.backgroundColor = '#001f3f';
	}
}

window.onscroll = function() {myFunction()};