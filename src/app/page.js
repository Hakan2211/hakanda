import CanvasLanding from '@/components/landingpage/canvas';

export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--bg-color)] h-[100svh]">
      <div>
        <CanvasLanding />
      </div>
    </div>
  );
}
