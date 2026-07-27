export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'AI & ML' | 'Mobile Apps' | 'Full-Stack' | 'Developer Tools';
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  featured: boolean;
  metrics: string[];
  keyHighlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Roger Hodali',
    displayName: 'Rogers',
    handle: 'Rogersho',
    title: 'CEO of NEXA STACK LTD | Full-Stack & AI Architect',
    company: 'NEXA STACK LTD',
    companyWebsite: 'https://nexastack.net',
    phone: '+250 788 768 148',
    phoneRaw: '0788768148',
    education: "University of Rwanda — Year 4 BSc in Mathematics & Computer Science with Education",
    tagline: 'Leading NEXA STACK LTD. Passionate about LLM Fine-Tuning, Autonomous AI Agents, 60fps Flutter Mobile Architectures & Mathematics.',
    location: 'Kigali, Rwanda (Available Worldwide / Remote)',
    bio: 'CEO of NEXA STACK LTD and Year 4 Mathematics & Computer Science student at the University of Rwanda. Specialized in fine-tuning pretrained LLMs (LoRA/QLoRA), designing autonomous multi-agent tool loops, 60fps Flutter cross-platform mobile apps, and scalable web platforms.',
    statusBadge: '⚡ CEO at NEXA STACK LTD — Open for High-Impact Projects',
    github: 'https://github.com/Rogersho',
    email: 'contact@nexastack.net',
    linkedin: 'https://www.linkedin.com/in/roger-hodali-1a9267425',
    stats: [
      { label: 'Executive Role', value: 'CEO @ NEXA STACK' },
      { label: 'Education', value: 'BSc Math & CS (UR)' },
      { label: 'AI Specialization', value: 'LLM Fine-Tuning & Agents' },
      { label: 'GitHub Repositories', value: '19 Repos' }
    ]
  },

  projects: [
    {
      id: 'dhh-rwanda',
      title: 'DHH (Digital Health Hub)',
      subtitle: 'Multimodal Vision Medical OCR & AI Triage Ecosystem',
      description: 'A premium Flutter platform powered by Supabase and Llama-3 Vision that automates medical prescription OCR parsing, emergency triage, and health center analytics.',
      longDescription: 'Digital Health Hub (DHH) bridges patients, doctors, and health center administrators into a unified real-time ecosystem. Features optical medical prescription parsing via Llama-3 Vision in sub-2 seconds, automated triage assistant, real-time analytics dashboard, and automated appointment dispatching.',
      category: 'AI & ML',
      tags: ['Flutter', 'Dart', 'Llama-3 Vision', 'Multimodal AI', 'Supabase Realtime', 'Medical OCR'],
      githubUrl: 'https://github.com/Rogersho/dhh-Rwanda',
      stars: 12,
      featured: true,
      metrics: ['Prescription OCR in 1.8s', 'Real-time Supabase sync', 'Multi-role RBAC Architecture'],
      keyHighlights: [
        'Automated prescription parsing using Llama-3 Vision multimodal API',
        'Multi-tenant healthcare architecture for Patients, Doctors, and Admins',
        'Offline-first medical record synchronization'
      ]
    },
    {
      id: 'kodlama-editor',
      title: 'Kodlama Editor v2.5.5',
      subtitle: 'AI Agent-Powered Desktop IDE for Software Engineers',
      description: 'A state-of-the-art AI desktop code editor built on Electron and Node.js combining sub-15ms typing response with autonomous AI code generation agents.',
      longDescription: 'Kodlama Editor redefines developer productivity by embedding context-aware AI copilots and autonomous refactoring agents directly into the Monaco code editing loop. Includes custom language server protocol integrations, customizable dark glass UI, inline terminal, and instant code generation.',
      category: 'Developer Tools',
      tags: ['Autonomous AI Agents', 'TypeScript', 'Electron', 'Node.js', 'Monaco Editor'],
      githubUrl: 'https://github.com/Rogersho/kodlama-editor-v2',
      stars: 18,
      featured: true,
      metrics: ['Sub-15ms typing response', 'Autonomous code agents', 'Native Electron build'],
      keyHighlights: [
        'Integrated autonomous AI refactoring agent loops',
        'Custom workspace session persistence and tab management',
        'Extensible theme and extension runtime system'
      ]
    },
    {
      id: 'digital-lesson-plan',
      title: 'AI Digital Lesson Planner',
      subtitle: 'Domain-Adapted REB Curriculum Assistant for Educators',
      description: 'AI lesson plan generator aligned with REB competence-based curriculum using the 5Es instructional model and ABCD objectives.',
      longDescription: 'Empowers teachers and educational institutions to generate structured, subject-aware lesson plans in seconds. Incorporates 5E learning stages (Engage, Explore, Explain, Elaborate, Evaluate), automated exercise creation, and inclusive learning strategies.',
      category: 'AI & ML',
      tags: ['LLM Fine-Tuning', 'TypeScript', 'React', 'REB Curriculum', 'Node.js', 'PDF Export'],
      githubUrl: 'https://github.com/Rogersho/digital_lesson_plan',
      stars: 15,
      featured: true,
      metrics: ['Reduces planning time by 90%', '100% REB compliant', 'Instant PDF export'],
      keyHighlights: [
        'Generates complete 5Es lesson structures with subject-specific context in <2s',
        'Differentiated learning adaptations for diverse classroom needs',
        'Exportable clean printable PDFs and editable docx documents'
      ]
    },
    {
      id: 'emergence-hub',
      title: 'EmergHub Emergency Management',
      subtitle: 'Real-Time Disaster & Emergency Incident Dispatch',
      description: 'High-performance real-time emergency management application built with Flutter & Supabase for instant incident reporting and authority response coordination.',
      longDescription: 'EmergHub bridges citizens with first responders, police, and medical emergency centers during critical situations. Supports real-time GPS location tracking, instant SOS panic triggers, media attachment broadcasts, and dispatch routing.',
      category: 'Mobile Apps',
      tags: ['Flutter', 'Dart', 'Supabase Realtime', 'GeoLocation', 'WebSockets', 'Push Notifications'],
      githubUrl: 'https://github.com/Rogersho/emergence-hub',
      stars: 9,
      featured: true,
      metrics: ['Sub-second SOS broadcast', 'Live GPS dispatch map', 'Offline emergency queuing'],
      keyHighlights: [
        'Instant SOS panic button with instant live location streaming',
        'Authority dispatch portal for real-time triage and assignment',
        'Low-bandwidth fallback for emergency situations'
      ]
    },
    {
      id: 'internship-linking',
      title: 'InternLink Platform',
      subtitle: 'Bridging University Students & Industry Placement',
      description: 'Feature-rich Flutter app built for matching university students with companies, managing internship applications, and tracking mentor feedback.',
      longDescription: 'InternLink simplifies student career launches. Students create verified skill profiles, apply to top internships, track application status in real-time, and log daily internship progress reports for university supervisors.',
      category: 'Mobile Apps',
      tags: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management'],
      githubUrl: 'https://github.com/Rogersho/internship-linking',
      stars: 7,
      featured: false,
      metrics: ['Real-time sync', 'Multi-role application portal', 'Built-in logbook manager'],
      keyHighlights: [
        'Interactive supervisor approval workflow for student hours',
        'Smart matching algorithm based on student skill stack',
        'In-app messaging and interview scheduling'
      ]
    },
    {
      id: 'flutter-vote-app',
      title: 'UniVote Community Voting',
      subtitle: 'Secure Cryptographic Mobile & Web Voting System',
      description: 'Real-time voting application built with Flutter and Supabase providing tamper-proof, transparent election management for universities and organizations.',
      longDescription: 'UniVote provides an intuitive and secure voting experience. Includes single-vote verification, live election countdowns, instant candidate audit logs, and encrypted vote receipt generation.',
      category: 'Mobile Apps',
      tags: ['Flutter', 'Supabase', 'Dart', 'PostgreSQL', 'Cryptographic Hashes'],
      githubUrl: 'https://github.com/Rogersho/flutter-vote-app',
      stars: 10,
      featured: false,
      metrics: ['Zero duplicate votes', 'Real-time graph visualizer', 'Audit receipts'],
      keyHighlights: [
        'Cryptographic vote validation with instant receipt verification',
        'Live election tally charts with Supabase Realtime',
        'Biometric authentication on supported mobile devices'
      ]
    },
    {
      id: 'brainhire-ai',
      title: 'BrainHire Autonomous AI Agent Workspace',
      subtitle: 'Smart Candidate Assessment & Autonomous Resume Agent',
      description: 'Full-stack AI workspace utilizing autonomous LLM agents for candidate resume analysis, skill evaluation, and interview questionnaire synthesis.',
      longDescription: 'BrainHire AI automates recruiting overhead by analyzing candidate technical background against detailed job descriptions in under 2 seconds using autonomous LLM evaluation loops, providing objective match scores, and formulating tailored technical interview questions.',
      category: 'Full-Stack',
      tags: ['Autonomous AI Agents', 'LLM Chains', 'TypeScript', 'React', 'Next.js'],
      githubUrl: 'https://github.com/Rogersho/brainhireAI',
      stars: 11,
      featured: false,
      metrics: ['Autonomous evaluation loops', 'Multi-resume upload', 'AI question generator'],
      keyHighlights: [
        'Automated technical skill matrix extraction',
        'Custom AI interview script generator per seniority level',
        'Structured candidate comparison visualizer'
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: 'LLM Fine-Tuning & Autonomous AI Agents',
      iconName: 'Cpu',
      skills: [
        { name: 'LLM Fine-Tuning (LoRA / QLoRA)', level: 95, highlight: true },
        { name: 'Autonomous AI Agents & Tool Calling', level: 96, highlight: true },
        { name: 'Multimodal Vision Models (Llama-3 Vision)', level: 94, highlight: true },
        { name: 'RAG & Vector Search (Supabase Vector)', level: 92, highlight: true },
        { name: 'Structured Outputs & Prompt Chains', level: 95 }
      ]
    },
    {
      title: 'Mobile Architecture (Flutter)',
      iconName: 'Smartphone',
      skills: [
        { name: 'Flutter & Dart Cross-Platform', level: 96, highlight: true },
        { name: 'Supabase Realtime & Auth', level: 92, highlight: true },
        { name: 'State Management (Riverpod/Bloc/Provider)', level: 94 },
        { name: 'Offline-First Storage (Isar/Hive)', level: 90 },
        { name: 'Native iOS / Android Channel Plugins', level: 86 }
      ]
    },
    {
      title: 'Full-Stack Web & TypeScript',
      iconName: 'Globe',
      skills: [
        { name: 'TypeScript & Modern ESNext', level: 95, highlight: true },
        { name: 'React / Next.js / Vite', level: 92, highlight: true },
        { name: 'Node.js & Express REST APIs', level: 90 },
        { name: 'PostgreSQL & Supabase BaaS', level: 92 },
        { name: 'WebSockets & Real-Time Dispatches', level: 88 }
      ]
    },
    {
      title: 'Mathematics & Computer Science',
      iconName: 'Terminal',
      skills: [
        { name: 'Applied Mathematics & Algorithms', level: 94, highlight: true },
        { name: 'Computational Logic & Graph Theory', level: 92 },
        { name: 'Electron Desktop Apps (Kodlama IDE)', level: 90 },
        { name: 'Git & System Architecture', level: 95 },
        { name: 'CI/CD & Cloud Deployment', level: 88 }
      ]
    }
  ] as SkillCategory[],

  timeline: [
    {
      year: '2024 — Present',
      role: 'CEO & Founder',
      company: 'NEXA STACK LTD (nexastack.net)',
      description: 'Leading NEXA STACK LTD, architecting enterprise software solutions, cross-platform mobile apps, and custom fine-tuned AI LLM agent workflows.',
      highlights: [
        'Directing engineering strategy and client solution architecture at NEXA STACK LTD',
        'Building DHH Rwanda Healthcare Hub, AI Lesson Planner, and Kodlama Desktop IDE',
        'Deploying high-throughput real-time mobile & web platforms'
      ]
    },
    {
      year: '2021 — Present',
      role: 'BSc Mathematics & Computer Science Student',
      company: 'University of Rwanda (UR)',
      description: 'Currently in Year 4 pursuing a Bachelor of Science degree in Mathematics and Computer Science with Education.',
      highlights: [
        'Specializing in computational mathematics, algorithm design, and software engineering',
        'Applying mathematical models to AI LLM architectures and vector embeddings'
      ]
    },
    {
      year: '2023 — 2024',
      role: 'Senior Mobile & Full-Stack Developer',
      company: 'Innovate Rwanda Ecosystem',
      description: 'Developed community platforms including UniVote voting system, EmergHub emergency dispatch, and InternLink university matching portal.',
      highlights: [
        'Implemented cryptographic receipt verification for voting systems',
        'Achieved sub-second emergency SOS broadcast speeds across mobile networks'
      ]
    }
  ] as TimelineItem[],

  terminalCommands: {
    whoami: 'Roger Hodali (Rogers) — CEO of NEXA STACK LTD (nexastack.net) & Year 4 BSc Mathematics & Computer Science Student at University of Rwanda.',
    skills: 'Core Stack: CEO @ NEXA STACK, LLM Fine-Tuning & AI Agents (96%), Flutter/Dart (96%), TypeScript (95%), Mathematics & Algorithms (94%).',
    projects: 'Featured Work: DHH Rwanda (AI Healthcare OCR), Kodlama AI IDE, EmergHub, AI Digital Lesson Planner, InternLink, UniVote.',
    contact: 'Phone: +250 788 768 148 | Website: nexastack.net | LinkedIn: linkedin.com/in/roger-hodali-1a9267425 | GitHub: github.com/Rogersho',
    quote: '"Combining mathematical precision with cutting-edge AI architecture to solve real-world problems."'
  }
};
