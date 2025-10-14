export class Hero {
  private hero: HTMLElement;

  constructor() {
    this.hero = document.createElement('section');
    this.hero.id = 'home';
    this.hero.className = 'relative h-screen flex items-center justify-center text-center';
    this.hero.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/1920/1080?grayscale)';
    this.hero.style.backgroundSize = 'cover';
    this.hero.style.backgroundPosition = 'center';
    this.render();
  }

  private render(): void {
    this.hero.innerHTML = `
      <div class="container mx-auto px-4 z-10">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">LAMIERIFICIO ROTA</h1>
        <p class="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Lavorazioni meccaniche di precisione dal 1980</p>
        <a href="#contatti" class="btn btn-primary inline-block">Richiedi un preventivo</a>
      </div>
      <div class="absolute bottom-10 left-0 right-0 text-center">
        <a href="#about" class="text-white animate-bounce inline-block text-4xl">
          ↓
        </a>
      </div>
    `;
  }

  public getElement(): HTMLElement {
    return this.hero;
  }
}
