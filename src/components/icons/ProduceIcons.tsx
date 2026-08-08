type IconProps = { className?: string };

/** Layered cross-section, echoing the concentric rings of a dehydrated onion slice. */
export function OnionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M50 14c16 0 27 15 27 34s-11 34-27 34-27-15-27-34S34 14 50 14Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M50 24c11 0 19 11 19 24s-8 24-19 24-19-11-19-24 8-24 19-24Z" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M50 34c6.5 0 11 7 11 14s-4.5 14-11 14-11-7-11-14 4.5-14 11-14Z" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M50 14V6M44 8l3 6M56 8l-3 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 82c-2 5-2 9 0 12M50 82v13M60 82c2 5 2 9 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Bulb split into cloves, radiating from a shared base. */
export function GarlicIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M50 90c-16 0-26-12-26-28 0-19 11-30 15-40 2-5 2-9 0-13M50 90c16 0 26-12 26-28 0-19-11-30-15-40-2-5-2-9 0-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 9v81" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <path d="M35 20c-3 12-9 22-9 42M65 20c3 12 9 22 9 42" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <path d="M50 90c-9 0-15-6-16-16M50 90c9 0 15-6 16-16" stroke="currentColor" strokeWidth="2" opacity="0.55" />
    </svg>
  );
}

/** Rhizome silhouette with growth rings, standing in for turmeric / ginger. */
export function RootIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 52c-4-10 2-20 12-21 3-8 12-13 20-9 8-6 19-2 21 8 10 1 16 11 12 20 6 8 2 20-8 23-3 8-13 12-20 8-8 5-18 1-21-8-10-1-16-11-12-20-4-3-6-7-4-1Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M34 40c8 6 12 15 10 26M52 33c2 10 8 17 17 20M60 55c6 3 9 8 9 14" stroke="currentColor" strokeWidth="1.8" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

/** Scattered seed pods — cumin / peppercorn — plus one whole pod for scale. */
export function SpiceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M35 30c14-6 26 2 28 15 2 11-6 19-16 19-9 0-15-8-13-17 1-7 6-12 1-17Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <circle cx="30" cy="66" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="46" cy="76" r="4" stroke="currentColor" strokeWidth="2" opacity="0.75" />
      <circle cx="62" cy="64" r="5.5" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <circle cx="70" cy="80" r="3.5" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="20" cy="82" r="3" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

/** Single vein-leaf, matching the logo's leaf mark — used for the vegetables line. */
export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M50 12c22 4 36 20 36 42 0 20-16 34-36 34S14 74 14 54c0-22 14-38 36-42Z" stroke="currentColor" strokeWidth="2.3" />
      <path d="M50 18v66" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M50 34 32 26M50 48 26 42M50 62 30 60M50 34l18-8M50 48l24-6M50 62l20-2" stroke="currentColor" strokeWidth="1.6" opacity="0.55" strokeLinecap="round" />
    </svg>
  );
}
