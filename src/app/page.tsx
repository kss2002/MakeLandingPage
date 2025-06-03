import { HeroSection } from '@/components/sections/HeroSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <PricingSection />
        <FeaturesSection />
        <ContactSection />
      </main>
    </>
  );
}
