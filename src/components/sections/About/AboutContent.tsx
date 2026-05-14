import { aboutCards } from '@/components/data';

import AboutCard from './AboutCard';

import {
  aboutCardsGrid,
  aboutDescription,
  aboutHeader,
  aboutTitle,
} from './About.styles';

const AboutContent = () => {
  return (
    <>
      <div className={aboutHeader}>
        <span className={aboutTitle}>Sobre mí</span>
        <p className={aboutDescription}>
          Soy estudiante de Ingeniería Informática y me encuentro desarrollando
          proyectos académicos enfocados en estructuras de datos, sistemas de
          gestión, desarrollo frontend y análisis de datos. Trabajo con C, C++,
          Python, bases de datos y control de versiones con Git y GitHub.
        </p>
      </div>

      <div className={aboutCardsGrid}>
        {aboutCards.map((card) => (
          <AboutCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
            iconClassName={card.iconClassName}
          />
        ))}
      </div>
    </>
  );
};

export default AboutContent;
