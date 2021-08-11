import { SocialNetwork } from '../../types/socials';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialNetworkData } from '../../util/social-network-data';

type SocialCardProps = {
  social: SocialNetwork;
};
const SocialCard: React.FC<SocialCardProps> = ({ social }) => {
  const data = getSocialNetworkData(social);

  // TODO: add social links to the platform here
  return (
    <a
      href={data.url}
      className={
        `${data.hoverColor}` +
        ' transition duration-300 ease-in-out transform hover:-translate-y-2 focus:-translate-y-2 hover:cursor-pointer ' +
        'justify-center items-center p-3 py-3 flex-1 w-full flex flex-col bg-white ' +
        'filter drop-shadow rounded'
      }>
      <FontAwesomeIcon
        icon={data.icon}
        size={'lg'}
        className={'mb-1 text-accent'}
      />
      <p className={'text-xs'}>{SocialNetwork[social]}</p>
    </a>
  );
};

export default SocialCard;
