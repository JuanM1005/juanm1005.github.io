import { skillsCards } from '@/components/data';
import {
  sectionHeader,
  sectionTitle,
  sectionDescription,
  sectionSkillsGrid,
} from '../Section.styles';
import SkillCard from './SkillsCard';

const SkillsContent = () => {
  return (
    <div className={sectionHeader}>
      <span className={sectionTitle}>Habilidades</span>

      <p className={sectionDescription}>
        Competencias técnicas y personales que aplico en mis proyectos
        académicos y desarrollo profesional.
      </p>

      <div className={sectionSkillsGrid}>
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
