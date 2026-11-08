/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, FileText, HeartHandshake } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WelcomeBanner } from './components/WelcomeBanner';
import { ServicesSchedule } from './components/ServicesSchedule';
import { PastoralFamily } from './components/PastoralFamily';
import { MinistriesSection } from './components/MinistriesSection';
import { RutasTransportSection } from './components/RutasTransportSection';
import { PlanOfSalvation } from './components/PlanOfSalvation';
import { DailyVerse } from './components/DailyVerse';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { CHURCH_INFO } from './data/churchData';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);

  const primaryPhone = CHURCH_INFO.phones[0];
  const floatingWhatsappUrl = `https://wa.me/${primaryPhone.cleanNumber}?text=${encodeURIComponent(
    '¡Hola Pastor Norman! Me contacto desde el sitio web de la Iglesia Bautista Vida en La Siesta.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* Navigation */}
      <Navbar
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
        />

        {/* Welcome for first-time visitors */}
        <WelcomeBanner />

        {/* Weekly Services & Schedule */}
        <ServicesSchedule
          onSelectRouteTab={() => {
            const el = document.getElementById('rutas');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Pastoral Family Tribute & Calling */}
        <PastoralFamily
          onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
        />

        {/* Ministries Section (VidaKids, Caritas Felices, Comedor, Jóvenes, etc.) */}
        <MinistriesSection
          onSelectRoute={() => {
            const el = document.getElementById('rutas');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* The 3 Bus Routes Feature & Request Form */}
        <RutasTransportSection />

        {/* Biblical Plan of Salvation ("El que encuentra a Jesús encuentra la Vida") */}
        <PlanOfSalvation />

        {/* Daily Bible Verse Encouragement Widget */}
        <DailyVerse />

        {/* Location, Church Building & Directions */}
        <LocationSection />

        {/* First-time Visitors FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <PrayerRequestModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />

      {/* Floating Action Button: WhatsApp Pastoral Direct */}
      <aside aria-label="Contacto directo" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
        <span className="hidden sm:inline-block px-3 py-1 text-xs font-bold bg-stone-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Dudas o necesitas transporte? ¡Escríbenos!
        </span>
        <a
          href={floatingWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Contactar al Pastor por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </aside>
    </div>
  );
}
