import type { ProjectItem } from '@/components/sections/Projects/Projects.types';
import {
  projectVetcare,
  projectTechNest,
  projectPetcare,
  projectDataMining,
  projectEDA,
} from '@/assets';

export const projectsData = [
  {
    title: 'VetCare Software',
    description:
      'Sistema integral de gestión veterinaria con interfaz gráfica. Permite administrar citas, clientes, pacientes, historial médico, control de vacunación e inventario.',
    src: projectVetcare,
    alt: 'Captura de pantalla de VetCare Software',
    tags: ['Python', 'CTK', 'PostgreSQL', 'SQLite'],
    link: {
      url: 'https://github.com/juanm1005/VetCare-Software',
      kind: 'github',
    },
    collaborators: [
      { username: 'Darklong15', githubUrl: 'https://github.com/Darklong15' },
      { username: 'RenataAC4', githubUrl: 'https://github.com/RenataAC4' },
    ],
  },
  {
    title: 'TechNest',
    description:
      'Sistema de administración para una tienda de tecnología desarrollado en C++ utilizando Programación Orientada a Objetos para gestionar inventario, proveedores y pedidos.',
    src: projectTechNest,
    alt: 'Captura de pantalla de TechNest Software',
    tags: ['C++', 'POO', 'Programa Consola'],
    link: {
      url: 'https://github.com/juanm1005/TechNest-Store',
      kind: 'github',
    },
    collaborators: [
      {
        username: 'Lancercrack25',
        githubUrl: 'https://github.com/Lancercrack25',
      },
    ],
  },
  {
    title: 'PetCare Demo',
    description:
      'Aplicación web para la gestión de clínicas veterinarias. Maneja pacientes, citas, historial clínico y signos vitales con enfoque offline-first. Arquitectura modular basada en componentes reutilizables y diseño inspirado en interfaces clínicas profesionales (Aún en desarrollo).',
    src: projectPetcare,
    alt: 'Captura de pantalla de PetCare Frontend Demo',
    tags: ['React', 'Vite', 'React Router', 'PWA'],
    link: {
      url: 'https://github.com/juanm1005/petcare-frontend-demo',
      kind: 'github',
    },
  },
  {
    title: 'EDA Medallas Olimpicas',
    description:
      'Este proyecto realiza un Análisis exploratorio de datos (EDA) sobre un conjunto de datos de medallas olímpicas, utilizando Python y Jupyter Notebook. El objetivo es identificar patrones, tendencias históricas y los países con mejor desempeño en diferentes ediciones de los Juegos Olímpicos.',
    src: projectEDA,
    alt: 'Captura de pantalla de PetCare Frontend Demo',
    tags: ['Python', 'Pandas', 'Jupyter Notebook'],
    link: {
      url: 'https://github.com/JuanM1005/Exploratory-Data-Analysis-of-Olympic-Medal-Trends.',
      kind: 'github',
    },
  },
  {
    title: 'Análisis de Señales EOG con K-Means',
    description:
      'Análisis crítico de agrupamiento no supervisado sobre señales EOG (electrooculografía) usando K-Means. Compara el rendimiento contra el modelo supervisado del artículo original, aplicando reducción de dimensionalidad y validación cruzada K-Fold para evaluar la separabilidad real de los patrones oculares.',
    src: projectDataMining,
    alt: 'Visualización de clústeres PCA del proyecto de señales EOG',
    tags: ['Python', 'K-Means', 'PCA', 'Scikit-learn'],
    link: {
      url: 'TU_URL_DE_COLAB',
      kind: 'colab',
    },
    collaborators: [
      { username: 'Renata Arreguín Covarrubias' },
      { username: 'Eriberto Orozco Rosas' },
    ],
  },
] as const satisfies readonly ProjectItem[];
