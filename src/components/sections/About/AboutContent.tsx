import { aboutCards } from '@/components/data';

import AboutCard from './AboutCard';

import {
  sectionsHeader,
  sectionsTitle,
  sectionsDescription,
  sectionAboutGrid,
} from '../Section.styles';

const AboutContent = () => {
  return (
    <>
      <div className={sectionsHeader}>
        <span className={sectionsTitle}>Sobre mí</span>
        <p className={sectionsDescription}>
          Soy estudiante de Ingeniería Informática y me encuentro desarrollando
          proyectos académicos enfocados en estructuras de datos, sistemas de
          gestión, desarrollo frontend y análisis de datos. Trabajo con C, C++,
          Python, bases de datos y control de versiones con Git y GitHub.
        </p>
      </div>

      <div className={sectionAboutGrid}>
        {aboutCards.map((aboutCard) => (
          <AboutCard
            key={aboutCard.title}
            title={aboutCard.title}
            description={aboutCard.description}
            icon={aboutCard.icon}
            iconClassName={aboutCard.iconClassName}
          />
        ))}
      </div>
    </>
  );
};

export default AboutContent;
