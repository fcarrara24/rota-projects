// Main entry point for the application
import './styles.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Materials } from './components/Materials';
import { Machines } from './components/Machines';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function initApp() {
  console.log('Initializing application...');
  const app = document.getElementById('app');
  if (!app) {
    console.error('Could not find app element');
    return;
  }
  app.innerHTML = ''; // Clear any existing content
  
  try {
    // Create main content container
    console.log('Creating main container...');
    const main = document.createElement('main');
    main.id = 'main';
    
    // Define component type for better type safety
    type ComponentConfig = {
      name: string;
      create: () => HTMLElement;
    };

    // Add your components here
    const components: ComponentConfig[] = [
      {
        name: 'header',
        create: () => new Header().getElement()
      },
      {
        name: 'hero',
        create: () => new Hero().getElement()
      },
      {
        name: 'about',
        create: () => new About().getElement()
      },
      {
        name: 'services',
        create: () => new Services().getElement()
      },
      {
        name: 'materials',
        create: () => new Materials().getElement()
      },
      {
        name: 'machines',
        create: () => new Machines().getElement()
      },
      {
        name: 'contact',
        create: () => new Contact().getElement()
      },
      {
        name: 'footer',
        create: () => new Footer().getElement()
      }
    ];
    
    // Create and append all components
    components.forEach(({ name, create }) => {
      try {
        console.log(`Creating ${name} component...`);
        const section = create();
        if (section) {
          main.appendChild(section);
          console.log(`✓ ${name} component created successfully`);
        } else {
          console.error(`❌ Failed to create ${name} component`);
        }
      } catch (error) {
        console.error(`Error creating ${name} component:`, error);
      }
    });
    
    // Add main content to the app
    app.appendChild(main);
    
    // Footer is now included in the components array
    
    console.log('Application initialized successfully!');
    
    // Initialize any global functionality
    initAppFeatures();
    
  } catch (error) {
    console.error('Error initializing application:', error);
    showError(error);
  }
}

/**
 * Initialize application features and event listeners
 */
function initAppFeatures() {
  // Initialize smooth scrolling for anchor links
  initSmoothScrolling();
  
  // Add other global event listeners here
  // Example: window.addEventListener('resize', handleResize);
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Display an error message to the user
 */
function showError(error: unknown) {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.innerHTML = `
    <h2>Something went wrong</h2>
    <p>Please refresh the page or try again later.</p>
    <p>${error instanceof Error ? error.message : 'An unknown error occurred'}</p>
  `;
  
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '';
    app.appendChild(errorMessage);
  }
}

// Start the application when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
