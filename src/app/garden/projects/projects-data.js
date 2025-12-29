// Current work-in-progress project (shown on dashboard)
export const currentProject = {
  title: 'Hakando Digital Garden',
  description: 'Building a world-class personal digital garden with Next.js, featuring a premium UI with glassmorphism, smooth animations, and curated content sections.',
  tags: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
  status: 'In Progress',
  progress: 75, // percentage
  year: '2024',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  startDate: '2023-12-15',
  updates: [
    'Implemented premium gallery with modal view',
    'Created library page with book showcase',
    'Designed projects page with flowing border buttons',
    'Built fragments/notes section with timeline'
  ]
};

// Completed/showcase projects (shown on projects page)
export const projects = [
  {
    title: 'Lumina Interface',
    description: 'A next-generation design system for the future of web applications. Built with a focus on accessibility and motion.',
    tags: ['Design System', 'React', 'Framer Motion'],
    link: 'https://example.com',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    logo: '/logos/lumina.svg', // Placeholder
  },
  {
    title: 'Apex Finance',
    description: 'Real-time high-frequency trading dashboard with sub-millisecond updates and WebGL data visualization.',
    tags: ['Next.js', 'WebGL', 'WebSockets'],
    link: 'https://example.com',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', // Placeholder
  },
  {
    title: 'Nebula AI',
    description: 'Conversational AI interface with generative UI components that adapt to the user\'s context.',
    tags: ['AI', 'Python', 'Tailwind'],
    link: 'https://example.com',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop', // Placeholder
  },
    {
    title: 'Chronos',
    description: 'A minimalist time-tracking application for creative professionals that respects your attention.',
    tags: ['Productivity', 'Electron', 'Rust'],
    link: 'https://example.com',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop', // Placeholder
  },
];
