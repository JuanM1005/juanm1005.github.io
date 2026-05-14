import clsx from 'clsx';

import { Card } from '@/components/ui';

import type { SkillCardProps, SkillVariant } from './Skills.types';

import {
  skillCard,
  skillCardContent,
  skillDescription,
  skillIconBlue,
  skillIconBox,
  skillIconCyan,
  skillIconGreen,
  skillIconOrange,
  skillIconPurple,
  skillIconYellow,
  skillName,
} from './Skills.styles';

const skillIconVariants: Record<SkillVariant, string> = {
  blue: skillIconBlue,
  yellow: skillIconYellow,
  green: skillIconGreen,
  purple: skillIconPurple,
  orange: skillIconOrange,
  cyan: skillIconCyan,
};

const SkillCard = ({
  name,
  description,
  icon: Icon,
  variant,
}: SkillCardProps) => {
  return (
    <Card variant="glass" padding="lg" isClickable className={skillCard}>
      <div className={skillCardContent}>
        <div className={clsx(skillIconBox, skillIconVariants[variant])}>
          <Icon />
        </div>

        <h3 className={skillName}>{name}</h3>

        <p className={skillDescription}>{description}</p>
      </div>
    </Card>
  );
};

export default SkillCard;
