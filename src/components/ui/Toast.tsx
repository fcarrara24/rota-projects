import { X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface ToastProps {
    message: string;
    duration?: number;
    onClose?: () => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    showCloseButton?: boolean;
    showProgressBar?: boolean;
    className?: string;
    progressBarColor?: string;
}

export const Toast = ({
    message,
    duration = 3000,
    onClose,
    position = 'bottom-right',
    showCloseButton = true,
    showProgressBar = true,
    className = '',
    progressBarColor = 'bg-blue-500',
}: ToastProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    // Mappa le posizioni alle classi di allineamento
    const positionClasses = {
        'top-right': 'top-6 right-6',
        'top-left': 'top-6 left-6',
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6',
    };

    const handleClose = useCallback(() => {
        setIsVisible(false);
        onClose?.();
    }, [onClose]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let progressInterval: NodeJS.Timeout;

        if (isVisible) {
            setProgress(100);

            progressInterval = setInterval(() => {
                setProgress(prev => Math.max(0, prev - (100 / (duration / 50))));
            }, 50);

            timer = setTimeout(() => {
                handleClose();
            }, duration);
        }

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [isVisible, duration, handleClose]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed z-50 animate-fade-in-up ${positionClasses[position]} ${className}`}
            role="alert"
            aria-live="assertive"
        >
            <div className="bg-black bg-opacity-90 text-white rounded-lg shadow-xl overflow-hidden w-80">
                <div className="p-4 flex items-start justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium">{message}</p>
                    </div>
                    {showCloseButton && (
                        <button
                            onClick={handleClose}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
                {showProgressBar && (
                    <div className="h-1 bg-gray-700">
                        <div
                            className={`h-full ${progressBarColor} transition-all duration-50`}
                            style={{ width: `${progress}%` }}
                            aria-valuenow={progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

// Stili globali per l'animazione del toast
const globalStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out forwards;
  }
`;

// Aggiungi gli stili globali una sola volta
if (typeof document !== 'undefined' && !document.getElementById('toast-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'toast-styles';
    styleElement.textContent = globalStyles;
    document.head.appendChild(styleElement);
}
