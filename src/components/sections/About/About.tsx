import AboutContent from './AboutContent';
import {
  backgroundSections,
  backgroundSectionsContainer,
} from '../Section.styles';

const About = () => {
  return (
    <section id="about" className={backgroundSections}>
      <div className={backgroundSectionsContainer}>
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
