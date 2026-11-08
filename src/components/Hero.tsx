import React from 'react';
import { Sparkles, Calendar, Bus, ArrowRight, Heart, FileText, CheckCircle2, MapPin } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

interface HeroProps {
  onOpenBrochure: () => void;
  onOpenPrayerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrochure, onOpenPrayerModal }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#F8F2E8] to-[#FCFAF7] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-amber-900/5">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Motto, Key Points, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Bienvenidos a la Iglesia Bautista Vida • Tocumen, La Siesta</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-serif leading-[1.15]">
              El que encuentra a{' '}
              <span className="text-amber-700 relative inline-block">
                JESÚS
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-amber-500/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              encuentra la Vida
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Somos <strong className="font-semibold text-stone-900">una iglesia para toda la familia</strong>, 
              comprometida con la predicación fiel de la Palabra de Dios, el servicio amoroso a nuestra comunidad 
              y la salvación en Cristo en La Siesta, Tocumen.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-stone-900">17 Años</div>
                  <div className="text-[11px] text-stone-600">En La Siesta</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Bus className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-stone-900">3 Rutas</div>
                  <div className="text-[11px] text-stone-600">Transporte gratis</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-stone-900">Comedor</div>
                  <div className="text-[11px] text-stone-600">Infantil quincenal</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#cultos"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md shadow-amber-600/20 hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Horarios de Cultos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#rutas"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-xs hover:shadow-md transition-all"
              >
                <Bus className="w-4 h-4 text-emerald-600" />
                <span>Solicitar Ruta de Bus</span>
              </a>

              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-stone-700 hover:text-amber-800 hover:bg-amber-100/50 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-700" />
                <span>Ver Folleto Oficial</span>
              </button>
            </div>

            {/* Location Notice */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-stone-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Calle Pocrí Casa #35, La Siesta, Tocumen, Panamá • ¡Te esperamos este domingo!</span>
            </div>
          </div>

          {/* Right Column: Authentic Church Photo & Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-stone-200/90 group">
                
                {/* Photo of the church temple in Tocumen La Siesta */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-100">
                  <img
                    src="/images/templo_ibv.png"
                    alt="Templo Iglesia Bautista Vida en Tocumen La Siesta"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                  
                  {/* Floating top badge */}
                  <div className="absolute top-4 left-4 bg-amber-500/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Templo IBV La Siesta
                  </div>

                  {/* Bottom overlay text on the image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Comunidad & Fe
                    </div>
                    <div className="text-lg font-bold font-serif">
                      Una Iglesia Para Toda La Familia
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-5 bg-white space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-stone-900 font-serif">
                        17 Años de Ministerio en La Siesta
                      </h2>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Pastoreada con amor y fidelidad por el Pastor Norman Ortiz y su esposa Isabel Piedra.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-600">¿Deseas oración por tu familia?</span>
                    <button
                      onClick={onOpenPrayerModal}
                      className="font-bold text-amber-700 hover:text-amber-800 hover:underline cursor-pointer"
                    >
                      Pide oración aquí &rarr;
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating mini badge at bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-3 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-xs">
                  IBV
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Puertas Abiertas</div>
                  <div className="text-[11px] text-stone-600">Domingos 9:30 AM y 11:00 AM</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
