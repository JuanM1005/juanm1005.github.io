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
          <ProjectCard
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image}
            imageAlt={data.imageAlt}
            tags={data.tags}
            githubUrl={data.githubUrl}
            collaborators={data.collaborators}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsContent;
