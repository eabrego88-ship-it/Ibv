import React from 'react';
import { Church, MapPin, Phone, Mail, Heart, MessageCircle, FileText, ArrowUp } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenPrayerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenPrayerModal }) => {
  const { name, tagline, verseMotto, address, phones, email, pastor } = CHURCH_INFO;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Identity & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-md">
                <Church className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif tracking-tight">
                  {name}
                </span>
                <p className="text-xs text-amber-400 font-medium">
                  {tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Durante más de 17 años guiando a nuestra comunidad en La Siesta, Tocumen, 
              en el crecimiento espiritual, la asistencia social y la proclamación del Evangelio salvador de Cristo.
            </p>

            <div className="p-3.5 rounded-2xl bg-stone-800/80 border border-stone-700/80 text-amber-200 text-xs italic font-serif">
              “{verseMotto}”
            </div>

            <div className="text-xs text-stone-400">
              <strong className="text-stone-300">Pastores:</strong> {pastor.name} y su esposa {pastor.spouse}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cultos" className="hover:text-amber-300 transition-colors">
                  Horarios de Cultos
                </a>
              </li>
              <li>
                <a href="#pastor" className="hover:text-amber-300 transition-colors">
                  Familia Pastoral Ortiz Piedra
                </a>
              </li>
              <li>
                <a href="#ministerios" className="hover:text-amber-300 transition-colors">
                  VidaKids & Ministerios
                </a>
              </li>
              <li>
                <a href="#rutas" className="hover:text-amber-300 transition-colors">
                  Rutas de Transporte Gratuito
                </a>
              </li>
              <li>
                <a href="#salvacion" className="hover:text-amber-300 transition-colors">
                  Plan de Salvación Bíblico
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-amber-300 transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Actions & Brochure */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Comunidad & Recursos
            </h4>

            <div className="space-y-2.5">
              <button
                onClick={onOpenBrochure}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Ver Folleto Oficial IBV</span>
              </button>

              <button
                onClick={onOpenPrayerModal}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-amber-700 hover:bg-amber-600 transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>Enviar Petición de Oración</span>
              </button>

              <a
                href={`https://wa.me/${phones[0].cleanNumber}?text=${encodeURIComponent('¡Hola Pastor Norman! Me contacto a través de la página web de la Iglesia.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Pastoral ({phones[0].number})</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom microbar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Iglesia Bautista Vida (IBV) • Tocumen, La Siesta, Panamá. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
