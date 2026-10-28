export type Lang = 'fr' | 'pt' | 'en'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

const fr = {
  nav: { about: 'À propos', skills: 'Outils', projects: 'Projets', contact: 'Contact' },
  hero: {
    hello: 'Salut, moi c’est',
    role: 'Développeur web · Tech & réseaux',
    pitch:
      'Je crée des sites, des applis et des petits outils qui simplifient la vie. À côté, je bricole de l’électronique et des réseaux.',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    cv: 'Télécharger mon CV',
    location: 'Cayenne, Guyane',
    available: 'Ouvert à de nouveaux projets',
  },
  about: {
    title: 'À propos',
    p1: "J'ai grandi entre le Brésil et la France, et aujourd'hui je vis en Guyane. J'ai fait un BTS en informatique et réseaux à Lannion, et depuis je n'ai pas arrêté de monter des projets.",
    p2: "Ce qui me plaît, c'est de construire un truc de A à Z : un capteur sur un ESP32, le serveur qui récupère les données, l'appli qui les affiche. Avec La Bravva Tech, je fais aussi des sites et des applis pour d'autres. Vous avez une idée ? On en parle.",
    facts: [
      { k: 'Basé à', v: 'Cayenne, Guyane' },
      { k: 'Langues', v: 'Portugais, français, anglais' },
      { k: 'Je fais', v: 'Sites · Applis · Outils · IoT' },
      { k: 'Équipe', v: 'La Bravva Tech' },
    ],
  },
  skills: {
    title: 'Mes outils',
    subtitle: 'Ce que j’utilise le plus.',
    groups: {
      web: 'Web & applis',
      back: 'Serveur & données',
      iot: 'Électronique & IoT',
      sys: 'Systèmes & réseaux',
    },
  },
  projects: {
    title: 'Projets',
    subtitle: 'Quelques trucs que j’ai construits, perso, pour l’école ou pour d’autres.',
    all: 'Tous',
    cats: { iot: 'IoT', web: 'Web', mobile: 'Mobile', desktop: 'Desktop', tools: 'Outils', games: 'Jeux' },
    details: 'Détails',
    code: 'Code',
    demo: 'Démo',
    close: 'Fermer',
    problem: 'Le besoin',
    solution: 'Ce que j’ai fait',
    highlights: 'En bref',
    stack: 'Technos',
    status: { done: 'Terminé', wip: 'En cours', design: 'En conception' },
    team: 'Avec La Bravva Tech',
    featured: 'Coup de cœur',
  },
  contact: {
    title: 'Un projet en tête ?',
    text: 'Un site, une appli, un outil sur mesure ou juste une question : écrivez-moi, je réponds vite.',
    email: 'Envoyer un e-mail',
    copy: 'Copier',
    copied: 'Copié !',
  },
  footer: { made: 'Fait par' },
  theme: { light: 'Thème clair', dark: 'Thème sombre' },
}

export type Dict = typeof fr

const pt: Dict = {
  nav: { about: 'Sobre', skills: 'Ferramentas', projects: 'Projetos', contact: 'Contato' },
  hero: {
    hello: 'Oi, eu sou o',
    role: 'Desenvolvedor web · Tecnologia & redes',
    pitch:
      'Crio sites, apps e pequenas ferramentas que facilitam a vida. Nas horas vagas, mexo com eletrônica e redes.',
    ctaProjects: 'Ver meus projetos',
    ctaContact: 'Falar comigo',
    cv: 'Baixar meu currículo',
    location: 'Caiena, Guiana Francesa',
    available: 'Aberto a novos projetos',
  },
  about: {
    title: 'Sobre mim',
    p1: 'Cresci entre o Brasil e a França e hoje moro na Guiana Francesa. Fiz um BTS de informática e redes em Lannion e, desde então, não parei de inventar projeto.',
    p2: 'O que eu curto é montar uma coisa do começo ao fim: um sensor num ESP32, o servidor que recebe os dados, o app que mostra tudo. Com a La Bravva Tech, também faço sites e apps para outras pessoas. Tem uma ideia? Bora conversar.',
    facts: [
      { k: 'Moro em', v: 'Caiena, Guiana Francesa' },
      { k: 'Idiomas', v: 'Português, francês, inglês' },
      { k: 'Eu faço', v: 'Sites · Apps · Ferramentas · IoT' },
      { k: 'Equipe', v: 'La Bravva Tech' },
    ],
  },
  skills: {
    title: 'Minhas ferramentas',
    subtitle: 'O que eu mais uso.',
    groups: {
      web: 'Web & apps',
      back: 'Servidor & dados',
      iot: 'Eletrônica & IoT',
      sys: 'Sistemas & redes',
    },
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Algumas coisas que eu construí, por conta própria, na escola ou para outras pessoas.',
    all: 'Todos',
    cats: { iot: 'IoT', web: 'Web', mobile: 'Mobile', desktop: 'Desktop', tools: 'Ferramentas', games: 'Jogos' },
    details: 'Detalhes',
    code: 'Código',
    demo: 'Demo',
    close: 'Fechar',
    problem: 'A necessidade',
    solution: 'O que eu fiz',
    highlights: 'Resumindo',
    stack: 'Tecnologias',
    status: { done: 'Concluído', wip: 'Em andamento', design: 'Em concepção' },
    team: 'Com a La Bravva Tech',
    featured: 'Favorito',
  },
  contact: {
    title: 'Tem um projeto em mente?',
    text: 'Um site, um app, uma ferramenta sob medida ou só uma dúvida: me chama, respondo rápido.',
    email: 'Enviar e-mail',
    copy: 'Copiar',
    copied: 'Copiado!',
  },
  footer: { made: 'Feito por' },
  theme: { light: 'Tema claro', dark: 'Tema escuro' },
}

const en: Dict = {
  nav: { about: 'About', skills: 'Tools', projects: 'Projects', contact: 'Contact' },
  hero: {
    hello: "Hey, I'm",
    role: 'Web developer · Tech & networks',
    pitch:
      'I build websites, apps and small tools that make life easier. On the side, I tinker with electronics and networks.',
    ctaProjects: 'See my work',
    ctaContact: 'Get in touch',
    cv: 'Download my CV',
    location: 'Cayenne, French Guiana',
    available: 'Open to new projects',
  },
  about: {
    title: 'About me',
    p1: "I grew up between Brazil and France and now live in French Guiana. I studied IT and networking in Lannion, and I haven't stopped building things since.",
    p2: "What I enjoy most is making something from start to finish: a sensor on an ESP32, the server that collects the data, the app that shows it. With La Bravva Tech I also build websites and apps for other people. Got an idea? Let's talk.",
    facts: [
      { k: 'Based in', v: 'Cayenne, French Guiana' },
      { k: 'Languages', v: 'Portuguese, French, English' },
      { k: 'I make', v: 'Websites · Apps · Tools · IoT' },
      { k: 'Team', v: 'La Bravva Tech' },
    ],
  },
  skills: {
    title: 'My tools',
    subtitle: 'What I use the most.',
    groups: {
      web: 'Web & apps',
      back: 'Server & data',
      iot: 'Electronics & IoT',
      sys: 'Systems & networks',
    },
  },
  projects: {
    title: 'Projects',
    subtitle: "A few things I've built, for myself, for school or for other people.",
    all: 'All',
    cats: { iot: 'IoT', web: 'Web', mobile: 'Mobile', desktop: 'Desktop', tools: 'Tools', games: 'Games' },
    details: 'Details',
    code: 'Code',
    demo: 'Demo',
    close: 'Close',
    problem: 'The need',
    solution: 'What I did',
    highlights: 'In short',
    stack: 'Tech',
    status: { done: 'Done', wip: 'In progress', design: 'In design' },
    team: 'With La Bravva Tech',
    featured: 'Favorite',
  },
  contact: {
    title: 'Got a project in mind?',
    text: 'A website, an app, a custom tool or just a question: send me a message, I reply quickly.',
    email: 'Send an email',
    copy: 'Copy',
    copied: 'Copied!',
  },
  footer: { made: 'Made by' },
  theme: { light: 'Light theme', dark: 'Dark theme' },
}

export const DICTS: Record<Lang, Dict> = { fr, pt, en }
