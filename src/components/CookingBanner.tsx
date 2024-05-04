'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SectionFirst from './SectionFirst';
import SectionSecond from './SectionSecond';
import SectionThird from './SectionThird';

gsap.registerPlugin(ScrollTrigger);

const CookingBanner: React.FC = () => {
  const snapSliderContainerRef = useRef<HTMLDivElement | null>(null);
  const snapSliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const snapContainer = snapSliderRef?.current;

    gsap.set(snapContainer, {
      height: window.innerHeight,
      width: `${window.innerWidth * (snapContainer?.children?.length || 1)}`,
    });

    gsap.to(snapContainer, {
      xPercent: -100,
      // duration: 3,
      x: () => window.innerWidth,
      ease: 'none',
      // smooth: 2,
      // effects: true,
      scrollTrigger: {
        trigger: snapSliderContainerRef.current,
        // start: 'top top',
        // end: () => `+=${window.innerWidth * 1}`,
        scrub: 1,
        pin: true,
        snap: 1 / ((snapContainer?.children?.length || 1) - 1),
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div ref={snapSliderContainerRef} className='h-screen overflow-hidden'>
      <div className='h-[10%] px-10 py-5'>
        <h3 className='leading-[32px] text-[20px] md:leading-[40px] md:text-[32px] text-[#666]'>
          What&#x27;s cooking?
        </h3>
      </div>
      <div className='flex h-[90%]' ref={snapSliderRef}>
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
      </div>
    </div>
  );
};

export default CookingBanner;
