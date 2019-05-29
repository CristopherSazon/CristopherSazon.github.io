function sendMessage() {
	let submitResult = document.getElementById('submitResult');
	let nameInput = document.getElementById('nameInput');
	let phoneInput = document.getElementById('phoneInput');
	let emailInput = document.getElementById('emailInput');
	let messageInput = document.getElementById('messageInput');
	if (!nameInput.value || !phoneInput.value || !emailInput.value || !messageInput.value) {
		submitResult.innerHTML = 'Message not sent. Other fields are empty.'		
	} else {
		nameInput.value = ''
		phoneInput.value = ''
		emailInput.value = ''
		messageInput.value = ''
		submitResult.innerHTML = 'Message Sent!'
	}
};

function nameOnFocus() {
	let submitResult = document.getElementById('submitResult');
	submitResult.innerHTML = ''
}