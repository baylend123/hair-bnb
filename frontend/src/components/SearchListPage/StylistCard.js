import React from 'react';

function StylistCard({stylist}) {

  return (
    <div className='card'>
      <img className='cardPic' src={stylist.profilePhoto} alt='venue/profile'/>
      <div className='cardContent'>
        <div>{stylist.city}, {stylist.state}</div>
        <div className='cardName'>{stylist.name}</div>
        <div className='cardDetails'>{stylist.about}</div>
      </div>
    </div>
  );
}

export default StylistCard;
