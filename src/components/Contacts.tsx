import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/language';
import { useState } from 'react';
import { Toast } from './ui/Toast';

const Contacts = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopy = async (e: React.MouseEvent, text: string, message: string, link?: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      // Copia il testo negli appunti
      await navigator.clipboard.writeText(text);
      setToastMessage(message);
      setShowToast(true);

      // Se il contatto ha un link (telefono o email), aprilo
      if (link) {
        window.open(link, '_blank');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const { language } = useLanguage();

  const labels = {
    heading: {
      en: 'Contacts',
      it: 'Contatti'
    },
    phone: {
      en: 'Phone',
      it: 'Telefono'
    },
    email: {
      en: 'Email',
      it: 'Email'
    },
    location: {
      en: 'Location',
      it: 'Posizione'
    },
    openingHours: {
      en: 'Opening Hours',
      it: 'Orari di Apertura'
    },
    weekdays: {
      en: 'Monday - Friday: 8:00 - 12:30 / 13:30 - 17:00',
      it: 'Lunedì - Venerdì: 8:00 - 12:30 / 13:30 - 17:00'
    },
    weekend: {
      en: 'Saturday - Sunday: Closed',
      it: 'Sabato - Domenica: Chiuso'
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: labels.phone,
      value: {
        en: '035 048 2113',
        it: '035 048 2113'
      },
      link: 'tel:0350482113',  // Aggiungi il link per il telefono
      copyText: '035 048 2113',
      copyMessage: {
        en: 'Phone number copied',
        it: 'Numero di telefono copiato'
      }
    },
    {
      icon: Mail,
      label: labels.email,
      value: {
        en: 'lmrmeccanica@gmail.com',
        it: 'lmrmeccanica@gmail.com'
      },
      link: 'mailto:lmrmeccanica@gmail.com',  // Aggiungi il link per la mail
      copyText: 'lmrmeccanica@gmail.com',
      copyMessage: {
        en: 'Email copied',
        it: 'Email copiata'
      }
    },
    {
      icon: MapPin,
      label: labels.location,
      value: {
        en: 'Via Crespi 24 Pradalunga (BG)',
        it: 'Via Crespi 24 Pradalunga (BG)'
      },
      link: 'https://www.google.com/maps/place/Via+Crespi,+24,+24020+Pradalunga+BG/', // Link per la mappa
      copyText: 'Via Crespi 24, 24020 Pradalunga (BG)',
      copyMessage: {
        en: 'Address copied',
        it: 'Indirizzo copiato'
      }
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {labels.heading[language]}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon;
            const isMap = contact.label[language] === labels.location[language];

            return (
              <div
                key={idx}
                onClick={(e) => handleCopy(e, contact.copyText, contact.copyMessage[language], contact.link)}
                className={`border border-white p-8 bg-black/20 hover:bg-black/40 transition-all group block cursor-pointer ${!isMap ? 'relative' : ''}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border border-white flex items-center justify-center group-hover:bg-white transition-colors">
                    <Icon size={32} className="text-white group-hover:text-[rgb(98,98,98)] transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {contact.label[language]}
                </h3>

                <p className="text-gray-200 text-center group-hover:text-white transition-colors">
                  {contact.value[language]}
                </p>

                {!isMap && (
                  <span className="absolute bottom-2 right-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'en' ? 'Click to copy' : 'Clicca per copiare'}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 border border-white p-8 bg-black/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {labels.openingHours[language]}
          </h3>
          <div className="space-y-2 text-gray-200">
            <p>{labels.weekdays[language]}</p>
            <p>{labels.weekend[language]}</p>
          </div>
        </div>

        {showToast && (
          <Toast
            message={toastMessage}
            showProgressBar={true}
            showCloseButton={true}
            duration={3000}
            position="bottom-right"
            onClose={() => setShowToast(false)}
            progressBarColor="bg-blue-500"
          />
        )}
      </div>
    </section>
  );
};

export default Contacts;
