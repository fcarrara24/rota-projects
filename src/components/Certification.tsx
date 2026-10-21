import { Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/language';

const Certification = () => {
  const { language } = useLanguage();

  const content = {
    heading: {
      en: 'Certifications',
      it: 'Certificazioni'
    },
    subtitle: {
      en: 'Quality Management System',
      it: 'Sistema di Gestione per la Qualità'
    },
    standard: 'ISO 9001:2015',
    title: {
      en: 'ISO 9001:2015 Certification',
      it: 'Certificazione ISO 9001:2015'
    },
    scopeLabel: {
      en: 'Scope of Certification:',
      it: 'Campo di Applicazione:'
    },
    description: {
      en: 'Production of precision mechanical components through turning and milling operations has been assessed and found to comply with ISO 9001:2015.',
      it: 'Produzione di componenti meccanici di precisione mediante lavorazioni di tornitura e fresatura è stato sottoposto a valutazione e giudicato conforme secondo la ISO 9001:2015.'
    },
    features: [
      {
        en: 'Precision mechanical processing',
        it: 'Lavorazioni meccaniche di alta precisione'
      },
      {
        en: 'Certified CNC turning and milling',
        it: 'Tornitura e fresatura CNC certificata'
      },
      {
        en: 'Guaranteed quality standards',
        it: 'Standard qualitativi garantiti'
      }
    ]
  };

  return (
    <section id="certification" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {content.heading[language]}
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg max-w-2xl mx-auto">
          {content.subtitle[language]}
        </p>

        <div className="max-w-4xl mx-auto border border-white p-8 md:p-12 bg-black/20 hover:bg-black/30 transition-colors">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 border border-white flex items-center justify-center bg-black/30">
                <Award size={48} className="text-white" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-block px-3 py-1 border border-white/40 text-amber-300 bg-amber-900/20 text-xs font-semibold uppercase tracking-wider mb-2">
                {content.standard}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {content.title[language]}
              </h3>

              <div className="space-y-2">
                <p className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                  {content.scopeLabel[language]}
                </p>
                <p className="text-gray-100 text-lg leading-relaxed italic bg-black/20 p-4 border-l-2 border-white">
                  "{content.description[language]}"
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/20 mt-6">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-200 text-sm">
                    <CheckCircle2 size={18} className="text-amber-300 flex-shrink-0" />
                    <span>{feature[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
