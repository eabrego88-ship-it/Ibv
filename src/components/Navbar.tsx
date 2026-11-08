import React, { useState } from 'react';
import { Church, Phone, MessageCircle, Menu, X, HeartHandshake, MapPin, FileText, Calendar, Users, Bus } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenPrayerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure, onOpenPrayerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cultos', href: '#cultos', icon: Calendar },
    { label: 'Pastor', href: '#pastor', icon: Users },
    { label: 'Ministerios', href: '#ministerios', icon: HeartHandshake },
    { label: 'Rutas de Bus', href: '#rutas', icon: Bus },
    { label: 'Salvación', href: '#salvacion' },
    { label: 'Ubicación', href: '#ubicacion', icon: MapPin },
  ];

  const primaryPhone = CHURCH_INFO.phones[0];
  const whatsappUrl = `https://wa.me/${primaryPhone.cleanNumber}?text=${encodeURIComponent(
    '¡Hola Pastor Norman! Me comunico desde el sitio web de la Iglesia Bautista Vida en La Siesta. Deseo más información.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
      {/* Top micro-bar with church location and pastor contact */}
      <div className="bg-[#1E293B] text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium text-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Tocumen, La Siesta • Calle Pocrí Casa #35
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:inline text-stone-300">
              Pastor Norman Ortiz & Isabel Piedra
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto sm:ml-0">
            <a
              href={`tel:${primaryPhone.number}`}
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{primaryPhone.number}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Pastoral</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Church Logo & Name */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Church className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-stone-900 font-serif">
                IGLESIA BAUTISTA VIDA
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 rounded-md border border-amber-300/60">
                IBV
              </span>
            </div>
            <p className="text-xs text-stone-600 font-medium">
              Una iglesia para toda la familia • La Siesta
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-stone-700 hover:text-amber-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenBrochure}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300 transition-colors cursor-pointer"
            title="Ver Folleto Oficial de la Iglesia"
          >
            <FileText className="w-3.5 h-3.5 text-stone-600" />
            <span>Folleto Oficial</span>
          </button>

          <button
            onClick={onOpenPrayerModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Petición de Oración</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-stone-800 hover:bg-amber-50 rounded-lg hover:text-amber-800 transition-colors"
              >
                {link.icon && <link.icon className="w-4 h-4 text-amber-600" />}
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300"
            >
              <FileText className="w-4 h-4 text-stone-600" />
              Ver Folleto Oficial IBV
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrayerModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm"
            >
              <HeartHandshake className="w-4 h-4" />
              Enviar Petición de Oración
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
