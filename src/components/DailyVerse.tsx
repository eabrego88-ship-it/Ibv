import React, { useState } from 'react';
import { BookOpen, RefreshCw, Copy, Check, Share2 } from 'lucide-react';
import { DAILY_VERSES } from '../data/churchData';

export const DailyVerse: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = DAILY_VERSES[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % DAILY_VERSES.length);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`“${current.verse}” — ${current.reference} (Iglesia Bautista Vida, La Siesta)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const text = encodeURIComponent(`📖 *Versículo del Día - Iglesia Bautista Vida*\n\n“${current.verse}”\n\n— *${current.reference}*\n\n_El que encuentra a Jesús encuentra la Vida._`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-50 via-[#FAF6EE] to-amber-50 rounded-3xl border border-amber-200/90 p-6 sm:p-8 shadow-xs relative">
          
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-200/80 text-amber-800 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Alimento Espiritual • {current.theme}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-amber-800 bg-white px-3 py-1.5 rounded-lg border border-stone-200 transition-colors cursor-pointer"
              title="Ver otro versículo"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Siguiente</span>
            </button>
          </div>

          <blockquote className="text-lg sm:text-2xl font-bold font-serif text-stone-900 leading-snug my-4">
            “{current.verse}”
          </blockquote>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-200/60">
            <span className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-widest font-mono">
              {current.reference}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartir</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
