import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
//import { TimeLimitSection } from '@/components/sections/TimeLimitSection';
//import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        {/** 고객들이 늘어나면 조금 수정하고 다시 오픈. 일단 주석 처리 <TimeLimitSection /> */}
        {/** 리뷰틀만 만들어두고, 리뷰를 받으면 수정 후 활성화 <ReviewsSection /> */}
        <ContactSection />
      </main>
    </>
  );
}
