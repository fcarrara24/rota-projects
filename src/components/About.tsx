import { useLanguage } from '../contexts/language';

const About = () => {
  const { language } = useLanguage();

  const content = {
    heading: {
      en: 'About Us',
      it: 'Chi Siamo'
    },
    paragraphs: {
      en: [
        'We perform turning and milling operations on every material, for both serial production and small batches or prototypes.',
        'With decades of experience in precision mechanics, Rota Mechanical Works is the ideal partner for your production needs. From design to manufacturing, we follow each stage with meticulous attention to detail.',
        'We constantly invest in cutting-edge technologies to guarantee top quality machining, reliable lead times, and market competitiveness for our clients.'
      ],
      it: [
        'Eseguiamo lavorazioni di tornitura e fresatura per tutti i materiali, sia per produzione in serie sia per piccoli lotti o prototipi.',
        'Con decenni di esperienza nel settore della meccanica di precisione, Lavorazioni meccaniche Rota è il partner ideale per le vostre esigenze produttive. Dalla progettazione alla realizzazione, seguiamo ogni fase con attenzione maniacale ai dettagli.',
        'Investiamo costantemente in tecnologie all\'avanguardia per garantire ai nostri clienti lavorazioni di altissima qualità, tempi certi e competitività sul mercato.'
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-[rgb(61,61,61)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.heading[language]}
            </h2>
            {content.paragraphs[language].map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-200 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative">
            <div className="border border-white overflow-hidden h-[400px] md:h-[500px]">
              <img
                src="./img/PRESENTAZIONE_FOTO.jpg"
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
