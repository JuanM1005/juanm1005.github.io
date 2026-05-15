import ProjectsContent from './ProjectsContent';
import {
  backgroundSections,
  backgroundSectionsContainer,
} from '../Section.styles';

const Projects = () => {
  return (
    <section id="projects" className={backgroundSections}>
      <div className={backgroundSectionsContainer}>
        <ProjectsContent />
      </div>
    </section>
  );
};

export default Projects;
