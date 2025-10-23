import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { workPieces } from '../data';
import { useLanguage } from '../contexts/language';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(workPieces[0]);
  const { language } = useLanguage();

  const labels = {
    heading: {
      en: 'Our Workpieces',
      it: 'Le Nostre Lavorazioni'
    },
    materials: {
      en: 'Materials:',
      it: 'Materiali:'
    },
    origin: {
      en: 'Industry:',
      it: 'Provenienza:'
    },
    batch: {
      en: 'Batch:',
      it: 'Lotto:'
    },
    strengths: {
      en: 'Strengths:',
      it: 'Punti di Forza:'
    },
    modalMaterials: {
      en: 'Materials:',
      it: 'Materiali:'
    },
    modalSector: {
      en: 'Sector:',
      it: 'Settore:'
    },
    modalBatch: {
      en: 'Production Batch:',
      it: 'Lotto di Produzione:'
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + workPieces.length) % workPieces.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % workPieces.length);
  };

  const handleImageClick = (piece: typeof workPieces[0]) => {
    setSelectedPiece(piece);
    setShowModal(true);
  };

  const currentPiece = workPieces[currentIndex];

  useEffect(() => {
    if (!showModal) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showModal]);

  return (
    <section id="carousel" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {labels.heading[language]}
        </h2>

        <div className="relative">
          <div className="relative mx-auto max-w-4xl border border-white/40 bg-black/30 rounded-lg overflow-hidden shadow-xl" style={{ maxHeight: '80vh' }}>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm text-white p-3 hover:bg-white/20 transition-colors border border-white/40"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm text-white p-3 hover:bg-white/20 transition-colors border border-white/40"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            <button
              onClick={() => handleImageClick(currentPiece)}
              className="group relative block w-full h-full"
              aria-label="Expand workpiece details"
            >
              <img
                src={`./img/${currentPiece.immagine}`}
                alt={currentPiece.nome_pezzo[language]}
                className="w-full h-[70vh] sm:h-[75vh] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <p className="text-white text-2xl font-semibold text-left">
                  {currentPiece.nome_pezzo[language]}
                </p>
              </div>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {workPieces.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full border border-white transition-colors ${
                  idx === currentIndex ? 'bg-white' : 'bg-transparent'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-[rgb(98,98,98)] border border-white/40 max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <img
                src={`./img/${selectedPiece.immagine}`}
                alt={selectedPiece.nome_pezzo[language]}
                className="w-full max-h-[50vh] object-cover"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-3xl font-bold text-white">{selectedPiece.nome_pezzo[language]}</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6 text-gray-200 max-h-[40vh] overflow-y-auto pr-2">
                <p className="leading-relaxed">{selectedPiece.descrizione_completa[language]}</p>

                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-gray-300 font-semibold mb-2">{labels.modalMaterials[language]}</p>
                  <p>{selectedPiece.lista_materiale[language].join(', ')}</p>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-gray-300 font-semibold mb-2">{labels.modalSector[language]}</p>
                  <p>{selectedPiece.provenienza[language]}</p>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-gray-300 font-semibold mb-2">{labels.modalBatch[language]}</p>
                  <p>{selectedPiece.lotto[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
