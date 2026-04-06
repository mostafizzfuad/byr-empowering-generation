document.addEventListener("DOMContentLoaded", () => {
	// Language toggle functionality
	const langButtons = document.querySelectorAll(".lang-btn");

	langButtons.forEach((btn) => {
		btn.addEventListener("click", function () {
			langButtons.forEach((b) => b.classList.remove("active"));
			this.classList.add("active");
		});
	});

	// Mobile menu toggle functionality
	const menuToggle = document.getElementById("mobile-menu");
	const navLinks = document.getElementById("nav-links");

	menuToggle.addEventListener("click", () => {
		navLinks.classList.toggle("active");
	});
});
