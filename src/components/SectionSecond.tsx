import Image from 'next/image';

const SectionSecond = () => {
  return (
    <div className='max-w-[100vw] shrink-0 box-border h-[90%] max-h-[90%] flex justify-end items-end pointer-events-all'>
      <div className='grid relative rounded-[10px] p-4 bg-black z-50 overflow-hidden grid-rows-1 md:grid-rows-7 grid-cols-7 md:grid-cols-4 lg:grid-cols-5 h-full w-full group gap-4 box-border'>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-span-2 md:row-span-4'>
          <Image
            alt=''
            loading='lazy'
            width='1196'
            height='804'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/21/1000'
          />
        </div>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-span-2 md:row-span-3'>
          <Image
            alt=''
            loading='lazy'
            width='1110'
            height='542'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/22/1000'
          />
        </div>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-start-1 md:col-span-2 md:row-start-5 md:row-span-3'>
          <Image
            alt=''
            loading='lazy'
            width='1196'
            height='500'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/23/1000'
          />
        </div>
        <div className='rounded-[10px] pointer-events-none flex overflow-hidden md:col-span-2 md:col-start-3 md:row-start-4 md:row-span-4'>
          <Image
            alt=''
            loading='lazy'
            width='1110'
            height='762'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/24/1000'
          />
        </div>
        <div className='hidden lg:flex rounded-[10px] pointer-events-none overflow-hidden md:col-span-1 md:col-start-5 md:row-start-1 md:row-end-[8]'>
          <Image
            alt=''
            loading='lazy'
            width='582'
            height='1168'
            decoding='async'
            data-nimg='1'
            className='object-cover customCursor h-[100%] cursor-none'
            style={{ color: 'transparent' }}
            src='https://picsum.photos/id/25/1000'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSecond;
