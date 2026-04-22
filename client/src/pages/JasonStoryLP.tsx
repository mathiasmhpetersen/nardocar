/*
 * PAGE: Jason's Story — Golf 7 GTI (Owner Story)
 * AUDIENCE: Danish car enthusiasts 20-35, Solution-Aware → Product-Aware
 *           Already modifying, already made cheap mistakes, now want to do it right.
 * AWARENESS: Schwartz level 4
 * UNIQUE MECHANISM: Build quality with approvals intact —
 *                  the middle path between cheap garbage and overpriced luxury.
 * PRIMARY EMOTION: Fear of wasting money on parts that don't hold up at the track or meets.
 */
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const HERO_IMG = "/images/jason-hero-faf.jpg";
const SIDE_SUNSET_IMG = "/images/jason-side-sunset.jpg";
const FRONT_DETAIL_IMG = "/images/jason-front-detail.jpg";
const FRONT_WATER_IMG = "/images/jason-front-water.jpg";
const INTERIOR_IMG = "/images/jason-interior.jpg";
const REAR_WATER_IMG = "/images/jason-rear-water.jpg";
const SEAT_IMG = "/images/jason-seat.jpg";
const SILO_WIDE_IMG = "/images/jason-faf-wide.jpg";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";

/* Image map
 *   HERO_IMG         — wide front at FAF silo (opening)
 *   SIDE_SUNSET_IMG  — 3/4 at sunset (intro closer)
 *   FRONT_DETAIL_IMG — close-up front with red stripe (dream growing breakout)
 *   FRONT_WATER_IMG  — front 3/4 at water (shift section breakout)
 *   SEAT_IMG         — plaid GTI seat (two-column)
 *   REAR_WATER_IMG   — rear shot at water (why Nardocar breakout)
 *   INTERIOR_IMG     — carbon steering wheel interior (post-reviews breakout)
 *   SILO_WIDE_IMG    — wide FAF silo shot (final CTA ghost background)
 */

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease } },
};

function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[760px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;
}

function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/* Statement block — centered, dramatic, optional red radial glow */
function Statement({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-nc-red/[0.06] blur-[120px]" />
      </div>
      <Wide className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-nc-red font-display uppercase tracking-[0.3em] text-xs md:text-sm mb-8"
        >
          {tag}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-balance"
        >
          {children}
        </motion.p>
      </Wide>
    </section>
  );
}

export default function JasonStoryLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress: heroY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroY, [0, 1], ["0%", "25%"]);
  const heroFade = useTransform(heroY, [0, 0.7], [1, 0]);

  const { scrollYProgress: pageY } = useScroll();
  useMotionValueEvent(pageY, "change", setProgress);

  const hotBrands = ["KW", "Eibach", "Vogtland"];
  const neutralBrands = ["H&R", "Bilstein", "Scorpion", "Maxton Design"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-nc-red z-50 origin-left" style={{ scaleX: progress }} />

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[100svh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img src={HERO_IMG} alt="Jasons hvide Golf 7 GTI ved FAF-siloen i Odense havn" className="w-full h-[130%] object-cover object-[50%_35%]" />
        </motion.div>
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <motion.div className="relative z-10 w-full pb-12 sm:pb-16 md:pb-24 lg:pb-32" style={{ opacity: heroFade }}>
          <div className="container">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-nc-red font-display uppercase tracking-[0.3em] text-xs md:text-sm mb-5"
            >
              Ejerhistorie · Golf 7 GTI
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease }}
              className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight max-w-[900px]"
            >
              Jeg drømte om den perfekte banebil.{" "}
              <span className="text-nc-red">Så parkerede jeg ved siden af drømmen.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7, ease }}
              className="mt-7 text-foreground/55 text-base md:text-lg lg:text-xl leading-relaxed max-w-[620px]"
            >
              Jason, 22. Syvende bil. En Golf 7 GTI købt for egne lønsedler fra lærepladsen — daglig bil, og engang en ordentlig banebil til Padborgpark og Nürburgring.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}>
            <ChevronDown className="w-5 h-5 text-foreground/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          INTRO STORY
      ════════════════════════════════════════════════════════════ */}
      <section className="pt-28 pb-20 md:pt-44 md:pb-32 relative grain-overlay">
        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Jeg var 22 da jeg købte den. Betalt af mine egne penge — opsparet på lærepladsen, krone for krone. Det var min syvende bil.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              En Golf var aldrig drømmebilen. Jeg voksede op omkring baghjulstræk og firehjulstræk. Et hot hatch var en barndomsdagdrøm jeg ikke regnede med jeg selv kom til at eje.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Et par måneder inde var det ikke bare en bil længere. Det var <span className="text-foreground font-medium">min</span> bil.
            </motion.p>
          </motion.div>
        </Prose>

        <Wide className="mt-16 md:mt-24">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
              <img src={SIDE_SUNSET_IMG} alt="Golf 7 GTI side-profil i solnedgang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
            </div>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          DAILY LIFE + DREAM GROWING
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44">
        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8 mb-16 md:mb-24">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Jeg vaskede den flere gange om ugen. Rensede sæderne. Kørte på arbejde, hen i fitness, ud til vennerne.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Jo mere jeg kørte den, jo mere tænkte jeg over hvad den kunne blive. Ikke bare pæn i indkørslen — en bil der kunne bruge sin størrelse på banen.
            </motion.p>
          </motion.div>
        </Prose>

        <Wide>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
              <img src={FRONT_DETAIL_IMG} alt="Golf 7 GTI front-detalje med rød stribe" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </Wide>

        <Wide className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="relative py-10 md:py-14 px-8 md:px-12 lg:px-16"
          >
            <div className="absolute inset-0 bg-nc-red/[0.04] rounded-sm" />
            <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-nc-red rounded-full" />
            <p className="relative font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight">
              Hver gang jeg havde været ved ringen,<br />
              <span className="text-nc-red">voksede drømmen.</span>
            </p>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          STATEMENT 1 — The trap
      ════════════════════════════════════════════════════════════ */}
      <Statement tag="Fælden de fleste falder i">
        En billig undervogn. <span className="text-nc-red">En hjemmesvejset udstødning.</span>
      </Statement>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE CHEAP ROUTE — pain section
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative grain-overlay">
        <Prose className="relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Det er sådan de fleste starter. Billige dele fra en side du aldrig har hørt om. Du sparer lidt. Du føler dig kvik.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Og så rammer det dig — på banen. Og ved træf. Lige der hvor folk kan se forskel.
            </motion.p>
          </motion.div>
        </Prose>

        <Wide className="mt-14 md:mt-20 relative z-10">
          <motion.ul
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[900px] mx-auto space-y-5"
          >
            {[
              "Undervogn der ikke er godkendt — og ikke opfører sig på banen",
              "Udstødning der brøler forkert og bliver stoppet ved hvert lyskryds",
              "Fælge der ikke passer. Fitment der er forkert. Wheel gap der ødelægger hele looket",
              "Penge brændt af på dele du ender med at skifte igen om seks måneder",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex gap-5 items-start border-l-2 border-nc-red/60 pl-5 md:pl-7 py-2"
              >
                <span className="text-foreground/80 text-lg md:text-xl leading-[1.55]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Wide>

        <Prose className="mt-16 md:mt-20 relative z-10">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-center"
          >
            Du har sparet 2.000 kroner.<br />
            <span className="text-nc-red">Og betalt 10.000 i utilfredshed.</span>
          </motion.p>
        </Prose>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          STATEMENT 2 — The turning point
      ════════════════════════════════════════════════════════════ */}
      <Statement tag="Vendepunktet">
        Byg bilen én gang. <span className="text-nc-red">Byg den rigtigt.</span>
      </Statement>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE SHIFT — building right + brand pills
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44">
        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Min balance er ikke det billigste. Og det er heller ikke at brænde kassen af på det dyreste. Det er midten.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Kvalitet — med godkendelserne i orden. Coilovers fra et mærke der har leveret det i årtier. E-mærket udstødning, så du ikke bliver stoppet hver gang lyset bliver grønt.
            </motion.p>
          </motion.div>
        </Prose>

        <Wide className="mt-16 md:mt-20">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="space-y-8">
            <motion.div variants={fadeUp}>
              <p className="text-foreground/40 font-display uppercase tracking-[0.25em] text-xs mb-4">De mærker jeg kører</p>
              <div className="flex flex-wrap gap-3">
                {hotBrands.map((b) => (
                  <span
                    key={b}
                    className="px-5 py-2.5 rounded-full bg-nc-red/10 border border-nc-red/40 text-nc-red font-display uppercase tracking-[0.15em] text-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-foreground/40 font-display uppercase tracking-[0.25em] text-xs mb-4">Og resten af pakken</p>
              <div className="flex flex-wrap gap-3">
                {neutralBrands.map((b) => (
                  <span
                    key={b}
                    className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-foreground/70 font-display uppercase tracking-[0.15em] text-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Wide>

        <Prose className="mt-16 md:mt-20">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-center"
          >
            Det er dem der skaber de rigtige tider.<br />
            <span className="text-nc-red">Og den største respekt.</span>
          </motion.p>
        </Prose>

        <Wide className="mt-16 md:mt-24">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/10] md:aspect-[16/9]">
              <img src={FRONT_WATER_IMG} alt="Golf 7 GTI med rød stribe ved havnekanten" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          TWO-COLUMN — Seat + Kvalitet man kan mærke
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative grain-overlay">
        <Wide className="relative z-10">
          <div className="grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-center">
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] max-w-[420px] mx-auto lg:mx-0">
                <img src={SEAT_IMG} alt="GTI sæde med tern-mønster — close-up" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-7">
              <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Kvalitet man <span className="text-nc-red">kan mærke</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/75 text-lg md:text-xl leading-[1.7]">
                Forskellen på billige og rigtige dele kan du ikke altid se i indkørslen. Den kan du mærke.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/75 text-lg md:text-xl leading-[1.7]">
                Første gang du presser bilen hårdt ind i et sving. Første gang du tager den ud på Padborgpark og den bliver ved med at opføre sig som den skal. Det er der dele holder — eller ikke holder.
              </motion.p>
            </motion.div>
          </div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          QUOTE CARD
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44">
        <Wide>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="relative py-12 md:py-16 px-8 md:px-12 lg:px-16 max-w-[980px] mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nc-red/[0.08] via-nc-red/[0.02] to-transparent rounded-sm" />
            <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-nc-red rounded-full" />
            <p className="relative font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.14] tracking-tight">
              De rigtige mærker skaber de rigtige tider.<br />
              <span className="text-nc-red">Og den største respekt til træf.</span>
            </p>
            <p className="relative mt-8 text-foreground/40 font-display uppercase tracking-[0.2em] text-xs md:text-sm">
              Jason · Golf 7 GTI ejer
            </p>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          STATEMENT 3 — The middle path
      ════════════════════════════════════════════════════════════ */}
      <Statement tag="Hvorfor Nardocar">
        Mellem billigst og dyrest{" "}
        <span className="text-nc-red">findes det rigtige setup.</span>
      </Statement>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          WHY NARDOCAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 relative grain-overlay">
        <Prose className="relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Det er blandingen der gør det. Den billige løsning hvis du er ny og bare skal i gang. Det premium-setup hvis du jagter toppen.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Og alt det rigtige midt imellem — dér hvor de fleste af os bygger fra.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Plads til at opgradere over tid. Stykke for stykke. Uden at skulle starte forfra hver gang.
            </motion.p>
          </motion.div>
        </Prose>

        <Wide className="mt-16 md:mt-24 relative z-10">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
              <img src={REAR_WATER_IMG} alt="Golf 7 GTI bagparti ved vandet" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          REVIEWS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40">
        <Prose>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-foreground/75 text-xl md:text-2xl leading-[1.7] mb-14 md:mb-20"
          >
            Du er ikke den første der leder efter den balance. Det er dem hele webshoppen er bygget omkring.
          </motion.p>
        </Prose>

        <Wide>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-4 md:gap-5"
          >
            {[
              {
                text: "\"Super fed oplevelse. Bredt udvalg af kvalitetsprodukter og kundeservice i topklasse.\"",
                detail: "Golf VII GTI ejer",
              },
              {
                text: "\"Genialt at man direkte kan sortere efter sin bilmodel. Fandt præcis det der passede til min.\"",
                detail: "Google anmeldelse",
              },
              {
                text: "\"Jeg havde et par spørgsmål til fitment — svarene var hurtige og præcise.\"",
                detail: "Trustpilot",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/[0.02] border border-white/[0.06] rounded-sm p-6 md:p-7 hover:border-nc-red/20 transition-colors duration-500"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-nc-red text-nc-red" />
                  ))}
                </div>
                <p className="text-foreground/55 text-base md:text-lg leading-relaxed">{r.text}</p>
                <p className="text-foreground/25 text-xs mt-5 font-display uppercase tracking-[0.15em]">{r.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </Wide>
      </section>

      {/* Interior detail — breakout */}
      <section className="pb-28 md:pb-40">
        <Wide>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
              <img src={INTERIOR_IMG} alt="GTI interiør med carbon-rat" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 md:py-52 overflow-hidden">
        <div className="absolute inset-0">
          <img src={SILO_WIDE_IMG} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.06]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />

        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2
              variants={fadeIn}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-7"
            >
              Byg bilen der vinder respekten.<br />
              <span className="text-nc-red">Første gang.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-foreground/55 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
              Find det præcise setup til din model. Ingen gråtværk. Ingen dyre fejl. Kun dele der holder på banen og ved træf.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-[0.15em] text-sm px-12 py-7 rounded-sm group"
                onClick={() => window.open("https://nardocar.dk", "_blank")}
              >
                Find dit setup
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-2.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-nc-red text-nc-red" />
                ))}
              </div>
              <span className="text-foreground/40 text-sm">
                Vurderet <span className="text-foreground/60 font-medium">4,5 / 5</span> på Trustpilot
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/[0.05]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_WHITE} alt="Nardocar" className="h-5 md:h-6 opacity-30 hover:opacity-50 transition-opacity duration-300" />
          <p className="text-foreground/25 text-sm">Own Your Drive &mdash; nardocar.dk</p>
        </div>
      </footer>
    </div>
  );
}
