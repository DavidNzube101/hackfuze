import { panelists } from '../data/panelists.js';
import { Carousel } from './carousel.js';

function createpanelistCard(panelist) {
    return `
        <div class="panelist-card">
            <div class="panelist-image">
                <img src="${panelist.image}" alt="${panelist.name}">
            </div>
            <div class="panelist-info">
                <h3>${panelist.name}</h3>
                <p>${panelist.role}${panelist.company ? ',<br>' + panelist.company : ''}</p>
            </div>
        </div>
    `;
}

function initializepanelistsGrid() {
    const grid = document.querySelector('.panelists-grid');
    grid.innerHTML = panelists.map(createpanelistCard).join('');

    const prevBtn = document.querySelector('.carousel-btn-p.prev');
    const nextBtn = document.querySelector('.carousel-btn-p.next');

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
document.addEventListener('DOMContentLoaded', initializepanelistsGrid);