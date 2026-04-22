const i18n = {
  zh: {
    tagline: 'ESG · 數據分析 · 專案協作',
    name: '鄧翰升 TENG HAN SEN',
    headline: '跨足企管、永續研究與資料分析，持續把複雜議題轉成可執行成果。',
    nav: ['自我介紹', '教育背景', '工作經驗', '專案經驗', '獎項競賽', '技能與證照', '最新動態'],
    aboutTitle: '自我介紹',
    aboutBody:
      '您好，我是翰升。具備清晰商業邏輯、極強自學力與跨文化適應力，擅長把政策與數據資訊轉化為決策可用內容。',
    educationTitle: '教育背景',
    experienceTitle: '工作經驗',
    projectsTitle: '專案經驗',
    awardsTitle: '獎項與競賽',
    skillsTitle: '技能與證照',
    newsTitle: '最新動態（可持續新增）',
    addNewsTitle: '新增動態 / 證明資料',
    addNewsHint: '你可以在此新增近期成果。資料會儲存在瀏覽器 localStorage，不需要改程式也可更新。',
    submitNews: '新增',
    backTop: '回到最上方'
  },
  en: {
    tagline: 'ESG · Data · Project Coordination',
    name: 'TENG HAN SEN',
    headline: 'Bridging business, sustainability research, and data analysis into practical outcomes.',
    nav: ['About', 'Education', 'Experience', 'Projects', 'Awards', 'Skills & Certificates', 'Updates'],
    aboutTitle: 'About',
    aboutBody:
      'Hi, I am Han Sen. I am strong in business logic, self-learning, and cross-cultural collaboration. I translate complex policy and data into actionable insights.',
    educationTitle: 'Education',
    experienceTitle: 'Professional Experience',
    projectsTitle: 'Projects',
    awardsTitle: 'Awards & Competitions',
    skillsTitle: 'Skills & Certifications',
    newsTitle: 'Latest Updates (Continuously Expandable)',
    addNewsTitle: 'Add Update / Evidence',
    addNewsHint: 'Add your latest achievements here. Data is saved in browser localStorage.',
    submitNews: 'Add',
    backTop: 'Back to top'
  }
};

const profile = {
  education: [
    {
      title: 'National Chengchi University — MBA',
      zhTitle: '國立政治大學｜企業管理研究所（MBA）',
      meta: 'Sep 2025 – Jun 2027'
    },
    {
      title: 'Tzu Chi University — BBA (GPA 4.00)',
      zhTitle: '慈濟大學｜經營管理學系（GPA 4.00）',
      meta: 'Sep 2021 – Jun 2025'
    }
  ],
  experience: [
    {
      title: 'Taiwan Institute of Economic Research — ESG Research Intern',
      zhTitle: '台灣經濟研究院｜永續與環境研究室實習生',
      meta: 'Jul 2025 – Present',
      bullets: [
        'Benchmarked VNR practices from 50+ countries against SDGs.',
        'Reviewed Taiwan disclosures with ISSB S1/S2 and TCFD frameworks.',
        'Supported utility/energy sustainability cases and workshop materials.'
      ],
      zhBullets: ['比較 50+ 國家 VNR 與 SDGs 實務。', '檢視企業揭露與 ISSB S1/S2、TCFD 對齊程度。', '支援能源與公用事業案例 KPI 彙整與簡報製作。']
    },
    {
      title: 'Jueyang Co., Ltd. — SD Intern',
      zhTitle: '覺揚股份有限公司｜服務推廣部（SD）實習',
      meta: 'Jul 2024 – Jun 2025',
      bullets: [
        'Coordinated project tracking with team leads.',
        'Compiled service data and generated management progress reports.'
      ],
      zhBullets: ['協助專案追蹤與跨部門協調。', '彙整服務數據並定期產出管理報告。']
    }
  ],
  projects: [
    {
      title: 'Solar-Thermal × BSF Food-Waste Upcycling (Project Lead)',
      zhTitle: '綠色能源整合黑水虻廚餘去化專案（組長）',
      meta: 'Sep 2022 – Present',
      bullets: [
        'Built and validated a solar-thermal + BSF upcycling workflow.',
        'Created a practical BSF model for schools/leisure farms.',
        'NSTC undergraduate grant approved (2024); energy competition honorable mention (2024).'
      ],
      zhBullets: ['建立並驗證太陽能熱乾燥與黑水虻轉化流程。', '發展可供校園與農場落地的飼養模型。', '獲國科會補助與全國永續能源競賽佳作。']
    }
  ],
  awards: [
    'Selected Team, Youth Linking Industry Local Special Project (2025)',
    'Champion, Mobile Communications Practice Competition (2024)',
    'Silver Award, National Business Management Competition (2024)',
    'Selected Team, MOE Entrepreneurship Simulation Platform (2024)'
  ],
  zhAwards: [
    '青年鏈結地方產業專題補助入選（2025）',
    '行動通訊實務競賽冠軍（2024）',
    '全國經營管理專題競賽銀牌（2024）',
    '教育部創業模擬平台入選（2024）'
  ],
  skills: {
    zh: [
      '語言：中文（母語）、英文（中等）、馬來文（日常對話）',
      '工具：Excel（含基本 VBA）、PowerPoint、Word、Canva、ChatGPT、基本 Python',
      '證照：ISO 14064-1、TBSA、PMA、PVQC'
    ],
    en: [
      'Languages: Mandarin (Native), English (Intermediate), Malay (Conversational)',
      'Tools: Excel (basic VBA), PowerPoint, Word, Canva, ChatGPT, basic Python',
      'Certificates: ISO 14064-1, TBSA, PMA, PVQC'
    ]
  }
};

const defaultNews = [
  {
    date: '2026-04-15',
    title: 'Updated internship achievements',
    detail: 'Added ESG policy tracking and sustainability workshop support results.'
  }
];

const sections = ['about', 'education', 'experience', 'projects', 'awards', 'skills', 'news'];
let lang = localStorage.getItem('lang') || 'zh';

function getNews() {
  const userNews = JSON.parse(localStorage.getItem('news') || '[]');
  return [...userNews, ...defaultNews].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function renderNav() {
  const nav = document.getElementById('nav-links');
  nav.innerHTML = '';
  sections.forEach((id, index) => {
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = i18n[lang].nav[index];
    nav.appendChild(a);
  });
}

function renderList(sectionId, title, items) {
  const section = document.getElementById(sectionId);
  section.innerHTML = `<h2>${title}</h2>${items
    .map(
      (item) => `<div class="item"><strong>${item.title}</strong><div class="meta">${item.meta}</div></div>`
    )
    .join('')}`;
}

function render() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = i18n[lang][el.dataset.i18n] || el.textContent;
  });

  renderNav();

  document.getElementById('about').innerHTML = `<h2>${i18n[lang].aboutTitle}</h2><p>${i18n[lang].aboutBody}</p>`;

  renderList(
    'education',
    i18n[lang].educationTitle,
    profile.education.map((x) => ({ title: lang === 'zh' ? x.zhTitle : x.title, meta: x.meta }))
  );

  const expItems = profile.experience
    .map((x) => {
      const bullets = lang === 'zh' ? x.zhBullets : x.bullets;
      return `<div class="item"><strong>${lang === 'zh' ? x.zhTitle : x.title}</strong><div class="meta">${x.meta}</div><ul>${bullets
        .map((b) => `<li>${b}</li>`)
        .join('')}</ul></div>`;
    })
    .join('');
  document.getElementById('experience').innerHTML = `<h2>${i18n[lang].experienceTitle}</h2>${expItems}`;

  const projectItems = profile.projects
    .map((x) => {
      const bullets = lang === 'zh' ? x.zhBullets : x.bullets;
      return `<div class="item"><strong>${lang === 'zh' ? x.zhTitle : x.title}</strong><div class="meta">${x.meta}</div><ul>${bullets
        .map((b) => `<li>${b}</li>`)
        .join('')}</ul></div>`;
    })
    .join('');
  document.getElementById('projects').innerHTML = `<h2>${i18n[lang].projectsTitle}</h2>${projectItems}`;

  const awards = (lang === 'zh' ? profile.zhAwards : profile.awards).map((x) => `<li>${x}</li>`).join('');
  document.getElementById('awards').innerHTML = `<h2>${i18n[lang].awardsTitle}</h2><ul>${awards}</ul>`;

  const skillItems = profile.skills[lang].map((x) => `<li>${x}</li>`).join('');
  document.getElementById('skills').innerHTML = `<h2>${i18n[lang].skillsTitle}</h2><ul>${skillItems}</ul>`;

  const newsItems = getNews()
    .map((n) => `<div class="item"><strong>${n.title}</strong><div class="meta">${n.date}</div><p>${n.detail}</p></div>`)
    .join('');
  document.getElementById('news').innerHTML = `<h2>${i18n[lang].newsTitle}</h2>${newsItems}`;

  document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

document.getElementById('lang-zh').addEventListener('click', () => {
  lang = 'zh';
  localStorage.setItem('lang', lang);
  render();
});

document.getElementById('lang-en').addEventListener('click', () => {
  lang = 'en';
  localStorage.setItem('lang', lang);
  render();
});

document.getElementById('news-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('news-date').value.trim();
  const title = document.getElementById('news-title').value.trim();
  const detail = document.getElementById('news-detail').value.trim();
  const userNews = JSON.parse(localStorage.getItem('news') || '[]');
  userNews.unshift({ date, title, detail });
  localStorage.setItem('news', JSON.stringify(userNews));
  e.target.reset();
  render();
});

render();
