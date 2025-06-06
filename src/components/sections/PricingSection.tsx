import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">서비스 가격</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            고객의 요구사항에 맞는 최적의 패키지를 선택하세요.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 기본 패키지 */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 relative animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                기본
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">기본 패키지</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-blue-600">
                  ₩600,000
                </span>
                <span className="text-gray-500 line-through">₩1,000,000</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">40% 할인된 가격</p>
            </div>
            <div className="space-y-4 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>반응형 디자인</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>모던한 UI/UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>기본 SEO 최적화</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>기본 애니메이션</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Button size="lg" variant="kakao" className="w-full">
                카카오톡으로 문의하기
              </Button>
            </div>
          </div>

          {/* 프리미엄 패키지 */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 relative border-2 border-blue-500 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                인기
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">프리미엄 패키지</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-blue-600">
                  ₩1,200,000
                </span>
                <span className="text-gray-500 line-through">₩2,000,000</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">40% 할인된 가격</p>
            </div>
            <div className="space-y-4 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>기본 패키지의 모든 기능</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>고급 애니메이션</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>고급 SEO 최적화</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>다국어 지원</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>무제한 수정</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Button size="lg" variant="kakao" className="w-full">
                카카오톡으로 문의하기
              </Button>
            </div>
          </div>

          {/* 엔터프라이즈 패키지 */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 relative animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                엔터프라이즈
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">엔터프라이즈 패키지</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-blue-600">문의</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">맞춤형 솔루션</p>
            </div>
            <div className="space-y-4 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>프리미엄 패키지의 모든 기능</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>맞춤형 기능 개발</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>우선 지원</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>전담 매니저</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Button size="lg" variant="kakao" className="w-full">
                카카오톡으로 문의하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
