import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <div
      className="group card-elevated p-6 md:p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both',
      }}
    >
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
        <div className="text-secondary text-xl">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="font-subheading text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {description}
      </p>

      {/* Hover Line */}
      <div className="mt-4 h-0.5 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
