import clsx from 'clsx';
import type { BadgeProps } from './Badge.types';
import { badgeBase, badgeSizes, badgeVariants } from './Badge.styles';
import BadgeDot from './BadgeDot';

const Badge = ({
  children,
  variant = 'neutral',
  size = 'md',
  withDot = false,
  className,
  ...rest
}: BadgeProps) => {
  return (
    <div
      className={clsx(
        badgeBase,
        badgeVariants[variant],
        badgeSizes[size],
        className,
      )}
      {...rest}
    >
      {withDot && <BadgeDot variant={variant} size={size} />}
      {children}
    </div>
  );
};

export default Badge;
