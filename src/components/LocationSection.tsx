import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, Bus, ExternalLink, MessageCircle } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

export const LocationSection: React.FC = () => {
  const { address, phones, email } = CHURCH_INFO;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Calle Pocri, La Siesta, Tocumen, Panama'
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    'Calle Pocri, La Siesta, Tocumen, Panama'
  )}`;

  return (
    <section id="ubicacion" className="py-20 bg-[#FAF7F2] border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            Visítanos en La Siesta
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif">
            Ubicación & Contacto
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Estamos ubicados en una zona accesible en el corazón de La Siesta, Tocumen. 
            Nuestras puertas están abiertas para recibirte a ti y a tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Phone, Email & Transportation cues */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Address Box */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Dirección Exacta
                  </h3>
                  <div className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                    {address.street}, {address.houseNumber}
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {address.neighborhood}, {address.corregimiento}, {address.country}
                  </p>
                  <p className="text-[11px] text-amber-800 font-medium mt-1">
                    {address.referencePoint}
                  </p>
                </div>
              </div>

              {/* Phones Box */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Atención Telefónica & Pastoral
                  </h3>
                  {phones.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <a
                        href={`tel:${p.number}`}
                        className="text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors"
                      >
                        {p.number}
                      </a>
                      <span className="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-600 rounded-md">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Box */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 border border-blue-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Correo Electrónico
                  </h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Bus Note */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-950">
                <Bus className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">¿Necesitas transporte para llegar?</span> Recuerda que contamos con 3 rutas de buses gratuitas los domingos y viernes por diferentes barriadas de La Siesta.
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-2.5">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir en Waze</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map Presentation & Landmark Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs flex flex-col">
            
            {/* Visual Temple Map Representation */}
            <div className="relative h-72 sm:h-80 w-full bg-stone-200 overflow-hidden group">
              <img
                src="/images/templo_ibv.png"
                alt="Fachada del Templo Iglesia Bautista Vida"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/40" />

              {/* Pin Overlay Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white text-center max-w-xs w-full">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mx-auto shadow-md mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-serif">
                  Templo Iglesia Bautista Vida
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Calle Pocrí, Casa # 35 • La Siesta
                </p>
                <div className="mt-3">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors"
                  >
                    <span>Ver ruta GPS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Tocumen, Ciudad de Panamá</span>
              </div>
            </div>

            {/* How to get there guidance */}
            <div className="p-6 sm:p-7 space-y-4 bg-stone-50/50 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Indicaciones para llegar
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold block text-stone-900 mb-0.5">En Metro Bus o Transporte</span>
                    Tomar ruta hacia La Siesta. Bajar en la parada cercana a Calle Pocrí o Parque de La Siesta y caminar 2 minutos.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold block text-stone-900 mb-0.5">En Vehículo Particular</span>
                    Desde Vía Domingo Díaz o Corredor Sur, ingresar a La Siesta por la entrada principal y avanzar hasta Calle Pocrí #35.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500">¿Tienes dudas en el camino?</span>
                <a
                  href={`https://wa.me/${phones[0].cleanNumber}?text=${encodeURIComponent('Hola Pastor, estoy de camino a la iglesia y necesito una indicación para llegar.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Escribir por asistencia</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
