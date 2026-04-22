const i18n = {
  zh: {
    tagline: 'Portfolio',
    name: 'HS',
    headline: 'TENG HAN SEN｜跨足企管幕僚策略、永續 ESG 研究與商業數據分析。',
    nav: ['自我介紹', '教育背景', '工作經驗', '專案經驗', '獎項競賽', '技能與證照', '最新動態'],
    aboutTitle: '自我介紹',
    aboutBody:
      '您好，我是翰升，馬來西亞籍，目前就讀政大 MBA 並於台灣經濟研究院實習。具備清晰商業邏輯、強自學力與跨文化適應力，擅長將政策法規、營運數據與專案流程整合成可落地成果。',
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
    tagline: 'Portfolio',
    name: 'HS',
    headline: 'TENG HAN SEN | Business strategy, ESG research, and data execution.',
    nav: ['About', 'Education', 'Experience', 'Projects', 'Awards', 'Skills & Certificates', 'Updates'],
    aboutTitle: 'About',
    aboutBody:
      'Hi, I am Han Sen from Malaysia. I am currently an MBA student at NCCU and an intern at TIER. I focus on turning policy, data, and project workflows into practical outputs.',
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
      title: 'National Chengchi University — Master of Business Administration (MBA)',
      zhTitle: '國立政治大學｜企業管理研究所（MBA 學位學程）',
      meta: '2025/08 – 2027/06'
    },
    {
      title: 'Tzu Chi University — Bachelor of Business Administration (GPA 4.0/4.0)',
      zhTitle: '慈濟大學｜經營管理學系（GPA 4.0/4.0）',
      meta: '2021/10 – 2025/06'
    }
  ],
  experience: [
    {
      title: 'Taiwan Institute of Economic Research — ESG & Environmental Lab Intern',
      zhTitle: '台灣經濟研究院（五所）｜實習生',
      meta: '2025/07 – Present',
      bullets: [
        'Track SDG/GRI/TNFD/ISSB/TCFD updates and extract practical implications.',
        'Benchmark 50+ countries’ VNR practices and support Taiwan disclosure analysis.',
        'Support energy/utility case KPI validation and workshop slide preparation.'
      ],
      zhBullets: ['追蹤 SDG、GRI、TNFD、ISSB、TCFD 等框架並整理重點。', '比較 50+ 國家 VNR 實務並支援揭露分析。', '支援能源案例 KPI 彙整與簡報製作。']
    },
    {
      title: 'Huizhi Education Association — Marketing Assistant Intern',
      zhTitle: '社團法人慧治教育協會｜行銷助理實習生',
      meta: '2024/07 – 2025/06',
      bullets: [
        'Collected operational data and converted it into visual reports for management.',
        'Coordinated project tasks and cross-functional collaboration.',
        'Maintained website content and supported livestream operations.'
      ],
      zhBullets: ['負責營運數據彙整並轉化為視覺化報告。', '協助專案追蹤與跨部門協作。', '維護網站內容並支援線上活動控台。']
    }
  ],
  projects: [
    {
      title: 'Black Soldier Fly Integrated Green-Energy Food-Waste Treatment Project (School Team)',
      zhTitle: '黑水虻整合綠色能源去化廚餘專案（學校團隊）｜團隊隊長',
      meta: '2022/09 – Present',
      bullets: [
        'Led a school team to integrate solar-thermal processing with BSF food-waste treatment.',
        'Validated process parameters and developed scale-up simulation inputs.',
        'Produced conference outputs and competition-ready project pitching materials.'
      ],
      zhBullets: ['帶領學校團隊整合太陽能熱處理與黑水虻廚餘去化流程。', '驗證流程參數並建立可規模化模擬輸入。', '完成研討會產出與競賽簡報成果。']
    },
    {
      title: 'Vibe Coding Practice Website (In Ongoing Testing)',
      zhTitle: '基礎 Vibe Coding 練習網站（持續測試中）',
      meta: '2026 – Present',
      bullets: [
        'Built a basic live practice website to validate rapid ideation and front-end delivery workflows.',
        'Current testing demo: <a href="https://www.computex.com.my/" target="_blank" rel="noopener noreferrer">https://www.computex.com.my/</a>.',
        'Continuously iterating information architecture and interaction details based on testing feedback.'
      ],
      zhBullets: [
        '建立基礎實作站點，驗證從構想到前端落地的快速開發流程。',
        '目前測試成果連結：<a href="https://www.computex.com.my/" target="_blank" rel="noopener noreferrer">https://www.computex.com.my/</a>。',
        '持續依測試回饋調整資訊架構與互動細節。'
      ]
    }
  ],
  awards: [
    'Selected Team, Youth Linking Industry Local Special Project Achievement Subsidy Program｜2025',
    'Champion, Mobile Communications Practice Competition — Smart Energy & IoT Applications｜2024',
    'Silver Award, National Business Management Thematic Competition — Management Group｜2024',
    'Selected Team, MOE University Entrepreneurship Simulation Learning Platform｜2024',
    'Semifinalist, Youth Public Practice Plan (Asia-Pacific)｜2023',
    'Selected Team, Youth Public Practice Plan (Asia-Pacific)｜2022',
    'Shortlisted, Hualien County HSH Innovation & Entrepreneurship Competition｜2023',
    'Honorable Mention, Taiwan Energy Sustainable Creative Implementation Competition (Net-Zero Emissions)｜2024',
    'Approved Grant, NSTC Undergraduate Student Research Program｜2024'
  ],
  zhAwards: [
    '青年鏈結地方產業專題成果補助計畫｜2025',
    '行動通訊實務競賽－智慧能源與 IoT 應用｜2024',
    '全國經營管理主題式競賽－管理組｜2024',
    '教育部大專校院創業實戰模擬學習平台｜2024',
    '青年公共參與實踐計畫（亞太）準決賽｜2023',
    '青年公共參與實踐計畫（亞太）入選團隊｜2022',
    '花蓮縣 HSH 創新創業競賽｜2023',
    '台灣能－永續創意實作競賽（淨零排放）｜2024',
    '國科會大專生研究計畫核定補助｜2024'
  ],
  skills: {
    zh: [
      '語文能力：中文（聽/精通 說/精通 讀/精通 寫/精通）；英文（聽/中等 說/中等 讀/中等 寫/中等）；馬來文（聽/中等 說/中等 讀/中等 寫/中等）',
      '專長（Microsoft Office）：#文件或資料輸入建檔處理 #文書處理╱排版能力 #文件收發與檔案管理 #行政事務處理 #Word #Excel #PowerPoint #VBA',
      '專長（Adobe）：#基礎多媒體影像處理 #Adobe InDesign #Illustrator #Premiere',
      '證照：ACP InDesign 2020、PMA 專案助理、TBSA 商務企劃能力初級檢定、ISO 14064-1'
    ],
    en: [
      'Languages: Chinese (L/S/R/W Fluent), English (L/S/R/W Intermediate), Malay (L/S/R/W Intermediate)',
      'Microsoft Office: document input/archiving, document formatting, file management, administration, Word/Excel/PowerPoint/VBA',
      'Adobe: basic multimedia processing, InDesign, Illustrator, Premiere',
      'Certifications: ACP InDesign 2020, PMA, TBSA Basic Business Planning, ISO 14064-1'
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
    .map((item) => `<div class="item"><strong>${item.title}</strong><div class="meta">${item.meta}</div></div>`)
    .join('')}`;
}

function render() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = i18n[lang][el.dataset.i18n] || el.textContent;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (i18n[lang][key]) el.setAttribute('aria-label', i18n[lang][key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (i18n[lang][key]) el.setAttribute('title', i18n[lang][key]);
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
