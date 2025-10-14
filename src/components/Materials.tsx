import { materials } from '../data';

const Materials = () => {
  return (
    <section id="materials" className="py-20 bg-[rgb(61,61,61)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Materiali Lavorati
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <div
              key={material.id}
              className="border border-white p-6 bg-black/20 hover:bg-black/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {material.nome}
              </h3>
              <p className="text-gray-300 text-sm">
                {material.descrizione}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            E molti altri materiali su richiesta. Contattateci per esigenze specifiche.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Materials;
