import CookingBanner from '@/components/CookingBanner';
import Experience from '@/components/Experience';
import HeroBanner from '@/components/HeroBanner';
import Integration from '@/components/Integration';
import StarGrid from '@/components/StarGrid';
import StoryLine from '@/components/StoryLine';

export default function Home() {
  return (
    <>
      <StarGrid />
      <HeroBanner />
      <StoryLine />
      <CookingBanner />
      <Experience />
      <Integration />
    </>
  );
}
