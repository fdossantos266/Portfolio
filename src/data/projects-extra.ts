import type { Project } from './projects'

export const puxaConversa: Project = {
  id: 'puxa-conversa',
  year: '2026',
  categories: ['web', 'mobile'],
  status: 'done',
  featured: true,
  team: 'bravva',
  stack: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Service Worker', 'i18n', 'Vercel'],
  image: '/projects/puxa-conversa.jpg',
  imageAlt: 'Puxa Conversa, cartas de conversa',
  demo: 'https://puxa-conversa-la-bravva-tech.vercel.app/',
  text: {
    fr: {
      title: 'Puxa Conversa',
      tagline: 'Jeu de cartes de conversation (drôles, couple, générales) en ligne, installable comme une app.',
      problem: 'Briser la glace et relancer une conversation entre amis ou en couple, sans application lourde ni inscription.',
      solution:
        "Une PWA légère en JavaScript natif : on choisit une catégorie, on retourne la carte et on lit la question. Le jeu est mélangé sans répétition, disponible en trois langues et fonctionne hors ligne une fois installé. Réalisé avec La Bravva Tech.",
      highlights: [
        '360 questions : 3 catégories × 40 questions × 3 langues (PT / FR / EN)',
        'Détection automatique de la langue et changement en un clic',
        'Installable sur téléphone et ordinateur (manifest, icônes, captures)',
        'Fonctionne hors ligne grâce au Service Worker et au cache versionné',
        'Animations de carte, aperçu Open Graph pour le partage, déployé sur Vercel',
      ],
    },
    pt: {
      title: 'Puxa Conversa',
      tagline: 'Jogo de cartas de conversa (engraçadas, casal, gerais) online e instalável como app.',
      problem: 'Quebrar o gelo e puxar assunto entre amigos ou casais, sem app pesado e sem cadastro.',
      solution:
        'Uma PWA leve em JavaScript puro: escolhe a categoria, vira a carta e lê a pergunta. O baralho é embaralhado sem repetição, está em três idiomas e funciona offline depois de instalado. Feito com a La Bravva Tech.',
      highlights: [
        '360 perguntas: 3 categorias × 40 perguntas × 3 idiomas (PT / FR / EN)',
        'Detecção automática do idioma e troca com um clique',
        'Instalável no celular e no computador (manifest, ícones, screenshots)',
        'Funciona offline com Service Worker e cache versionado',
        'Animações de carta, prévia Open Graph para compartilhar, deploy na Vercel',
      ],
    },
    en: {
      title: 'Puxa Conversa',
      tagline: 'Conversation card game (funny, couples, general) online and installable as an app.',
      problem: 'Break the ice and keep a conversation going with friends or a partner, with no heavy app and no sign-up.',
      solution:
        'A lightweight vanilla-JavaScript PWA: pick a category, flip the card, read the question. The deck is shuffled without repeats, available in three languages and works offline once installed. Built with La Bravva Tech.',
      highlights: [
        '360 questions: 3 categories × 40 questions × 3 languages (PT / FR / EN)',
        'Automatic language detection and one-click switching',
        'Installable on phone and desktop (manifest, icons, screenshots)',
        'Works offline with a Service Worker and versioned cache',
        'Card animations, Open Graph preview for sharing, deployed on Vercel',
      ],
    },
  },
}

export const conversor: Project = {
  id: 'conversor',
  year: '2026',
  categories: ['desktop', 'tools'],
  status: 'done',
  featured: true,
  stack: ['Go', 'JavaScript', 'pdf.js', 'pdf-lib', 'docx', 'JSZip', 'html2canvas'],
  image: '/projects/conversor.jpg',
  imageAlt: 'Conversor Folha, interface',
  text: {
    fr: {
      title: 'Conversor Folha',
      tagline: 'Convertisseur Images ⇄ PDF et Word ⇄ PDF pour Windows, 100 % local : aucun fichier n’est envoyé sur Internet.',
      problem:
        'Les convertisseurs en ligne obligent à envoyer ses documents (reçus, pièces administratives) sur des serveurs inconnus.',
      solution:
        "Un exécutable Windows écrit en Go qui embarque une interface web et un mini-serveur local, puis l'ouvre dans une fenêtre d'application (Edge ou Chrome). Toutes les conversions sont faites sur la machine de l'utilisateur.",
      highlights: [
        '4 conversions : images → PDF, PDF → images, Word → PDF, PDF → Word',
        'Options PDF : format de page, orientation, marges, résolution, qualité JPEG',
        'Glisser-déposer, réordonnancement des pages, aperçu des fichiers',
        'Partage Windows natif (WhatsApp, e-mail…) ou enregistrement dans Téléchargements',
        'Un seul .exe portable, sans installation, guide LEIA-ME inclus',
      ],
    },
    pt: {
      title: 'Conversor Folha',
      tagline: 'Conversor Imagens ⇄ PDF e Word ⇄ PDF para Windows, 100% local: nenhum arquivo é enviado para a internet.',
      problem:
        'Conversores online obrigam a mandar documentos (recibos, papéis pessoais) para servidores desconhecidos.',
      solution:
        'Um executável Windows escrito em Go que embute uma interface web e um mini-servidor local, e abre tudo numa janela de app (Edge ou Chrome). Todas as conversões acontecem no computador do usuário.',
      highlights: [
        '4 conversões: imagens → PDF, PDF → imagens, Word → PDF, PDF → Word',
        'Opções de PDF: tamanho de página, orientação, margem, resolução, qualidade JPEG',
        'Arrastar e soltar, reordenar páginas, prévia dos arquivos',
        'Compartilhamento nativo do Windows (WhatsApp, e-mail…) ou salvar em Downloads',
        'Um único .exe portátil, sem instalação, com guia LEIA-ME',
      ],
    },
    en: {
      title: 'Conversor Folha',
      tagline: 'Images ⇄ PDF and Word ⇄ PDF converter for Windows. 100% local, no file ever leaves the computer.',
      problem: 'Online converters force you to upload documents (receipts, personal papers) to unknown servers.',
      solution:
        'A Windows executable written in Go that embeds a web UI and a tiny local server, then opens it in an app window (Edge or Chrome). Every conversion runs on the user’s machine.',
      highlights: [
        '4 conversions: images → PDF, PDF → images, Word → PDF, PDF → Word',
        'PDF options: page size, orientation, margins, resolution, JPEG quality',
        'Drag & drop, page reordering, file previews',
        'Native Windows share sheet (WhatsApp, email…) or save to Downloads',
        'Single portable .exe, no install, README guide included',
      ],
    },
  },
}

export const fidelidade: Project = {
  id: 'fidelidade',
  year: '2026',
  categories: ['mobile'],
  status: 'design',
  stack: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Firebase Messaging', 'Riverpod', 'go_router', 'PlantUML'],
  image: '/projects/fidelidade.svg',
  text: {
    fr: {
      title: 'App de fidélité restaurant',
      tagline: 'Application mobile de points de fidélité : cumul automatique à chaque achat et réductions en un scan.',
      problem:
        'Une carte de fidélité papier se perd, ne donne aucune visibilité au client et ne fournit aucune donnée au restaurant.',
      solution:
        "Une app Flutter + Firebase avec deux profils : le client consulte son solde, son historique et présente son QR code ; l'administrateur scanne, enregistre l'achat et gère les points. Projet actuellement en phase de conception.",
      highlights: [
        'Cahier des charges et règles métier : 10 € dépensés = 10 points = 1 € de réduction',
        'Modèle de données Firestore (utilisateurs, historique, configuration)',
        '8 diagrammes UML (PlantUML) : cas d’utilisation, séquences, activités, classes, composants, navigation',
        'Identification par QR code et notifications push',
        'Architecture : Riverpod pour l’état, go_router pour la navigation',
      ],
    },
    pt: {
      title: 'App de fidelidade para restaurante',
      tagline: 'App mobile de pontos de fidelidade: acumula automaticamente a cada compra e resgata desconto com um scan.',
      problem:
        'Cartão fidelidade de papel se perde, não mostra nada ao cliente e não gera nenhum dado para o restaurante.',
      solution:
        'Um app Flutter + Firebase com dois perfis: o cliente vê saldo, histórico e mostra seu QR code; o administrador escaneia, registra a compra e gerencia os pontos. Projeto em fase de concepção.',
      highlights: [
        'Documento de requisitos e regras de negócio: 10 € gastos = 10 pontos = 1 € de desconto',
        'Modelo de dados no Firestore (usuários, histórico, configuração)',
        '8 diagramas UML (PlantUML): casos de uso, sequência, atividades, classes, componentes, navegação',
        'Identificação por QR code e notificações push',
        'Arquitetura: Riverpod para estado, go_router para navegação',
      ],
    },
    en: {
      title: 'Restaurant loyalty app',
      tagline: 'Mobile loyalty-points app: points earned automatically on every purchase, discounts redeemed with a scan.',
      problem: 'Paper loyalty cards get lost, give customers no visibility and give the restaurant no data.',
      solution:
        'A Flutter + Firebase app with two profiles: customers check their balance and history and show a QR code; the admin scans it, records the purchase and manages points. Currently in the design phase.',
      highlights: [
        'Requirements and business rules: €10 spent = 10 points = €1 off',
        'Firestore data model (users, history, configuration)',
        '8 UML diagrams (PlantUML): use cases, sequences, activity, class, component, navigation',
        'QR-code identification and push notifications',
        'Architecture: Riverpod for state, go_router for navigation',
      ],
    },
  },
}
