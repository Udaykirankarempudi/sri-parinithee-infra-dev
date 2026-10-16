import React from 'react';
import { ProjectStatus } from '../../types';

export type FilterOption = 'All' | ProjectStatus;

interface ProjectFiltersProps {
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  counts: Record<FilterOption, number>;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  currentFilter,
  onFilterChange,
  counts,
}) => {
  const options: FilterOption[] = ['All', 'Ongoing', 'Upcoming', 'Pre-Launch'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
      {options.map((option) => {
        const isActive = currentFilter === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onFilterChange(option)}
            className={`px-4 py-2 rounded-[3px] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-forest text-white shadow-xs'
                : 'bg-white text-forest border border-border-light hover:border-gold hover:text-gold'
            }`}
          >
            <span>{option}</span>
            <span
              className={`ml-2 text-xs px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-gold text-white font-semibold' : 'bg-offwhite text-text-muted'
              }`}
            >
              {counts[option]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

