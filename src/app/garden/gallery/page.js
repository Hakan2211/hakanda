
import Gallery from '@/components/garden/gallery/Gallery';

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
          Garden Gallery
        </h1>
        <p className="text-muted-foreground text-lg">
            A curated collection of digital explorations and artifacts.
        </p>
      </div>
      
      <Gallery />
    </div>
  );
}
