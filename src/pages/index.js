import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import StatisticsSection from '../components/StatisticsSection/StatisticsSection';
import VideoSection from '../components/VideoSection/VideoSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <VideoSection />
      <BenefitsSection />
    </>
  );
}
