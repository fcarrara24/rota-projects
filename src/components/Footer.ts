export class Footer {
  private footer: HTMLElement;

  constructor() {
    this.footer = document.createElement('footer');
    this.footer.className = 'bg-gray-900 text-white py-12';
    this.render();
  }

  private getCurrentYear(): number {
    return new Date().getFullYear();
  }

  private render(): void {
    this.footer.innerHTML = `
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="mb-8 md:mb-0">
            <h3 class="text-xl font-bold mb-4">LMR di Rota Stefano</h3>
            <p class="text-gray-400 mb-4">
              Specializzati in lavorazioni meccaniche di precisione dal 1980. Qualità e precisione al servizio della tua azienda.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl" aria-label="Facebook">
                [FB]
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl" aria-label="Instagram">
                [IG]
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl" aria-label="LinkedIn">
                [IN]
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="mb-8 md:mb-0">
            <h3 class="text-lg font-semibold mb-4">Link Veloci</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#servizi" class="text-gray-400 hover:text-white transition-colors">Servizi</a></li>
              <li><a href="#materiali" class="text-gray-400 hover:text-white transition-colors">Materiali</a></li>
              <li><a href="#macchinari" class="text-gray-400 hover:text-white transition-colors">Macchinari</a></li>
              <li><a href="#contatti" class="text-gray-400 hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="mb-8 md:mb-0">
            <h3 class="text-lg font-semibold mb-4">Servizi</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Tornitura</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Fresatura</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Taglio Laser</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Saldatura</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Trattamenti Termici</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contatti</h3>
            <address class="not-italic">
              <p class="text-gray-400 mb-2 flex items-start">
                <span class="mr-2 mt-0.5">📍</span>
                Via delle Lavorazioni, 123<br>
                10090 Rivalta (TO)
              </p>
              <p class="text-gray-400 mb-2 flex items-center">
                <span class="mr-2">📞</span>
                <a href="tel:+390111234567" class="hover:text-white transition-colors">+39 011 123 4567</a>
              </p>
              <p class="text-gray-400 mb-2 flex items-center">
                <span class="mr-2">✉️</span>
                <a href="mailto:info@lavorazionimeccaniche.it" class="hover:text-white transition-colors">info@lavorazionimeccaniche.it</a>
              </p>
              <p class="text-gray-400 flex items-start">
                <span class="mr-2 mt-0.5">⏰</span>
                Lun - Ven: 8:00 - 12:30 / 13:30 - 18:00<br>
                Sab: 8:00 - 12:30<br>
                Dom: Chiuso
              </p>
            </address>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; ${this.getCurrentYear()} LMR di Rota Stefano. Tutti i diritti riservati.</p>
          <div class="mt-2">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <span class="mx-2">•</span>
            <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
            <span class="mx-2">•</span>
            <a href="#" class="hover:text-white transition-colors">Termini di Servizio</a>
          </div>
        </div>
      </div>
    `;
  }

  public getElement(): HTMLElement {
    return this.footer;
  }
}
