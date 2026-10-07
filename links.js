/* =========================================================
   juuouse 링크 설정 파일
   - 링크 추가/수정은 이 파일만 고치면 됩니다.
   - slug: UTM(utm_campaign)과 GA 이벤트에 쓰이는 영문 이름 (띄어쓰기 X)
   ========================================================= */

window.SITE = {
  // ▼ GA4 측정 ID (Google Analytics > 관리 > 데이터 스트림에서 복사)
  gaId: "G-XXXXXXXXXX",

  // ▼ 바깥으로 나가는 링크에 자동으로 붙는 UTM
  utm: {
    source: "juuouse.com",
    medium: "linkinbio"
    // campaign = 각 링크의 slug, content = mobile / pc 자동
  },

  profile: {
    name: "juuouse",
    bio: "AI 유용한 정보 공유 🪽",
    image: "assets/profile.jpg",   // 이 경로에 프로필 사진을 넣으세요
    fallbackEmoji: "🐰"
  },

  sectionTitle: "🪽 자료 공유 🪽",

  links: [
    {
      slug: "dots",
      title: "컴퓨터 꺼도 일하는 AI 닷츠(dots) 정리",
      emoji: "🥟",
      tag: "AI 소식",
      desc: "24시간 일하는 ChatGPT 에이전트, 시작법·요청문·규칙까지",
      url: "dots/",          // 사이트 안의 글은 이렇게 경로만 적어요
      isNew: true
    },
    {
      slug: "motion-terms",
      title: "AI한테 바로 쓰는 모션 용어",
      emoji: "🐬",
      tag: "디자인",
      desc: "애니메이션·모션을 AI에게 정확히 설명하는 용어 모음",
      url: "https://app.notion.com/p/AI-3ea063ed09fd81cc8121c2ce2e668dd9"
    },
    {
      slug: "vibecoding-start",
      title: "바이브코딩 시작 노트",
      emoji: "🏠",
      tag: "바이브코딩",
      desc: "개발 몰라도 시작할 수 있는 첫걸음 정리",
      url: "https://app.notion.com/p/3d5063ed09fd8056a2bdd507bafb7505"
    },
    {
      slug: "vibecoding-ui-terms",
      title: "바이브코딩 UI 용어 정리본",
      emoji: "🏠",
      tag: "바이브코딩",
      desc: "버튼·모달·레이아웃 등 웹 UI 이름 사전",
      url: "https://app.notion.com/p/UI-3d6063ed09fd80ec8b5ef9784079694e"
    },
    {
      slug: "vibecoding-app-ui-terms",
      title: "바이브코딩 어플 UI 용어 정리본",
      emoji: "🏠",
      tag: "바이브코딩",
      desc: "모바일 앱 화면 요소를 부르는 정확한 이름",
      url: "https://app.notion.com/p/UI-3dd063ed09fd80a285b0f4d8e8f0d2ed"
    },
    {
      slug: "ppt-prompts",
      title: "PPT 프롬프트 & 디자인 용어 모음",
      emoji: "💻",
      tag: "프롬프트",
      desc: "AI로 발표자료 만들 때 바로 쓰는 프롬프트",
      url: "https://app.notion.com/p/PPT-3db063ed09fd8141aa19cf86e63f0af2"
    },
    {
      slug: "ai-code-collection",
      title: "AI 코드 모음집 용도별 · 산업별 · 직무별",
      emoji: "🔑",
      tag: "프롬프트",
      desc: "상황별로 골라 쓰는 AI 활용 코드 아카이브",
      url: "https://app.notion.com/p/AI-3df063ed09fd814bba9bd44391df548f"
    }
  ],

  // SNS 아이콘 (안 쓰면 url을 "" 로 두면 숨김)
  socials: [
    { name: "Instagram", icon: "ig", url: "https://instagram.com/juuouse" },
    { name: "Threads", icon: "threads", url: "" },
    { name: "Email", icon: "mail", url: "" }
  ]
};
