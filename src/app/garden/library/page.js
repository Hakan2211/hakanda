import Library from '@/components/garden/library/Library';

export default function LibraryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#f5e3a3] to-[#a58512] bg-clip-text text-transparent">
          Garden Library
        </h1>
        <p className="text-muted-foreground text-lg">
          Been reading since I was nine. Started with Alfred Hitchcock and the
          Three Investigators, never stopped. Now I'm deep into non-fiction.
          This is my reading list: past and present, with plans to highlight the
          top 10 books each year that actually made a difference.
        </p>
      </div>

      <Library />
    </div>
  );
}
