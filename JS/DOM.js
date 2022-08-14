const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'grey';

}

/* const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'teal'; */

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');