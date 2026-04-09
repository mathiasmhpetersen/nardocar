/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP2: "The Build Journey" — Problem Aware
 * Target: First Build Frederik (19-23) & Obsessed Oliver (38, ingeniør)
 *
 * SCHWARTZ PROBLEM AWARE STRATEGY:
 *   - The prospect knows the desire AND the problem.
 *   - His car sits too high. The proportions are off. He sees it every day.
 *   - He doesn't need to be told he wants to modify — he needs the problem NAMED.
 *   - Strategy: Name the problem directly in the headline. Agitate it.
 *     Then give permission. Then show the path.
 *
 * COPY STRUCTURE:
 *   1. Hero — Name the problem directly. "Din bil sidder for højt."
 *   2. Navngiv problemet — Agitate. Show before/after.
 *   3. Permission slip — "Du behøver ikke retfærdiggøre det med performance."
 *   4. Historien — Hvert build starter det samme sted. (Moved down.)
 *   5. Trinene — Fire trin. Fokus på deres rejse.
 *   6. Vejledning — Ikke bare en shop. En makker i garagen.
 *   7. Community + CTA — Social proof og handling.
 *
 * COPY TONE: Talesprog. Kan siges højt. Kort-lang sætningsvariation.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Package, Headphones, Wrench, CheckCircle2, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-build-journey-XKUJ69yMM7aY658E5JcN7u.webp";
const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/before-after-stance-oUubxCSbiMa4cDApkpRvfr.webp";
const CONFIDENCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-confidence-AfyfH8Nn7VSkg4koVxUiUm.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/social-proof-gallery-ih8XJeC59fzCv7Jk5iSEGZ.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const steps = [
  {
    number: "01",
    title: "Find delene",
    description: "Du ved hvad du vil have. Vi har det. Over 150.000 dele - coilovers, styling, performance. Søg på din bilmodel og se hvad der passer.",
    icon: Package,
  },
  {
    number: "02",
    title: "Snak med os",
    description: "Ikke sikker på hvad der passer? Ring eller skriv. Vores folk kører selv modificerede biler og kan hjælpe dig med fitment og valg.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "Monter det",
    description: "Dele med TÜV/EC-papirer så du er dækket ved syn. Og hvis du sidder fast undervejs, er vi en besked væk.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Kør den",
    description: "Det øjeblik du starter den op og ved at hver eneste detalje er dit valg. Det er dét det handler om.",
    icon: CheckCircle2,
  },
];

export default function BuildJourneyLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Navngiv problemet direkte.
          Schwartz Problem Aware: "Your headline starts with the desire/problem."
          Ikke processen. Ikke filosofi. Problemet.
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src={HERO_IMG}
            alt="Bil under opbygning i garage"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

        <div className="relative z-10 container pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-6">
              Din bil sidder<br />
              for højt.
            </h1>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.92] tracking-tight mb-6">
              <span className="text-nc-red">Og du har vænnet dig til det.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              Hjulkasserne er halvtomme. Proportionerne stemmer ikke. Den ser ikke færdig ud. Det er ikke indbildning. Det er geometri.
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
          SECTION 2: NAVNGIV PROBLEMET — Agiter det. Vis forskellen.
          Schwartz: Intensify the problem before presenting the solution.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
              Det er ikke noget du vænner dig til.
            </h2>
            <p className="text-foreground/65 text-lg md:text-xl leading-relaxed">
              Det er noget der irriterer dig mere jo længere tid der går. Du har set hundredvis af builds på Instagram. Du ved præcis hvad der gør forskellen. Hjulene skal fylde hjulkasserne. Bilen skal sidde tæt på asfalten. Så ser den færdig ud.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={BEFORE_AFTER_IMG}
                alt="Stock Golf vs. sænket Golf"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
              <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">Stock</span>
            </div>
            <div className="absolute top-4 right-4 bg-nc-red backdrop-blur-sm px-3 py-1.5 rounded-sm">
              <span className="text-xs font-display uppercase tracking-wider text-white font-semibold">4 cm lavere</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: PERMISSION SLIP — Giv tilladelse til æstetik.
          Du behøver ikke performance-undskyldningen.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
              Du behøver ikke retfærdiggøre det
            </h2>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
              <span className="text-nc-red">med performance.</span>
            </h2>
            <p className="text-foreground/65 text-lg md:text-xl leading-relaxed mb-6">
              Du kigger ikke på din bil og tænker på G-kræfter. Du kigger på wheel gap. På proportionerne. På den måde lyset rammer lakken når den sidder præcis rigtigt. Det er okay. Det er faktisk det mest ærlige du kan sige om din bil.
            </p>
            <p className="text-foreground/80 font-medium text-lg md:text-xl">
              Du ved hvad du vil have. Du mangler bare det rigtige sted at starte.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: TRINENE — Fire trin. Fokus på deres rejse.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Fra idé til <span className="text-nc-red">færdig bil.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="group relative bg-card border border-border/50 p-8 rounded-sm hover:border-nc-red/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <span className="font-display text-5xl font-bold text-nc-red/15 absolute -top-2 -left-1">
                    {step.number}
                  </span>
                  <div className="mb-6 pt-6">
                    <step.icon className="w-6 h-6 text-nc-red" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground mb-3 group-hover:text-nc-red transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: VEJLEDNING — Mere end dele. Nu nævner vi Nardocar.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={CONFIDENCE_IMG}
                  alt="Hænder der monterer premium coilover"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 border border-nc-red/10 rounded-sm pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="order-1 lg:order-2"
            >
              <motion.img
                src={LOGO_WHITE}
                alt="Nardocar"
                className="h-7 md:h-8 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                Ikke bare en shop.<br />
                <span className="text-nc-red">En makker i garagen.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Den største udfordring er sjældent at finde delen.
                Det er at vide om den passer, hvordan den monteres,
                og hvad du skal gøre hvis noget ikke sidder som det skal.
                Det er derfor vi er her.
              </p>

              <div className="space-y-4">
                {[
                  { icon: BookOpen, text: "Fitment-tjek på din specifikke model" },
                  { icon: Headphones, text: "Rådgivning fra folk der selv skruer" },
                  { icon: Users, text: "Et community af builders der hjælper hinanden" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-nc-red/10 border border-nc-red/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-nc-red" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed pt-2">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: COMMUNITY + CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                De startede også
                <span className="text-nc-red"> et sted.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Hvert build du ser på Instagram startede med det samme:
                en idé, en følelse, og et første klik.
                Forskellen er at de tog skridtet.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "150K+", label: "Bildele" },
                  { value: "4,5★", label: "Trustpilot" },
                  { value: "3", label: "Lande" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display text-2xl font-bold text-nc-red mb-1">
                      {value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-display">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                  onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
                >
                  Start dit build
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:border-nc-red hover:text-nc-red font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                  onClick={() => window.open("https://www.nardocar.dk/shop/profile.html", "_blank")}
                >
                  Snak med os først
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm">
              <img
                src={GALLERY_IMG}
                alt="Community builds galleri"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 border border-nc-red/10 rounded-sm pointer-events-none" />
            </div>
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
