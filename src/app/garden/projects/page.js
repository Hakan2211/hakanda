import { projects } from './projects-data';
import ProjectCard from '@/components/garden/projects/ProjectCard';

export const metadata = {
  title: 'Projects | Garden',
  description: 'A showcase of my recent work and experiments.',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg">
          From therapy office websites to gamified trading platforms. Here's a
          look at what I create.
        </p>
      </header>

      <div className="flex flex-col items-center pb-24">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
