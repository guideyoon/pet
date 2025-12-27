import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사랑으로 돌보는 우리 아이 미용",
  description: "편안함을 먼저 생각하는 애견 미용실. 작은 변화에도 아이의 기분을 먼저 살핍니다.",
  openGraph: {
    title: "사랑으로 돌보는 우리 아이 미용",
    description: "편안함을 먼저 생각하는 애견 미용실",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=1920&q=80"
            alt="애견 미용"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            사랑으로 돌보는 우리 아이 미용
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2 drop-shadow-md">
            편안함을 먼저 생각하는 애견 미용실
          </p>
          <p className="text-lg text-white/90 mb-8 drop-shadow-md">
            작은 변화에도 아이의 기분을 먼저 살핍니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 bg-softBrown text-white rounded-full hover:bg-softBrown/90 transition-colors"
            >
              미용 안내
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white/90 text-darkGray rounded-full hover:bg-white transition-colors"
            >
              예약 문의
            </Link>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-darkGray leading-relaxed mb-4">
          우리 아이의 건강과 편안함을 최우선으로 생각합니다.
        </p>
        <p className="text-lg md:text-xl text-darkGray leading-relaxed">
          무리한 미용보다는 아이의 성향을 먼저 살펴보고, 자연스러운 아름다움을 만들어갑니다.
        </p>
      </section>

      {/* 서비스 요약 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-darkGray">
            미용 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "기본 목욕", desc: "깨끗하고 부드러운 케어" },
              { name: "전체 미용", desc: "견종별 맞춤 스타일링" },
              { name: "부분 미용", desc: "필요한 부분만 케어" },
              { name: "스파 케어", desc: "편안한 스파 트리트먼트" },
            ].map((service) => (
              <div
                key={service.name}
                className="text-center p-6 rounded-2xl bg-pastel/30 hover:bg-pastel/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-darkGray">
                  {service.name}
                </h3>
                <p className="text-darkGray/70">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-softBrown hover:underline font-medium"
            >
              자세한 서비스 안내 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 미용 사례 미리보기 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-darkGray">
            미용 사례
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&q=80",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80",
              "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
              "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=600&q=80",
              "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={src}
                  alt={`미용 사례 ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="text-softBrown hover:underline font-medium"
            >
              더 많은 사례 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 예약 안내 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-darkGray">예약 안내</h2>
          <p className="text-lg text-darkGray/80 mb-8">
            예약 우선제로 운영하고 있습니다. 방문 전 미리 예약해주시면 더욱 편리하게 이용하실 수 있습니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-softBrown text-white rounded-full hover:bg-softBrown/90 transition-colors text-lg font-medium"
          >
            예약 문의하기
          </Link>
        </div>
      </section>

      {/* 오시는 길 요약 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-darkGray">
            오시는 길
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-darkGray mb-4">📍 주소</p>
            <p className="text-darkGray/70 mb-6">서울시 강남구 테헤란로 123</p>
            <p className="text-lg text-darkGray mb-4">🕐 영업시간</p>
            <p className="text-darkGray/70 mb-6">
              월-토: 10:00 - 19:00<br />
              일요일: 휴무
            </p>
            <Link
              href="/location"
              className="text-softBrown hover:underline font-medium"
            >
              자세한 위치 안내 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

