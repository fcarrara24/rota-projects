import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { workPieces } from '../data';
import { useLanguage } from '../contexts/language';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  return (
    <section id="carousel" className="py-20 bg-[rgb(98,98,98)] border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {labels.heading[language]}
        </h2>

        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-[rgb(98,98,98)] flex items-center justify-center p-8' : ''}`}>
          {isFullscreen && (
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 transition-colors border border-white z-10"
              aria-label="Exit fullscreen"
            >
              <X size={24} />
            </button>
          )}

          <div className={`${isFullscreen ? 'w-full max-w-6xl' : 'max-w-4xl mx-auto'} border border-white bg-black/20`}>
            <div className="relative">
              <div className={`${isFullscreen ? 'h-[70vh]' : 'h-[400px] md:h-[500px]'} bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer`}
                   onClick={() => handleImageClick(currentPiece)}>
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">⚙️</div>
                  <p className="text-xl">{currentPiece.nome_pezzo[language]}</p>
                </div>
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 hover:bg-white/20 transition-colors border border-white"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 hover:bg-white/20 transition-colors border border-white"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>

              {!isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute bottom-4 right-4 bg-white/10 text-white p-3 hover:bg-white/20 transition-colors border border-white"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={20} />
                </button>
              )}
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white">{currentPiece.nome_pezzo[language]}</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-300 font-semibold mb-2">{labels.materials[language]}</p>
                  <ul className="space-y-1">
                    {currentPiece.lista_materiale[language].map((mat, idx) => (
                      <li key={idx} className="text-gray-200">{mat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-gray-300 font-semibold mb-2">{labels.origin[language]}</p>
                  <p className="text-gray-200">{currentPiece.provenienza[language]}</p>

                  <p className="text-sm text-gray-300 font-semibold mt-4 mb-2">{labels.batch[language]}</p>
                  <p className="text-gray-200">{currentPiece.lotto[language]}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-300 font-semibold mb-2">{labels.strengths[language]}</p>
                <ul className="list-disc list-inside space-y-1">
                  {currentPiece.punti_di_forza[language].map((punto, idx) => (
                    <li key={idx} className="text-gray-200">{punto}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center gap-2 pb-6">
              {workPieces.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 border border-white transition-colors ${
                    idx === currentIndex ? 'bg-white' : 'bg-transparent'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-[rgb(98,98,98)] border border-white max-w-2xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-bold text-white mb-4">{selectedPiece.nome_pezzo[language]}</h3>

            <div className="space-y-4 text-gray-200">
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
      )}
    </section>
  );
};

export default Carousel;
