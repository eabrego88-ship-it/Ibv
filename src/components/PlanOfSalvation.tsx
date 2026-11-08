import React, { useState } from 'react';
import { Sparkles, BookOpen, Heart, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { SALVATION_STEPS, CHURCH_INFO } from '../data/churchData';

export const PlanOfSalvation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [prayedConfirmation, setPrayedConfirmation] = useState(false);

  const primaryPhone = CHURCH_INFO.phones[0];
  const salvationWhatsapp = `https://wa.me/${primaryPhone.cleanNumber}?text=${encodeURIComponent(
    'Pastor Norman, ¡he decidido entregar mi vida a Cristo hoy a través del sitio web de la Iglesia Bautista Vida! Quisiera saber cuáles son mis próximos pasos.'
  )}`;

  return (
    <section id="salvacion" className="py-20 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#1E293B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            El Mensaje que Cambia Vidas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight">
            ¿Cómo Encontrar la Vida Verdadera?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Nuestro lema declara: <span className="text-amber-400 font-semibold italic">“El que encuentra a Jesús encuentra la Vida”</span>. 
            Dios no quiere una religión vacía, sino una relación transformadora, llena de amor, paz y vida eterna contigo.
          </p>
        </div>

        {/* Steps Grid / Interactive Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {SALVATION_STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer flex items-center justify-between border ${
                  activeStep === idx
                    ? 'bg-amber-600/20 border-amber-400/70 text-white shadow-lg'
                    : 'bg-white/5 border-white/10 text-stone-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    activeStep === idx
                      ? 'bg-amber-500 text-stone-950 font-black'
                      : 'bg-white/10 text-stone-400'
                  }`}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                    <span className="text-xs text-amber-400/90 font-mono">{step.passage}</span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === idx ? 'text-amber-400 translate-x-1' : 'text-stone-500'}`} />
              </button>
            ))}
          </div>

          {/* Right: Active Step Detail Card */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Paso {SALVATION_STEPS[activeStep].number} de 5
              </span>
              <span className="px-3 py-1 text-xs font-mono font-bold bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30">
                {SALVATION_STEPS[activeStep].passage}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {SALVATION_STEPS[activeStep].title}
            </h3>

            {/* Bible Verse Box */}
            <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-100 font-serif italic text-base sm:text-lg leading-relaxed shadow-inner">
              “{SALVATION_STEPS[activeStep].text}”
            </div>

            {/* Explanation */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {SALVATION_STEPS[activeStep].explanation}
            </p>

            {/* Next Step / Guided Prayer CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              {activeStep < SALVATION_STEPS.length - 1 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors cursor-pointer"
                >
                  <span>Siguiente paso</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs text-amber-300 font-semibold">
                  ¡Has completado el camino bíblico!
                </span>
              )}
            </div>

          </div>

        </div>

        {/* Guided Prayer Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-gradient-to-br from-amber-950/40 via-stone-900/60 to-amber-950/40 border border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
            <Heart className="w-6 h-6 fill-amber-400" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif text-amber-200">
              Haz esta oración con sinceridad en tu corazón
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              No son las palabras exactas, sino la actitud sincera de tu corazón ante Dios:
            </p>
          </div>

          <blockquote className="p-5 rounded-2xl bg-black/40 border border-white/10 text-stone-200 text-sm sm:text-base leading-relaxed italic max-w-2xl mx-auto">
            “Señor Jesús: Reconozco que he pecado y que necesito Tu perdón. Creo con todo mi corazón 
            que moriste en la cruz por mis pecados y que resucitaste. Hoy te abro la puerta de mi vida; 
            te acepto como mi único y suficiente Señor y Salvador. Lléname de Tu paz y ayúdame a seguirte 
            cada día. Amén.”
          </blockquote>

          {prayedConfirmation ? (
            <div className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 space-y-3">
              <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold text-base">
                <CheckCircle2 className="w-5 h-5" />
                <span>¡Bienvenido a la Familia de Dios!</span>
              </div>
              <p className="text-xs text-stone-200 max-w-md mx-auto">
                Hay fiesta en el cielo por tu decisión. En la Iglesia Bautista Vida queremos celebrarlo contigo, 
                regalarte tu primera Biblia y caminar juntos.
              </p>
              <a
                href={salvationWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contarle al Pastor Norman por WhatsApp</span>
              </a>
            </div>
          ) : (
            <button
              onClick={() => setPrayedConfirmation(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-stone-950" />
              <span>Hice esta oración hoy con fe</span>
            </button>
          )}

        </div>

      </div>
    </section>
  );
};
