# 🌟 오늘의 명언 - 영감을 주는 지혜

매일 새로운 영감을 주는 명언을 만나보세요. 나만의 명언을 추가하고 친구들과 공유할 수 있는 웹 애플리케이션입니다.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 목차

- [✨ 주요 기능](#-주요-기능)
- [🎨 스크린샷](#-스크린샷)
- [🚀 시작하기](#-시작하기)
- [💡 사용 방법](#-사용-방법)
- [🏗️ 기술 스택](#️-기술-스택)
- [📁 프로젝트 구조](#-프로젝트-구조)
- [♿ 접근성](#-접근성)
- [📱 반응형 디자인](#-반응형-디자인)
- [🌐 브라우저 지원](#-브라우저-지원)
- [📄 라이선스](#-라이선스)

## ✨ 주요 기능

### 🎲 랜덤 명언 생성
- 20개의 엄선된 한국어 명언 제공
- 버튼 클릭으로 새로운 명언 표시
- 부드러운 페이드 인/아웃 애니메이션

### 📝 나만의 명언 추가
- 커스텀 명언과 저자 추가 가능
- **localStorage**에 자동 저장
- 유효성 검사 (최대 300자)
- 추가한 명언 목록 관리

### 📋 클립보드 복사
- 원클릭으로 명언 복사
- 최신 Clipboard API 지원
- 레거시 브라우저 대체 방법 포함

### 🔗 명언 공유
- **웹 공유 API** 지원 (모바일 최적화)
- 트위터 공유 대체 기능
- 다양한 플랫폼으로 공유 가능

### 🌓 라이트/다크 테마
- **테마 토글 버튼** (우측 상단)
- 시스템 설정 자동 감지
- 사용자 설정 localStorage 저장
- 부드러운 색상 전환 애니메이션

### 🗑️ 명언 삭제
- 추가한 명언 개별 삭제
- 확인 대화상자로 실수 방지
- 즉시 목록 업데이트

## 🎨 스크린샷

### 라이트 모드
```
┌─────────────────────────────────┐
│         [☀️] 테마 버튼           │
│                                 │
│  "삶이 있는 한 희망은 있다."      │
│  — 키케로                       │
│                                 │
│  [🔄 다음 명언] [📋 복사] [🔗 공유] │
└─────────────────────────────────┘
```

### 다크 모드
```
┌─────────────────────────────────┐
│         [🌙] 테마 버튼           │
│  (어두운 배경)                   │
│  "행복은 습관이다."              │
│  — 허버드                       │
│                                 │
│  [🔄 다음 명언] [📋 복사] [🔗 공유] │
└─────────────────────────────────┘
```

## 🚀 시작하기

### 필요 조건
- 최신 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 서버 (선택사항, 권장)

### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/yourusername/wisdom-quotes.git
cd wisdom-quotes
```

2. **브라우저에서 열기**
```bash
# 직접 열기
open index.html

# 또는 Live Server 사용 (VS Code)
# Live Server 확장 프로그램 설치 후 index.html 우클릭 → "Open with Live Server"
```

3. **Python 간단 서버 (선택사항)**
```bash
# Python 3
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

## 💡 사용 방법

### 명언 보기
1. 페이지를 열면 자동으로 랜덤 명언이 표시됩니다
2. **"🔄 다음 명언"** 버튼을 클릭하여 새로운 명언을 확인하세요

### 명언 복사하기
1. **"📋 복사"** 버튼 클릭
2. 클립보드에 자동으로 복사됩니다
3. 성공 메시지가 표시됩니다

### 명언 공유하기
1. **"🔗 공유"** 버튼 클릭
2. 모바일: 시스템 공유 시트 표시
3. 데스크톱: 트위터 공유 창 열림

### 나만의 명언 추가하기
1. 아래로 스크롤하여 **"나만의 명언 추가하기"** 섹션 찾기
2. 명언과 저자명 입력
3. **"➕ 명언 추가"** 버튼 클릭
4. 목록에서 확인

### 명언 삭제하기
1. **"내가 추가한 명언 목록"**에서 삭제할 명언 찾기
2. **"🗑️ 삭제"** 버튼 클릭
3. 확인 대화상자에서 "확인" 클릭

### 테마 변경하기
1. 우측 상단 **🌙/☀️ 버튼** 클릭
2. 라이트/다크 테마 즉시 전환
3. 설정이 자동으로 저장됩니다

## 🏗️ 기술 스택

### 프론트엔드
- **HTML5**: 시맨틱 마크업, ARIA 속성
- **CSS3**: CSS Variables, Flexbox, Grid, 애니메이션
- **Vanilla JavaScript**: ES6+, 모듈 패턴

### 주요 API
- **localStorage API**: 데이터 영구 저장
- **Clipboard API**: 텍스트 복사
- **Web Share API**: 네이티브 공유
- **matchMedia API**: 시스템 테마 감지

### 디자인 패턴
- 모바일 퍼스트 (Mobile-First)
- 프로그레시브 인핸스먼트 (Progressive Enhancement)
- CSS 커스텀 프로퍼티 활용
- BEM 방법론 영감

## 📁 프로젝트 구조

```
wisdom-quotes/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트 (반응형, 테마)
├── app.js              # JavaScript 로직
└── README.md           # 프로젝트 문서
```

### 파일 설명

#### `index.html` (139줄)
- 시맨틱 HTML 구조
- ARIA 레이블 및 접근성 속성
- 명언 카드, 폼, 목록 UI

#### `style.css` (653줄)
- CSS Variables (Light/Dark 테마)
- 반응형 레이아웃 (모바일, 태블릿, 데스크톱)
- 애니메이션 (fadeIn, slideIn)
- 접근성 (reduced-motion, high-contrast)
- 프린트 스타일

#### `app.js` (522줄)
- 20개 기본 명언 배열
- localStorage CRUD 로직
- 랜덤 명언 선택 알고리즘
- 클립보드 복사/공유 기능
- 테마 토글 로직
- 이벤트 리스너 관리

## ♿ 접근성

### WCAG 2.1 준수
- **AA 등급** 이상 목표
- **Lighthouse 접근성 점수 90+**

### 접근성 특징
- ✅ 시맨틱 HTML 태그 사용
- ✅ ARIA 레이블 및 역할 (aria-label, role)
- ✅ 키보드 내비게이션 (Tab, Enter, Space)
- ✅ 포커스 표시 (outline)
- ✅ 스크린리더 지원 (aria-live)
- ✅ 색상 대비 (WCAG AA+)
- ✅ Reduced Motion 지원
- ✅ High Contrast 모드

### 키보드 단축키
| 키 | 동작 |
|---|---|
| `Tab` | 다음 요소로 이동 |
| `Shift + Tab` | 이전 요소로 이동 |
| `Enter` / `Space` | 버튼 클릭 |
| `Esc` | 대화상자 닫기 |

## 📱 반응형 디자인

### 브레이크포인트
```css
/* 모바일 (기본) */
0px ~ 767px

/* 태블릿 */
768px ~ 1023px

/* 데스크톱 */
1024px+
```

### 반응형 특징
- **모바일 퍼스트**: 작은 화면 우선 설계
- **유연한 레이아웃**: Flexbox 활용
- **터치 친화적**: 버튼 크기 충분
- **가독성**: 폰트 크기 자동 조정

### 테스트된 디바이스
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari, Edge)

## 🌐 브라우저 지원

### 완전 지원
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 부분 지원 (폴백 제공)
- ⚠️ Chrome 60-89 (Clipboard API 제한)
- ⚠️ Safari 12-13 (Web Share API 제한)

### 폴백 기능
- **Clipboard API 미지원**: `document.execCommand('copy')` 사용
- **Web Share API 미지원**: 트위터 공유 링크 제공

## 🧪 테스트

### Lighthouse 점수 (목표)
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

### 테스트 방법
```bash
# Chrome DevTools
1. F12 (개발자 도구 열기)
2. Lighthouse 탭
3. "Generate report" 클릭
```

## 🎯 주요 개선사항

### v1.0 (현재)
- ✅ 20개 기본 명언
- ✅ 커스텀 명언 추가/삭제
- ✅ localStorage 저장
- ✅ 클립보드 복사
- ✅ 웹 공유 API
- ✅ 라이트/다크 테마
- ✅ 반응형 디자인
- ✅ 접근성 준수

### 향후 계획 (v2.0)
- [ ] 카테고리별 명언 (동기부여, 사랑, 성공 등)
- [ ] 명언 검색 기능
- [ ] 즐겨찾기 기능
- [ ] 명언 공유 이미지 생성
- [ ] 다국어 지원 (영어, 일본어)
- [ ] PWA (Progressive Web App) 변환
- [ ] 명언 API 연동

## 📚 코드 구조

### JavaScript 모듈
```javascript
// 명언 데이터
DEFAULT_QUOTES (20개 명언)

// 상태 관리
allQuotes, currentQuote

// 유틸리티
getRandomQuote(), showFeedback(), displayQuote()

// localStorage
loadCustomQuotes(), saveCustomQuotes()

// 명언 관리
addCustomQuote(), deleteCustomQuote(), renderCustomQuotes()

// 복사/공유
copyToClipboard(), shareQuote(), fallbackToTwitterShare()

// 테마 관리
getCurrentTheme(), applyTheme(), toggleTheme()

// 초기화
init()
```

### CSS 변수
```css
/* 색상 */
--color-bg, --color-surface, --color-text
--color-primary, --color-secondary
--color-success, --color-danger

/* 간격 */
--spacing-xs, --spacing-sm, --spacing-md, --spacing-lg

/* 타이포그래피 */
--font-size-sm, --font-size-base, --font-size-xl

/* 애니메이션 */
--transition-fast, --transition-normal
```

## 🤝 기여하기

이 프로젝트는 바이브코딩 입문자를 위한 학습 자료입니다.

### 개선 제안
1. **Issue** 생성
2. **Fork** 저장소
3. **Pull Request** 제출

### 코딩 스타일
- ES6+ 문법 사용
- 함수명: camelCase
- 주석: JSDoc 형식
- CSS: BEM 방법론 참고

## 📖 학습 포인트

이 프로젝트를 통해 배울 수 있는 내용:

### 초급
- ✅ HTML 시맨틱 태그
- ✅ CSS Flexbox 레이아웃
- ✅ JavaScript 기본 문법
- ✅ DOM 조작
- ✅ 이벤트 리스너

### 중급
- ✅ localStorage API
- ✅ CSS Variables
- ✅ 반응형 디자인
- ✅ 애니메이션
- ✅ 접근성 (ARIA)

### 고급
- ✅ Web APIs (Clipboard, Share)
- ✅ 다크 모드 구현
- ✅ 키보드 접근성
- ✅ 에러 핸들링
- ✅ 폴백 전략

## 🐛 알려진 이슈

현재 알려진 이슈 없음. 문제 발견 시 Issue 생성 부탁드립니다.

## 📝 변경 로그

### v1.0.0 (2025-11-08)
- 🎉 초기 릴리스
- ✨ 20개 한국어 명언 제공
- ✨ 커스텀 명언 추가/삭제
- ✨ 클립보드 복사 기능
- ✨ 웹 공유 API
- ✨ 라이트/다크 테마 토글
- ✨ 완전한 반응형 디자인
- ✨ WCAG 2.1 AA 접근성 준수

## 💬 자주 묻는 질문 (FAQ)

### Q: 명언이 저장되나요?
A: 네! localStorage를 사용하여 브라우저에 저장됩니다. 단, 브라우저 데이터를 삭제하면 함께 삭제됩니다.

### Q: 모바일에서도 작동하나요?
A: 완벽하게 작동합니다! 모바일 퍼스트로 설계되었습니다.

### Q: 오프라인에서 사용 가능한가요?
A: 현재 버전은 온라인 필요 없음. 단, 공유 기능은 인터넷 필요.

### Q: 명언을 몇 개까지 추가할 수 있나요?
A: localStorage 용량 제한(약 5-10MB)까지 추가 가능합니다.

### Q: 다른 언어도 지원하나요?
A: 현재 한국어만 지원. 향후 업데이트 예정입니다.

## 📧 문의

- **개발자**: 바이브코딩 학습자
- **이메일**: your.email@example.com
- **프로젝트**: [GitHub Repository](#)

## 📄 라이선스

MIT License

Copyright (c) 2025 오늘의 명언

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요! ⭐**

Made with ❤️ by 바이브코딩 커뮤니티

[🏠 홈으로](#-오늘의-명언---영감을-주는-지혜) | [📋 기능](#-주요-기능) | [🚀 시작하기](#-시작하기) | [📄 라이선스](#-라이선스)

</div>

