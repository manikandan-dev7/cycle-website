import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { WA_GENERAL, PHONE_LINK, SHOP } from '../data/constants';

export default function FloatingButtons() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Call button */}
      <div className="relative flex items-center gap-2">
        {tooltip === 'call' && (
          <div className="bg-[#111111] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            {SHOP.phone}
          </div>
        )}
        <a
          href={PHONE_LINK}
          data-testid="floating-call-btn"
          aria-label="Call us"
          className="w-12 h-12 bg-[#111111] hover:bg-[#222] text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
          onMouseEnter={() => setTooltip('call')}
          onMouseLeave={() => setTooltip(null)}
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* WhatsApp button */}
      <div className="relative flex items-center gap-2">
        {tooltip === 'wa' && (
          <div className="bg-[#25d366] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us
          </div>
        )}
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="whatsapp-pulse w-14 h-14 bg-[#25d366] hover:bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
          onMouseEnter={() => setTooltip('wa')}
          onMouseLeave={() => setTooltip(null)}
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
