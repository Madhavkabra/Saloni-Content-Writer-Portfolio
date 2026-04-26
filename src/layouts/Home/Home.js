import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Text } from 'components/Text';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'components/Link';
import { Icon } from 'components/Icon';
import dynamic from 'next/dynamic';
import { useScrollTimeline } from 'hooks';

const Profile = dynamic(() => import('layouts/Home/Profile').then(mod => mod.Profile));
import { Image } from 'components/Image';
import landingPageThumb from 'assets/landingPage.jpg';
import landingPageThumbLarge from 'assets/landingPage-large.jpg';
import medicalContentWritingThumb from 'assets/medicalContentWriting.jpg';
import medicalContentWritingThumbLarge from 'assets/medicalContentWriting-large.jpg';
import productThumb from 'assets/productEquipement.jpg';
import productThumbLarge from 'assets/productEquipement-large.jpg';
import procedureThumb from 'assets/procedurePage.jpg';
import procedureThumbLarge from 'assets/procedurePage-large.jpg';
import seoThumb from 'assets/seo-writing.jpg';
import seoThumbLarge from 'assets/seo-writing-large.jpg';
import academicThumb from 'assets/academic-writing.jpg';
import academicThumbLarge from 'assets/academic-writing-large.jpg';
import profilePlaceholder from 'assets/profile-placeholder.jpg';
import styles from './Home.module.css';

const clientLogos = [
  { name: 'Cetaphil', logo: 'https://www.cetaphil.in/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites/default/dw2648f734/logos/Cetaphil_Logo_285.png?sw=240' },
  { name: 'Medgenome', logo: 'https://diagnostics.medgenome.com/wp-content/uploads/2025/11/cropped-MG-logo-with-R-mark.png' },
  { name: 'Ferty9', logo: 'https://www.ferty9.com/wp-content/uploads/2025/08/ferty9-fertility-center-logo.webp' },
  { name: "Dr. Batra's Homeopathy", logo: 'https://drbatras.com/campaigns/commons/image/homeopathy_images_v4/db-logo-mob.webp' },
  { name: 'Vetic Pet Clinic', logo: 'https://vetic.in/VeticLogoNew.svg' },
  { name: 'ManipalCigna', logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hrau0y0odtoutqhtcor3?ik-sanitizeSvg=true' },
  { name: 'Maxivision Eye Hospital', logo: 'https://www.maxivisioneyehospital.com/wp-content/uploads/2024/04/logo-new.png' },
  { name: 'Health Science Institute', logo: 'https://scienceinhealth.com/wp-content/uploads/2024/07/hsi.png' },
  { name: 'HolisticWow', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8PQ9K7HSE8SqGa1KZsVTlpxSQvwlIZtYkA&s' },
  { name: 'HealthOK Global (by Norstella)', logo: 'https://www.norstella.com/wp-content/uploads/2023/06/cropped-Norstella_TM_tagline_color_reverse_RGB-resize.webp' },
  { name: 'Zocdoc', logo: 'https://www.advancedmd.com/wp-content/uploads/2025/06/logo_lockup_positive_rgb.png' },
  { name: 'Ichelon Consulting Group', logo: 'https://ichelonconsulting.com/wp-content/uploads/2023/07/logo-ICG.png' },
];

const specialtyNiches = [
  {
    icon: '🌸',
    title: "Women's Health & Fertility",
    specialties: ['IVF/IUI', 'PCOS', 'Reproductive Medicine', 'Hormonal Health'],
    link: '/articles/?0=Medical+Content+Writing',
  },
  {
    icon: '🦋',
    title: 'Thyroid & Functional Medicine',
    specialties: ['1000+ Patients Treated', 'Personalized Protocols', 'Holistic Approach'],
    link: '/articles/?0=Blog',
  },
  {
    icon: '📱',
    title: 'Telehealth & Digital Health',
    specialties: ['Platform Content', 'App Evaluations', 'User-Facing Copy'],
    link: '/articles/?0=Web+Page+Content',
  },
  {
    icon: '💊',
    title: 'Pharma & B2B Medical',
    specialties: ['Product Pages', 'Medicine Descriptions', 'Technical Writing'],
    link: '/articles/?0=Product+Description',
  },
  {
    icon: '✨',
    title: 'Dermatology & Skincare',
    specialties: ['Clinical + Consumer Balance', 'Global Brands (Cetaphil)'],
    link: '/articles/?0=Landing+Page+Copy',
  },
  {
    icon: '🧠',
    title: 'Mental Health',
    specialties: ['Sensitive Content', 'Evidence-Based', 'Stigma-Aware Writing'],
    link: '/articles/?0=Medical+Content+Writing',
  },
  {
    icon: '🧬',
    title: 'Genetic Testing & Diagnostics',
    specialties: ['Complex Science Made Accessible', 'Lab Reports', 'Patient Education'],
    link: '/articles/?0=Case+Study',
  },
  {
    icon: '🌿',
    title: 'Nutrition & Holistic Wellness',
    specialties: ['Research-Backed', 'Herbs', 'Mind-Body Connection'],
    link: '/articles/?0=Blog',
  },
  {
    icon: '🐾',
    title: 'Veterinary Medicine',
    specialties: ['Pet Care Content', 'Clinical + Warm Tone'],
    link: '/articles/?0=Service+Page',
  },
  {
    icon: '🎗️',
    title: 'Oncology & Cancer Care',
    specialties: ['Compassionate', 'Accurate', 'Patient-Focused'],
    link: '/articles/?0=Procedure+Page',
  },
  {
    icon: '👁️',
    title: 'Ophthalmology',
    specialties: ['Eye Health', 'Procedures', 'Patient Education'],
    link: '/articles/?0=Procedure+Page',
  },
  {
    icon: '🌱',
    title: 'Alternative & Homeopathy',
    specialties: ['Evidence-Aware', 'Patient-Centric', 'Cultural Sensitivity'],
    link: '/articles/?0=Newsletter',
  },
];

const services = [
  {
    icon: '📝',
    title: 'Medical Blog Writing That Ranks & Converts',
    description:
      'Clinically accurate, SEO-optimized blogs that educate patients and drive organic traffic. Written for health brands across 15+ medical specialties.',
    cta: 'View Blog Samples',
    link: '/articles/?0=Blog',
  },
  {
    icon: '🎯',
    title: 'Landing Page & Web Copy That Turns Clicks Into Patients',
    description:
      'Conversion-focused copy that turns visitors into patients. Built for US physicians, clinics, and healthcare companies.',
    cta: 'See Landing Pages',
    link: '/articles/?0=Landing+Page+Copy',
  },
  {
    icon: '🏥',
    title: 'Service Pages & Procedure Pages That Build Trust',
    description:
      'Trust-building service pages for dental, fertility, oncology, and specialty clinics. SEO-optimized for local and national search.',
    cta: 'View Examples',
    link: '/articles/?0=Procedure+Page',
  },
  {
    icon: '🌸',
    title: "Women's Health & Fertility Content With Clinical Empathy",
    description:
      'Sensitive, accurate content for IVF, PCOS, and reproductive medicine. Where clinical precision meets human empathy.',
    cta: 'Read Fertility Content',
    link: '/articles/?0=Medical+Content+Writing',
  },
  {
    icon: '✨',
    title: 'Dermatology Content for Global Brands',
    description:
      'Clinical + consumer-friendly content for dermatology brands like Cetaphil. Balancing science with accessibility.',
    cta: 'View Skincare Portfolio',
    link: '/articles/?0=Medical+Content+Writing',
  },
  {
    icon: '📱',
    title: 'Telehealth Content That Users Trust',
    description:
      'User-facing copy and platform evaluations for telehealth apps. Currently practicing at HealthOK Global (Norstella).',
    cta: 'Explore Digital Health Work',
    link: '/articles/?0=Web+Page+Content',
  },
  {
    icon: '🌿',
    title: 'Nutrition Content Grounded in Clinical Research',
    description:
      'Research-backed articles on herbs, nutrition, and holistic health. Grounded in clinical studies and patient understanding.',
    cta: 'Read Wellness Articles',
    link: '/articles/?0=Blog',
  },
  {
    icon: '💊',
    title: 'Pharma & Product Copy That Educates & Sells',
    description:
      'Medicine pages, product descriptions, and supplement copy with clinical accuracy and SEO structure.',
    cta: 'View Product Descriptions',
    link: '/articles/?0=Product+Description',
  },
  {
    icon: '✅',
    title: 'Medical Review & Quality Control You Can Trust',
    description:
      'Accuracy checking and quality control for health content. Ensuring clinical credibility and editorial standards.',
    cta: 'Learn About Review Services',
    link: '/contact#contact',
  },
  {
    icon: '♻️',
    title: 'Revive Old Content With Strategic SEO Refresh',
    description:
      "Revive underperforming content with strategic rewrites aligned to current search trends and E-E-A-T standards.",
    cta: 'Request Audit',
    link: '/contact#contact',
  },
  {
    icon: '🤝',
    title: 'Discreet Ghostwriting for Healthcare Brands',
    description:
      'Discreet, high-quality healthcare ghostwriting. Your voice, your brand, my clinical expertise.',
    cta: 'Inquire About Ghost Writing',
    link: '/contact#contact',
  },
  {
    icon: '🎓',
    title: 'Rigorous Academic Writing for Global Standards',
    description:
      'Essays, research papers, case studies, and dissertations with rigorous quality control and citation standards.',
    cta: 'View Academic Portfolio',
    link: '/articles/?0=Academic+Writing',
  },
];

const timelineEntries = [
  {
    icon: '🧪',
    role: 'Senior Clinical Consultant & Writer',
    company: 'HealthOK Global (by Norstella)',
    period: 'Current',
    description:
      'At HealthOK Global, part of Norstella, a global life sciences data company, I work at the intersection of clinical medicine and digital health. I test and evaluate the HealthOK and Zocvi health platforms as a practicing doctor, identifying gaps in clinical accuracy and user experience. My content contributions directly improve platform visibility, user trust, and engagement for telehealth audiences. This role reflects my ability to think like both a clinician and a content strategist simultaneously.',
    badge: 'Current Role',
  },
  {
    icon: '🏢',
    role: 'Medical Content Writer',
    company: 'NPDI',
    period: '2021-2023',
    description:
      "Ghost-wrote medical content for high-profile brands and clinics: Medgenome (genetic testing), Ferty9 (women's fertility health), Cetaphil (skincare product descriptions), Medicas (digital health platform), and Dr. Batra Homeopathy (alternative medicine), across blogs, web pages, and landing pages. Successfully retained complex, demanding clients through consistent quality and on-time delivery.",
    badge: 'Top Brands',
  },
  {
    icon: '🩺',
    role: 'Medical Blog Writer & Reviewer',
    company: 'Health Science Institute',
    description:
      'Produced medically accurate health blogs and served as a content reviewer, ensuring published material met clinical standards and editorial guidelines.',
  },
  {
    icon: '🌿',
    role: 'Nutritional Content Writer',
    company: 'HolisticWow',
    description:
      'Produced high-quality, research-based articles on herbs, spices, peppers, and holistic wellness, grounded in clinical studies, research paper references, and expert collaboration.',
  },
  {
    icon: '🐾',
    role: 'Veterinary & Healthcare Writer',
    company: 'FTA Global',
    description:
      "Wrote SEO-focused web content and landing pages for Vetic Pet Clinic (India's most recognized pet care brand), ManipalCigna (renowned health insurance company), and Maxivision Eye Hospital (renowned eye hospital chain).",
    badge: 'Multi-Brand',
  },
  {
    icon: '📈',
    role: 'Medical Content Strategist',
    company: 'Ichelon',
    description:
      "Produced diverse, high-volume SEO content for a vast range of specialty clinics and healthcare brands across: Dental · Plastic Surgery · Liver Health · Oncology · Women's Health · Fertility · Mental Health · Dermatology · Alternative Medicine",
    badge: 'High Volume',
  },
  {
    icon: '🇺🇸',
    role: 'Medical Content Writer',
    company: 'Zocdoc',
    description:
      'Wrote SEO-optimized landing pages for US-based doctors practicing across multiple locations, helping multi-location physician brands capture local search intent and drive patient acquisition at scale.',
    badge: 'US Market',
  },
  {
    icon: '🦋',
    role: 'Assistant Doctor & Medical Writer',
    company: 'Jeevam Health',
    description:
      'Specialized in thyroid care with 1000+ patients, capturing detailed patient history, developing individualized diagnostic protocols, and collaborating with a multidisciplinary team. Clinical experience directly informs my thyroid content writing.',
    badge: 'Clinical Practice',
  },
  {
    icon: '🎓',
    role: 'Executive Academic Writer',
    company: 'SSSI (by Digiversal)',
    description:
      'Produced 2000+ academic pieces, essays, research papers, reviews, case studies, and dissertations, in strict adherence to academic standards with international clients.',
    badge: '2000+ Projects',
  },
];

const segmentCtas = [
  {
    icon: '🏥',
    headline: "If you're a clinic or hospital",
    body: 'I help you get found by the right patients online, with content that builds trust before they even walk through your door.',
    cta: 'Get SEO Strategy',
    link: '/contact?subject=SEO%20Strategy%20for%20Clinic%20or%20Hospital#contact',
  },
  {
    icon: '💻',
    headline: "If you're a health tech or telehealth brand",
    body: 'I bridge clinical credibility and digital strategy, so your platform content sounds like it was written by a doctor (because it was).',
    cta: 'Improve Platform Content',
    link: '/contact?subject=Platform%20Content%20Support%20for%20Health%20Tech#contact',
  },
  {
    icon: '🧪',
    headline: "If you're a pharma or wellness brand",
    body: "I translate complex science into content that educates, ranks, and converts, whether it's a product page, a blog, or a full content refresh.",
    cta: 'Boost Product Content',
    link: '/contact?subject=Product%20Content%20for%20Pharma%20or%20Wellness%20Brand#contact',
  },
  {
    icon: '📝',
    headline: "If you need a ghost writer or medical reviewer",
    body: 'I quietly support healthcare brands with clinically accurate, publish-ready content. Your voice stays intact; I bring editorial rigor and QC.',
    cta: 'Inquire About Partnership',
    link: '/contact?subject=Ghostwriting%20or%20Medical%20Review%20Partnership#contact',
  },
];

const contactInfoItems = [
  { icon: 'email', label: 'Email', value: 'salonikabra1100@gmail.com', href: 'mailto:salonikabra1100@gmail.com' },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/dr-saloni-kabra-b79311170',
    href: 'https://www.linkedin.com/in/dr-saloni-kabra-b79311170',
  },
  { icon: 'link', label: 'Resume', value: 'Download Resume', href: '/resume' },
];

const quickLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/articles' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
];

const portfolioFilters = [
  'All Work',
  'Medical Blogs',
  'Landing Pages',
  'Service Pages',
  'Product Descriptions',
  "Women's Health",
  'Telehealth',
  'Pharma',
  'Dermatology',
  'Academic Writing',
  'Veterinary',
  'Mental Health',
];

const portfolioItems = [
  {
    title: 'Complete Guide to IVF: What to Expect',
    client: 'Ferty9',
    category: 'Medical Blogs',
    tags: ["Women's Health"],
    description:
      'Comprehensive 2,500-word guide covering IVF process, costs, and success rates. Structured for patient clarity and long-tail search visibility.',
    metric: "Ranked #1 for target IVF keywords in 3 months",
    cta: 'Read More',
    href: '/articles/?0=Medical+Content+Writing',
    image: [medicalContentWritingThumb, medicalContentWritingThumbLarge],
  },
  {
    title: 'Book Your Consultation Landing Page',
    client: 'Zocdoc Physician Client',
    category: 'Landing Pages',
    tags: ['Dermatology'],
    description:
      'Conversion-driven landing page copy for a multi-location dermatologist, optimized around patient intent and appointment-focused messaging.',
    metric: 'Increased consultation bookings by 35%',
    cta: 'View Sample',
    href: '/articles/?0=Landing+Page+Copy',
    image: [landingPageThumb, landingPageThumbLarge],
  },
  {
    title: 'Cetaphil Gentle Skin Cleanser Description',
    client: 'Cetaphil',
    category: 'Product Descriptions',
    tags: ['Dermatology', 'Pharma'],
    description:
      'Clinical + consumer-friendly product copy balancing evidence-backed claims with accessible language for skincare buyers.',
    metric: 'Improved product-page engagement metrics',
    cta: 'View Sample',
    href: '/articles/?0=Product+Description',
    image: [productThumb, productThumbLarge],
  },
  {
    title: 'Thyroid Function Testing Service Page',
    client: 'Confidential Healthcare Client',
    category: 'Service Pages',
    tags: ['Pharma'],
    description:
      'SEO-focused diagnostic service page explaining thyroid panel tests, preparation, and reporting timelines in patient-friendly language.',
    metric: 'Top-3 visibility for core thyroid test keywords',
    cta: 'Read More',
    href: '/articles/?0=Service+Page',
    image: [procedureThumb, procedureThumbLarge],
  },
  {
    title: "Understanding Your Dog's Skin Allergies",
    client: 'Vetic Pet Clinic',
    category: 'Medical Blogs',
    tags: ['Veterinary'],
    description:
      'Educational pet-health article balancing clinical guidance with empathetic communication for worried pet owners.',
    metric: 'Higher time-on-page vs previous pet blogs',
    cta: 'Read More',
    href: '/articles/?0=Blog',
    image: [medicalContentWritingThumb, medicalContentWritingThumbLarge],
  },
  {
    title: 'PCOS Lifestyle Management Guide',
    client: 'Confidential Healthcare Client',
    category: 'Medical Blogs',
    tags: ["Women's Health"],
    description:
      'Evidence-aligned guide on PCOS symptoms, nutrition, and care pathways designed for patient education and recurring organic traffic.',
    metric: 'Featured in high-intent query clusters',
    cta: 'Read More',
    href: '/articles/?0=Medical+Content+Writing',
    image: [seoThumb, seoThumbLarge],
  },
  {
    title: 'Teleconsultation Platform Onboarding Copy',
    client: 'HealthOK Global',
    category: 'Landing Pages',
    tags: ['Telehealth'],
    description:
      'User-first onboarding and feature-value copy for a digital care platform, with clinician-informed trust and compliance cues.',
    metric: 'Reduced bounce on conversion screens',
    cta: 'View Sample',
    href: '/articles/?0=Web+Page+Content',
    image: [landingPageThumb, landingPageThumbLarge],
  },
  {
    title: 'Oncology Procedure Information Series',
    client: 'Ichelon Clinic Network',
    category: 'Service Pages',
    tags: ['Mental Health'],
    description:
      'Procedure-page set for oncology services designed to improve clarity, trust, and consultation readiness for caregivers and patients.',
    metric: 'Improved non-branded impressions',
    cta: 'Read More',
    href: '/articles/?0=Procedure+Page',
    image: [procedureThumb, procedureThumbLarge],
  },
  {
    title: 'Doctor Profile Conversion Landing Funnel',
    client: 'Confidential Healthcare Client',
    category: 'Landing Pages',
    tags: ['Telehealth'],
    description:
      'High-conversion profile and booking funnel copy crafted for local and multi-location physician discovery journeys.',
    metric: '35% more qualified inbound leads',
    cta: 'View Sample',
    href: '/articles/?0=Landing+Page+Copy',
    image: [landingPageThumb, landingPageThumbLarge],
  },
  {
    title: 'Homeopathy Product Education Pages',
    client: "Dr. Batra's Homeopathy",
    category: 'Product Descriptions',
    tags: ['Pharma'],
    description:
      'Product and condition-focused pages simplifying treatment narratives with search-friendly structure and compliant tone.',
    metric: 'Higher product page CTR from search',
    cta: 'View Sample',
    href: '/articles/?0=Product+Description',
    image: [productThumb, productThumbLarge],
  },
  {
    title: 'Anxiety Care Education Blog Cluster',
    client: 'Confidential Healthcare Client',
    category: 'Medical Blogs',
    tags: ['Mental Health'],
    description:
      'Multi-part blog cluster for anxiety and therapy support topics, blending stigma-aware language with medical credibility.',
    metric: 'Strong internal-link assisted ranking growth',
    cta: 'Read More',
    href: '/articles/?0=Blog',
    image: [seoThumb, seoThumbLarge],
  },
  {
    title: 'Clinical Skincare Landing Campaign',
    client: 'Confidential Healthcare Client',
    category: 'Landing Pages',
    tags: ['Dermatology'],
    description:
      'Campaign landing copy crafted for skincare product families and condition-specific audiences with educational conversion flow.',
    metric: 'Improved campaign conversion quality',
    cta: 'View Sample',
    href: '/articles/?0=Landing+Page+Copy',
    image: [landingPageThumb, landingPageThumbLarge],
  },
  {
    title: 'Academic Research Review Compendium',
    client: 'International Academic Client',
    category: 'Academic Writing',
    tags: ['Academic Writing'],
    description:
      'Long-form literature reviews and case-study synthesis delivered with stringent citation discipline and plagiarism-safe standards.',
    metric: 'Accepted across global institutional quality checks',
    cta: 'Read More',
    href: '/articles/?0=Academic+Writing',
    image: [academicThumb, academicThumbLarge],
  },
  {
    title: 'Pharma Molecule Snapshot Pages',
    client: 'TechnoMedix Partner Client',
    category: 'Product Descriptions',
    tags: ['Pharma'],
    description:
      'Search-ready molecule and formulation pages translating clinical pharmacology into practical prescribing and patient context.',
    metric: 'Scaled content production with QA consistency',
    cta: 'View Sample',
    href: '/articles/?0=Product+Description',
    image: [productThumb, productThumbLarge],
  },
];

const testimonials = [
  {
    quote:
      "Dr. Saloni combines clinical accuracy with strong SEO instincts. Our fertility content quickly became one of our highest-converting channels.",
    name: 'Content Director',
    role: 'Digital Marketing',
    company: 'Ferty9 Fertility Center',
  },
  {
    quote:
      'Dr. Saloni made complex skincare science clear and conversion-friendly. Our product pages became easier to read and performed better.',
    name: 'Brand Marketing Team',
    role: 'Content Strategy',
    company: 'Cetaphil (via NPDI)',
  },
  {
    quote:
      'She translated complex genetic testing topics into language patients and physicians could both trust. Accurate, clear, and highly usable.',
    name: 'Medical Communications',
    role: 'Content Lead',
    company: 'Medgenome Genetic Diagnostics',
  },
  {
    quote:
      'Dr. Saloni delivered veterinary content that was clinically sound yet warm for pet owners. Exactly the tone and trust we needed.',
    name: 'Marketing Team',
    role: 'Content Strategy',
    company: 'Vetic Pet Clinic',
  },
  {
    quote:
      'Her wellness writing is research-backed but never dry. She blends evidence with reader-first clarity beautifully.',
    name: 'Editorial Team',
    role: 'Content Director',
    company: 'HolisticWow',
  },
  {
    quote:
      'Her SEO landing pages for US physician clients convert consistently. She understands patient intent and local search deeply.',
    name: 'Healthcare Content',
    role: 'Senior Editor',
    company: 'Zocdoc Provider Network',
  },
];

const trustStats = [
  { icon: '📊', value: '2,000+', label: 'Pieces Published' },
  { icon: '🏆', value: '50+', label: 'Healthcare Clients' },
  { icon: '🌍', value: '4', label: 'Continents Served' },
  { icon: '⭐', value: '6+', label: 'Years Experience' },
  { icon: '📈', value: '200%', label: 'Avg. Traffic Increase' },
  { icon: '🎯', value: '15+', label: 'Medical Specialties' },
];

const seoKeywords =
  'medical content writer, healthcare content strategist, clinical writer, medical SEO writer, telehealth content, pharma writer, medical ghostwriter, US healthcare writer, fertility content writer, dermatology writer, thyroid content expert, medical reviewer, clinical content consultant';

const getConciseDescription = (text, maxSentences = 2) => {
  const sentences = text.match(/[^.!?]+[.!?]/g) || [text];
  return sentences.slice(0, maxSentences).join(' ').trim();
};

export const Home = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('All Work');
  const [portfolioVisibleCount, setPortfolioVisibleCount] = useState(6);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Medical Blog Writing',
    message: '',
    budget: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [showTalkButton, setShowTalkButton] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const [nicheScroll, setNicheScroll] = useState({ prev: false, next: true });
  const nichesGridRef = useRef();
  const intro = useRef();
  const trustRef = useRef();
  const nichesRef = useRef();
  const servicesRef = useRef();
  const timelineRef = useRef();
  const segmentRef = useRef();
  const portfolioRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();
  const about = useRef();
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Saloni Kabra',
    jobTitle: 'Senior Clinical Consultant & Medical Content Strategist',
    description:
      'Licensed MD and senior clinical content strategist with 6+ years writing SEO-optimized healthcare content for global brands.',
    knowsAbout: [
      'Telehealth content',
      'Pharma content writing',
      "Women's health and fertility writing",
      'Thyroid content strategy',
      'Dermatology and skincare content',
      'Medical review and quality control',
      'Healthcare SEO',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'HealthOK Global',
    },
    url: 'https://www.thedoctorpen.com/',
  };

  const serviceSchemas = services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      '@type': 'Person',
      name: 'Dr. Saloni Kabra',
    },
    areaServed: 'Global',
    url: `https://www.thedoctorpen.com${service.link.startsWith('/') ? service.link : `/${service.link}`}`,
  }));

  const updateField = event => {
    const { name, value } = event.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const filteredPortfolioItems = portfolioItems.filter(item => {
    if (activePortfolioFilter === 'All Work') return true;
    if (item.category === activePortfolioFilter) return true;
    return item.tags.includes(activePortfolioFilter);
  });

  const visiblePortfolioItems = filteredPortfolioItems.slice(0, portfolioVisibleCount);

  const onFilterChange = filter => {
    setActivePortfolioFilter(filter);
    setPortfolioVisibleCount(12);
  };

  const updateNicheScroll = () => {
    const el = nichesGridRef.current;
    if (!el) return;
    setNicheScroll({
      prev: el.scrollLeft > 8,
      next: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
    });
  };

  const scrollNiches = dir => () => {
    const el = nichesGridRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 260, behavior: 'smooth' });
  };

  const selectedServiceIndex = activeServiceIndex ?? 0;

  const {
    activeIndex: activeTimelineIndex,
    progress: timelineProgress,
    cardOffsets: timelineCardOffsets,
    isInView: isTimelineInView,
    setCardRef: setTimelineCardRef,
    onTimelineKeyDown,
    reducedMotion: timelineReducedMotion,
  } = useScrollTimeline({
    sectionRef: timelineRef,
    itemCount: timelineEntries.length,
  });

  const validateForm = () => {
    const nextErrors = {};
    if (!formValues.name.trim()) nextErrors.name = 'Name is required.';
    if (!formValues.email.trim()) nextErrors.email = 'Email is required.';
    if (!formValues.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const handleContactSubmit = async event => {
    event.preventDefault();
    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      return;
    }

    try {
      setSending(true);
      setFormSuccess(false);
      const enrichedMessage = [
        formValues.message.trim(),
        '',
        `Project Type: ${formValues.projectType}`,
        `Company/Organization: ${formValues.company || 'Not provided'}`,
        `Budget Range: ${formValues.budget || 'Not provided'}`,
      ].join('\n');

      const { stringify } = await import('qs');
      const res = await fetch('/api/sendgrid/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: stringify({
          fullname: formValues.name,
          email: formValues.email,
          message: enrichedMessage,
        }),
      });

      const data = await res.json();
      if (!res.ok || data?.error) {
        throw new Error(data?.error || 'There was a problem sending your message');
      }

      setFormSuccess(true);
      setFormValues({
        name: '',
        email: '',
        company: '',
        projectType: 'Medical Blog Writing',
        message: '',
        budget: '',
      });
    } catch (error) {
      setFormErrors(prev => ({
        ...prev,
        form: error.message || 'There was a problem sending your message',
      }));
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const sections = [
      intro,
      trustRef,
      nichesRef,
      servicesRef,
      timelineRef,
      segmentRef,
      portfolioRef,
      testimonialsRef,
      contactRef,
      about,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const onScroll = () => {
      setShowTalkButton(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.home}>
      <Meta
        title="Medical Content Writer & Clinical Strategist for US/EU Healthcare Brands"
        description="Licensed MD + Senior Clinical Content Strategist with 6+ years writing SEO-optimized medical content for Cetaphil, Medgenome, Ferty9, Zocdoc & 50+ healthcare brands. Specializing in telehealth, pharma, women's health, thyroid, dermatology. Available for remote/freelance projects."
        ogTitle="Dr. Saloni Kabra | Medical Content Writer & Clinical Strategist"
        ogDescription="MD-turned-content strategist writing SEO-optimized healthcare content for leading US/EU brands. 6+ years. 50+ clients. Available for remote work."
        ogImage="https://www.thedoctorpen.com/social-image.png"
        ogUrl="https://www.thedoctorpen.com/"
        canonicalUrl="https://www.thedoctorpen.com/"
        keywords={seoKeywords}
        structuredData={[personSchema, ...serviceSchemas]}
      />
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <section
        className={styles.trustBar}
        aria-labelledby="trusted-brands-title"
        ref={trustRef}
        data-visible={visibleSections.includes(trustRef.current)}
      >
        <div className={styles.trustBarInner}>
          <Heading className={styles.trustBarTitle} level={3} as="h2" id="trusted-brands-title">
            Trusted by Leading Healthcare Brands
          </Heading>
        </div>
        <div className={styles.logoMarqueeWrapper}>
          <ul className={styles.logoTrack} aria-label="Client logos">
            {clientLogos.map(client => (
              <li className={styles.logoItem} key={client.name}>
                {client.logo ? (
                  <>
                    <img
                      className={styles.logoImage}
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      width={120}
                      height={40}
                    />
                    <span className={styles.logoName}>{client.name}</span>
                  </>
                ) : (
                  <span className={styles.logoText}>{client.name}</span>
                )}
              </li>
            ))}
            {clientLogos.map(client => (
              <li className={styles.logoItem} key={`dup-${client.name}`} aria-hidden="true">
                {client.logo ? (
                  <>
                    <img
                      className={styles.logoImage}
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      width={120}
                      height={40}
                    />
                    <span className={styles.logoName}>{client.name}</span>
                  </>
                ) : (
                  <span className={styles.logoText}>{client.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        className={styles.nichesSection}
        aria-labelledby="specialized-expertise-title"
        ref={nichesRef}
        data-visible={visibleSections.includes(nichesRef.current)}
      >
        <div className={styles.nichesInner}>
          <Heading
            className={styles.nichesTitle}
            level={3}
            as="h2"
            id="specialized-expertise-title"
          >
            Specialized Expertise Across Healthcare Verticals
          </Heading>
          <Text as="p" className={styles.nichesSubtitle}>
            Deep clinical knowledge meets strategic content creation in these high-demand niches
          </Text>
          <div className={styles.nichesScrollWrapper}>
            {nicheScroll.prev && (
              <button
                className={styles.nicheScrollBtn}
                data-dir="prev"
                onClick={scrollNiches(-1)}
                aria-label="Scroll left"
                type="button"
              >
                <Icon icon="arrowLeft" />
              </button>
            )}
            <ul
              className={styles.nichesGrid}
              aria-label="Specialty niches"
              ref={nichesGridRef}
              onScroll={updateNicheScroll}
            >
              {specialtyNiches.map(niche => (
                <li className={styles.nicheCard} key={niche.title}>
                  <span className={styles.nicheIcon} aria-hidden>
                    {niche.icon}
                  </span>
                  <Heading className={styles.nicheTitle} level={5} as="h3">
                    {niche.title}
                  </Heading>
                  <ul className={styles.nicheTags} aria-label={`${niche.title} specialties`}>
                    {niche.specialties.slice(0, 4).map(item => (
                      <li className={styles.nicheTag} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link className={styles.nicheLink} href={niche.link}>
                    View Related Work
                  </Link>
                </li>
              ))}
            </ul>
            {nicheScroll.next && (
              <button
                className={styles.nicheScrollBtn}
                data-dir="next"
                onClick={scrollNiches(1)}
                aria-label="Scroll right"
                type="button"
              >
                <Icon icon="arrowRight" />
              </button>
            )}
          </div>
        </div>
      </section>
      <section
        id="services"
        ref={servicesRef}
        className={styles.servicesSection}
        aria-labelledby="services-title"
        data-visible={visibleSections.includes(servicesRef.current)}
      >
        <div className={styles.servicesInner}>
          <Heading className={styles.servicesTitle} level={3} as="h2" id="services-title">
            How I Transform Healthcare Brands Through Content
          </Heading>
          <Text as="p" className={styles.servicesSubtitle}>
            SEO-optimized, clinically accurate, and strategically crafted for real business
            outcomes
          </Text>

          <div className={styles.servicesDesktop} role="tablist" aria-label="Healthcare content services">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                role="tab"
                id={`service-tab-${index}`}
                className={styles.serviceTab}
                aria-selected={selectedServiceIndex === index}
                aria-controls={`service-panel-${index}`}
                onClick={() => setActiveServiceIndex(index)}
              >
                <span className={styles.serviceTabIcon} aria-hidden>
                  {service.icon}
                </span>
                <span className={styles.serviceTabText}>{service.title}</span>
              </button>
            ))}
          </div>

          {services.map((service, index) => (
            <article
              key={service.title}
              role="tabpanel"
              id={`service-panel-${index}`}
              aria-labelledby={`service-tab-${index}`}
              className={styles.servicePanel}
              data-active={selectedServiceIndex === index}
            >
              <div className={styles.servicePanelIcon} aria-hidden>
                {service.icon}
              </div>
              <Heading className={styles.servicePanelTitle} level={4} as="h3">
                {service.title}
              </Heading>
              <Text as="p" className={styles.servicePanelDescription}>
                {getConciseDescription(service.description, 2)}
              </Text>
              <Button className={styles.servicePanelCta} href={service.link}>
                {service.cta}
              </Button>
            </article>
          ))}

          <div className={styles.servicesMobile}>
            {services.map((service, index) => {
              const isOpen = activeServiceIndex === index;
              return (
                <article className={styles.accordionItem} key={service.title} data-open={isOpen}>
                  <h3 className={styles.accordionHeading}>
                    <button
                      type="button"
                      className={styles.accordionTrigger}
                      aria-expanded={isOpen}
                      aria-controls={`service-mobile-panel-${index}`}
                      id={`service-mobile-trigger-${index}`}
                      onClick={() =>
                        setActiveServiceIndex(prev => (prev === index ? null : index))
                      }
                    >
                      <span className={styles.serviceTabIcon} aria-hidden>
                        {service.icon}
                      </span>
                      <span>{service.title}</span>
                    </button>
                  </h3>
                  <div
                    id={`service-mobile-panel-${index}`}
                    role="region"
                    aria-labelledby={`service-mobile-trigger-${index}`}
                    className={styles.accordionPanel}
                    data-open={isOpen}
                  >
                    <Text as="p" className={styles.servicePanelDescription}>
                      {getConciseDescription(service.description, 2)}
                    </Text>
                    <Button className={styles.servicePanelCta} href={service.link}>
                      {service.cta}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className={styles.timelineSection}
        ref={timelineRef}
        aria-labelledby="career-highlights-title"
        data-visible={visibleSections.includes(timelineRef.current)}
        data-reduced-motion={timelineReducedMotion}
        style={{
          '--scroll-progress': timelineProgress,
          '--active-index': activeTimelineIndex,
        }}
      >
        <div className={styles.timelineInner}>
          <Heading className={styles.timelineTitle} level={3} as="h2" id="career-highlights-title">
            Career Highlights &amp; Trusted Partnerships
          </Heading>
          <Text as="p" className={styles.timelineSubtitle}>
            6+ years delivering clinical excellence and content strategy across global healthcare
            markets
          </Text>

          <div
            className={styles.timelineTrackWrap}
            tabIndex={0}
            onKeyDown={onTimelineKeyDown}
            aria-label="Career timeline, use arrow keys to navigate entries"
          >
            <div className={styles.timelineSpine} aria-hidden>
              <span className={styles.timelineSpineLine} />
              <span
                className={styles.timelineSpineTrail}
                style={{ transform: `scaleY(${timelineProgress})` }}
              />
              <span className={styles.timelineSpineDot} />
            </div>

            <ol className={styles.timelineList}>
              {timelineEntries.map((entry, index) => {
                const preview = entry.description.split('. ')[0];
                const hasExpandableContent =
                  entry.description.replace(/\s+/g, ' ').trim().length >
                  `${preview}.`.replace(/\s+/g, ' ').trim().length + 8;
                const offset = timelineCardOffsets[index] ?? 1;
                const hasTimelineEngaged =
                  isTimelineInView && timelineProgress > 0.08 && timelineProgress < 0.98;
                const state =
                  hasTimelineEngaged && index === activeTimelineIndex ? 'active' : 'idle';
                return (
                  <li
                    className={styles.timelineItem}
                    key={`${entry.company}-${entry.role}`}
                    data-state={state}
                    data-side={index % 2 === 0 ? 'left' : 'right'}
                    style={{
                      '--card-offset': offset,
                      '--card-distance': Math.abs(offset),
                      '--timeline-index': index,
                    }}
                  >
                    <article
                      ref={node => setTimelineCardRef(index, node)}
                      className={styles.timelineCard}
                      data-timeline-card="true"
                      style={{ '--timelineIndex': index }}
                    >
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineIcon} aria-hidden>
                          {entry.icon}
                        </span>
                        {entry.period ? (
                          <span className={styles.timelinePeriod}>{entry.period}</span>
                        ) : null}
                        {entry.badge ? <span className={styles.timelineBadge}>{entry.badge}</span> : null}
                      </div>

                      <Heading className={styles.timelineRole} level={5} as="h3">
                        {entry.role} | {entry.company}
                      </Heading>

                      {hasExpandableContent ? (
                        <>
                          <details className={styles.timelineDetails}>
                            <summary className={styles.timelineSummary}>Read More</summary>
                            <Text as="p" className={styles.timelineDescription}>
                              {entry.description}
                            </Text>
                          </details>

                          <Text as="p" className={styles.timelinePreview}>
                            {preview}.
                          </Text>
                        </>
                      ) : (
                        <Text as="p" className={styles.timelineDescription}>
                          {entry.description}
                        </Text>
                      )}
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
      <section
        className={styles.segmentSection}
        aria-labelledby="segment-cta-title"
        ref={segmentRef}
        data-visible={visibleSections.includes(segmentRef.current)}
      >
        <div className={styles.segmentInner}>
          <Heading className={styles.segmentTitle} level={3} as="h2" id="segment-cta-title">
            How I Can Help You
          </Heading>
          <Text as="p" className={styles.segmentSubtitle}>
            Tailored content solutions for every type of healthcare organization
          </Text>
          <div className={styles.segmentGrid}>
            {segmentCtas.map(segment => (
              <article className={styles.segmentCard} key={segment.headline}>
                <span className={styles.segmentIcon} aria-hidden>
                  {segment.icon}
                </span>
                <Heading className={styles.segmentHeadline} level={5} as="h3">
                  {segment.headline}
                </Heading>
                <Text as="p" className={styles.segmentBody}>
                  {segment.body}
                </Text>
                <Button className={styles.segmentButton} href={segment.link}>
                  {segment.cta}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className={styles.portfolioSection}
        aria-labelledby="featured-work-title"
        ref={portfolioRef}
        data-visible={visibleSections.includes(portfolioRef.current)}
      >
        <div className={styles.portfolioInner}>
          <Heading className={styles.portfolioTitle} level={3} as="h2" id="featured-work-title">
            Featured Work
          </Heading>
          <Text as="p" className={styles.portfolioSubtitle}>
            SEO-optimized, clinically accurate content across healthcare verticals
          </Text>

          <div className={styles.portfolioFilters} role="tablist" aria-label="Portfolio filters">
            {portfolioFilters.map(filter => (
              <button
                key={filter}
                type="button"
                className={styles.filterButton}
                aria-selected={activePortfolioFilter === filter}
                onClick={() => onFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.portfolioGrid}>
            {visiblePortfolioItems.map(item => (
              <article className={styles.portfolioCard} key={`${item.title}-${item.client}`}>
                <button
                  type="button"
                  className={styles.portfolioImageButton}
                  onClick={() => setSelectedPortfolioItem(item)}
                  aria-label={`Open preview for ${item.title}`}
                >
                  <Image
                    className={styles.portfolioImage}
                    srcSet={item.image}
                    placeholder={profilePlaceholder}
                    alt={`${item.title} work sample for ${item.client}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </button>
                <div className={styles.portfolioBody}>
                  <p className={styles.portfolioCategory}>{item.category}</p>
                  <Heading className={styles.portfolioCardTitle} level={5} as="h3">
                    {item.title}
                  </Heading>
                  <p className={styles.portfolioClient}>{item.client}</p>
                  <Text as="p" className={styles.portfolioDescription}>
                    {item.description}
                  </Text>
                  <p className={styles.portfolioMetric}>{item.metric}</p>
                  <div className={styles.portfolioActions}>
                    <Link className={styles.portfolioCta} href={item.href}>
                      {item.cta}
                    </Link>
                    <button
                      type="button"
                      className={styles.portfolioPreview}
                      onClick={() => setSelectedPortfolioItem(item)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPortfolioItems.length > portfolioVisibleCount ? (
            <Button
              className={styles.portfolioLoadMore}
              onClick={() => setPortfolioVisibleCount(prev => prev + 6)}
              icon="arrowRight"
            >
              Load More
            </Button>
          ) : null}
        </div>
      </section>
      <section
        className={styles.testimonialsSection}
        aria-labelledby="testimonials-title"
        ref={testimonialsRef}
        data-visible={visibleSections.includes(testimonialsRef.current)}
      >
        <div className={styles.testimonialsInner}>
          <Heading className={styles.testimonialsTitle} level={3} as="h2" id="testimonials-title">
            What Clients Say
          </Heading>
          <Text as="p" className={styles.testimonialsSubtitle}>
            Trusted by healthcare brands across 4 continents
          </Text>

          <div className={styles.testimonialCarousel}>
            {testimonials.map((testimonial, index) => (
              <article
                className={styles.testimonialCard}
                key={`${testimonial.role}-${index}`}
                data-active={activeTestimonialIndex === index}
              >
                <p className={styles.testimonialStars} aria-label="5 star rating">
                  ★★★★★
                </p>
                <Text as="p" className={styles.testimonialQuote}>
                  {testimonial.quote}
                </Text>
                <p className={styles.testimonialAuthor}>
                  - {testimonial.name}, {testimonial.role}, {testimonial.company}
                </p>
              </article>
            ))}
          </div>

          <div className={styles.testimonialDots} aria-label="Testimonial navigation">
            {testimonials.map((item, index) => (
              <button
                key={`dot-${item.role}-${index}`}
                type="button"
                className={styles.testimonialDot}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeTestimonialIndex === index}
                onClick={() => setActiveTestimonialIndex(index)}
              />
            ))}
          </div>

          <Link
            className={styles.reviewsCta}
            href="https://www.linkedin.com/in/dr-saloni-kabra-b79311170/details/recommendations/"
          >
            See More Reviews
          </Link>

          <div className={styles.statsGrid}>
            {trustStats.map(stat => (
              <article className={styles.statCard} key={stat.label}>
                <span className={styles.statIcon} aria-hidden>
                  {stat.icon}
                </span>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        ref={contactRef}
        className={styles.contactSection}
        aria-labelledby="contact-title"
        data-visible={visibleSections.includes(contactRef.current)}
      >
        <div className={styles.contactInner}>
          <div className={styles.contactIntro}>
            <Heading className={styles.contactTitle} level={3} as="h2" id="contact-title">
              Let&#39;s Work Together
            </Heading>
            <Text as="p" className={styles.contactSubtitle}>
              Available for remote, freelance, and contract medical writing projects
            </Text>
          </div>
          <div className={styles.contactLayout}>
            <form className={styles.contactForm} onSubmit={handleContactSubmit} noValidate>
              <label className={styles.formField}>
                <span>Name *</span>
                <input
                  className={styles.formInput}
                  name="name"
                  value={formValues.name}
                  onChange={updateField}
                  aria-invalid={Boolean(formErrors.name)}
                  required
                />
                {formErrors.name ? <span className={styles.fieldError}>{formErrors.name}</span> : null}
              </label>

              <label className={styles.formField}>
                <span>Email *</span>
                <input
                  className={styles.formInput}
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={updateField}
                  aria-invalid={Boolean(formErrors.email)}
                  required
                />
                {formErrors.email ? <span className={styles.fieldError}>{formErrors.email}</span> : null}
              </label>

              <label className={styles.formField}>
                <span>Company/Organization</span>
                <input
                  className={styles.formInput}
                  name="company"
                  value={formValues.company}
                  onChange={updateField}
                />
              </label>

              <label className={styles.formField}>
                <span>Project Type</span>
                <select className={styles.formInput} name="projectType" value={formValues.projectType} onChange={updateField}>
                  <option>Medical Blog Writing</option>
                  <option>Landing Pages &amp; Web Copy</option>
                  <option>Service/Procedure Pages</option>
                  <option>Pharma/Product Content</option>
                  <option>Content Refresh/SEO Optimization</option>
                  <option>Medical Review/Editing</option>
                  <option>Ghost Writing</option>
                  <option>Academic Writing</option>
                  <option>Other</option>
                </select>
              </label>

              <label className={styles.formField}>
                <span>Message *</span>
                <textarea
                  className={styles.formInput}
                  name="message"
                  rows={5}
                  value={formValues.message}
                  onChange={updateField}
                  aria-invalid={Boolean(formErrors.message)}
                  required
                />
                {formErrors.message ? (
                  <span className={styles.fieldError}>{formErrors.message}</span>
                ) : null}
              </label>

              <label className={styles.formField}>
                <span>Budget Range</span>
                <select className={styles.formInput} name="budget" value={formValues.budget} onChange={updateField}>
                  <option value="">Select budget range</option>
                  <option>&lt; $500</option>
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $5,000</option>
                  <option>$5,000+</option>
                  <option>Long-term Retainer</option>
                </select>
              </label>

              {formErrors.form ? <p className={styles.formError}>{formErrors.form}</p> : null}
              {formSuccess ? (
                <p className={styles.formSuccess}>
                  Thanks for reaching out. Your message was sent successfully.
                </p>
              ) : null}

              <Button className={styles.formSubmit} icon="send" type="submit" loading={sending} loadingText="Sending...">
                Send Message
              </Button>
            </form>

            <aside className={styles.contactInfo} aria-label="Contact information">
              <div className={styles.infoCards}>
                {contactInfoItems.map(item => (
                  <div className={styles.infoCard} key={item.label}>
                    <Icon icon={item.icon} className={styles.infoIcon} />
                    <div>
                      <p className={styles.infoLabel}>{item.label}</p>
                      <Link className={styles.infoValue} href={item.href}>
                        {item.value}
                      </Link>
                    </div>
                  </div>
                ))}
                <div className={styles.infoCard}>
                  <Icon icon="link" className={styles.infoIcon} />
                  <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>
                      Indore, India (Available for Remote Work Globally)
                    </p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <Icon icon="link" className={styles.infoIcon} />
                  <div>
                    <p className={styles.infoLabel}>Timezone</p>
                    <p className={styles.infoValue}>IST (flexible for US/EU meetings)</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <footer className={styles.siteFooter}>
        <div className={styles.siteFooterInner}>
          <div className={styles.footerBlock}>
            <p className={styles.footerBrand}>Dr. Saloni Kabra</p>
            <p className={styles.footerTagline}>
              Senior Clinical Consultant · Medical Writer · SEO Health Content Strategist
            </p>
          </div>

          <nav className={styles.footerBlock} aria-label="Quick links">
            <p className={styles.footerHeading}>Quick Links</p>
            <div className={styles.footerLinks}>
              {quickLinks.map(link => (
                <Link className={styles.footerLink} key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className={styles.footerBlock}>
            <p className={styles.footerHeading}>Connect</p>
            <div className={styles.footerLinks}>
              <Link className={styles.footerLink} href="https://www.linkedin.com/in/dr-saloni-kabra-b79311170">
                LinkedIn
              </Link>
              <Link className={styles.footerLink} href="mailto:salonikabra1100@gmail.com">
                Email
              </Link>
              <Link className={styles.footerLink} href="https://medium.com/@saloni_kabra">
                Medium
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2026 Dr. Saloni Kabra. Crafted with care for healthcare brands worldwide.
        </div>
      </footer>
      <a className={styles.letsTalkButton} href="#contact" data-visible={showTalkButton}>
        Let&#39;s Talk
      </a>
      {selectedPortfolioItem ? (
        <div className={styles.portfolioModalBackdrop} role="dialog" aria-modal="true">
          <div className={styles.portfolioModal}>
            <button
              type="button"
              className={styles.portfolioModalClose}
              onClick={() => setSelectedPortfolioItem(null)}
              aria-label="Close preview"
            >
              <Icon icon="close" />
            </button>
            <Image
              className={styles.portfolioModalImage}
              srcSet={selectedPortfolioItem.image}
              placeholder={profilePlaceholder}
              alt={`${selectedPortfolioItem.title} detailed preview`}
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <p className={styles.portfolioCategory}>{selectedPortfolioItem.category}</p>
            <Heading className={styles.portfolioModalTitle} level={4} as="h3">
              {selectedPortfolioItem.title}
            </Heading>
            <p className={styles.portfolioClient}>{selectedPortfolioItem.client}</p>
            <Text as="p" className={styles.portfolioDescription}>
              {selectedPortfolioItem.description}
            </Text>
            <p className={styles.portfolioMetric}>{selectedPortfolioItem.metric}</p>
            <Link className={styles.portfolioCta} href={selectedPortfolioItem.href}>
              {selectedPortfolioItem.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
