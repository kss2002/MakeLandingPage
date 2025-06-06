export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">MakeLandingPage</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            전문적인 랜딩 페이지 제작 서비스를 제공합니다.
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MakeLandingPage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
