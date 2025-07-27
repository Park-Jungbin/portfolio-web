# JB Park 퀀트 포트폴리오 웹사이트

박정빈(JB Park)의 퀀트 리서처 및 시스템 트레이딩 모델러 포트폴리오 웹사이트입니다.

## 프로젝트 구조

```
/
├── index.html          # 메인 HTML 파일
├── data.js            # 모델 및 프로젝트 데이터
├── components.js      # UI 컴포넌트 생성기
├── app.js            # 메인 애플리케이션 로직
├── styles.css        # 커스텀 스타일
├── server.py         # 로컬 개발 서버
├── assets/           # 미디어 파일들
│   └── projects/     # 프로젝트 관련 이미지/비디오
└── README.md         # 이 파일
```

## 로컬 실행 방법

### 방법 1: Python 서버 사용 (권장)
```bash
python server.py
```
브라우저가 자동으로 열리고 http://localhost:8000 에서 사이트를 확인할 수 있습니다.

### 방법 2: 다른 로컬 서버 사용
```bash
# Node.js가 설치된 경우
npx http-server

# Python 3가 설치된 경우
python -m http.server 8000

# PHP가 설치된 경우
php -S localhost:8000
```

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **탭 기반 네비게이션**: 한국 주식, 미국 주식, 마켓 레짐 모델 분류
- **인터랙티브 모델 카드**: 클릭하여 상세 정보 확장/축소
- **미디어 라이트박스**: 프로젝트 이미지/비디오 모달 뷰어
- **접근성 지원**: 키보드 네비게이션, 스크린 리더 지원
- **성능 최적화**: 지연 로딩, 부드러운 애니메이션

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Vanilla JavaScript**: 프레임워크 없는 순수 JS
- **ES6+ 클래스**: 모던 JavaScript 문법

## 데이터 구조

### 모델 데이터 (data.js)
```javascript
{
  id: 'model-id',
  name: '모델명',
  benchmark: '벤치마크',
  capacity: '용량',
  metrics: {
    sharpe: 'Sharpe Ratio',
    maxDrawdown: '최대 낙폭',
    // ... 기타 지표
  },
  description: '모델 설명',
  assumptions: ['가정1', '가정2'],
  validation: ['검증1', '검증2']
}
```

### 프로젝트 데이터 (data.js)
```javascript
{
  id: 'project-id',
  title: '프로젝트명',
  status: '상태',
  period: '기간',
  description: '설명',
  media: [
    {
      type: 'image|video',
      src: '파일 경로',
      title: '제목'
    }
  ]
}
```

## 미디어 파일 추가

프로젝트 이미지나 비디오를 추가하려면:

1. `assets/projects/` 디렉토리에 파일 업로드
2. `data.js`의 해당 프로젝트 `media` 배열에 정보 추가
3. 파일 경로는 `/assets/projects/filename.ext` 형식으로 지정

## 브라우저 지원

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 개발 가이드

### 새 모델 추가
1. `data.js`의 해당 카테고리(`kr`, `us`, `regime`)에 모델 데이터 추가
2. 페이지 새로고침하여 확인

### 새 프로젝트 추가
1. `data.js`의 `projects` 배열에 프로젝트 데이터 추가
2. 관련 미디어 파일을 `assets/projects/`에 업로드
3. 페이지 새로고침하여 확인

### 스타일 수정
- Tailwind CSS 클래스 사용 권장
- 커스텀 스타일은 `styles.css`에 추가
- 반응형 디자인 고려 (`sm:`, `md:`, `lg:` 접두사 활용)

## 배포

정적 파일 호스팅 서비스에 배포 가능:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

빌드 과정이 필요 없으므로 파일들을 그대로 업로드하면 됩니다.

## 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.