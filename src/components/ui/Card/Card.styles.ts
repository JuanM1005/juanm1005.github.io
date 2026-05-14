import type { CardPadding, CardVariant } from './Card.types';

export const cardBase =
  'rounded-2xl border transition-all duration-300 ease-out';

export const cardVariants: Record<CardVariant, string> = {
  glass:
    'border-slate-700/60 bg-white/5 shadow-xl shadow-slate-950/30 backdrop-blur-md',
  solid: 'border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/30',
  glow: 'border-cyan-400/30 bg-slate-900/80 shadow-xl shadow-cyan-500/10 backdrop-blur-md',
};

export const cardPaddings: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const cardClickable =
  'cursor-pointer hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10 active:translate-y-0';
