/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP4: "First Build Frederik" — Solution Aware / Product Aware
 * Target: First Build Frederik (19-23, first car, researching for weeks)
 *
 * SCHWARTZ STRATEGY — Stage 3/4 Awareness + Stage 3 Sophistication:
 *   - He knows the problem (stock car doesn't represent him)
 *   - He knows solutions exist (coilovers, wheels, etc.)
 *   - He's paralyzed by: fear of wrong parts, syn-angst, "KW or nothing" belief
 *   - NEW MECHANISM: "We've already made the decision for your exact car"
 *   - Kill objections in order of psychological weight
 *   - One recommendation, not ten options
 *   - Social proof from his exact peer (20yo, first Golf, first coilovers)
 *
 * COPY STRUCTURE:
 *   1. Hero — Name his situation. "Du har researchet længe nok."
 *   2. The Loop — Agitate the research paralysis he's stuck in.
 *   3. The Recommendation — One clear answer for his car. Kill complexity.
 *   4. Objection Killer — Syn, pris, montering. Boom boom boom.
 *   5. Peer Proof — Someone exactly like him who did it.
 *   6. CTA — One button. One next step. Not overwhelming.
 *
 * COPY TONE: Direkte. Som en ældre ven der skruer.
 * Kort-lang sætningsvariation. Ingen buzzwords.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  FileCheck,
  Wrench,
  MessageCircle,
  Star,
  CheckCircle2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-build-journey-XKUJ69yMM7aY658E5JcN7u.webp";
const BEFORE_AFTER_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/before-after-stance-oUubxCSbiMa4cDApkpRvfr.webp";
const CONFIDENCE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-confidence-AfyfH8Nn7VSkg4koVxUiUm.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FirstBuildLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Name his situation directly.
          Schwartz Stage 3/4: He knows the desire, knows the solutions.
          Don't identify — acknowledge. "I know where you are."
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-end overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src={HERO_IMG}
            alt="Første build i garagen"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        <div className="relative z-10 container pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut" as const,
            }}
            className="max-w-3xl"
          >
            <p className="text-nc-red uppercase tracking-[0.25em] text-sm font-semibold mb-4 font-display">
              Dit første build
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-6">
              Du har researchet{" "}
              <span className="text-nc-red">
                længe
                <br />
                nok.
              </span>
            </h1>
            <p className="text-foreground/65 text-lg md:text-xl max-w-xl leading-relaxed">
              Du ved hvad du vil have. Du ved bare ikke om du har fundet det
              rigtige. Det har du.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut" as const,
          }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/30" />
        </motion.div>
      </section>

      <div className="red-streak" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: THE LOOP — Agitate the research paralysis.
          Name exactly what's happening in his head.
          Every answer creates three new questions.
          Make him feel SEEN — then show him the exit.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
              Du kender{" "}
              <span className="text-nc-red">loopet.</span>
            </h2>
            <div className="space-y-5 text-foreground/65 text-lg md:text-xl leading-relaxed">
              <p>
                Du finder en gevindundervogn der ser rigtig ud. Så læser du en
                tråd der siger den er lort. Så finder du en anden. Så er du
                ikke sikker på om den passer til din årgang. Så checker du
                prisen på KW og tænker at du hellere vil vente.
              </p>
              <p>
                Så går der en måned. Du har stadig ikke købt noget.
              </p>
              <p>
                Du har 14 gemte posts, 6 åbne faner, og en
                fornemmelse af at hvert svar du finder bare skaber tre nye
                spørgsmål.
              </p>
              <p className="text-foreground/80 font-medium">
                Problemet er ikke at du mangler information.
                <br />
                Problemet er at ingen har givet dig ét klart svar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: THE RECOMMENDATION — One answer. Not ten options.
          This is the NEW MECHANISM Schwartz talks about:
          "We've already decided for your exact car."
          Kill complexity. Give him permission to act.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
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
                Her er hvad vi{" "}
                <span className="text-nc-red">
                  ville sætte
                  <br />
                  på din bil.
                </span>
              </h2>
              <div className="space-y-5 text-foreground/65 text-lg leading-relaxed">
                <p>
                  Vi har solgt dele til tusindvis af biler som din. Vi ved hvad
                  der virker. Ikke hvad der er dyrest — hvad der giver dig det
                  resultat du faktisk går efter.
                </p>
                <p>
                  Fortæl os din model. Vi giver dig én anbefaling. Ikke ti
                  muligheder. Ét svar.
                </p>
                <p>
                  Hvad det koster. Hvad det gør. Om det kan gå til syn. Og
                  hvordan du monterer det.
                </p>
                <p className="text-foreground/80 font-medium">
                  Du behøver ikke KW for at få det look du vil have.
                  <br />
                  Du behøver det rigtige setup til din bil og din hverdag.
                </p>
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
                  alt="Golf 7 før og efter sænkning"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">
                  Stock
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-nc-red backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-white font-semibold">
                  Første build
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: OBJECTION KILLER — Kill his fears. In order.
          1. "Passer det til min bil?" → Fitment-garanti.
          2. "Kan det gå til syn?" → TÜV/EC-papirer.
          3. "Jeg har ikke råd" → Reframe pris.
          4. "Kan jeg selv montere det?" → Guides + support.
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
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Alt det der{" "}
              <span className="text-nc-red">holder dig tilbage.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed">
              Vi har hørt dem alle. Her er de rigtige svar.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl"
          >
            {[
              {
                icon: Shield,
                objection: "\"Hvad hvis det ikke passer til min bil?\"",
                answer:
                  "Har vi anbefalet et produkt, garanterer vi også at det passer til netop din bil. Passer det ikke, bytter vi. Ingen diskussion.",
              },
              {
                icon: FileCheck,
                objection: "\"Kan det gå til syn?\"",
                answer:
                  "Vores gevindundervogne og sænkningssæt leveres med TÜV- eller EC-godkendelse. Tag papirerne med til syn. Done.",
              },
              {
                icon: Star,
                objection: "\"Jeg har ikke råd til det rigtige\"",
                answer:
                  "\"Det rigtige\" er ikke det dyreste. Det er det der giver dig det resultat du vil have, til din bil, til din hverdag. Forskellen mellem stock og et godt setup er enorm. Forskellen mellem et godt setup og det dyreste? Minimal i hverdagen.",
              },
              {
                icon: Wrench,
                objection: "\"Jeg er ikke sikker på jeg kan montere det selv\"",
                answer:
                  "De fleste af vores kunder monterer selv. Med det rigtige værktøj tager det et par timer. Og hvis du går i stå, ringer du bare. Vi tager telefonen.",
              },
            ].map((item) => (
              <motion.div
                key={item.objection}
                variants={fadeUp}
                className="bg-card border border-border/50 rounded-sm p-8 hover:border-nc-red/30 transition-all duration-500"
              >
                <item.icon className="w-6 h-6 text-nc-red mb-5" />
                <p className="font-display text-lg font-bold text-foreground mb-3">
                  {item.objection}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: PEER PROOF — Not a pro builder. Someone EXACTLY
          like Frederik. 20 years old, first car, first coilovers.
          Schwartz: identification through someone like themselves.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={CONFIDENCE_IMG}
                  alt="Første build af ung bilejer"
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
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-nc-red text-nc-red"
                  />
                ))}
              </div>
              <blockquote className="text-foreground text-xl md:text-2xl font-display leading-snug mb-6">
                "Jeg ventede i fire måneder. Læste alt. Var bange for at
                købe forkert.{" "}
                <span className="text-nc-red">
                  Tog to timer at montere. Skulle have gjort det dag ét.
                </span>
                "
              </blockquote>
              <div className="mb-8">
                <p className="text-foreground/90 font-medium">
                  Marcus, 21
                </p>
                <p className="text-muted-foreground text-sm">
                  VW Golf 7 TSI — første build
                </p>
              </div>

              <div className="space-y-4 text-foreground/65 leading-relaxed">
                <p>
                  "Jeg troede jeg skulle have KW for at det var 'rigtigt.' Nardocar
                  anbefalede et setup der kostede halvdelen. Forskellen fra stock
                  er sindssyg. Forskellen op til KW? Det kan jeg ikke se i min
                  hverdag."
                </p>
                <p>
                  "Det sværeste var ikke monteringen. Det var at beslutte mig.
                  Når først delene lå der, tog det en eftermiddag med min far."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: THE REFRAME — "You don't need to decide the whole
          build. Just the first step." Lower the commitment threshold.
          Then: one CTA that matches where he actually is.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Du behøver ikke beslutte{" "}
              <span className="text-nc-red">hele buildet.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Bare det første skridt. Start med undervognen. Alt andet kan
              vente.
            </p>
            <p className="text-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Fortæl os hvad du kører. Vi fortæller dig hvad vi ville sætte
              på den.
            </p>

            {/* What you get — not a feature list, a confidence list */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14 text-left"
            >
              {[
                "Anbefaling til din præcise model",
                "TÜV/EC-papirer inkluderet",
                "Fitment-garanti — har vi anbefalet det, passer det",
                "Support fra folk der selv kører modificeret",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-nc-red shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* What we DON'T do — builds trust by being honest */}
            <div className="border border-border/30 rounded-sm p-6 max-w-2xl mx-auto mb-14 text-left bg-card/30">
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-display mb-4">
                Hvad vi ikke gør
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Presser dig til at købe mere end du har brug for",
                  "Sælger dig det dyreste hvis du ikke har brug for det",
                  "Lader dig sidde alene med monteringen",
                  "Sælger dele uden dokumentation til syn",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA — One primary action. Low commitment. */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                onClick={() =>
                  window.open("https://nardocar.dk/shop", "_blank")
                }
              >
                Få en anbefaling til din bil
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:border-nc-red hover:text-nc-red font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                onClick={() =>
                  window.open("https://nardocar.dk/shop", "_blank")
                }
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Skriv til os på chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 border-t border-border/30">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_WHITE} alt="Nardocar" className="h-6 opacity-60" />
          <p className="text-muted-foreground text-sm">
            Own Your Drive &mdash; nardocar.dk
          </p>
        </div>
      </footer>
    </div>
  );
}
