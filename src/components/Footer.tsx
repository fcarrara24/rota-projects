import { Phone, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/language';

const Footer = () => {
  const { language } = useLanguage();

  const labels = {
    copyright: {
      en: '© LMR by Rota Stefano. VAT NUMBER 0395936069',
      it: '© LMR di Rota Stefano. P.IVA 0395936069'
    },
    tagline: {
      en: 'Company specialised in precision mechanical machining | CNC Turning and Milling',
      it: 'Azienda specializzata in lavorazioni meccaniche di precisione | Tornitura e Fresatura CNC'
    },
    phoneAria: {
      en: 'Phone',
      it: 'Telefono'
    },
    emailAria: {
      en: 'Email',
      it: 'Email'
    },
    instagramAria: {
      en: 'Instagram',
      it: 'Instagram'
    }
  };

  return (
    <footer className="bg-[rgb(98,98,98)] border-t border-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-300 text-sm">
            <p>{labels.copyright[language]}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+390350482113"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={labels.phoneAria[language]}
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:lmrmeccanica@gmail.com"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={labels.emailAria[language]}
            >
              <Mail size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={labels.instagramAria[language]}
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-gray-400 text-xs">
            {labels.tagline[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
