import type { IconType } from 'react-icons';
import type { IconVariant } from '../Section.styles';

export type SkillItem = {
  name: string;
  description: string;
  icon: IconType;
  variant: IconVariant;
};

export type SkillCardProps = SkillItem;
