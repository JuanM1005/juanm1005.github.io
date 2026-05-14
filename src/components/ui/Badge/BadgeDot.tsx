import clsx from 'clsx';
import type { BadgeProps } from './Badge.types';
import {
  badgeDotBase,
  badgeDotPing,
  badgeDotSizes,
  badgeDotVariants,
  badgeDotWrapper,
} from './Badge.styles';

type BadgeDotProps = Required<Pick<BadgeProps, 'variant' | 'size'>>;

const BadgeDot = ({ variant, size }: BadgeDotProps) => {
  return (
    <span className={clsx(badgeDotWrapper, badgeDotSizes[size])}>
      <span
        className={clsx(
          badgeDotPing,
          badgeDotSizes[size],
          badgeDotVariants[variant],
        )}
        aria-hidden="true"
      />

      <span
        className={clsx(
          badgeDotBase,
          badgeDotSizes[size],
          badgeDotVariants[variant],
        )}
        aria-hidden="true"
      />
    </span>
  );
};

export default BadgeDot;
