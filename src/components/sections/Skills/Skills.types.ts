import type { IconType } from 'react-icons';

export type SkillVariant =
  | 'blue'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'orange'
  | 'cyan';

export type SkillItem = {
  name: string;
  description: string;
  icon: IconType;
  variant: SkillVariant;
};

export type SkillCardProps = SkillItem;
