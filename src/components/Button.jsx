function Button({ children, variant = 'primary', size = 'md', onClick, disabled, className = '' }) {

    const base = 'inline-flex items-center justify-center font-body font-medium rounded-lg cursor-pointer transition-colors duration-200';
  
    const variants = {
        primary: 'bg-primary text-white hover:bg-hover hover:text-primary',
        login: 'bg-primary text-white border border-primary hover:bg-hover hover:text-primary',
        white: 'bg-white text-primary border border-primary hover:bg-hover',
    };
  
    const sizes = {
        md: 'text-button px-6 py-3 gap-2.5',
        lg: 'text-button px-8 py-4',
        xl: 'text-button px-10 py-5',
    };
  
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;