// Basic script file - can be expanded later if needed for interactivity

document.addEventListener('DOMContentLoaded', function() {
    console.log("Buzz's Lighthouse website script loaded.");

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterThanks = document.getElementById('newsletter-thanks');
    const emailInput = document.getElementById('email-input');

    if (newsletterForm && newsletterThanks && emailInput) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            // Here you would typically send the email to a backend service
            // For this static site, we'll just show the thank you message.
            if (emailInput.value) { // Basic check if email field is not empty
                newsletterForm.style.display = 'none';
                newsletterThanks.style.display = 'block';
                console.log('Newsletter subscribed with:', emailInput.value);
            } else {
                // Optionally, provide feedback if email is empty, though "required" attribute handles most cases
                console.log('Email field is empty.');
            }
        });
    }

    // Main contact form submission
    const mainContactForm = document.getElementById('main-contact-form');
    const contactFormThanks = document.getElementById('contact-form-thanks');

    if (mainContactForm && contactFormThanks) {
        mainContactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            // Here you would typically send the form data to a backend service
            // For this static site, we'll just show the thank you message.

            // Basic validation example (ensure required fields are filled, though HTML 'required' handles this)
            let isValid = true;
            mainContactForm.querySelectorAll('[required]').forEach(input => {
                if (!input.value) isValid = false;
            });

            if (isValid) {
                mainContactForm.style.display = 'none';
                contactFormThanks.style.display = 'block';
                console.log('Main contact form submitted.');
                // Could also gather form data here: new FormData(mainContactForm)
            } else {
                console.log('Main contact form validation failed (some required fields might be empty).');
                // Optionally, display an error message to the user
            }
        });
    }

    // Example: Smooth scroll for anchor links (if we add any in the future)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});
