import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'forest' | 'outline-gold' | 'outline-forest' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded-[3px] transition-all duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-gold/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    gold: 'bg-gold hover:bg-gold-hover text-white shadow-sm hover:shadow active:translate-y-px',
    forest: 'bg-forest hover:bg-forest-light text-white shadow-sm active:translate-y-px',
    'outline-gold': 'border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-200',
    'outline-forest': 'border border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-200',
    'outline-white': 'border border-white/70 text-white hover:bg-white hover:text-forest transition-colors duration-200',
    ghost: 'text-forest hover:text-gold hover:bg-gold-pale/50',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};

