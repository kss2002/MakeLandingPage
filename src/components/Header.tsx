import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { Package } from "lucide-react";

export function Header() {
  // Header 컴포넌트는 랜딩 페이지의 상단에 위치하며, 로고와 문의하기 버튼을 포함합니다.
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              MakeLandingPage
            </a>
            <Package />
          </div>

          {/* 문의하기 버튼 */}
          <div>
            <Button
              variant="kakao"
              size="sm"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />

              <a
                href="https://open.kakao.com/o/sLCJVlEh"
                target="_blanck"
                rel="noopener noreferrer"
              >
                문의하기
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
