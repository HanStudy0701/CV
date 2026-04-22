const i18n = {
  zh: {
    tagline: 'ESG · 數據分析 · 專案協作',
    name: '鄧翰升 TENG HAN SEN',
    headline: '跨足企管幕僚策略、永續 ESG 研究與商業數據分析，持續把複雜議題轉成可執行成果。',
    nav: ['自我介紹', '教育背景', '工作經驗', '專案經驗', '獎項競賽', '技能與證照', '最新動態'],
    aboutTitle: '自我介紹',
    aboutBody:
      '您好，我是翰升，馬來西亞籍，目前就讀政大 MBA 並於台經院永續與環境研究室實習。具備清晰商業邏輯、強自學力與跨文化適應力，做事習慣化繁為簡。擅長將政策法規、營運數據與專案流程整合成可落地的策略，包含：永續專案主導（黑水虻廚餘循環專案獲國科會補助）、產業政策研究（SDG/GRI/TNFD/ISSB 等框架）與商業數據管理（利用生成式 AI 與數位工具提升協作效率）。',
    educationTitle: '教育背景',
    experienceTitle: '工作經驗',
    projectsTitle: '專案經驗',
    awardsTitle: '獎項與競賽',
    skillsTitle: '技能與證照',
    newsTitle: '最新動態（可持續新增）',
    addNewsTitle: '新增動態 / 證明資料',
    addNewsHint: '你可以在此新增近期成果。資料會儲存在瀏覽器 localStorage，不需要改程式也可更新。',
    submitNews: '新增',
  },
  en: {
    tagline: 'ESG · Data · Project Coordination',
    name: 'TENG HAN SEN',
    headline: 'Bridging business strategy, ESG research, and analytics into practical outputs.',
    nav: ['About', 'Education', 'Experience', 'Projects', 'Awards', 'Skills & Certificates', 'Updates'],
    aboutTitle: 'About',
    aboutBody:
      'Hi, I am Han Sen from Malaysia. I am currently an MBA student at NCCU and an ESG research intern at TIER. I focus on simplifying complexity: turning policy, operational data, and project workflows into actionable outputs. My strengths include sustainability project leadership (NSTC-funded BSF circular project), policy research (SDG/GRI/TNFD/ISSB), and data-supported project execution with GenAI-enabled productivity.',
    educationTitle: 'Education',
    experienceTitle: 'Professional Experience',
    projectsTitle: 'Projects',
    awardsTitle: 'Awards & Competitions',
    skillsTitle: 'Skills & Certifications',
    newsTitle: 'Latest Updates (Continuously Expandable)',
    addNewsTitle: 'Add Update / Evidence',
    addNewsHint: 'Add your latest achievements here. Data is saved in browser localStorage.',
    submitNews: 'Add',
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
      title: 'Tzu Chi University — Bachelor of Business Administration (GPA 4.00/4.00)',
      zhTitle: '慈濟大學｜經營管理學系（GPA 4.00/4.00）',
      meta: '2021/10 – 2025/06'
    }
  ],
  experience: [
    {
      title: 'Taiwan Institute of Economic Research — ESG & Environmental Research Intern',
      zhTitle: '財團法人台灣經濟研究院｜永續與環境研究室實習生',
      meta: '2025/07 – Present · Taipei',
      bullets: [
        'Track and synthesize SDG, GRI, TNFD, ISSB S1/S2, and TCFD updates into analyst-ready insights.',
        'Benchmark 50+ countries’ VNR practices and map implications for Taiwan sustainability practices.',
        'Support energy/utility case reviews (e.g., Taipower/CPC/TCC) by extracting KPI evidence and compliance points.',
        'Assist cross-unit coordination for national sustainability award review workflows and workshop materials.'
      ],
      zhBullets: [
        '持續追蹤 SDG、GRI、TNFD、ISSB S1/S2、TCFD 等國際框架，整理為研究可用素材。',
        '比較 50+ 國家 VNR 實務並萃取對台灣企業永續揭露的關鍵啟示。',
        '支援台電、中油、台泥等能源案例資料彙整，抽取 KPI 與法遵檢核重點。',
        '協助國家永續發展獎審查活動之跨單位流程推進與簡報準備。'
      ]
    },
    {
      title: 'Huizhi Education Association — Marketing Assistant Intern',
      zhTitle: '社團法人慧治教育協會｜行銷助理實習生',
      meta: '2024/07 – 2025/06 · Hualien',
      bullets: [
        'Collected and cleaned back-office operational data; converted findings into visual reports for management.',
        'Worked as project coordinator for task tracking and cross-team execution to ensure on-time delivery.',
        'Maintained and optimized website content/layout and supported platform operations.',
        'Supported online events and livestream control with quick issue response.'
      ],
      zhBullets: [
        '負責後台營運數據彙整與分析，轉化為管理層可用的視覺化簡報。',
        '擔任專案協作角色，追蹤進度與跨部門溝通，確保任務如期交付。',
        '協助網站內容維護、排版優化與日常平台營運。',
        '支援線上活動與直播控台，具備現場應變與問題處理能力。'
      ]
    }
  ],
  projects: [
    {
      title: 'Solar-Thermal × Black Soldier Fly (BSF) Food-Waste Upcycling — Project Lead',
      zhTitle: '綠色能源整合黑水虻廚餘去化專案｜專案組長',
      meta: '2022/09 – Present',
      bullets: [
        'Led a cross-disciplinary student team to design an integrated process combining solar-thermal drying and BSF larvae for kitchen-waste upcycling.',
        'Planned and executed pilot validation, including parameter tracking, process stability checks, and conversion efficiency comparison.',
        'Built a practical deployment model for schools and leisure farms, with simulation outputs for cost-benefit planning and scaling scenarios.',
        'Converted technical experiments into business-facing pitches and served as lead presenter in national competitions.',
        'Research outputs included two conference papers; project received NSTC Undergraduate Research Program grant support.'
      ],
      zhBullets: [
        '主導跨領域團隊，設計「太陽能熱處理 × 黑水虻」廚餘去化整合流程，兼顧減廢與價值化。',
        '規劃並執行小規模驗證，追蹤關鍵養殖參數、去化效率與流程穩定性。',
        '建立可供大專校園與休閒農場導入的實作模型，並產出成本效益與規模化模擬結果。',
        '將技術成果轉譯為商業提案，擔任多場全國競賽首席簡報人。',
        '完成兩篇研討會論文，並獲國科會大專生研究計畫補助。'
      ]
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
    'Selected Team, Youth Linking Industry Local Special Project Achievement Subsidy Program (2025)',
    'Champion, Mobile Communications Practice Competition — Smart Energy & IoT Applications (2024)',
    'Silver Award, National Business Management Thematic Competition — Management Group (2024)',
    'Selected Team, MOE University Entrepreneurship Simulation Learning Platform (2024)',
    'Semifinalist, Youth Public Practice Plan (Asia-Pacific) (2023)',
    'Selected Team, Youth Public Practice Plan (Asia-Pacific) (2022)',
    'Shortlisted, Hualien County HSH Innovation & Entrepreneurship Competition (2023)',
    'Honorable Mention, Taiwan Energy Sustainable Creative Implementation Competition (Net-Zero Emissions) (2024)',
    'Approved Grant, NSTC Undergraduate Student Research Program (2024)'
  ],
  zhAwards: [
    '青年鏈結地方產業專題成果補助計畫｜入選團隊（2025）',
    '行動通訊實務競賽－智慧能源與 IoT 應用｜冠軍（2024）',
    '全國經營管理主題式競賽－管理組｜銀牌（2024）',
    '教育部大專校院創業實戰模擬學習平台｜入選團隊（2024）',
    '青年公共參與實踐計畫（亞太）｜準決賽（2023）',
    '青年公共參與實踐計畫（亞太）｜入選團隊（2022）',
    '花蓮縣 HSH 創新創業競賽｜入圍（2023）',
    '台灣能－永續創意實作競賽（淨零排放）｜佳作（2024）',
    '國科會大專生研究計畫｜核定補助（2024）'
  ],
  skills: {
    zh: [
      '語言：中文（母語）、英文（中等）、馬來文（中等／日常對話）',
      '工具：Excel（含基本 VBA）、PowerPoint、Word、Canva、ChatGPT、Claude Code、基本 Python、Google Analytics、WordPress',
      '證照：ISO 14064-1:2018、TBSA 商務企劃、PMA 專案助理、Sage UBS、PVQC Business & Management（平均 570/600）'
    ],
    en: [
      'Languages: Mandarin (Native), English (Intermediate), Malay (Conversational)',
      'Tools: Excel (basic VBA), PowerPoint, Word, Canva, ChatGPT, Claude Code, basic Python, Google Analytics, WordPress',
      'Certificates: ISO 14064-1:2018, TBSA, PMA, Sage UBS, PVQC Business & Management (avg. 570/600)'
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
