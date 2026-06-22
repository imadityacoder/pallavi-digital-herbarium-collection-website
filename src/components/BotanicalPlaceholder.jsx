export default function BotanicalPlaceholder({ className = '', label = 'Botanical Specimen' }) {
  return (
    <div
      className={`flex items-center justify-center bg-primary/5 ${className}`}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full max-h-48 max-w-48 opacity-30" aria-hidden="true">
        <path
          d="M100 180 Q100 120 60 80 Q40 60 50 40 Q70 50 100 70 Q130 50 150 40 Q160 60 140 80 Q100 120 100 180"
          fill="#2E7D32"
        />
        <path d="M100 70 L100 180" stroke="#2E7D32" strokeWidth="3" fill="none" />
        <ellipse cx="100" cy="35" rx="8" ry="12" fill="#81C784" />
      </svg>
    </div>
  )
}
