import type { IconType } from 'react-icons';
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from 'react-icons/fa6';

export type SkillVariant =
  | 'blue'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'orange'
  | 'cyan';

export type SkillItem = {
  name: string;
  description: string;
  icon: IconType;
  variant: SkillVariant;
};
export const skillsCards = [
  {
    name: 'HTML',
    description:
      'Estructura semántica para construir páginas claras, accesibles y bien organizadas.',
    icon: FaHtml5,
    variant: 'orange',
  },
  {
    name: 'CSS & Tailwind',
    description:
      'Estilos responsivos, diseño visual moderno y creación de interfaces usando utilidades.',
    icon: FaCss3Alt,
    variant: 'blue',
  },
  {
    name: 'JavaScript',
    description:
      'Manipulación de lógica, eventos, arreglos, funciones y comportamiento dinámico en la interfaz.',
    icon: FaJs,
    variant: 'yellow',
  },
  {
    name: 'React',
    description:
      'Componentes reutilizables, props, renderizado condicional, listas y estructura modular.',
    icon: FaReact,
    variant: 'cyan',
  },
  {
    name: 'Python',
    description:
      'Uso de Python para lógica, análisis de datos y trabajo con librerías como Pandas y NumPy.',
    icon: FaPython,
    variant: 'green',
  },
  {
    name: 'Git & GitHub',
    description:
      'Control de versiones, ramas, commits, flujo de trabajo y respaldo de proyectos.',
    icon: FaGitAlt,
    variant: 'purple',
  },
] as const satisfies readonly SkillItem[];
