import BenefitsSection from '../components/sections/BenefitsSection/BenefitsSection';
import Footer from '../components/sections/Footer/Footer';
import Header from '../components/sections/Header/Header';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import StatisticsSection from '../components/sections/StatisticsSection/StatisticsSection';
import VideoSection from '../components/sections/VideoSection/VideoSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <VideoSection />
      <BenefitsSection />
      <Footer />
    </>
  );
}
