/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP5: "Golf 7 Top 3 Bestsellere" — Product Aware (CRO-optimized)
 * Target: Golf 7 owners ready to buy, looking for best-selling upgrades
 *
 * STRUCTURE:
 *   1. Hero — Outcome-focused headline + social proof
 *   2. Trust bar — Trustpilot, gratis fragt, returret
 *   3. Product 1 — Scorpion Cat-Back System (exhaust)
 *   4. Product 2 — AP Gevindundervogn (coilovers)
 *   5. Product 3 — RaceChip RS (chiptuning)
 *   6. CTA — Final conversion push + trust stats
 *   8. Sticky mobile CTA bar
 */
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Check,
  ShieldCheck,
  Star,
  Truck,
  RotateCcw,
  Clock,
  Flame,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";

const SHOP_URL = "https://www.nardocar.dk/shop/vw-golf-7-2012-2019-biludstyr-11553s1.html";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const products = [
  {
    category: "UDSTØDNING",
    name: "Scorpion Cat-Back System — Golf GTI",
    tagline: "Den lyd du har drømt om",
    description:
      "Naboerne vender sig om. Din Golf GTI får en dyb, aggressiv motorsportslyd der føles i mellemgulvet — uden droneeffekt på motorvejen. Håndlavet i England af T304 rustfrit stål med livstidsgaranti.",
    price: "7.936",
    oldPrice: "9.920",
    currency: "DKK",
    badge: "Spar 1.984,-",
    socialProof: "327+ solgt",
    socialProofIcon: Flame,
    urgency: "Kun 4 tilbage på lager",
    features: [
      { icon: Check, text: "100mm Ascari udstødningsspidser" },
      { icon: Check, text: "Livstidsgaranti" },
      { icon: Check, text: "T304 rustfrit stål" },
      { icon: Check, text: "Håndlavet i England" },
    ],
    specs: [
      { label: "RØRDIAMETER", value: "76mm / 3\"" },
      { label: "TIP", value: "100mm Ascari" },
      { label: "MATERIALE", value: "T304 stål" },
      { label: "PRODUKTION", value: "Limité" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/iBJypn5FUvZrT5PKAAfZMN/scorpion-catback_1642af8e.jpeg",
    url: "https://www.nardocar.dk/shop/scorpion-non-resonated-cat-back-system-vw-mk7-golf-gti-including-clubsport-clubsport-s-ascari-1674848p.html",
  },
  {
    category: "UNDERVOGN",
    name: "AP Gevindundervogn VW Golf 7",
    tagline: "Stance + kørsel i perfekt balance",
    description:
      "Sænk din Golf 7 præcis som du vil — 35 til 65mm. AP gevindundervognen giver dig det aggressive stance uden at ofre komfort på hverdagskørslen. TÜV-godkendt og med 3 års garanti.",
    price: "5.289",
    oldPrice: null,
    currency: "DKK",
    badge: null,
    socialProof: "Mest populære",
    socialProofIcon: TrendingUp,
    urgency: null,
    features: [
      { icon: Check, text: "Sænkning: 35-65 mm for/bag" },
      { icon: Check, text: "3 års garanti hos Nardocar" },
      { icon: ShieldCheck, text: "TÜV-certificeret" },
      { icon: Check, text: "Galvaniserede støddæmpere" },
    ],
    specs: [
      { label: "SÆNKNING", value: "35-65 mm" },
      { label: "TÜV", value: "Ja" },
      { label: "GARANTI", value: "3 år" },
      { label: "DÆMPERTYPE", value: "Twin-tube" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/iBJypn5FUvZrT5PKAAfZMN/ap-gevindundervogn_e741289d.jpeg",
    url: "https://www.nardocar.dk/shop/ap-gevindundervogn-vw-golf-7-au-420p.html",
  },
  {
    category: "CHIPTUNING",
    name: "RaceChip RS",
    tagline: "+65 HK på 15 minutter",
    description:
      "Tryk på speeder og mærk forskellen med det samme. RaceChip RS frigør op til 30% ekstra hestekræfter via OBD-porten — ingen mekaniker nødvendig. Tysk ingeniørkunst med app-styring og 5 års motorgaranti.",
    price: "3.499",
    oldPrice: null,
    currency: "DKK",
    badge: null,
    socialProof: "Ny i sortimentet",
    socialProofIcon: Zap,
    urgency: null,
    features: [
      { icon: Check, text: "Op til +65 HK og +95 Nm" },
      { icon: Check, text: "Plug & play via OBD-port" },
      { icon: ShieldCheck, text: "5 års motorgaranti" },
      { icon: Check, text: "App-styring (Bluetooth)" },
    ],
    specs: [
      { label: "EFFEKT", value: "+30% HK" },
      { label: "MONTERING", value: "Plug & play" },
      { label: "GARANTI", value: "5 år" },
      { label: "STYRING", value: "App" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/iBJypn5FUvZrT5PKAAfZMN/racechip-rs-product_a5cce0f8.png",
    url: "https://www.nardocar.dk/shop/vw-golf-7-racechip-16605s1.html",
  },
];

const stats = [
  { value: "4,5/5", label: "TRUSTPILOT" },
  { value: "100%", label: "PRISGARANTI" },
  { value: "5 år", label: "GARANTI*" },
  { value: "50 dage", label: "RETURRET" },
];

export default function Golf7BestLP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          NAV — Minimal top bar
      ═══════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground text-sm font-display tracking-wider transition-colors flex items-center gap-1.5"
        >
          Se alt til Golf 7
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Outcome-focused + social proof
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-end overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <div
            className="w-full h-[120%] bg-cover"
            style={{
              backgroundImage: "url('/images/golf7-hero.jpg')",
              backgroundPosition: "center 120%",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />

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
            <p className="text-nc-red uppercase tracking-[0.25em] text-sm font-semibold mb-4 font-display flex items-center gap-3">
              <span className="w-8 h-px bg-nc-red" />
              VW Golf 7 (2012–2019)
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 flex flex-col">
              <span className="leading-[1.0]">De 3</span>
              <span className="leading-[1.0]">opgraderinger</span>
              <span className="text-nc-red leading-[1.05]">alle vælger</span>
            </h1>
            <p className="text-foreground/65 text-lg md:text-xl max-w-xl leading-relaxed mb-6">
              Lyd, stance og kraft — de tre upgrades der forvandler enhver Golf 7.
              Valgt af tusindvis af danske Golf-ejere.
            </p>

            {/* Social proof counter in hero */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/50 fill-yellow-400/50"}`}
                  />
                ))}
                <span className="text-foreground/50 text-sm ml-1">4,5 på Trustpilot</span>
              </div>
              <span className="text-foreground/20">|</span>
              <span className="text-foreground/50 text-sm">2.300+ Golf 7-ejere handler hos os</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTIONS 2-4: PRODUCT SHOWCASES (CRO-optimized)
      ═══════════════════════════════════════════════════════════════ */}
      {products.map((product, index) => (
        <div key={product.name}>
          <div className="red-streak" />

          <section className="py-24 md:py-36 relative grain-overlay">
            <div className="container relative z-10">
              {/* Category label with dot navigation */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex items-center gap-3 mb-12"
              >
                <div className="flex flex-col gap-2">
                  {products.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        dotIndex === index
                          ? "bg-nc-red"
                          : "bg-foreground/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-nc-red uppercase tracking-[0.25em] text-xs font-semibold font-display">
                  {product.category}
                </span>
              </motion.div>

              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Product image */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`relative ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="relative bg-white rounded-sm overflow-hidden aspect-square flex items-center justify-center p-8">
                    {/* Discount badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-nc-red text-white text-xs font-display font-bold px-3 py-1.5 rounded-sm z-10">
                        {product.badge}
                      </div>
                    )}
                    {/* Social proof badge */}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-display font-semibold px-3 py-1.5 rounded-sm z-10 flex items-center gap-1.5">
                      <product.socialProofIcon className="w-3.5 h-3.5 text-nc-red" />
                      {product.socialProof}
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Product info */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}
                >
                  {/* Tagline */}
                  <p className="text-nc-red font-display text-sm font-semibold uppercase tracking-wider mb-2">
                    {product.tagline}
                  </p>

                  <h2 className="font-display text-2xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
                    {product.name}
                  </h2>
                  <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-nc-red font-display text-3xl md:text-4xl font-bold">
                      {product.price},-
                    </span>
                    {product.oldPrice && (
                      <span className="text-muted-foreground line-through text-lg">
                        {product.oldPrice},-
                      </span>
                    )}
                    <span className="text-muted-foreground text-sm uppercase tracking-wider">
                      {product.currency}
                    </span>
                  </div>

                  {/* Urgency line */}
                  {product.urgency && (
                    <p className="text-amber-400 text-sm font-semibold mb-6 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {product.urgency}
                    </p>
                  )}
                  {!product.urgency && <div className="mb-6" />}

                  {/* Features */}
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 gap-3 mb-8"
                  >
                    {product.features.map((feature) => (
                      <motion.div
                        key={feature.text}
                        variants={fadeUp}
                        className="flex items-start gap-2"
                      >
                        <feature.icon className="w-4 h-4 text-nc-red shrink-0 mt-0.5" />
                        <span className="text-foreground/70 text-sm leading-relaxed">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Specs row */}
                  <div className="flex gap-2 mb-8 flex-wrap">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-card border border-border/50 px-4 py-2.5 rounded-sm flex-1 min-w-[100px]"
                      >
                        <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-display mb-0.5">
                          {spec.label}
                        </p>
                        <p className="text-foreground text-sm font-semibold font-display">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4">
                    <Button
                      size="lg"
                      className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-8 py-6 rounded-sm"
                      onClick={() => window.open(product.url, "_blank")}
                    >
                      Se produktet
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <span className="text-foreground/40 text-xs hidden sm:block">
                      50 dages fuld returret
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <div className="red-streak" />

      <div className="red-streak" />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: CTA — Final conversion push
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative">
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <p className="text-nc-red uppercase tracking-[0.25em] text-sm font-semibold mb-4 font-display flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-nc-red" />
              NARDOCAR.DK
              <span className="w-8 h-px bg-nc-red" />
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              Din Golf 7 fortjener{" "}
              <span className="text-nc-red">det bedste</span>
            </h2>
            <p className="text-foreground/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Over 150.000 produkter. 4,5 stjerner på Trustpilot. Et team der kører det
              samme som dig. Vi finder den rigtige del — ikke bare en del.
            </p>

            {/* Trust stats */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-14"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="text-center">
                  <p className="text-foreground font-display text-2xl md:text-3xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-display">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Single focused CTA */}
            <Button
              size="lg"
              className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-10 py-7 rounded-sm text-base"
              onClick={() => window.open(SHOP_URL, "_blank")}
            >
              Se alt til VW Golf 7
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-foreground/40 text-xs mt-4">
              Gratis fragt over 999,- &middot; 50 dages returret &middot; Dansk kundeservice
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-10 border-t border-border/30">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={LOGO_WHITE}
            alt="Nardocar"
            className="h-6 opacity-60"
            loading="lazy"
          />
          <p className="text-muted-foreground text-sm">
            © 2026 Nardocar ApS — Alle rettigheder forbeholdes
          </p>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════
          STICKY MOBILE CTA BAR
      ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/50 p-3 md:hidden"
          >
            <Button
              size="lg"
              className="w-full bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm py-5 rounded-sm"
              onClick={() => window.open(SHOP_URL, "_blank")}
            >
              Se alt til Golf 7
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
