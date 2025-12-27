import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "샵 소개",
  description: "편안함을 먼저 생각하는 애견 미용실의 미용 철학과 케어 방식을 소개합니다.",
};

const principles = [
  {
    title: "아이의 성향을 먼저 살펴봅니다",
    description:
      "모든 아이는 고유한 성향과 특성이 있습니다. 미용 전 충분한 시간을 들여 아이의 상태를 파악하고, 편안하게 느낄 수 있는 환경을 만들어갑니다.",
  },
  {
    title: "무리한 미용은 진행하지 않습니다",
    description:
      "아이의 건강과 안전이 최우선입니다. 스트레스를 받거나 불편해하는 경우, 무리하게 진행하지 않고 단계적으로 접근합니다.",
  },
  {
    title: "편안한 환경을 가장 중요하게 생각합니다",
    description:
      "깨끗하고 조용한 공간에서 아이가 편안하게 느낄 수 있도록 최선을 다합니다. 보호자님의 신뢰와 아이의 편안함이 저희의 가장 큰 목표입니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-darkGray">
          샵 소개
        </h1>
        <p className="text-center text-darkGray/70 mb-16">
          저희 미용실의 철학과 케어 방식을 소개합니다
        </p>

        {/* 샵 이미지 */}
        <div className="mb-16 space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/shop/s1.png"
                alt="애견 미용실 내부 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-darkGray">
                  {principle.title}
                </h2>
                <p className="text-lg text-darkGray/80 leading-relaxed">
                  {principle.description}
                </p>
              </div>
              {/* 교차 이미지 표시 */}
              {index < principles.length - 1 && (
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={`/images/shop/s${(index % 3) + 2}.png`}
                      alt={`애견 미용실 내부 ${(index % 3) + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-pastel/30 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-darkGray text-center">
            저희의 약속
          </h2>
          <p className="text-lg text-darkGray/80 leading-relaxed text-center">
            보호자님과 아이 모두가 안심하고 맡길 수 있는 곳이 되도록,
            <br />
            작은 변화에도 아이의 기분을 먼저 살피며 정성껏 케어하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

