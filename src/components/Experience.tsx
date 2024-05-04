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
    <>
      <div className='w-screen select-none bg-black flex flex-col justify-center items-start md:items-center md:px-20 p-4 md:py-16 gap-8'>
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
        <div className='h-[100vh]'></div>
        {/* <div
              clas="ideasContainer grid grid-cols-2 w-full md:w-4/5 justify-items-center md:justify-items-start grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-4"
            >
              <div
                clas="flex justify-center items-center overflow-hidden idea"
              >
                <video
                  loop=""
                  muted=""
                  playsinline=""
                  autoplay=""
                  style="all: unset; cursor: pointer; width: 100%; height: 100%"
                  preload="auto"
                  poster="/_next/static/media/1.b020ca50.png"
                >
                  <source
                    src="/_next/static/videos/1.cae8c4acf4ea7ef63e8a088a63e61234.webm"
                    type="video/webm"
                  />
                </video>
              </div>
              <div
                clas="flex justify-center items-center overflow-hidden idea"
              >
                <video
                  loop=""
                  muted=""
                  playsinline=""
                  autoplay=""
                  style="all: unset; cursor: pointer; width: 100%; height: 100%"
                  preload="auto"
                  poster="/_next/static/media/2.3d75eb12.png"
                >
                  <source
                    src="/_next/static/videos/2.10419ff158c94be3e9a3ccf156451149.webm"
                    type="video/webm"
                  />
                </video>
              </div>
              <div
                clas="flex justify-center items-center overflow-hidden idea"
              >
                <video
                  loop=""
                  muted=""
                  playsinline=""
                  autoplay=""
                  style="all: unset; cursor: pointer; width: 100%; height: 100%"
                  preload="auto"
                  poster="/_next/static/media/3.916ab867.png"
                >
                  <source
                    src="/_next/static/videos/3.eb155470fb2fe0d06ae4e57fd9d9c31e.webm"
                    type="video/webm"
                  />
                </video>
              </div>
              <div
                clas="flex justify-center items-center overflow-hidden idea"
              >
                <video
                  loop=""
                  muted=""
                  playsinline=""
                  autoplay=""
                  style="all: unset; cursor: pointer; width: 100%; height: 100%"
                  preload="auto"
                  poster="/_next/static/media/4.025bc0f8.png"
                >
                  <source
                    src="/_next/static/videos/4.63f9530d3623e430fb4cf4208ece9665.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div> */}
      </div>
    </>
  );
};

export default Experience;
