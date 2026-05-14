import { skillsCards } from '@/components/data';
import {
  sectionsHeader,
  sectionsTitle,
  sectionsDescription,
} from '../Section.styles';
import SkillCard from './SkillsCard';

import { skillsGrid } from './Skills.styles';

const SkillsContent = () => {
  return (
    <div className={sectionsHeader}>
      <span className={sectionsTitle}>Habilidades</span>

      <p className={sectionsDescription}>hola</p>

      <div className={skillsGrid}>
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
