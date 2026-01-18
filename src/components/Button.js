import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center px-8 py-4 font-bold rounded-full transition-all duration-300 text-lg relative overflow-hidden group';

  const variants = {
    primary:
      'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105',
    secondary:
      'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:scale-105',
    outline:
      'border-2 border-gray-700 text-white hover:border-yellow-500 hover:text-yellow-500 hover:scale-105',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  // Shine effect overlay
  const shineEffect = (
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {shineEffect}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {shineEffect}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
