import type { Lang } from '../i18n/translations'
import { conversor, fidelidade, puxaConversa } from './projects-extra'

export type Category = 'iot' | 'web' | 'mobile' | 'desktop' | 'tools' | 'games'

type Text = {
  title: string
  tagline: string
  problem: string
  solution: string
  highlights: string[]
}

export type Project = {
  id: string
  year: string
  categories: Category[]
  status: 'done' | 'wip' | 'design'
  /** Built with La Bravva Tech (shows the team badge) */
  team?: 'bravva'
  featured?: boolean
  stack: string[]
  image: string
  imageAlt?: string
  repo?: string
  demo?: string
  text: Record<Lang, Text>
}

// Ajouter `repo` / `demo` quand un projet est en ligne
const base: Project[] = [
  {
    id: 'serre',
    year: '2026',
    categories: ['iot', 'web'],
    status: 'done',
    featured: true,
    stack: ['ESP32', 'C++', 'MQTT', 'Node.js', 'PostgreSQL', 'React', 'TypeScript', 'WebSockets', 'JWT', 'Telegram API'],
    image: '/projects/serre.svg',
    text: {
      fr: {
        title: 'Serre Monitorée',
        tagline: 'Système IoT full-stack de supervision d’une serre, du capteur au tableau de bord.',
        problem:
          "Suivre l'état d'une serre (conditions ambiantes, alertes) sans être sur place, avec un historique exploitable.",
        solution:
          "Des capteurs reliés à un ESP32 publient leurs mesures en MQTT. Une API Node.js les reçoit, les stocke dans PostgreSQL et les diffuse en temps réel à un tableau de bord React/TypeScript. Projet de fin d'année du BTS CIEL.",
        highlights: [
          'Chaîne complète : électronique → firmware → broker MQTT → API → base de données → front',
          'Mises à jour en temps réel via WebSockets',
          'Authentification sécurisée par JWT',
          'Alertes automatiques envoyées sur Telegram',
        ],
      },
      pt: {
        title: 'Estufa Monitorada',
        tagline: 'Sistema IoT full-stack de monitoramento de estufa, do sensor ao dashboard.',
        problem:
          'Acompanhar o estado de uma estufa (condições do ambiente, alertas) sem estar no local, com histórico utilizável.',
        solution:
          'Sensores ligados a um ESP32 publicam as medições via MQTT. Uma API em Node.js recebe os dados, grava no PostgreSQL e transmite em tempo real para um dashboard em React/TypeScript. Projeto de fim de ano do BTS CIEL.',
        highlights: [
          'Cadeia completa: eletrônica → firmware → broker MQTT → API → banco de dados → front',
          'Atualizações em tempo real com WebSockets',
          'Autenticação segura com JWT',
          'Alertas automáticos enviados pelo Telegram',
        ],
      },
      en: {
        title: 'Monitored Greenhouse',
        tagline: 'Full-stack IoT system to monitor a greenhouse, from sensor to dashboard.',
        problem:
          'Keep track of a greenhouse (ambient conditions, alerts) remotely, with a usable history of measurements.',
        solution:
          'Sensors wired to an ESP32 publish readings over MQTT. A Node.js API ingests them, stores them in PostgreSQL and streams them live to a React/TypeScript dashboard. Final-year BTS CIEL project.',
        highlights: [
          'End-to-end chain: electronics → firmware → MQTT broker → API → database → front-end',
          'Real-time updates over WebSockets',
          'Secure JWT authentication',
          'Automatic alerts sent to Telegram',
        ],
      },
    },
  },
  {
    id: 'organizador',
    year: '2026',
    categories: ['desktop', 'tools'],
    status: 'done',
    featured: true,
    stack: ['Python', 'Tkinter', 'openpyxl', 'PyInstaller'],
    image: '/projects/organizador.png',
    imageAlt: 'Organizador de Planilhas, interface',
    text: {
      fr: {
        title: 'Organisateur de tableurs',
        tagline: 'Application Windows qui trie, filtre et découpe un fichier Excel sans jamais toucher à l’original.',
        problem:
          "Des tableaux Excel métier (ex. suivi de formations obligatoires) qu'il faut trier, filtrer et répartir à la main. Long et source d'erreurs pour des utilisateurs non techniques.",
        solution:
          "Une interface guidée en 4 étapes : ouvrir la feuille, vérifier la table détectée, choisir l'ordre / le filtre / le découpage, puis générer une copie organisée. Distribuée en .exe autonome avec un guide PDF.",
        highlights: [
          'Détection automatique de la table, des en-têtes et des cellules fusionnées',
          'Analyse des colonnes (types, valeurs possibles) pour proposer les bons choix',
          'Tri, filtre et séparation en onglets, formules et mise en forme conservées',
          'Fichier original jamais modifié ; aperçu et résumé avant création',
          'Exécutable Windows (PyInstaller) + guide utilisateur',
        ],
      },
      pt: {
        title: 'Organizador de Planilhas',
        tagline: 'App para Windows que ordena, filtra e separa uma planilha Excel sem nunca alterar o original.',
        problem:
          'Planilhas de trabalho (ex.: controle de treinamentos obrigatórios) que precisavam ser ordenadas, filtradas e separadas à mão. Demorado e sujeito a erros para usuários não técnicos.',
        solution:
          'Uma interface guiada em 4 passos: abrir a planilha, conferir a tabela detectada, escolher ordem / filtro / separação e gerar uma cópia organizada. Distribuído como .exe independente, com guia em PDF.',
        highlights: [
          'Detecção automática da tabela, dos cabeçalhos e das células mescladas',
          'Análise das colunas (tipos, valores possíveis) para sugerir as opções certas',
          'Ordenar, filtrar e separar em abas, mantendo fórmulas e formatação',
          'Arquivo original nunca é alterado; prévia e resumo antes de criar',
          'Executável Windows (PyInstaller) + guia do usuário',
        ],
      },
      en: {
        title: 'Spreadsheet Organizer',
        tagline: 'Windows app that sorts, filters and splits an Excel workbook without ever touching the original.',
        problem:
          'Business spreadsheets (e.g. mandatory-training tracking) that had to be sorted, filtered and split by hand: slow and error-prone for non-technical users.',
        solution:
          'A guided 4-step interface: open the workbook, check the detected table, pick sort / filter / split options, then generate an organized copy. Shipped as a standalone .exe with a PDF guide.',
        highlights: [
          'Automatic detection of the table, headers and merged cells',
          'Column analysis (types, possible values) to offer the right choices',
          'Sort, filter and split into sheets, formulas and formatting preserved',
          'Original file never modified; preview and summary before creating',
          'Windows executable (PyInstaller) + user guide',
        ],
      },
    },
  },
  {
    id: 'presente-pixel',
    year: '2026',
    categories: ['web'],
    status: 'wip',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'React Router', 'CSS Modules', 'Vercel'],
    image: '/projects/pixel.svg',
    repo: 'https://github.com/fdossantos266/presente-pixel',
    text: {
      fr: {
        title: 'Presente Pixel',
        tagline: 'Site-cadeau au style rétro jeu vidéo, pensé comme un template modulaire réutilisable.',
        problem:
          "Créer un site personnalisé (mini-jeux, textes, animations) que d'autres personnes puissent réutiliser et remplir sans toucher au code.",
        solution:
          "Une application React + TypeScript avec un système de modules : chaque section est un module avec sa vue publique et son formulaire d'administration. Les contenus sont stockés dans Supabase et gérés depuis un panneau admin.",
        highlights: [
          'Authentification et rôles (admin / visiteur) avec routes protégées',
          'Architecture modulaire : registre de modules, vue + formulaire admin par module',
          'Bibliothèque de composants pixel-art (boutons, fenêtres, champs)',
          'Développé par phases, avec un historique Git propre',
          'Déployé sur Vercel',
        ],
      },
      pt: {
        title: 'Presente Pixel',
        tagline: 'Site-presente no estilo videogame retrô, pensado como um template modular reutilizável.',
        problem:
          'Criar um site personalizado (minijogos, textos, animações) que outras pessoas possam reaproveitar e preencher sem mexer no código.',
        solution:
          'Uma aplicação React + TypeScript com sistema de módulos: cada seção é um módulo com sua visualização pública e seu formulário de administração. Os conteúdos ficam no Supabase e são geridos por um painel admin.',
        highlights: [
          'Autenticação e papéis (admin / visitante) com rotas protegidas',
          'Arquitetura modular: registro de módulos, view + formulário admin por módulo',
          'Biblioteca de componentes pixel-art (botões, janelas, campos)',
          'Desenvolvido em fases, com histórico Git organizado',
          'Deploy na Vercel',
        ],
      },
      en: {
        title: 'Presente Pixel',
        tagline: 'Retro video-game style gift website, built as a reusable modular template.',
        problem:
          'Build a personalized site (mini-games, texts, animations) that other people can reuse and fill in without touching code.',
        solution:
          'A React + TypeScript app with a module system: each section is a module with its own public view and admin form. Content lives in Supabase and is managed from an admin panel.',
        highlights: [
          'Authentication and roles (admin / viewer) with protected routes',
          'Modular architecture: module registry, view + admin form per module',
          'Pixel-art component library (buttons, windows, fields)',
          'Built in phases with a clean Git history',
          'Deployed on Vercel',
        ],
      },
    },
  },
  {
    id: 'overlay',
    year: '2025',
    categories: ['web', 'tools'],
    status: 'done',
    stack: ['Node.js', 'Twitch Helix API', 'YouTube Data API v3', 'Puppeteer', 'HTML / CSS', 'OBS Studio'],
    image: '/projects/overlay.svg',
    text: {
      fr: {
        title: 'Overlay multi-plateforme',
        tagline: 'Compteur de spectateurs unifié Twitch + YouTube + Kick pour mes lives « Atomic Cafein ».',
        problem:
          'En streamant sur trois plateformes en même temps, impossible de voir l’audience totale en direct dans OBS.',
        solution:
          "Un back-end Node.js interroge l'API Twitch Helix, l'API YouTube Data v3 et récupère les données Kick via Puppeteer, puis les agrège dans un overlay web intégré à OBS.",
        highlights: [
          'Agrégation de trois sources hétérogènes (deux API officielles + scraping)',
          'Widget « en cours de lecture » pour la musique',
          'Kit d’overlays complet à l’identité visuelle de la chaîne',
        ],
      },
      pt: {
        title: 'Overlay multiplataforma',
        tagline: 'Contador de espectadores unificado Twitch + YouTube + Kick para as minhas lives “Atomic Cafein”.',
        problem:
          'Fazendo live em três plataformas ao mesmo tempo, não dava para ver a audiência total ao vivo no OBS.',
        solution:
          'Um back-end em Node.js consulta a API Twitch Helix, a YouTube Data API v3 e obtém os dados da Kick via Puppeteer, agregando tudo em um overlay web dentro do OBS.',
        highlights: [
          'Agregação de três fontes diferentes (duas APIs oficiais + scraping)',
          'Widget de “tocando agora” para a música',
          'Kit completo de overlays com a identidade visual do canal',
        ],
      },
      en: {
        title: 'Multi-platform overlay',
        tagline: 'Unified Twitch + YouTube + Kick viewer counter for my “Atomic Cafein” streams.',
        problem:
          'Streaming on three platforms at once made it impossible to see the total live audience inside OBS.',
        solution:
          'A Node.js back-end queries the Twitch Helix API and YouTube Data API v3, retrieves Kick data with Puppeteer, and aggregates everything into a web overlay embedded in OBS.',
        highlights: [
          'Aggregates three heterogeneous sources (two official APIs + scraping)',
          '“Now playing” music widget',
          'Complete overlay kit matching the channel’s visual identity',
        ],
      },
    },
  },
  {
    id: 'clicker',
    year: '2026',
    categories: ['games'],
    status: 'done',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/projects/clicker.svg',
    text: {
      fr: {
        title: 'Clicker game HTML5',
        tagline: 'Jeu incrémental pour navigateur, en un seul fichier et sans dépendance.',
        problem:
          'Explorer le développement de jeux web légers, publiables sur des portails comme CrazyGames.',
        solution:
          'Un jeu « clicker » en JavaScript pur : boucle de jeu, économie, améliorations, niveaux et prestige. Le code est découpé en zones commentées pour personnaliser titre, couleurs, personnages et sons sans connaissances techniques.',
        highlights: [
          'Système d’améliorations, d’XP, de niveaux et de prestige',
          'Effets sonores et animations CSS',
          'Template personnalisable par « zones » documentées',
          '~30 Ko, aucune dépendance',
        ],
      },
      pt: {
        title: 'Jogo clicker HTML5',
        tagline: 'Jogo incremental para navegador, em um único arquivo e sem dependências.',
        problem:
          'Explorar o desenvolvimento de jogos web leves, publicáveis em portais como o CrazyGames.',
        solution:
          'Um jogo “clicker” em JavaScript puro: loop de jogo, economia, upgrades, níveis e prestígio. O código é dividido em zonas comentadas para personalizar título, cores, personagens e sons sem conhecimento técnico.',
        highlights: [
          'Sistema de upgrades, XP, níveis e prestígio',
          'Efeitos sonoros e animações em CSS',
          'Template personalizável por “zonas” documentadas',
          '~30 KB, zero dependências',
        ],
      },
      en: {
        title: 'HTML5 clicker game',
        tagline: 'Browser incremental game in a single file, with zero dependencies.',
        problem: 'Explore lightweight web game development, publishable on portals such as CrazyGames.',
        solution:
          'A vanilla-JavaScript clicker: game loop, economy, upgrades, levels and prestige. The code is split into commented “zones” so title, colors, characters and sounds can be customized without technical knowledge.',
        highlights: [
          'Upgrades, XP, levels and prestige system',
          'Sound effects and CSS animations',
          'Customizable template through documented “zones”',
          '~30 KB, no dependencies',
        ],
      },
    },
  },
]

// Display order on the page
const ORDER = ['serre', 'puxa-conversa', 'organizador', 'conversor', 'presente-pixel', 'fidelidade', 'overlay', 'clicker']
const all = [...base, puxaConversa, conversor, fidelidade]
export const projects: Project[] = ORDER.map((id) => all.find((p) => p.id === id)!).filter(Boolean)
