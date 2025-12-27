"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

const inquiryTypes = ["미용 예약", "상담", "기타"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: "미용 예약",
    ownerName: "",
    contact: "",
    petName: "",
    breed: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("inquiryType", formData.inquiryType);
    formDataToSend.append("ownerName", formData.ownerName);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("petName", formData.petName);
    formDataToSend.append("breed", formData.breed);
    formDataToSend.append("message", formData.message);

    try {
      await sendContactEmail(formDataToSend);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send contact form:", error);
      alert("문의 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="text-6xl mb-6">✓</div>
            <h2 className="text-3xl font-bold mb-4 text-darkGray">
              문의가 접수되었습니다
            </h2>
            <p className="text-lg text-darkGray/70">
              확인 후 정성껏 안내드리겠습니다.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-darkGray">
          예약 및 문의
        </h1>
        <p className="text-center text-darkGray/70 mb-8">
          예약 우선제로 운영하고 있습니다. 방문 전 미리 예약해주시면 더욱 편리하게 이용하실 수 있습니다.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-darkGray mb-2">
                문의 유형
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pastel rounded-lg focus:outline-none focus:ring-2 focus:ring-softBrown focus:border-transparent"
                required
              >
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-darkGray mb-2">
                보호자 이름
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pastel rounded-lg focus:outline-none focus:ring-2 focus:ring-softBrown focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-darkGray mb-2">
                연락처
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pastel rounded-lg focus:outline-none focus:ring-2 focus:ring-softBrown focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="petName" className="block text-sm font-medium text-darkGray mb-2">
                반려견 이름
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pastel rounded-lg focus:outline-none focus:ring-2 focus:ring-softBrown focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="breed" className="block text-sm font-medium text-darkGray mb-2">
                견종
              </label>
              <input
                type="text"
                id="breed"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pastel rounded-lg focus:outline-none focus:ring-2 focus:ring-softBrown focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-darkGray mb-2">
                요청 사항
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-pastel rounded-lg focus:outline-none focus:ring-2 focus:ring-softBrown focus:border-transparent resize-none"
                placeholder="원하시는 미용 스타일이나 특별한 요청사항이 있으시면 적어주세요."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-softBrown text-white rounded-full hover:bg-softBrown/90 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "전송 중..." : "문의 남기기"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

