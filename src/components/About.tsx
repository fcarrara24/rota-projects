const About = () => {
  return (
    <section id="about" className="py-20 bg-[rgb(61,61,61)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chi Siamo
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Eseguiamo lavorazioni di tornitura e fresatura per tutti i materiali,
              sia per produzione in serie sia per piccoli lotti o prototipi.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Con decenni di esperienza nel settore della meccanica di precisione,
              Lavorazioni meccaniche Rota è il partner ideale per le vostre esigenze produttive.
              Dalla progettazione alla realizzazione, seguiamo ogni fase con attenzione
              maniacale ai dettagli.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Investiamo costantemente in tecnologie all'avanguardia per garantire
              ai nostri clienti lavorazioni di altissima qualità, tempi certi e
              competitività sul mercato.
            </p>
          </div>

          <div className="relative">
            <div className="border border-white overflow-hidden h-[400px] md:h-[500px]">
              <img
                src="https://images.pexels.com/photos/1267698/pexels-photo-1267698.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lavorazioni meccaniche"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
