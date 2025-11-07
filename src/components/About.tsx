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
        'Our team consists of highly qualified professionals, constantly updated on the latest technologies and processing techniques. The expertise and passion of our staff are the true added value that allows us to guarantee excellent results in every project.'
      ],
      it: [
        'Eseguiamo lavorazioni di tornitura e fresatura per tutti i materiali, sia per produzione in serie sia per piccoli lotti o prototipi.',
        'Con decenni di esperienza nel settore della meccanica di precisione, Lavorazioni meccaniche Rota è il partner ideale per le vostre esigenze produttive. Dalla progettazione alla realizzazione, seguiamo ogni fase con attenzione maniacale ai dettagli.',
        'Il nostro team è composto da professionisti altamente qualificati, costantemente aggiornati sulle ultime tecnologie e tecniche di lavorazione. La competenza e la passione del nostro personale sono il vero valore aggiunto che ci permette di garantire risultati di eccellenza in ogni progetto.'
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
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
