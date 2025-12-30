'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { books } from '@/data/books';
import BookItem from './BookItem';
import { X, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function Library() {
  const [selectedId, setSelectedId] = useState(null);

  const currentlyReading = books.find((book) => book.status === 'reading');
  const readBooks = books.filter((book) => book.status === 'read');
  const selectedBook = books.find((book) => book.id === selectedId);

  return (
    <>
      {/* Currently Reading Section */}
      {currentlyReading && (
        <div className="mb-12">
          <div className="flex items-baseline gap-2 mb-6">
            <BookOpen className="text-foreground" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90">
              Currently Reading
            </h2>
          </div>

          <motion.div
            layoutId={`card-${currentlyReading.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/10 via-background to-background border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:shadow-[0_0_50px_rgba(245,158,11,0.2)] transition-shadow duration-500"
            onClick={() => setSelectedId(currentlyReading.id)}
          >
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
              <div className="relative aspect-[2/3] w-full md:w-48 lg:w-56 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={currentlyReading.coverUrl}
                  alt={currentlyReading.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <motion.h3
                  layoutId={`title-${currentlyReading.id}`}
                  className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground"
                >
                  {currentlyReading.title}
                </motion.h3>
                <p className="text-xl text-muted-foreground mb-4">
                  {currentlyReading.author}
                </p>

                <div className="mb-4">
                  <Badge
                    variant="default"
                    className="px-3 py-1 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 border border-amber-500/50"
                  >
                    {currentlyReading.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {currentlyReading.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Read Books Section */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
          Books I've Read
        </h2>
      </div>

      {readBooks.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {readBooks.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onClick={() => setSelectedId(book.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-lg p-4">
          List will be updated later when I want to take time for digitalizing
          my library.
        </p>
      )}

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedId !== null && selectedBook && (
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
              className="relative w-full max-w-5xl h-[85vh] bg-card rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row border border-border/50"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all transform hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <X size={24} />
              </button>

              <div className="relative w-full md:w-2/5 h-1/2 md:h-full bg-gradient-to-br from-muted/50 to-background flex items-center justify-center p-8">
                <div className="relative aspect-[2/3] w-full max-w-xs shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src={selectedBook.coverUrl}
                    alt={selectedBook.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>

              <div className="w-full md:w-3/5 h-1/2 md:h-full flex flex-col bg-background/95 backdrop-blur border-l border-border/50">
                <div className="p-8 md:p-10 flex-1 overflow-y-auto">
                  <motion.div layoutId={`title-${selectedId}`} className="mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground leading-tight mb-2">
                      {selectedBook.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {selectedBook.author}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Badge
                      variant="default"
                      className="px-3 py-1 text-xs uppercase tracking-wider bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                    >
                      {selectedBook.category}
                    </Badge>
                    {selectedBook.status === 'reading' && (
                      <Badge
                        variant="default"
                        className="px-3 py-1 text-xs uppercase tracking-wider bg-green-500/20 text-green-500 hover:bg-green-500/30 border border-green-500/50"
                      >
                        Currently Reading
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        Status
                      </h3>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm font-light tracking-wide border-primary/20 bg-primary/5"
                      >
                        {selectedBook.status === 'reading'
                          ? 'In Progress'
                          : 'Completed'}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        Year
                      </h3>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm font-light tracking-wide border-primary/20 bg-primary/5"
                      >
                        {selectedBook.yearRead}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                        Description
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {selectedBook.description}
                      </p>
                    </div>

                    {selectedBook.notes && (
                      <div>
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                          My Notes
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground font-mono bg-muted/30 p-4 rounded-lg border border-border/50">
                          {selectedBook.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
