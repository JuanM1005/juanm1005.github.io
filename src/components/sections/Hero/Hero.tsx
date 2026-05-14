import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

import { heroContainer, heroSection } from './Hero.styles';
import clsx from 'clsx';

const Hero = () => {
  return (
    <section id="hero" className={clsx(heroSection)}>
      <div className={heroContainer}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
