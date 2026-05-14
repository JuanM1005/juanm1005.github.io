import clsx from 'clsx';
import {
  backgroundAnimated,
  backgroundSections,
  backgroundSectionsContainer,
} from '../Section.styles';
import SkillsContent from './SkillsContent';

const Skills = () => {
  return (
    <section
      id="skills"
      className={clsx(backgroundSections, backgroundAnimated)}
    >
      <div className={backgroundSectionsContainer}>
        <SkillsContent />
      </div>
    </section>
  );
};

export default Skills;
