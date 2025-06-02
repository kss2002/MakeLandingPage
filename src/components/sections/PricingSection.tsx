import { Button } from '@/components/ui/Button';

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">서비스 가격</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">기본 패키지</h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-blue-600">₩600,000</span>
              <span className="text-gray-500 line-through">₩1,000,000</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">40% 할인된 가격</p>
          </div>
          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-lg">기본 기능</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>반응형 디자인</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>모던한 UI/UX</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>SEO 최적화</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
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
      </div>
    </section>
  );
}
