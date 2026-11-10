export type Lang = 'fr' | 'pt' | 'en'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

const fr = {
  nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
  hero: {
    hello: 'Bonjour, je suis',
    role: 'Développeur web · Systèmes & réseaux',
    pitch:
      'Je conçois des sites, des applications et des outils sur mesure pour les particuliers et les entreprises, avec une base solide en réseaux et en électronique.',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    cv: 'Télécharger mon CV',
    location: 'Cayenne, Guyane',
    available: 'Disponible pour de nouveaux projets',
  },
  about: {
    title: 'À propos',
    p1: "Originaire du Brésil, j'ai fait mes études en France et je suis aujourd'hui installé en Guyane. Titulaire d'un BTS en informatique et réseaux, je développe des projets web, mobiles et embarqués.",
    p2: "J'interviens sur l'ensemble d'un projet : de l'électronique et du serveur jusqu'à l'interface utilisateur. Avec La Bravva Tech, je développe des sites et des applications. Vous avez un projet ? Je serai ravi d'en discuter.",
    facts: [
      { k: 'Localisation', v: 'Cayenne, Guyane' },
      { k: 'Langues', v: 'Portugais, français, anglais' },
      { k: 'Services', v: 'Sites · Applications · Outils · IoT' },
      { k: 'Structure', v: 'La Bravva Tech' },
    ],
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Les technologies que j’utilise le plus.',
    groups: {
      web: 'Web & applications',
      back: 'Serveur & données',
      iot: 'Électronique & IoT',
      sys: 'Systèmes & réseaux',
    },
  },
  projects: {
    title: 'Projets',
    subtitle: 'Une sélection de projets personnels, académiques et en équipe.',
    all: 'Tous',
    cats: { iot: 'IoT', web: 'Web', mobile: 'Mobile', desktop: 'Desktop', tools: 'Outils', games: 'Jeux' },
    details: 'Détails',
    code: 'Code',
    demo: 'Démo',
    close: 'Fermer',
    problem: 'Le besoin',
    solution: 'La solution',
    highlights: 'Points clés',
    stack: 'Technologies',
    status: { done: 'Terminé', wip: 'En cours', design: 'En conception' },
    team: 'Avec La Bravva Tech',
    featured: 'À la une',
  },
  contact: {
    title: 'Parlons de votre projet',
    text: "Site web, application, outil sur mesure ou simple question : n'hésitez pas à me contacter. Je réponds rapidement.",
    email: 'Envoyer un e-mail',
    copy: 'Copier',
    copied: 'Copié !',
  },
  footer: { made: 'Réalisé par' },
  theme: { light: 'Thème clair', dark: 'Thème sombre' },
}

export type Dict = typeof fr

const pt: Dict = {
  nav: { about: 'Sobre', skills: 'Competências', projects: 'Projetos', contact: 'Contato' },
  hero: {
    hello: 'Olá, eu sou',
    role: 'Desenvolvedor web · Sistemas & redes',
    pitch:
      'Desenvolvo sites, aplicativos e ferramentas sob medida para pessoas e empresas, com uma base sólida em redes e eletrônica.',
    ctaProjects: 'Ver meus projetos',
    ctaContact: 'Entrar em contato',
    cv: 'Baixar currículo',
    location: 'Caiena, Guiana Francesa',
    available: 'Disponível para novos projetos',
  },
  about: {
    title: 'Sobre mim',
    p1: 'Sou brasileiro, estudei na França e hoje moro na Guiana Francesa. Sou formado em informática e redes (BTS) e desenvolvo projetos web, mobile e embarcados.',
    p2: 'Atuo em todas as etapas de um projeto: da eletrônica e do servidor até a interface do usuário. Com a La Bravva Tech, desenvolvo sites e aplicativos. Tem um projeto? Será um prazer conversar.',
    facts: [
      { k: 'Localização', v: 'Caiena, Guiana Francesa' },
      { k: 'Idiomas', v: 'Português, francês, inglês' },
      { k: 'Serviços', v: 'Sites · Apps · Ferramentas · IoT' },
      { k: 'Empresa', v: 'La Bravva Tech' },
    ],
  },
  skills: {
    title: 'Competências',
    subtitle: 'As tecnologias que mais utilizo.',
    groups: {
      web: 'Web & aplicativos',
      back: 'Servidor & dados',
      iot: 'Eletrônica & IoT',
      sys: 'Sistemas & redes',
    },
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Uma seleção de projetos pessoais, acadêmicos e em equipe.',
    all: 'Todos',
    cats: { iot: 'IoT', web: 'Web', mobile: 'Mobile', desktop: 'Desktop', tools: 'Ferramentas', games: 'Jogos' },
    details: 'Detalhes',
    code: 'Código',
    demo: 'Demo',
    close: 'Fechar',
    problem: 'A necessidade',
    solution: 'A solução',
    highlights: 'Destaques',
    stack: 'Tecnologias',
    status: { done: 'Concluído', wip: 'Em andamento', design: 'Em concepção' },
    team: 'Com a La Bravva Tech',
    featured: 'Destaque',
  },
  contact: {
    title: 'Vamos conversar sobre o seu projeto',
    text: 'Site, aplicativo, ferramenta sob medida ou apenas uma dúvida: fique à vontade para entrar em contato. Respondo rapidamente.',
    email: 'Enviar e-mail',
    copy: 'Copiar',
    copied: 'Copiado!',
  },
  footer: { made: 'Desenvolvido por' },
  theme: { light: 'Tema claro', dark: 'Tema escuro' },
}

const en: Dict = {
  nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
  hero: {
    hello: "Hello, I'm",
    role: 'Web developer · Systems & networks',
    pitch:
      'I design websites, applications and custom tools for individuals and businesses, backed by a solid foundation in networking and electronics.',
    ctaProjects: 'View my work',
    ctaContact: 'Contact me',
    cv: 'Download CV',
    location: 'Cayenne, French Guiana',
    available: 'Available for new projects',
  },
  about: {
    title: 'About',
    p1: "Born in Brazil, I studied in France and am now based in French Guiana. I hold a two-year degree in IT and networking (BTS) and build web, mobile and embedded projects.",
    p2: "I work across the whole project: from electronics and servers to the user interface. With La Bravva Tech, I build websites and applications. Have a project in mind? I'd be glad to discuss it.",
    facts: [
      { k: 'Location', v: 'Cayenne, French Guiana' },
      { k: 'Languages', v: 'Portuguese, French, English' },
      { k: 'Services', v: 'Websites · Apps · Tools · IoT' },
      { k: 'Company', v: 'La Bravva Tech' },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'The technologies I use most.',
    groups: {
      web: 'Web & applications',
      back: 'Server & data',
      iot: 'Electronics & IoT',
      sys: 'Systems & networks',
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of personal, academic and team projects.',
    all: 'All',
    cats: { iot: 'IoT', web: 'Web', mobile: 'Mobile', desktop: 'Desktop', tools: 'Tools', games: 'Games' },
    details: 'Details',
    code: 'Code',
    demo: 'Demo',
    close: 'Close',
    problem: 'The need',
    solution: 'The solution',
    highlights: 'Key points',
    stack: 'Technologies',
    status: { done: 'Completed', wip: 'In progress', design: 'In design' },
    team: 'With La Bravva Tech',
    featured: 'Featured',
  },
  contact: {
    title: "Let's talk about your project",
    text: 'Website, application, custom tool or just a question: feel free to get in touch. I reply quickly.',
    email: 'Send an email',
    copy: 'Copy',
    copied: 'Copied!',
  },
  footer: { made: 'Built by' },
  theme: { light: 'Light theme', dark: 'Dark theme' },
}

export const DICTS: Record<Lang, Dict> = { fr, pt, en }
