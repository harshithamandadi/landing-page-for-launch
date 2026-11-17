import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export const WHATSAPP_CONNECT_URL =
  'https://api.whatsapp.com/send/?phone=918333023389&text=Hi%2C+would+like+to+know+more+about+your+company+and+works.';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.255.59 4.455 1.71 6.395L3.1 28.98l6.74-1.768a12.74 12.74 0 0 0 6.164 1.588h.005c7.058 0 12.8-5.74 12.8-12.8 0-3.418-1.33-6.632-3.748-9.05A12.72 12.72 0 0 0 16.004 3.2Zm0 23.43h-.004a10.6 10.6 0 0 1-5.402-1.48l-.388-.23-4.002 1.05 1.068-3.902-.252-.402A10.58 10.58 0 0 1 5.4 16c0-5.845 4.756-10.6 10.604-10.6 2.832 0 5.494 1.104 7.495 3.106A10.53 10.53 0 0 1 26.6 16c0 5.846-4.756 10.63-10.596 10.63Zm5.814-7.936c-.318-.16-1.884-.93-2.176-1.036-.292-.106-.504-.16-.716.16-.212.318-.822 1.036-1.008 1.248-.186.212-.372.239-.69.08-.318-.16-1.344-.495-2.56-1.58-.946-.844-1.585-1.886-1.77-2.204-.186-.318-.02-.49.14-.649.143-.143.318-.372.478-.558.159-.186.212-.318.318-.53.106-.212.053-.398-.027-.558-.08-.159-.716-1.726-.982-2.364-.258-.621-.521-.537-.716-.547l-.61-.011c-.212 0-.558.08-.85.398-.292.318-1.114 1.088-1.114 2.654s1.14 3.079 1.3 3.291c.159.212 2.244 3.428 5.437 4.806.76.328 1.353.524 1.815.671.763.242 1.457.208 2.006.126.612-.091 1.884-.77 2.15-1.514.265-.744.265-1.382.186-1.514-.08-.133-.292-.212-.61-.372Z" />
  </svg>
);

export const WhatsAppQR: React.FC = () => {
  return (
    <a
      href={WHATSAPP_CONNECT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect with BestVerse on WhatsApp"
      title="Scan or click to connect with BestVerse on WhatsApp"
      className="group relative inline-flex items-center justify-center rounded-lg bg-white p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-[#D4AF37]/45 transition-transform duration-200 hover:-translate-y-0.5 hover:ring-[#E5C158] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061329] shrink-0"
    >
      <QRCodeSVG
        value={WHATSAPP_CONNECT_URL}
        size={96}
        level="H"
        bgColor="#FFFFFF"
        fgColor="#061329"
        marginSize={1}
      />
      <span
        aria-hidden="true"
        className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md ring-2 ring-[#061329] transition-transform duration-200 group-hover:scale-105"
      >
        <WhatsAppIcon className="w-4 h-4" />
      </span>
    </a>
  );
};
