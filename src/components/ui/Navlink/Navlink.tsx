import type { NavlinkProps } from './Navlink.types';
import { navLinkBase } from './Navlink.styles';
import clsx from 'clsx';

const Navlink = ({ children, href, className, ...rest }: NavlinkProps) => {
  return (
    <a className={clsx(navLinkBase, className)} href={href} {...rest}>
      {children}
    </a>
  );
};

export default Navlink;
