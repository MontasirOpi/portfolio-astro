export interface SocialLink { label: string; href: string; }
export interface SkillGroup { title: string; items: string[]; note?: string; }
export interface Project {
  slug: string; name: string; category: 'Mobile' | 'Package' | 'Web';
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
  roleLine: 'Mobile Application Developer & AI-Assisted Software Engineer',
  heroIntro: 'I build premium Flutter mobile apps with Riverpod and GetX, scalable Node.js and TypeScript backends, and high-performance OTA travel systems — with AI-assisted workflows that keep delivery fast and maintainable.',
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
  'I build scalable mobile apps and travel-technology platforms. My recent work is focused on OTA systems — flight booking, hotel booking, transfer management, insurance integration, and eSIM solutions.',
  'I work across the stack: high-performance Android and cross-platform apps with Flutter, Riverpod and GetX, REST APIs, plus Node.js and TypeScript backend services with modern architecture. I deploy and maintain production apps on Google Play and the App Store, with ongoing attention to performance, UX, and maintainability.',
  'I use AI-assisted engineering — agentic workflows, function calling and tool orchestration, and AI-assisted review and diagnostics — to speed up delivery without giving up code quality.',
];

export const ABOUT_FACTS = [
  { value: '2+', label: 'Years experience', note: 'Self-reported in source portfolio' },
  { value: '10+', label: 'Projects completed', note: 'Self-reported in source portfolio' },
  { value: '50k+', label: 'Lines of code', note: 'Self-reported in source portfolio' },
  { value: 'Multiple', label: 'Apps published', note: 'Play Store & App Store' },
];

export const ABOUT_STACK = ['Flutter','Dart','Riverpod','GetX','Node.js','TypeScript','REST API','Firebase','AI Agents in Flutter','Agentic AI','OTA Systems','eSIM','Cursor AI','GitHub','Play Store Deployment'];

export const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Mobile Development', items: ['Flutter','Dart','Riverpod','GetX State Management','BLoC Pattern','Android & iOS Dev','Clean Architecture','Responsive Design'] },
  { title: 'Backend & APIs', items: ['Node.js','TypeScript','Express.js','RESTful APIs','Firebase Cloud','Supabase Backend','User Authentication (JWT)','WebSockets','Push Notifications'] },
  { title: 'Databases & Cache', items: ['PostgreSQL','MongoDB','SQLite Local','Hive Database','Shared Preferences'] },
  { title: 'DevOps & Deployment', items: ['Git / Version Control','GitHub Actions','CI/CD Pipelines','Play Store Console','App Store Connect','Vercel Deployment'] },
  { title: 'Travel Technology (OTA)', items: ['Flight Booking Systems','Hotel Booking Systems','Transfer Modules','Insurance Modules','eSIM API Integration','B2B & B2C Platforms'] },
  { title: 'AI Agents & Modern Workflows', items: ['AI Agents in Flutter','LLM Function & Tool Calling','Agentic AI Workflows','Model Context Protocol (MCP)','Cursor AI Orchestration','Local LLM Deployment (Ollama)','Multi-Agent Systems','Prompt Engineering','AI Diagnostics & Code Review'] },
  { title: 'AI Tools & Platforms', items: ['Claude 3.5 Sonnet','GPT-4o / OpenAI','Gemini Pro','Cursor IDE','GitHub Copilot','OpenRouter APIs','Local Llama models'] },
];

export const AI_GROUPS: AiGroup[] = [
  { title: 'AI-assisted development', description: 'Tools and workflows I use day-to-day to write, debug, refactor, and review code faster — with human review before shipping.', items: ['Cursor IDE','GitHub Copilot','AI-assisted coding, debugging & refactoring','AI-assisted code review','Documentation generation'] },
  { title: 'AI integration & APIs', description: 'Patterns I have worked with in Flutter and backend services. Presented as workflows I use, not as expert-level claims.', items: ['LLM API integration (OpenRouter, OpenAI, Gemini, Claude)','Prompt engineering','LLM function & tool calling','Model Context Protocol (MCP)','Local LLM deployment — Ollama / Local Llama','Agentic workflows & tool orchestration'] },
  { title: 'Engineering workflows', description: 'Where AI fits into a practical delivery loop — requirements, implementation, testing, and maintenance.', items: ['AI-assisted test generation','Debugging & root-cause analysis','AI diagnostics & code review','Development workflow automation','Reusable components & clean architecture'] },
];

export const PROJECTS: Project[] = [
  { slug:'innotrip', name:'InnoTrip B2C', category:'Mobile', description:'All-in-one B2C travel platform to discover, plan, and book flights, hotels, and custom packages with instant real-time checkout.', technologies:['Flutter','Dart','REST API','Payment Gateway','OTA Systems'], features:['Real-time flight search, hotel reservations, and dynamic pricing filters','Secure multi-currency payments and automated booking confirmations','Network caching and responsive rendering for cross-platform performance'], networkImage:'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ba/cc/a6/bacca6e5-719b-5f05-4128-7cb4ca5610c5/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png', imageAlt:'InnoTrip B2C app icon', playStore:'https://play.google.com/store/apps/details?id=com.innotrip.app&hl=en', appStore:'https://apps.apple.com/us/app/innotrip-b2c/id6793119243', role:'Production OTA app — Flutter, GetX, REST APIs' },
  { slug:'nosafer', name:'NoSafer Travel Agency', category:'Mobile', description:'Premium B2C travel booking platform to discover, compare, and book flights, hotels, and holiday trips in a high-performance mobile app.', technologies:['Flutter','Dart','GetX','REST API','OTA Systems'], features:['End-to-end flight booking and hotel search with modular structure','Travel insurance purchase and eSIM setup modules','Image loading, caching, and state-rebuild optimisation for smooth transitions'], playStore:'https://play.google.com/store/apps/details?id=com.nosafer.b2c', appStore:'https://apps.apple.com/us/app/nosafer/id6766163567', role:'Production OTA app' },
  { slug:'travojet', name:'Travojet Mobile App', category:'Mobile', description:'All-in-one travel agency app with visa support, holiday package planning, flight bookings, and hotel reservations, plus guidance and custom booking workflows.', technologies:['Flutter','Dart','GetX','REST API','Push Notification'], features:['Flight seat selection and booking flow state with GetX','Document scanner uploads and real-time status trackers for tourist visa applications','Push notifications and campaign banners'], playStore:'https://play.google.com/store/apps/details?id=com.travojet.app', appStore:'https://apps.apple.com/in/app/travojet/id6775792334', role:'Production OTA app' },
  { slug:'mehndi', name:'Mehndi Book (Offline & Online)', category:'Mobile', description:'High-performance Android design app with curated mehndi/henna art collections, offline image caching, categorized galleries, and smooth interactive zooming.', technologies:['Flutter','Dart','Offline Cache','Interactive Viewer','Responsive UI'], features:['Offline-first local image caching with preloading for zero-lag offline browsing','Responsive grid gallery with pinch-to-zoom and full-screen preview','Bitmap memory optimisation for continuous smooth scrolling'], networkImage:'https://play-lh.googleusercontent.com/AJQPrkAj6wpzwAfOVcAXLQ8GgSd6FTCAaNYicDLzLqKcaxoQVgfpbYnwFwdOmfRvjKk6n0IuIrv9kVUOiSz20g', imageAlt:'Mehndi Book app artwork', playStore:'https://play.google.com/store/apps/details?id=opi.codes' },
  { slug:'date-picker', name:'date_with_range_picker', category:'Package', description:'Customizable Flutter package for selecting a single date or a date range with a premium UI.', technologies:['Flutter','Dart','Package','Open Source'], features:['Smooth grid-calendar rendering with custom range-selection logic','Gesture-detection optimisation to reduce unnecessary rebuilds','Open-source on pub.dev with modular code and clean API'], github:'https://github.com/MontasirOpi/date_range_picker', pubDev:'https://pub.dev/packages/date_with_range_picker', role:'Package author' },
  { slug:'jomi', name:'Jomi Converter BD', category:'Mobile', description:'Land measurement converter app for Bangladesh with simple, user-friendly UI.', technologies:['Flutter','Dart','SQLite','Responsive Grid'], features:['Land-area conversions (Katha, Bigha, Decimal) using local formulas','Responsive clean grid layout for standard and tablet sizes','SQLite cache for recent conversions'], image:'/assets/images/jomi.webp', imageAlt:'Jomi Converter BD screenshot', github:'https://github.com/MontasirOpi/jomi_converter', playStore:'https://play.google.com/store/apps/details?id=app.opi.land' },
  { slug:'lms', name:'Library Management System', category:'Mobile', description:'Full-featured Flutter app to manage books, users, and transactions. Flutter front-end + Supabase backend.', technologies:['Flutter','Dart','Supabase','Hive Database'], features:['Flutter front-end linked to Supabase for real-time inventory updates','Secure auth flows (JWT) and role-based dashboard access','Hive local cache for offline book reads'], image:'/assets/images/lms.webp', imageAlt:'Library Management System screenshot', github:'https://github.com/MontasirOpi/library_management_system' },
  { slug:'grocery', name:'Grocery App Using BLoC', category:'Mobile', description:'Simple grocery app built with Flutter using BLoC for scalable, maintainable state management.', technologies:['Flutter','Dart','BLoC Pattern','State Management'], features:['State flows structured with BLoC separation','Dynamic cart calculations and price aggregate animations','List-widget optimisation to avoid rebuilding off-screen items'], image:'/assets/images/grocery.webp', imageAlt:'Grocery app screenshot', github:'https://github.com/MontasirOpi/grocery_app_using_bloc' },
  { slug:'fastfood', name:'Fast Food App', category:'Mobile', description:'Responsive Flutter food-ordering app to browse foods, manage cart, with smooth UI animations.', technologies:['Flutter','Dart','Animations','UI Transitions'], features:['Hero-page custom transitions for food item cards','Dynamic list filter chips for food categories','Memory optimisation during heavy horizontal asset sliding'], image:'/assets/images/fastfood.webp', imageAlt:'Fast Food app screenshot', github:'https://github.com/MontasirOpi/FAST-FOOD-APP-FLUTTER' },
  { slug:'weather', name:'Weather App', category:'Mobile', description:'Weather app fetching real-time data from OpenWeatherMap API. Includes dark mode and smooth animations.', technologies:['Flutter','Dart','REST API','Weather Lottie'], features:['OpenWeatherMap JSON endpoints via secure HTTP','Responsive state updates handling loading, empty, and offline errors','Weather-matching visuals and custom indicators'], image:'/assets/images/weather.webp', imageAlt:'Weather app screenshot', github:'https://github.com/MontasirOpi/weather-app-using-flutter' },
  { slug:'weather-pal', name:'আবহাওয়া Pal (Weather Pal)', category:'Mobile', description:'Bilingual weather app (Bangla & English) for Bangla-speaking users. Shows real-time forecasts and weather details.', technologies:['Flutter','Dart','Localization','Bilingual'], features:['Flutter localization (English/Bangla strings) dynamically','Regional meteorological databases for local predictions','UI grids adapting to Bengali script typography'], image:'/assets/images/abohawa_pal.webp', imageAlt:'Weather Pal screenshot', github:'https://github.com/MontasirOpi/weather_pal' },
  { slug:'tea-stall', name:'Tea Stall Review Website', category:'Web', description:'Modern tea stall review website built with React and Firebase. Users can browse, review, and rate local tea stalls.', technologies:['React','Firebase','Firestore','TailwindCSS'], features:['Firebase Firestore for real-time ratings and reviews','Responsive grid layouts with TailwindCSS','Secure auth so authors can only edit their own reviews'], image:'/assets/images/tea.webp', imageAlt:'Tea Stall Review website screenshot', github:'https://github.com/MontasirOpi/TEA-STALL-REVIEW', liveDemo:'https://teareview.vercel.app/' },
];

export const EXPERIENCE: Experience[] = [
  { company:'Innovate Solutions', title:'Associate Software Engineer', dates:'Nov 2025 — Present', responsibilities:['Develop and maintain OTA mobile apps with Flutter and GetX.','Integrate REST APIs for flight, hotel, transfer, insurance, and eSIM booking.','Publish and maintain Android and iOS apps on Google Play Store and Apple App Store.','Collaborate cross-functionally on scalable, high-performance travel booking solutions.','Improve performance, UI consistency, memory use, and code maintainability.','Integrate WebSocket streams for real-time statuses.'], technologies:['Flutter','Dart','GetX','REST API','Firebase','eSIM Integration','OTA Systems','WebSocket'] },
  { company:'Eon System', title:'Junior Flutter Developer', dates:'Aug 2025 — Oct 2025', responsibilities:['Built cross-platform mobile apps with Flutter and Dart.','Worked with senior developers on premium, responsive UI components.','Integrated third-party payment gateway APIs and RESTful services.','Managed state with GetX.','Built 2 complete mobile app modules from scratch and optimized rendering lifecycles.'], technologies:['Flutter','Dart','GetX','REST API','Git','Payment Integration'] },
];

export const WORKFLOW = [
  { step:'01', title:'Requirements & architecture', text:'Clarify the booking flow, edge cases, and data model before writing UI. Choose state management and module boundaries that stay maintainable.' },
  { step:'02', title:'Reusable components', text:'Build small, composable widgets and shared patterns so screens stay consistent and changes stay cheap.' },
  { step:'03', title:'API integration', text:'Integrate REST and WebSocket APIs with clear error, loading, and offline states — especially for flight, hotel, and eSIM flows.' },
  { step:'04', title:'Testing & debugging', text:'Verify happy paths and failure paths, trace root causes, and keep fixes narrow and reviewable.' },
  { step:'05', title:'Version control & collaboration', text:'Work in small, reviewable changes on Git, with clear commit history and cross-functional communication.' },
  { step:'06', title:'AI-assisted productivity', text:'Use AI-assisted coding, review, and diagnostics to move faster — with human review before shipping.' },
  { step:'07', title:'Performance & maintainability', text:'Watch rendering, caching, memory, and consistency. Prefer simple, readable code that is easy to maintain.' },
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
