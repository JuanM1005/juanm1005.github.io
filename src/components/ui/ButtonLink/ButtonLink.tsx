import type { ButtonLinkProps } from './ButtonLink.types';
import {
  buttonBase,
  buttonVariants,
  buttonSizes,
} from '../Button/Button.styles';
import clsx from 'clsx';

const ButtonLink = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  external = false,
  className,
  ...rest
}: ButtonLinkProps) => {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={clsx(
        buttonBase,
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && 'w-full',
        'no-underline',
        className,
      )}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
