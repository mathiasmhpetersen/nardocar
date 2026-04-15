/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP: "Golf Story" — Customer Awareness Journey (all stages)
 * Target: Golf GTI owners who haven't yet realized they want to modify
 *
 * PURPOSE:
 *   This page does NOT sell Nardocar or its products directly.
 *   It tells a first-person story from a customer's perspective,
 *   guiding readers through every awareness stage:
 *     Unaware → Problem Aware → Solution Aware → Product Aware → Most Aware
 *
 * VISUAL DESIGN:
 *   - Cinematic full-bleed imagery with parallax
 *   - Editorial long-form storytelling layout
 *   - Dramatic blockquotes with red accent glow
 *   - Reading progress indicator
 *   - Alternating image sizes (intimate vs. cinematic)
 *   - Generous whitespace for breathing room
 *   - Staggered text reveals on scroll
 *
 * COPY TONE: First person, conversational Danish. Short paragraphs.
 *   Like talking to a friend, not selling. Emotional, not transactional.
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

/* ── Animation variants ── */

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeInSlow = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

/* ── Component ── */

export default function GolfStoryLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const ctaImageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const { scrollYProgress: comparisonProgress } = useScroll({
    target: comparisonRef,
    offset: ["start end", "end start"],
  });
  const comparisonImgY = useTransform(comparisonProgress, [0, 1], ["5%", "-5%"]);

  const { scrollYProgress: ctaImgProgress } = useScroll({
    target: ctaImageRef,
    offset: ["start end", "end start"],
  });
  const ctaImgY = useTransform(ctaImgProgress, [0, 1], ["8%", "-8%"]);

  const { scrollYProgress: pageProgress } = useScroll();
  useMotionValueEvent(pageProgress, "change", (v) => setScrollProgress(v));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Reading progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-nc-red z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Cinematic full-screen with centered quote
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[100svh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src={HERO_IMG}
            alt="Hvid Golf GTI parkeret i mørke"
            className="w-full h-[125%] object-cover object-top md:object-center"
          />
        </motion.div>
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />

        <motion.div
          className="relative z-10 container pb-16 sm:pb-20 md:pb-28 lg:pb-32"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight">
              "Jeg troede min bil
              <br className="hidden sm:block" />{" "}
              var perfekt.{" "}
              <span className="text-nc-red">
                Så parkerede jeg
                <br className="hidden md:block" />{" "}
                ved siden af hans."
              </span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-foreground/25" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE BEGINNING — Pride in the car. Unaware stage.
          Intimate centered prose with a warm image.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 relative grain-overlay">
        <div className="container relative z-10 max-w-[680px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-7"
          >
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Jeg købte min Golf 7 GTI da jeg var 20. Min første bil, betalt med mine egne penge fra jobbet ved siden af min læreplads. Jeg var så glad.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Vaskede den hver weekend. Støvsugede sæderne. Havde en luftfrisker i bakspejlet.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Jeg kørte den på arbejde, i fitness, hen til mine venner. Og rundt for hyggen. Det var en bil. Men det var <em className="text-foreground/90 not-italic font-medium">min</em> bil. Og jeg elskede den — og hele den frihedsfølelse den gav.
            </motion.p>
          </motion.div>

          {/* Intimate headlight close-up */}
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 md:mt-20"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src={HERO_IMG}
                alt="Hvid Golf GTI forlygte tæt på"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE SEED — One-liner that plants the doubt
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28">
        <div className="container max-w-[680px]">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-foreground/55 text-lg md:text-[1.35rem] leading-[1.75] font-body"
          >
            Jeg tænkte ikke over modificeringer. Stance, fitment, wheel gap — det var ord jeg scrollede forbi på Instagram. Min bil kørte fint. Hvorfor skulle jeg lave noget om?
          </motion.p>
        </div>
      </section>

      <div className="red-streak" />

      {/* ═══════════════════════════════════════════════════════════════
          THE MOMENT — Cinematic full-width comparison.
          This is the turning point. Make it big.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40">
        <div className="container max-w-[680px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-7 mb-16 md:mb-24"
          >
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Så en torsdag aften tog jeg ud til et car meet. Parkerede lige ved siden af en anden Golf. Samme farve. Samme årgang. Samme model.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Og da jeg gik ud og stillede mig og kiggede på dem begge to, tænkte jeg:
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-foreground pt-2"
            >
              "F***, min bil er kedelig."
            </motion.p>
          </motion.div>
        </div>

        {/* Full-width cinematic comparison image */}
        <div ref={comparisonRef} className="relative overflow-hidden">
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="container max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[16/9] md:aspect-[21/9]">
              <motion.img
                src={STOCK_VS_MODIFIED_IMG}
                alt="Stock Golf vs. modificeret Golf side om side i parkeringskælder"
                className="w-full h-full object-cover"
                style={{ y: comparisonImgY }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm pointer-events-none" />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        <div className="container max-w-[680px]">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-foreground/40 text-sm md:text-base mt-5 md:mt-6 font-display tracking-wide"
          >
            Hans Golf så fed ud. Fik min til at ligne en bil som min bedstemor ville køre i.
          </motion.p>
        </div>
      </section>

      <div className="red-streak mx-6 md:mx-12" />

      {/* ═══════════════════════════════════════════════════════════════
          THE REALIZATION — Big dramatic blockquote
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 relative">
        <div className="container max-w-[680px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-7 mb-16 md:mb-24"
          >
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Det var der jeg lagde mærke til det for første gang. Mellemrummet mellem dækkene og skærmkasserne. Wheel gap. Jeg havde aldrig tænkt over det — fordi jeg aldrig havde set min bil ved siden af en der var gjort ordentligt.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Pludselig føltes min bil ikke som min længere. Den så præcis ud som den dag den rullede ud af fabrikken. En fabriksindstilling.
            </motion.p>
          </motion.div>
        </div>

        {/* Dramatic blockquote — breaks wider than prose */}
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeInSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative py-12 md:py-16 px-8 md:px-14"
          >
            {/* Red glow behind the quote */}
            <div className="absolute inset-0 bg-nc-red/[0.03] rounded-sm" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-nc-red rounded-full" />
            <p className="relative font-display text-[1.5rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-foreground">
              En stock bil er ikke din.
              <br />
              Den er fabrikkens.
              <br />
              <span className="text-nc-red">Den siger intet om hvem du er.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE RABBIT HOLE — Phone glow in the dark
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 relative grain-overlay">
        <div className="container relative z-10">
          <div className="max-w-[680px] mx-auto md:mx-0">
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body"
            >
              Den aften lå jeg i sengen og scrollede. Instagram. YouTube. Forums. Modificerede Golfer overalt. Og nu kunne jeg ikke un-see det. Min bil var kedelig.
            </motion.p>
          </div>

          {/* Two-column layout: phone image + text */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16 md:mt-24">
            {/* Phone image with glow effect */}
            <motion.div
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative max-w-sm mx-auto lg:mx-0 order-1"
            >
              {/* Ambient glow from phone screen */}
              <div className="absolute -inset-12 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                <img
                  src={PHONE_SCROLLING_IMG}
                  alt="Person der scroller gennem bil-content på telefonen sent om aftenen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm pointer-events-none" />
              </div>
            </motion.div>

            {/* Continuation of the story */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-7 order-2"
            >
              <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
                Jeg vidste jeg skulle gøre noget ved bilen. Det var det mest åbenlyse behov. Men internettet var et minefelt.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
                Nogle sagde "køb billige coilovers/sænkningsfjeder, det er fint." Andre advarede om sprængte støddæmpere, ødelagt komfort og en kørsel så hård at det raslede tænderne ud af hovedet.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-6 md:mx-12" />

      {/* ═══════════════════════════════════════════════════════════════
          THE FEAR — Doubts cascade. Coilover detail as texture.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Prose side */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-7 order-2 lg:order-1"
            >
              <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
                Men jeg kunne heller ikke ødelægge komforten. Og jeg havde ikke råd til at dumpe synet fordi jeg manglede papirerne.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
                Jeg vidste at et ordentligt coilover-kit var vejen — så jeg selv kunne justere droppet præcis som jeg ville. Men jeg var bange for at lave en dyr fejl.
              </motion.p>

              {/* Stacked doubt questions with stagger */}
              <motion.div variants={staggerFast} className="space-y-3 pt-4">
                {[
                  "Hvad nu hvis de ikke passer til min model?",
                  "Hvad nu hvis kørslen bliver ødelagt?",
                  "Hvad nu hvis jeg bruger alle de penge og ender med at hade min bil?",
                ].map((q) => (
                  <motion.p
                    key={q}
                    variants={fadeUp}
                    className="text-foreground/40 text-lg md:text-xl leading-relaxed italic font-body"
                  >
                    {q}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Coilover close-up — tall aspect ratio, moody */}
            <motion.div
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] max-w-md mx-auto lg:max-w-none">
                <img
                  src={COILOVER_DETAIL_IMG}
                  alt="Coilover detalje close-up, gylden belysning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm pointer-events-none" />
                {/* Warm glow from the workshop light */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-6 md:mx-12" />

      {/* ═══════════════════════════════════════════════════════════════
          THE DISCOVERY — Soft Nardocar mention. Turning point.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40">
        <div className="container max-w-[680px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-7"
          >
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Det var der en kammerat fortalte mig om Nardocar.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Han sagde ikke bare "de sælger bildele." Han sagde: "De har det rigtige, og de skal nok hjælpe dig."
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              Jeg gik ind på deres side. De pushede ikke "højeste kvalitet" og "billigste priser." De fattede præcis det jeg gik og tænkte på.
            </motion.p>
          </motion.div>
        </div>

        {/* Blockquote — wider than prose for visual break */}
        <div className="container max-w-4xl">
          <motion.div
            variants={fadeInSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative py-12 md:py-16 px-8 md:px-14 my-16 md:my-24"
          >
            <div className="absolute inset-0 bg-nc-red/[0.03] rounded-sm" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-nc-red rounded-full" />
            <p className="relative font-display text-[1.5rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-foreground">
              Det rigtige setup. Første gang.
              <br />
              <span className="text-nc-red">Ingen gråtværk. Ingen dyre fejl.</span>
            </p>
          </motion.div>
        </div>

        <div className="container max-w-[680px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-7"
          >
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              De havde det præcise coilover-kit til min Golf. Fuldt justerbart. Og de havde rigtige mennesker man kunne snakke med der kendte min karre — så man ikke endte med dele til den forkerte årgang.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body">
              De solgte ikke bare metal og fjeder. De forstod hele processen, så jeg endelig kunne tage en beslutning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-6 md:mx-12" />

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF — Glassmorphism review cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 relative grain-overlay">
        <div className="container relative z-10 max-w-[680px]">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body mb-12 md:mb-16"
          >
            Jeg var på vippen. Det var mange penge for mig. Men så kiggede jeg anmeldelserne fra andre som mig.
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4 md:space-y-5"
          >
            {[
              {
                text: "\"Super fed oplevelse at handle hos Nardocar. De har et bredt udvalg af kvalitetsprodukter og en kundeservice i topklasse. Kan varmt anbefales.\"",
                detail: "Trustpilot anmeldelse, Golf VII GTI ejer",
              },
              {
                text: "\"Genialt at man direkte kan sortere efter sin bilmodel. Fandt præcis det der passede til min.\"",
                detail: "Google anmeldelse",
              },
              {
                text: "\"Jeg havde et par spørgsmål til fitment — svarene var hurtige og præcise. Fantastisk kundeservice. God oplevelse!\"",
                detail: "Trustpilot anmeldelse",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-sm p-6 md:p-8 hover:border-nc-red/20 transition-colors duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-nc-red text-nc-red" />
                  ))}
                </div>
                <p className="text-foreground/60 text-[0.95rem] md:text-base leading-relaxed font-body">
                  {review.text}
                </p>
                <p className="text-foreground/30 text-xs mt-4 font-display uppercase tracking-[0.15em]">
                  {review.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body mt-12 md:mt-16"
          >
            Noget klikkede. Det her var ikke bare endnu en random webshop. De vidste hvad de lavede. Og deres kundeservice var faktisk i top. Det føltes som at have en makker der kendte sit kram.
          </motion.p>
        </div>
      </section>

      <div className="red-streak mx-6 md:mx-12" />

      {/* ═══════════════════════════════════════════════════════════════
          THE DECISION — Full-screen typographic moment
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 flex items-center justify-center">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            Så jeg trykkede på knappen.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE BUILD — Cinematic garage image + short prose
      ═══════════════════════════════════════════════════════════════ */}
      <section className="pb-24 md:pb-40">
        <div className="container max-w-[680px]">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body mb-12 md:mb-16"
          >
            Da kasserne landede, føltes hele byggeprocessen som en belønning i sig selv.
          </motion.p>
        </div>

        {/* Wide garage build image */}
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="container max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[16/10] md:aspect-[16/9]">
            <img
              src={GARAGE_BUILD_IMG}
              alt="Golf GTI under opbygning i garagen, dele spredt ud"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <div className="container max-w-[680px]">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-foreground/70 text-lg md:text-[1.35rem] leading-[1.75] font-body mt-12 md:mt-16"
          >
            Og det øjeblik vi spændte coiloversne... Droppet var perfekt. Wheel gap'et var væk. Stancen var præcis hvad jeg havde forestillet mig.
          </motion.p>
        </div>
      </section>

      <div className="red-streak mx-6 md:mx-12" />

      {/* ═══════════════════════════════════════════════════════════════
          THE RESULT — Emotional climax. Big quote + final car image.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40">
        {/* Big emotional blockquote */}
        <div className="container max-w-4xl mb-16 md:mb-24">
          <motion.div
            variants={fadeInSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative py-12 md:py-16 px-8 md:px-14"
          >
            <div className="absolute inset-0 bg-nc-red/[0.03] rounded-sm" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-nc-red rounded-full" />
            <p className="relative font-display text-[1.5rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-foreground">
              Næste morgen gik jeg ud med min kaffe, kiggede på indkørslen og smilede.
              <br className="hidden md:block" />{" "}
              For første gang var det ikke Volkswagens bil.
              <br />
              Det var <span className="text-nc-red">min bil.</span>
            </p>
          </motion.div>
        </div>

        {/* Final car — wide and triumphant */}
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="container max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[16/9] md:aspect-[2.2/1]">
            <img
              src={WHITE_GOLF_SIDE_IMG}
              alt="Færdig hvid Golf GTI med perfekt stance, sidelinje"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm pointer-events-none" />
          </div>
        </motion.div>
      </section>

      <div className="red-streak" />

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — Background image with overlay
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={ctaImageRef} className="relative py-32 md:py-44 overflow-hidden grain-overlay">
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: ctaImgY }}>
          <img
            src={WHITE_GOLF_SIDE_IMG}
            alt=""
            aria-hidden="true"
            className="w-full h-[120%] object-cover object-center opacity-[0.07]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />

        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeIn}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Din bil er færdig.
              <br />
              <span className="text-nc-red">Looket er ikke.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-foreground/55 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10 font-body"
            >
              Hvis du stadig kører i fabriksindstilling, er det tid til at ændre det. Du behøver ikke retfærdiggøre det med performance. Det er okay at ville have den til at se godt ud.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-[0.15em] text-sm px-10 py-6 rounded-sm group"
                onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
              >
                Find dit setup
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center justify-center gap-2.5"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-nc-red text-nc-red" />
                ))}
              </div>
              <span className="text-foreground/40 text-sm font-body">
                Vurderet <span className="text-foreground/60 font-medium">4,5 / 5</span> på Trustpilot
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-white/[0.06]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={LOGO_WHITE}
            alt="Nardocar"
            className="h-5 md:h-6 opacity-40 hover:opacity-60 transition-opacity duration-300"
          />
          <p className="text-foreground/30 text-sm font-body">
            Own Your Drive &mdash; nardocar.dk
          </p>
        </div>
      </footer>
    </div>
  );
}
