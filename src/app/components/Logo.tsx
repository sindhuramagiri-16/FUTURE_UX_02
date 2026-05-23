export function Logo({ className = "h-16" }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col items-center justify-center gap-1`}>
      {/* DAILY - Bold Retro Psychedelic Style */}
      <h1
        className="text-5xl tracking-wider leading-none"
        style={{
          fontFamily: "'Cooper Black', 'Abril Fatface', 'Ultra', serif",
          fontWeight: '900',
          letterSpacing: '0.05em',
          textShadow: '2px 2px 0px currentColor'
        }}
      >
        DAILY
      </h1>

      {/* RITUALS - Minimalist Sans-Serif with Asterisks */}
      <div className="flex items-center gap-2 opacity-80">
        <span className="text-xs">✦</span>
        <p
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: '300',
            letterSpacing: '0.15em'
          }}
        >
          RITUALS
        </p>
        <span className="text-xs">✦</span>
      </div>
    </div>
  );
}
