import { useLanguage } from '../contexts/language';

const Home = () => {
  const { language } = useLanguage();

  const content = {
    heading: {
      en: 'LMR',
      it: 'LMR'
    },
    subheading: {
      en: 'MECHANICAL MACHINING',
      it: 'LAVORAZIONI MECCANICHE'
    },
    author: {
      en: 'ROTA',
      it: 'ROTA'
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
        <h1 className="text-8xl md:text-9xl font-bold text-[rgb(255,0,0)] mb-6 tracking-tight">
          {content.heading[language]}
        </h1>
         <div className="flex justify-center w-full mb-2">
          <div className="h-5 w-1/3 bg-green-600"></div>
          <div className="h-5 w-1/3 bg-white"></div>
          <div className="h-5 w-1/3 bg-red-600"></div>
        </div>
        <p className="text-xl md:text-2xl font-bold" style={{ color: 'rgb(0, 190, 0)' }}>
          {content.subheading[language]}
        </p>
        <p className="text-xl md:text-2xl font-bold text-[rgb(0, 172, 0)] mb-12" style={{ color: 'rgb(0, 190, 0)' }}>
          {content.author[language]}
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
