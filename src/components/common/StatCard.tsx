import React from 'react';
import { Building, Users, LandPlot, FileCheck2, LucideIcon } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  Building,
  Users,
  LandPlot,
  FileCheck2,
};

export const StatCard: React.FC<StatItemProps> = ({ value, label, iconName }) => {
  const IconComponent = iconMap[iconName] || Building;

  return (
    <div className="flex items-center gap-3.5 sm:gap-4 px-4 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r last:border-r-0 border-border-light/80 hover:bg-gold-pale/30 transition-colors">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold-pale flex items-center justify-center shrink-0 border border-gold/30 text-gold shadow-xs">
        <IconComponent className="w-5 h-5 stroke-[1.8]" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-forest tracking-tight leading-none">
          {value}
        </span>
        <span className="text-xs sm:text-sm font-medium text-text-muted mt-1 leading-snug">
          {label}
        </span>
      </div>
    </div>
  );
};

