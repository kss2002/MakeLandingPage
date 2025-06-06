import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />,
      title: '전문적인 디자인',
      description:
        '최신 트렌드를 반영한 전문적인 디자인으로 브랜드 가치를 높입니다.',
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: '빠른 제작',
      description: '신속한 제작 프로세스로 빠른 시장 진입이 가능합니다.',
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: '안정적인 호스팅',
      description: '안정적인 호스팅 서비스로 24/7 서비스 운영을 보장합니다.',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
      title: '성과 분석',
      description:
        '상세한 분석 도구로 마케팅 성과를 측정하고 개선할 수 있습니다.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">
            왜 우리 서비스를 선택해야 할까요?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            전문적인 디자인과 기술력으로 비즈니스 성장을 위한 최적의 랜딩
            페이지를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
