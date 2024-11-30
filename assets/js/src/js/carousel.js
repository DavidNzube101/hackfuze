export class Carousel {
    constructor(gridElement, prevButton, nextButton, itemsPerPage = 3) {
        this.grid = gridElement;
        this.prevBtn = prevButton;
        this.nextBtn = nextButton;
        this.currentPage = 0;
        this.itemsPerPage = itemsPerPage;
        this.totalItems = this.grid.children.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        
        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.navigate('prev'));
        this.nextBtn.addEventListener('click', () => this.navigate('next'));
        this.updateVisibility();
        this.positionCards();
        this.updateActiveStates();

        // Handle window resize
        window.addEventListener('resize', () => {
            this.positionCards();
            this.updateActiveStates();
        });
    }

    navigate(direction) {
        if (direction === 'next' && this.currentPage < this.totalPages - 1) {
            this.currentPage++;
        } else if (direction === 'prev' && this.currentPage > 0) {
            this.currentPage--;
        }

        this.updateVisibility();
        this.positionCards();
        this.updateActiveStates();
    }

    positionCards() {
        const cardWidth = this.grid.children[0].offsetWidth;
        const gap = 32; // 2rem gap from CSS
        const offset = -(this.currentPage * (cardWidth + gap));
        this.grid.style.transform = `translateX(${offset}px)`;
    }

    updateActiveStates() {
        // Remove all active classes first
        Array.from(this.grid.children).forEach(card => {
            card.classList.remove('active');
        });

        // Add active class to visible cards
        const activeIndex = this.currentPage * this.itemsPerPage;
        for(let i = 0; i < this.itemsPerPage; i++) {
            const card = this.grid.children[activeIndex + i];
            if (card) {
                card.classList.add('active');
            }
        }
    }

    updateVisibility() {
        this.prevBtn.disabled = this.currentPage === 0;
        this.nextBtn.disabled = this.currentPage === this.totalPages - 1;
    }
}

