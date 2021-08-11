import { getSiteConfig, getEnv } from './get-config-value';

// general site config
export const name: string = getSiteConfig('name');
export const author: string = getSiteConfig('author');
export const domain: string = getSiteConfig('domain');
export const description: string = getSiteConfig('description', '');

// social accounts
export const twitter: string | null = getSiteConfig('twitter', null);
export const github: string | null = getSiteConfig('github', null);
export const linkedin: string | null = getSiteConfig('linkedin', null);
export const instagram: string | null = getSiteConfig('instagram', null);
export const spotify: string | null = getSiteConfig('spotify', null);
export const youtube: string | null = getSiteConfig('youtube', null);

// analytics

export const googleAnalyticsId: string | null = getSiteConfig('gaId', null);

export const isDev =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

// ----------------------------------------------------------------------------

export const isServer = typeof window === 'undefined';

export const port = getEnv('PORT', '3000');
export const host = isDev ? `http://localhost:${port}` : `https://${domain}`;

export const apiBaseUrl = `${host}/api`;
