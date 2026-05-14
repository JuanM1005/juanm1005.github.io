import type { BadgeSize, BadgeVariant } from './Badge.types';

export const badgeBase =
  'inline-flex w-fit items-center rounded-full border font-medium backdrop-blur-md';

export const badgeVariants: Record<BadgeVariant, string> = {
  success: 'border-slate-500/80 bg-slate-900 text-slate-100',
  info: 'border-cyan-400/30 bg-slate-900 text-slate-100',
  warning: 'border-amber-400/30 bg-slate-900 text-amber-200',
  neutral: 'border-slate-400/80 bg-slate-800 text-slate-300',
};

export const badgeSizes: Record<BadgeSize, string> = {
  sm: 'gap-2 px-4 py-2 text-xs',
  md: 'gap-3 px-6 py-3 text-sm',
};

export const badgeDotWrapper =
  'relative inline-flex justify-center items-center';

export const badgeDotPing =
  'absolute inline-flex rounded-full opacity-50 animate-ping';

export const badgeDotBase = 'relative inline-flex rounded-full';

export const badgeDotSizes: Record<BadgeSize, string> = {
  sm: 'size-2',
  md: 'size-2.5',
};

export const badgeDotVariants: Record<BadgeVariant, string> = {
  success: 'bg-emerald-400',
  info: 'bg-cyan-400',
  warning: 'bg-amber-400',
  neutral: 'bg-slate-400',
};
