'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const storyLines = [
  {
    line: 'Lorem ipsum dolor sit amet',
    count: 120,
  },
  {
    line: 'Sed at elementum neque',
    count: 145,
  },
  {
    line: 'Praesent nec convallis dolor',
    count: 150,
  },
];

const StoryLine = () => {
  const linerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lineContainer = linerRef?.current;

    gsap.to(lineContainer, {
      xPercent: -100,
      duration: 10,
      x: () => window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-container',
        start: '10%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={linerRef} className='flex w-[275%] my-10 overflow-hidden '>
        {storyLines?.map((line, i) => (
          <div key={`line-${i}`} className='flex item-center  overflow-hidden'>
            <h2 className='text-[#FFE500] text-[30px] md:text-[75px] font-bold px-2'>{line?.count}+</h2>
            <h2 className='text-[30px] md:text-[75px] section leading-relaxed font-normal text-white font-trap inline-flex justify-center items-center'>
              {line?.line + ' // '}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoryLine;
