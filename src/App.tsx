/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink, RotateCcw } from 'lucide-react';
import { RotaryWheel } from './components/RotaryWheel';
import { WhatsAppQR } from './components/WhatsAppQR';

const WEBSITE_URL = 'https://rotarysaampradaya.com';
const WEBSITE_DISPLAY = 'rotarysaampradaya.com';
const BESTVERSE_LOGO_PATH =
  '/assets/aistudio/WhatsApp_Image_2026-07-16_at_11.42.18_AM_bbd67d78.jpeg';

export default function App() {
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = () => {
    setIsLaunched(true);
  };

  const handleReset = () => {
    setIsLaunched(false);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-slate-100"
      style={{
        background:
          'radial-gradient(circle at 50% 42%, #0D254D 0%, #071733 52%, #040E21 100%)',
      }}
    >
      {/* Subtle Top Gold Ceremonial Hairline */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
      />

      {/* Background Signature Element: Continuously Rotating Rotary Wheel */}
      <RotaryWheel isLaunched={isLaunched} />

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-6 pt-8 sm:pt-12 text-center"
      >
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4" aria-hidden="true">
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#E5C158]" />
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>

          <p className="font-display text-lg sm:text-2xl font-semibold tracking-[0.22em] sm:tracking-[0.28em] text-white uppercase">
            ROTARY SAAMPRADAYA
          </p>
          <p className="mt-2 text-xs sm:text-sm font-medium tracking-[0.12em] text-[#E5C158]/90">
            Connecting Communities. Creating Impact.
          </p>
        </div>
      </motion.header>

      {/* Main Launch Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 sm:py-16">
        <div className="w-full max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] text-balance">
              Something Wonderful Is Now Live!
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our digital home is ready. Explore the Rotary Saampradaya website and
              discover our journey, initiatives and community.
            </p>
          </motion.div>

          {/* Interactive CTA / Website URL Reveal Area */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 sm:mt-11 min-h-[144px] flex items-center justify-center relative"
          >
            <AnimatePresence mode="wait">
              {!isLaunched ? (
                <motion.div
                  key="launch-cta"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={handleLaunch}
                    className="group relative inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-b from-[#F2D572] via-[#D4AF37] to-[#B68B1D] px-8 sm:px-10 py-4 text-sm sm:text-base font-bold tracking-[0.15em] text-[#061329] border border-[#FCE8A6]/60 shadow-[0_0_32px_rgba(212,175,55,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(229,193,88,0.52)] hover:brightness-105 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5DC86] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071733] cursor-pointer whitespace-nowrap"
                  >
                    <span>LAUNCH WEBSITE</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="website-revealed"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-lg mx-auto"
                >
                  {/* Subtle golden ripple burst on reveal */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-lg border border-[#E5C158]/60 animate-launch-ripple"
                  />

                  <div className="relative rounded-lg border border-[#D4AF37]/55 bg-[#081A38]/85 backdrop-blur-md px-6 py-6 sm:px-9 sm:py-7 shadow-[0_0_55px_rgba(212,175,55,0.24)]">
                    <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase text-[#E5C158]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Official Website Launched</span>
                    </div>

                    <div className="mt-3">
                      <a
                        href={WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2.5 font-display text-xl sm:text-3xl font-semibold tracking-wide text-[#F6DF8D] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] rounded px-2 py-1"
                      >
                        <span className="underline decoration-[#D4AF37]/45 underline-offset-8 group-hover:decoration-[#F6DF8D] transition-colors">
                          {WEBSITE_DISPLAY}
                        </span>
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F6DF8D] shrink-0" />
                      </a>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-[#F2D572] via-[#D4AF37] to-[#B68B1D] px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-[0.1em] text-[#061329] shadow-[0_0_24px_rgba(212,175,55,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(229,193,88,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5DC86] whitespace-nowrap"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-[#E5C158] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] rounded"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Replay</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Bottom Footer Section: Made By BestVerse & WhatsApp QR */}
      <motion.footer
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-6 pb-8 sm:pb-10"
      >
        {/* Subtle Gold Divider */}
        <div
          aria-hidden="true"
          className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-7 sm:mb-8"
        />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Made By BestVerse Block */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden ring-1 ring-[#D4AF37]/45 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.35)] shrink-0 flex items-center justify-center">
              <img
                src={BESTVERSE_LOGO_PATH}
                alt="BestVerse Digital Marketing and IT Solutions Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-[1.06]"
              />
            </div>

            <div>
              <p className="text-xs text-slate-400 tracking-wide">
                Crafted with creativity by
              </p>
              <p className="mt-0.5 text-base sm:text-lg font-semibold text-white tracking-tight">
                Made by BestVerse
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-[#E5C158]/85">
                Digital Marketing &amp; IT Solutions
              </p>
            </div>
          </div>

          {/* WhatsApp QR Code Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-right">
            <div className="max-w-[230px]">
              <p className="text-sm sm:text-[15px] font-semibold text-white leading-snug">
                Let&apos;s Create Something Amazing Together!
              </p>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Scan to connect with BestVerse on WhatsApp.
              </p>
            </div>

            <WhatsAppQR />
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
