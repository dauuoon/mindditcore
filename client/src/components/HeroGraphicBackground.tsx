export default function HeroGraphicBackground() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 450 450"
      preserveAspectRatio="xMinYMin meet"
      className="absolute inset-0 -z-20 h-full w-full pointer-events-none select-none hero-graphic-svg"
    >
      <rect y="337.5" width="112.5" height="112.5" fill="url(#hero_paint0)" className="hero-cell hero-cell-a" />
      <rect x="337.5" y="225" width="112.5" height="112.5" fill="url(#hero_paint1)" className="hero-cell hero-cell-b" />
      <rect y="112.5" width="112.5" height="112.5" fill="url(#hero_paint2)" className="hero-cell hero-cell-c" />
      <rect width="112.5" height="112.5" fill="white" className="hero-cell hero-cell-soft" />
      <rect x="112.5" y="225" width="225" height="225" fill="url(#hero_paint3)" className="hero-cell hero-cell-d" />
      <rect
        x="337.867"
        y="112.501"
        width="112.136"
        height="112.864"
        transform="rotate(90 337.867 112.501)"
        fill="url(#hero_paint4)"
        className="hero-cell hero-cell-e"
      />
      <rect x="112.5" width="112.5" height="112.5" fill="url(#hero_paint5)" className="hero-cell hero-cell-f" />

      <defs>
        <linearGradient id="hero_paint0" x1="56.2501" y1="337.5" x2="56.2501" y2="450" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BCDFF3" />
          <stop offset="1" stopColor="#BCDFF3" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero_paint1" x1="393.75" y1="225" x2="393.75" y2="337.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4D5E0" />
          <stop offset="1" stopColor="#F4D5E0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero_paint2" x1="56.2501" y1="112.5" x2="56.2501" y2="225" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C8D5BA" />
          <stop offset="1" stopColor="#C8D5BA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero_paint3" x1="225" y1="225" x2="225" y2="450" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DEEFFB" />
          <stop offset="1" stopColor="#DEEFFB" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero_paint4" x1="337.867" y1="168.933" x2="450.003" y2="168.933" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0EEB5" />
          <stop offset="1" stopColor="#F0EEB5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero_paint5" x1="168.75" y1="0" x2="168.75" y2="112.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C1DBD9" />
          <stop offset="1" stopColor="#C1DBD9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
