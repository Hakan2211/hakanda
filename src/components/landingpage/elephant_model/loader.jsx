'use client';

import { useProgress } from '@react-three/drei';

export default function Loader() {
  const { active, progress } = useProgress();

  return active ? (
    <div className="flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-[var(--bg-color)] text-[var(--text-color-primary-900)] text-3xl">
      <span>{Math.floor(progress)}%</span>
    </div>
  ) : null;
}
