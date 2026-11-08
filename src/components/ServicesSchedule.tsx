import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Bus, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { CHURCH_SERVICES, CHURCH_INFO } from '../data/churchData';

interface ServicesScheduleProps {
  onSelectRouteTab?: () => void;
}

export const ServicesSchedule: React.FC<ServicesScheduleProps> = ({ onSelectRouteTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Dominical', 'Discipulado', 'Jóvenes', 'Comunitario'];

  const filteredServices = activeCategory === 'Todos'
    ? CHURCH_SERVICES
    : CHURCH_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="cultos" className="py-16 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            Nuestra Semana de Comunión
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif">
            Horarios de Cultos & Actividades
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Te invitamos a ser parte de cada uno de nuestros tiempos de oración, alabanza, comunión 
            y estudio de las Sagradas Escrituras en el templo de La Siesta.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-amber-400"
            >
              <div className="space-y-4">
                
                {/* Header: Day & Time */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200/80">
                    {service.day}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-stone-800 font-bold text-sm bg-stone-100 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>{service.time}</span>
                  </div>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Badges / Extras */}
                <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                  <div className="flex items-center gap-2 text-stone-600">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{service.location}</span>
                  </div>

                  {service.transportAvailable ? (
                    <div className="flex items-center gap-2 text-emerald-700 font-medium">
                      <Bus className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Rutas de transporte disponibles</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-stone-400 font-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                      <span>Entrada libre para toda la comunidad</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Card Footer action */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                {service.transportAvailable ? (
                  <a
                    href="#rutas"
                    onClick={onSelectRouteTab}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Pedir transporte</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-stone-600 font-medium">Reunión presencial</span>
                )}

                <a
                  href={`https://wa.me/${CHURCH_INFO.phones[0].cleanNumber}?text=${encodeURIComponent(
                    `¡Hola! Quisiera más información sobre: ${service.title} (${service.day} ${service.time}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-stone-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
                  title="Preguntar por WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Consultar</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner with Bible Verse */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 text-center max-w-2xl mx-auto shadow-xs">
          <p className="italic text-stone-700 font-serif text-base sm:text-lg">
            “Yo me alegré con los que me decían: A la casa de Jehová iremos.”
          </p>
          <span className="block mt-1 text-xs font-bold text-amber-700 uppercase tracking-widest">
            Salmos 122:1
          </span>
        </div>

      </div>
    </section>
  );
};
