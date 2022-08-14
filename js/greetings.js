const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

function paintGreeting(username) {
	greeting.innerText = `Hello, ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoForm.classList.remove(HIDDEN_CLASSNAME);
	todoList.classList.remove(HIDDEN_CLASSNAME);
}

function onloginSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	todoForm.classList.add(HIDDEN_CLASSNAME);
	todoList.classList.add(HIDDEN_CLASSNAME);
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onloginSubmit);
} else {
	paintGreeting(savedUsername);
}




