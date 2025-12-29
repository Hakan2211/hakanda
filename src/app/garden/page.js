import { books } from '@/data/books';
import { currentProject } from './projects/projects-data';
import { galleryItems } from '@/data/gallery';
import { getLatestNote } from '@/helpers/getNotes';
import DashboardHero from '@/components/garden/dashboard/DashboardHero';
import CurrentlyReading from '@/components/garden/dashboard/CurrentlyReading';
import LatestNote from '@/components/garden/dashboard/LatestNote';
import CurrentProject from '@/components/garden/dashboard/CurrentProject';
import LatestGallery from '@/components/garden/dashboard/LatestGallery';

export const metadata = {
  title: 'Digital Garden',
  description: 'My personal digital garden - a curated space for thoughts, books, and projects.',
};

export default function GardenPage() {
  // Get currently reading book (first book with status 'reading')
  const currentlyReading = books.find((book) => book.status === 'reading');

  // Get latest note
  const latestNote = getLatestNote();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <DashboardHero />

      {/* Dashboard Sections */}
      <div className="space-y-10 md:space-y-12">
        {/* Latest Note */}
        {latestNote && <LatestNote note={latestNote} />} 
        {/* Current Project */}
        {currentProject && <CurrentProject project={currentProject} />}
        {/* Latest Gallery */}
        {galleryItems && <LatestGallery items={galleryItems} />}
        {/* Currently Reading Book */}
        {currentlyReading && <CurrentlyReading book={currentlyReading} />}
      </div>

      {/* Bottom Spacing */}
      <div className="h-16" />
    </div>
  );
}

