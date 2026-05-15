import { hardSkillsCards, softSkillsCards } from '@/components/data';
import {
  sectionHeader,
  sectionTitle,
  sectionDescription,
  sectionSkillsGrid,
} from '../Section.styles';
import SkillsColumn from './SkillsColumn';

const SkillsContent = () => {
  return (
    <>
      <div className={sectionHeader}>
        <span className={sectionTitle}>Habilidades</span>
        <p className={sectionDescription}>
          Competencias técnicas y personales que aplico en mis proyectos
          académicos y desarrollo profesional.
        </p>
      </div>

      <div className={sectionSkillsGrid}>
        <SkillsColumn title="Hard Skills" items={hardSkillsCards} />
        <SkillsColumn title="Soft Skills" items={softSkillsCards} />
      </div>
    </>
  );
};

export default SkillsContent;
