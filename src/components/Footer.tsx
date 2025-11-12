import { Phone, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/language';
import { useState } from 'react';
import { Toast } from './ui/Toast';

const Footer = () => {
  const { language } = useLanguage() as { language: 'en' | 'it' };
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [showPhoneToast, setShowPhoneToast] = useState(false);

  const showEmailAlert = async () => {
    try {
      window.location.href = 'mailto:lmrmeccanica@gmail.com';
      setTimeout(() => {
        navigator.clipboard.writeText('lmrmeccanica@gmail.com');
        setShowEmailToast(true);
      }, 200);
    } catch {
      navigator.clipboard.writeText('lmrmeccanica@gmail.com');
      setShowEmailToast(true);
    }
  };

  const showPhoneAlert = async () => {
    try {
      navigator.clipboard.writeText('+390350482113');
      setShowPhoneToast(true);
    } catch {
      setShowPhoneToast(true);
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

  const alert_messages = {
    email: {
      en: 'Email copied successfully: lmrmeccanica@gmail.com',
      it: 'Indirizzo email copiato negli appunti: lmrmeccanica@gmail.com'
    },
    phone: {
      en: 'Phone number copied: +39 035 0482113',
      it: 'Numero di telefono copiato: +39 035 0482113'
    }
  }

  return (
    <footer className="bg-[rgb(98,98,98)] border-t border-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-300 text-sm">
            <p>{labels.copyright[language]}</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showPhoneAlert();
                }}
                className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                aria-label={labels.phoneAria[language]}
                title="+39 035 0482113"
              >
                <Phone size={24} />
              </a>

              {showPhoneToast && (
                <Toast
                  message={alert_messages.phone[language]}
                  showProgressBar={true}
                  showCloseButton={true}
                  duration={3000}
                  position="bottom-right"
                  onClose={() => setShowPhoneToast(false)}
                  progressBarColor="bg-green-500"
                />
              )}
            </div>
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

              {showEmailToast && (
                <Toast
                  message={alert_messages.email[language]}
                  showProgressBar={true}
                  showCloseButton={true}
                  duration={3000}
                  position="bottom-right"
                  onClose={() => setShowEmailToast(false)}
                  progressBarColor="bg-blue-500"
                />
              )}
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
