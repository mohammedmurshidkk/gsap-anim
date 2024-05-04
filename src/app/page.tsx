import CookingBanner from '@/components/CookingBanner';
import Experience from '@/components/Experience';
import HeroBanner from '@/components/HeroBanner';
import StoryLine from '@/components/StoryLine';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StoryLine />
      <CookingBanner />
      <Experience />
    </>
  );
}
