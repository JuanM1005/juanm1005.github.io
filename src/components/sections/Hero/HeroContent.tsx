import { Badge } from '@/components/ui';
import {
  heroActions,
  heroButtonPrimary,
  heroButtonSecondary,
  heroContent,
  heroDescription,
  heroProfession,
  heroTitle,
  heroTitleAccent,
} from './Hero.styles';

const HeroContent = () => {
  return (
    <div className={heroContent}>
      <Badge variant="success" size="md" withDot>
        Disponible para trabajar
      </Badge>

      <h1 className={heroTitle}>
        Hola soy,{' '}
        <span className={heroTitleAccent}>Juan Antonio Aguirre Mares</span>
      </h1>

      <span className={heroProfession}>
        ESTUDIANTE DE INGENIERÍA INFORMÁTICA
      </span>

      <h2 className={heroDescription}>
        Desarrollador en formación, disciplinado y comprometido con la mejora
        constante y el aprendizaje continuo.
      </h2>

      <div className={heroActions}>
        <a href="#projects" className={heroButtonPrimary}>
          Ver proyectos
        </a>

        <a href="#contact" className={heroButtonSecondary}>
          Contactar
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
