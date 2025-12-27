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
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1234567890123!2d127.0276108!3d37.497942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzUyLjYiTiAxMjfCsDAxJzM5LjQiRQ!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="애견 미용실 위치"
            />
          </div>
          <p className="text-sm text-darkGray/60 mt-4 text-center">
            * 실제 주소에 맞게 지도를 수정해주세요. Google Maps에서 주소를 검색한 후 "공유" → "지도 퍼가기"를 통해 iframe 코드를 가져오세요.
          </p>
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

