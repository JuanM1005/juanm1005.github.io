import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SiGooglecolab } from 'react-icons/si';
import type { IconType } from 'react-icons';
import type { ProjectLinkKind } from './Projects.types';

type LinkMeta = {
  icon: IconType;
  defaultLabel: string;
};

export const projectLinkMeta: Record<ProjectLinkKind, LinkMeta> = {
  github: { icon: FaGithub, defaultLabel: 'GitHub' },
  colab: { icon: SiGooglecolab, defaultLabel: 'Ver en Colab' },
  website: { icon: FaArrowUpRightFromSquare, defaultLabel: 'Ver sitio' },
  other: { icon: FaArrowUpRightFromSquare, defaultLabel: 'Ver más' },
};
