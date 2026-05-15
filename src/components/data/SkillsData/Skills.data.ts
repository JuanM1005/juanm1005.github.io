import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaPython,
  FaReact,
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaArrowsRotate,
  FaArrowTrendUp,
  FaChessKing,
} from 'react-icons/fa6';

import { SiTypescript } from 'react-icons/si';

import type { SkillItem } from '../../sections/Skills/Skills.types';

export const hardSkillsCards = [
  {
    name: 'HTML',
    description:
      'Estructura semántica para construir páginas claras, accesibles y bien organizadas.',
    icon: FaHtml5,
    variant: 'orange',
  },
  {
    name: 'Tailwind & CSS',
    description:
      'Estilos responsivos, diseño visual moderno y creación de interfaces usando utilidades.',
    icon: FaCss3Alt,
    variant: 'purple',
  },
  {
    name: 'TypeScript (JS)',
    description:
      'Manipulación de lógica, eventos, arreglos, funciones y comportamiento dinámico en la interfaz.',
    icon: SiTypescript,
    variant: 'blue',
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
    variant: 'yellow',
  },
] as const satisfies readonly SkillItem[];

export const softSkillsCards = [
  { name: 'Disciplina y compromiso', icon: FaBullseye, variant: 'blue' },
  { name: 'Aprendizaje continuo', icon: FaLightbulb, variant: 'yellow' },
  { name: 'Trabajo en equipo', icon: FaUsers, variant: 'cyan' },
  { name: 'Adaptabilidad', icon: FaArrowsRotate, variant: 'green' },
  { name: 'Mejora constante', icon: FaArrowTrendUp, variant: 'orange' },
  { name: 'Liderazgo', icon: FaChessKing, variant: 'purple' },
] as const satisfies readonly SkillItem[];
