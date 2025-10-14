export class Materials {
  private materials: HTMLElement;
  
  // Sample materials data
  private readonly materialsList = [
    { name: 'Acciaio al carbonio', description: 'Materiale versatile e resistente per applicazioni strutturali' },
    { name: 'Acciaio inox', description: 'Eccellente resistenza alla corrosione e all\'usura' },
    { name: 'Alluminio', description: 'Leggero e resistente, ideale per applicazioni aerospaziali' },
    { name: 'Ottone', description: 'Eccellente lavorabilità e resistenza alla corrosione' },
    { name: 'Rame', description: 'Alta conducibilità termica ed elettrica' },
    { name: 'Titanio', description: 'Elevato rapporto resistenza/peso, resistente alla corrosione' },
    { name: 'Ghisa', description: 'Eccellente resistenza all\'usura e alle vibrazioni' },
    { name: 'Plastiche tecniche', description: 'Materiali polimerici ad alte prestazioni' }
  ];

  constructor() {
    this.materials = document.createElement('section');
    this.materials.id = 'materiali';
    this.materials.className = 'py-20';
    this.materials.style.backgroundColor = '#3d3d3d';
    this.render();
  }

  private render(): void {
    this.materials.innerHTML = `
      <div class="container mx-auto px-4">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-12">Materiali Lavorati</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          ${this.materialsList.map(material => `
            <div class="card p-6 hover:transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-2xl">
                  ⚙️
                </div>
                <h3 class="text-xl font-semibold mb-2">${material.name}</h3>
                <p class="text-sm text-gray-300">${material.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-12 text-center">
          <p class="mb-6">Lavoriamo con una vasta gamma di materiali, inclusi leghe speciali su richiesta.</p>
          <button class="btn">Richiedi informazioni</button>
        </div>
      </div>
    `;
  }

  public getElement(): HTMLElement {
    return this.materials;
  }
}
