import { Button } from '@/components/ui/Button';

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">문의하기</h2>
        <p className="text-gray-600 mb-8">
          카카오톡으로 문의하시면 빠른 시일 내에 답변 드리겠습니다.
        </p>
        <Button size="lg" variant="kakao">
          카카오톡 문의하기
        </Button>
      </div>
    </section>
  );
}
