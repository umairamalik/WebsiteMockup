import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-md transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-spruce text-white hover:bg-[#165646] hover:shadow-lg",
    secondary: "bg-banana text-charcoal hover:bg-[#d4cb35] hover:shadow-lg",
    outline: "border-2 border-spruce text-spruce hover:bg-spruce hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};