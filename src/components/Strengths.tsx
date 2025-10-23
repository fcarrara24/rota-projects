import { Clock, Settings, UserCheck } from 'lucide-react';
import { strengths } from '../data';
import { useLanguage } from '../contexts/language';

const iconMap = {
  clock: Clock,
  settings: Settings,
  'user-check': UserCheck
};

const Strengths = () => {
  const { language } = useLanguage();

  const labels = {
    heading: {
      en: 'Our Strengths',
      it: 'I Nostri Punti di Forza'
    }
  };

  return (
    <section id="strengths" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {labels.heading[language]}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength) => {
            const Icon = iconMap[strength.icon as keyof typeof iconMap];
            return (
              <div
                key={strength.id}
                className="border border-white p-8 bg-black/20 hover:bg-black/30 transition-colors group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border border-white flex items-center justify-center group-hover:bg-white transition-colors">
                    <Icon size={32} className="text-white group-hover:text-[rgb(98,98,98)] transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {strength.titolo[language]}
                </h3>

                <p className="text-gray-200 leading-relaxed text-center">
                  {strength.descrizione[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
