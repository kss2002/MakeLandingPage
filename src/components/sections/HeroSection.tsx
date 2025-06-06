import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            전문적인 랜딩 페이지 제작 서비스
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up animation-delay-200">
            당신의 비즈니스를 위한 완벽한 랜딩 페이지를 제작해드립니다. 모던하고
            세련된 디자인으로 고객의 마음을 사로잡으세요.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up animation-delay-400">
            <Button
              size="lg"
              variant="kakao"
              className="hover:scale-105 transition-transform"
            >
              카카오톡 문의하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              서비스 살펴보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
