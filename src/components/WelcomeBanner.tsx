import React from 'react';
import { Sparkles, Smile, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export const WelcomeBanner: React.FC = () => {
  const primaryPhone = CHURCH_INFO.phones[0];
  const visitorWhatsapp = `https://wa.me/${primaryPhone.cleanNumber}?text=${encodeURIComponent(
    '¡Hola Pastor Norman! Es mi primera vez conociendo la Iglesia Bautista Vida en La Siesta y me gustaría asistir este fin de semana.'
  )}`;

  return (
    <section className="bg-white border-y border-stone-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl border border-amber-200/80 p-6 sm:p-8 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                ¿Eres nuevo en la comunidad de Tocumen o La Siesta?
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
                ¡En IBV tienes un lugar para ti y toda tu familia!
              </h2>
              <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
                Queremos que te sientas en casa desde el primer instante. En nuestra congregación encontrarás 
                amor fraternal, enseñanza bíblica clara y un ambiente sano para tus hijos y jóvenes.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={visitorWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Avisar de mi visita</span>
              </a>
              <a
                href="#ubicacion"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-colors"
              >
                <span>Ver cómo llegar</span>
              </a>
            </div>

          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-amber-200/60">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-200/80 text-amber-800 flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">Ambiente Familiar y Cálido</h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Ven con ropa cómoda. Te recibiremos con respeto, alegría y amor cristiano.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-200/80 text-rose-800 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">VidaKids & Club Caritas Felices</h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Aulas especiales y maestros dedicados para que tus niños aprendan la Biblia jugando.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-200/80 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">Rutas de Transporte Gratuitas</h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Si no tienes movilización, nuestros buses pasan por diferentes zonas de la comunidad.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
