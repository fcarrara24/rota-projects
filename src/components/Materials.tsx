import { materials, replacement_materials } from '../data';
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
    },
    replacementMaterials: {
      en: 'Replacement Materials',
      it: 'Materiali di Riporto'
    },
    replacementDescription: {
      en: 'Specialized materials for surface restoration and reinforcement',
      it: 'Materiali specializzati per la riqualificazione superficiale e il rinforzo'
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

        {/* Replacement Materials Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            {labels.replacementMaterials[language]}
          </h3>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            {labels.replacementDescription[language]}
          </p>

          <div className={`grid gap-6 max-w-5xl mx-auto 
            grid-cols-1 
            md:grid-cols-2 
            ${replacement_materials.length <= 2 ? 'lg:grid-cols-2' : ''}
            ${replacement_materials.length === 3 ? 'lg:grid-cols-3' : ''}
            ${replacement_materials.length >= 4 ? 'lg:grid-cols-4' : ''}
          `}>
            {replacement_materials.map((material) => (
              <div
                key={`replacement-${material.id}`}
                className="border border-white-400/30 p-6 bg-amber-900/10 hover:bg-amber-900/20 transition-colors"
              >
                <h4 className="text-xl font-bold text-amber-300 mb-2">
                  {material.nome[language]}
                </h4>
                <p className="text-amber-100 text-sm">
                  {material.descrizione[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
