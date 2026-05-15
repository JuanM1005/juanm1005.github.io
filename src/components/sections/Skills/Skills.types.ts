import type { IconType } from 'react-icons';
import type { IconVariant } from '../Section.styles';

export type SkillItem = {
  name: string;
  description?: string;
  icon: IconType;
  variant: IconVariant;
};

export type SkillsColumnProps = {
  title: string;
  items: readonly SkillItem[];
};

export type SkillCardProps = SkillItem;
