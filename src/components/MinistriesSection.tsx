import React, { useState } from 'react';
import { HeartHandshake, Calendar, ArrowRight, X, Clock, Users, BookOpen, Quote, MessageCircle } from 'lucide-react';
import { MINISTRIES, CHURCH_INFO } from '../data/churchData';
import { Ministry } from '../types/church';

interface MinistriesSectionProps {
  onSelectRoute?: () => void;
}

export const MinistriesSection: React.FC<MinistriesSectionProps> = ({ onSelectRoute }) => {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [filterAudience, setFilterAudience] = useState<string>('Todos');

  const filterOptions = [
    'Todos',
    'Niñez y Familia',
    'Jóvenes',
    'Adultos y Discipulado',
    'Comunitario y Rutas',
  ];

  const filteredMinistries = MINISTRIES.filter((m) => {
    if (filterAudience === 'Todos') return true;
    if (filterAudience === 'Niñez y Familia') return m.id === 'vidakids' || m.id === 'caritas-felices';
    if (filterAudience === 'Jóvenes') return m.id === 'jovenes';
    if (filterAudience === 'Adultos y Discipulado') return m.id === 'discipulado';
    if (filterAudience === 'Comunitario y Rutas') return m.id === 'rutas' || m.id === 'comedor' || m.id === 'evangelismo';
    return true;
  });

  return (
    <section id="ministerios" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
            Creciendo y Sirviendo Juntos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif">
            Nuestros Ministerios
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Cada ministerio en la Iglesia Bautista Vida ha nacido para abrazar a personas en sus distintas 
            etapas de vida, sembrando la verdad de Cristo y extendiendo Su compasión en La Siesta.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilterAudience(opt)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filterAudience === opt
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredMinistries.map((ministry) => (
            <div
              key={ministry.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Ministry Photo with Zoom Effect */}
              <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                
                {/* Badge on Image */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border shadow-xs ${ministry.badgeColor}`}>
                    {ministry.badge}
                  </span>
                </div>

                {/* Subtitle preview at bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium line-clamp-1">
                  {ministry.subtitle}
                </div>
              </div>

              {/* Ministry Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-stone-900 font-serif group-hover:text-amber-800 transition-colors">
                    {ministry.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {ministry.description}
                  </p>
                </div>

                {/* Schedule & Highlights Preview */}
                <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                  {ministry.schedule && (
                    <div className="flex items-center gap-2 text-stone-700 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{ministry.schedule}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-stone-500">
                    <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{ministry.targetAudience}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMinistry(ministry)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 group-hover:underline cursor-pointer"
                  >
                    <span>Conocer más y fotos</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  {ministry.id === 'rutas' && (
                    <a
                      href="#rutas"
                      onClick={onSelectRoute}
                      className="px-2.5 py-1 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
                    >
                      Solicitar bus
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Ministry Detail Modal */}
      {selectedMinistry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl relative">
            
            {/* Modal Image Header */}
            <div className="relative h-64 w-full bg-stone-100">
              <img
                src={selectedMinistry.image}
                alt={selectedMinistry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedMinistry(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-md mb-1.5 ${selectedMinistry.badgeColor}`}>
                  {selectedMinistry.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight">
                  {selectedMinistry.title}
                </h3>
                <p className="text-xs text-amber-200 font-medium">
                  {selectedMinistry.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Propósito y Visión
                </h4>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {selectedMinistry.description}
                </p>
              </div>

              {/* Quote if present */}
              {selectedMinistry.quote && (
                <div className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-600 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-950 font-serif italic">
                    {selectedMinistry.quote}
                  </p>
                </div>
              )}

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Lo que realizamos
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedMinistry.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule and Audience details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {selectedMinistry.schedule && (
                  <div className="p-3 rounded-xl bg-stone-100 flex items-center gap-2 text-stone-800">
                    <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-500 uppercase font-bold">Horario</div>
                      <div className="font-semibold">{selectedMinistry.schedule}</div>
                    </div>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-stone-100 flex items-center gap-2 text-stone-800">
                  <Users className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase font-bold">Dirigido A</div>
                    <div className="font-semibold">{selectedMinistry.targetAudience}</div>
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phones[0].cleanNumber}?text=${encodeURIComponent(
                    `¡Hola Pastor Norman! Me interesa información o colaborar con el ministerio de ${selectedMinistry.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Preguntar por este ministerio</span>
                </a>

                <button
                  onClick={() => setSelectedMinistry(null)}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
