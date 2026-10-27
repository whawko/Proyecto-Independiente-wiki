import React from 'react';
import { Link } from 'react-router-dom';

interface BotonProps {
  text: string;
  onClick?: () => void;
  to?: string;
  variant?: string;
  className?: string;
}

export default function Boton({ 
  text, 
  onClick, 
  to, 
  variant = 'primary',
  className = '' 
}: BotonProps) {
  const btnStyle = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={btnStyle}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={btnStyle}>
      {text}
    </button>
  );
}