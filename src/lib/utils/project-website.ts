import { PROJECT_LINKS } from '@/lib/models/application-shell';

/** Documentation belongs to this fork; locale selection never changes its owner. */
export function projectWebsiteUrl(_language: string, path = ''): string {
  return path ? `${PROJECT_LINKS.repository}#usage` : PROJECT_LINKS.website;
}
