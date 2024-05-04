import Image from 'next/image';

const SectionThird = () => {
  return (
    <div className='max-w-[100vw] shrink-0 box-border h-[90%] max-h-[90%] flex justify-end items-end pointer-events-all'>
      <div className='grid relative rounded-[10px] p-4 overflow-hidden z-50 md:grid-rows-7 lg:grid-cols-9 md:grid-cols-7 h-full w-full group gap-4 box-border'>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-span-4 row-start-1 row-end-[8]'>
          <Image
            alt=''
            loading='lazy'
            width='2016'
            height='2004'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/30/1000'
          />
        </div>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-start-5 md:col-span-2 md:row-span-4'>
          <Image
            alt=''
            loading='lazy'
            width='978'
            height='1134'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/31/1000'
          />
        </div>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-start-7 md:row-start-1 md:col-span-3 md:row-span-3'>
          <Image
            alt=''
            loading='lazy'
            width='1338'
            height='816'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/32/1000'
          />
        </div>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-start-5 md:row-start-5 md:col-span-2 md:row-span-3'>
          <Image
            alt=''
            loading='lazy'
            width='978'
            height='822'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/33/1000'
          />
        </div>
        <div className='flex items-stretch rounded-[10px] pointer-events-none overflow-hidden md:col-start-7 md:row-start-4 md:col-span-3 md:row-span-4'>
          <Image
            alt=''
            loading='lazy'
            width='1338'
            height='888'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/34/1000'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThird;
