import { useLanguage } from '../contexts/language';

const Home = () => {
  const { language } = useLanguage();

  const content = {
    heading: {
      en: 'Rota Mechanical Works',
      it: 'Lavorazioni Meccaniche Rota'
    },
    subheading: {
      en: 'Precision mechanical machining',
      it: 'Lavorazioni meccaniche di precisione'
    },
    cta: {
      en: 'Contact us',
      it: 'Contattaci'
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center border-b border-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(./img/DEPOSITO_FOTO.jpeg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {content.heading[language]}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
          {content.subheading[language]}
        </p>
        <a
          href="#contacts"
          className="inline-block bg-white text-[rgb(98,98,98)] px-8 py-4 text-lg font-semibold border border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          {content.cta[language]}
        </a>
      </div>
    </section>
  );
};

export default Home;
