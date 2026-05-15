import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type {
  ButtonVariant as ButtonLinkVariant,
  ButtonSize as ButtonLinkSize,
} from '../Button/Button.types';

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  fullWidth?: boolean;
  external?: boolean; // Si es true, usa target="_blank" y rel="noopener noreferrer para seguridad"
}
