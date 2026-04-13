import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY } from '../data/constants';
import useReveal from '../hooks/useReveal';

function GalleryImage({ item, onClick, delay }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref}
      className={`reveal reveal-d${delay} ${visible ? 'visible' : ''} break-inside-avoid mb-4 group relative overflow-hidden cursor-pointer`}
      onClick={() => onClick(item.src)}
      data-testid={`gallery-img-${delay}`}
      style={{
        borderRadius: 12,
        boxShadow: '0 4px 20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <img src={item.src} alt={item.alt} loading="lazy"
        className="object-cover w-full img-zoom"
        style={{ height: item.tall ? '320px' : '220px', borderRadius: 12 }}
      />
      <div className="absolute inset-0 flex items-center justify-center transition-colors rounded-xl bg-black/0 group-hover:bg-black/50">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity embossed-card rounded-xl p-2.5">
          <ZoomIn className="w-6 h-6 text-[#f97316]" />
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const [titleRef, titleVisible] = useReveal(0.2);

  return (
    <section id="gallery" className="relative py-20 carbon-bg sm:py-28">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Inside Just Ride</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight chrome-text sm:text-5xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            See Our Showroom
          </h2>
          <p className="text-[#555] text-base mt-3">Real photos, real showroom — come see for yourself</p>
        </div>

        {/* <div className="gap-4 columns-2 md:columns-3">
          {GALLERY.map((item, i) => (
            <GalleryImage key={i} item={item} onClick={setLightbox} delay={(i % 4) + 1} />
          ))}
        </div> */}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div data-testid="lightbox-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.97)' }}
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-5 right-5 embossed-card p-2 rounded-xl text-[#888] hover:text-white transition-colors"
            onClick={() => setLightbox(null)} data-testid="lightbox-close">
            <X className="w-7 h-7" />
          </button>
          <img src={lightbox} alt="Gallery full view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            style={{ boxShadow: '0 0 60px rgba(249,115,22,0.15)' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
