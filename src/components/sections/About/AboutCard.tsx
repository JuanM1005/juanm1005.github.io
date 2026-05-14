import clsx from 'clsx';

import { Card } from '@/components/ui';

import type { AboutCardProps, AboutIconVariant } from './About.types';

import {
  aboutCard,
  aboutCardContent,
  aboutCardText,
  aboutCardTitle,
  aboutIconBlue,
  aboutIconBox,
  aboutIconGreen,
  aboutIconPurple,
  aboutIconYellow,
} from './About.styles';

const iconVariants: Record<AboutIconVariant, string> = {
  blue: aboutIconBlue,
  yellow: aboutIconYellow,
  green: aboutIconGreen,
  purple: aboutIconPurple,
};

const AboutCard = ({
  title,
  description,
  icon: Icon,
  iconClassName,
}: AboutCardProps) => {
  return (
    <Card variant="glass" padding="md" isClickable className={aboutCard}>
      <div className={aboutCardContent}>
        <div className={clsx(aboutIconBox, iconVariants[iconClassName])}>
          <Icon />
        </div>

        <h3 className={aboutCardTitle}>{title}</h3>

        <p className={aboutCardText}>{description}</p>
      </div>
    </Card>
  );
};

export default AboutCard;
