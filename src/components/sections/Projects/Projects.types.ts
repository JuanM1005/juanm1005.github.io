import type { ImgHTMLAttributes } from 'react';

export type ProjectLinkKind = 'github' | 'colab' | 'website' | 'other';

export type ProjectLink = {
  url: string;
  kind: ProjectLinkKind;
  label?: string;
};

export type Collaborator = {
  username: string;
  githubUrl?: string;
};

export interface ProjectItem extends Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'loading' | 'decoding'
> {
  title: string;
  description: string;
  src: string;
  alt: string;
  tags: readonly string[];
  link?: ProjectLink;
  collaborators?: readonly Collaborator[];
}

export type ProjectCardProps = ProjectItem;
