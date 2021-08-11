import React from 'react';
import { SocialFeedPost, SocialNetwork } from '../../types/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getSocialNetworkData } from '../../util/social-network-data';

const SocialPostCard: React.FC<
  React.PropsWithChildren<{ post: SocialFeedPost }>
> = ({ post }) => {
  const firstWords = post.title.split(' ', 8);
  const description = post.description.split(' ', 80);
  const socialTheme = getSocialNetworkData(post.platform);
  const date = new Date(post.createdAt).toLocaleDateString('de');
  return (
    <a
      href={post.url}
      target={'_blank'}
      title={`Link to ${SocialNetwork[post.platform]}: ${post.title}.`}
      className={
        'rounded flex flex-col p-4 bg-gray-850 filter drop-shadow-lg mb-8 transition duration-300 ' +
        'ease-in-out transform hover:translate-x-2 focus:translate-x-2 hover:cursor-pointer'
      }
      rel='noreferrer'>
      <p className={'text-xs text-right mb-2 text-white font-bold'}>
        <FontAwesomeIcon
          icon={socialTheme.icon}
          size={'lg'}
          className={`mr-1 ${socialTheme.color}`}
        />
        {SocialNetwork[post.platform]}
      </p>
      <div className='flex flex-col lg:flex-row space-y-2 justify-center lg:space-x-4 mb-4'>
        {post.platform !== SocialNetwork.Github ? (
          <div className='flex-1 lg:flex-none w-full lg:w-32 lg:h-32'>
            {post.platform === SocialNetwork.Instagram ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className='max-w-full w-auto h-auto object-contain'
                src={`/api/proxy-ig-image?igImg=${post.previewImg}`}
                alt={post.title}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.previewImg}
                alt={post.title}
                className={'max-w-full w-auto h-auto object-contain'}
              />
            )}
          </div>
        ) : (
          <FontAwesomeIcon
            icon={faGithub}
            className={'text-white'}
            size={'3x'}
          />
        )}
        <div className={'flex-grow'}>
          <h2 className={'mb-2 text-lg text-white break-word'}>
            {firstWords.join(' ')}...
          </h2>
          <p className={'text-xs text-gray-700 break-word'}>
            {description.join(' ')}...
          </p>
        </div>
      </div>
      <div className={'flex'}>
        <p className={'items-center flex text-xs text-gray-700'}>
          <FontAwesomeIcon icon={faCalendarDay} className={'mr-1'} />
          {date}
        </p>
      </div>
    </a>
  );
};

export default SocialPostCard;
