export class Machines {
  private machines: HTMLElement;
  
  // Sample machines data
  private readonly machinesList = [
    {
      name: 'Tornio CNC',
      description: 'Tornio a controllo numerico per lavorazioni di precisione',
      features: ['Asse C', 'Barra di caricamento', 'Controllo Fanuc']
    },
    {
      name: 'Centro di lavoro a 5 assi',
      description: 'Macchina a controllo numerico per lavorazioni complesse',
      features: ['5 assi simultanei', 'Magazzino utensili 24 posizioni', 'Alta velocità']
    },
    {
      name: 'Fresatrice a banco fisso',
      description: 'Per lavorazioni di fresatura di precisione',
      features: ['Tavola 2000x800mm', 'Avanzamenti rapidi 30m/min', 'Controllo Siemens']
    },
    {
      name: 'Taglio laser',
      description: 'Taglio ad alta precisione per lamiere',
      features: ['Potenza 4kW', 'Tavolo 3000x1500mm', 'Precisione ±0.1mm']
    }
  ];

  constructor() {
    this.machines = document.createElement('section');
    this.machines.id = 'macchinari';
    this.machines.className = 'py-20 bg-gray-900';
    this.render();
  }

  private render(): void {
    this.machines.innerHTML = `
      <div class="container mx-auto px-4">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-12">I Nostri Macchinari</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${this.machinesList.map((machine, index) => `
            <div class="card p-6 transform transition-all duration-300 hover:-translate-y-2">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-2xl">
                  ⚙️
                </div>
                <h3 class="text-xl font-semibold mb-2">${machine.name}</h3>
                <p class="text-gray-300 mb-4">${machine.description}</p>
                <ul class="text-left text-sm text-gray-300 space-y-2">
                  ${machine.features.map(feature => `<li class="flex items-start">
                    <span class="text-green-400 mr-2">✓</span>
                    ${feature}
                  </li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-12 text-center">
          <p class="mb-6">Tutti i nostri macchinari sono sottoposti a manutenzione periodica per garantire la massima precisione e affidabilità.</p>
          <button class="btn">Richiedi un preventivo</button>
        </div>
      </div>
    `;
  }

  public getElement(): HTMLElement {
    return this.machines;
  }
}
