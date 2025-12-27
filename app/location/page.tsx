import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "애견 미용실 위치, 주차 안내, 대중교통 정보를 확인하실 수 있습니다.",
};

export default function LocationPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-darkGray">
          오시는 길
        </h1>
        <p className="text-center text-darkGray/70 mb-12">
          편리하게 찾아오실 수 있도록 안내드립니다
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-darkGray">📍 주소</h2>
          <p className="text-lg text-darkGray/80 mb-2">
            서울시 강남구 테헤란로 123
          </p>
          <p className="text-darkGray/70">
            (역삼동 456-789)
          </p>
        </div>

        {/* 지도 영역 */}
        <div className="bg-pastel/30 rounded-2xl p-8 mb-8">
          <div className="aspect-video bg-darkGray/10 rounded-lg flex items-center justify-center">
            <p className="text-darkGray/50">지도 영역 (카카오맵 또는 구글맵 연동)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-darkGray">🅿️ 주차 안내</h2>
            <p className="text-darkGray/80 leading-relaxed">
              건물 지하 1층에 주차장이 있습니다.
              <br />
              주차 공간이 제한적이오니 가급적 대중교통을 이용해주시기 바랍니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-darkGray">🚇 대중교통 안내</h2>
            <p className="text-darkGray/80 leading-relaxed mb-2">
              <strong>지하철:</strong>
            </p>
            <p className="text-darkGray/70 mb-4">
              2호선 역삼역 3번 출구에서 도보 5분
              <br />
              9호선 신논현역 1번 출구에서 도보 7분
            </p>
            <p className="text-darkGray/80 leading-relaxed mb-2">
              <strong>버스:</strong>
            </p>
            <p className="text-darkGray/70">
              간선: 146, 241, 463
              <br />
              지선: 3412, 6411
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-darkGray">🕐 영업시간</h2>
          <div className="space-y-2 text-darkGray/80">
            <p className="flex justify-between">
              <span>월요일 - 토요일</span>
              <span className="font-medium">10:00 - 19:00</span>
            </p>
            <p className="flex justify-between">
              <span>일요일</span>
              <span className="font-medium text-darkGray/50">휴무</span>
            </p>
            <p className="flex justify-between">
              <span>공휴일</span>
              <span className="font-medium text-darkGray/50">휴무</span>
            </p>
          </div>
          <p className="mt-6 text-darkGray/70 text-sm">
            * 점심시간(13:00-14:00)에는 전화 상담이 어려울 수 있습니다.
            <br />
            * 예약 우선제로 운영되오니 방문 전 미리 예약해주시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}

