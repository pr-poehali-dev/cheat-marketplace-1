import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Advantages from '@/components/Advantages';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
      <Advantages />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
