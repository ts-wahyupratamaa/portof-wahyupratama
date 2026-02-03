// Profile Data - Wahyu Pratama

import { link } from 'fs';

export const profile = {
  name: 'Wahyu Pratama',
  title: 'Software Engineer',
  headline:
    'Software Engineer Lead @satutitik.engineer | Ex- MSIB Mandiri | Ex-DBS Foundation | AI Automation | Power Apps & SharePoint Developer',
  bio: 'Software Engineer focused on developing interactive web applications with React & NextJs, experienced in SDLC processes and software testing through Unit Testing, Waterfall, and V-Model.',
  location: 'Indonesia',
  followers: 3573,
  connections: '500+',
  available: true,
  social: {
    instagram: '@alvprma.2c',
    github: '@whatyuupratama',
    medium: '@wahyupratama_',
    linkedin: 'wahyupratamaa',
  },
};

export const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Joki Proyek',
    type: 'Paruh Waktu',
    period: 'Apr 2025 - Saat ini',
    duration: '11 bln',
    location: 'Jarak jauh',
    description:
      'Handled the development of Machine Learning solutions and web/applications, including data preprocessing, model training, and deployment into web-based systems. Experienced in delivering end-to-end projects remotely based on client requirements.',
    logo: '💻',
  },
  {
    id: 2,
    role: 'Lead Software Engineer',
    company: 'Satutitik Engineer',
    type: 'Paruh Waktu',
    period: 'Jun 2025 - Saat ini',
    duration: '9 bln',
    location: 'Malang · Di lokasi',
    description:
      'Leading technology solutions team at satutitik.engineer. Providing IT projects, coding services, data analysis, automation, and technical problem solving.',
    skills: ['Deep Learning', 'N8n', 'Web Development', 'Mobile Applications'],
    logo: '🚀',
    website: 'https://satutitik.engineer/',
  },
  {
    id: 3,
    role: 'Coding Camp Machine Learning Intern',
    company: 'DBS Bank',
    type: 'Magang',
    period: 'Feb 2025 - Jul 2025',
    duration: '6 bln',
    location: 'Jakarta Pusat · Jarak jauh',
    description:
      'Selected as 1 of 1,365 participants from over 63,000 applicants. Completed 900+ hours of learning data science, ML, & full-stack. Built dental issue detection solution (GigiSehat) using Random Forest, Flask, and Next.js.',
    skills: ['Machine Learning', 'Leadership'],
    logo: '🏦',
  },
  {
    id: 4,
    role: 'Project Support Intern (QA & Requirement)',
    company: 'VENTURO',
    type: 'Magang',
    period: 'Feb 2025 - Jul 2025',
    duration: '6 bln',
    location: 'Malang · Jarak jauh',
    description:
      "Collaborated with cross-functional teams on product development. Worked directly with clients during unit testing, securing two new clients. Contributed to external testing of Bio Farma's system.",
    skills: ['Design Thinking', 'UI/UX', 'Scrum', 'Figma', 'Testing'],
    logo: '🔧',
  },
  {
    id: 5,
    role: 'Fullstack Developer Intern',
    company: 'PT.Winnicode Garuda Indonesia',
    type: 'Magang',
    period: 'Feb 2025 - Jun 2025',
    duration: '5 bln',
    location: 'Bandung · Jarak jauh',
    description:
      'Developed a custom job portal and company news website from scratch for PT. Winnicode. Designed and built a responsive UI using Next.js, increasing client interest and user engagement.',
    skills: ['TypeScript', 'Next.js', 'Strapi'],
    logo: '✈️',
  },
  {
    id: 6,
    role: 'SIB Fullstack Engineer Intern',
    company: 'LX International',
    type: 'Magang',
    period: 'Jul 2024 - Jan 2025',
    duration: '7 bln',
    location: 'Jakarta Selatan · Jarak jauh',
    description:
      'Selected as 1 of 50 from 6,400+ applicants. Built comprehensive capstone project (EduBooks), contributing 90% of the work. Achieved perfect score (100) in Frontend, Backend, Troubleshooting.',
    skills: ['Flask', 'AJAX', 'Full Stack'],
    logo: '🌏',
  },
  {
    id: 7,
    role: 'Frontend Developer Intern',
    company: 'Institut Teknologi & Bisnis ASIA',
    type: 'Magang',
    period: 'Jul 2024 - Nov 2024',
    duration: '5 bln',
    location: 'Malang · Di lokasi',
    description:
      'Designed UI/UX for internal campus web applications. Collaborated to develop a counseling application used by over 1,000 students with zero downtime.',
    skills: ['Next.js', 'MySQL', 'Node.js'],
    logo: '🎓',
  },
];

export const projects = [
  {
    id: 1,
    title: 'GigiSehat',
    company: 'DBS Bank',
    period: 'Apr 2025 - Sekarang',
    description:
      'Dental health detection app for children aged 3-6 years. Part of Coding Camp 2025 by DBS Foundation and Dicoding. Helps parents identify early signs of cavities and access dental care information.',
    skills: ['Leadership', 'Project Management', 'Machine Learning', 'Next.js'],
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    contributors: 4,
    video: '/gigisehat.mp4',
    link: 'https://caps-gigi-lmdw.vercel.app/',
  },
  {
    id: 2,
    title: 'Satutitik.engineer',
    company: 'Personal Project',
    period: 'Jun 2025 - Sekarang',
    description:
      'Technology services platform offering IT projects, coding, data analysis, automation, and technical problem solving.',
    skills: ['N8n', 'Automation', 'Web Development'],
    gradient: 'from-orange-400 via-rose-500 to-purple-600',
    contributors: 1,
    video: '/satutitik.mp4',
    link: 'https://satutitik.engineer/',
  },
  {
    id: 3,
    title: 'PomoStudio',
    company: 'Personal Project',
    period: '2025',
    description:
      'Self-taught iOS development project - built a Pomodoro timer and productivity app with Swift, implementing Atomic Design pattern.',
    skills: ['NextJs', 'TypeScript', 'TailwindCSS'],
    gradient: 'from-pink-400 via-rose-500 to-red-600',
    contributors: 1,
    video: '/pomo.mp4',
    link: 'https://pomostudio.vercel.app',
  },
  {
    id: 4,
    title: 'StrukPintar',
    company: 'Personal Project',
    period: '2025',
    description:
      'AI Agent automation system for digital receipt recording using n8n, Docker, and ngrok. Published research with 100% accuracy results.',
    skills: ['N8n', 'Docker', 'AI'],
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    contributors: 1,
    video: '/strukpintar.mp4',
    link: 'https://www.linkedin.com/posts/wahyupratamaa_n8n-automation-learningbydoing-activity-7348033147399262208-1hUZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWOVD0B0O_Az22TYhNGVdPWckzTOLJqyPs',
  },
  {
    id: 5,
    title: 'Fuzzy Saw',
    company: 'Fuzzy Saw',
    period: 'Nov 2024 - Des 2024',
    description:
      'Creative product showcase with focused visuals and crisp motion.',
    skills: ['React', 'UI/UX', 'Frontend'],
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    contributors: 1,
    video: '/fuzzysaw.mp4',
    link: 'https://fsaw-greenflag.vercel.app/',
  },
];

export const education = [
  {
    id: 1,
    school: 'Harisenin.com',
    degree: 'Software Engineer Student',
    period: 'Sep 2025',
    logo: '📚',
  },
  {
    id: 2,
    school: 'Universitas Negeri Malang',
    degree: 'S.Kom, Informatika',
    period: 'Jan 2024 - Jul 2024',
    activities: 'Publikasi Hak Kekayaan Intelektual Product Digital 2024',
    logo: '🎓',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Machine Learning Terapan',
    issuer: 'Dicoding Indonesia',
    issued: 'Jun 2025',
    expires: 'Jun 2028',
    credentialId: 'L4PQ2QN22ZO1',
  },
  {
    id: 2,
    title: 'Certified Developer',
    issuer: 'Alibaba Cloud',
    issued: 'Sep 2024',
    expires: 'Agu 2026',
    credentialId: 'ACCD0119700100013153',
  },
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Node.js',
  'Next.js',
  'React',
  'Express.js',
  'Flask',
  'Tailwind CSS',
  'Astro',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Supabase',
  'N8n Automation',
  'Power Apps',
  'Power Automate',
  'SharePoint',
  'Dataverse',
  'Docker',
  'Git',
  'GitHub',
  'Bruno',
  'Figma',
  'TensorFlow',
  'Machine Learning',
  'Deep Learning',
  'Data Analysis',
  'UI/UX',
  'Problem Solving',
  'SDLC',
  'V-Model',
  'Time Management',
  'Analytical Thinking',
  'Teamwork',
];

export const awards = [
  {
    id: 1,
    title:
      'Inovasi Agen AI Dalam Sistem Pencatatan Struk Digital Otomatis Berbasis n8n',
    organization: 'Fakultas Ilmu Komputer Universitas Muhammadiyah Riau',
    year: '6 Jan 2026',
    description:
      'Research paper on automated transaction recording using workflow automation and multimodal AI in a self-hosted environment, achieving 100% accuracy.',
    link: 'https://ejurnal.umri.ac.id/index.php/JIK/article/view/10366',
  },
  {
    id: 2,
    title: 'Cat Breed Classification Web App Utilizing Teachable Machine',
    organization:
      'Proceeding of the International Conference on Business, Innovation, Technology, and Science (ICoBITS)',
    year: '13 Jan 2026',
    description:
      'Web-based cat breed recognition using Teachable Machine with ReactJS and Flask, achieving strong accuracy across 15 breeds.',
    link: 'https://icobits.ubhinus.ac.id/index.php/ICoBITS/article/view/56',
  },
];

export const languages = [
  { name: 'Bahasa Indonesia', level: 'Fasih/Native' },
  { name: 'Bahasa Inggris', level: 'Dasar' },
];
