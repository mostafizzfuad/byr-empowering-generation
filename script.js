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

// Counter Animation for Stats Section using IntersectionObserver
const counters = document.querySelectorAll(".stat-number");
const speed = 200; // The lower the number, the faster the count

// Function to start the counting animation
const startCounting = (counter) => {
	const updateCount = () => {
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText.replace(/,/g, ""); // Remove commas for calculation

		// Calculate the increment step
		const inc = target / speed;

		if (count < target) {
			// Add increment and format with commas
			counter.innerText = Math.ceil(count + inc).toLocaleString();
			setTimeout(updateCount, 15);
		} else {
			// Ensure the final number exactly matches the target and is formatted
			counter.innerText = target.toLocaleString();
		}
	};
	updateCount();
};

// Intersection Observer to trigger animation when section is in view
const statsSection = document.querySelector(".stats-section");

if (statsSection) {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					counters.forEach((counter) => {
						startCounting(counter);
					});
					// Stop observing once the animation has triggered
					observer.unobserve(statsSection);
				}
			});
		},
		{
			threshold: 0.5, // Trigger when 50% of the section is visible
		},
	);

	observer.observe(statsSection);
}
