import clsx from 'clsx';
import {
  backgroundSectionsAnimated,
  backgroundSections,
  backgroundSectionsContainer,
} from '../Section.styles';
import SkillsContent from './SkillsContent';

const Skills = () => {
  return (
    <section
      id="skills"
      className={clsx(backgroundSections, backgroundSectionsAnimated)}
    >
      <div className={backgroundSectionsContainer}>
        <SkillsContent />
      </div>
    </section>
  );
};

export default Skills;
