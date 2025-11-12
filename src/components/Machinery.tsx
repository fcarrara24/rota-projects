import { machinery, galleryItems } from '../data';
import { useLanguage } from '../contexts/language';

const Machinery = () => {
  const { language } = useLanguage();

  const labels = {
    heading: {
      en: 'Our Machinery',
      it: 'I Nostri Macchinari'
    },
    closing: {
      en: 'Our machine park is constantly evolving to deliver cutting-edge machining and meet even the most complex customer requirements.',
      it: 'Il nostro parco macchine è in costante aggiornamento per garantire lavorazioni all\'avanguardia e soddisfare le esigenze più complesse dei nostri clienti.'
    }
  };

  return (
    <section id="machinery" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {labels.heading[language]}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machinery.map((machine) => (
            <div
              key={machine.id}
              className="h-full border border-white p-6 bg-black/20 hover:bg-black/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {machine.nome[language]}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {machine.descrizione[language]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border border-white p-8 bg-black/20 mb-12">
          <p className="text-gray-200 text-lg leading-relaxed">
            {labels.closing[language]}
          </p>
        </div>

        {/* Sezione Immagini Macchinari */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {language === 'it' ? 'Galleria Macchinari' : 'Machinery Gallery'}
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-black/20 p-6 rounded-lg border border-white/20 hover:border-amber-400/30 transition-colors"
              >
                <div className="h-[70vh] mb-4 overflow-hidden rounded flex items-center">
                  <img
                    src={item.immagine}
                    alt={item.titolo[language]}
                    className="w-full h-auto max-h-full mx-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.titolo[language]}
                </h4>
                <p className="text-gray-300 text-sm">
                  {item.descrizione[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machinery;
