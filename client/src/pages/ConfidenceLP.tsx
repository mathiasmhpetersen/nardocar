/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP3: "Build with Confidence" — Problem Aware
 * Target: First Build Frederik (frygter fitment), Practical Enthusiast (frygter lovlighed/kvalitet)
 *
 * COPY STRUCTURE (PDA — delayed brand reveal):
 *   1. Hero — Anerkend frygten. Ingen brand.
 *   2. Frygterne — Direkte fear/answer. Vis vi forstår.
 *   3. Garantierne — Nu nævner vi Nardocar. Trust signals.
 *   4. Social proof — Rigtige kunder der tog springet.
 *   5. CTA — Handling.
 *
 * COPY TONE: Talesprog. Kan siges højt. Kort-lang sætningsvariation.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Award, Truck, MessageCircle, CheckCircle2, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-confidence-AfyfH8Nn7VSkg4koVxUiUm.webp";
const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/before-after-stance-oUubxCSbiMa4cDApkpRvfr.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/social-proof-gallery-ih8XJeC59fzCv7Jk5iSEGZ.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fears = [
  {
    fear: "\"Hvad nu hvis delene ikke passer til min bil?\"",
    answer: "Alle dele er matchet til din specifikke model. Vi har fitment-garanti - passer det ikke, bytter vi. Ingen diskussion.",
  },
  {
    fear: "\"Kan jeg stadig køre syn med det her?\"",
    answer: "Vores coilovers og dele kommer med TÜV/EC-dokumentation. Papirerne følger med i kassen, så du er dækket fra dag ét.",
  },
  {
    fear: "\"Jeg har aldrig skruet på en bil før...\"",
    answer: "Det er helt okay. Vores kundeservice er bilfolk der selv skruer. Ring eller skriv - vi guider dig igennem det, trin for trin.",
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Fitment-garanti",
    description: "Verificeret til din model. Passer det ikke, bytter vi uden bøvl.",
  },
  {
    icon: Award,
    title: "TÜV/EC-godkendt",
    description: "Papirerne følger med. Du er dækket ved syn og forsikring.",
  },
  {
    icon: Truck,
    title: "Hurtig levering",
    description: "DK, NO og SE. De fleste ordrer sendes inden for 1-3 hverdage.",
  },
  {
    icon: MessageCircle,
    title: "Ekspert support",
    description: "Rigtige bilfolk der hjælper med valg, fitment og montering.",
  },
];

const testimonials = [
  {
    quote: "Var lidt nervøs for at bestille coilovers online. Men de hjalp mig med at vælge de rigtige, og de passede perfekt.",
    name: "Mikkel S.",
    car: "VW Golf MK7",
  },
  {
    quote: "TÜV-papirerne lå i kassen. Kørte syn uden problemer. Præcis som de sagde.",
    name: "Jonas R.",
    car: "BMW E46",
  },
  {
    quote: "Første gang jeg modificerede noget. Ringede til dem tre gange. De var tålmodige hver gang og forklarede alt.",
    name: "Erik L.",
    car: "Audi A4 B8",
  },
];

export default function ConfidenceLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Anerkend frygten. Ingen brand.
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src={HERO_IMG}
            alt="Hænder der arbejder på bilunderstel"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        <div className="relative z-10 container pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-6">
              Du har tænkt<br />
              over det <span className="text-nc-red">længe nok.</span>
            </h1>
            <p className="text-foreground/65 text-lg md:text-xl max-w-xl leading-relaxed">
              Du ved hvad du vil. Du har bare brug for at vide at det virker.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" as const }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/30" />
        </motion.div>
      </section>

      <div className="red-streak" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: FRYGTERNE — Direkte fear/answer.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              De tanker der holder dig{" "}
              <span className="text-nc-red">fra at trykke bestil.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed">
              Vi kender dem. Fordi vi har hørt dem hundredvis af gange.
              Og fordi vi selv har haft dem.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 max-w-3xl"
          >
            {fears.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card border border-border/50 rounded-sm overflow-hidden"
              >
                <div className="flex items-start gap-4 p-6 pb-4 border-b border-border/30">
                  <div className="w-8 h-8 bg-destructive/10 border border-destructive/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-foreground font-body text-lg italic leading-relaxed">
                    {item.fear}
                  </p>
                </div>
                <div className="flex items-start gap-4 p-6 pt-4">
                  <div className="w-8 h-8 bg-nc-red/10 border border-nc-red/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-nc-red" />
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: GARANTIERNE — Nu nævner vi Nardocar.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.img
              src={LOGO_WHITE}
              alt="Nardocar"
              className="h-7 md:h-8 mx-auto mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Det er derfor vi gør det<br />
              <span className="text-nc-red">sådan her.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Vi sælger ikke bare dele. Vi sørger for at du får de rigtige dele,
              med de rigtige papirer, og den rigtige hjælp.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {guarantees.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative bg-card border border-border/50 p-8 rounded-sm hover:border-nc-red/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-nc-red/10 border border-nc-red/20 rounded-sm flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-nc-red" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground mb-3 group-hover:text-nc-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: SOCIAL PROOF — Rigtige kunder der tog springet.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              De tøvede også. <span className="text-nc-red">Og så gjorde de det.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card border border-border/50 p-8 rounded-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-nc-red fill-nc-red" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="font-display text-sm font-semibold text-foreground tracking-wider">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t.car}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: VISUAL PROOF + CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                Fra tøven til{" "}
                <span className="text-nc-red">stolthed.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Hundredvis af kunder har stået præcis hvor du står nu.
                De tøvede. De researchede. Og så tog de springet.
                Med de rigtige dele og den rigtige hjælp
                ender det altid det samme sted: med en bil de er stolte af.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                  onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
                >
                  Find dele til din bil
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:border-nc-red hover:text-nc-red font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                  onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
                >
                  Snak med os først
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={BEFORE_AFTER_IMG}
                  alt="Før og efter bil-transformation"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">Tøven</span>
              </div>
              <div className="absolute top-4 right-4 bg-nc-red backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-white font-semibold">Stolthed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA Banner ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={GALLERY_IMG}
            alt="Modificerede biler"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Stop med at researche.<br />
              <span className="text-nc-red">Begynd at bygge.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              150.000+ dele. TÜV/EC-godkendt. Fitment-garanti.
              Og et team der er klar til at hjælpe dig i gang.
            </p>
            <Button
              size="lg"
              className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-10 py-6 rounded-sm"
              onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
            >
              Kom i gang
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 border-t border-border/30">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={LOGO_WHITE}
            alt="Nardocar"
            className="h-6 opacity-60"
          />
          <p className="text-muted-foreground text-sm">
            Own Your Drive &mdash; nardocar.dk
          </p>
        </div>
      </footer>
    </div>
  );
}
