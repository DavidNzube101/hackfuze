import { speakers } from '../data/speakers.js';
import { Carousel } from './carousel.js';

function createSpeakerCard(speaker) {
    return `
        <div class="speaker-card">
            <div class="speaker-image">
                <img src="${speaker.image}" alt="${speaker.name}">
            </div>
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <p>${speaker.role}${speaker.company ? ',<br>' + speaker.company : ''}</p>
            </div>
        </div>
    `;
}

function initializeSpeakersGrid() {
    const grid = document.querySelector('.speakers-grid');
    grid.innerHTML = speakers.map(createSpeakerCard).join('');

    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    // Initialize carousel with responsive itemsPerPage
    const getItemsPerPage = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    new Carousel(grid, prevBtn, nextBtn, getItemsPerPage());

    // Handle responsive updates
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            new Carousel(grid, prevBtn, nextBtn, getItemsPerPage());
        }, 250);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSpeakersGrid);