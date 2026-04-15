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
 * STRUCTURE:
 *   1. Hero — Provocative quote. "I thought my car was perfect."
 *   2. The beginning — Personal story, pride in the car
 *   3. The moment — Parking next to a modified Golf. Seeing the gap.
 *   4. The realization — "A stock car isn't yours. It's the factory's."
 *   5. The rabbit hole — Scrolling, researching, getting overwhelmed
 *   6. The fear — What if parts don't fit? What if it goes wrong?
 *   7. The discovery — Finding the right place (soft Nardocar mention)
 *   8. The build — The process, the feeling
 *   9. The result — "For the first time, it wasn't Volkswagen's car. It was mine."
 *  10. CTA — "Your car is done. The look isn't." Soft link.
 *
 * COPY TONE: First person, conversational Danish. Short paragraphs.
 *   Like talking to a friend, not selling. Emotional, not transactional.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/white-golf-gti-headlight_f066fbc7.jpg";
const STOCK_VS_MODIFIED_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/golf-stock-vs-modified_d0221e14.webp";
const PHONE_SCROLLING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/phone-scrolling-real_91a39a0c.webp";
const COILOVER_DETAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/coilover-detail-KShpoFbf8ScvjJWBhA62zr.webp";
const GARAGE_BUILD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/real-garage-build_94d4888d.jpeg";
const WHITE_GOLF_SIDE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/TpSm9K3DjQUQomASPiH9zw/white-golf-side_6430fdf9.webp";

const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function GolfStoryLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — The provocative quote
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src={HERO_IMG}
            alt="Hvid Golf GTI parkeret i mørke"
            className="w-full h-[120%] object-cover object-top md:object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="relative z-10 container text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto">
              "Jeg troede min bil var perfekt.{" "}
              <span className="text-nc-red">Så parkerede jeg ved siden af hans."</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/30" />
        </motion.div>
      </section>

      <div className="red-streak" />

      {/* ═══════════════════════════════════════════════════════════════
          THE BEGINNING — Pride in the car. Unaware stage.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg købte min Golf 7 GTI da jeg var 20. Min første bil, betalt med mine egne penge fra jobbet ved siden af min læreplads. Jeg var så glad.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Vaskede den hver weekend. Støvsugede sæderne. Havde en luftfrisker i bakspejlet.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg kørte den på arbejde, i fitness, hen til mine venner. Og rundt for hyggen. Det var en bil. Men det var <em>min</em> bil. Og jeg elskede den — og hele den frihedsfølelse den gav.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-sm max-w-md mx-auto">
              <img
                src={HERO_IMG}
                alt="Hvid Golf GTI forlygte tæt på"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE SEED — First exposure to modifications. Still unaware.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg tænkte ikke over modificeringer. Stance, fitment, wheel gap — det var ord jeg scrollede forbi på Instagram. Min bil kørte fint. Hvorfor skulle jeg lave noget om?
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          THE MOMENT — Parking next to a modified Golf. Problem aware.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Så en torsdag aften tog jeg ud til et car meet. Parkerede lige ved siden af en anden Golf. Samme farve. Samme årgang. Samme model.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Og da jeg gik ud og stillede mig og kiggede på dem begge to, tænkte jeg:
            </p>
            <p className="text-foreground font-display text-2xl md:text-3xl font-bold leading-tight">
              "F***, min bil er kedelig."
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-sm max-w-xl mx-auto">
              <img
                src={STOCK_VS_MODIFIED_IMG}
                alt="Stock Golf vs. modificeret Golf side om side"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-foreground/50 text-sm mt-4 font-display">
              Hans Golf så fed ud. Fik min til at ligne en bil som min bedstemor ville køre i.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          THE REALIZATION — "A stock car isn't yours."
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Det var der jeg lagde mærke til det for første gang. Mellemrummet mellem dækkene og skærmkasserne. Wheel gap. Jeg havde aldrig tænkt over det — fordi jeg aldrig havde set min bil ved siden af en der var gjort ordentligt.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Pludselig føltes min bil ikke som min længere. Den så præcis ud som den dag den rullede ud af fabrikken. En fabriksindstilling.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="my-16 border-l-4 border-nc-red pl-6 md:pl-8"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              En stock bil er ikke din. Den er fabrikkens. Den siger intet om hvem du er.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE RABBIT HOLE — Scrolling, researching, getting overwhelmed
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Den aften lå jeg i sengen og scrollede. Instagram. YouTube. Forums. Modificerede Golfer overalt. Og nu kunne jeg ikke un-see det. Min bil var kedelig.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-sm max-w-sm mx-auto">
              <img
                src={PHONE_SCROLLING_IMG}
                alt="Person der scroller gennem bil-content på telefonen"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg vidste jeg skulle gøre noget ved bilen. Det var det mest åbenlyse behov. Men internettet var et minefelt.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Nogle sagde "køb billige coilovers/sænkningsfjeder, det er fint." Andre advarede om sprængte støddæmpere, ødelagt komfort og en kørsel så hård at det raslede tænderne ud af hovedet.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          THE FEAR — What if it goes wrong? Solution aware but stuck.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Men jeg kunne heller ikke ødelægge komforten. Og jeg havde ikke råd til at dumpe synet fordi jeg manglede papirerne.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg vidste at et ordentligt coilover-kit var vejen — så jeg selv kunne justere droppet præcis som jeg ville. Men jeg var bange for at lave en dyr fejl.
            </p>
            <p className="text-foreground/50 text-lg md:text-xl leading-relaxed italic">
              Hvad nu hvis de ikke passer til min model?
            </p>
            <p className="text-foreground/50 text-lg md:text-xl leading-relaxed italic">
              Hvad nu hvis kørslen bliver ødelagt?
            </p>
            <p className="text-foreground/50 text-lg md:text-xl leading-relaxed italic">
              Hvad nu hvis jeg bruger alle de penge og ender med at hade min bil?
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-sm max-w-md mx-auto">
              <img
                src={COILOVER_DETAIL_IMG}
                alt="Coilover detalje close-up"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          THE DISCOVERY — Finding help. Soft Nardocar mention.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Det var der en kammerat fortalte mig om Nardocar.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Han sagde ikke bare "de sælger bildele." Han sagde: "De har det rigtige, og de skal nok hjælpe dig."
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg gik ind på deres side. De pushede ikke "højeste kvalitet" og "billigste priser." De fattede præcis det jeg gik og tænkte på.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="my-16 border-l-4 border-nc-red pl-6 md:pl-8"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              Det rigtige setup. Første gang. Ingen gråtværk. Ingen dyre fejl.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              De havde det præcise coilover-kit til min Golf. Fuldt justerbart. Og de havde rigtige mennesker man kunne snakke med der kendte min karre — så man ikke endte med dele til den forkerte årgang.
            </p>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              De solgte ikke bare metal og fjeder. De forstod hele processen, så jeg endelig kunne tage en beslutning.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF — Quick reviews that feel organic
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Jeg var på vippen. Det var mange penge for mig. Men så kiggede jeg anmeldelserne fra andre som mig.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 space-y-4"
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
              <div
                key={i}
                className="bg-foreground/[0.03] border border-foreground/[0.06] rounded-sm p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-nc-red text-nc-red" />
                  ))}
                </div>
                <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                  {review.text}
                </p>
                <p className="text-foreground/35 text-xs mt-3 font-display uppercase tracking-wider">
                  {review.detail}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Noget klikkede. Det her var ikke bare endnu en random webshop. De vidste hvad de lavede. Og deres kundeservice var faktisk i top. Det føltes som at have en makker der kendte sit kram.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          THE DECISION — "Så jeg trykkede på knappen."
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Så jeg trykkede på knappen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE BUILD — The process, the feeling
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Da kasserne landede, føltes hele byggeprocessen som en belønning i sig selv.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-sm max-w-xl mx-auto">
              <img
                src={GARAGE_BUILD_IMG}
                alt="Golf GTI under opbygning i garage"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 space-y-6"
          >
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Og det øjeblik vi spændte coiloversne... Droppet var perfekt. Wheel gap'et var væk. Stancen var præcis hvad jeg havde forestillet mig.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          THE RESULT — The morning after
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="border-l-4 border-nc-red pl-6 md:pl-8"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              Næste morgen gik jeg ud med min kaffe, kiggede på indkørslen og smilede. For første gang var det ikke Volkswagens bil. Det var <span className="text-nc-red">min bil.</span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-sm max-w-xl mx-auto">
              <img
                src={WHITE_GOLF_SIDE_IMG}
                alt="Færdig hvid Golf GTI med perfekt stance"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — "Din bil er færdig. Looket er ikke."
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              Din bil er færdig.{" "}
              <span className="text-nc-red">Looket er ikke.</span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              Hvis du stadig kører i fabriksindstilling, er det tid til at ændre det. Du behøver ikke retfærdiggøre det med performance. Det er okay at ville have den til at se godt ud.
            </p>
            <Button
              size="lg"
              className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-10 py-6 rounded-sm"
              onClick={() => window.open("https://nardocar.dk/shop", "_blank")}
            >
              Find dit setup
            </Button>

            <div className="mt-10 flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-nc-red text-nc-red" />
                ))}
              </div>
              <span className="text-foreground/50 text-sm">
                Vurderet <span className="text-foreground/70 font-medium">4,5 / 5</span> på Trustpilot
              </span>
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
