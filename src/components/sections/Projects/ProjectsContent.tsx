import { projectsData } from '@/components/data';
import ProjectCard from './ProjectsCard';

import {
  sectionDescription,
  sectionHeader,
  sectionProjectsGrid,
  sectionTitle,
} from '../Section.styles';

const ProjectsContent = () => {
  return (
    <>
      <div className={sectionHeader}>
        <span className={sectionTitle}>Proyectos</span>
        <p className={sectionDescription}>
          Una selección de mis trabajos académicos y personales más recientes.
        </p>
      </div>

      <div className={sectionProjectsGrid}>
        {projectsData.map((data) => (
          <ProjectCard key={data.title} {...data} />
        ))}
      </div>
    </>
  );
};

export default ProjectsContent;
