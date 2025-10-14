export class About {
  private about: HTMLElement;

  constructor() {
    this.about = document.createElement('section');
    this.about.id = 'about';
    this.about.className = 'py-20';
    this.about.style.backgroundColor = '#3d3d3d';
    this.render();
  }

  private render(): void {
    this.about.innerHTML = `
      <div class="container mx-auto px-4">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-12">Chi Siamo</h2>
        
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <h3 class="text-2xl font-semibold mb-4">La nostra storia</h3>
            <p class="mb-4">
              Fondata nel 1980, LMR di Rota Stefano è un'azienda specializzata in lavorazioni meccaniche di precisione. 
              Con oltre 40 anni di esperienza nel settore, ci siamo affermati come punto di riferimento per la lavorazione 
              di metalli e materiali speciali.
            </p>
            <p class="mb-6">
              La nostra filosofia si basa su qualità, precisione e attenzione al cliente, garantendo sempre 
              prodotti finiti che soddisfino le più alte aspettative.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="text-center p-4 border border-white rounded">
                <div class="text-3xl font-bold mb-2">40+</div>
                <div class="text-sm">Anni di esperienza</div>
              </div>
              <div class="text-center p-4 border border-white rounded">
                <div class="text-3xl font-bold mb-2">100%</div>
                <div class="text-sm">Soddisfazione clienti</div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2 mt-8 md:mt-0">
            <div class="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://picsum.photos/800/600?grayscale&random=1" 
                alt="Lavorazioni meccaniche" 
                class="w-full h-auto"
              >
              <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p class="text-white text-center">
                  Eseguiamo lavorazioni di tornitura e fresatura per tutti i materiali, 
                  sia per produzione che per piccoli lotti o materiali speciali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  public getElement(): HTMLElement {
    return this.about;
  }
}
