import { materials } from '../data';
import { useLanguage } from '../contexts/language';

const Materials = () => {
  const { language } = useLanguage();

  const labels = {
    heading: {
      en: 'Materials We Work With',
      it: 'Materiali Lavorati'
    },
    moreMaterials: {
      en: 'And many other materials upon request. Contact us for specific needs.',
      it: 'E molti altri materiali su richiesta. Contattateci per esigenze specifiche.'
    }
  };

  return (
    <section id="materials" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {labels.heading[language]}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <div
              key={material.id}
              className="border border-white p-6 bg-black/20 hover:bg-black/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {material.nome[language]}
              </h3>
              <p className="text-gray-300 text-sm">
                {material.descrizione[language]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            {labels.moreMaterials[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Materials;
