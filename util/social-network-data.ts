import { SocialNetwork } from '../types';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faSpotify,
  faTwitter,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { github, instagram, twitter, youtube } from './config';

export const getSocialNetworkData = (
  network: SocialNetwork,
): {
  icon: IconDefinition;
  hoverColor: string;
  color: string;
  url: string;
} => {
  let icon;
  let hoverColor;
  let color;
  let url;
  switch (network) {
    case SocialNetwork.Facebook:
      hoverColor = 'hover:bg-turquoise hover:text-white';
      color = 'text-turquoise text-white';
      icon = faFacebook;
      url = `https://facebook.com/`;
      break;
    case SocialNetwork.Instagram:
      hoverColor = 'hover:bg-gradient-instagram hover:text-white';
      color = 'text-accent-peach';
      icon = faInstagram;
      url = `https://instagram.com/${instagram}/`;
      break;
    case SocialNetwork.Spotify:
      hoverColor = 'hover:bg-accent-green hover:text-black';
      color = 'text-accent-green';
      icon = faSpotify;
      url = `https://open.spotify.com/show/4dNx1hTfyz6HBbZj1NlZSc`;
      break;
    case SocialNetwork.Twitter:
      hoverColor = 'hover:bg-accent-cyan hover:text-white';
      color = 'text-accent-cyan';
      icon = faTwitter;
      url = `https://twitter.com/${twitter}/`;
      break;
    case SocialNetwork.YouTube:
      hoverColor = 'focus:bg-accent-red hover:bg-accent-red hover:text-white';
      color = 'text-accent-red';
      icon = faYoutube;
      url = `https://www.youtube.com/channel/${youtube}/`;
      break;
    case SocialNetwork.Github:
      hoverColor = 'focus:bg-purple hover:bg-purple hover:text-white';
      color = 'text-white';
      icon = faGithub;
      url = `https://www.github.com/${github}`;
      break;
  }

  return {
    icon,
    hoverColor,
    url,
    color,
  };
};
