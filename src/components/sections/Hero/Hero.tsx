import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import { bgSectionsAnimated } from '../Section.styles';
import { heroContainer, heroSection } from './Hero.styles';
import clsx from 'clsx';

const Hero = () => {
  return (
    <section id="hero" className={clsx(heroSection, bgSectionsAnimated)}>
      <div className={heroContainer}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
