# 백재인 · 이력서 웹사이트

6년차 웹 개발자 **백재인**의 온라인 이력서입니다.
👉 **[BaekJaeIn.github.io](https://BaekJaeIn.github.io)**

현재 한진정보통신에서 대한항공 홈페이지 운영팀의 일원으로, 컨텐츠 영역의 운영과 개선을 담당하고 있습니다.

---

## ✨ 특징

- **탭 기반 UI** — About · Projects · Experience · Education · Certificate를 탭으로 분리
- **반응형 디자인** — 데스크톱 / 태블릿 / 모바일 대응
- **다크 모드** — 시스템 설정 자동 감지 + 토글 (선택값 localStorage 저장)
- **빌드 불필요** — 순수 정적 사이트, GitHub Pages에서 바로 동작

## 🛠 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| Markup | HTML5 (시맨틱 마크업) |
| Style | CSS3 (Custom Properties, Grid, Flexbox) |
| Script | Vanilla JavaScript (의존성 없음) |
| Font | [Pretendard](https://github.com/orioncactus/pretendard) |
| Hosting | GitHub Pages |

> 기존 Jekyll(`sproogen/resume-theme`) 기반에서 빌드가 필요 없는 순수 정적 사이트로 전면 개편했습니다.

## 📁 구조

```
.
├── index.html              # 전체 콘텐츠 (시맨틱 마크업)
├── assets/
│   ├── css/style.css       # 테마 · 레이아웃 · 반응형
│   └── js/main.js          # 탭 · 다크모드 · 인터랙션
├── images/                 # 프로필 이미지 · 파비콘
└── .nojekyll               # GitHub Pages Jekyll 처리 비활성화
```

## 🚀 로컬에서 보기

별도 빌드 과정이 없습니다. 정적 서버로 띄우기만 하면 됩니다.

```bash
# Python
python -m http.server 8000

# 또는 Node
npx serve
```

브라우저에서 `http://localhost:8000` 접속.

## ✏️ 내용 수정

이력 내용은 모두 [`index.html`](index.html)에 작성되어 있습니다.
각 섹션(`<section class="panel">`)을 직접 편집하면 됩니다.
