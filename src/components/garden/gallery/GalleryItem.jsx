import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function GalleryItem({ item, onClick, className }) {
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={() => onClick(item)}
      className={cn(
        "relative group cursor-pointer rounded-xl overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-900">
        <Image
          src={item.url}
          alt={item.prompt} // Keeping prompt as alt for accessibility, but hidden from UI
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-medium text-lg">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
