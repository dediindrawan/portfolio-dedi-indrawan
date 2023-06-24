const testimonialsList = document.querySelectorAll('.testimonials-list');
const testimonialsWrapperOverlay = document.querySelector('.testimonials-wrapper-overlay');

testimonialsList.forEach(testiList => {
    testiList.addEventListener('click', () => {
        testimonialsWrapperOverlay.style.display = 'grid';
    });
});

document.querySelector('.btn-close').addEventListener('click', () => {
    testimonialsWrapperOverlay.style.display = 'none';
});

const userContact = document.querySelector('.user-contact');
const toggleContact = document.querySelector('.toggle-contact');
const toggleContent = document.querySelector('.toggle-content');
const chevronDown = document.querySelector('.fa-chevron-down');

function showHideContacts() {
    toggleContent.textContent = 'Show Contact';
    userContact.classList.add('hide-contact');
    toggleContact.addEventListener('click', () => {
        if (toggleContent.textContent == 'Show Contact') {
            userContact.classList.remove('hide-contact');
            toggleContent.textContent = 'Hide Contact';
            chevronDown.classList.add('rotate-contact-icon');
            chevronDown.style.borderBottomLeftRadius = '20px';
            chevronDown.style.borderTopRightRadius = '15px';
            chevronDown.style.borderLeft = 'none';
            chevronDown.style.borderRight = '1px solid rgba(249, 249, 249, 0.1)';

        } else if (toggleContent.textContent == 'Hide Contact') {
            userContact.classList.add('hide-contact');
            toggleContent.textContent = 'Show Contact';
            chevronDown.classList.remove('rotate-contact-icon');
            chevronDown.style.borderBottomLeftRadius = '15px';
            chevronDown.style.borderTopRightRadius = '20px';
            chevronDown.style.borderLeft = '1px solid rgba(249, 249, 249, 0.1)';
            chevronDown.style.borderRight = 'none';
        };
    });
};
showHideContacts();