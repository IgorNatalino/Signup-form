const form = document.querySelector('.form_signup');
const username = document.querySelector('#username');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	validateInputs();
});

const setError = (element, message) => {
	const formControl = element.parentElement;
	const errorDisplay = formControl.querySelector('.error');

	errorDisplay.innerText = message;
	formControl.classList.add('error');
	formControl.classList.remove('success');
};

const setSuccess = (element) => {
	const formControl = element.parentElement;
	const errorDisplay = formControl.querySelector('.error');

	errorDisplay.innerText = ''; // Limpa a mensagem de erro
	formControl.classList.add('success');
	formControl.classList.remove('error');
};

const isValidEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if (usernameValue === '') {
		setError(username, 'Username is required');
	} else {
		setSuccess(username);
	}

	if (lastnameValue === '') {
		setError(lastname, 'Last Name is required');
	} else {
		setSuccess(lastname);
	}

	if (emailValue === '') {
		setError(email, 'Email is required');
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Provide a valid email address');
	} else {
		setSuccess(email);
	}

	if (passwordValue === '') {
		setError(password, 'Password is required');
	} else if (passwordValue.length < 8) {
		setError(password, 'Password must be at least 8 characters.');
	} else {
		setSuccess(password);
	}
};
