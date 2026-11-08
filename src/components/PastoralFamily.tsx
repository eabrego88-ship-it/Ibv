import React from 'react';
import { Phone, MessageCircle, Heart, Award, Sparkles, MapPin } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

interface PastoralFamilyProps {
  onOpenPrayerModal: () => void;
}

export const PastoralFamily: React.FC<PastoralFamilyProps> = ({ onOpenPrayerModal }) => {
  const { pastor, phones } = CHURCH_INFO;
  const primaryPhone = phones[0];
  const secondaryPhone = phones[1];

  const pastorWhatsapp = `https://wa.me/${primaryPhone.cleanNumber}?text=${encodeURIComponent(
    'Estimado Pastor Norman Ortiz, un cordial saludo. Le escribo desde la página web de la Iglesia Bautista Vida para solicitar orientación / consejería espiritual.'
  )}`;

  return (
    <section id="pastor" className="py-20 bg-white border-y border-stone-200/80 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#FAF6F0] via-white to-[#F9F4EC] rounded-3xl border border-amber-200/80 p-8 sm:p-12 lg:p-16 shadow-lg shadow-amber-950/5">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Pastoral Family Photo with ornate frame */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                
                {/* Halo ring */}
                <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 opacity-60 blur-xs group-hover:opacity-100 transition-opacity" />
                
                {/* Photo container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-amber-50">
                  <img
                    src={pastor.image}
                    alt={`Pastor ${pastor.name} y su esposa ${pastor.spouse}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge pinned on photo */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-stone-900/90 backdrop-blur-md text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap border border-amber-400/40">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>Familia Pastoral Ortiz Piedra</span>
                </div>
              </div>

              {/* Names & Titles */}
              <div className="mt-8 space-y-1">
                <h3 className="text-2xl font-bold text-stone-900 font-serif">
                  Pastor Norman Ortiz
                </h3>
                <p className="text-sm font-semibold text-amber-800">
                  y su esposa Isabel Piedra
                </p>
                <p className="text-xs text-stone-600 flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  Tocumen, La Siesta • Panamá
                </p>
              </div>

              {/* Direct phone pills */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5 w-full justify-center">
                <a
                  href={`tel:${primaryPhone.number}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-stone-800 bg-white border border-stone-200 hover:border-amber-400 hover:bg-amber-50 shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>{primaryPhone.number}</span>
                </a>

                {secondaryPhone && (
                  <a
                    href={`tel:${secondaryPhone.number}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-stone-800 bg-white border border-stone-200 hover:border-amber-400 hover:bg-amber-50 shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>{secondaryPhone.number}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Bio, Calling & Pastoral Heart */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/60">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Liderazgo Pastoral & Vocación Misionera
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif leading-snug">
                Más de 20 Años de Misión y Fidelidad en Panamá
              </h2>

              {/* Quote from the brochure */}
              <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-amber-600 text-stone-700 text-sm sm:text-base leading-relaxed italic shadow-xs">
                “La Iglesia Bautista Vida tiene el honor de ser pastoreada por Norman Ortiz y su esposa Isabel Piedra. 
                De nacionalidad costarricense, el Pastor Norman respondió con obediencia al llamado de Dios de llevar 
                el Evangelio a las naciones, arribando a Panamá hace más de 20 años. Durante los últimos 17 años, 
                ha liderado con fidelidad y dedicación la Iglesia Bautista Vida en La Siesta, guiando a nuestra comunidad 
                en el crecimiento espiritual, el servicio comunitario y la expansión del Reino de Dios.”
              </blockquote>

              {/* Milestones / Credibility indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      17 Años en La Siesta
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Edificando familias, discipulando niños y jóvenes de generación en generación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Compromiso Social & Espiritual
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Comedor infantil quincenal, 3 rutas de buses gratuitas y evangelismo quincenal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pastoral Counseling CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={pastorWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar con el Pastor por WhatsApp</span>
                </a>

                <button
                  onClick={onOpenPrayerModal}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-colors cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Solicitar Consejería / Oración</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
