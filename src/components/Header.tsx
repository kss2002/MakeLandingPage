import { Button } from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              MakeLandingPage
            </a>
          </div>

          {/* 문의하기 버튼 */}
          <div>
            <Button
              variant="kakao"
              size="sm"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              문의하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
