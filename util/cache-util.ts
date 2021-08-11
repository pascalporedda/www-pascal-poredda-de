import { join } from 'path';
import { SocialFeedPosts, SocialNetwork } from '../types';
import fs from 'fs';

// 1 Day lifetime in ms
const CACHE_LIFETIME = 86400 * 100;
const CACHE_DIR = join(process.cwd(), '_cache');

export const getCachedFeed = (
  channel: SocialNetwork,
): SocialFeedPosts | null => {
  const cacheFile = getCacheFileForSocial(channel);
  const now = new Date().getTime();

  if (fs.existsSync(cacheFile)) {
    const stats = fs.statSync(cacheFile);
    const fileTime = new Date(stats.ctime).getTime() + CACHE_LIFETIME;
    if (!(now > fileTime)) {
      return JSON.parse(fs.readFileSync(cacheFile, { encoding: 'utf-8' }));
      // } else {
      //   fs.unlinkSync(cacheFile);
      // }
    }
  }

  return null;
};

export function getCacheFileForSocial(channel: SocialNetwork): string {
  return CACHE_DIR + '/' + SocialNetwork[channel].toLowerCase() + '.json';
}

export const cacheFeed = (
  channel: SocialNetwork,
  posts: SocialFeedPosts,
): void => {
  const cacheFile = getCacheFileForSocial(channel);
  if (!fs.existsSync(CACHE_DIR)) {
    console.log('create dir');
    fs.mkdirSync(CACHE_DIR);
  }

  fs.writeFileSync(cacheFile, JSON.stringify(posts));
};
