"use server";

export async function sendContactEmail(formData: FormData) {
  const inquiryType = formData.get("inquiryType") as string;
  const ownerName = formData.get("ownerName") as string;
  const contact = formData.get("contact") as string;
  const petName = formData.get("petName") as string;
  const breed = formData.get("breed") as string;
  const message = formData.get("message") as string;

  // TODO: 실제 이메일 발송 로직 구현
  // 예: nodemailer, Resend, SendGrid 등 사용
  // 환경변수로 이메일 설정 관리

  console.log("Contact form submission:", {
    inquiryType,
    ownerName,
    contact,
    petName,
    breed,
    message,
  });

  // 시뮬레이션: 실제로는 이메일 발송 후 성공/실패 반환
  return { success: true };
}

