import { projects } from './projects-data';
import ProjectCard from '@/components/garden/projects/ProjectCard';

export const metadata = {
  title: 'Projects | Garden',
  description: 'A showcase of my recent work and experiments.',
};

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <header className="mb-24 text-center mt-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
          Selected Works
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          A collection of digital experiences, experiments, and tools built with <span className="text-[#a58512]">passion</span> and precision.
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
