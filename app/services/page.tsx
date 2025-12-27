import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "미용 서비스 안내",
  description: "기본 목욕, 전체 미용, 부분 미용, 스파 케어 등 다양한 애견 미용 서비스를 제공합니다.",
};

const services = [
  {
    name: "기본 목욕",
    description: "깨끗하고 부드러운 샴푸와 컨디셔너로 아이의 피부와 털을 건강하게 관리합니다.",
    target: "모든 견종",
    note: "목욕 후 드라이까지 포함됩니다.",
  },
  {
    name: "전체 미용",
    description: "견종별 특성에 맞춘 전문 미용으로 아이의 아름다움을 극대화합니다.",
    target: "모든 견종",
    note: "견종과 털 상태에 따라 시간이 달라질 수 있습니다.",
  },
  {
    name: "부분 미용",
    description: "필요한 부분만 선택하여 케어하는 맞춤형 서비스입니다.",
    target: "모든 견종",
    note: "발가락, 항문 주변, 귀 주변 등 원하는 부위를 선택하실 수 있습니다.",
  },
  {
    name: "스파 케어",
    description: "편안한 스파 트리트먼트로 아이의 피부와 털을 깊이 케어합니다.",
    target: "모든 견종",
    note: "스트레스 해소와 피부 건강에 도움이 됩니다.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-darkGray">
          미용 서비스 안내
        </h1>
        <p className="text-center text-darkGray/70 mb-16">
          아이의 상태와 필요에 맞는 서비스를 선택해주세요
        </p>

        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-darkGray">
                {service.name}
              </h2>
              <p className="text-lg text-darkGray/80 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-pastel">
                <p className="text-darkGray mb-2">
                  <span className="font-medium">대상:</span> {service.target}
                </p>
                <p className="text-darkGray/70">
                  <span className="font-medium">참고:</span> {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-pastel/30 rounded-2xl p-8 text-center">
          <p className="text-lg text-darkGray mb-4">
            가격은 견종, 크기, 털 상태에 따라 달라질 수 있습니다.
          </p>
          <p className="text-darkGray/70">
            정확한 가격 안내를 원하시면 예약 및 문의 페이지에서 문의해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}

