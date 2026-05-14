import type { IconType } from 'react-icons';
import { FaCode, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa6';

type AboutIconVariant = 'blue' | 'yellow' | 'green' | 'purple';

type AboutCardItem = {
  title: string;
  description: string;
  icon: IconType;
  iconClassName: AboutIconVariant;
};

export const aboutCards = [
  {
    title: 'Frontend con React',
    description:
      'Construcción de interfaces modernas con React, TypeScript, Tailwind CSS y componentes reutilizables.',
    icon: FaCode,
    iconClassName: 'blue',
  },
  {
    title: 'Bases de Datos',
    description:
      'Gestión y consulta de datos con MySQL, SQLite y PostgreSQL, integrando lógica de negocio en proyectos académicos.',
    icon: FaDatabase,
    iconClassName: 'yellow',
  },
  {
    title: 'Python & Datos',
    description:
      'Análisis de datos con Pandas, NumPy y visualización con Matplotlib, trabajando con datasets reales en proyectos escolares.',
    icon: FaPython,
    iconClassName: 'green',
  },
  {
    title: 'Git & GitHub',
    description:
      'Control de versiones, ramas, commits, pull requests y flujo de trabajo para organizar proyectos de desarrollo.',
    icon: FaGitAlt,
    iconClassName: 'purple',
  },
] as const satisfies readonly AboutCardItem[];
