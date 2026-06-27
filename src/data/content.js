/* ============================================
   THE ADITYA TIMES — Portfolio Content Data
   All text content centralized for easy editing
   ============================================ */

export const PERSONAL = {
  name: 'Aditya Mohod',
  title: 'Full-Stack Developer & Engineering Student',
  location: 'India',
  email: 'adityamohod754@gmail.com',
  github: 'https://github.com/mohodaditya',
  linkedin: 'https://linkedin.com/in/adityamohod',
  resume: 'Aditya_Mohod_Resume.pdf',
};

export const COVER_STORIES = {
  mainHeadline: 'Engineering Student Builds Future Through Technology',
  mainByline: 'By Aditya Mohod • Published Today',
  mainArticle: `In an era defined by rapid technological advancement, the role of the engineering student has evolved from passive learner to active builder. The traditional boundaries between academia and industry are blurring, creating a landscape where innovation is driven not just by established tech giants, but by individuals equipped with laptops and vision.

The journey of mastering modern development stacks requires more than just memorizing syntax; it demands a deep understanding of systems architecture, user experience, and the intricate dance between frontend aesthetics and backend robustness.

Recent shifts in the technological landscape have democratized access to powerful tools. Open-source frameworks, cloud computing platforms, and collaborative environments have lowered the barrier to entry, allowing students to deploy scalable applications that rival professional products.`,
  topStories: [
    {
      title: 'Hackathon Success Sparks New Journey',
      text: 'A team victory at a regional coding competition has opened new doors for aspiring developers, showcasing the power of collaborative problem solving under pressure.',
      tag: 'Technology',
    },
    {
      title: 'The Evolution of Frontend, A Student\'s Perspective',
      text: 'From simple HTML to complex React ecosystems, a look at how the landscape of web development is shifting and what it means for the next generation of engineers.',
      tag: 'Opinion',
    },
  ],
  latestUpdates: [
    { time: '10:42 AM', title: 'New Framework Releases', subtitle: 'Impact on UI Design' },
    { time: 'Yesterday', title: 'Understanding CSS Grid', subtitle: 'Flexbox in 2024' },
  ],
  advertisement: '"Building the future, one line of code at a time."',
};

export const EDUCATION = {
  headline: 'Academic Foundation Forges Technical Excellence',
  subtitle: 'A comprehensive report on the educational journey that laid the groundwork for a career in technology.',
  university: 'B.Tech in Computer Science & Engineering',
  institution: 'University of Technology',
  period: '2021 — 2025',
  description: 'Pursuing a rigorous curriculum in computer science with specialization in software engineering, data structures, and algorithms. The program emphasizes both theoretical foundations and practical application through industry-relevant projects and research.',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
    'Web Development',
    'Machine Learning Fundamentals',
    'Object-Oriented Programming',
  ],
  achievements: [
    'Consistent top performer in programming coursework',
    'Selected for advanced software engineering track',
    'Published research on modern web architectures',
    'Led technical workshops for junior students',
  ],
};

export const TECH_ARENA = {
  headline: 'TECH ARENA: Inside The Mind Of A Frontend Developer',
  subtitle: 'An exclusive look into the architecture, design decisions, and rigorous execution behind the highly anticipated Tech Arena web application.',
  byline: 'By Special Correspondent • Published October 24, 2024',
  article: `The inception of Tech Arena was not merely a technical endeavor but a profound exercise in structural discipline. In an era dominated by amorphous blobs and floating visual trends, the directive was clear: construct a digital edifice that commands the authority of print while wielding the dynamism of the web.

Every grid line was scrutinized, every typographic pairing debated. The interplay of primary headings anchors the experience in classicism, ensuring that the content—the true protagonist—is delivered with unwavering dignity. It is a stark departure from the rounded, shadow-laden interfaces that define the contemporary digital landscape.

"We treated the browser canvas as a sheet of archival paper," notes the lead engineer. "There is no hiding behind depth or blur, a flat hierarchy exposes every flaw, demanding absolute precision in layout and spacing."`,
  pullQuote: '"Building for the user is building for the future. The architecture must outlast the trend."',
  phases: [
    { title: 'Phase I: Architectural Blueprint', desc: 'Establishing the core React component hierarchy and the strict Tailwind utility-first design system.' },
    { title: 'Phase II: Structural Integration', desc: 'Implementing the rigid multi-column layout grid and establishing typographic rhythm without reliance on flexbox shortcuts.' },
    { title: 'Phase III: Tonal Refinement', desc: 'Applying tonal flat aesthetics, kerning, spacing for the timeless typographic treatments, and alternating of muted and bold sections.' },
  ],
  stats: [
    { label: 'Core Framework', value: 'React 18' },
    { label: 'Styling Engine', value: 'Tailwind CSS' },
    { label: 'Typography Flow', value: 'Google Fonts API' },
    { label: 'Total Components', value: '42 Unique' },
  ],
  challenges: 'Maintaining a pristine column fixture system while ensuring deep screen responsiveness demanded a comprehensive responsive architecture. The team engineered a responsive logic that preserves layout integrity across viewports.',
  results: 'The deployed application achieves a near-perfect Lighthouse score while successfully reflecting its intended "broadsheet" aesthetic in browsers.',
};

export const DESHKAROJGAR = {
  headline: 'DeshKaRojgar: Empowering India\'s Workforce Through Digital Innovation',
  subtitle: 'A special report on the platform that aims to bridge the employment gap in India by connecting skilled workers with opportunities.',
  vision: 'To create an accessible, technology-driven employment platform that empowers every Indian citizen with the tools and opportunities needed to build a sustainable livelihood, regardless of their geographic or socioeconomic background.',
  problem: 'India\'s workforce faces significant challenges: a disconnect between job seekers and employers, limited access to skill development resources in rural areas, language barriers in existing platforms, and lack of digital literacy among the most vulnerable populations.',
  solution: 'DeshKaRojgar addresses these challenges through a multi-faceted approach combining local language support, simplified user interfaces, AI-powered job matching, and partnerships with government skill development programs.',
  features: [
    'Multilingual interface supporting 10+ Indian languages',
    'AI-powered job matching based on skills and location',
    'Integration with government skill development schemes',
    'Offline-first design for areas with limited connectivity',
    'Employer verification and trust score system',
    'Built-in skill assessment and certification tracking',
  ],
  impact: [
    { metric: 'Target Users', value: '10M+' },
    { metric: 'Languages', value: '10+' },
    { metric: 'States Covered', value: '28' },
  ],
};

export const BLOGS = {
  featured: {
    title: 'The Architecture of Modern Web Applications',
    excerpt: 'An in-depth exploration of component-driven architecture, state management patterns, and the principles that separate good applications from great ones. From React hooks to server-side rendering, this piece covers the foundational decisions every frontend developer faces.',
    date: 'October 15, 2024',
    readTime: '8 min read',
    category: 'Engineering',
  },
  recent: [
    {
      title: 'Why TypeScript Changed How I Think About Code',
      date: 'September 28, 2024',
      category: 'Opinion',
      readTime: '5 min read',
    },
    {
      title: 'Building Accessible UIs: A Practical Guide',
      date: 'September 10, 2024',
      category: 'Tutorial',
      readTime: '6 min read',
    },
    {
      title: 'The Case for Utility-First CSS in 2024',
      date: 'August 22, 2024',
      category: 'Engineering',
      readTime: '4 min read',
    },
  ],
  categories: ['Engineering', 'Opinion', 'Tutorial', 'Career', 'Open Source'],
};

export const CONTACT = {
  roles: [
    {
      title: 'Software Engineering Roles',
      desc: 'Seeking opportunities in full-stack development. Proficient in modern web technologies, scalable architectures, and rigorous problem-solving. Available for immediate placement in intellectually demanding environments.',
      ref: 'SE-2024',
    },
    {
      title: 'Freelance Projects',
      desc: 'Accepting commissions for bespoke digital solutions. Specializing in high-performance web applications and UI engineering. Inquire within for rates and availability.',
      ref: 'FP-IND',
    },
    {
      title: 'Internships',
      desc: 'Open to rigorous internship programs offering exposure to advanced engineering practices and distinguished mentorship.',
      ref: 'INT-REQ',
    },
  ],
  formTitle: 'Letters to the Editor',
  formSubtitle: 'Direct your correspondence, inquiries, and formal proposals via the form below. Please ensure clarity of purpose.',
};
