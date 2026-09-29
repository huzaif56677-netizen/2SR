export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
]

export const contactInfo = {
  phone: "+91 89048 72159",
  phoneRaw: "+918904872159",
  emailHr: "hr@2srinnovations.com",
  emailGeneral: "hr@2srinnovations.com",
  website: "www.2srinnovations.com",
  hours: "Monday – Saturday, 9:00 AM – 6:30 PM IST",
  address: "RT Nagar Bangalore",
}

// Client / partner items shown in the marquee.
export type ClientItem = {
  name: string
  logo: string
  displayName?: string
}

export const clients: ClientItem[] = [
  {
    name: "Aditya Birla",
    logo: "/images/clients/aditya-birla.png",
  },
  {
    name: "ICICI Lombard",
    logo: "/images/clients/icici-lombard.png",
  },
  {
    name: "Policybazaar",
    logo: "/images/clients/policybazaar.webp",
  },
  {
    name: "Cholamandalam Securities",
    logo: "/images/clients/cholamandalam.png",
  },
  {
    name: "Motilal Oswal",
    logo: "/images/clients/motilal-oswal.png",
  },
  {
    name: "Kotak Securities",
    logo: "/images/clients/kotak.webp",
  },
]

export type Service = {
  id: string
  index: string
  pillar: string
  kicker: string
  title: string
  lead: string
  body: string
  capabilities: string[]
  subServices?: { title: string; desc: string }[]
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: "recruitment",
    index: "01",
    pillar: "People",
    kicker: "End-to-End Recruitment",
    title: "Find the right people. Build the right team.",
    lead: "A recruitment partner across the full hiring journey — from understanding the role to placing the person.",
    body: "We build and maintain a pool of screened, ready-to-work candidates across Engineering, Technology, BFSI and specialised domains, matching them to roles that fit your strategic objectives.",
    capabilities: [
      "Talent sourcing & market mapping",
      "Rigorous candidate screening",
      "Shortlisting & talent pipelining",
      "Interview coordination & candidate advisory",
      "Specialised & niche executive hiring",
      "Bulk & project-based workforce drives",
      "Post-placement support & retention checks",
    ],
    subServices: [
      {
        title: "Permanent Hiring",
        desc: "Our dedicated talent acquisition team manages the entire recruitment cycle to find and place long-term candidates aligned with company culture and strategic goals.",
      },
      {
        title: "Full & Part-Time Staffing",
        desc: "Flexible staffing models providing pre-screened professionals to meet shifting operational demands without administrative burden.",
      },
      {
        title: "Specialized Niche Hiring",
        desc: "Deep domain knowledge and executive search capability across niche engineering, data science, AI, finance, and specialized technology roles.",
      },
      {
        title: "Bulk & Project-Based Hiring",
        desc: "Equipped to handle large-scale recruitment drives, efficiently staffing entire project teams, facilities, or business units with vetted talent.",
      },
    ],
    image: "/images/recruitment.png",
    imageAlt: "Two professionals in a focused hiring conversation in a modern office",
  },
  {
    id: "gifting",
    index: "02",
    pillar: "Experiences",
    kicker: "Corporate Gifting",
    title: "Make every relationship memorable.",
    lead: "Considered gifting that carries your brand with the right weight — for the people who matter to your business.",
    body: "From onboarding kits to festival hampers and executive gifting, we handle sourcing, customisation and presentation so each gift feels intentional, premium, and reflective of your standard.",
    capabilities: [
      "Employee & onboarding welcome kits",
      "Client appreciation & partnership gifting",
      "Festival & seasonal celebration hampers",
      "Corporate event & conference kits",
      "Customised branded luxury merchandise",
      "C-Suite & VIP executive gifting",
      "End-to-end multi-location dispatch & logistics",
    ],
    subServices: [
      {
        title: "Employee Onboarding Kits",
        desc: "Thoughtful welcome packages designed to instill immediate brand pride and engagement on day one for new hires.",
      },
      {
        title: "Client & Partner Appreciation",
        desc: "Bespoke gift selections that express genuine gratitude and reinforce strategic business partnerships.",
      },
      {
        title: "Seasonal & Festive Collections",
        desc: "Curated premium artisanal hampers crafted for major festivals and corporate annual celebrations.",
      },
      {
        title: "Custom Branded Merchandise",
        desc: "High-finish apparel, desk accessories, and tech essentials customized with subtle, high-grade corporate branding.",
      },
    ],
    image: "/images/gifting.png",
    imageAlt: "Elegant premium corporate gift boxes with kraft packaging and ribbon",
  },
  {
    id: "hvac-mep",
    index: "03",
    pillar: "Infrastructure",
    kicker: "HVAC & MEP Services",
    title: "Engineering comfort. Built for performance.",
    lead: "Mechanical, electrical and plumbing work delivered with the discipline of a project, not a quick fix.",
    body: "We handle turnkey installation, preventative maintenance and project execution across commercial and residential environments, backed by ongoing technical support that stays available long after handover.",
    capabilities: [
      "Commercial HVAC system design & installation",
      "Residential climate control & ventilation",
      "Integrated MEP turnkey engineering",
      "System testing & air balancing",
      "Preventative maintenance contracts (AMC)",
      "Facility retrofitting & energy optimization",
      "24/7 emergency technical diagnostic support",
    ],
    subServices: [
      {
        title: "Commercial & Industrial HVAC",
        desc: "Chilled water systems, VRF/VRV units, and air handling systems engineered for high-density corporate and commercial facilities.",
      },
      {
        title: "MEP Turnkey Execution",
        desc: "Unified mechanical, electrical, and plumbing engineering ensuring compliant, robust, and cost-effective building infrastructure.",
      },
      {
        title: "Preventative Maintenance & AMC",
        desc: "Structured servicing schedules to minimize downtime, reduce operational energy costs, and extend plant lifecycle.",
      },
      {
        title: "Retrofitting & Upgrades",
        desc: "Upgrading legacy systems to modern energy-efficient standards with minimal operational disruption.",
      },
    ],
    image: "/images/hvac.png",
    imageAlt: "Modern commercial rooftop HVAC units and ductwork",
  },
]

export const approach = [
  {
    step: "01",
    title: "Understand",
    lead: "Needs assessment & scope alignment",
    text: "We start with the actual requirement — the specific role competencies, the brand occasion, or the physical architectural space — before proposing any solution.",
  },
  {
    step: "02",
    title: "Plan",
    lead: "Strategic blueprint & resource allocation",
    text: "We shape a practical approach with unambiguous scope, realistic timelines, transparent budgets, and designated personnel who own the deliverables.",
  },
  {
    step: "03",
    title: "Execute",
    lead: "Disciplined delivery & steady communication",
    text: "We execute with meticulous attention to detail, maintaining transparent reporting, regular checkpoints, and structured quality benchmarks throughout.",
  },
  {
    step: "04",
    title: "Deliver",
    lead: "Standard verification & seamless handover",
    text: "We complete the requirement to the exact standards agreed upon, conducting thorough testing, verification audits, and comprehensive handover documentation.",
  },
  {
    step: "05",
    title: "Support",
    lead: "Long-term partnership & continuity",
    text: "We remain actively available beyond delivery. For 2SR Innovations, enduring corporate relationships are the true measure of success.",
  },
]

export const industrySectors = [
  {
    category: "Financial Markets",
    tagline: "High-compliance, talent-dense environments",
    description: "Specialized recruitment and workspace infrastructure for institutions where precision and confidentiality are paramount.",
    subsectors: ["Investment Banking", "Broking & Securities", "Capital Markets", "BFSI"],
    image: "/images/work-corporate.png",
  },
  {
    category: "Technology & Industry",
    tagline: "Scalable talent and advanced facilities",
    description: "Empowering fast-growing tech ecosystems and manufacturing enterprises with specialized technical teams and reliable MEP infrastructure.",
    subsectors: ["Information Technology", "Data Science & AI", "Manufacturing", "Robotics & Automation"],
    image: "/images/work-engineering.png",
  },
  {
    category: "Infrastructure & Real Estate",
    tagline: "Turnkey engineering and MEP solutions",
    description: "End-to-end mechanical, electrical, and climate control engineering for commercial towers, residential communities, and modern corporate parks.",
    subsectors: ["Commercial Real Estate", "Building & Infrastructure", "Residential Developments", "IT Infrastructure"],
    image: "/images/hvac.png",
  },
  {
    category: "Corporate & Professional Services",
    tagline: "Strategic hiring, premium gifting, and workspace comfort",
    description: "Holistic support for consulting, legal, and multi-tenant headquarters looking for vetted leadership talent and bespoke client gifting.",
    subsectors: ["Management Consulting", "Legal & Advisory", "Enterprise Headquarters", "Executive Suites"],
    image: "/images/about.png",
  },
  {
    category: "Hospitality & Retail",
    tagline: "Guest experience and facility excellence",
    description: "Curated corporate gifting, seasonal retail campaigns, climate optimization, and hospitality staffing for customer-facing brands.",
    subsectors: ["Luxury Hotels & Resorts", "Retail Chains", "Event Venues", "Fine Dining"],
    image: "/images/work-hospitality.png",
  },
  {
    category: "Healthcare & Life Sciences",
    tagline: "Critical staffing and regulated environments",
    description: "Reliable HVAC cleanroom air circulation systems and compliant staffing for healthcare institutions and diagnostics labs.",
    subsectors: ["Hospitals & Clinics", "Diagnostics & Labs", "Medical Devices", "Pharmaceutical Facilities"],
    image: "/images/analysis.png",
  },
]

export const industries = [
  { name: "Corporate & Offices", image: "/images/work-corporate.png", desc: "Enterprise office campuses, talent scaling, and climate control." },
  { name: "Retail & Commercial", image: "/images/gifting.png", desc: "High-traffic commercial spaces and custom client gifting programs." },
  { name: "Hospitality", image: "/images/work-hospitality.png", desc: "Luxury guest experiences, staff sourcing, and MEP facility support." },
  { name: "Residential", image: "/images/hvac.png", desc: "Premium residential ventilation, HVAC installation, and maintenance." },
  { name: "Engineering & Infrastructure", image: "/images/work-engineering.png", desc: "Heavy engineering recruitment, electrical works, and mechanical projects." },
  { name: "Professional Services", image: "/images/about.png", desc: "Executive search, strategic talent mapping, and corporate celebration gifts." },
]

export const differentiators = [
  {
    number: "01",
    title: "Deep Understanding",
    subtitle: "No generic templates",
    text: "We start with the actual requirement — the nuance of the role, the purpose of the occasion, or the architectural demands of the space — rather than pushing pre-packaged templates.",
  },
  {
    number: "02",
    title: "Agile Responsiveness",
    subtitle: "Clear & direct communication",
    text: "You work directly with knowledgeable partners who communicate clearly, update consistently, and resolve bottlenecks without bureaucratic delays.",
  },
  {
    number: "03",
    title: "Disciplined Professionalism",
    subtitle: "Execution to exact standards",
    text: "A structured methodology from initial brief through to final handover. We commit to defined timelines, transparent scope, and uncompromising quality.",
  },
  {
    number: "04",
    title: "Cross-Functional Versatility",
    subtitle: "Three core strengths, one partner",
    text: "We seamlessly connect people (recruitment), experiences (corporate gifting), and infrastructure (HVAC/MEP) under one accountable relationship.",
  },
  {
    number: "05",
    title: "Long-Term Thinking",
    subtitle: "Relationships over transactions",
    text: "We measure our success by ongoing client retention and trust. We remain actively invested in your growth long after a project is completed.",
  },
]

export const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    text: "2SR Innovations is established in 2010, laying the foundation for disciplined corporate partnership and enterprise service delivery.",
  },
  {
    year: "2015",
    title: "Specialized Recruitment & Talent Consultation",
    text: "Scaled dedicated executive recruitment and strategic workforce consultation, partnering with leading institutions across Engineering, BFSI, and Technology.",
  },
  {
    year: "2019",
    title: "Multi-Vertical Gifting & Corporate Expansion",
    text: "Formalized comprehensive corporate relationship gifting and bespoke experiential procurement, scaling operations across key regional commercial hubs.",
  },
  {
    year: "2024",
    title: "Integrated Facility Infrastructure & National Scale",
    text: "Integrated full-scale commercial HVAC & MEP engineering capabilities, delivering unified people, experiences, and infrastructure solutions across India.",
  },
]

export const visionMission = {
  vision: "To be the global leader in talent discovery and corporate enablement, empowering every professional to land their dream role while helping businesses achieve peak performance through world-class human capital and infrastructure.",
  mission: "To become a leading consultancy that inspires growth, fosters innovation, and delivers measurable value to every client — empowering organizations to evolve, adapt, and thrive in an ever-changing corporate landscape.",
  goals: "To empower businesses through innovative thinking, practical execution, and transformative solutions — turning complex requirements into sustainable success.",
}

export const faqs = [
  {
    q: "How does 2SR Innovations manage three distinct capabilities?",
    a: "Each vertical (Recruitment, Corporate Gifting, and HVAC & MEP) is led by seasoned domain specialists, backed by unified project management, shared governance, and a single accountable point of contact for our corporate clients.",
  },
  {
    q: "What is your typical turnaround time for specialized recruitment?",
    a: "Depending on role seniority and niche criteria, initial candidate shortlists with verified credentials are typically submitted within 4 to 7 business days from brief sign-off.",
  },
  {
    q: "Can you accommodate custom branded corporate gifting for nationwide delivery?",
    a: "Yes. We handle end-to-end bespoke packaging, customized merchandise branding, quality inspection, and coordinated multi-city logistics across India.",
  },
  {
    q: "Do you offer ongoing maintenance for commercial HVAC and MEP projects?",
    a: "Yes. In addition to turnkey installation and project execution, we provide Annual Maintenance Contracts (AMC) with guaranteed SLA response times and preventive maintenance schedules.",
  },
]
