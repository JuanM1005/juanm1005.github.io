import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface NavlinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}
