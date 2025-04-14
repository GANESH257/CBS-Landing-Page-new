export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-white/20"></div>
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-primary/30 rounded-full blur-xl animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-accent/30 rounded-full blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/30 rounded-full blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
} 