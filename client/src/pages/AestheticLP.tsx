/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP1: "The Aesthetic Permission Slip" — Problem Unaware
 * Target: Den Visuelle Perfektionist (18-35, stance/fitment)
 *
 * COPY STRUCTURE (PDA — delayed brand reveal):
 *   1. Hero — Ren følelse. Ingen brand. Ingen produkt.
 *   2. Sandheden — Validér lysten. Agitér spændingen.
 *   3. Følelsen — Mal det ønskede resultat. Før/efter.
 *   4. Social proof — Rigtige builds, rigtige mennesker. Stadig intet salg.
 *   5. Broen — NU introducerer vi Nardocar.
 *   6. CTA + Trust signals.
 *
 * COPY TONE: Talesprog. Kan siges højt. Kort-lang sætningsvariation.
 * Brug kundens eget sprog fra swipe file.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Truck, Star, Headphones } from "lucide-react";
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
          SECTION 1: HERO — Ren følelse. Ingen brand. Ingen produkt.
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
              Du behøver ikke<br />
              pakke det ind i <span className="text-nc-red">performance.</span>
            </h1>
            <p className="text-foreground/65 text-lg md:text-xl max-w-xl leading-relaxed mb-2">
              Det handler om looket. Det har det altid gjort.
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
          SECTION 2: SANDHEDEN — Validér lysten. Sig det højt.
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
              Alle snakker om{" "}
              <span className="text-nc-red">hestekræfter.</span>
            </h2>
            <div className="space-y-5 text-foreground/65 text-lg md:text-xl leading-relaxed">
              <p>
                Men det er ikke det, du kigger på.
              </p>
              <p>
                Du kigger på wheel gap. På proportionerne. På den måde lyset
                fanger lakken når den sidder <em>præcis</em> rigtigt.
              </p>
              <p>
                Ikke hvor hurtigt den er.<br />
                Men hvordan den føles.
              </p>
              <p className="text-foreground/80 font-medium">
                Hestekræfter er det folk snakker om.<br />
                Men det er ikke det, der får folk til at kigge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: FØLELSEN — Mal resultatet. Før/efter.
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
                Du ruller op.{" "}
                <span className="text-nc-red">Alle kigger.</span>
              </h2>
              <div className="space-y-5 text-foreground/65 text-lg leading-relaxed">
                <p>
                  Det perfekte drop. Hjulene der sidder flush med skærmkanten.
                  Den der subtile aggression der får folk til at kigge to gange.
                </p>
                <p>
                  Ikke fordi du prøver at flexe.
                  Men fordi din bil endelig ser ud som den altid burde have gjort.
                </p>
                <p>
                  Det er ikke forfængelighed. Det er en vision.
                  Og forskellen mellem en stock bil og <em>din</em> bil
                  er ét valg.
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
                <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">Fabrikken</span>
              </div>
              <div className="absolute top-4 right-4 bg-nc-red backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <span className="text-xs font-display uppercase tracking-wider text-white font-semibold">Din</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-streak mx-8" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: SOCIAL PROOF — Rigtige builds. Rigtige folk.
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
              De stod præcis<br />
              <span className="text-nc-red">hvor du står nu.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed max-w-2xl">
              Rigtige biler. Rigtige ejere. Alle sammen startede med den samme følelse
              - at bilen kunne mere end det fabrikken sendte den ud med.
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
                quote: "Jeg vidste præcis hvad jeg ville have. Manglede bare nogen der fattede det.",
                name: "Mikkel S.",
                car: "VW Golf MK7",
              },
              {
                quote: "Folk siger 'det er bare en bil.' Nej. Det er det eneste i mit liv der er 100% mit eget valg.",
                name: "Jonas K.",
                car: "BMW E46",
              },
              {
                quote: "Første gang jeg parkerede den efter droppet, stod jeg bare og gloede i fem minutter.",
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
          SECTION 5: BROEN — Nu introducerer vi Nardocar.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.img
              src={LOGO_WHITE}
              alt="Nardocar"
              className="h-8 md:h-10 mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            />

            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Vi bygger ikke biler.<br />
              <span className="text-nc-red">Vi leverer delene til din vision.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Over 150.000 dele. Verificeret fitment til din model.
              TÜV/EC-papirer der holder til syn.
              Og et team af bilfolk der forstår hvad du går efter
              - fordi de selv har været der.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { icon: Shield, label: "Fitment-garanti", desc: "Passer til din model" },
                { icon: Star, label: "4,5 på Trustpilot", desc: "600+ anmeldelser" },
                { icon: Truck, label: "Hurtig levering", desc: "DK, NO & SE" },
                { icon: Headphones, label: "Ekspert support", desc: "Rigtige bilfolk" },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="border border-border/40 rounded-sm p-4 text-center bg-card/30"
                >
                  <Icon className="w-5 h-5 text-nc-red mx-auto mb-2" />
                  <p className="text-foreground/90 text-sm font-medium font-display">{label}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Kontakt os for rådgivning
              </Button>
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
