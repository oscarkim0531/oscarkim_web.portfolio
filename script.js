const TEORO_ASSET_ROOT = "./2026_Branding_터로(TEORO)";

const projects = [
  {
    id: "cancellation-terms",
    title: "Cancellation Terms",
    subtitle: "무심코 통과한 약관의 무게",
    year: "2026",
    type: "School Project",
    categories: ["graphic", "typography", "editorial"],
    categoryLabel: "Graphic, Typography, Editorial",
    cover: {
      src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-06-flipbook-object.png",
      alt: "",
      position: "50% 4%"
    },
    hero: {
      src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-06-flipbook-object.png",
      alt: "검은 천 위에 놓인 흰색 Cancellation Terms 플립북의 표지와 펼친 내지",
      position: "50% 4%"
    },
    description: [
      "디지털 환경에서 ‘해지하기’라는 목적을 위해 우리는 수많은 약관을 무심코 통과합니다. 이 프로젝트는 약관을 정보가 아닌 통과해야 할 장애물로 치부하는 소비자의 맹목적인 태도를 다룹니다. 웹사이트(Prompt B)와 하드카피(Prompt C)를 통해, 무관심 속에 방치된 텍스트들이 어떻게 파편화된 데이터로 변질되는지, 그리고 그 정보의 누적이 결국 어떻게 사용자를 압도하는 ‘맹점’이 되어 돌아오는지를 탐구했습니다.",
      "우리가 등한시한 약관의 문장들은 사라지는 것이 아니라, 데이터 덩어리가 되어 시스템을 가득 채우게 됩니다. 이 작업은 휘발되는 디지털 정보를 플립북이라는 물리적 물성으로 표현함으로써, 외면했던 정보의 무게를 사용자가 손끝으로 감각하게 만드는 과정입니다. 시스템이 유도한 인지적 맹점을 마주하고, 그 속에 숨겨진 언어들을 나타냅니다."
    ],
    descriptionEn: "Cancellation Terms examines how users pass through cancellation policies without reading them, treating the text as a barrier rather than information. Across an interactive website and a physical flipbook, overlooked clauses fragment and accumulate into an overwhelming blind spot, making the weight of ignored language both visible and tactile.",
    facts: [
      { label: "Format", value: "Interactive Website, Flipbook, Moving Image" },
      { label: "Course", value: "Research Design Studio (1)" },
      { label: "Institution", value: "Hongik University" },
      { label: "Advisor", value: "Prof. Yuseon Park" }
    ],
    credits: {
      courseKo: "홍익대학교 사회문화적디자인스튜디오(1)",
      courseEn: "Hongik University, ResearchDesignStudio(1)",
      advisor: "prof. Yuseon Park"
    },
    media: [
      {
        type: "image",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-02-research.png",
        alt: "구독 서비스별 해지 약관을 수집하고 문장 구조를 분류한 리서치 스프레드시트",
        section: "Research / 01",
        title: "Terms Archive",
        caption: "구독 서비스별 해지 약관을 수집하고 문장 구조와 반복되는 언어를 조사한 리서치 아카이브."
      },
      {
        type: "image",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-03-website.png",
        alt: "검은 화면 위에 약관의 단어와 이동 경로가 붉은 선으로 연결된 Cancellation Terms 웹사이트",
        section: "Prompt B / 02",
        title: "Trace & Archive",
        caption: "Trace는 사용자가 약관 사이를 이동한 경로를 기록하고, Archive는 그 배경이 된 원문을 드러냅니다."
      },
      {
        type: "image",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-04-interaction.png",
        alt: "긴 약관 문장 위에서 선택된 단어들이 붉은 상자와 연결선으로 분리되는 웹 인터랙션",
        section: "Prompt B / 03",
        title: "Blind Spot",
        caption: "스크롤을 따라 약관의 문장이 단어와 연결 관계로 해체되며 인지적 맹점을 형성하는 인터랙션."
      },
      {
        type: "video",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-video.mp4",
        poster: "./2026_Graphic_Cancellation-Terms/cancellation-terms-01-fragments.png",
        width: 1080,
        height: 1528,
        section: "Moving Image / 04",
        title: "Accumulation",
        caption: "약관의 문장과 데이터 블록이 시간에 따라 누적되고 파편화되는 과정을 기록한 36초 무음 영상."
      },
      {
        type: "image",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-01-fragments.png",
        alt: "약관 문장 위에 붉은 단어 상자와 색상 데이터 블록이 누적되는 세 단계의 그래픽",
        section: "Translation / 05",
        title: "From Text to Data",
        caption: "파편화된 약관의 문장들이 중첩되며 하나의 시각적 맹점을 형성하는 변환 과정."
      },
      {
        type: "image",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-05-flipbook-system.png",
        alt: "법률 기호 표지부터 약관 문장과 색상 블록으로 변하는 플립북의 페이지 시스템",
        section: "Prompt C / 06",
        title: "Flipbook System",
        caption: "디지털 화면에서 축적된 텍스트와 데이터 블록을 페이지의 연속으로 번역한 플립북 시스템."
      },
      {
        type: "image",
        src: "./2026_Graphic_Cancellation-Terms/cancellation-terms-07-flipbook-motion.png",
        alt: "손으로 플립북을 넘기며 약관 텍스트가 붉고 회색인 데이터 블록으로 바뀌는 모습",
        section: "Prompt C / 07",
        title: "Tactile Weight",
        caption: "페이지를 넘길수록 언어의 밀도가 높아지고 끝내 데이터의 덩어리로 변하는 물리적 경험."
      }
    ]
  },
  {
    id: "teoro-branding",
    title: "터로(TEORO)",
    titleLang: "ko",
    year: "2026",
    type: "School Individual Project",
    categories: ["branding"],
    categoryLabel: "Branding",
    detailLayout: "teoro",
    cover: {
      src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-03.webp`,
      alt: "터로의 과테말라 싱글 오리진 커피 패키지와 큐레이션 카드, 구리 드립 포트",
      width: 3200,
      height: 2560,
      position: "50% 50%"
    },
    images: [
      {
        src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-01.webp`,
        alt: "검은 배경 위에 배치된 터로의 세로형과 가로형 로고 시스템",
        width: 3200,
        height: 2560
      },
      {
        src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-02.webp`,
        alt: "원산지 본질의 전달, 정보 전달의 직관성, 원두 로테이션 시스템을 연결한 브랜드 원칙 다이어그램",
        width: 3200,
        height: 2560
      },
      {
        src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-03.webp`,
        alt: "터로의 과테말라 싱글 오리진 커피 패키지와 큐레이션 카드, 구리 드립 포트",
        width: 3200,
        height: 2560
      },
      {
        src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-04.webp`,
        alt: "터로 그래픽이 적용된 커피 컵과 캐리어를 들고 있는 사람",
        width: 3200,
        height: 2560
      },
      {
        src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-05.webp`,
        alt: "과테말라 원산지 정보와 지형 그래픽을 담은 터로 큐레이션 카드의 앞뒷면",
        width: 3200,
        height: 2560
      },
      {
        src: `${TEORO_ASSET_ROOT}/Web-Images/teoro-06.webp`,
        alt: "따뜻한 갈색 톤의 카페 공간에 설치된 터로 Terroir Experience 포스터",
        width: 3200,
        height: 2560
      }
    ],
    statements: [
      {
        ko: [
          "터로(TEORO)는 커피의 맛을 단순한 향미 정보가 아니라, 원두가 자라난 토양과 고도, 기후, 가공 방식이 축적된 결과로 바라보는 스페셜티 카페 브랜드입니다. 블렌딩으로 산지의 개성을 희석하기보다 하나의 싱글 오리진을 온전히 조명하며, 커피 한 잔을 통해 원산지의 환경과 풍미 사이의 관계를 경험하도록 합니다.",
          "브랜드는 원산지 본질의 전달, 정보 전달의 직관성, 원두 로테이션 시스템을 중심으로 운영됩니다. 매달 새로운 산지를 하나의 아카이브 볼륨으로 소개하고, 전문적인 커피 정보를 한글과 시각 언어로 명확하게 전달함으로써 커피를 일회성 소비가 아닌 지속적인 탐구와 취향의 축적으로 확장합니다."
        ],
        en: [
          "TEORO is a specialty coffee brand that understands flavor as the accumulated result of a bean’s soil, altitude, climate, and processing method. Rather than blending away the individuality of each origin, the brand focuses on a single-origin coffee and invites customers to experience the relationship between its environment and distinctive flavor.",
          "The brand is structured around three principles: preserving the essence of origin, communicating information intuitively, and operating a rotating coffee system. Each month, a new origin is introduced as an individual archive volume, while technical coffee information is translated into accessible language and visual forms. Through this system, coffee becomes an ongoing process of exploration, comparison, and personal taste-building."
        ]
      },
      {
        ko: [
          "터로의 브랜드 경험은 큐레이션 카드, Terroir Experience, Terroir Soil을 중심으로 확장됩니다. 큐레이션 카드는 산지의 고도, 토양, 품종, 가공 방식과 테이스팅 노트를 기록한 정보 매체이며, Terroir Experience는 다양한 추출과 설명을 통해 떼루아를 직접 감각하는 체험 프로그램입니다.",
          "Terroir Soil은 해당 산지의 토양과 커피 경험을 작은 표본 형태로 남기는 아카이브 오브제입니다. 세 가지 애플리케이션은 각각 정보를 읽고, 감각으로 경험하고, 물리적으로 소장하는 역할을 담당하며, 한 잔의 커피가 개인의 기억과 취향으로 축적되는 과정을 완성합니다."
        ],
        en: [
          "TEORO’s brand experience extends through three key applications: the Curation Card, Terroir Experience, and Terroir Soil. The Curation Card records essential information such as altitude, soil, variety, processing method, and tasting notes, while the Terroir Experience allows visitors to explore terroir through guided interpretation and different brewing methods.",
          "Terroir Soil transforms the origin and the tasting experience into a small, collectible archive object. Together, these applications allow customers to read the information, experience it through the senses, and preserve it in a physical form—turning a temporary cup of coffee into an accumulated record of memory and personal taste."
        ]
      }
    ],
    caption: [
      { label: "Project Name", value: "터로(TEORO)", lang: "ko" },
      { label: "Year", value: "2026" },
      { label: "Project Type", value: "School Individual Project" },
      { label: "Course", value: "Hongik University Visual Communication Design / PracticeDesignStudio(1)" },
      { label: "Final Output Specifications", value: "Brand Guideline" },
      { label: "Professor", value: "Prof. Hyojin An" }
    ]
  },
  {
    id: "after-event",
    title: "After Event",
    year: "2025",
    type: "School Individual Project",
    categories: ["photography", "editorial"],
    categoryLabel: "Photography, Editorial",
    detailLayout: "after-event",
    cover: {
      src: "./2025_Photography_After-Event/Portfolio_Images/After-Event_1.png",
      alt: "",
      width: 8000,
      height: 6400,
      position: "50% 50%"
    },
    images: [
      {
        src: "./2025_Photography_After-Event/Portfolio_Images/After-Event_1.png",
        alt: "검은 배경 위에 흰 양초의 사건 전과 후를 보여주는 사진 및 에디토리얼 레이아웃",
        width: 8000,
        height: 6400
      },
      {
        src: "./2025_Photography_After-Event/Portfolio_Images/After-Event_2.png",
        alt: "도자기와 양초, 종이, 점토가 사건 전후로 변화하는 과정을 배열한 열두 장의 흑백 사진",
        width: 8000,
        height: 6400
      },
      {
        src: "./2025_Photography_After-Event/Portfolio_Images/After-Event_3.png",
        alt: "불이 켜진 흰 양초 사진과 After Event 제목이 인쇄된 노출 제본 포토북 표지",
        width: 8000,
        height: 6400
      },
      {
        src: "./2025_Photography_After-Event/Portfolio_Images/After-Event_4.png",
        alt: "검은 배경 위에 펼쳐진 After Event 포토북의 세 가지 내지 구성",
        width: 8000,
        height: 6400
      }
    ],
    statement: {
      en: [
        "Purity, in this work, does not refer simply to cleanliness or perfection. It describes the most stable and authentic condition an object holds before any external force intervenes. Yet no state can remain permanently untouched. Heat, staining, absorption, pressure, and rupture enter as irreversible events, altering an object’s surface or structure and making a complete return to its former condition impossible.",
        "<em>After Event</em> traces this transformation through a three-part sequence: Essence, Incident, and Influence. Each series begins with an object in its original state, moves through the moment or process of external intervention, and concludes with the physical trace that remains afterward. The exact point represented as the Incident varies according to the material—sometimes it is the action itself, sometimes an ongoing transformation, and sometimes an intermediate state—but every sequence records the same object as it moves from stability toward irreversible change.",
        "What I seek to capture is not destruction itself, but the lasting influence that an event engraves upon an object. A stain left on a surface, a deformation held within a structure, or a mark that cannot be completely removed is not merely residue; it is evidence of what the object has endured and a physical sign of its inability to return to its original state. Like a personal experience or a scar, this trace becomes an integral part of its existence. <em>After Event</em> is a photographic record of purity permanently marked by influence."
      ],
      ko: [
        "이 작업에서 순수함은 단순히 깨끗하거나 완벽한 상태를 의미하지 않는다. 외부의 힘이 개입하기 전, 물체가 유지하고 있던 가장 안정적이고 본래적인 상태를 뜻한다. 그러나 어떠한 상태도 영원히 외부와 분리된 채 유지될 수는 없다. 열, 착색, 흡수, 압력, 파열과 같은 사건은 물체의 표면과 구조에 비가역적으로 개입하며, 물체가 이전 상태로 완전히 돌아가는 것을 불가능하게 만든다.",
        "〈After Event〉는 이러한 변화를 [본질(Essence)]–[사건(Incident)]–[영향(Influence)]의 세 단계로 기록한다. 각 연작은 사건 이전의 본래적 상태에서 시작해 외부 에너지가 개입하는 순간이나 과정을 거쳐, 사건 이후에도 남아 있는 물리적 흔적으로 끝난다. 사건의 시간적 위치는 물체의 특성에 따라 행위의 순간, 진행 중인 변화, 변화의 중간 상태 등으로 다르게 나타나지만, 모든 연작은 동일한 하나의 물체가 안정된 상태에서 되돌릴 수 없는 변화로 이동하는 과정을 담는다.",
        "내가 담고자 한 것은 파괴 자체가 아니라 사건이 물체에 새긴 지속적인 영향이다. 표면에 남은 얼룩, 구조에 고정된 변형, 완전히 제거되지 않는 흔적은 단순한 잔여물이 아니라 그 물체가 겪은 변화의 기록이며, 이전 상태로 돌아갈 수 없음을 증명하는 물리적 표식이다. 마치 개인의 경험과 상흔처럼, 그 흔적은 사물의 존재 일부가 되어 남는다. 〈After Event〉는 영구적인 영향이 새겨진 순수함에 대한 사진적 기록이다."
      ]
    },
    caption: [
      { label: "Project Name", value: "After Event" },
      { label: "Year", value: "2025" },
      { label: "Project Type", value: "School Individual Project" },
      { label: "Course", value: "Hongik University Visual Communication Design / Studio Photography (2)" },
      { label: "Photography Equipment", value: "Canon DSLR (EOS 5D Mark II, EOS 5D Mark III), Canon EF 100mm F2.8L Macro IS USM, Fomex E600" },
      { label: "Final Output Specifications", value: "200 × 200 mm, Exposed Thread-Sewn Binding" },
      { label: "Professor", value: "Prof. Hyunmok Jung" }
    ]
  }
];

const categories = {
  all: { label: "All Works" },
  graphic: { label: "Graphic" },
  branding: { label: "Branding" },
  typography: { label: "Typography" },
  editorial: { label: "Editorial" },
  photography: { label: "Photography" }
};

const projectGrid = document.querySelector("#project-grid");
const projectDetail = document.querySelector("#project-detail");
const viewTitle = document.querySelector("#view-title");
const categoryLinks = [...document.querySelectorAll(".category-link")];
const announcer = document.querySelector("#app-announcer");
const workView = document.querySelector("#work-view");

let activeCategory = "all";
let activeProjectId = null;
let previousRouteWasDetail = false;
let listScrollPosition = 0;

function twoDigits(value) {
  return String(value).padStart(2, "0");
}

function projectCardVisualMarkup(project) {
  return `
    <img
      class="project-card__image"
      src="${project.cover.src}"
      alt="${project.cover.alt || ""}"
      width="${project.cover.width || 2250}"
      height="${project.cover.height || 2813}"
      loading="lazy"
      decoding="async"
      style="--project-cover-position: ${project.cover.position || "50% 50%"}"
    >
  `;
}

function detailHeroMarkup(project) {
  const hero = project.hero || project.cover;

  return `
    <figure class="detail-hero detail-hero--media">
      <img
        class="detail-hero__image"
        src="${hero.src}"
        alt="${hero.alt}"
        width="${hero.width || 2250}"
        height="${hero.height || 2813}"
        decoding="async"
        fetchpriority="high"
        style="--detail-hero-position: ${hero.position || "50% 50%"}"
      >
    </figure>
  `;
}

function detailOverviewMarkup(project) {
  const paragraphs = Array.isArray(project.description)
    ? project.description
    : [project.description];
  const supportingParagraphs = paragraphs
    .slice(1)
    .map((paragraph) => `<p class="detail-copy__support" lang="ko">${paragraph}</p>`)
    .join("");
  const englishSummary = project.descriptionEn
    ? `<p class="detail-copy__english" lang="en">${project.descriptionEn}</p>`
    : "";

  return `
    <section class="detail-copy" aria-labelledby="overview-${project.id}">
      <h2 class="detail-copy__label" id="overview-${project.id}" lang="en">01 / Overview</h2>
      <div class="detail-copy__body">
        <p class="detail-copy__lead" lang="ko">${paragraphs[0]}</p>
        ${supportingParagraphs}
        ${englishSummary}
      </div>
    </section>
  `;
}

function detailFactsMarkup(project) {
  const facts = project.facts;

  return `
    <dl class="detail-facts" lang="en">
      ${facts.map((fact) => `
        <div class="detail-facts__item">
          <dt>${fact.label}</dt>
          <dd${fact.lang ? ` lang="${fact.lang}"` : ""}>${fact.value}</dd>
        </div>
      `).join("")}
    </dl>
  `;
}

function detailMediaItemMarkup(item, index, project) {
  const captionId = `media-${project.id}-${index + 1}`;
  const asset = item.type === "video"
    ? `
      <video
        controls
        playsinline
        preload="metadata"
        poster="${item.poster}"
        width="${item.width}"
        height="${item.height}"
        aria-label="${item.title} — silent project film"
        aria-describedby="${captionId}"
      >
        <source src="${item.src}" type="video/mp4">
        이 브라우저에서는 프로젝트 영상을 재생할 수 없습니다.
      </video>
    `
    : `
      <img
        src="${item.src}"
        alt="${item.alt}"
        width="${item.width || 2250}"
        height="${item.height || 2813}"
        loading="lazy"
        decoding="async"
      >
    `;

  return `
    <figure class="detail-media detail-media--${item.type}">
      <div class="detail-media__stage">
        ${asset}
      </div>
      <figcaption class="detail-media__caption" id="${captionId}">
        <span class="detail-media__section" lang="en">${item.section}</span>
        <span class="detail-media__text">
          <strong lang="en">${item.title}</strong>
          <span lang="ko">${item.caption}</span>
        </span>
      </figcaption>
    </figure>
  `;
}

function detailMediaMarkup(project) {
  const imageCount = project.media.filter((item) => item.type === "image").length
    + ((project.hero || project.cover) ? 1 : 0);
  const videoCount = project.media.filter((item) => item.type === "video").length;

  return `
    <section class="detail-media-section" aria-labelledby="media-${project.id}">
      <header class="detail-media-section__header">
        <h2 id="media-${project.id}" lang="en">02 / Project Media</h2>
        <p lang="en">${twoDigits(imageCount)} Images · ${twoDigits(videoCount)} Film</p>
      </header>
      <div class="detail-media-sequence">
        ${project.media.map((item, index) => detailMediaItemMarkup(item, index, project)).join("")}
      </div>
    </section>
  `;
}

function detailCreditsMarkup(project) {
  if (!project.credits) return "";

  return `
    <section class="detail-credits" aria-labelledby="credits-${project.id}">
      <h2 class="detail-credits__label" id="credits-${project.id}" lang="en">03 / Credits</h2>
      <div class="detail-credits__body">
        <p class="detail-credits__course" lang="ko">${project.credits.courseKo}</p>
        <p class="detail-credits__course-en" lang="en">${project.credits.courseEn}</p>
        <dl class="detail-credits__meta" lang="en">
          <div>
            <dt>Advisor</dt>
            <dd>${project.credits.advisor}</dd>
          </div>
          <div>
            <dt>Project Type</dt>
            <dd>${project.type}</dd>
          </div>
        </dl>
      </div>
    </section>
  `;
}

function imageLedProjectImageMarkup(image, index) {
  const loadingAttributes = index === 0
    ? 'fetchpriority="high"'
    : 'loading="lazy"';

  return `
    <figure class="image-led-image">
      <img
        src="${image.src}"
        alt="${image.alt}"
        width="${image.width}"
        height="${image.height}"
        decoding="async"
        ${loadingAttributes}
      >
    </figure>
  `;
}

function imageLedStatementMarkup(statement, ariaLabel) {
  const englishParagraphs = statement.en
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  const koreanParagraphs = statement.ko
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  return `
    <section class="image-led-statement" aria-label="${ariaLabel}">
      <div class="image-led-statement__language image-led-statement__language--ko" lang="ko">
        ${koreanParagraphs}
      </div>
      <div class="image-led-statement__language image-led-statement__language--en" lang="en">
        ${englishParagraphs}
      </div>
    </section>
  `;
}

function imageLedCaptionMarkup(caption, headingId) {
  const captionRows = caption
    .map((item) => `
      <div class="image-led-caption__row">
        <dt lang="en">${item.label} :</dt>
        <dd lang="${item.lang || "en"}">${item.value}</dd>
      </div>
    `)
    .join("");

  return `
    <section class="image-led-caption" aria-labelledby="${headingId}">
      <h2 class="sr-only" id="${headingId}" lang="en">Project Information</h2>
      <dl>
        ${captionRows}
      </dl>
    </section>
  `;
}

function afterEventDetailMarkup(project) {
  return `
    <h1 class="sr-only" id="detail-title" tabindex="-1" lang="${project.titleLang || "en"}">${project.title}</h1>
    <div class="image-led-flow">
      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[0], 0)}
        ${imageLedProjectImageMarkup(project.images[1], 1)}
      </div>

      ${imageLedStatementMarkup(project.statement, "After Event project statement")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[2], 2)}
        ${imageLedProjectImageMarkup(project.images[3], 3)}
      </div>

      ${imageLedCaptionMarkup(project.caption, "after-event-caption-title")}
    </div>
  `;
}

function teoroDetailMarkup(project) {
  return `
    <h1 class="sr-only" id="detail-title" tabindex="-1" lang="${project.titleLang || "ko"}">${project.title}</h1>
    <div class="image-led-flow">
      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[0], 0)}
        ${imageLedProjectImageMarkup(project.images[1], 1)}
      </div>

      ${imageLedStatementMarkup(project.statements[0], "터로 브랜드 소개")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[2], 2)}
        ${imageLedProjectImageMarkup(project.images[3], 3)}
      </div>

      ${imageLedStatementMarkup(project.statements[1], "터로 브랜드 애플리케이션 소개")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[4], 4)}
        ${imageLedProjectImageMarkup(project.images[5], 5)}
      </div>

      ${imageLedCaptionMarkup(project.caption, "teoro-caption-title")}
    </div>
  `;
}

function projectCardMarkup(project) {
  return `
    <article class="project-card-wrap">
      <a
        class="project-card"
        href="#project/${activeCategory}/${project.id}"
        data-project-id="${project.id}"
      >
        <div class="project-card__media">
          ${projectCardVisualMarkup(project)}
        </div>
        <div class="project-card__meta">
          <div class="project-card__heading">
            <strong class="project-card__title" lang="${project.titleLang || "en"}">${project.title}</strong>
            <span class="project-card__arrow" aria-hidden="true">↗</span>
          </div>
          <dl class="project-card__details" lang="en">
            <div>
              <dt>Year</dt>
              <dd>${project.year}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>${project.type}</dd>
            </div>
          </dl>
        </div>
      </a>
    </article>
  `;
}

function getVisibleProjects() {
  const visibleProjects = activeCategory === "all"
    ? [...projects]
    : projects.filter((project) => project.categories.includes(activeCategory));

  return visibleProjects.sort((a, b) => (
    Number(b.year) - Number(a.year)
    || a.title.localeCompare(b.title, "en")
  ));
}

function updateCategoryNavigation() {
  let activeLink = null;

  categoryLinks.forEach((link) => {
    const category = link.dataset.category;
    const isActive = category === activeCategory;
    const count = category === "all"
      ? projects.length
      : projects.filter((project) => project.categories.includes(category)).length;

    link.classList.toggle("is-active", isActive);
    if (isActive) {
      activeLink = link;
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
    link.querySelector(".category-link__count").textContent = twoDigits(count);
  });

  if (activeLink && window.matchMedia?.("(max-width: 900px)")?.matches) {
    requestAnimationFrame(() => {
      activeLink.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest"
      });
    });
  }
}

function renderIndex({ focusReturnedProject = false } = {}) {
  const category = categories[activeCategory];
  const visibleProjects = getVisibleProjects();

  projectDetail.hidden = true;
  projectDetail.innerHTML = "";
  projectGrid.hidden = false;
  viewTitle.hidden = false;
  workView.setAttribute("aria-labelledby", "view-title");

  viewTitle.textContent = category.label;
  projectGrid.setAttribute("aria-label", `${category.label} 프로젝트 ${visibleProjects.length}개`);
  projectGrid.innerHTML = visibleProjects.map(projectCardMarkup).join("");

  updateCategoryNavigation();
  document.title = `${category.label} — Oscar Kim`;
  announcer.textContent = `${category.label} 카테고리, 프로젝트 ${visibleProjects.length}개`;

  if (focusReturnedProject && activeProjectId) {
    requestAnimationFrame(() => {
      const returningCard = projectGrid.querySelector(`[data-project-id="${activeProjectId}"]`);
      if (returningCard) returningCard.focus({ preventScroll: true });
    });
  }
}

function renderDetail(project) {
  const isAfterEvent = project.detailLayout === "after-event";
  const isTeoro = project.detailLayout === "teoro";
  const isImageLedProject = isAfterEvent || isTeoro;
  const detailProjectClass = [
    "detail-project",
    project.title.length > 15 ? "detail-project--long-title" : "",
    isImageLedProject ? "detail-project--image-led" : ""
  ].filter(Boolean).join(" ");
  const detailContent = isAfterEvent
    ? afterEventDetailMarkup(project)
    : isTeoro
      ? teoroDetailMarkup(project)
      : `
      <header class="detail-heading">
        <h1 class="detail-title" id="detail-title" tabindex="-1" lang="${project.titleLang || "en"}">${project.title}</h1>
        <div class="detail-subtitle" lang="en">
          <p class="detail-subtitle__item">
            <span class="micro-label">Year</span>
            ${project.year}
          </p>
          <p class="detail-subtitle__item">
            <span class="micro-label">Project Type</span>
            ${project.type}
          </p>
          <p class="detail-subtitle__item">
            <span class="micro-label">Discipline</span>
            ${project.categoryLabel}
          </p>
        </div>
      </header>

      ${detailHeroMarkup(project)}
      ${detailOverviewMarkup(project)}
      ${detailFactsMarkup(project)}
      ${detailMediaMarkup(project)}
      ${detailCreditsMarkup(project)}
    `;

  projectGrid.hidden = true;
  viewTitle.hidden = true;
  projectDetail.hidden = false;
  workView.setAttribute("aria-labelledby", "detail-title");
  projectDetail.innerHTML = `
    <article class="${detailProjectClass}" id="detail-project" tabindex="-1" aria-labelledby="detail-title">
      <div class="detail-toolbar" lang="en">
        <a
          class="detail-back"
          href="#category/${activeCategory}"
          data-detail-back
          aria-label="Back to ${categories[activeCategory].label} project list"
          lang="en"
        >
          <span class="detail-back__arrow" aria-hidden="true">←</span>
          Back
        </a>
      </div>

      ${detailContent}
    </article>
  `;

  updateCategoryNavigation();
  document.title = `${project.title} — Oscar Kim`;
  announcer.textContent = `${project.title} 프로젝트 상세 페이지`;

  requestAnimationFrame(() => {
    const detailProject = document.querySelector("#detail-project");
    if (detailProject) detailProject.focus({ preventScroll: true });
  });
}

function readRoute() {
  let hash = "";

  try {
    hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  } catch {
    return { type: "category", category: "all", isInvalid: true };
  }

  const [route, value, projectId] = hash.split("/");

  if (route === "project" && value) {
    const isLegacyRoute = !projectId;
    const targetId = isLegacyRoute ? value : projectId;
    const project = projects.find((item) => item.id === targetId);
    const category = isLegacyRoute ? project?.categories[0] : value;
    const hasValidContext = project && categories[category]
      && (category === "all" || project.categories.includes(category));

    if (hasValidContext) {
      return { type: "project", project, category, isLegacyRoute };
    }
  }

  if (route === "category" && value && categories[value]) {
    return { type: "category", category: value };
  }

  return { type: "category", category: "all", isInvalid: Boolean(hash) };
}

function renderRoute({ isInitial = false } = {}) {
  const route = readRoute();
  const wasDetail = previousRouteWasDetail;
  const previousCategory = activeCategory;
  let shouldRestoreListScroll = false;

  if (route.isInvalid) {
    history.replaceState(null, "", "#category/all");
  }

  if (route.type === "project") {
    previousRouteWasDetail = true;
    activeCategory = route.category;
    activeProjectId = route.project.id;
    if (Number.isFinite(history.state?.listScrollPosition)) {
      listScrollPosition = history.state.listScrollPosition;
    }
    if (route.isLegacyRoute) {
      history.replaceState(
        history.state,
        "",
        `#project/${activeCategory}/${route.project.id}`
      );
    }
    renderDetail(route.project);
  } else {
    previousRouteWasDetail = false;
    activeCategory = route.category;
    shouldRestoreListScroll = wasDetail && previousCategory === activeCategory && !isInitial;
    renderIndex({ focusReturnedProject: shouldRestoreListScroll });
  }

  if (!isInitial) {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: shouldRestoreListScroll ? listScrollPosition : 0,
        behavior: "auto"
      });
    });
  }
}

document.addEventListener("click", (event) => {
  const projectCard = event.target.closest?.(".project-card");
  const detailBack = event.target.closest?.("[data-detail-back]");
  const isModifiedClick = event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey;

  if (isModifiedClick) return;

  if (projectCard) {
    event.preventDefault();
    listScrollPosition = window.scrollY;
    history.pushState(
      {
        view: "project",
        fromList: true,
        originCategory: activeCategory,
        listScrollPosition
      },
      "",
      projectCard.getAttribute("href")
    );
    renderRoute();
    return;
  }

  if (detailBack) {
    event.preventDefault();
    returnToProjectList();
  }
});

function returnToProjectList() {
  const canReturnThroughHistory = history.state?.view === "project"
    && history.state?.fromList
    && history.state?.originCategory === activeCategory;

  if (canReturnThroughHistory) {
    history.back();
    return;
  }

  history.replaceState(null, "", `#category/${activeCategory}`);
  renderRoute();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && previousRouteWasDetail) {
    returnToProjectList();
  }
});

window.addEventListener("hashchange", () => renderRoute());

if (!window.location.hash) {
  history.replaceState(null, "", "#category/all");
}

renderRoute({ isInitial: true });
