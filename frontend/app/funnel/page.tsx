"use client";

import { useMemo, useState } from "react";

type LanguageKey = "en" | "ar" | "fr" | "es" | "ru";
type RegionKey = "me" | "na";

const translations = {
  en: {
    navHow: "How it Works",
    navPlatform: "Platform",
    navCompliance: "Compliance",
    navProposal: "Get a Proposal",
    signIn: "Sign In",
    proposalBtn: "Get a Proposal",
    viewPlatform: "See How It Works",
    trustedBy: "Trusted by operators across UAE & GCC",
    numbersTitle: "The numbers from the field.",
    numbersSub: "Operational outcomes across live AI-assisted journeys.",
    journeyTitle: "From first click to confirmed payment.",
    journeySub:
      "Every stage is handled inside one controlled operating layer.",
    systemsTitle: "Six systems. One unified platform.",
    systemsSub:
      "Everything your team needs to acquire, qualify, convert, and collect.",
    stepsTitle: "You go live in four steps.",
    stepsSub:
      "Fast onboarding, controlled deployment, and measurable automation.",
    complianceTitle: "Built to operate inside regional regulation.",
    complianceSub:
      "Platform structure, data controls, and operational guardrails designed for business use.",
    learningTitle: "The system that learns your business, continuously.",
    learningSub:
      "Per-tenant knowledge, feedback loops, and improvement tracking.",
    proposalTitle: "We build proposals around your exact operation.",
    proposalSub:
      "Tell us your market, workflow, and customer journey. We’ll map the right system around it.",
    ctaTitle: "Built for operators who move at scale.",
    ctaSub:
      "If you want the same premium structure with real system depth, start with a proposal.",
    applyNow: "Apply Now",
    footerText:
      "White-label AI automation platform for acquisition, qualification, booking, ordering, and payment.",
    formTitle: "Request a proposal",
    formName: "Full Name",
    formBusiness: "Business Name",
    formEmail: "Email",
    formPhone: "Phone Number",
    formRegion: "Region",
    formNotes: "What do you want automated?",
    formSubmit: "Submit Proposal",
    formPlaceholderNotes:
      "Describe your workflow, channels, and customer journey.",
    onboardingSlots: "3 onboarding slots remaining — April 2026",
    onboardingSub: "Reviewed and approved before deployment booking.",
    statsStrip1: "52K revenue today",
    statsStrip2: "1,847 conversations",
    statsStrip3: "94% AI resolution",
    statsStrip4: "2.4s avg response",
    statsStrip5: "500+ conversations capacity",
    badgeME: "Enterprise AI Automation — UAE & GCC",
    badgeNA: "Enterprise AI Automation — Canada & USA",
    headline1: "Your sales team is the bottleneck.",
    headline2: "We remove it.",
    introItalic1:
      "Most businesses lose revenue between first contact and first payment.",
    introItalic2:
      "Not because of the product. Because of the gap.",
    description:
      "Bhive closes that gap. A white-label AI platform that handles every stage of your customer journey — acquisition, qualification, booking, ordering, and payment — with no human intervention required until money is collected.",
    regionMe: "MIDDLE EAST & GCC",
    regionNa: "NORTH AMERICA",
    dashboardUrlMe: "bhive.ae / dashboard",
    dashboardUrlNa: "bhive.ca / dashboard",
    revenueLabel: "REVENUE TODAY",
    conversationsLabel: "CONVERSATIONS",
    resolutionLabel: "AI RESOLUTION",
    confirmed: "confirmed",
    noHuman: "No human",
    funnel: "FUNNEL",
    whatsapp: "WHATSAPP",
    smsChat: "SMS/CHAT",
    crm: "CRM",
    voice: "VOICE AI",
    payment: "PAYMENT",
    logos: [
      "Careem",
      "Property Finder",
      "Bayut",
      "Dubizzle",
      "Talabat",
    ],
  },
  ar: {
    navHow: "كيف يعمل",
    navPlatform: "المنصة",
    navCompliance: "الامتثال",
    navProposal: "اطلب عرضاً",
    signIn: "تسجيل الدخول",
    proposalBtn: "اطلب عرضاً",
    viewPlatform: "شاهد كيف يعمل",
    trustedBy: "موثوق من المشغلين عبر الخليج والإمارات",
    numbersTitle: "الأرقام من أرض الواقع.",
    numbersSub: "نتائج تشغيلية عبر رحلات مدعومة بالذكاء الاصطناعي.",
    journeyTitle: "من أول نقرة إلى دفعة مؤكدة.",
    journeySub: "كل مرحلة تتم داخل طبقة تشغيل موحدة.",
    systemsTitle: "ستة أنظمة. منصة واحدة موحدة.",
    systemsSub: "كل ما تحتاجه لاكتساب العملاء وتأهيلهم وتحويلهم والتحصيل.",
    stepsTitle: "تنطلق خلال أربع خطوات.",
    stepsSub: "إعداد سريع ونشر مضبوط وأتمتة قابلة للقياس.",
    complianceTitle: "مصممة للعمل ضمن التنظيمات الإقليمية.",
    complianceSub:
      "هيكل المنصة وضوابط البيانات والحماية التشغيلية مصممة للاستخدام التجاري.",
    learningTitle: "النظام الذي يتعلم نشاطك باستمرار.",
    learningSub: "معرفة خاصة بكل عميل وتحسين مستمر وتتبع للأداء.",
    proposalTitle: "نبني العرض حسب تشغيلك الفعلي.",
    proposalSub:
      "أخبرنا عن السوق وسير العمل ورحلة العميل وسنقترح النظام المناسب.",
    ctaTitle: "مصممة للمشغلين الذين يعملون على نطاق واسع.",
    ctaSub: "إذا أردت نفس الهيكل الاحترافي، ابدأ بطلب عرض.",
    applyNow: "قدّم الآن",
    footerText:
      "منصة ذكاء اصطناعي بيضاء العلامة للاكتساب والتأهيل والحجز والطلبات والدفع.",
    formTitle: "اطلب عرضاً",
    formName: "الاسم الكامل",
    formBusiness: "اسم النشاط",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف",
    formRegion: "المنطقة",
    formNotes: "ما الذي تريد أتمتته؟",
    formSubmit: "إرسال الطلب",
    formPlaceholderNotes: "اشرح سير العمل والقنوات ورحلة العميل.",
    onboardingSlots: "3 أماكن إعداد متبقية — أبريل 2026",
    onboardingSub: "تتم المراجعة والموافقة قبل حجز النشر.",
    statsStrip1: "52 ألف إيراد اليوم",
    statsStrip2: "1,847 محادثة",
    statsStrip3: "94% حل بالذكاء الاصطناعي",
    statsStrip4: "2.4 ثانية متوسط الرد",
    statsStrip5: "سعة 500+ محادثة",
    badgeME: "أتمتة ذكاء اصطناعي للمؤسسات — الإمارات والخليج",
    badgeNA: "أتمتة ذكاء اصطناعي للمؤسسات — كندا وأمريكا",
    headline1: "فريق المبيعات هو عنق الزجاجة.",
    headline2: "نحن نزيله.",
    introItalic1: "معظم الشركات تخسر الإيراد بين أول تواصل وأول دفعة.",
    introItalic2: "ليس بسبب المنتج. بل بسبب الفجوة.",
    description:
      "Bhive يغلق هذه الفجوة. منصة بيضاء العلامة تدير كل مراحل رحلة العميل — الاكتساب، التأهيل، الحجز، الطلب، والدفع — دون تدخل بشري حتى تحصيل المبلغ.",
    regionMe: "الشرق الأوسط والخليج",
    regionNa: "أمريكا الشمالية",
    dashboardUrlMe: "bhive.ae / dashboard",
    dashboardUrlNa: "bhive.ca / dashboard",
    revenueLabel: "إيراد اليوم",
    conversationsLabel: "المحادثات",
    resolutionLabel: "نسبة الحل",
    confirmed: "مؤكد",
    noHuman: "بدون تدخل بشري",
    funnel: "القمع",
    whatsapp: "واتساب",
    smsChat: "رسائل/دردشة",
    crm: "إدارة العملاء",
    voice: "الذكاء الصوتي",
    payment: "الدفع",
    logos: ["كريم", "بروبرتي فايندر", "بيوت", "دوبيزل", "طلبات"],
  },
  fr: {
    navHow: "Comment ça marche",
    navPlatform: "Plateforme",
    navCompliance: "Conformité",
    navProposal: "Demander une proposition",
    signIn: "Se connecter",
    proposalBtn: "Demander une proposition",
    viewPlatform: "Voir le fonctionnement",
    trustedBy: "Adopté par des opérateurs au GCC",
    numbersTitle: "Les chiffres du terrain.",
    numbersSub: "Résultats réels sur des parcours assistés par IA.",
    journeyTitle: "Du premier clic au paiement confirmé.",
    journeySub: "Chaque étape est gérée dans une seule couche opératoire.",
    systemsTitle: "Six systèmes. Une seule plateforme.",
    systemsSub:
      "Tout ce qu’il faut pour acquérir, qualifier, convertir et encaisser.",
    stepsTitle: "Mise en ligne en quatre étapes.",
    stepsSub:
      "Onboarding rapide, déploiement contrôlé et automatisation mesurable.",
    complianceTitle: "Conçue pour la conformité régionale.",
    complianceSub:
      "Structure, contrôles de données et garde-fous opérationnels.",
    learningTitle: "Le système apprend votre activité en continu.",
    learningSub:
      "Connaissance par tenant, boucles de feedback et amélioration continue.",
    proposalTitle: "Nous construisons la proposition selon votre opération.",
    proposalSub:
      "Partagez votre marché et vos flux, nous vous proposerons le bon système.",
    ctaTitle: "Conçue pour les opérateurs qui évoluent à grande échelle.",
    ctaSub: "Commencez par une proposition.",
    applyNow: "Postuler",
    footerText:
      "Plateforme IA en marque blanche pour acquisition, qualification, réservation, commande et paiement.",
    formTitle: "Demander une proposition",
    formName: "Nom complet",
    formBusiness: "Nom de l’entreprise",
    formEmail: "Email",
    formPhone: "Téléphone",
    formRegion: "Région",
    formNotes: "Que voulez-vous automatiser ?",
    formSubmit: "Envoyer",
    formPlaceholderNotes:
      "Décrivez votre workflow, vos canaux et le parcours client.",
    onboardingSlots: "3 créneaux d’onboarding restants — Avril 2026",
    onboardingSub: "Révision et approbation avant la réservation du déploiement.",
    statsStrip1: "52K revenus aujourd’hui",
    statsStrip2: "1,847 conversations",
    statsStrip3: "94% résolution IA",
    statsStrip4: "2.4s réponse moyenne",
    statsStrip5: "Capacité 500+ conversations",
    badgeME: "Automatisation IA d’entreprise — EAU & GCC",
    badgeNA: "Automatisation IA d’entreprise — Canada & USA",
    headline1: "Votre équipe commerciale est le goulot d’étranglement.",
    headline2: "Nous l’éliminons.",
    introItalic1:
      "La plupart des entreprises perdent du revenu entre le premier contact et le premier paiement.",
    introItalic2: "Pas à cause du produit. À cause de l’écart.",
    description:
      "Bhive comble cet écart. Une plateforme IA en marque blanche qui gère chaque étape du parcours client.",
    regionMe: "MOYEN-ORIENT & GCC",
    regionNa: "AMÉRIQUE DU NORD",
    dashboardUrlMe: "bhive.ae / dashboard",
    dashboardUrlNa: "bhive.ca / dashboard",
    revenueLabel: "REVENU DU JOUR",
    conversationsLabel: "CONVERSATIONS",
    resolutionLabel: "RÉSOLUTION IA",
    confirmed: "confirmé",
    noHuman: "Sans humain",
    funnel: "FUNNEL",
    whatsapp: "WHATSAPP",
    smsChat: "SMS/CHAT",
    crm: "CRM",
    voice: "VOICE AI",
    payment: "PAIEMENT",
    logos: [
      "Careem",
      "Property Finder",
      "Bayut",
      "Dubizzle",
      "Talabat",
    ],
  },
  es: {
    navHow: "Cómo funciona",
    navPlatform: "Plataforma",
    navCompliance: "Cumplimiento",
    navProposal: "Solicitar propuesta",
    signIn: "Iniciar sesión",
    proposalBtn: "Solicitar propuesta",
    viewPlatform: "Ver cómo funciona",
    trustedBy: "Con la confianza de operadores en GCC",
    numbersTitle: "Los números del terreno.",
    numbersSub: "Resultados operativos en recorridos asistidos por IA.",
    journeyTitle: "Del primer clic al pago confirmado.",
    journeySub: "Cada etapa se maneja dentro de una sola capa operativa.",
    systemsTitle: "Seis sistemas. Una sola plataforma.",
    systemsSub:
      "Todo para captar, calificar, convertir y cobrar clientes.",
    stepsTitle: "En vivo en cuatro pasos.",
    stepsSub: "Onboarding rápido, despliegue controlado y automatización medible.",
    complianceTitle: "Creada para operar dentro de la regulación regional.",
    complianceSub:
      "Estructura de plataforma, controles de datos y barreras operativas.",
    learningTitle: "El sistema aprende tu negocio continuamente.",
    learningSub:
      "Conocimiento por tenant, bucles de feedback y mejora continua.",
    proposalTitle: "Construimos propuestas según tu operación real.",
    proposalSub:
      "Cuéntanos tu mercado y flujo y te propondremos el sistema correcto.",
    ctaTitle: "Creada para operadores que se mueven a escala.",
    ctaSub: "Empieza con una propuesta.",
    applyNow: "Aplicar ahora",
    footerText:
      "Plataforma IA white-label para adquisición, calificación, reservas, pedidos y pagos.",
    formTitle: "Solicitar propuesta",
    formName: "Nombre completo",
    formBusiness: "Nombre del negocio",
    formEmail: "Email",
    formPhone: "Teléfono",
    formRegion: "Región",
    formNotes: "¿Qué quieres automatizar?",
    formSubmit: "Enviar propuesta",
    formPlaceholderNotes:
      "Describe tu flujo, canales y recorrido del cliente.",
    onboardingSlots: "3 plazas de onboarding restantes — Abril 2026",
    onboardingSub: "Revisado y aprobado antes de la reserva de despliegue.",
    statsStrip1: "52K ingresos hoy",
    statsStrip2: "1,847 conversaciones",
    statsStrip3: "94% resolución IA",
    statsStrip4: "2.4s respuesta media",
    statsStrip5: "Capacidad de 500+ conversaciones",
    badgeME: "Automatización IA empresarial — EAU y GCC",
    badgeNA: "Automatización IA empresarial — Canadá y EE. UU.",
    headline1: "Tu equipo de ventas es el cuello de botella.",
    headline2: "Lo eliminamos.",
    introItalic1:
      "La mayoría de empresas pierde ingresos entre el primer contacto y el primer pago.",
    introItalic2: "No por el producto. Sino por la brecha.",
    description:
      "Bhive cierra esa brecha. Una plataforma white-label que gestiona cada etapa del recorrido del cliente.",
    regionMe: "MEDIO ORIENTE Y GCC",
    regionNa: "AMÉRICA DEL NORTE",
    dashboardUrlMe: "bhive.ae / dashboard",
    dashboardUrlNa: "bhive.ca / dashboard",
    revenueLabel: "INGRESOS HOY",
    conversationsLabel: "CONVERSACIONES",
    resolutionLabel: "RESOLUCIÓN IA",
    confirmed: "confirmado",
    noHuman: "Sin humano",
    funnel: "FUNNEL",
    whatsapp: "WHATSAPP",
    smsChat: "SMS/CHAT",
    crm: "CRM",
    voice: "VOICE AI",
    payment: "PAGO",
    logos: [
      "Careem",
      "Property Finder",
      "Bayut",
      "Dubizzle",
      "Talabat",
    ],
  },
  ru: {
    navHow: "Как это работает",
    navPlatform: "Платформа",
    navCompliance: "Соответствие",
    navProposal: "Получить предложение",
    signIn: "Войти",
    proposalBtn: "Получить предложение",
    viewPlatform: "Посмотреть платформу",
    trustedBy: "Нам доверяют операторы в GCC",
    numbersTitle: "Цифры с поля.",
    numbersSub: "Операционные результаты на реальных AI-сценариях.",
    journeyTitle: "От первого клика до подтвержденной оплаты.",
    journeySub: "Каждый этап управляется в одной операционной системе.",
    systemsTitle: "Шесть систем. Одна платформа.",
    systemsSub:
      "Все для привлечения, квалификации, конверсии и получения оплаты.",
    stepsTitle: "Запуск в четыре шага.",
    stepsSub: "Быстрый онбординг, контролируемый запуск и измеримая автоматизация.",
    complianceTitle: "Создано для работы в рамках регионального регулирования.",
    complianceSub:
      "Структура платформы, контроль данных и операционные ограничения.",
    learningTitle: "Система, которая постоянно изучает ваш бизнес.",
    learningSub:
      "Знания по каждому tenant, обратная связь и непрерывное улучшение.",
    proposalTitle: "Мы строим предложение вокруг вашей операции.",
    proposalSub:
      "Расскажите о рынке и процессе, а мы предложим правильную систему.",
    ctaTitle: "Создано для операторов, работающих в масштабе.",
    ctaSub: "Начните с запроса предложения.",
    applyNow: "Подать заявку",
    footerText:
      "White-label AI платформа для привлечения, квалификации, бронирования, заказов и оплаты.",
    formTitle: "Запросить предложение",
    formName: "Полное имя",
    formBusiness: "Название бизнеса",
    formEmail: "Email",
    formPhone: "Телефон",
    formRegion: "Регион",
    formNotes: "Что вы хотите автоматизировать?",
    formSubmit: "Отправить запрос",
    formPlaceholderNotes:
      "Опишите ваш процесс, каналы и путь клиента.",
    onboardingSlots: "Осталось 3 слота онбординга — Апрель 2026",
    onboardingSub: "Проверка и одобрение до бронирования внедрения.",
    statsStrip1: "52K выручка сегодня",
    statsStrip2: "1,847 диалогов",
    statsStrip3: "94% AI-решение",
    statsStrip4: "2.4с средний ответ",
    statsStrip5: "500+ одновременных диалогов",
    badgeME: "Корпоративная AI-автоматизация — ОАЭ и GCC",
    badgeNA: "Корпоративная AI-автоматизация — Канада и США",
    headline1: "Ваша команда продаж — это узкое место.",
    headline2: "Мы убираем его.",
    introItalic1:
      "Большинство компаний теряет выручку между первым контактом и первым платежом.",
    introItalic2: "Не из-за продукта. А из-за разрыва.",
    description:
      "Bhive закрывает этот разрыв. White-label AI платформа, управляющая каждым этапом пути клиента.",
    regionMe: "БЛИЖНИЙ ВОСТОК И GCC",
    regionNa: "СЕВЕРНАЯ АМЕРИКА",
    dashboardUrlMe: "bhive.ae / dashboard",
    dashboardUrlNa: "bhive.ca / dashboard",
    revenueLabel: "ВЫРУЧКА СЕГОДНЯ",
    conversationsLabel: "ДИАЛОГИ",
    resolutionLabel: "AI-РЕШЕНИЕ",
    confirmed: "подтверждено",
    noHuman: "Без человека",
    funnel: "ВОРОНКА",
    whatsapp: "WHATSAPP",
    smsChat: "SMS/ЧАТ",
    crm: "CRM",
    voice: "VOICE AI",
    payment: "ОПЛАТА",
    logos: [
      "Careem",
      "Property Finder",
      "Bayut",
      "Dubizzle",
      "Talabat",
    ],
  },
};

const languages = [
  { code: "en" as LanguageKey, left: "GB", middle: "English", right: "English" },
  { code: "ar" as LanguageKey, left: "AE", middle: "Arabic", right: "العربية" },
  { code: "fr" as LanguageKey, left: "FR", middle: "French", right: "Français" },
  { code: "es" as LanguageKey, left: "ES", middle: "Spanish", right: "Español" },
  { code: "ru" as LanguageKey, left: "RU", middle: "Russian", right: "Русский" },
];

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [region, setRegion] = useState<RegionKey>("me");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const t = translations[language];
  const isArabic = language === "ar";

  const dashboardStats = useMemo(() => {
    if (region === "me") {
      return {
        revenue: "AED 52K",
        conversations: "1,847",
        resolution: "94%",
        dashboardUrl: t.dashboardUrlMe,
        badge: t.badgeME,
        smsOrWhatsApp: t.whatsapp,
      };
    }

    return {
      revenue: "$18.4K",
      conversations: "1,847",
      resolution: "92%",
      dashboardUrl: t.dashboardUrlNa,
      badge: t.badgeNA,
      smsOrWhatsApp: language === "en" ? t.smsChat : t.whatsapp,
    };
  }, [region, t, language]);

  const testimonials =
    region === "me"
      ? [
          {
            title: "AED 52K revenue confirmed inside AI journeys.",
            body:
              "Revenue moved faster once response, qualification, booking, and payment all sat inside one operating flow.",
            value: "52K",
            label: "Revenue today",
            accent: "text-yellow-400",
          },
          {
            title: "Response time dropped to seconds, not hours.",
            body:
              "Inbound leads were qualified immediately and routed without staff delay.",
            value: "2.4s",
            label: "Avg response time",
            accent: "text-purple-400",
          },
          {
            title: "AI resolved the majority without human handoff.",
            body:
              "The team only stepped in where human judgment actually mattered.",
            value: "94%",
            label: "Resolution rate",
            accent: "text-emerald-400",
          },
        ]
      : [
          {
            title: "$18.4K revenue confirmed inside AI journeys.",
            body:
              "North America mode adapts the same flow with different positioning and currency.",
            value: "$18.4K",
            label: "Revenue today",
            accent: "text-yellow-400",
          },
          {
            title: "The same demand, handled with less staff pressure.",
            body:
              "More leads were processed without piling operational overhead on the team.",
            value: "1,847",
            label: "Conversations",
            accent: "text-purple-400",
          },
          {
            title: "Resolution stayed AI-first from entry to conversion.",
            body:
              "The platform pushed the journey forward instead of waiting on manual follow-up.",
            value: "92%",
            label: "Resolution rate",
            accent: "text-emerald-400",
          },
        ];

  const journeyCards = [
    {
      title: "Lead enters",
      desc: "Customer lands through a funnel, page, ad, or direct message.",
      accent: "text-yellow-400",
    },
    {
      title: "AI qualifies",
      desc: "Instant replies, capture, routing, and qualification happen automatically.",
      accent: "text-purple-400",
    },
    {
      title: "Action completes",
      desc: "Booking, order, or payment link is triggered without operational delay.",
      accent: "text-emerald-400",
    },
    {
      title: "Money collected",
      desc: "Confirmed payment and status update close the gap between lead and revenue.",
      accent: "text-yellow-300",
    },
  ];

  const systems = [
    {
      title: "Acquisition Funnels",
      desc: "Landing pages, lead forms, and campaign entry points designed to convert cleanly.",
      points: ["Lead capture", "Offer-based pages", "Auto qualification"],
      icon: "◎",
    },
    {
      title: "AI WhatsApp",
      desc: "Instant conversational handling for enquiries, follow-up, routing, and conversion.",
      points: ["Instant replies", "Language handling", "AI to human handoff"],
      icon: "◈",
    },
    {
      title: region === "me" ? "Voice AI" : "SMS / Chat",
      desc: "Inbound call or messaging automation operating as part of one journey layer.",
      points: ["Intent capture", "Routing logic", "Operational logs"],
      icon: "◉",
    },
    {
      title: "CRM & Lead Status",
      desc: "Every lead, stage, and action sits in one clear operational workspace.",
      points: ["Lead pipeline", "Notes & context", "Lifecycle visibility"],
      icon: "▣",
    },
    {
      title: "Payments",
      desc: "Payment links, confirmation, and downstream status updates inside the same flow.",
      points: ["Link generation", "Payment status", "Confirmation triggers"],
      icon: "◌",
    },
    {
      title: "AI Learning Layer",
      desc: "Knowledge, corrections, and outcomes strengthen future performance per tenant.",
      points: ["Knowledge base", "Feedback loop", "Tenant isolation"],
      icon: "✦",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Define your operation",
      desc: "We map workflow, channels, regions, and conversion requirements.",
    },
    {
      num: "2",
      title: "Configure your platform",
      desc: "Branding, language, logic, routing, and dashboard structure are aligned.",
    },
    {
      num: "3",
      title: "Connect systems",
      desc: "Funnels, AI, payments, and data flows are set into one operating layer.",
    },
    {
      num: "4",
      title: "Go live",
      desc: "You launch with a system built to reduce delays between first contact and cash.",
    },
  ];

  const complianceItems =
    region === "me"
      ? [
          {
            title: "UAE-Ready structure",
            desc: "Positioned for regional deployment, operational control, and business usage across GCC markets.",
            tag: "Regional",
          },
          {
            title: "Business-hour control",
            desc: "Automation rules, escalation windows, and operating timings align with local business requirements.",
            tag: "Control",
          },
          {
            title: "Language support",
            desc: "English and Arabic-first experience with extensibility for additional supported languages.",
            tag: "Multilingual",
          },
          {
            title: "AI operating guardrails",
            desc: "Structured flows, approval logic, and escalation boundaries reduce uncontrolled automation behavior.",
            tag: "Safety",
          },
          {
            title: "Tenant data isolation",
            desc: "Each tenant’s knowledge, settings, and records sit independently.",
            tag: "Isolation",
          },
          {
            title: "Operational visibility",
            desc: "Centralized views, action logs, and performance metrics make oversight practical.",
            tag: "Audit",
          },
        ]
      : [
          {
            title: "North America positioning",
            desc: "The same operating structure is adapted for Canada and USA commercial use.",
            tag: "Regional",
          },
          {
            title: "Workflow governance",
            desc: "Structured communication, routing, and response control preserve a consistent customer journey.",
            tag: "Control",
          },
          {
            title: "Language-ready foundation",
            desc: "Core language switching and localization patterns remain available at the UI level.",
            tag: "Multilingual",
          },
          {
            title: "Operational boundaries",
            desc: "AI actions sit inside controlled system rules rather than open-ended automation.",
            tag: "Safety",
          },
          {
            title: "Tenant separation",
            desc: "Each business operates inside its own independent workspace and logic layer.",
            tag: "Isolation",
          },
          {
            title: "Reporting visibility",
            desc: "Actions, outcomes, and operational status stay visible in one controlled environment.",
            tag: "Audit",
          },
        ];

  const learningCards = [
    {
      title: "Per-Tenant AI Architecture",
      points: [
        "Knowledge stays isolated by tenant",
        "Corrections improve future context",
        "Conversation outcomes shape retrieval",
      ],
      icon: "✿",
    },
    {
      title: "Answer Fidelity Improves",
      points: [
        "More accurate responses over time",
        "Business-specific context retrieval",
        "Smarter escalation patterns",
      ],
      icon: "●",
    },
    {
      title: "Continuous Improvement Loop",
      points: [
        "Knowledge base updates",
        "Manual corrections captured",
        "Training cycle visibility",
      ],
      icon: "▣",
    },
    {
      title: "Real Performance Signals",
      points: [
        "Resolution tracking",
        "Escalation tracking",
        "Operational trend visibility",
      ],
      icon: "⚡",
    },
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const currentLanguageLabel =
    languages.find((item) => item.code === language)?.middle || "English";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#060b17] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,55,190,0.18),transparent_26%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px] pointer-events-none" />

      <header className="sticky top-0 z-50 border-b border-[#1b2234] bg-[#070d19]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-black text-black shadow-[0_0_22px_rgba(250,204,21,0.35)]">
              BH
            </div>
            <div className="text-3xl font-semibold tracking-tight">Bhive</div>
          </div>

          <nav className="hidden items-center gap-9 text-sm text-gray-300 lg:flex">
            <button onClick={() => scrollToId("how-it-works")} className="hover:text-white">
              {t.navHow}
            </button>
            <button onClick={() => scrollToId("platform")} className="hover:text-white">
              {t.navPlatform}
            </button>
            <button onClick={() => scrollToId("compliance")} className="hover:text-white">
              {t.navCompliance}
            </button>
            <button onClick={() => scrollToId("contact")} className="hover:text-white">
              {t.navProposal}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl border border-[#27304a] bg-[#0c1424] px-4 py-2 text-sm text-white"
              >
                <span className="text-cyan-300">🌐</span>
                <span>{currentLanguageLabel}</span>
                <span className="text-xs text-gray-400">▼</span>
              </button>

              {showLanguageMenu && (
                <div className="absolute right-0 mt-3 w-[260px] overflow-hidden rounded-3xl border border-[#1f2740] bg-[#0d1325] shadow-2xl">
                  {languages.map((item, index) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`grid w-full grid-cols-[50px_1fr_1fr] items-center px-5 py-5 text-left hover:bg-[#121a31] ${
                        index !== languages.length - 1 ? "border-b border-[#1f2740]" : ""
                      }`}
                    >
                      <span className="text-lg text-yellow-300">{item.left}</span>
                      <span className="text-lg text-white">{item.middle}</span>
                      <span className="justify-self-end text-base text-gray-400">
                        {item.right}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="hidden rounded-xl border border-[#27304a] px-4 py-2 text-sm text-white md:block">
              {t.signIn}
            </button>

            <button
              onClick={() => scrollToId("contact")}
              className="rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(250,204,21,0.25)]"
            >
              {t.proposalBtn}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative px-5 pb-20 pt-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex justify-center">
              <div className="flex border-b border-[#26304a] text-sm">
                <button
                  onClick={() => setRegion("me")}
                  className={`px-8 py-4 font-semibold tracking-wide ${
                    region === "me"
                      ? "border-b-2 border-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }`}
                >
                  {t.regionMe}
                </button>
                <button
                  onClick={() => setRegion("na")}
                  className={`px-8 py-4 font-semibold tracking-wide ${
                    region === "na"
                      ? "border-b-2 border-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }`}
                >
                  {t.regionNa}
                </button>
              </div>
            </div>

            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="pt-8">
                <div className="mb-7 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-sm font-medium text-yellow-300">
                  {dashboardStats.badge}
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                  {t.headline1}
                  <span className="mt-3 block text-purple-400">{t.headline2}</span>
                </h1>

                <div className="mt-8 max-w-3xl space-y-4 text-[18px] leading-9 text-gray-300 md:text-[20px]">
                  <p className="font-serif italic text-gray-400">{t.introItalic1}</p>
                  <p className="font-serif italic text-gray-400">{t.introItalic2}</p>
                  <p>{t.description}</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToId("contact")}
                    className="rounded-2xl bg-yellow-400 px-8 py-4 text-base font-semibold text-black shadow-[0_0_28px_rgba(250,204,21,0.25)]"
                  >
                    {t.proposalBtn}
                  </button>
                  <button
                    onClick={() => scrollToId("how-it-works")}
                    className="rounded-2xl border border-[#2a3550] bg-[#0c1322] px-8 py-4 text-base text-white"
                  >
                    {t.viewPlatform}
                  </button>
                </div>

                <div className="mt-10 max-w-xl rounded-3xl border border-[#1f2740] bg-[#0c1322] p-5 shadow-2xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-3 flex gap-2">
                        <span className="h-3 w-8 rounded-full bg-yellow-400/90" />
                        <span className="h-3 w-8 rounded-full bg-yellow-400/90" />
                        <span className="h-3 w-8 rounded-full bg-yellow-400/90" />
                        <span className="h-3 w-8 rounded-full bg-yellow-400/90" />
                        <span className="h-3 w-8 rounded-full bg-yellow-400/90" />
                        <span className="h-3 w-8 rounded-full bg-[#202944]" />
                        <span className="h-3 w-8 rounded-full bg-[#202944]" />
                      </div>
                      <p className="text-lg font-semibold text-white">{t.onboardingSlots}</p>
                      <p className="mt-1 text-sm text-gray-400">{t.onboardingSub}</p>
                    </div>
                    <button className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 font-semibold text-yellow-300">
                      {t.applyNow}
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="absolute -inset-10 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="relative rounded-[34px] border border-[#1d2440] bg-[#0d1324] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <div className="ml-4 rounded-full bg-[#08101d] px-4 py-2 text-sm text-gray-400">
                      {dashboardStats.dashboardUrl}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-yellow-500/20 bg-[#09111e] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                        {t.revenueLabel}
                      </p>
                      <h3 className="mt-4 text-4xl font-bold">{dashboardStats.revenue}</h3>
                      <p className="mt-2 text-sm text-yellow-400">{t.confirmed}</p>
                    </div>
                    <div className="rounded-2xl border border-purple-500/20 bg-[#09111e] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                        {t.conversationsLabel}
                      </p>
                      <h3 className="mt-4 text-4xl font-bold">
                        {dashboardStats.conversations}
                      </h3>
                      <p className="mt-2 text-sm text-purple-400">↑ 23% week</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-500/20 bg-[#09111e] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                        {t.resolutionLabel}
                      </p>
                      <h3 className="mt-4 text-4xl font-bold">
                        {dashboardStats.resolution}
                      </h3>
                      <p className="mt-2 text-sm text-emerald-400">{t.noHuman}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-5 gap-3">
                    {[t.funnel, dashboardStats.smsOrWhatsApp, t.crm, t.voice, t.payment].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-[#1c2540] bg-[#0a111e] p-4 text-center text-sm text-gray-300"
                        >
                          <div className="mb-3 text-xl text-yellow-300">◉</div>
                          <div>{item}</div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-5 space-y-3">
                    {region === "me" ? (
                      <>
                        <div className="flex items-center justify-between rounded-2xl border border-[#1c2540] bg-[#0a111e] px-4 py-4">
                          <div>
                            <p className="font-medium text-white">Sara Al-Mahmoud</p>
                            <p className="text-sm text-gray-400">AI confirmed booking</p>
                          </div>
                          <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs text-yellow-300">
                            BOOKED
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-[#1c2540] bg-[#0a111e] px-4 py-4">
                          <div>
                            <p className="font-medium text-white">Mohammed Al-Khalili</p>
                            <p className="text-sm text-gray-400">Payment sent — AED 1200</p>
                          </div>
                          <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300">
                            PENDING
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-[#1c2540] bg-[#0a111e] px-4 py-4">
                          <div>
                            <p className="font-medium text-white">Priya Nair</p>
                            <p className="text-sm text-gray-400">AI answered query in 2.3s</p>
                          </div>
                          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                            RESOLVED
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between rounded-2xl border border-[#1c2540] bg-[#0a111e] px-4 py-4">
                          <div>
                            <p className="font-medium text-white">Jennifer MacLeod</p>
                            <p className="text-sm text-gray-400">AI confirmed appt — Tue 10am</p>
                          </div>
                          <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs text-yellow-300">
                            BOOKED
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-[#1c2540] bg-[#0a111e] px-4 py-4">
                          <div>
                            <p className="font-medium text-white">Robert Patel</p>
                            <p className="text-sm text-gray-400">Payment link — $850 CAD</p>
                          </div>
                          <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300">
                            PENDING
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-[#1c2540] bg-[#0a111e] px-4 py-4">
                          <div>
                            <p className="font-medium text-white">Priya Nair</p>
                            <p className="text-sm text-gray-400">AI answered query in 2.3s</p>
                          </div>
                          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                            RESOLVED
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1b2234] bg-[#09101d] px-5 py-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-5">
            {[t.statsStrip1, t.statsStrip2, t.statsStrip3, t.statsStrip4, t.statsStrip5].map(
              (item, index) => (
                <div key={item} className="text-center">
                  <p
                    className={`text-xl font-semibold ${
                      index === 0
                        ? "text-yellow-300"
                        : index === 1
                        ? "text-purple-300"
                        : index === 2
                        ? "text-emerald-300"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="bg-[#08101b] px-5 py-20 text-center">
          <div className="mx-auto max-w-6xl">
            <p className="mb-8 text-sm uppercase tracking-[0.35em] text-yellow-300">
              {t.trustedBy}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 text-lg text-gray-400">
              {t.logos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mx-auto mb-5 h-2 w-64 rounded-full bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
              <h2 className="text-4xl font-semibold tracking-tight">{t.numbersTitle}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.numbersSub}</p>
            </div>

            <div className="space-y-6">
              {testimonials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-7"
                >
                  <p className="text-lg leading-8 text-gray-200">{item.title}</p>
                  <p className="mt-3 max-w-4xl text-gray-400">{item.body}</p>
                  <div className="mt-5">
                    <p className={`text-2xl font-bold ${item.accent}`}>{item.value}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#09101d] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-4xl font-semibold">{t.journeyTitle}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.journeySub}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {journeyCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6"
                >
                  <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${card.accent}`}>
                    {card.title}
                  </p>
                  <p className="mt-5 text-gray-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-4xl font-semibold">{t.systemsTitle}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.systemsSub}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {systems.map((system) => (
                <div
                  key={system.title}
                  className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6"
                >
                  <div className="mb-4 text-2xl text-yellow-300">{system.icon}</div>
                  <h3 className="text-2xl font-semibold">{system.title}</h3>
                  <p className="mt-3 text-gray-400">{system.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-gray-300">
                    {system.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#09101d] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mx-auto mb-5 h-2 w-64 rounded-full bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
              <h2 className="text-4xl font-semibold">{t.stepsTitle}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.stepsSub}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compliance" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mx-auto mb-5 h-2 w-64 rounded-full bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
              <h2 className="text-4xl font-semibold">{t.complianceTitle}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.complianceSub}</p>
            </div>

            <div className="rounded-[32px] border border-[#1f2740] bg-[#0c1322] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {complianceItems.map((item) => (
                  <div key={item.title} className="border-b border-[#1b2234] pb-6 last:border-b-0">
                    <p className="text-2xl font-semibold">{item.title}</p>
                    <p className="mt-3 text-gray-400">{item.desc}</p>
                    <span className="mt-4 inline-flex rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#09101d] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mx-auto mb-5 h-2 w-64 rounded-full bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
              <h2 className="text-4xl font-semibold">{t.learningTitle}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.learningSub}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {learningCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6"
                >
                  <div className="mb-4 text-2xl text-purple-300">{card.icon}</div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <ul className="mt-5 space-y-3 text-gray-300">
                    {card.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_420px]">
            <div className="rounded-[32px] border border-[#1f2740] bg-[#0c1322] p-8">
              <div className="mb-4 inline-flex rounded-full bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-yellow-300">
                Proposal
              </div>
              <h2 className="text-4xl font-semibold">{t.proposalTitle}</h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-400">{t.proposalSub}</p>

              <div className="mt-8 space-y-5 text-gray-300">
                <div>• Multi-tenant white-label SaaS structure</div>
                <div>• Region-based positioning and language layer</div>
                <div>• WhatsApp, voice, CRM, funnels, and payment logic</div>
                <div>• Admin visibility + tenant operations model</div>
              </div>

              <div className="mt-8 rounded-2xl border border-purple-500/15 bg-purple-500/5 p-5 text-sm text-purple-200">
                Your proposal can be structured around exact channels, roles, and deployment
                requirements before the full build begins.
              </div>
            </div>

            <div className="rounded-[32px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h3 className="text-2xl font-semibold">{t.formTitle}</h3>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">{t.formName}</label>
                  <input
                    className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
                    placeholder={t.formName}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">{t.formBusiness}</label>
                  <input
                    className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
                    placeholder={t.formBusiness}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">{t.formEmail}</label>
                  <input
                    className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
                    placeholder={t.formEmail}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">{t.formPhone}</label>
                  <input
                    className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
                    placeholder={t.formPhone}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">{t.formRegion}</label>
                  <select className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none">
                    <option>{t.regionMe}</option>
                    <option>{t.regionNa}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">{t.formNotes}</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
                    placeholder={t.formPlaceholderNotes}
                  />
                </div>

                <button className="w-full rounded-2xl bg-yellow-400 px-5 py-3.5 font-semibold text-black shadow-[0_0_28px_rgba(250,204,21,0.25)]">
                  {t.formSubmit}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#09101d] px-5 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-5 inline-flex rounded-full bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-yellow-300">
              Get Started
            </div>
            <h2 className="text-4xl font-semibold">{t.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{t.ctaSub}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-black"
              >
                {t.proposalBtn}
              </button>
              <button
                onClick={() => scrollToId("platform")}
                className="rounded-2xl border border-[#2a3550] bg-[#0c1322] px-8 py-4 text-white"
              >
                {t.viewPlatform}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1b2234] bg-[#070d19] px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-black text-black">
                BH
              </div>
              <div className="text-3xl font-semibold">Bhive</div>
            </div>
            <p className="max-w-md text-gray-400">{t.footerText}</p>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-gray-500">Platform</p>
            <div className="space-y-3 text-gray-400">
              <p>Funnels</p>
              <p>CRM</p>
              <p>WhatsApp AI</p>
              <p>Voice AI</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-gray-500">Company</p>
            <div className="space-y-3 text-gray-400">
              <p>About</p>
              <p>Compliance</p>
              <p>Proposal</p>
              <p>Support</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-gray-500">Regions</p>
            <div className="space-y-3 text-gray-400">
              <p>UAE & GCC</p>
              <p>Canada & USA</p>
              <p>English / Arabic</p>
              <p>Multi-tenant SaaS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}