import { Phone, Mail, MapPin } from 'lucide-react';

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefono',
      value: '+39 0123 456789',
      link: 'tel:+390123456789'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@lamierificiorota.it',
      link: 'mailto:info@lamierificiorota.it'
    },
    {
      icon: MapPin,
      label: 'Posizione',
      value: 'Via Industriale 123, Bergamo',
      link: 'https://maps.google.com/?q=Bergamo,Italy'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-[rgb(61,61,61)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Contatti
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.link}
                target={contact.label === 'Posizione' ? '_blank' : undefined}
                rel={contact.label === 'Posizione' ? 'noopener noreferrer' : undefined}
                className="border border-white p-8 bg-black/20 hover:bg-black/40 transition-all group block"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border border-white flex items-center justify-center group-hover:bg-white transition-colors">
                    <Icon size={32} className="text-white group-hover:text-[rgb(61,61,61)] transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {contact.label}
                </h3>

                <p className="text-gray-200 text-center group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-16 border border-white p-8 bg-black/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Orari di Apertura
          </h3>
          <div className="space-y-2 text-gray-200">
            <p>Lunedì - Venerdì: 8:00 - 12:00 / 14:00 - 18:00</p>
            <p>Sabato: 8:00 - 12:00</p>
            <p>Domenica: Chiuso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
