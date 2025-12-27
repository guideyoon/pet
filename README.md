# 애견 미용실 홈페이지

사랑스럽고 깔끔한 애견 미용실 홈페이지입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 페이지 구성

- **홈** (`/`): 히어로 섹션, 서비스 요약, 미용 사례 미리보기
- **미용 서비스** (`/services`): 기본 목욕, 전체 미용, 부분 미용, 스파 케어
- **미용 사례** (`/gallery`): 그리드 레이아웃의 미용 사례 이미지
- **샵 소개** (`/about`): 미용 철학과 케어 방식
- **예약 및 문의** (`/contact`): 문의 폼 (서버 액션 기반)
- **오시는 길** (`/location`): 위치, 주차, 대중교통 안내

## 환경 변수

문의 폼 이메일 발송을 위해 다음 환경 변수를 설정하세요:

```env
# .env.local
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@example.com
EMAIL_SERVER_PASSWORD=your-password
EMAIL_FROM=your-email@example.com
```

## 주요 기능

- 모바일 퍼스트 반응형 디자인
- 이미지 최적화 (Next.js Image)
- SEO 최적화 (메타데이터, 오픈그래프)
- 접근성 고려 (텍스트 대비, 터치 영역)
- 서버 액션 기반 문의 폼

## 디자인 컬러

- **오프화이트**: `#FEFCF9`
- **소프트 브라운**: `#D4A574`
- **파스텔**: `#F5E6D3`
- **다크 그레이**: `#3A3A3A`

## 향후 확장 가능 기능

- 온라인 예약 시스템
- 고객 후기 페이지
- 실시간 예약 현황 확인

