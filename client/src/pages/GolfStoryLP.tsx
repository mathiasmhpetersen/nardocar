/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP: "Golf Story" — Customer Awareness Journey (all stages)
 *
 * VISUAL APPROACH:
 *   - Cinematic full-bleed hero with parallax
 *   - Alternating layouts: narrow prose → wide imagery → narrow prose
 *   - Dramatic blockquotes breaking wider than text column
 *   - Reading progress bar
 *   - Two-column sections for visual variety
 *   - Full-screen typographic moments
 *   - Grain overlays on alternating sections
 */
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/white-golf-gti-headlight_f066fbc7.jpg";
const STOCK_VS_MODIFIED_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/golf-stock-vs-modified_d0221e14.webp";
const PHONE_SCROLLING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/phone-scrolling-real_91a39a0c.webp";
const COILOVER_DETAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/coilover-detail-KShpoFbf8ScvjJWBhA62zr.webp";
const GARAGE_BUILD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/real-garage-build_94d4888d.jpeg";
const WHITE_GOLF_SIDE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/white-golf-side_6430fdf9.webp";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";

/* ── Shared animation config ── */
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

/* ── Prose wrapper for consistent text styling ── */
function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[700px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;
}

/* ── Wide wrapper for images that break out of prose ── */
function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function GolfStoryLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const compRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress: heroY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroY, [0, 1], ["0%", "25%"]);
  const heroFade = useTransform(heroY, [0, 0.7], [1, 0]);

  const { scrollYProgress: compY } = useScroll({ target: compRef, offset: ["start end", "end start"] });
  const compImgY = useTransform(compY, [0, 1], ["4%", "-4%"]);

  const { scrollYProgress: pageY } = useScroll();
  useMotionValueEvent(pageY, "change", setProgress);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Progress bar ── */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-nc-red z-50 origin-left" style={{ scaleX: progress }} />

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[100svh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img src={HERO_IMG} alt="Hvid Golf GTI i mørke" className="w-full h-[130%] object-cover object-[50%_30%]" />
        </motion.div>
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <motion.div className="relative z-10 w-full pb-12 sm:pb-16 md:pb-24 lg:pb-32" style={{ opacity: heroFade }}>
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight max-w-[900px]"
            >
              "Jeg troede min bil var perfekt.{" "}
              <span className="text-nc-red">Så parkerede jeg ved siden af hans."</span>
            </motion.h1>
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
          BEGINNING — Unaware. Pride in the car.
      ════════════════════════════════════════════════════════════ */}
      <section className="pt-28 pb-20 md:pt-44 md:pb-32 relative grain-overlay">
        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Jeg købte min Golf 7 GTI da jeg var 20. Min første bil, betalt med mine egne penge fra jobbet ved siden af min læreplads. Jeg var så glad.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Vaskede den hver weekend. Støvsugede sæderne. Havde en luftfrisker i bakspejlet.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Jeg kørte den på arbejde, i fitness, hen til mine venner. Og rundt for hyggen. Det var en bil. Men det var <span className="text-foreground font-medium">min</span> bil. Og jeg elskede den — og hele den frihedsfølelse den gav.
            </motion.p>
          </motion.div>
        </Prose>

        {/* Headlight close-up — wide breakout */}
        <Wide className="mt-16 md:mt-24">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
              <img src={HERO_IMG} alt="Golf GTI forlygte" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
            </div>
          </motion.div>
        </Wide>

        {/* The seed — one short paragraph */}
        <Prose className="mt-16 md:mt-24">
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-foreground/50 text-xl md:text-2xl leading-[1.7]">
            Jeg tænkte ikke over modificeringer. Stance, fitment, wheel gap — det var ord jeg scrollede forbi på Instagram. Min bil kørte fint. Hvorfor skulle jeg lave noget om?
          </motion.p>
        </Prose>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE MOMENT — Parking next to a modified Golf
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44">
        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8 mb-16 md:mb-24">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Så en torsdag aften tog jeg ud til et car meet. Parkerede lige ved siden af en anden Golf. Samme farve. Samme årgang. Samme model.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Og da jeg gik ud og stillede mig og kiggede på dem begge to, tænkte jeg:
            </motion.p>
            <motion.p variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
              "F***, min bil er kedelig."
            </motion.p>
          </motion.div>
        </Prose>

        {/* Wide comparison image — the key moment */}
        <Wide>
          <div ref={compRef} className="overflow-hidden">
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
                <motion.img src={STOCK_VS_MODIFIED_IMG} alt="Stock Golf vs. modificeret Golf" className="w-full h-full object-cover" style={{ y: compImgY }} />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />
              </div>
            </motion.div>
          </div>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-foreground/35 text-base md:text-lg mt-5 text-center font-display tracking-wide">
            Hans Golf så fed ud. Fik min til at ligne en bil som min bedstemor ville køre i.
          </motion.p>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE REALIZATION — Dramatic blockquote
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative grain-overlay">
        <Prose className="relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Det var der jeg lagde mærke til det for første gang. Mellemrummet mellem dækkene og skærmkasserne. Wheel gap. Jeg havde aldrig tænkt over det — fordi jeg aldrig havde set min bil ved siden af en der var gjort ordentligt.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Pludselig føltes min bil ikke som min længere. Den så præcis ud som den dag den rullede ud af fabrikken. En fabriksindstilling.
            </motion.p>
          </motion.div>
        </Prose>

        {/* Blockquote — breaks wider than prose */}
        <Wide className="my-16 md:my-24 relative z-10">
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
              En stock bil er ikke din.<br />
              Den er fabrikkens.<br />
              <span className="text-nc-red">Den siger intet om hvem du er.</span>
            </p>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE RABBIT HOLE — Two columns: phone + text
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44">
        <Wide>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-foreground/75 text-xl md:text-2xl leading-[1.7] max-w-[700px] mb-16 md:mb-24">
            Den aften lå jeg i sengen og scrollede. Instagram. YouTube. Forums. Modificerede Golfer overalt. Og nu kunne jeg ikke un-see det. Min bil var kedelig.
          </motion.p>

          <div className="grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-center">
            {/* Phone image */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="relative">
              <div className="absolute -inset-16 bg-blue-400/[0.03] rounded-full blur-3xl" />
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] max-w-[380px] mx-auto lg:mx-0">
                <img src={PHONE_SCROLLING_IMG} alt="Scroller gennem bil-content" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
              <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
                Jeg vidste jeg skulle gøre noget ved bilen. Det var det mest åbenlyse behov. Men internettet var et minefelt.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
                Nogle sagde "køb billige coilovers/sænkningsfjeder, det er fint." Andre advarede om sprængte støddæmpere, ødelagt komfort og en kørsel så hård at det raslede tænderne ud af hovedet.
              </motion.p>
            </motion.div>
          </div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE FEAR — Two columns reversed: text + coilover
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative grain-overlay">
        <Wide className="relative z-10">
          <div className="grid lg:grid-cols-[6fr_5fr] gap-10 lg:gap-16 items-center">
            {/* Text */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8 order-2 lg:order-1">
              <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
                Men jeg kunne heller ikke ødelægge komforten. Og jeg havde ikke råd til at dumpe synet fordi jeg manglede papirerne.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
                Jeg vidste at et ordentligt coilover-kit var vejen — så jeg selv kunne justere droppet præcis som jeg ville. Men jeg var bange for at lave en dyr fejl.
              </motion.p>
              <motion.div variants={staggerFast} className="space-y-4 pt-2">
                {[
                  "Hvad nu hvis de ikke passer til min model?",
                  "Hvad nu hvis kørslen bliver ødelagt?",
                  "Hvad nu hvis jeg bruger alle de penge og ender med at hade min bil?",
                ].map((q) => (
                  <motion.p key={q} variants={fadeUp} className="text-foreground/35 text-lg md:text-xl leading-relaxed italic">
                    {q}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Coilover image */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
                <img src={COILOVER_DETAIL_IMG} alt="Coilover detalje" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE DISCOVERY — Nardocar mention + blockquote
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44">
        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Det var der en kammerat fortalte mig om Nardocar.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Han sagde ikke bare "de sælger bildele." Han sagde: "De har det rigtige, og de skal nok hjælpe dig."
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              Jeg gik ind på deres side. De pushede ikke "højeste kvalitet" og "billigste priser." De fattede præcis det jeg gik og tænkte på.
            </motion.p>
          </motion.div>
        </Prose>

        <Wide className="my-16 md:my-24">
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
              Det rigtige setup. Første gang.<br />
              <span className="text-nc-red">Ingen gråtværk. Ingen dyre fejl.</span>
            </p>
          </motion.div>
        </Wide>

        <Prose>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-8">
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              De havde det præcise coilover-kit til min Golf. Fuldt justerbart. Og de havde rigtige mennesker man kunne snakke med der kendte min karre — så man ikke endte med dele til den forkerte årgang.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
              De solgte ikke bare metal og fjeder. De forstod hele processen, så jeg endelig kunne tage en beslutning.
            </motion.p>
          </motion.div>
        </Prose>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          SOCIAL PROOF — Reviews woven into the narrative
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative grain-overlay">
        <Prose className="relative z-10">
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-foreground/75 text-xl md:text-2xl leading-[1.7] mb-14 md:mb-20">
            Jeg var på vippen. Det var mange penge for mig. Men så kiggede jeg anmeldelserne fra andre som mig.
          </motion.p>
        </Prose>

        <Wide className="relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { text: "\"Super fed oplevelse at handle hos Nardocar. Bredt udvalg af kvalitetsprodukter og kundeservice i topklasse. Kan varmt anbefales.\"", detail: "Golf VII GTI ejer" },
              { text: "\"Genialt at man direkte kan sortere efter sin bilmodel. Fandt præcis det der passede til min.\"", detail: "Google anmeldelse" },
              { text: "\"Jeg havde et par spørgsmål til fitment — svarene var hurtige og præcise. Fantastisk kundeservice.\"", detail: "Trustpilot" },
            ].map((r, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/[0.02] border border-white/[0.06] rounded-sm p-6 md:p-7 hover:border-nc-red/20 transition-colors duration-500">
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

        <Prose className="mt-14 md:mt-20 relative z-10">
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
            Noget klikkede. Det her var ikke bare endnu en random webshop. De vidste hvad de lavede. Og deres kundeservice var faktisk i top. Det føltes som at have en makker der kendte sit kram.
          </motion.p>
        </Prose>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE DECISION — Full-screen typographic moment
      ════════════════════════════════════════════════════════════ */}
      <section className="py-36 md:py-52 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-center px-6"
        >
          Så jeg trykkede på knappen.
        </motion.p>
      </section>

      {/* ════════════════════════════════════════════════════════════
          THE BUILD — Garage image cinematic
      ════════════════════════════════════════════════════════════ */}
      <section className="pb-28 md:pb-44">
        <Prose>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-foreground/75 text-xl md:text-2xl leading-[1.7] mb-14 md:mb-20">
            Da kasserne landede, føltes hele byggeprocessen som en belønning i sig selv.
          </motion.p>
        </Prose>

        <Wide>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/10] md:aspect-[16/9]">
              <img src={GARAGE_BUILD_IMG} alt="Golf GTI under opbygning" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </Wide>

        <Prose className="mt-14 md:mt-20">
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-foreground/75 text-xl md:text-2xl leading-[1.7]">
            Og det øjeblik vi spændte coiloversne... Droppet var perfekt. Wheel gap'et var væk. Stancen var præcis hvad jeg havde forestillet mig.
          </motion.p>
        </Prose>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          THE RESULT — Emotional climax
      ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative grain-overlay">
        <Wide className="relative z-10 mb-16 md:mb-24">
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
              Næste morgen gik jeg ud med min kaffe, kiggede på indkørslen og smilede.
              <br className="hidden md:block" />{" "}
              For første gang var det ikke Volkswagens bil.<br />
              Det var <span className="text-nc-red">min bil.</span>
            </p>
          </motion.div>
        </Wide>

        <Wide className="relative z-10">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="relative overflow-hidden rounded-sm aspect-[16/9] md:aspect-[2.2/1]">
              <img src={WHITE_GOLF_SIDE_IMG} alt="Færdig hvid Golf GTI" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
            </div>
          </motion.div>
        </Wide>
      </section>

      <div className="red-streak" />

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 md:py-48 overflow-hidden">
        {/* Ghost background */}
        <div className="absolute inset-0">
          <img src={WHITE_GOLF_SIDE_IMG} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.05]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />

        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeIn} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Din bil er færdig.<br />
              <span className="text-nc-red">Looket er ikke.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-foreground/50 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-12">
              Hvis du stadig kører i fabriksindstilling, er det tid til at ændre det. Du behøver ikke retfærdiggøre det med performance. Det er okay at ville have den til at se godt ud.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-[0.15em] text-sm px-12 py-7 rounded-sm group"
                onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
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

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-white/[0.05]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_WHITE} alt="Nardocar" className="h-5 md:h-6 opacity-30 hover:opacity-50 transition-opacity duration-300" />
          <p className="text-foreground/25 text-sm">Own Your Drive &mdash; nardocar.dk</p>
        </div>
      </footer>
    </div>
  );
}
