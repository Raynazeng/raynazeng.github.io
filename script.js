// script.js
const phrases = ["Data Scientist", "Fast Learner", "Creater", "Pythonist"];
let currentPhrase = 0;
let currentLetter = 0;
let currentText = '';
let deleting = false;
let dynamicText = document.getElementById('dynamic-text');
let typingDelay = 100;
let deletingDelay = 50;
let betweenPhrasesDelay = 1000; // Delay between phrases

function typeEffect() {
    if (currentPhrase >= phrases.length) {
        currentPhrase = 0; // Reset to loop over the phrases again if needed
    }

    if (!deleting) {
        // Typing effect
        if (currentLetter <= phrases[currentPhrase].length) {
            currentText = phrases[currentPhrase].substring(0, currentLetter + 1);
            dynamicText.innerHTML = currentText;
            currentLetter++;
            setTimeout(typeEffect, typingDelay); // Speed of typing
        } else {
            // If the phrase is fully typed, begin deleting after a pause
            setTimeout(() => { deleting = true; typeEffect(); }, betweenPhrasesDelay);
        }
    } else {
        // Deleting effect
        if (currentLetter > 0) {
            currentText = phrases[currentPhrase].substring(0, currentLetter - 1);
            dynamicText.innerHTML = currentText;
            currentLetter--;
            setTimeout(typeEffect, deletingDelay); // Speed of deleting
        } else {
            // If the phrase is fully deleted, move to the next phrase
            deleting = false;
            currentPhrase++;
            setTimeout(typeEffect, betweenPhrasesDelay); // Delay before starting new phrase
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeEffect, 1000); // Start the effect once the document is loaded
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');  // Get all navigation links
    const sections = document.querySelectorAll('section');    // Get all sections

    function changeLinkState() {
        let index = sections.length;

        // Loop from the last section up to the first
        while(index >= 0 && window.scrollY + 50 < sections[index].offsetTop) {
            index--;
        }

        // Remove the active-link class from all nav links
        navLinks.forEach((link) => link.classList.remove('active-link'));

        // Add active-link class if it's not the first section
        if (index > 0) {  // Assuming the first section is at index 0
            navLinks[index].classList.add('active-link');
        }
    }

    // Call changeLinkState on load and on scroll
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});



document.addEventListener('DOMContentLoaded', function () {
    var selector = '.navbar-collapse .nl'; // Select your navigation links
    var navCollapse = document.querySelector('.navbar-collapse');
    
    document.querySelectorAll(selector).forEach(function (element) {
        element.addEventListener('click', function () {
            if (navCollapse.classList.contains('show')) { // Check if the navbar is expanded
                $('.navbar-toggler').click(); // Use Bootstrap's toggler to toggle the collapse state
            }
        });
    });
});




