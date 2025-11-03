import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/language';

const Contacts = () => {
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
      en: 'Monday - Friday: 8:00 - 12:00 / 14:00 - 18:00',
      it: 'Lunedì - Venerdì: 8:00 - 12:00 / 14:00 - 18:00'
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
        en: '+39 0123 456789',
        it: '+39 0123 456789'
      },
      link: 'tel:+390350482113'
    },
    {
      icon: Mail,
      label: labels.email,
      value: {
        en: 'lmrmeccanica@gmail.com',
        it: 'lmrmeccanica@gmail.com'
      },
      link: 'mailto:lmrmeccanica@gmail.com'
    },
    {
      icon: MapPin,
      label: labels.location,
      value: {
        en: 'Via Crespi 24 Pradalunga (BG)',
        it: 'Via Crespi 24 Pradalunga (BG)'
      },
      link: 'https://maps.google.com/?q=Bergamo,Italy'
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
            return (
              <a
                key={idx}
                href={contact.link}
                target={contact.label[language] === labels.location[language] ? '_blank' : undefined}
                rel={contact.label[language] === labels.location[language] ? 'noopener noreferrer' : undefined}
                className="border border-white p-8 bg-black/20 hover:bg-black/40 transition-all group block"
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
              </a>
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
      </div>
    </section>
  );
};

export default Contacts;
