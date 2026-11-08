import React, { useState } from 'react';
import { X, HeartHandshake, Send, CheckCircle2, MessageCircle, Lock, Shield } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchData';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Salud y Sanidad');
  const [request, setRequest] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Salud y Sanidad',
    'Familia y Matrimonio',
    'Hijos y Juventud',
    'Trabajo y Finanzas',
    'Salvación de un Familiar',
    'Paz y Fortaleza Espiritual',
    'Acción de Gracias',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `🙏 *PETICIÓN DE ORACIÓN - IBV LA SIESTA*
👤 De: ${name || 'Hermano/a en fe'}
📱 Teléfono: ${phone || 'No especificado'}
🏷️ Motivo: ${category}
🔒 Confidencialidad: ${isPrivate ? 'Confidencial para el Pastor Norman' : 'Para el equipo de intercesión'}

📝 Petición:
${request}

"Clama a mí, y yo te responderé..." (Jeremías 33:3)`;

    const whatsappUrl = `https://wa.me/${CHURCH_INFO.phones[0].cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden border border-stone-200 shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 text-amber-200 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif">
                Petición de Oración
              </h3>
              <p className="text-xs text-amber-200">
                Estamos orando por ti y tu familia en La Siesta
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-serif text-stone-900">
                ¡Tu Petición Ha Sido Recibida!
              </h4>
              <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                Hemos enviado tu motivo al Pastor Norman Ortiz y al equipo de intercesión. Creemos firmemente 
                que Dios escucha y responderá conforme a Su buena voluntad.
              </p>
              
              <div className="p-3.5 rounded-xl bg-amber-50 text-amber-900 text-xs italic font-serif">
                “Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego.” — Filipenses 4:6
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200/70 flex items-start gap-2">
                <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  El Pastor Norman Ortiz y el equipo pastoral leen cada petición y la presentan en oración delante de Dios.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Teléfono / WhatsApp (Opcional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+507 6000-0000"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Motivo Principal
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Describe tu necesidad o motivo de agradecimiento *
                </label>
                <textarea
                  required
                  rows={4}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  placeholder="Escribe aquí con libertad lo que hay en tu corazón..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                />
              </div>

              {/* Confidentiality toggle */}
              <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer p-2 rounded-lg hover:bg-stone-50">
                <input
                  type="checkbox"
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 text-stone-500" />
                  Mantener en estricta confidencialidad con el Pastor Norman
                </span>
              </label>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-md shadow-amber-700/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Petición al Pastor Norman</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
