"use strict";

// script.js
// Hamburger Menu Toggle
var menuIcon = document.getElementById("menu-icon");
var navLinks = document.getElementById("nav-links");
menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
}); // Dark Mode Toggle

var darkModeToggle = document.getElementById("dark-mode-toggle");
var body = document.body;
darkModeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  var isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}); // Check Local Storage for Dark Mode Preference

if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} // Contact Form Validation


var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name && email && subject && message) {
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
  } else {
    alert("Please fill out all fields.");
  }
}); // Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});