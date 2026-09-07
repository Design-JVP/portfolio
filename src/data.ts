export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  tags: string[];
  year: string;
  img: string;
  imgAlt: string;
  role: string;
  tools: string[];
  duration: string;
  team: string;
  siteUrl?: string;
  problem: string;
  toolIcons?: { name: string; slug: string }[];
  process: { title: string; desc: string; icons?: string[]; mockupDesktop?: string; mockupMobile?: string }[];
  result: string;
  resultDesktopImgs?: string[];
  resultMobileImgs?: string[];
  impact: { value: string; label: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Gigantec",
    shortDesc: "Projeto de renovação visual e modernização do E-commerce. Protótipo Desktop e Mobile no Figma, identificação de oportunidades, pesquisa com usuários, prototipação, design system e handoff.",
    tags: ["Product Design", "UX Research", "End-to-end"],
    year: "2024 - 2026",
    img: new URL("./imports/Purple_Gradient_Modern_Laptop_Mockup_Instagram_Post_4_-1.jpg", import.meta.url).href,
    imgAlt: "Mockup projeto Gigantec",
    role: "Especialista de Produto, UX Researcher, PM Jr",
    tools: ["Figma", "Magento", "Claude", "Gemini", "HTML", "CSS"],
    duration: "20 meses · 2024 - 2026",
    team: "2 designers, 2 devs, 1 PM",
    siteUrl: "https://gigantec.com.br",
    toolIcons: [
      { name: "Figma", slug: "figma" },
      { name: "Claude", slug: "claude" },
      { name: "Magento", slug: "letter:M" },
      { name: "Gemini", slug: "googlegemini" },
      { name: "Google Stitch", slug: "letter:S" },
      { name: "Maze", slug: "maze" },
      { name: "ClickUp", slug: "clickup" },
      { name: "Miro", slug: "miro" },
      { name: "Google Sheets", slug: "googlesheets" },
      { name: "Framer", slug: "framer" },
    ],
    problem: "O e-commerce da Gigantec apresentava uma experiência fragmentada, com jornadas de compra confusas, identidade visual desatualizada e ausência de um design system que garantisse consistência entre as plataformas desktop e mobile. Isso resultava em alta taxa de abandono de carrinho e baixa conversão.",
    process: [
      {
        title: "Pesquisa e descoberta",
        desc: "Entrevistas com usuários, análise heurística do produto atual e mapeamento de jornada para identificar os principais pontos de atrito na experiência de compra.",
        icons: ["maze", "miro", "googlesheets"],
      },
      {
        title: "Definição e estratégia",
        desc: "Priorização de oportunidades com base em impacto e viabilidade. Definição dos princípios de design e arquitetura de informação revisada.",
        icons: ["clickup", "miro", "googlesheets", "googlegemini"],
      },
      {
        title: "Design system",
        desc: "Criação de uma biblioteca de componentes escalável com tokens de cor, tipografia e espaçamento, garantindo consistência e acelerando a entrega.",
        icons: ["figma", "claude", "letter:S"],
        mockupDesktop: new URL("./imports/componentes-1.jpg", import.meta.url).href,
        mockupMobile: new URL("./imports/areas_logadassystem.jpg", import.meta.url).href,
      },
      {
        title: "Prototipação e teste",
        desc: "Protótipos de alta fidelidade para desktop e mobile, com ciclos de teste com usuários para validar decisões antes do handoff.",
        icons: ["figma", "claude", "letter:M", "googlegemini", "maze", "clickup", "miro", "framer"],
        mockupDesktop: new URL("./imports/Captura_de_tela_2026-09-04_133633.png", import.meta.url).href,
        mockupMobile: new URL("./imports/Captura_de_tela_2026-09-06_205031.png", import.meta.url).href,
      },
    ],
    result: "Interface modernizada com linguagem visual coesa, fluxos de compra simplificados e design system documentado pronto para implementação.",
    resultDesktopImgs: [
      new URL("./imports/HOME_-_PRIORIDADES_JO_O.jpg", import.meta.url).href,
      new URL("./imports/P_GINA_DE_PRODUTO-2.jpg", import.meta.url).href,
      new URL("./imports/carrinhodesk-1.jpg", import.meta.url).href,
      new URL("./imports/cupons-1.jpg", import.meta.url).href,
    ],
    resultMobileImgs: [
      new URL("./imports/home_modelos1-1.jpg", import.meta.url).href,
      new URL("./imports/pdp-1.jpg", import.meta.url).href,
      new URL("./imports/carrinho-1.jpg", import.meta.url).href,
    ],
    impact: [
      { value: "-24%", label: "Bounce Rate" },
      { value: "-21%", label: "Abandono de Carrinho" },
      { value: "+1.2", label: "Nota no RA" },
      { value: "-1.5s", label: "Load Time Google" },
      { value: "4.7/5", label: "Pesquisa de Satisfação" },
    ],
  },
  {
    id: "02",
    title: "PDE",
    shortDesc: "Desenvolvimento completo do Web app para agendamento de terapia. branding e design visual. Definição de fluxos e prototipagem usando o Figma e pacote Adobe. Protótipo funcional e interativo.",
    tags: ["Mobile", "Prototipagem", "Branding"],
    year: "2024",
    img: new URL("./imports/Purple_Gradient_Modern_Laptop_Mockup_Instagram_Post_6_.jpg", import.meta.url).href,
    imgAlt: "Mockup projeto PDE",
    role: "UX/UI Designer",
    tools: ["Figma", "Illustrator", "Photoshop", "Framer"],
    duration: "2 meses · 2024",
    team: "2 designers",
    toolIcons: [
      { name: "Figma", slug: "figma" },
      { name: "Illustrator", slug: "adobeillustrator" },
      { name: "Photoshop", slug: "adobephotoshop" },
      { name: "Claude", slug: "claude" },
      { name: "Gemini", slug: "googlegemini" },
      { name: "Framer", slug: "framer" },
      { name: "Google Sheets", slug: "googlesheets" },
      { name: "ClickUp", slug: "clickup" },
      { name: "Miro", slug: "miro" },
    ],
    problem: "A plataforma precisava de uma identidade visual forte e uma experiência de uso clara para os usuários da plataforma. Sem branding definido e sem fluxos estruturados, o produto não conseguia transmitir confiança nem converter novos pacientes.",
    process: [
      { title: "Branding e identidade", desc: "Criação da identidade visual da plataforma: logotipo, paleta de cores, tipografia e guia de estilo aplicado ao produto digital.", icons: ["adobeillustrator", "adobephotoshop", "figma"] },
      { title: "Arquitetura de fluxos", desc: "Mapeamento e estruturação dos principais fluxos do Web app — onboarding, dashboard e ações centrais — com foco em clareza e eficiência.", icons: ["figma", "miro"] },
      { title: "Design e prototipagem", desc: "Desenvolvimento das telas em alta fidelidade no Figma com protótipo interativo completo para validação com stakeholders.", icons: ["figma", "adobexd"] },
    ],
    result: "Produto com identidade própria, fluxos validados e protótipo interativo entregue para desenvolvimento, reduzindo ambiguidade no handoff.",
    resultDesktopImgs: [
      "./imports/Home_page_PDE.jpg", import.meta.url).href,
      "./imports/capta__o_de_psicologo_PDE.jpg", import.meta.url).href,
      "./imports/sele_ao_de_psicologo_PDE.jpg", import.meta.url).href,
    ],
    resultMobileImgs: [
      "./imports/iPhone_13___14_-_1.jpg", import.meta.url).href,
      "./imports/next_PDE_mobile.jpg", import.meta.url).href,
      "./imports/memorial.jpg", import.meta.url).href,
    ],
    impact: [
      { value: "100%", label: "Branding do zero" },
      { value: "3 meses", label: "Até lançamento" },
      { value: "+60%", label: "Aprovação em testes" },
    ],
  },
  {
    id: "03",
    title: "Mais por Vir...",
    shortDesc: "Em breve mais projetos.",
    tags: [],
    year: "2023",
    img: "https://images.unsplash.com/photo-1653668168018-0ee2c5756bca?w=400&h=400&fit=crop&auto=format",
    imgAlt: "Em breve",
    role: "—",
    tools: [],
    duration: "—",
    team: "—",
    problem: "",
    process: [],
    result: "",
    impact: [],
  },
];

export const EXPERIENCE = [
  { role: "Especialista de Produto", company: "Gigantec", period: "2024 — 2026" },
  { role: "UX/UI Designer", company: "Gestão em Dados", period: "2023 — 2024" },
  { role: "Web Designer", company: "NozFit", period: "2022 — 2023" },
  { role: "Assistente de QA", company: "NozFit", period: "2021" },
  { role: "Assistente de Cadastro", company: "Terabyteshop", period: "2020" },
];

export const CONTACT_ITEMS = [
  { label: "Email", val: "jv@jvpereiradesign.com", labelColor: "#535353" },
  { label: "LinkedIn", val: "/in/jvpereiradesign", labelColor: "#535353" },
  { label: "telefone", val: "+55 41 992662573", labelColor: "#535353" },
];
