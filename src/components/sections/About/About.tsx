import AboutContent from './AboutContent';

import { aboutContainer, aboutSection } from './About.styles';

const About = () => {
  return (
    <section id="about" className={aboutSection}>
      <div className={aboutContainer}>
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
