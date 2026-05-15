import { FaUserGroup } from 'react-icons/fa6';

import { ButtonLink, Card } from '@/components/ui';

import type { ProjectCardProps } from './Projects.types';
import { projectLinkMeta } from './projectLink';

import {
  projectActions,
  projectCard,
  projectCollab,
  projectCollabIcon,
  projectCollabLink,
  projectContent,
  projectDescription,
  projectImage,
  projectImageWrapper,
  projectTag,
  projectTags,
  projectTitle,
} from './ProjectsCard.styles';

const ProjectCard = ({
  title,
  description,
  src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  tags,
  link,
  collaborators,
}: ProjectCardProps) => {
  const linkMeta = link ? projectLinkMeta[link.kind] : null;
  const LinkIcon = linkMeta?.icon;

  return (
    <Card
      variant="glass"
      padding="md"
      isClickable
      className={`group ${projectCard}`}
    >
      <div className={projectImageWrapper}>
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          className={projectImage}
        />
      </div>

      <div className={projectContent}>
        <h3 className={projectTitle}>{title}</h3>

        {collaborators && collaborators.length > 0 && (
          <div className={projectCollab}>
            <FaUserGroup className={projectCollabIcon} aria-hidden="true" />

            <span>En colaboración con</span>

            {collaborators.map((collaborator, index) => {
              const separator = index < collaborators.length - 1 ? ', ' : '';

              return (
                <span key={collaborator.username}>
                  {collaborator.githubUrl ? (
                    <a
                      href={collaborator.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectCollabLink}
                    >
                      @{collaborator.username}
                    </a>
                  ) : (
                    <span>@{collaborator.username}</span>
                  )}

                  {separator}
                </span>
              );
            })}
          </div>
        )}

        <p className={projectDescription}>{description}</p>

        <div className={projectTags}>
          {tags.map((tag) => (
            <span key={tag} className={projectTag}>
              {tag}
            </span>
          ))}
        </div>

        {link && linkMeta && LinkIcon && (
          <div className={projectActions}>
            <ButtonLink
              href={link.url}
              variant="secondary"
              size="md"
              fullWidth
              external
            >
              <LinkIcon aria-hidden="true" />
              {link.label ?? linkMeta.defaultLabel}
            </ButtonLink>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
