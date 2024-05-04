/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../app/page.module.css';

const HeroBanner: React.FC = () => {
  return (
    <main className='hero-container w-screen font-trap text-white pointer-events-none h-[calc(100vh-84px)] md:h-[calc(100vh-132px)] relative overflow-hidden z-20'>
      <div className='h-full flex flex-col-reverse md:flex-row items-end md:items-center justify-evenly md:justify-end'>
        {/* Hero Heading start*/}
        <div
          className='flex flex-col justify-start z-10 w-full xl:w-1/2 xl:grow'
          style={{
            opacity: 1,
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
          }}
        >
          <div className='h-full'>
            <div className='relative h-full pt-[60px] xl:pt-0 w-full xl:w-fit flex flex-col justify-start z-10 pl-8 xl:pl-[132px] select-none'>
              <div className='flex items-center gap-2'>
                <h1 className={`${styles.textHeroHeading} text-heroHeading leading-[100%] font-bold`}>We</h1>
                <span className='max-w-[300px] ml-4 leading-[105%] text-heroSubheading text-[#7f7f7f]'>
                  are a bunch of wildly passionate young minds
                </span>
              </div>
              <h1 className={`${styles.textHeroHeading} text-heroHeading leading-[100%] font-bold`}>
                Innovate
              </h1>
            </div>
          </div>
        </div>
        {/* Hero Heading end*/}
        {/* Hero teaser responsive view start*/}
        <div
          className='z-40 relative md:hidden h-[280px] w-screen pointer-events-auto flex justify-end overflow-hidden items-center leading-0'
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
          }}
        >
          <Image
            alt='show_reel_icon'
            loading='lazy'
            width='55'
            height='55'
            decoding='async'
            data-nimg='1'
            className='false relative translate-x-1/2'
            style={{ color: 'transparent' }}
            src='/hero.jpg'
          />

          <div className='false aspect-[1.83] max-w-[80%] flex justify-end pointer-events-auto h-full overflow-hidden'>
            <video
              style={{
                borderTopLeftRadius: '80px',
                borderBottomLeftRadius: '80px',
                objectFit: 'cover',
                height: '280px',
              }}
              loop
              autoPlay
              muted
              playsInline
              width='320'
              height='280'
            >
              <source src='hero-indro.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Hero teaser responsive view end*/}
      </div>

      {/* Hero teaser view start*/}
      <div>
        <div
          className='z-40 hidden bg-black lg:flex absolute max-w-[50%] w-auto h-[550px] rounded-l-[200px] right-0 top-1/2 overflow-hidden justify-center items-center leading-0'
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, -50%)',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              all: 'unset',
              pointerEvents: 'all',
              cursor: 'none',
              height: '100%',
              objectFit: 'fill',
            }}
            preload='auto'
          >
            <source src='hero-indro.mp4' type='video/webm' />
            <source type='video/mp4' />
          </video>
        </div>
      </div>
      {/* Hero teaser view end*/}
    </main>
  );
};

export default HeroBanner;
