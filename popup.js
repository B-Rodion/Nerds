var feedback = document.querySelector(".feed-btn");
var popup = document.querySelector(".modal-content");
var close = document.qurySelector(".modal-content-close");

feedback.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});