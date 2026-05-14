import clsx from 'clsx';
import { Card } from '@/components/ui';
import type { AboutCardProps } from './About.types';
import { iconVariants } from '../Section.styles';

import {
  aboutCard,
  aboutCardContent,
  aboutCardText,
  aboutCardTitle,
  aboutIconBox,
} from './AboutCard.styles';

const AboutCard = ({
  title,
  description,
  icon: Icon,
  variant,
}: AboutCardProps) => {
  return (
    <Card variant="glass" padding="md" isClickable className={aboutCard}>
      <div className={aboutCardContent}>
        <div className={clsx(aboutIconBox, iconVariants[variant])}>
          <Icon />
        </div>

        <h3 className={aboutCardTitle}>{title}</h3>

        <p className={aboutCardText}>{description}</p>
      </div>
    </Card>
  );
};

export default AboutCard;
