import { songs } from './songs-data';
import SongPlayer from '@/components/garden/songs/SongPlayer';

export const metadata = {
  title: 'Songs | Garden',
  description: 'AI-generated music — listen to songs created with ElevenLabs and MiniMax.',
};

export default function SongsPage() {
  return (
    <div className="space-y-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
          Songs
        </h1>
        <p className="text-muted-foreground text-lg">
          AI-generated music created with ElevenLabs and MiniMax. Hit play and enjoy.
        </p>
      </header>

      <SongPlayer songs={songs} />

      {/* Bottom Spacing */}
      <div className="h-16" />
    </div>
  );
}
