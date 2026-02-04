import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  external = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden';

  const variantStyles = {
    primary: 'btn-primary focus:ring-cta-green',
    secondary: 'btn-outline-green focus:ring-primary-green',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-green focus:ring-white',
    ghost: 'bg-transparent text-charcoal hover:bg-charcoal/10 focus:ring-charcoal',
    amber: 'btn-secondary focus:ring-amber',
  };

  const sizeStyles = {
    sm: 'px-4 py-2.5 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 group-hover:translate-x-1 transition-transform">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={`group ${combinedClassName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClassName}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
