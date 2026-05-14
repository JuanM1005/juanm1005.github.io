import type { IconType } from 'react-icons';
import type { IconVariant } from '../Section.styles';

export type AboutCardItem = {
  title: string;
  description: string;
  icon: IconType;
  variant: IconVariant;
};

export type AboutCardProps = AboutCardItem;
