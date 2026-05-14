import type { CardProps } from './Card.types';
import {
  cardBase,
  cardClickable,
  cardPaddings,
  cardVariants,
} from './Card.styles';
import { clsx } from 'clsx';

const Card = ({
  children,
  variant = 'glass',
  padding = 'md',
  isClickable = false,
  className,
  ...rest
}: CardProps) => {
  return (
    <div
      className={clsx(
        cardBase,
        cardVariants[variant],
        cardPaddings[padding],
        isClickable && cardClickable,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
