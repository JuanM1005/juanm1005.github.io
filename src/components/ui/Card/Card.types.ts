import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'glass' | 'solid' | 'glow';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  isClickable?: boolean;
}
