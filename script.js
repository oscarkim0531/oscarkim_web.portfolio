const CANCELLATION_ASSET_ROOT = "./2026_Graphic_Cancellation-Terms/Web-Images";
const TEORO_ASSET_ROOT = "./2026_Branding_터로(TEORO)";
const AFTER_EVENT_ASSET_ROOT = "./2025_Photography_After-Event/Web-Images";
const VISUAL_DISASTER_ASSET_ROOT = "./2025_Graphic_Visual-Disaster/Web-Images";

const projects = [
  {
    id: "cancellation-terms",
    title: "Cancellation Terms",
    year: "2026",
    type: "School Individual Project",
    categories: ["graphic", "typography", "editorial"],
    categoryLabel: "Graphic, Typography, Editorial",
    detailLayout: "cancellation-terms",
    cover: {
      src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-05.jpg`,
      alt: "붉은 그래픽과 해지 약관 텍스트가 인쇄된 플립북의 페이지를 넘기는 손",
      width: 3200,
      height: 2124,
      position: "50% 50%"
    },
    images: [
      {
        src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-01.jpg`,
        alt: "다양한 구독 서비스의 해지 약관과 가격, 타이포그래피, 색상을 수집한 스프레드시트 아카이브",
        width: 3200,
        height: 2560
      },
      {
        src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-02.jpg`,
        alt: "해지 약관 텍스트와 붉은 언어적 파편이 충돌하는 웹 경험 화면",
        width: 3200,
        height: 2560
      },
      {
        src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-03.jpg`,
        alt: "Cancellation Terms 웹 경험의 진행 과정을 보여주는 세 개의 모바일 화면",
        width: 3200,
        height: 2560
      },
      {
        src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-04.jpg`,
        alt: "검은 배경 위에 놓인 Cancellation Terms 플립북 표지",
        width: 3200,
        height: 2560
      },
      {
        src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-05.jpg`,
        alt: "붉은 그래픽과 해지 약관 텍스트가 인쇄된 플립북의 페이지를 넘기는 손",
        width: 3200,
        height: 2124
      },
      {
        src: `${CANCELLATION_ASSET_ROOT}/cancellation-terms-06.jpg`,
        alt: "해지 약관과 붉은 그래픽이 중첩된 플립북 내지를 펼쳐 든 모습",
        width: 3200,
        height: 2129
      }
    ],
    prompts: [
      {
        title: "Prompt A — Archive",
        ko: [
          "해지 약관은 소비자의 선택을 보장하는 정보이지만, 대부분 서비스의 시각적 체계 속에서 쉽게 지나치는 주변부의 텍스트로 남아 있다. 다양한 구독 서비스의 약관과 가격, 타이포그래피, 색상, 여백을 함께 수집하여 정보의 내용뿐 아니라 그것이 어떤 방식으로 드러나거나 감춰지는지를 비교 가능한 시각적 아카이브로 구성하였다. 이를 통해 개별 약관을 단순한 법적 문서가 아니라, 기업이 사용자의 읽기와 선택을 어떻게 다루는지 보여주는 디자인 자료로 전환하고자 하였다."
        ],
        en: [
          "Cancellation terms are meant to protect consumer choice, yet they often remain peripheral texts that are easily overlooked within a service’s visual system. By collecting terms alongside pricing, typography, color, and spacing, the project forms a comparative visual archive of not only what information says, but also how it is revealed or obscured. Each policy is thus reframed from a legal document into design material that exposes how companies shape users’ reading and decision-making."
        ]
      },
      {
        title: "Prompt B — Web Experience",
        ko: [
          "수집된 해지 약관은 웹사이트 안에서 사용자의 시선과 읽기 방식을 드러내는 경험으로 재구성되었다. 밀도 높은 약관 텍스트와 시선을 끄는 붉은 언어적 파편을 충돌시켜, 정보가 존재하더라도 주의의 배분에 따라 읽히거나 배제될 수 있음을 보여준다. 사용자가 읽기의 속도와 통제권을 직접 마주하게 함으로써, 해지 과정에 작동하는 정보의 과잉과 주의 분산, 선택의 불균형을 감각적으로 인식하도록 하였다."
        ],
        en: [
          "The collected cancellation terms are reinterpreted as a web experience that reveals how users direct their attention and approach reading. Dense contractual text collides with striking red fragments of language, demonstrating how information can remain visible yet be read or excluded according to where attention is placed. By confronting users with the speed and control of their own reading, the work makes the excess of information, distraction of attention, and imbalance of choice within cancellation processes perceptible."
        ]
      },
      {
        title: "Prompt C — Flipbook",
        ko: [
          "디지털 화면에서 일시적으로 나타났다가 사라지는 읽기의 경험을 플립북이라는 물리적 형태로 고정하였다. 페이지가 넘어갈수록 붉은 단어와 색채가 증식하며 정돈된 약관을 점차 가리고, 끝내 무엇이 중요한 정보였는지 구분할 수 없는 상태를 만든다. 무심코 지나친 정보가 누적되어 오히려 독자의 시야를 점유하는 과정을 손끝으로 경험하게 함으로써, 디지털 환경에서의 무관심이 남기는 물리적 무게를 드러내고자 하였다."
        ],
        en: [
          "The fleeting experience of reading on a digital screen is preserved in the physical form of a flipbook. As the pages turn, red words and colors multiply, gradually obscuring the ordered terms until important information can no longer be distinguished from visual noise. By allowing neglected information to accumulate and occupy the reader’s field of vision, the work gives physical weight to the consequences of inattention in digital environments."
        ]
      }
    ],
    caption: [
      { label: "Project Name", value: "Cancellation Terms" },
      { label: "Year", value: "2026" },
      { label: "Project Type", value: "School Individual Project" },
      { label: "Course", value: "Hongik University Visual Communication Design / ResearchDesignStudio(1)" },
      { label: "Final Output Specifications", value: "Spreadsheet(Prompt A), Website(Prompt B), Flipbook(Prompt C)<br>Flipbook_280p, Single-Sided Printing, 148*210mm, Perfect Binding" },
      { label: "Professor", value: "Prof. Yuseon Park" },
      { label: "Support", value: "Mindy Seu, Alvin Ashiatey" }
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
      src: `${AFTER_EVENT_ASSET_ROOT}/after-event-01.jpg`,
      alt: "",
      width: 3200,
      height: 2560,
      position: "50% 50%"
    },
    images: [
      {
        src: `${AFTER_EVENT_ASSET_ROOT}/after-event-01.jpg`,
        alt: "검은 배경 위에 흰 양초의 사건 전과 후를 보여주는 사진 및 에디토리얼 레이아웃",
        width: 3200,
        height: 2560
      },
      {
        src: `${AFTER_EVENT_ASSET_ROOT}/after-event-02.jpg`,
        alt: "도자기와 양초, 종이, 점토가 사건 전후로 변화하는 과정을 배열한 열두 장의 흑백 사진",
        width: 3200,
        height: 2560
      },
      {
        src: `${AFTER_EVENT_ASSET_ROOT}/after-event-03.jpg`,
        alt: "불이 켜진 흰 양초 사진과 After Event 제목이 인쇄된 노출 제본 포토북 표지",
        width: 3200,
        height: 2560
      },
      {
        src: `${AFTER_EVENT_ASSET_ROOT}/after-event-04.jpg`,
        alt: "검은 배경 위에 펼쳐진 After Event 포토북의 세 가지 내지 구성",
        width: 3200,
        height: 2560
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
  },
  {
    id: "visual-disaster",
    title: "Visual Disaster",
    year: "2025",
    type: "School Individual Project",
    categories: ["graphic", "editorial"],
    categoryLabel: "Graphic, Editorial",
    detailLayout: "visual-disaster",
    cover: {
      src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-01.jpg`,
      alt: "Visual Disaster의 세 프로젝트를 보여주는 두 장의 추상 그래픽 포스터와 한 장의 침수 대비 정보 포스터",
      width: 3200,
      height: 2560,
      position: "50% 50%"
    },
    images: [
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-01.jpg`,
        alt: "Visual Disaster의 세 프로젝트를 보여주는 두 장의 추상 그래픽 포스터와 한 장의 침수 대비 정보 포스터",
        width: 3200,
        height: 2560
      },
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-02.jpg`,
        alt: "수평 픽셀 시프트와 수직 왜곡이 충돌하는 다채로운 Visual Disaster Observed 포스터",
        width: 3200,
        height: 2560
      },
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-03.jpg`,
        alt: "흐릿한 색면과 노이즈, 불완전한 선을 이용한 Visual Disaster Observed 초기 그래픽 실험",
        width: 3200,
        height: 2560
      },
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-04.jpg`,
        alt: "태양의 강한 빛과 렌즈 플레어 위에 그래픽 파편을 재배치한 Visual Disaster Interfered In 포스터",
        width: 3200,
        height: 2560
      },
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-05.jpg`,
        alt: "태양 잔상과 부분적 지각을 탐구한 Visual Disaster Interfered In의 세 가지 그래픽 실험",
        width: 3200,
        height: 2560
      },
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-06.jpg`,
        alt: "홍대 인근 침수 위험 지역과 대피소, 행동 지침을 정리한 영문 재난 대비 정보 포스터",
        width: 3200,
        height: 2560
      },
      {
        src: `${VISUAL_DISASTER_ASSET_ROOT}/visual-disaster-07.jpg`,
        alt: "Visual Disaster 프로젝트의 개념과 실험, 발전 과정을 기록한 프로세스 북 내지 네 장",
        width: 3200,
        height: 2560
      }
    ],
    sections: [
      {
        title: "01. Visual Disaster — Overall Concept",
        ko: [
          "〈Visual Disaster〉는 ‘재난(Disaster)’이라는 공통 주제를 서로 다른 시각 커뮤니케이션 방식으로 탐구한 세 개의 연속 프로젝트이다. 첫 번째 프로젝트 Visual Disaster — Observed에서는 우연하거나 통제하기 어려운 시각적 혼란을 관찰하고 기록했으며, 두 번째 프로젝트 Visual Disaster — Interfered In에서는 앞서 만들어진 시각적 재난에 디자이너가 직접 개입해 새로운 구조와 의미를 부여했다. 마지막 Disaster Preparedness에서는 표현적이고 추상적인 접근에서 벗어나, 실제 재난 정보를 특정 사용자에게 명확하고 효과적으로 전달하는 정보디자인으로 작업의 관점을 확장했다."
        ],
        en: [
          "Visual Disaster is a series of three connected projects that explore the shared theme of “disaster” through different approaches to visual communication. The first project, Visual Disaster — Observed, focuses on observing and recording uncontrolled visual disruption, while the second, Visual Disaster — Interfered In, introduces deliberate design intervention to restructure and reinterpret the visual disaster created in the previous work. The final project, Disaster Preparedness, shifts away from expressive abstraction toward information design, focusing on the clear and effective communication of practical disaster information to a specific audience."
        ]
      },
      {
        title: "02. Project 01 — Visual Disaster: Observed",
        ko: [
          "첫 번째 프로젝트에서는 ‘Observed’라는 조건을 바탕으로, 안약을 넣은 뒤 일시적으로 변화한 나의 시야를 하나의 시각적 재난으로 관찰했다. 초점이 흐려지고 빛과 색이 과장되어 보이며, 평소에는 안정적으로 인식하던 공간이 흔들리는 경험에 주목했다. 여기서 재난은 외부의 물리적 사건이 아니라, 인위적인 자극에 의해 시각 시스템이 정상적으로 작동하지 않는 순간이었다. 이러한 경험을 바탕으로 흐릿한 색면과 강한 색채, 노이즈와 불완전한 형태를 통해 시야가 통제되지 않는 감각을 시각화했다.",
          "초기의 그래픽 실험에서는 블러와 그라디언트를 중심으로 안약 이후의 몽환적이고 불분명한 시야를 표현했지만, 이후 단순한 분위기보다 ‘시각 체계의 붕괴’ 자체를 드러내는 방향으로 발전시켰다. 최종적으로 화면 상부에는 이미지가 수평 방향으로 잘리고 어긋나는 Horizontal Pixel Shift를, 하부에는 공간이 길게 늘어지고 흔들리는 Vertical Distortion을 적용했다. 서로 다른 두 방향의 왜곡이 한 화면 안에서 충돌하도록 구성함으로써, 정상적인 시각 정보가 분해되고 다시 조립되는 불안정한 상태를 표현했다."
        ],
        en: [
          "The first project began with the condition of “Observed,” focusing on the temporary changes in my vision after using eye drops as a form of visual disaster. I observed how focus became unstable, how light and colour appeared exaggerated, and how normally stable spatial perception began to feel distorted. Here, disaster was not treated as an external physical event, but as a moment in which the visual system temporarily failed due to artificial intervention. Blurred colour fields, intense chromatic contrasts, noise, and incomplete forms were used to translate this uncontrolled visual experience into a graphic form.",
          "The early experiments relied mainly on blur and gradients to recreate the hazy and dream-like quality of altered vision. The work later developed toward expressing the structural breakdown of vision itself rather than simply reproducing its atmosphere. In the final poster, Horizontal Pixel Shift fragments and displaces the upper visual field, while Vertical Distortion stretches and destabilizes the lower space. By allowing these two directional failures to collide within a single composition, the poster visualizes a state in which visual information is disrupted, fragmented, and continuously reassembled."
        ]
      },
      {
        title: "03. Project 02 — Visual Disaster: Interfered In",
        ko: [
          "두 번째 프로젝트는 첫 번째 프로젝트에서 만들어진 시각적 재난을 출발점으로 삼아, 디자이너가 그 혼란에 직접 개입하는 방식으로 진행했다. 첫 번째 작업이 안약이라는 인위적인 원인에 의해 발생한 시각적 붕괴를 다루었다면, 이번에는 강한 태양을 바라본 뒤 남는 잔상(Solar Afterimage)이라는 자연적인 원인으로 동일한 ‘시야의 실패’를 확장했다. Project 01의 이미지를 완성된 결과물로 그대로 사용하는 대신, 이미지를 여러 조각으로 해체하고 그중 일부를 선택하여 새로운 시각적 맥락 안에 배치했다.",
          "그래픽 실험을 통해 강한 광원과 렌즈 플레어가 만드는 흐릿한 배경 위에 Project 01의 선명한 파편들을 배치했고, 이 파편들이 화면 안에서 회전하고 이동하는 듯한 흐름을 형성하도록 구성했다. 밝은 태양빛에 의해 전체 시야는 흐려지고 사라지지만, 일부 조각만은 선명하게 남아 현실의 부분적인 정보를 붙잡는 상태를 표현한다. 이러한 Partial Perception을 통해, 두 번째 프로젝트는 첫 번째 프로젝트에서 생성된 혼란을 단순히 반복하는 것이 아니라 해체하고 선택하며 재조직하는 디자이너의 개입 과정을 보여준다."
        ],
        en: [
          "The second project begins with the visual disaster created in Project 01 and explores how a designer can actively intervene in that existing chaos. While the first project dealt with visual failure caused by the artificial stimulus of eye drops, this project expands the same idea through a natural cause: the solar afterimage produced after looking at intense sunlight. Rather than reusing the Project 01 poster as a complete image, I dismantled it into fragments, selected specific visual elements, and repositioned them within an entirely new context.",
          "Through a series of graphic experiments, sharp fragments from Project 01 were placed over a blurred visual field created by strong light and lens flare. The fragments were arranged along a loose rotational path, suggesting that the visual field is being pulled and reorganized by the force of the sun. While most of the surrounding vision becomes obscured or overwhelmed by light, selected fragments remain sharply visible, representing small pieces of reality that the brain is still able to perceive. This idea of Partial Perception transforms the original chaos through a process of dismantling, selection, and deliberate visual reorganization."
        ]
      },
      {
        title: "04. Project 03 — Disaster Preparedness",
        ko: [
          "세 번째 프로젝트에서는 앞선 두 프로젝트의 추상적이고 표현적인 접근에서 벗어나, 실제 재난 정보를 전달하는 정보디자인으로 방향을 전환했다. 주어진 주제는 홍대 인근 침수 상황에서 외국인을 위한 재난 대비 정보였으며, 핵심 개념을 “Simplicity for Maximum Clarity”로 설정했다. 침수 위험 지역과 대피소 위치를 가장 중요한 정보로 배치하고, 행동 지침과 비상 물품, 강우 증가 추세를 정보의 성격에 따라 지도, 텍스트, 아이콘, 그래프로 구분했다. 또한 빨강·라이트 시안·딥 네이비의 제한된 색상 체계를 통해 정보의 긴급도와 중요도를 구분하고, 충분한 여백과 단순한 그리드를 사용해 사용자가 필요한 내용을 빠르고 정확하게 찾을 수 있도록 구성했다."
        ],
        en: [
          "The third project shifts away from the abstract and expressive approach of the previous works and moves toward practical information design. The assigned subject was disaster preparedness for foreigners during flooding near Hongdae, and the central concept was defined as “Simplicity for Maximum Clarity.” Flood-risk areas and evacuation shelters were given the highest visual priority, while instructions, emergency supplies, and rainfall trends were translated into maps, text, icons, and graphs according to the function of each type of information. A restricted palette of red, light cyan, and deep navy establishes urgency and hierarchy, while generous negative space and a straightforward grid system allow the audience to locate and understand essential information quickly and accurately."
        ]
      },
      {
        title: "05. Process Book",
        ko: [
          "한 학기 동안 진행한 세 프로젝트의 결과물과 발전 과정을 하나의 Process Book으로 기록했다. 각 프로젝트의 출발점과 컨셉, 초기 아이디어와 그래픽 실험, 최종 결과물에 이르기까지의 시각적 의사결정 과정을 정리했으며, 수업 중 진행한 In-class Activities도 함께 수록했다. 완성된 결과물만을 보여주는 것이 아니라, 관찰과 실험, 피드백과 수정이 반복되며 각 프로젝트가 구체화되는 전체 과정을 하나의 기록으로 구성했다."
        ],
        en: [
          "The outcomes and development of all three projects were documented in a single Process Book produced throughout the semester. It records the initial concepts, early ideas, graphic experiments, and visual decisions that led to each final outcome, together with a selection of in-class activities completed during the course. Rather than presenting only the finished works, the book documents the broader design process through which each project evolved through observation, experimentation, feedback, and revision."
        ]
      }
    ],
    caption: [
      { label: "Project Name", value: "Visual Disaster" },
      { label: "Year", value: "2025" },
      { label: "Project Type", value: "School Individual Project" },
      { label: "Course", value: "Hongik University Visual Communication Design / CommunicationDesign(2)" },
      { label: "Final Output Specifications", value: "Project 01, Project 02, Project 03 — A3 (297 × 420 mm) Poster<br>Process Book — A5 (148 × 210 mm), 28p" },
      { label: "Professor", value: "Prof. Anneke Coppoolse" }
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

function projectCardVisualMarkup(project, index) {
  const loadingAttributes = index < 3
    ? 'loading="eager" fetchpriority="high"'
    : 'loading="lazy"';

  return `
    <img
      class="project-card__image"
      src="${project.cover.src}"
      alt="${project.cover.alt || ""}"
      width="${project.cover.width || 2250}"
      height="${project.cover.height || 2813}"
      ${loadingAttributes}
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
      ${statement.title ? `<h2 class="image-led-statement__title" lang="en">${statement.title}</h2>` : ""}
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

function cancellationTermsDetailMarkup(project) {
  return `
    <h1 class="sr-only" id="detail-title" tabindex="-1" lang="en">${project.title}</h1>
    <div class="image-led-flow">
      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[0], 0)}
      </div>

      ${imageLedStatementMarkup(project.prompts[0], "Prompt A Archive project statement")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[1], 1)}
        ${imageLedProjectImageMarkup(project.images[2], 2)}
      </div>

      ${imageLedStatementMarkup(project.prompts[1], "Prompt B Web Experience project statement")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[3], 3)}
        ${imageLedProjectImageMarkup(project.images[4], 4)}
        ${imageLedProjectImageMarkup(project.images[5], 5)}
      </div>

      ${imageLedStatementMarkup(project.prompts[2], "Prompt C Flipbook project statement")}

      ${imageLedCaptionMarkup(project.caption, "cancellation-terms-caption-title")}
    </div>
  `;
}

function visualDisasterDetailMarkup(project) {
  return `
    <h1 class="sr-only" id="detail-title" tabindex="-1" lang="en">${project.title}</h1>
    <div class="image-led-flow">
      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[0], 0)}
      </div>

      ${imageLedStatementMarkup(project.sections[0], "Visual Disaster overall concept")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[1], 1)}
        ${imageLedProjectImageMarkup(project.images[2], 2)}
      </div>

      ${imageLedStatementMarkup(project.sections[1], "Visual Disaster Observed project statement")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[3], 3)}
        ${imageLedProjectImageMarkup(project.images[4], 4)}
      </div>

      ${imageLedStatementMarkup(project.sections[2], "Visual Disaster Interfered In project statement")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[5], 5)}
      </div>

      ${imageLedStatementMarkup(project.sections[3], "Disaster Preparedness project statement")}

      <div class="image-led-sequence">
        ${imageLedProjectImageMarkup(project.images[6], 6)}
      </div>

      ${imageLedStatementMarkup(project.sections[4], "Visual Disaster process book statement")}

      ${imageLedCaptionMarkup(project.caption, "visual-disaster-caption-title")}
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

function projectCardMarkup(project, index) {
  return `
    <article class="project-card-wrap">
      <a
        class="project-card"
        href="#project/${activeCategory}/${project.id}"
        data-project-id="${project.id}"
      >
        <div class="project-card__media">
          ${projectCardVisualMarkup(project, index)}
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
  const isCancellationTerms = project.detailLayout === "cancellation-terms";
  const isAfterEvent = project.detailLayout === "after-event";
  const isTeoro = project.detailLayout === "teoro";
  const isVisualDisaster = project.detailLayout === "visual-disaster";
  const isImageLedProject = isCancellationTerms || isAfterEvent || isTeoro || isVisualDisaster;
  const detailProjectClass = [
    "detail-project",
    project.title.length > 15 ? "detail-project--long-title" : "",
    isImageLedProject ? "detail-project--image-led" : ""
  ].filter(Boolean).join(" ");
  const detailContent = isCancellationTerms
    ? cancellationTermsDetailMarkup(project)
    : isAfterEvent
      ? afterEventDetailMarkup(project)
      : isTeoro
        ? teoroDetailMarkup(project)
        : isVisualDisaster
          ? visualDisasterDetailMarkup(project)
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
