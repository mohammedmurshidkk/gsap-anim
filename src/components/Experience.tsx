'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function customSplitText(selector: string, separator: string) {
  const elements = document.querySelectorAll(selector);
  const splitTextArray: any[] = [];

  elements.forEach((element) => {
    const text = element?.textContent?.trim();
    const words = text?.split(separator); // Split text using custom separator
    const newText = words?.join(''); // Join words back together without the separator

    const splitText = words?.map((word) => {
      const span = document.createElement('div');
      span.textContent = word;
      return span;
    });

    splitTextArray.push(splitText);

    element.innerHTML = ''; // Clear the element's content
    splitText?.forEach((span) => {
      element.appendChild(span);
    });
  });

  return splitTextArray;
}

const Experience = () => {
  useEffect(() => {
    const lines = customSplitText('.line', 'line');

    lines.forEach((line) => {
      line?.forEach((target: any) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: 'top center',
            end: 'bottom center',
          },
        });
      });
    });
  }, []);

  return (
    <div className='w-screen select-none flex flex-col justify-center items-start md:items-center md:px-20 p-4 md:py-16 gap-8'>
      <div className='w-full parent md:w-4/5 py-10 pointer-events-none'>
        <div className='experienceText text-white font-thin md:font-medium font-trap text-[60px]'>
          <h2 className='line'>*</h2>
          <h2 className='line'>To solve modern business</h2>
          <h2 className='line'>challenges, we have</h2>
          <h2 className='line'>
            <span className='text-[#FFE500]'>fresh ideas</span>, innovative tools, and a
          </h2>
          <h2 className='line'>different outlook on creativity.</h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
