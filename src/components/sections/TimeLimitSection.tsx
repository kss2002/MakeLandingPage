'use client';

import { Button } from '@/components/ui/Button';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function TimeLimitSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              // 타이머가 0이 되면 리셋
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">한정 프로모션</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                지금 신청하면 <br />
                <span className="text-yellow-300">40% 할인</span> 혜택
              </h2>
              <p className="text-blue-100 mb-6">
                이번 달 한정으로 10개 패키지만 특별 할인가로 제공됩니다. 지금
                바로 신청하세요!
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">남은 수량: 3개</span>
                </div>
                <div className="h-4 w-px bg-blue-400"></div>
                <div className="text-sm">
                  프로모션 종료까지:{' '}
                  <span className="font-bold">
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                    {formatTime(timeLeft.seconds)}
                  </span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 w-full md:w-auto"
              >
                지금 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">프로모션 혜택</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>기본 패키지 40% 할인</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>무료 도메인 1년 제공</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>기본 SEO 최적화 무료</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span>무제한 수정 1개월</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
