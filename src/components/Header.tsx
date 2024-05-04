import React from 'react';
import WordMark from './WordMark';
import ButtonLink from './ButtonLink';

const Header = () => {
  return (
    <div className='min-h-20 flex items-center justify-between md:px-16 md:py-6'>
      <WordMark />
      <ButtonLink href={''}>Let&apos;s Talk</ButtonLink>
    </div>
  );
};

export default Header;
