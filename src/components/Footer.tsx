import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(61,61,61)] border-t border-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-300 text-sm">
            <p>&copy; 2024 LMR di Rota Stefano. Tutti i diritti riservati.</p>
            <p className="mt-1">P.IVA: 01234567890</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+390123456789"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Telefono"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:info@lamierificiorota.it"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-gray-400 text-xs">
            Lamierificio specializzato in lavorazioni meccaniche di precisione | Tornitura e Fresatura CNC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
