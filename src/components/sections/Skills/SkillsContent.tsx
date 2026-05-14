import { skillsCards } from '@/components/data';
import {
  sectionsHeader,
  sectionsTitle,
  sectionsDescription,
  sectionSkillGrid,
} from '../Section.styles';
import SkillCard from './SkillsCard';

const SkillsContent = () => {
  return (
    <div className={sectionsHeader}>
      <span className={sectionsTitle}>Habilidades</span>

      <p className={sectionsDescription}>
        Competencias técnicas y personales que aplico en mis proyectos
        académicos y desarrollo profesional.
      </p>

      <div className={sectionSkillGrid}>
        {skillsCards.map((skillCard) => (
          <SkillCard
            key={skillCard.name}
            name={skillCard.name}
            description={skillCard.description}
            icon={skillCard.icon}
            variant={skillCard.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
