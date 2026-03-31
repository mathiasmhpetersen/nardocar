/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP1: "The Aesthetic Permission Slip" — Completely Unaware
 * Target: Den Visuelle Perfektionist (18-35, stance/fitment)
 *
 * SCHWARTZ UNAWARE STRATEGY:
 *   - No product, no price, no brand in headline
 *   - Identification headline: call the market together
 *   - Echo emotion/attitude that picks them from the crowd
 *   - Each paragraph pulls into the next — steady progression:
 *     identification → desire crystallization → solution at hand → product
 *   - Story approach: "They Laughed When I Sat Down at the Piano" pattern
 *   - Give words to a hidden dream they can't yet verbalize
 *
 * COPY STRUCTURE:
 *   1. Hero — Identification. Du er typen. Ingen produkt. Ingen brand.
 *   2. Story — Giv ord til drømmen. Mal scenen de lever i hver dag.
 *   3. Intensification — Projicér triumfen. Følelsen af resultatet.
 *   4. Social proof — Identifikation, ikke produktanmeldelser.
 *   5. Broen — NU introducerer vi Nardocar. Sent. Fortjent.
 *   6. CTA + Trust signals.
 *
 * COPY TONE: Talesprog. Kan siges højt. Kort-lang sætningsvariation.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-aesthetic-dp93ZJGU8T7VyqW7SDnuxn.webp";
const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/before-after-stance-oUubxCSbiMa4cDApkpRvfr.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/social-proof-gallery-ih8XJeC59fzCv7Jk5iSEGZ.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AestheticLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Identification. Call the market together.
          Schwartz: "You are echoing an emotion, an attitude, a
          satisfaction that picks people out from the crowd."
          No product. No brand. Just: I see you.
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src={HERO_IMG}
            alt="Stancet bil under dramatisk garagebelysning"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        <div className="relative z-10 container pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" as const }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-6">
              Du ser det<br />
              <span className="text-nc-red">ingen andre ser.</span>
            </h1>
            <p className="text-foreground/65 text-lg md:text-xl max-w-xl leading-relaxed mb-2">
              Og du har aldrig kunnet lade være.
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
          SECTION 2: THE HIDDEN DREAM — Give words to what they feel
          but have never said out loud. Story approach.
          Schwartz: "You are telling them who they are. You are
          defining them for themselves."
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
              Hver gang du ser en bil{" "}
              <span className="text-nc-red">ser du alt det den kunne være.</span>
            </h2>
            <div className="space-y-5 text-foreground/65 text-lg md:text-xl leading-relaxed">
              <p>
                Du kører bag en tilfældig bil i trafikken. Du lægger mærke til
                hvordan den sidder. For højt. For kedeligt. Og du tænker:
                med de rigtige fælge, lidt lavere, lidt bredere — den bil
                ville være en helt anden.
              </p>
              <p>
                Du gør det hele tiden. Du kan ikke lade være.
              </p>
              <p>
                Du zoomer ind på billeder online og checker om hjulene sidder
                flush med skærmkanten. Du scroller forbi hundrede biler
                og stopper kun ved dem der har <em>det der</em>.
              </p>
              <p className="text-foreground/80 font-medium">
                Det er ikke noget du har lært.<br />
                Det er noget du bare har.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: PROJECT THE TRIUMPH — Paint the result they want.
          Schwartz: "Projecting an ultimate triumph that the
          prospect will identify with."
          Still no product. Just the vision realized.
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
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                Så forestil dig{" "}
                <span className="text-nc-red">den dag det er din.</span>
              </h2>
              <div className="space-y-5 text-foreground/65 text-lg leading-relaxed">
                <p>
                  Du drejer nøglen. Bakker ud. Og for første gang
                  ser din bil ud præcis som du altid har set den
                  for dit indre blik.
                </p>
                <p>
                  Du ruller ned ad gaden. Nogen drejer hovedet.
                  Og du ved godt hvorfor. Ikke fordi den er hurtig.
                  Ikke fordi den er dyr.
                </p>
                <p>
                  Men fordi den endelig er <em>rigtig</em>.
                </p>
                <p className="text-foreground/80 font-medium">
                  Det der sidder i maven — den uro mellem hvad din bil er
                  og hvad den kunne være — den forsvinder.
                  Fordi mellemrummet er lukket.
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
                  alt="Før og efter stance transformation"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">Før</span>
              </div>
              <div className="absolute top-4 right-4 bg-nc-red backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-white font-semibold">Efter</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: IDENTIFICATION PROOF — Not product reviews.
          People who felt exactly what YOU feel — and acted on it.
          Schwartz: Identification, not desire. Show them people
          like themselves.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative grain-overlay">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Du er ikke den eneste<br />
              <span className="text-nc-red">der tænker sådan.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed max-w-2xl">
              De her mennesker gik rundt med det samme blik. Det samme jag.
              Den samme uro over en bil der ikke helt var <em>deres</em> endnu.
              Indtil den var.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative max-w-5xl"
          >
            <img
              src={GALLERY_IMG}
              alt="Galleri af modificerede biler fra communityet"
              className="w-full h-auto rounded-sm"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl"
          >
            {[
              {
                quote: "Jeg kunne altid se det for mig. Problemet var aldrig visionen — det var at finde nogen der forstod den.",
                name: "Mikkel S.",
                car: "VW Golf MK7",
              },
              {
                quote: "Folk siger 'det er bare en bil.' Men det er det eneste i mit liv der er 100% mit eget udtryk. Hver eneste detalje.",
                name: "Jonas K.",
                car: "BMW E46",
              },
              {
                quote: "Den dag jeg parkerede den og bare stod og gloede — det var den dag jeg vidste at det hele var det værd.",
                name: "Emil R.",
                car: "Audi A4 B8",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="border border-border/40 rounded-sm p-6 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-nc-red text-nc-red" />
                  ))}
                </div>
                <p className="text-foreground/75 text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-foreground/90 text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.car}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: THE BRIDGE — Inspiration, not sales.
          Unaware prospects aren't ready to buy. They're ready to dream.
          Email capture: low commitment, high relevance.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Vil du se hvad{" "}
              <span className="text-nc-red">andre har bygget?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Skriv din bilmodel. Vi sender dig builds der matcher — ingen spam, ingen salg. Bare inspiration.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="text"
                placeholder="Hvilken bil har du?"
                className="flex-1 bg-card border border-border/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-nc-red/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Din email"
                className="flex-1 bg-card border border-border/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-nc-red/50 transition-colors"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-6 py-3 rounded-sm whitespace-nowrap"
              >
                Send mig builds
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
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
