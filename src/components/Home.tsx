const Home = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center border-b border-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1453544/pexels-photo-1453544.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Lamierificio Rota
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
          Lavorazioni meccaniche di precisione
        </p>
        <a
          href="#contacts"
          className="inline-block bg-white text-[rgb(61,61,61)] px-8 py-4 text-lg font-semibold border border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          Contattaci
        </a>
      </div>
    </section>
  );
};

export default Home;
