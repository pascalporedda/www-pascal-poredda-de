import {
  InstagramApi,
  Repository,
  SocialFeedPost,
  SocialNetwork,
  YouTubeSearchListResponse,
} from '../types';
import { cacheFeed, getCachedFeed } from './cache-util';

export const getYoutubePosts = async (
  channelId: string,
): Promise<SocialFeedPost[]> => {
  const cache = getCachedFeed(SocialNetwork.YouTube);

  if (cache) {
    return cache;
  }

  const API_KEY = process.env.YT_API_KEY || '';
  const baseUrl = 'https://www.youtube.com/watch?v=';
  const apiUrl = 'https://www.googleapis.com/youtube/v3/search?';

  const url = `${apiUrl}key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`;
  const response = await fetch(url);
  const json: YouTubeSearchListResponse.Response = await response.json();

  const items = json.items
    .filter((video) => video.id.videoId !== undefined)
    .map((video) => {
      return {
        url: `${baseUrl}${video.id.videoId}`,
        createdAt: video.snippet.publishedAt,
        description: video.snippet.description,
        platform: SocialNetwork.YouTube,
        postId: video.id.videoId,
        previewImg: video.snippet.thumbnails.high.url,
        title: video.snippet.title,
      } as SocialFeedPost;
    });

  cacheFeed(SocialNetwork.YouTube, items);

  return items;
};

export const buildSpotifyFeed = async (
  showId: string,
): Promise<SocialFeedPost[]> => {
  const cache = getCachedFeed(SocialNetwork.Spotify);
  if (cache) {
    return cache;
  }
  const OAUTH_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '';
  const OAUTH_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '';
  const url = `https://api.spotify.com/v1/shows/${showId}/episodes?limit=5&market=US`;
  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const urlParams = new URLSearchParams({
    grant_type: 'client_credentials',
  });

  const token: {
    access_token: string;
    token_type: string;
    expires_in: number;
  } = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(OAUTH_CLIENT_ID + ':' + OAUTH_CLIENT_SECRET).toString(
          'base64',
        ),
    },
    body: urlParams,
  }).then((resp) => resp.json());

  const episodes: SpotifyApi.ShowEpisodesResponse = await fetch(url, {
    headers: {
      Authorization: token.token_type + ' ' + token.access_token,
    },
  }).then((resp) => resp.json());

  const items = episodes.items.map((episode) => {
    return {
      url: episode.uri,
      description: episode.description,
      platform: SocialNetwork.Spotify,
      postId: episode.id,
      title: episode.name,
      previewImg: episode.images[0]?.url,
      createdAt: episode.release_date,
    };
  });

  cacheFeed(SocialNetwork.Spotify, items);
  return items;
};

export const getGithubProjects = async (
  username: string,
): Promise<SocialFeedPost[]> => {
  const cache = getCachedFeed(SocialNetwork.Github);
  if (cache) {
    return cache;
  }

  try {
    const response: Repository[] = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    ).then((resp) => resp.json());

    const projects = response.map((repo) => {
      return {
        url: repo.svn_url,
        title: repo.full_name,
        createdAt: new Date(repo.pushed_at).toISOString(),
        platform: SocialNetwork.Github,
        postId: repo.node_id,
        description: repo.description || '',
        previewImg: '',
      };
    });

    cacheFeed(SocialNetwork.Github, projects);

    return projects;
  } catch (e) {
    console.error(e);
  }

  return [];
};

export const getInstagramPosts = async (
  instagramName: string,
): Promise<SocialFeedPost[]> => {
  const cache = getCachedFeed(SocialNetwork.Instagram);
  if (cache) {
    return cache;
  }

  const instagramResponse: InstagramApi.Response = await fetch(
    `https://www.instagram.com/${instagramName}/channel/?__a=1`,
    {
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      redirect: 'error',
    },
  ).then((resp) => resp.json());

  const posts =
    instagramResponse.graphql.user.edge_owner_to_timeline_media.edges
      .slice(0, 5)
      .map((edge) => {
        const caption =
          edge.node.edge_media_to_caption.edges[0]?.node.text ?? '';

        return {
          url: `https://instagram.com/p/${edge.node.shortcode}`,
          createdAt: new Date(
            edge.node.taken_at_timestamp * 1000,
          ).toISOString(),
          title: caption,
          previewImg: edge.node.thumbnail_src,
          postId: edge.node.id,
          platform: SocialNetwork.Instagram,
          description: caption,
        };
      });

  cacheFeed(SocialNetwork.Instagram, posts);

  return posts;
};
