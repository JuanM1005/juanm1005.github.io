import type { IconType } from 'react-icons';

export type AboutIconVariant = 'blue' | 'yellow' | 'green' | 'purple';

export type AboutCardItem = {
  title: string;
  description: string;
  icon: IconType;
  iconClassName: AboutIconVariant;
};

export type AboutCardProps = AboutCardItem;
