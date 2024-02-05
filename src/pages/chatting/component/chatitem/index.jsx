import React from 'react';
import IsMe from './isMe';
import Other from './other';

const ChatItem = ({isMe, textContent}) => {
  if (isMe) {
    return <IsMe textContent={textContent} />;
  }
  return <Other textContent={textContent} />;
};

export default ChatItem;
