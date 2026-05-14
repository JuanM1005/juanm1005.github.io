import { FaCode } from 'react-icons/fa6';

import { Navlink } from '@/components/ui';
import { navLinks } from '@/components/data';

import {
  navbarAccent,
  navbarBase,
  navbarBrand,
  navbarContainer,
  navbarList,
  navbarLogo,
  navbarLogoIcon,
  navbarNav,
} from './Navbar.styles';

const Navbar = () => {
  return (
    <header className={navbarBase}>
      <div className={navbarContainer}>
        <div className={navbarLogo}>
          <a href="#hero" className={navbarLogoIcon} aria-label="Ir al inicio">
            <FaCode />
          </a>

          <a href="#hero" className={navbarBrand}>
            Portfolio<span className={navbarAccent}>.</span>Juan
          </a>
        </div>

        <nav className={navbarNav} aria-label="Navegación principal">
          <ul className={navbarList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Navlink href={link.href}>{link.label}</Navlink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
