import { FaCode, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa6';
import type { AboutCardItem } from '../../sections/About/About.types';

export const aboutCards = [
  {
    title: 'Frontend con React',
    description:
      'Construcción de interfaces modernas con React, TypeScript, Tailwind CSS y componentes reutilizables.',
    icon: FaCode,
    variant: 'blue',
  },
  {
    title: 'Bases de Datos',
    description:
      'Gestión y consulta de datos con MySQL, SQLite y PostgreSQL, integrando lógica de negocio en proyectos académicos.',
    icon: FaDatabase,
    variant: 'yellow',
  },
  {
    title: 'Python & Datos',
    description:
      'Análisis de datos con Pandas, NumPy y visualización con Matplotlib, trabajando con datasets reales en proyectos escolares.',
    icon: FaPython,
    variant: 'green',
  },
  {
    title: 'Git & GitHub',
    description:
      'Control de versiones, ramas, commits, pull requests y flujo de trabajo para organizar proyectos de desarrollo.',
    icon: FaGitAlt,
    variant: 'purple',
  },
] as const satisfies readonly AboutCardItem[];
