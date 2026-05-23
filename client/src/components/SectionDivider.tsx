interface SectionDividerProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

export default function SectionDivider({ className = '', color = 'primary' }: SectionDividerProps) {
  const colorMap = {
    primary: 'stroke-primary/20',
    secondary: 'stroke-secondary/20',
    accent: 'stroke-accent/20',
  };

  return (
    <svg
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      className={`w-full h-24 ${colorMap[color]} ${className}`}
    >
      <path
        d="M0,50 Q300,20 600,50 T1200,50"
        fill="none"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0,60 Q300,40 600,60 T1200,60"
        fill="none"
        strokeWidth="1"
        opacity="0.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
