import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/language';

const Topbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: { en: 'Home', it: 'Home' }, href: '#home' },
    { label: { en: 'About Us', it: 'Chi Siamo' }, href: '#about' },
    { label: { en: 'Workpieces', it: 'Lavorazioni' }, href: '#carousel' },
    { label: { en: 'Strengths', it: 'Punti di Forza' }, href: '#strengths' },
    { label: { en: 'Materials', it: 'Materiali' }, href: '#materials' },
    { label: { en: 'Machinery', it: 'Macchinari' }, href: '#machinery' },
    { label: { en: 'Contacts', it: 'Contatti' }, href: '#contacts' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(61,61,61)]/95 backdrop-blur-sm border-b border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[95px]">
            <div className="flex-shrink-0">
              <a href="#home" className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
                {language === 'en' ? 'LMR by Rota Stefano' : 'LMR di Rota Stefano'}
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors text-sm font-medium border-b-2 border-transparent hover:border-white pb-1"
                >
                  {language === 'en' ? link.label.en : link.label.it}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 border border-white text-white text-xs font-semibold hover:bg-white hover:text-[rgb(61,61,61)] transition-colors"
                type="button"
              >
                {language === 'en' ? 'IT' : 'EN'}
              </button>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[rgb(61,61,61)] border-l border-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 mt-[95px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white hover:text-gray-300 transition-colors py-3 border-b border-white/20 font-medium"
            >
              {language === 'en' ? link.label.en : link.label.it}
            </a>
          ))}

          <button
            onClick={() => {
              toggleLanguage();
              handleLinkClick();
            }}
            className="mt-6 px-3 py-2 border border-white text-white text-sm font-semibold hover:bg-white hover:text-[rgb(61,61,61)] transition-colors"
            type="button"
          >
            {language === 'en' ? 'Italiano' : 'English'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Topbar;
