import clsx from 'clsx';
import { Card } from '@/components/ui';
import type { SkillCardProps } from './Skills.types';
import { iconVariants } from '../Section.styles';

import {
  skillCard,
  skillCardContent,
  skillCardDescription,
  skillIconBox,
  skillCardTitle,
} from './SkillsCard.styles';

const SkillCard = ({
  name,
  description,
  icon: Icon,
  variant,
}: SkillCardProps) => {
  return (
    <Card variant="glass" padding="lg" isClickable className={skillCard}>
      <div className={skillCardContent}>
        <div className={clsx(skillIconBox, iconVariants[variant])}>
          <Icon />
        </div>

        <h3 className={skillCardTitle}>{name}</h3>

        <p className={skillCardDescription}>{description}</p>
      </div>
    </Card>
  );
};

export default SkillCard;
