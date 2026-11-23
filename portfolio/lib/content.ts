// Tous les textes du site, en français et en anglais.
export type Lang = "fr" | "en";

const fr = {
  nav: { expertise: "Expertise", projects: "Projets", journey: "Parcours", contact: "Contact" },
  header: { cv: "Mon CV", cvLabel: "Télécharger mon CV en PDF", home: "retour en haut", mainNav: "Navigation principale", toEn: "Switch to English", themeLight: "Passer en mode clair", themeDark: "Passer en mode sombre" },
  hero: {
    l1: "Développeuse fullstack",
    l2: "+ intelligence artificielle",
    text: "Je conçois des applications complètes, sécurisées et intelligentes. J’intègre l’IA et j’automatise les tâches répétitives pour que votre équipe gagne du temps.",
    seeProjects: "Voir mes projets",
    cv: "Télécharger mon CV",
    chips: ["Applications sécurisées", "IA intégrée", "Automatisations n8n"],
    portrait: "Portrait de",
  },
  services: {
    h: ["Des applications", "complètes, sûres", "et intelligentes."],
    items: [
      { title: "De l’idée à la mise en ligne", text: "Interfaces React et Next.js, API Django, bases MySQL, de la maquette au déploiement." },
      { title: "Une sécurité pensée dès le départ", text: "Authentification JWT, accès par rôle, validation stricte des données." },
      { title: "L’IA et l’automatisation", text: "Assistants RAG, reconnaissance vocale, classification, flux n8n qui suppriment les tâches répétitives." },
    ],
  },
  projects: {
    title: "Projets",
    lead: "Chaque projet en démonstration, du premier écran au code.",
    code: "Code source",
    live: "Voir en ligne",
    tech: "Technologies",
    roles: { pecheur: "Pêcheur", acheteur: "Acheteur", livreur: "Livreur" } as Record<string, string>,
    demoDesktop: "Démonstration de {t} sur ordinateur",
    demoPhone: "Démonstration de {t} sur téléphone",
    items: {
      lebougui: {
        text: "Une marketplace qui relie pêcheurs, acheteurs et livreurs. Le pêcheur publie sa prise à la voix, en wolof, et l’IA prépare l’annonce.",
        features: ["Publication vocale en wolof, transcrite et classée par l’IA", "Commande, paiement et suivi GPS de la livraison", "Accès sécurisé par rôle, avec un espace d’administration"],
      },
      smarthelp: {
        text: "Un assistant qui traite les réclamations clients. Il écoute les messages vocaux, lit les photos et retrouve la bonne réponse dans la FAQ de l’entreprise.",
        features: ["Réclamation par texte, voix ou photo", "Réponse trouvée dans les documents de l’entreprise (RAG)", "Motif, règle applicable et statut affichés d’un coup d’œil"],
      },
      "sunu-idee": {
        text: "Une boîte à idées numérique, anonyme et collaborative. Chaque idée est rangée par catégorie, avec une suggestion de l’IA à partir du titre.",
        features: ["Créer, modifier, supprimer et rechercher une idée", "Catégories en couleur, proposées par l’IA", "Idées conservées dans le navigateur"],
      },
    } as Record<string, { text: string; features: string[] }>,
    other: { title: "JOJ Events", text: "Plateforme web avec un chatbot IA qui guide les touristes et les visiteurs des JOJ." },
  },
  skills: {
    title: "Compétences",
    words: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Python", "Django", "DRF", "MySQL", "JWT", "RAG", "Reconnaissance vocale", "Classification", "n8n", "Git", "Kanban"],
  },
  journey: {
    title: "Parcours",
    cv: "Télécharger mon CV",
    formations: "Formations",
    experiences: "Expériences",
    languages: "Langues",
    f: [
      { year: "2026", title: "IBM AI Developer", place: "Coursera, en cours" },
      { year: "2025 – 2026", title: "CPS Développement Web, Mobile et IA", place: "Simplon Sénégal" },
      { year: "2024 – 2025", title: "Certificat professionnel Web et Mobile", place: "ISEP Amadou Trawaré" },
      { year: "2022 – 2023", title: "CCNA Cisco", place: "iNetwork Training Academy" },
      { year: "2021 – 2024", title: "Licence en mathématiques et informatique appliquées à la cybersécurité", place: "Université Numérique Cheikh Hamidou Kane" },
    ],
    e: [
      { year: "2023", title: "Formatrice Ubuntu", place: "FORCE-N, auprès de lycéens" },
      { year: "2022", title: "Formatrice assistante Networking Essentials", place: "Tutorat en ligne et ateliers pratiques" },
    ],
    langs: [
      { name: "Français", level: "avancé" },
      { name: "Wolof", level: "langue maternelle" },
      { name: "Anglais", level: "intermédiaire" },
    ],
  },
  contact: {
    h1: "Un projet ?",
    h2: "Écrivons-le ensemble.",
    email: "E-mail",
    whatsapp: "WhatsApp",
    whatsappText: "Bonjour Adji, je vous contacte depuis votre portfolio.",
    city: "Ville",
    cityValue: "Dakar, Sénégal",
    cv: "Télécharger mon CV",
    open: "(s’ouvre dans un nouvel onglet)",
  },
};

const en: typeof fr = {
  nav: { expertise: "Expertise", projects: "Projects", journey: "Background", contact: "Contact" },
  header: { cv: "My CV", cvLabel: "Download my CV as a PDF", home: "back to top", mainNav: "Main navigation", toEn: "Passer en français", themeLight: "Switch to light mode", themeDark: "Switch to dark mode" },
  hero: {
    l1: "Fullstack developer",
    l2: "+ artificial intelligence",
    text: "I build complete, secure and intelligent applications. I integrate AI and automate repetitive tasks so your team saves time.",
    seeProjects: "See my projects",
    cv: "Download my CV",
    chips: ["Secure applications", "Built-in AI", "n8n automations"],
    portrait: "Portrait of",
  },
  services: {
    h: ["Complete, secure", "and intelligent", "applications."],
    items: [
      { title: "From idea to launch", text: "React and Next.js interfaces, Django APIs, MySQL databases, from mockup to deployment." },
      { title: "Security by design", text: "JWT authentication, role-based access, strict data validation." },
      { title: "AI and automation", text: "RAG assistants, speech recognition, classification, n8n workflows that remove repetitive tasks." },
    ],
  },
  projects: {
    title: "Projects",
    lead: "Every project in action, from the first screen to the code.",
    code: "Source code",
    live: "View live",
    tech: "Technologies",
    roles: { pecheur: "Fisherman", acheteur: "Buyer", livreur: "Delivery driver" },
    demoDesktop: "{t} demo on desktop",
    demoPhone: "{t} demo on mobile",
    items: {
      lebougui: {
        text: "A marketplace connecting fishermen, buyers and delivery drivers. The fisherman posts his catch by voice, in Wolof, and AI prepares the listing.",
        features: ["Voice posting in Wolof, transcribed and sorted by AI", "Ordering, payment and live GPS delivery tracking", "Role-based secure access, with an admin area"],
      },
      smarthelp: {
        text: "An assistant that handles customer complaints. It listens to voice messages, reads photos and finds the right answer in the company FAQ.",
        features: ["Complaints by text, voice or photo", "Answers found in company documents (RAG)", "Reason, applicable rule and status at a glance"],
      },
      "sunu-idee": {
        text: "A digital idea box, anonymous and collaborative. Each idea is sorted by category, with an AI suggestion based on the title.",
        features: ["Create, edit, delete and search ideas", "Colour-coded categories, suggested by AI", "Ideas saved in the browser"],
      },
    },
    other: { title: "JOJ Events", text: "Web platform with an AI chatbot guiding tourists and visitors of the Youth Olympic Games." },
  },
  skills: {
    title: "Skills",
    words: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Python", "Django", "DRF", "MySQL", "JWT", "RAG", "Speech recognition", "Classification", "n8n", "Git", "Kanban"],
  },
  journey: {
    title: "Background",
    cv: "Download my CV",
    formations: "Education",
    experiences: "Experience",
    languages: "Languages",
    f: [
      { year: "2026", title: "IBM AI Developer", place: "Coursera, in progress" },
      { year: "2025 – 2026", title: "Professional certificate in Web, Mobile and AI Development", place: "Simplon Senegal" },
      { year: "2024 – 2025", title: "Professional certificate in Web and Mobile", place: "ISEP Amadou Trawaré" },
      { year: "2022 – 2023", title: "Cisco CCNA", place: "iNetwork Training Academy" },
      { year: "2021 – 2024", title: "Bachelor’s degree in mathematics and computer science applied to cybersecurity", place: "Université Numérique Cheikh Hamidou Kane" },
    ],
    e: [
      { year: "2023", title: "Ubuntu trainer", place: "FORCE-N, with high school students" },
      { year: "2022", title: "Assistant trainer, Networking Essentials", place: "Online tutoring and hands-on workshops" },
    ],
    langs: [
      { name: "French", level: "advanced" },
      { name: "Wolof", level: "native" },
      { name: "English", level: "intermediate" },
    ],
  },
  contact: {
    h1: "A project?",
    h2: "Let’s build it together.",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappText: "Hello Adji, I’m contacting you from your portfolio.",
    city: "Location",
    cityValue: "Dakar, Senegal",
    cv: "Download my CV",
    open: "(opens in a new tab)",
  },
};

export const content = { fr, en };
