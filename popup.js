var feedback = document.querySelector(".feed-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var	youName = popup.querySelector("[id=name]");
var youMail = popup.querySelector("[id=mail]");
var letter = popup.querySelector("[id=comment]");
var form = popup.querySelector("form");
var storageName = localStorage.getItem("Name");
var storageEmail = localStorage.getItem("Email");

feedback.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	/*youName.focus();*/
	if (storageName) {
		youName.value = storageName;
		youMail.focus();
	} else {
		youName.focus();
	}

	if (storageEmail) {
		youMail.value = storageEmail;
		letter.focus();
	} else {
		youMail.focus();
	}
});

form.addEventListener("submit", function(event) {
	if (!youName.value || !youMail.value || !letter.value) {
		event.preventDefault();
		alert("Заполните все поля");
	} else {
	localStorage.setItem("Name", youName.value);
	localStorage.setItem("Email", youMail.value);
	console.log("Отправляем форму");
	console.log(youName.value);
	console.log(youMail.value);
	console.log(letter.value);
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});
