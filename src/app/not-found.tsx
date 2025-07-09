import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="text-8xl font-extrabold text-amber-400 mb-4 select-none">
        404
      </div>
      <div className="text-4xl mb-2">😢</div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        찾을 수 없는 페이지입니다.
      </h1>
      <p className="text-gray-500 mb-8">
        요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow transition-colors duration-200">
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
}
