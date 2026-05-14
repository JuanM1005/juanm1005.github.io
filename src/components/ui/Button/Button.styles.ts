export const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg border font-medium leading-tight cursor-pointer transition-all duration-300 ease-out active:scale-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-none shadow-lg';

export const buttonVariants = {
  base: 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800',
  primary:
    'border-blue-500 bg-blue-500 shadow-blue-500/20 text-white hover:text-slate-900 hover:border-blue-600 hover:bg-cyan-500 focus-visible:border-cyan-500 focus-visible:bg-cyan-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800',
  secondary:
    'border-slate-400 bg-transparent text-slate-100 hover:border-blue-400 hover:bg-blue-950/70 focus-visible:border-blue-400 focus-visible:bg-blue-950/70 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800',
};

export const buttonSizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};
