import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'base' | 'primary' | 'secondary';

export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props del componente Button.
 *
 * Extiende de ButtonHTMLAttributes para heredar TODAS las props
 * nativas de <button> (onClick, disabled, type, aria-label, etc.)
 * sin tener que declararlas manualmente.
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Contenido del boton (imagenes, texto, iconos, etc.)
  variant?: ButtonVariant;
  size?: ButtonSize; //
  fullWidth?: boolean; // Si es true, el botón ocupará todo el ancho disponible
}
