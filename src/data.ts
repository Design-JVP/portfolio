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
        desc: "Realizamos entrevistas com usuários, análises heurísticas do produto atual e mapeamos jornadas para identificar os principais pontos de atrito na experiência de compra.",
        icons: ["maze", "miro", "googlesheets"],
        mockupDesktop: new URL("./imports/gigantec-veia.jpg", import.meta.url).href,
      },
      {
        title: "Definição e estratégia",
        desc: "Priorizamos as oportunidades com base em impacto e viabilidade técnica, avaliados a partir dos dados da pesquisa. Usando metodologias ágeis (SCRUM), definimos essas prioridades em sprints e seguimos para o desenvolvimento.",
        icons: ["clickup", "miro", "googlesheets", "googlegemini"],
        mockupDesktop: new URL("./imports/dados-giga.png", import.meta.url).href,
      },
      {
        title: "Design system",
        desc: "Criamos componentes escaláveis com tokens de cor, tipografia e espaçamento, garantindo consistência e acelerando a entrega. O design System foi intgrado às metricas já estabelecidas da empresa, reforçando parâmentros que já eram analisados anteriormente, como quantidade de clicks em cada seção do site, mas agora, ainda mais rastreável por tipo de botão.",
        icons: ["figma", "claude", "letter:S"],
        mockupDesktop: new URL("./imports/componentes-1.jpg", import.meta.url).href,
        mockupMobile: new URL("./imports/areas_logadassystem.jpg", import.meta.url).href,
      },
      {
        title: "Prototipação e teste",
        desc: "Desenvolvemos protótipos de alta fidelidade para desktop e mobile, com ciclos de teste com usuários para validar decisões antes do handoff. O desenvolvimento foi realizado com o apoio direto dos arquivos do Figma e documentação. Isso acelerou a implementação de todo o visual, com a equipe de TI entregando o resultado idêntico ao protótipo em 9 dias.",
        icons: ["figma", "claude", "letter:M", "googlegemini", "maze", "clickup", "miro", "framer"],
        mockupDesktop: new URL("./imports/Captura_de_tela_2026-09-04_133633.png", import.meta.url).href,
        mockupMobile: new URL("./imports/Captura_de_tela_2026-09-06_205031.png", import.meta.url).href,
      },
    ],
    result: "A Interface foi modernizada com linguagem visual coesa, os fluxos de compra foram simplificados e o site bateu todas as metas estabelecidas para o projeto nos primeiros 3 meses.",
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
      { value: "7/10", label: "Pesquisa CSAT, antes 5/10" },
      { value: "4.7/5", label: "Pesquisa de Satisfação NPS, antes 3.9" },
    ],
  },
  {
    id: "02",
    title: "PDE",
    shortDesc: "Desenvolvimento completo do Web app para agendamento de terapia, branding e design visual. Definição de fluxos e prototipagem usando o Figma e pacote Adobe. Protótipo funcional e interativo.",
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
    problem: "A plataforma precisava de uma identidade visual forte e uma experiência de uso clara para os usuários. Sem branding definido e sem fluxos estruturados, o produto não conseguia transmitir confiança nem converter novos pacientes. Além disso, o cadastro e triagem eram feitos manualmente, paciente por paciente. Era necessário um lugar que transmitisse confiança e fosse claro o caminho que o usuário deveria seguir.",
    process: [
      {
        title: "Branding e identidade", 
        desc: "Criamos a identidade visual da plataforma, com redesign do logotipo, nova paleta de cores, tipografia e guia de estilo aplicado ao produto digital. Isso nos possibilitou desenvolver um design system no começo do projeto, que foi crucial para a comunicação clara e assertiva.", 
        icons: ["adobeillustrator", "adobephotoshop", "figma"], 
        mockupDesktop: new URL("./imports/pde-veio.png", import.meta.url).href,
      },
      {
        title: "Arquitetura de fluxos", 
        desc: "Mapeamos e estruturamos os principais fluxos do Web app, onboarding, dashboard e ações centrais, com foco em clareza e eficiência. Montamos visualmente esses fluxos para guiar a ordem e must-haves de cada interface.", 
        icons: ["figma", "miro"] 
      },
      {
        title: "Design e prototipagem", 
        desc: "Prototipamos as telas em alta fidelidade no Figma com interatividade total, validamos com os stakeholders e realizamos testes com usuários reais.", 
        icons: ["figma"] 
      },
    ],
    result: "O produto tem sua identidade própria, com fluxos validados e um protótipo interativo entregue para desenvolvimento. A marca desenvolvida tem características únicas que são visíveis e reconhecíveis por todo o projeto.",
    resultDesktopImgs: [
      new URL("./imports/Home_page_PDE.jpg", import.meta.url).href,
      new URL("./imports/pde_figma_print.jpg", import.meta.url).href,
      new URL("./imports/capta__o_de_psicologo_PDE.jpg", import.meta.url).href,
      new URL("./imports/sele_ao_de_psicologo_PDE.jpg", import.meta.url).href,
    ],
    resultMobileImgs: [
      new URL("./imports/iPhone_13___14_-_1.jpg", import.meta.url).href,
      new URL("./imports/next_PDE_mobile.jpg", import.meta.url).href,
      new URL("./imports/memorial.jpg", import.meta.url).href,
    ],
    impact: [
      { value: "100%", label: "Branding do zero" },
      { value: "3 meses", label: "Até lançamento" },
      { value: "8.5", label: "Aprovação de usuários" },
      { value: "+137", label: "Onboardings automáticos" },
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
  { label: "Email", val: "jvpereiradesign@gmail.com", labelColor: "#535353" },
  { label: "LinkedIn", val: "/in/jvpereiradesign", labelColor: "#535353" },
  { label: "telefone", val: "+55 41 992662573", labelColor: "#535353" },
];
