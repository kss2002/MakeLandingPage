import { MessageCircle, Mail, Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">문의하기</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            궁금한 점이 있으시다면 언제든지 문의해 주세요.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <h3 className="text-xl font-semibold mb-4">연락처</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                <span>카카오톡: @MakeLandingPage</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>이메일: contact@makelandingpage.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>전화: 02-1234-5678</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <h3 className="text-xl font-semibold mb-4">자주 묻는 질문</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  랜딩 페이지 제작 기간은 얼마나 걸리나요?
                </AccordionTrigger>
                <AccordionContent>
                  기본 패키지의 경우 약 1주일, 프리미엄 패키지는 2주,
                  엔터프라이즈 패키지는 요구사항에 따라 2-4주 정도 소요됩니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  제작 후 수정은 가능한가요?
                </AccordionTrigger>
                <AccordionContent>
                  네, 모든 패키지에 기본적인 수정 서비스가 포함되어 있습니다.
                  프리미엄 패키지 이상에서는 무제한 수정이 가능합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  호스팅은 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent>
                  모든 패키지에 호스팅 서비스가 포함되어 있습니다. 안정적인
                  서버에서 24/7 운영되며, 엔터프라이즈 패키지의 경우 전용 서버를
                  제공합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
