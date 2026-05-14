import { heroCircle, heroImage, heroImageWrapper } from './Hero.styles';
import { profileImage } from '@/assets';

const HeroImage = () => {
  return (
    <div className={heroImageWrapper}>
      <div className={heroCircle}>
        <img
          src={profileImage}
          alt="Foto de Juan Antonio Aguirre Mares"
          className={heroImage}
        />
      </div>
    </div>
  );
};

export default HeroImage;
