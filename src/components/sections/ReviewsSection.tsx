import { Star } from 'lucide-react';

export function ReviewsSection() {
  const reviews = [
    {
      name: '김서연',
      company: '스타트업 대표',
      content:
        '전문적인 디자인과 빠른 제작 속도에 매우 만족했습니다. 특히 고객의 요구사항을 정확히 이해하고 반영해주셔서 감사합니다.',
      rating: 5,
    },
    {
      name: '이준호',
      company: '마케팅 매니저',
      content:
        '랜딩 페이지 제작 후 전환율이 2배 이상 증가했습니다. 사용자 경험을 고려한 디자인과 최적화된 성능이 큰 도움이 되었습니다.',
      rating: 5,
    },
    {
      name: '박지민',
      company: '브랜드 매니저',
      content:
        '다른 업체들과 비교했을 때 가성비가 정말 좋았습니다. 추가 수정도 빠르게 반영해주셔서 만족스러웠습니다.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">고객 후기</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            실제 고객들의 생생한 후기를 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
