import Gallery from '@/components/garden/gallery/Gallery';

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
          Garden Gallery
        </h1>
        <p className="text-muted-foreground text-lg">
          Art I've created with generative AI. What started as curiosity turned
          into a new creative outlet. One that lets me experiment faster and
          explore ideas beyond my own drawing abilities.
        </p>
      </div>

      <Gallery />
    </div>
  );
}
