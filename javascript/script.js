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
function showHideContact() {
    userContact.classList.toggle('hide-contact');
};
showHideContact();

// function showTitle() {
//     let titles = document.querySelectorAll('#title');
//     titles.forEach(title => {
//         title.addEventListener('mouseover', () => {
//             let content = title.textContent
//             title.setAttribute('title', content);
//         });
//     });
// };
// showTitle();
