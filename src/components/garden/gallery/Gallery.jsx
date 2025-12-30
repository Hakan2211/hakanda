'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '@/data/gallery';
import GalleryItem from './GalleryItem';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = galleryItems.find((item) => item.id === selectedId);

  // Show latest images first (reverse the array)
  const sortedGalleryItems = [...galleryItems].reverse();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {sortedGalleryItems.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={() => setSelectedId(item.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md pointer-events-auto cursor-pointer"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-7xl h-[85vh] bg-card rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row border border-border/50"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all transform hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <X size={24} />
              </button>

              <div className="relative w-full md:w-3/4 h-1/2 md:h-full bg-black flex items-center justify-center">
                <Image
                  src={selectedItem.url}
                  alt={selectedItem.prompt}
                  fill
                  className="object-contain" // Full view without padding
                  priority
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>

              <div className="w-full md:w-1/4 h-1/2 md:h-full flex flex-col bg-background/95 backdrop-blur border-l border-border/50">
                <div className="p-8 md:p-10 flex-1 overflow-y-auto">
                  <motion.div layoutId={`title-${selectedId}`} className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground leading-tight">
                      {selectedItem.title}
                    </h2>
                  </motion.div>

                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    <Badge
                      variant="default"
                      className="px-3 py-1 text-xs uppercase tracking-wider bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                    >
                      AI Generated
                    </Badge>
                    {/* <span className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
                            Created: 2024
                        </span> */}
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        Style
                      </h3>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm font-light tracking-wide border-primary/20 bg-primary/5"
                      >
                        {selectedItem.style}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        Topic
                      </h3>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm font-light tracking-wide border-primary/20 bg-primary/5"
                      >
                        {selectedItem.topic}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Prompt
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-mono bg-muted/30 p-4 rounded-lg border border-border/50">
                      {selectedItem.prompt}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-border bg-muted/20">
                  <button
                    onClick={() => {
                      const filename = `${selectedItem.title
                        .replace(/\s+/g, '-')
                        .toLowerCase()}.jpg`;
                      const proxyUrl = `/api/download?url=${encodeURIComponent(
                        selectedItem.url
                      )}&filename=${filename}`;

                      // Create a temporary link to trigger the download via the proxy
                      const link = document.createElement('a');
                      link.href = proxyUrl;
                      link.download = filename; // This might be redundant with Content-Disposition but good for safety
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Download Asset
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
