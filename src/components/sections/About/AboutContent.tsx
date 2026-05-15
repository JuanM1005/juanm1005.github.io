import { aboutData } from '@/components/data';

import AboutCard from './AboutCard';

import {
  sectionHeader,
  sectionTitle,
  sectionDescription,
  sectionAboutGrid,
} from '../Section.styles';

const AboutContent = () => {
  return (
    <>
      <div className={sectionHeader}>
        <span className={sectionTitle}>Sobre mí</span>
        <p className={sectionDescription}>
          Soy estudiante de Ingeniería Informática y me encuentro desarrollando
          proyectos académicos enfocados en estructuras de datos, sistemas de
          gestión, desarrollo frontend y análisis de datos. Trabajo con C, C++,
          Python, bases de datos y control de versiones con Git y GitHub.
        </p>
      </div>

      <div className={sectionAboutGrid}>
        {aboutData.map((data) => (
          <AboutCard
            key={data.title}
            title={data.title}
            description={data.description}
            icon={data.icon}
            variant={data.variant}
          />
        ))}
      </div>
    </>
  );
};

export default AboutContent;
