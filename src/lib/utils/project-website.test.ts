import { expect, it } from 'vitest';
import { projectWebsiteUrl } from './project-website';
it.each(['zh-CN', 'en-US', 'unknown'])('keeps %s help links on the fork', locale => {
  expect(projectWebsiteUrl(locale)).toBe('https://github.com/ankhzw1876/Xiahua-DISK');
  expect(projectWebsiteUrl(locale, '/docs/ai#custom-service')).toBe('https://github.com/ankhzw1876/Xiahua-DISK#usage');
});
