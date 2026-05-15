import type { SkillsColumnProps } from './Skills.types';
import SkillCard from './SkillsCard';

import {
  skillsColumn,
  skillsColumnGrid,
  skillsColumnTitle,
} from './SkillsCard.styles';

const SkillsColumn = ({ title, items }: SkillsColumnProps) => {
  return (
    <div className={skillsColumn}>
      <h3 className={skillsColumnTitle}>{title}</h3>

      <div className={skillsColumnGrid}>
        {items.map((data) => (
          <SkillCard key={data.name} {...data} />
        ))}
      </div>
    </div>
  );
};

export default SkillsColumn;
