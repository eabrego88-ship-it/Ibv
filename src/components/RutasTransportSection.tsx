import React, { useState } from 'react';
import { Bus, ShieldCheck, Heart, Clock, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { ROUTE_SECTORS, CHURCH_INFO } from '../data/churchData';

export const RutasTransportSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    passengersCount: '1 niño',
    sector: ROUTE_SECTORS[0].name,
    addressNotes: '',
    serviceDay: 'Domingo (Escuela Dominical 9:30 AM)',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `🚌 *SOLICITUD DE RUTA DE TRANSPORTE - IBV LA SIESTA*
👤 Responsable: ${formData.parentName}
📱 Teléfono: ${formData.phone}
🧒 Pasajeros: ${formData.passengersCount}
📍 Sector: ${formData.sector}
🏠 Dirección/Ref: ${formData.addressNotes || 'No especificada'}
📅 Servicio: ${formData.serviceDay}

Agradezco me confirmen la parada y horario de recogida. ¡Muchas gracias!`;

    const whatsappUrl = `https://wa.me/${CHURCH_INFO.phones[0].cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rutas" className="py-20 bg-white border-y border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <Bus className="w-3.5 h-3.5 text-emerald-700" />
            Las Rutas... Una Misión de Amor
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif">
            Transporte Seguro y Gratuito Para Tus Hijos
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sabemos lo importante que es la seguridad de tus hijos. Por eso, en la Iglesia Bautista Vida 
            disponemos de <strong>3 rutas de buses</strong> organizadas en diferentes zonas de la comunidad para servir 
            a la niñez cada viernes y domingo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Bus Photo & Labor / Purpose */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Bus Image Card */}
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl group bg-stone-900 relative">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/images/rutas_bus.png"
                  alt="Buses de transporte Iglesia Bautista Vida La Siesta"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                    Flota de Servicio Comunitario
                  </div>
                  <div className="text-lg font-bold font-serif">
                    3 Rutas Activas en La Siesta y Tocumen
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Nuestra Labor</h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Disponemos de 3 rutas organizadas en diferentes zonas de la comunidad para servir 
                      a la niñez cada viernes y domingo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Propósito Santo</h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Brindar un transporte seguro que permita a cada niño asistir a la iglesia, ser instruido 
                      en la Palabra y tomar la decisión de fe de aceptar a Jesucristo como Señor y Salvador.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Promises */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-emerald-950 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Monitores responsables a bordo</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-emerald-950 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Servicio 100% gratuito para la comunidad</span>
              </div>
            </div>

          </div>

          {/* Right Column: Route Sectors & Interactive Request Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Sector cards */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Sectores de Cobertura
              </h3>
              {ROUTE_SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 hover:border-emerald-400 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      {sector.name}
                    </div>
                    <div className="text-xs text-stone-600">
                      {sector.zone}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-[11px] font-bold text-stone-800 bg-white px-2 py-1 rounded-md border border-stone-200">
                      Dom: {sector.pickupTimeSunday}
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1">
                      Vie: {sector.pickupTimeFriday}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Request Form */}
            <div className="bg-[#FCFAF7] rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  Solicita que el bus pase por tu sector
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Completa el formulario y nos coordinaremos contigo de inmediato vía WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">
                    ¡Solicitud de Ruta Enviada!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Hemos abierto WhatsApp con los datos de tu solicitud. Nuestro equipo de transporte te contactará para coordinar la parada exacta.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline pt-1 cursor-pointer"
                  >
                    Hacer otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Nombre del Padre, Madre o Tutor *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Ej. María Pérez"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+507 6000-0000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Cantidad de Niños / Personas
                      </label>
                      <select
                        value={formData.passengersCount}
                        onChange={(e) => setFormData({ ...formData, passengersCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      >
                        <option value="1 niño">1 niño</option>
                        <option value="2 niños">2 niños</option>
                        <option value="3 o más niños">3 o más niños</option>
                        <option value="Familia completa">Familia completa</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Sector más cercano
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      >
                        {ROUTE_SECTORS.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Culto de Interés
                      </label>
                      <select
                        value={formData.serviceDay}
                        onChange={(e) => setFormData({ ...formData, serviceDay: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      >
                        <option value="Domingo (Escuela Dominical 9:30 AM)">Domingo (Escuela Dominical 9:30 AM)</option>
                        <option value="Domingo (Culto General 11:00 AM)">Domingo (Culto General 11:00 AM)</option>
                        <option value="Viernes (Jóvenes Vida Xtreme 7:00 PM)">Viernes (Jóvenes Vida Xtreme 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Dirección aproximada o punto de referencia
                    </label>
                    <input
                      type="text"
                      value={formData.addressNotes}
                      onChange={(e) => setFormData({ ...formData, addressNotes: e.target.value })}
                      placeholder="Ej. Cerca del minisuper, casa verde verjas blancas"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Ruta por WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
