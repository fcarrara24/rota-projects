export class Services {
  private services: HTMLElement;
  private currentIndex: number = 0;
  private intervalId: number | null = null;
  private readonly items = [
    {
      title: 'Tornitura',
      description: 'Lavorazioni di tornitura di precisione su metalli ferrosi e non ferrosi con tolleranze strette.',
      image: 'https://picsum.photos/400/300?grayscale&random=2'
    },
    {
      title: 'Fresatura',
      description: 'Fresatura CNC ad alta precisione per la realizzazione di componenti meccanici complessi.',
      image: 'https://picsum.photos/400/300?grayscale&random=3'
    },
    {
      title: 'Taglio Laser',
      description: 'Taglio laser di precisione per lamiere e tubi con finitura perfetta e senza sbavature.',
      image: 'https://picsum.photos/400/300?grayscale&random=4'
    },
    {
      title: 'Saldatura',
      description: 'Servizi di saldatura professionale per ogni tipo di materiale e spessore.',
      image: 'https://picsum.photos/400/300?grayscale&random=5'
    },
    {
      title: 'Trattamenti Termici',
      description: 'Trattamenti termici per migliorare le proprietà meccaniche dei materiali lavorati.',
      image: 'https://picsum.photos/400/300?grayscale&random=6'
    }
  ];

  constructor() {
    this.services = document.createElement('section');
    this.services.id = 'servizi';
    this.services.className = 'py-20 bg-gray-900';
    this.render();
    this.setupCarousel();
  }

  private setupCarousel(): void {
    // Auto-rotate carousel every 5 seconds
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 5000);

    // Pause on hover
    this.services.addEventListener('mouseenter', () => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    });

    this.services.addEventListener('mouseleave', () => {
      if (!this.intervalId) {
        this.intervalId = window.setInterval(() => {
          this.nextSlide();
        }, 5000);
      }
    });
  }

  private nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateCarousel();
  }

  private prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateCarousel();
  }

  private goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateCarousel();
  }

  private updateCarousel(): void {
    const carousel = this.services.querySelector('.carousel-inner');
    if (carousel) {
      const width = carousel.clientWidth;
      carousel.scrollTo({
        left: width * this.currentIndex,
        behavior: 'smooth'
      });
    }

    // Update indicators
    const indicators = this.services.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
      if (index === this.currentIndex) {
        indicator.classList.add('bg-white');
        indicator.classList.remove('bg-gray-500');
      } else {
        indicator.classList.remove('bg-white');
        indicator.classList.add('bg-gray-500');
      }
    });
  }

  private render(): void {
    this.services.innerHTML = `
      <div class="container mx-auto px-4">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-12">I Nostri Servizi</h2>
        
        <div class="relative">
          <!-- Carousel wrapper -->
          <div class="carousel-container overflow-hidden">
            <div class="carousel-inner flex transition-transform duration-300 ease-in-out">
              ${this.items.map(item => `
                <div class="carousel-item flex-shrink-0 w-full">
                  <div class="card mx-4 p-6 bg-gray-800 border border-white rounded-lg">
                    <div class="flex flex-col md:flex-row items-center">
                      <div class="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                        <img 
                          src="${item.image}" 
                          alt="${item.title}" 
                          class="w-full h-auto rounded-lg"
                        >
                      </div>
                      <div class="md:w-1/2">
                        <h3 class="text-2xl font-semibold mb-4">${item.title}</h3>
                        <p class="mb-4">${item.description}</p>
                        <button class="btn btn-outline">Scopri di più</button>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Navigation arrows -->
          <button class="carousel-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none text-xl w-10 h-10 flex items-center justify-center">
            ‹
          </button>
          <button class="carousel-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none text-xl w-10 h-10 flex items-center justify-center">
            ›
          </button>
          
          <!-- Indicators -->
          <div class="flex justify-center mt-6 space-x-2">
            ${this.items.map((_, index) => `
              <button 
                class="carousel-indicator w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-500'}"
                data-index="${index}"
              ></button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    const prevButton = this.services.querySelector('.carousel-prev');
    const nextButton = this.services.querySelector('.carousel-next');
    const indicators = this.services.querySelectorAll('.carousel-indicator');

    if (prevButton) {
      prevButton.addEventListener('click', () => this.prevSlide());
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => this.nextSlide());
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
  }

  public getElement(): HTMLElement {
    return this.services;
  }

  public destroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
