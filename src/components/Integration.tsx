import Image from 'next/image';
import React from 'react';
import Bounded from './Bounded';
import StarBackground from './StarBackground';
import AnimatedContent from './AnimatedContent';

const Integration = () => {
  return (
    <div>
      <Bounded className='relative overflow-hidden '>
        {/* <Image src={'/background.jpg'} alt='' fill className='object-cover' quality={90} /> */}
        <StarBackground />

        <div className='relative'>
          <h2 className='mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl'>
            Integrations galore.
          </h2>
          <div className='mx-auto mt-6 max-w-md text-balance text-center text-slate-300'>
            The integrations your team needs to be productive at scale with no impact on your burn rate.
          </div>
          <AnimatedContent />
        </div>
      </Bounded>
    </div>
  );
};

export default Integration;
