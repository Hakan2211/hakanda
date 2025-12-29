import { getNoteList } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import COMPONENT_MAP from '@/helpers/mdx-components';
import NotesTimeline from '@/components/garden/notes/NotesTimeline';
import NoteCard from '@/components/garden/notes/NoteCard';

export default async function NotesPage() {
  const notes = await getNoteList();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
        <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
             Garden Notes
            </h1>
            <p className="text-muted-foreground text-lg">
                Thoughts, snippets, and learnings from my daily work.
            </p>
        </header>
        
      <NotesTimeline>
        {notes.map((note) => (
          <div key={note.slug} className="relative pl-12 group">
            {/* The Dot on the line */}
             <div className="absolute left-[27px] top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#a58512] bg-background shadow-[0_0_10px_rgba(165,133,18,0.5)] z-20 transition-all duration-300 group-hover:scale-125 group-hover:border-[#f5e3a3]" />
            
            <NoteCard note={note}>
              <MDXRemote source={note.content} components={COMPONENT_MAP} />
            </NoteCard>
          </div>
        ))}
      </NotesTimeline>
    </div>
  );
}
