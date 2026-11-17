import React from 'react';

interface RotaryWheelProps {
  isLaunched?: boolean;
}

function buildGearOuterPath(
  cx: number,
  cy: number,
  teeth: number,
  rootRadius: number,
  tipRadius: number,
  rootHalfDeg: number,
  tipHalfDeg: number
): string {
  const step = 360 / teeth;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const points: string[] = [];

  for (let i = 0; i < teeth; i++) {
    const centerAngle = i * step;
    const a1 = toRad(centerAngle - rootHalfDeg);
    const a2 = toRad(centerAngle - tipHalfDeg);
    const a3 = toRad(centerAngle + tipHalfDeg);
    const a4 = toRad(centerAngle + rootHalfDeg);

    const x1 = cx + rootRadius * Math.cos(a1);
    const y1 = cy + rootRadius * Math.sin(a1);
    const x2 = cx + tipRadius * Math.cos(a2);
    const y2 = cy + tipRadius * Math.sin(a2);
    const x3 = cx + tipRadius * Math.cos(a3);
    const y3 = cy + tipRadius * Math.sin(a3);
    const x4 = cx + rootRadius * Math.cos(a4);
    const y4 = cy + rootRadius * Math.sin(a4);

    if (i === 0) {
      points.push(`M ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    } else {
      points.push(`A ${rootRadius} ${rootRadius} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    }
    points.push(`L ${x2.toFixed(2)} ${y2.toFixed(2)}`);
    points.push(`A ${tipRadius} ${tipRadius} 0 0 1 ${x3.toFixed(2)} ${y3.toFixed(2)}`);
    points.push(`L ${x4.toFixed(2)} ${y4.toFixed(2)}`);
  }

  const firstAngle = toRad(-rootHalfDeg);
  const fx = cx + rootRadius * Math.cos(firstAngle);
  const fy = cy + rootRadius * Math.sin(firstAngle);
  points.push(`A ${rootRadius} ${rootRadius} 0 0 1 ${fx.toFixed(2)} ${fy.toFixed(2)}`);
  points.push('Z');

  return points.join(' ');
}

const GEAR_OUTER_PATH = buildGearOuterPath(200, 200, 24, 168, 194, 4.35, 2.75);
const SPOKE_ANGLES = [0, 60, 120, 180, 240, 300];

export const RotaryWheel: React.FC<RotaryWheelProps> = ({ isLaunched = false }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none fixed inset-0 flex items-center justify-center overflow-hidden z-0"
    >
      {/* Subtle radial backlight behind wheel */}
      <div
        className={`absolute rounded-full transition-all duration-1000 ${
          isLaunched
            ? 'w-[540px] h-[540px] sm:w-[760px] sm:h-[760px] bg-[#D4AF37]/[0.09] blur-3xl'
            : 'w-[460px] h-[460px] sm:w-[680px] sm:h-[680px] bg-[#D4AF37]/[0.045] blur-3xl'
        }`}
      />

      {/* Rotating 24-tooth, 6-spoke Rotary International Wheel Watermark */}
      <div
        className={`w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] lg:w-[820px] lg:h-[820px] transition-opacity duration-1000 ${
          isLaunched ? 'opacity-[0.13]' : 'opacity-[0.085]'
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full animate-rotary-wheel"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rotaryGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DC86" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B88E1E" />
            </linearGradient>

            <mask id="rotaryWheelCutouts">
              <rect x="0" y="0" width="400" height="400" fill="white" />
              {/* Hollow inner area between hub and rim */}
              <circle cx="200" cy="200" r="130" fill="black" />
              {/* Solidify spokes & hub back in */}
              {SPOKE_ANGLES.map((angle) => (
                <g key={angle} transform={`rotate(${angle} 200 200)`}>
                  <polygon points="187,154 213,154 210,66 190,66" fill="white" />
                </g>
              ))}
              <circle cx="200" cy="200" r="54" fill="white" />
              {/* Center shaft bore */}
              <circle cx="200" cy="200" r="21" fill="black" />
              {/* Iconic Rotary wheel keyway notch at top of bore */}
              <rect x="194.5" y="168" width="11" height="16" rx="1" fill="black" />
            </mask>
          </defs>

          <g mask="url(#rotaryWheelCutouts)">
            <path d={GEAR_OUTER_PATH} fill="url(#rotaryGold)" />
          </g>

          {/* Subtle engraved concentric rim lines for authentic Mark of Excellence detail */}
          <circle
            cx="200"
            cy="200"
            r="156"
            stroke="#061329"
            strokeWidth="2.5"
            strokeOpacity="0.45"
          />
          <circle
            cx="200"
            cy="200"
            r="142"
            stroke="#061329"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <circle
            cx="200"
            cy="200"
            r="43"
            stroke="#061329"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
        </svg>
      </div>
    </div>
  );
};
