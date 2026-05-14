import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import { backgroundAnimated } from '../Section.styles';
import { heroSection, heroContainer } from './Hero.styles';
import clsx from 'clsx';

const Hero = () => {
  return (
    <section id="hero" className={clsx(heroSection, backgroundAnimated)}>
      <div className={heroContainer}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
