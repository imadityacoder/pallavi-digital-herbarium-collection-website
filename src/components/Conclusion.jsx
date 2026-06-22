import ScrollReveal from './ScrollReveal'

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-20 sm:py-28 bg-primary/5" aria-labelledby="conclusion-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 id="conclusion-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-8">
            Conclusion
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-4 text-foreground/80 leading-relaxed text-base sm:text-lg">
            <p>
              The Digital Herbarium Collection represents a convergence of traditional botanical
              science and modern educational technology. Through careful documentation of nine plant
              specimens spanning five families, this project demonstrates the enduring value of
              herbarium work in an increasingly digital world. Each preserved specimen tells a
              story of botanical diversity, ecological relationships, and human interaction with
              the plant kingdom.
            </p>
            <p>
              Conservation remains the ultimate purpose of botanical documentation. As natural
              habitats face unprecedented pressure from urbanization, agriculture, and climate
              change, herbarium collections serve as time capsules of biodiversity. The specimens
              documented here from B.N. College garden capture local flora that students encounter
              daily, transforming familiar plants into subjects of rigorous scientific inquiry.
            </p>
            <p>
              Scientific observation lies at the heart of this project. Students who create and
              study herbarium specimens develop skills in taxonomy, morphology, and data recording
              that form the foundation of biological research. The process of pressing, mounting,
              labeling, and identifying plants trains the eye to notice diagnostic characters that
              distinguish one species from another.
            </p>
            <p>
              The educational learning outcomes extend beyond botany. This digital exhibition
              cultivates scientific literacy, environmental awareness, and appreciation for the
              natural world. By making herbarium science accessible through an interactive web
              platform, we invite visitors to explore, learn, and discover the remarkable diversity
              of plant life that surrounds us. May this collection inspire future generations of
              botanists, conservationists, and curious minds to look more closely at the green world
              we depend upon.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
