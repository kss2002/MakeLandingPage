export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">추가 기능</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">고급 애니메이션</h3>
            <p className="text-gray-600 mb-4">
              더욱 역동적이고 매력적인 웹 경험을 제공합니다.
            </p>
            <p className="text-blue-600 font-semibold">+₩200,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">다국어 지원</h3>
            <p className="text-gray-600 mb-4">
              글로벌 고객을 위한 다국어 지원 기능을 추가합니다.
            </p>
            <p className="text-blue-600 font-semibold">+₩300,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">고급 SEO 최적화</h3>
            <p className="text-gray-600 mb-4">
              검색 엔진 최적화를 통해 더 많은 방문자를 유치합니다.
            </p>
            <p className="text-blue-600 font-semibold">+₩250,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
