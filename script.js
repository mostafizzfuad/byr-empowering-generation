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

// FAQ Accordion functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
	const questionBtn = item.querySelector(".faq-question");
	const answerDiv = item.querySelector(".faq-answer");

	questionBtn.addEventListener("click", () => {
		// Check if the current item is already active
		const isActive = item.classList.contains("active");

		// First, close all FAQ items
		faqItems.forEach((otherItem) => {
			otherItem.classList.remove("active");
			otherItem.querySelector(".faq-answer").style.maxHeight = null;
		});

		// If it wasn't active, open it
		if (!isActive) {
			item.classList.add("active");
			// Set max-height to the actual scroll height of the content for smooth animation
			answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
		}
	});
});
