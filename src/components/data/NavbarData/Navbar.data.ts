type SectionsId = 'about' | 'skills' | 'projects' | 'contact';

type NavlinkItem = {
  label: string;
  href: `#${SectionsId}`;
};

// `as const` los vuelve de solo lectura.
// `satisfies` valida que cumplan con NavlinkItem[] sin perder sus valores exactos.

export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
] as const satisfies readonly NavlinkItem[];
