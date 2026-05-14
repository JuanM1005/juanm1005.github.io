import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'success' | 'info' | 'warning' | 'neutral';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  withDot?: boolean;
}
