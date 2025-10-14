export class Header {
    private header: HTMLElement;
    private readonly sections = ['Home', 'Servizi', 'Materiali', 'Macchinari', 'Contatti'];
  
    constructor() {
      this.header = document.createElement('header');
      this.header.className = 'bg-white shadow-md py-4';
      this.render();
    }
  
    private createNavLink(text: string, sectionId: string): HTMLAnchorElement {
      const link = document.createElement('a');
      link.href = `#${sectionId.toLowerCase()}`;
      link.textContent = text;
      link.className = 'text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium';
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
      return link;
    }
  
    public render(): HTMLElement {
      // Clear existing content
      this.header.innerHTML = '';
  
      // Create container
      const container = document.createElement('div');
      container.id = 'header-container';
      container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  
      // Logo
      const logoContainer = document.createElement('div');
      logoContainer.className = 'flex-shrink-0';
      const logoLink = document.createElement('a');
      logoLink.href = '#';
      const logoImg = document.createElement('img');
      logoImg.src = 'https://picsum.photos/140/90?grayscale';
      logoImg.alt = 'Logo';
      logoImg.className = 'h-[90px] w-[140px] object-contain';
      logoLink.appendChild(logoImg);
      logoContainer.appendChild(logoLink);
  
      // Navigation
      const nav = document.createElement('nav');
      nav.id = 'nav-container'
      nav.className = 'ml-10 flex space-x-4 items-center';
      
      this.sections.forEach(section => {
        const link = this.createNavLink(section, section.toLowerCase());
        nav.appendChild(link);
      });
  
      // Assemble the header
      container.appendChild(logoContainer);
      container.appendChild(nav);
      this.header.appendChild(container);
  
      return this.header;
    }
  
    public getElement(): HTMLElement {
      return this.header;
    }
  }