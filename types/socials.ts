export enum SocialNetwork {
  Twitter,
  YouTube,
  Facebook,
  Spotify,
  Instagram,
  Github,
}

export interface SocialFeedPost {
  platform: SocialNetwork;
  postId: string;
  createdAt: string;
  title: string;
  description: string;
  previewImg: string;
  url: string;
}

export type SocialFeedPosts = SocialFeedPost[];
