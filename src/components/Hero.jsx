import { motion } from 'framer-motion'
import { ChevronDown, User, GraduationCap, Hash, School, Calendar } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const leaves = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + i * 12}%`,
  delay: i * 0.3,
  duration: 4 + (i % 3),
  size: 20 + (i % 4) * 8,
}))

const studentInfo = [
  { icon: User, label: 'Student Name', value: 'Pallavi Kumari' },
  { icon: GraduationCap, label: 'Class', value: 'Class XII' },
  { icon: Hash, label: 'Roll Number', value: '—' },
  { icon: School, label: 'School Name', value: 'B.N. College' },
  { icon: Calendar, label: 'Academic Session', value: '2025–2026' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden botanical-pattern"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/50"
        aria-hidden="true"
      />

      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute pointer-events-none opacity-20"
          style={{ left: leaf.left, top: `${15 + (leaf.id % 5) * 15}%` }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="#F8FAF5">
            <path d="M12 2C8 6 4 10 4 16c0 3 2 5 4 6 1-3 2-6 4-8 2 2 3 5 4 8 2-1 4-3 4-6 0-6-4-10-8-14z" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-fluid-hero font-heading font-bold text-white mb-2">
            HERBARIUM PROJECT
          </h1>
          <p className="text-lg text-white/90 mb-1">🌿 Department of Botany 🌿</p>
          <p className="text-base text-white/90 mb-1">Bihar National College, Patna</p>
          <p className="text-sm text-white/80 mb-6">(A Constituent Unit of Patna University, Patna)</p>
        </motion.div>

        <ScrollReveal delay={0.6}>
          <div className="glass-card mx-auto max-w-2xl p-6 text-left">
            <h2 className="font-heading text-lg font-semibold text-white mb-4 text-center">
              Submitted By
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90">
              <div>
                <dt className="text-sm text-white/70">Name</dt>
                <dd className="font-medium">Pallavi Kumari</dd>
              </div>
              <div>
                <dt className="text-sm text-white/70">Roll No.</dt>
                <dd className="font-medium">33</dd>
              </div>
              <div>
                <dt className="text-sm text-white/70">Examination Roll No.</dt>
                <dd className="font-medium">260001</dd>
              </div>
              <div>
                <dt className="text-sm text-white/70">Course</dt>
                <dd className="font-medium">Bachelor of Science (B.Sc.) – Botany</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm text-white/70">Project Title</dt>
                <dd className="font-medium">HERBARIUM COLLECTION AND DOCUMENTATION OF PLANT SPECIES OF FAMILIES.</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm text-white/70">Submitted To</dt>
                <dd className="font-medium">Dr. Dheeraj Gautam Sir &amp; Dr. Rajeev Kumar Sir</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm text-white/70">Academic Session</dt>
                <dd className="font-medium">2023–2027</dd>
              </div>
            </dl>
          </div>
        </ScrollReveal>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  )
}
