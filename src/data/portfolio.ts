export interface SocialLink { label: string; href: string; }
export interface SkillItem { label: string; icon?: string; }
export interface SkillGroup { title: string; items: SkillItem[]; icon: string; accent: string; note?: string; }
export interface Project {
  slug: string; name: string; category: 'Mobile' | 'AI' | 'Package' | 'Web' | 'Tools';
  description: string; technologies: string[]; features: string[];
  image?: string; imageAlt?: string; networkImage?: string;
  github?: string; playStore?: string; appStore?: string; pubDev?: string; liveDemo?: string;
  role?: string;
}
export interface Experience { company: string; title: string; dates: string; responsibilities: string[]; technologies: string[]; }
export interface AiGroup { title: string; description: string; items: string[]; linkProject?: string; linkLabel?: string; }

export const PROFILE = {
  name: 'Fahim Montasir Opi',
  shortName: 'Opi',
  brand: 'OPI',
  title: 'Associate Software Engineer',
  roleLine: 'Flutter Developer & AI-Assisted Software Engineer',
  heroIntro: 'Flutter developer building production mobile apps, using AI-assisted workflows, with Firebase + Node.js backends — and OTA travel systems as one specialty, not the whole story.',
  email: 'devmontasir@gmail.com',
  phoneDisplay: '+880 1757150553',
  phoneHref: 'tel:+8801757150553',
  location: 'Dhaka, Bangladesh',
  cvUrl: 'https://drive.google.com/file/d/1d_bhTocBNOwNrA5Zf5Hw2fd9eu6o5Rt7/view?usp=sharing',
  github: 'https://github.com/MontasirOpi',
  linkedin: 'https://www.linkedin.com/in/montasir-opi',
  domain: 'https://opi.codes',
  profileImage: '/assets/images/profile.webp',
};

export const ABOUT_PARAGRAPHS = [
  'I am a Flutter developer. I build production mobile apps with clean architecture and Riverpod, GetX, and BLoC — and ship and maintain them on Google Play and the App Store, with ongoing attention to performance, UX, and maintainability.',
  'I am an expert in AI-assisted development. I use agentic workflows, prompt engineering, function and tool calling, MCP, and AI-assisted review and diagnostics — with Cursor, GitHub Copilot, Claude, GPT-4o, and Gemini — to deliver faster without giving up code quality. AI speeds up the work; human review decides what ships.',
  'On the backend, I work with Firebase — Auth, Cloud Firestore, Cloud Functions, Cloud Messaging, Storage, and Hosting — plus Node.js and TypeScript REST services, and Supabase and PostgreSQL where they fit.',
  'OTA travel is one domain I apply this in: flight, hotel, transfer, insurance, and eSIM booking flows. It is a specialty, not the whole story.',
];

export const ABOUT_FACTS = [
  { value: '2+', label: 'Years experience', note: 'Self-reported in source portfolio' },
  { value: '10+', label: 'Projects completed', note: 'Self-reported in source portfolio' },
  { value: '50k+', label: 'Lines of code', note: 'Self-reported in source portfolio' },
  { value: 'Multiple', label: 'Apps published', note: 'Play Store & App Store' },
];

export const ABOUT_STACK = ['Flutter','Dart','Riverpod','GetX','BLoC','Firebase','Node.js','TypeScript','REST API','AI Agents in Flutter','Agentic AI','Cursor AI','GitHub','Play Store Deployment','OTA Systems'];

export const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Mobile Development', icon: 'flutter', accent: '#38bdf8', items: [
    { label: 'Flutter', icon: 'flutter' }, { label: 'Dart', icon: 'dart' }, { label: 'Kotlin', icon: 'kotlin' },
    { label: 'Riverpod' }, { label: 'GetX State Management' }, { label: 'BLoC Pattern' },
    { label: 'Nearby Connections (P2P)', icon: 'bluetooth' }, { label: 'Android & iOS Dev', icon: 'android' },
    { label: 'Clean Architecture' }, { label: 'Responsive Design' } ] },
  { title: 'AI-Assisted Engineering', icon: 'anthropic', accent: '#a78bfa', items: [
    { label: 'Agentic AI Workflows' }, { label: 'AI Agents in Flutter', icon: 'flutter' },
    { label: 'On-device AI (ONNX Runtime)', icon: 'onnx' }, { label: 'Prompt Engineering' },
    { label: 'LLM Function & Tool Calling' }, { label: 'Model Context Protocol (MCP)', icon: 'anthropic' },
    { label: 'Multi-Agent Systems' }, { label: 'AI Diagnostics & Code Review' },
    { label: 'Cursor IDE', icon: 'cursor' }, { label: 'GitHub Copilot', icon: 'githubcopilot' },
    { label: 'Claude 3.5 Sonnet', icon: 'anthropic' }, { label: 'GPT-4o / OpenAI' },
    { label: 'Gemini Pro', icon: 'googlegemini' }, { label: 'OpenRouter APIs', icon: 'openrouter' },
    { label: 'Local LLM Deployment (Ollama)', icon: 'ollama' }, { label: 'Local Llama models', icon: 'meta' } ] },
  { title: 'Backend & APIs', icon: 'firebase', accent: '#fbbf24', items: [
    { label: 'Firebase Auth', icon: 'firebase' }, { label: 'Cloud Firestore', icon: 'firebase' },
    { label: 'Cloud Functions', icon: 'firebase' }, { label: 'Firebase Cloud Messaging', icon: 'firebase' },
    { label: 'Firebase Storage', icon: 'firebase' }, { label: 'Firebase Hosting', icon: 'firebase' },
    { label: 'Node.js', icon: 'nodedotjs' }, { label: 'TypeScript', icon: 'typescript' },
    { label: 'Express.js', icon: 'express' }, { label: 'RESTful APIs' },
    { label: 'Supabase Backend', icon: 'supabase' }, { label: 'User Authentication (JWT)' },
    { label: 'WebSockets' }, { label: 'Push Notifications' }, { label: 'Python (desktop tooling)', icon: 'python' } ] },
  { title: 'Databases & Cache', icon: 'postgresql', accent: '#34d399', items: [
    { label: 'PostgreSQL', icon: 'postgresql' }, { label: 'MongoDB', icon: 'mongodb' },
    { label: 'SQLite Local', icon: 'sqlite' }, { label: 'Hive Database' }, { label: 'Shared Preferences' } ] },
  { title: 'DevOps & Deployment', icon: 'git', accent: '#f472b6', items: [
    { label: 'Git / Version Control', icon: 'git' }, { label: 'GitHub Actions', icon: 'githubactions' },
    { label: 'CI/CD Pipelines' }, { label: 'Play Store Console', icon: 'googleplay' },
    { label: 'App Store Connect', icon: 'apple' }, { label: 'Vercel Deployment', icon: 'vercel' } ] },
  { title: 'Travel Technology (OTA)', icon: '', accent: '#22d3ee', items: [
    { label: 'Flight Booking Systems' }, { label: 'Hotel Booking Systems' }, { label: 'Transfer Modules' },
    { label: 'Insurance Modules' }, { label: 'eSIM API Integration' }, { label: 'B2B & B2C Platforms' } ] },
];

export const AI_GROUPS: AiGroup[] = [
  { title: 'AI-assisted development', description: 'My daily expert workflow: write, debug, refactor, and review code faster with AI — with human review before shipping.', items: ['Cursor IDE','GitHub Copilot','AI-assisted coding, debugging & refactoring','AI-assisted code review','Documentation generation'] },
  { title: 'AI integration & APIs', description: 'Patterns I use in Flutter and backend services: agents, tools, and models wired into real features.', items: ['LLM API integration (OpenRouter, OpenAI, Gemini, Claude)','Prompt engineering','LLM function & tool calling','Model Context Protocol (MCP)','Local LLM deployment — Ollama / Local Llama','Agentic workflows & tool orchestration'] },
  { title: 'Engineering workflows', description: 'AI across the delivery loop — requirements, implementation, testing, and maintenance.', items: ['AI-assisted test generation','Debugging & root-cause analysis','AI diagnostics & code review','Development workflow automation','Reusable components & clean architecture'] },
];

export const PROJECTS: Project[] = [
  { slug:'innotrip', name:'InnoTrip B2C', category:'Mobile', description:'All-in-one B2C travel platform to discover, plan, and book flights, hotels, and custom packages with instant real-time checkout.', technologies:['Flutter','Dart','REST API','Payment Gateway','OTA Systems'], features:['Real-time flight search, hotel reservations, and dynamic pricing filters','Secure multi-currency payments and automated booking confirmations','Network caching and responsive rendering for cross-platform performance'], networkImage:'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ba/cc/a6/bacca6e5-719b-5f05-4128-7cb4ca5610c5/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png', imageAlt:'InnoTrip B2C app icon', playStore:'https://play.google.com/store/apps/details?id=com.innotrip.app&hl=en', appStore:'https://apps.apple.com/us/app/innotrip-b2c/id6793119243', role:'Production OTA app — Flutter, GetX, REST APIs' },
  { slug:'nosafer', name:'NoSafer Travel Agency', category:'Mobile', description:'Premium B2C travel booking platform to discover, compare, and book flights, hotels, and holiday trips in a high-performance mobile app.', technologies:['Flutter','Dart','GetX','REST API','OTA Systems'], features:['End-to-end flight booking and hotel search with modular structure','Travel insurance purchase and eSIM setup modules','Image loading, caching, and state-rebuild optimisation for smooth transitions'], playStore:'https://play.google.com/store/apps/details?id=com.nosafer.b2c', appStore:'https://apps.apple.com/us/app/nosafer/id6766163567', role:'Production OTA app' },
  { slug:'travojet', name:'Travojet Mobile App', category:'Mobile', description:'All-in-one travel agency app with visa support, holiday package planning, flight bookings, and hotel reservations, plus guidance and custom booking workflows.', technologies:['Flutter','Dart','GetX','REST API','Push Notification'], features:['Flight seat selection and booking flow state with GetX','Document scanner uploads and real-time status trackers for tourist visa applications','Push notifications and campaign banners'], playStore:'https://play.google.com/store/apps/details?id=com.travojet.app', appStore:'https://apps.apple.com/in/app/travojet/id6775792334', role:'Production OTA app' },
  { slug:'typefix-ai', name:'TypeFix AI', category:'AI', description:'Privacy-first, fully offline AI writing assistant for Android — fixes your text in any app (WhatsApp, Chrome, Gmail, Notes) with on-device inference and zero cloud calls.', technologies:['Kotlin','Flutter','ONNX Runtime','Android InputMethod'], features:['Native Android Kotlin typing engine (InputMethodService) paired with a Flutter management app — onboarding, model manager, preferences, privacy dashboard, local history','On-device ONNX Runtime Mobile inference, fully offline — no API calls, no cloud','DiffEngine + SafetyValidator block hallucinations and protect numbers, URLs, and emails'], github:'https://github.com/MontasirOpi/TypeFix-Ai', role:'AI spotlight — on-device AI' },
  { slug:'mehndi', name:'Mehndi Book (Offline & Online)', category:'Mobile', description:'High-performance Android design app with curated mehndi/henna art collections, offline image caching, categorized galleries, and smooth interactive zooming.', technologies:['Flutter','Dart','Offline Cache','Interactive Viewer','Responsive UI'], features:['Offline-first local image caching with preloading for zero-lag offline browsing','Responsive grid gallery with pinch-to-zoom and full-screen preview','Bitmap memory optimisation for continuous smooth scrolling'], networkImage:'https://play-lh.googleusercontent.com/AJQPrkAj6wpzwAfOVcAXLQ8GgSd6FTCAaNYicDLzLqKcaxoQVgfpbYnwFwdOmfRvjKk6n0IuIrv9kVUOiSz20g', imageAlt:'Mehndi Book app artwork', playStore:'https://play.google.com/store/apps/details?id=opi.codes' },
  { slug:'glassdrop', name:'GlassDrop', category:'Mobile', description:'AirDrop-style nearby file sharing for Android — peer-to-peer over Wi-Fi and Bluetooth, with no internet, servers, or accounts required.', technologies:['Flutter','Dart','Nearby Connections','Peer-to-Peer'], features:['Built with Flutter + Google Nearby Connections (P2P_STAR) over Wi-Fi and Bluetooth','Consent-based pairing with a multi-file queue and live per-file progress','Received files save directly to Gallery/Downloads'], github:'https://github.com/MontasirOpi/glassdrop-' },
  { slug:'disaster-alert', name:'Disaster Alert App', category:'Mobile', description:'Real-time disaster and flood alerts — live GDACS and OpenWeatherMap data, interactive maps, and SOS emergency messaging with location sharing.', technologies:['Flutter','Dart','Firebase Auth','OpenStreetMap','Push Notifications'], features:['Live disaster and flood alerts from GDACS + OpenWeatherMap APIs, with hashtag monitoring (#floodBD, #CycloneMocha)','Interactive OpenStreetMap with alert overlays, user location, and GPS-based alert filtering','SOS distress messaging with location sharing, push notifications, and Firebase email/password auth'], github:'https://github.com/MontasirOpi/disaster_alert_app' },
  { slug:'sky-search', name:'SkySearch', category:'Mobile', description:'Flutter flight search UI — home, airport search, date picker, and passenger selection flows, documented with screenshots.', technologies:['Flutter','Dart','OTA Systems'], features:['Home, airport search, date pick, and passenger select screens','Polished search UI flows captured in screenshots','Flight search experience built in Flutter'], networkImage:'https://github.com/user-attachments/assets/e794883e-3cd6-4ca7-b052-bbe974b18904', imageAlt:'SkySearch flight search UI screenshots', github:'https://github.com/MontasirOpi/sky_search', role:'OTA search UI' },
  { slug:'jomi', name:'Jomi Converter BD', category:'Mobile', description:'Land measurement converter app for Bangladesh with simple, user-friendly UI.', technologies:['Flutter','Dart','SQLite','Responsive Grid'], features:['Land-area conversions (Katha, Bigha, Decimal) using local formulas','Responsive clean grid layout for standard and tablet sizes','SQLite cache for recent conversions'], image:'/assets/images/jomi.webp', imageAlt:'Jomi Converter BD screenshot', github:'https://github.com/MontasirOpi/jomi_converter', playStore:'https://play.google.com/store/apps/details?id=app.opi.land' },
  { slug:'lms', name:'Library Management System', category:'Mobile', description:'Full-featured Flutter app to manage books, users, and transactions. Flutter front-end + Supabase backend.', technologies:['Flutter','Dart','Supabase','Hive Database'], features:['Flutter front-end linked to Supabase for real-time inventory updates','Secure auth flows (JWT) and role-based dashboard access','Hive local cache for offline book reads'], image:'/assets/images/lms.webp', imageAlt:'Library Management System screenshot', github:'https://github.com/MontasirOpi/library_management_system' },
  { slug:'grocery', name:'Grocery App Using BLoC', category:'Mobile', description:'Simple grocery app built with Flutter using BLoC for scalable, maintainable state management.', technologies:['Flutter','Dart','BLoC Pattern','State Management'], features:['State flows structured with BLoC separation','Dynamic cart calculations and price aggregate animations','List-widget optimisation to avoid rebuilding off-screen items'], image:'/assets/images/grocery.webp', imageAlt:'Grocery app screenshot', github:'https://github.com/MontasirOpi/grocery_app_using_bloc' },
  { slug:'fastfood', name:'Fast Food App', category:'Mobile', description:'Responsive Flutter food-ordering app to browse foods, manage cart, with smooth UI animations.', technologies:['Flutter','Dart','Animations','UI Transitions'], features:['Hero-page custom transitions for food item cards','Dynamic list filter chips for food categories','Memory optimisation during heavy horizontal asset sliding'], image:'/assets/images/fastfood.webp', imageAlt:'Fast Food app screenshot', github:'https://github.com/MontasirOpi/FAST-FOOD-APP-FLUTTER' },
  { slug:'weather', name:'Weather App', category:'Mobile', description:'Weather app fetching real-time data from OpenWeatherMap API. Includes dark mode and smooth animations.', technologies:['Flutter','Dart','REST API','Weather Lottie'], features:['OpenWeatherMap JSON endpoints via secure HTTP','Responsive state updates handling loading, empty, and offline errors','Weather-matching visuals and custom indicators'], image:'/assets/images/weather.webp', imageAlt:'Weather app screenshot', github:'https://github.com/MontasirOpi/weather-app-using-flutter' },
  { slug:'weather-pal', name:'আবহাওয়া Pal (Weather Pal)', category:'Mobile', description:'Bilingual weather app (Bangla & English) for Bangla-speaking users. Shows real-time forecasts and weather details.', technologies:['Flutter','Dart','Localization','Bilingual'], features:['Flutter localization (English/Bangla strings) dynamically','Regional meteorological databases for local predictions','UI grids adapting to Bengali script typography'], image:'/assets/images/abohawa_pal.webp', imageAlt:'Weather Pal screenshot', github:'https://github.com/MontasirOpi/weather_pal' },
  { slug:'date-picker', name:'date_with_range_picker', category:'Package', description:'Customizable Flutter package for selecting a single date or a date range with a premium UI.', technologies:['Flutter','Dart','Package','Open Source'], features:['Smooth grid-calendar rendering with custom range-selection logic','Gesture-detection optimisation to reduce unnecessary rebuilds','Open-source on pub.dev with modular code and clean API'], github:'https://github.com/MontasirOpi/date_range_picker', pubDev:'https://pub.dev/packages/date_with_range_picker', role:'Package author' },
  { slug:'snaptext', name:'SnapText', category:'Tools', description:'Lightweight offline Windows screenshot utility with automatic OCR — select a region and the extracted text lands on your clipboard.', technologies:['Python','Tesseract OCR','Windows'], features:['Global shortcut Ctrl+Shift+X — select a region, local Tesseract OCR extracts the text, copy text or image to clipboard','Multi-monitor and high-DPI support','100% offline — no cloud, no telemetry'], github:'https://github.com/MontasirOpi/Windows_snapText', role:'Desktop tool' },
  { slug:'tea-stall', name:'Tea Stall Review Website', category:'Web', description:'Modern tea stall review website built with React and Firebase. Users can browse, review, and rate local tea stalls.', technologies:['React','Firebase','Firestore','TailwindCSS'], features:['Firebase Firestore for real-time ratings and reviews','Responsive grid layouts with TailwindCSS','Secure auth so authors can only edit their own reviews'], image:'/assets/images/tea.webp', imageAlt:'Tea Stall Review website screenshot', github:'https://github.com/MontasirOpi/TEA-STALL-REVIEW', liveDemo:'https://teareview.vercel.app/' },
  { slug:'wings-of-the-world', name:'Wings of the World', category:'Web', description:'Browser-based 3D flight simulator built with Three.js — real satellite imagery of any city, departing from Hazrat Shahjalal International Airport (VGHS), Dhaka.', technologies:['Three.js','WebGL','JavaScript','HTML5','CSS3','Web Audio API'], features:['Five selectable aircraft with distinct flight physics: F-22 Raptor, B737 airliner, Extra 330 acrobatic prop, SR-71 Blackbird, and Cessna 172','Real satellite imagery of any city, with flights departing from VGHS Dhaka','Immersive Web Audio API sound in a pure browser-based 3D experience'], github:'https://github.com/MontasirOpi/flight_game', liveDemo:'https://wings-vert.vercel.app', role:'3D web experience' },
  { slug:'cosmic-odyssey', name:'Cosmic Odyssey', category:'Web', description:'Interactive 3D WebGL astronomy portal — a deep cosmic zoom from galaxy to solar system to planets and moons, built with Three.js.', technologies:['Three.js','WebGL','JavaScript'], features:['3-tier deep cosmic zoom: Galaxy → Solar System → Planets & Moons','Sagittarius A* black hole simulator with gravitational-lensing visualization','Bilingual English + Bengali (বাংলা) interface'], github:'https://github.com/MontasirOpi/galaxy', role:'3D web experience' },
];

export const EXPERIENCE: Experience[] = [
  { company:'Innovate Solutions', title:'Associate Software Engineer', dates:'Nov 2025 — Present', responsibilities:['Build and maintain production Flutter apps with GetX, including OTA booking flows.','Integrate REST APIs for flight, hotel, transfer, insurance, and eSIM booking.','Publish and maintain Android and iOS apps on Google Play Store and Apple App Store.','Ship with Firebase services and AI-assisted workflows — review, diagnostics, refactoring — with human review before release.','Improve performance, UI consistency, memory use, and code maintainability.','Integrate WebSocket streams for real-time statuses.'], technologies:['Flutter','Dart','GetX','REST API','Firebase','eSIM Integration','OTA Systems','WebSocket'] },
  { company:'Eon System', title:'Junior Flutter Developer', dates:'Aug 2025 — Oct 2025', responsibilities:['Built cross-platform mobile apps with Flutter and Dart.','Worked with senior developers on premium, responsive UI components.','Integrated third-party payment gateway APIs and RESTful services.','Managed state with GetX.','Built 2 complete mobile app modules from scratch and optimized rendering lifecycles.'], technologies:['Flutter','Dart','GetX','REST API','Git','Payment Integration'] },
];

export const WORKFLOW = [
  { step:'01', title:'Requirements & architecture', text:'Clarify the flow, edge cases, and data model before writing UI. Choose state management and module boundaries that stay maintainable.' },
  { step:'02', title:'Reusable Flutter components', text:'Build small, composable widgets and shared patterns so screens stay consistent and changes stay cheap.' },
  { step:'03', title:'Backend — Firebase + APIs', text:'Wire Firebase (Auth, Firestore, Functions, Messaging) plus REST and WebSocket APIs, with clear error, loading, and offline states.' },
  { step:'04', title:'AI-assisted delivery', text:'Use AI-assisted coding, review, and diagnostics to move faster — with human review before shipping.' },
  { step:'05', title:'Testing & debugging', text:'Verify happy paths and failure paths, trace root causes, and keep fixes narrow and reviewable.' },
  { step:'06', title:'Performance & maintainability', text:'Watch rendering, caching, memory, and consistency. Work in small, reviewable Git changes. Prefer simple, readable code.' },
];

export const NAV_LINKS = [
  { label:'About', href:'#about' },
  { label:'Skills', href:'#skills' },
  { label:'Projects', href:'#projects' },
  { label:'Experience', href:'#experience' },
  { label:'Contact', href:'#contact' },
];

export function initials(name: string): string {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}
