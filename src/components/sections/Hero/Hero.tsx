import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

import { heroContainer, heroSection } from './Hero.styles';

const Hero = () => {
  return (
    <section id="hero" className={heroSection}>
      <div className={heroContainer}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
