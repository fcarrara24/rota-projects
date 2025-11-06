import { Phone, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/language';
import { useState } from 'react';
import { Toast } from './ui/Toast';

const Footer = () => {
  const { language } = useLanguage() as { language: 'en' | 'it' };
  const [showToast, setShowToast] = useState(false);

  const showEmailAlert = async () => {
    try {
      window.location.href = 'mailto:lmrmeccanica@gmail.com';
      setTimeout(() => {
        navigator.clipboard.writeText('lmrmeccanica@gmail.com');
        setShowToast(true);
      }, 200);
    } catch {
      navigator.clipboard.writeText('lmrmeccanica@gmail.com');
      setShowToast(true);
    }
  };

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

  const alert_message = {
    en: 'Email copied successfully: lmrmeccanica@gmail.com',
    it: 'Indirizzo email copiato negli appunti: lmrmeccanica@gmail.com'
  }

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
            {/* todo link per la mail corretto */}
            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showEmailAlert();
                }}
                className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                aria-label={labels.emailAria[language]}
                title="lmrmeccanica@gmail.com"
              >
                <Mail size={24} />
              </a>

              <Toast
                message={alert_message[language]}
                showProgressBar={true}
                showCloseButton={true}
                duration={3000}
                position="bottom-right"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
                progressBarColor="bg-blue-500"
              />
            </div>
            <a
              href="https://www.instagram.com/lmr.rota"
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
