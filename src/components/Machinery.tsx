import { machinery } from '../data';
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

        <div className="space-y-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machinery.map((machine) => (
            <div
              key={machine.id}
              className="border border-white p-6 bg-black/20 hover:bg-black/30 transition-colors"
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

        <div className="mt-12 text-center border border-white p-8 bg-black/20">
          <p className="text-gray-200 text-lg leading-relaxed">
            {labels.closing[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Machinery;
