import React, { useState } from 'react';
import { X, Download, FileText, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Check } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!isOpen) return null;

  const pages = CHURCH_INFO.brochurePages;
  const pageTitles = [
    'Página 1: Familia Pastoral • Evangelismo • Templo Principal',
    'Página 2: VidaKids • Caritas Felices • Rutas de Bus • Comedor • Jóvenes • Discipulado',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-stone-700/80 rounded-3xl max-w-5xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl text-white">
        
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold font-serif text-white">
                Folleto Oficial • Iglesia Bautista Vida (IBV)
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-400">
                {pageTitles[currentPage]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href={CHURCH_INFO.pdfBrochureUrl}
              download="Folleto_Iglesia_Bautista_Vida_IBV.pdf"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white transition-colors"
              title="Descargar PDF original"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar PDF</span>
            </a>

            {/* Toggle Zoom */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              title={isZoomed ? 'Alejar' : 'Acercar'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewer Area */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950/70">
          <div className={`transition-all duration-300 ${isZoomed ? 'scale-125 origin-center' : 'w-full max-w-4xl'}`}>
            <img
              src={pages[currentPage]}
              alt={`Folleto IBV Página ${currentPage + 1}`}
              className="w-full h-auto rounded-xl shadow-2xl border border-stone-800 object-contain mx-auto max-h-[72vh]"
            />
          </div>
        </div>

        {/* Footer Bar with Pagination */}
        <div className="p-3.5 sm:px-6 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(0)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                currentPage === 0
                  ? 'bg-amber-500 text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              Página 1 (Exterior)
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                currentPage === 1
                  ? 'bg-amber-500 text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              Página 2 (Ministerios)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs text-stone-400">
              {currentPage + 1} de {pages.length}
            </span>

            <button
              disabled={currentPage === pages.length - 1}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={CHURCH_INFO.pdfBrochureUrl}
              download="Folleto_Iglesia_Bautista_Vida_IBV.pdf"
              className="sm:hidden flex items-center gap-1 ml-2 p-1.5 rounded-lg bg-amber-600 text-white text-xs"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
