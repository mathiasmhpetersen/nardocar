/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * LP: "Audi A3 Top 3 Bestsellere" — Product Aware (CRO-optimized)
 * Target: Audi A3 owners ready to buy, looking for best-selling upgrades
 *
 * STRUCTURE:
 *   1. Hero — Outcome-focused headline + social proof
 *   2. Trust bar — Trustpilot, gratis fragt, returret
 *   3. Product 1 — Milltek Cat-Back System (exhaust)
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
  Clock,
  Flame,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";

const SHOP_URL = "https://www.nardocar.dk/shop/audi-a3-biludstyr-204s1.html";

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
    name: "Milltek Cat-Back Audi A3 2.0T FSI quattro",
    tagline: "Britisk præcision til din A3",
    description:
      "Opgradér din Audi A3 med Millteks legendariske cat-back system. Twin 76.2mm Jet-spidser i T304L rustfrit stål giver en raffineret, sporty lyd uden droneeffekt. EC-godkendt og produceret i England efter ISO 9001.",
    price: "6.941",
    oldPrice: null,
    currency: "DKK",
    badge: null,
    socialProof: "Premium valg",
    socialProofIcon: Flame,
    urgency: null,
    features: [
      { icon: Check, text: "Twin 76.2mm Jet udstødningsspidser" },
      { icon: ShieldCheck, text: "EC-godkendt" },
      { icon: Check, text: "T304L rustfrit stål" },
      { icon: Check, text: "Produceret i England (ISO 9001)" },
    ],
    specs: [
      { label: "RØRDIAMETER", value: "69.85mm / 2.75\"" },
      { label: "TIP", value: "76.2mm Jet" },
      { label: "MATERIALE", value: "T304L stål" },
      { label: "MONTERING", value: "1-1,5 timer" },
    ],
    image: "https://www.nardocar.dk/images/produkter/milltek/SSXVW045_1.webp",
    url: "https://www.nardocar.dk/shop/milltek-cat-back-audi-a3-ssxvw045-31116p.html",
  },
  {
    category: "UNDERVOGN",
    name: "AP Gevindundervogn Audi A3 (8V)",
    tagline: "Stance + kørsel i perfekt balance",
    description:
      "Sænk din A3 præcis som du vil — 30 til 60mm. AP gevindundervognen giver dig det aggressive stance uden at ofre komfort på hverdagskørslen. TÜV-godkendt med Twin-tube teknologi og korrosionsbeskyttelse.",
    price: "5.289",
    oldPrice: null,
    currency: "DKK",
    badge: null,
    socialProof: "Mest populære",
    socialProofIcon: TrendingUp,
    urgency: null,
    features: [
      { icon: Check, text: "Sænkning: 30-60 mm for / 30-55 mm bag" },
      { icon: ShieldCheck, text: "TÜV-certificeret" },
      { icon: Check, text: "Twin-tube teknologi" },
      { icon: Check, text: "2 års garanti" },
    ],
    specs: [
      { label: "SÆNKNING FOR", value: "30-60 mm" },
      { label: "SÆNKNING BAG", value: "30-55 mm" },
      { label: "TÜV", value: "Ja" },
      { label: "DÆMPERTYPE", value: "Twin-tube" },
    ],
    image: "https://www.nardocar.dk/images/produkter/ap/AP-Coilovers.webp",
    url: "https://www.nardocar.dk/shop/ap-gevindundervogn-audi-a3-8v-440p.html",
  },
  {
    category: "CHIPTUNING",
    name: "RaceChip RS Audi A3 (8V) 1.5 TFSI",
    tagline: "+36 HK på 15 minutter",
    description:
      "Mærk forskellen med det samme. RaceChip RS frigør op til 25% ekstra hestekræfter via plug & play — ingen mekaniker nødvendig. Tysk ingeniørkunst med 6 finjusteringer, TÜV-godkendt og 1 års motorgaranti.",
    price: "2.109",
    oldPrice: "2.356",
    currency: "DKK",
    badge: "SPAR 10%",
    socialProof: "Ny i sortimentet",
    socialProofIcon: Zap,
    urgency: null,
    features: [
      { icon: Check, text: "Op til +36 HK og +61 Nm" },
      { icon: Check, text: "Plug & play montering" },
      { icon: ShieldCheck, text: "1 års motorgaranti" },
      { icon: Check, text: "App-styring (tilkøb)" },
    ],
    specs: [
      { label: "EFFEKT", value: "+25% HK" },
      { label: "MONTERING", value: "Plug & play" },
      { label: "GARANTI", value: "3 år" },
      { label: "INDSTILLINGER", value: "6 trin" },
    ],
    image: "https://www.nardocar.dk/images/produkter/racechip/rs/product-rs.png",
    url: "https://www.nardocar.dk/shop/racechip-rs-audi-a3-8v-1-5-tfsi-661489p.html",
  },
];

const stats = [
  { value: "4,5/5", label: "TRUSTPILOT" },
  { value: "100%", label: "PRISGARANTI" },
  { value: "3 år", label: "GARANTI*" },
  { value: "50 dage", label: "RETURRET" },
];

export default function AudiA3BestLP() {
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
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground text-sm font-display tracking-wider transition-colors flex items-center gap-1.5"
        >
          Se alt til Audi A3
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </nav>

      <section
        ref={heroRef}
        className="relative h-screen flex items-end overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <div
            className="w-full h-[120%] bg-cover bg-[center_top] md:bg-[center_120%]"
            style={{
              backgroundImage: "url('/images/audi-a3-hero.jpg')",
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
              Audi A3 8V (2012–2020)
            </p>
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 flex flex-col">
              <span className="leading-[1.0] whitespace-nowrap">De 3 opgraderinger</span>
              <span className="text-nc-red leading-[1.05]">alle vælger</span>
            </h1>
            <p className="text-foreground/65 text-lg md:text-xl max-w-xl leading-relaxed mb-6">
              Lyd, stance og kraft — de tre upgrades der forvandler enhver Audi A3.
              Valgt af tusindvis af danske A3-ejere.
            </p>

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
              <span className="text-foreground/50 text-sm">1.900+ Audi-ejere handler hos os</span>
            </div>
          </motion.div>
        </div>
      </section>

      {products.map((product, index) => (
        <div key={product.name}>
          <div className="red-streak" />

          <section className="py-24 md:py-36 relative grain-overlay">
            <div className="container relative z-10">
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
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`relative ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="relative bg-white rounded-sm overflow-hidden aspect-square flex items-center justify-center p-8">
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-nc-red text-white text-xs font-display font-bold px-3 py-1.5 rounded-sm z-10">
                        {product.badge}
                      </div>
                    )}
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

                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}
                >
                  <p className="text-nc-red font-display text-sm font-semibold uppercase tracking-wider mb-2">
                    {product.tagline}
                  </p>

                  <h2 className="font-display text-2xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
                    {product.name}
                  </h2>
                  <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

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

                  {product.urgency && (
                    <p className="text-amber-400 text-sm font-semibold mb-6 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {product.urgency}
                    </p>
                  )}
                  {!product.urgency && <div className="mb-6" />}

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
              Din Audi A3 fortjener{" "}
              <span className="text-nc-red">det bedste</span>
            </h2>
            <p className="text-foreground/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Over 150.000 produkter. 4,5 stjerner på Trustpilot. Et team der kører det
              samme som dig. Vi finder den rigtige del — ikke bare en del.
            </p>

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

            <Button
              size="lg"
              className="bg-nc-red text-white hover:bg-nc-red-light font-display uppercase tracking-wider text-sm px-10 py-7 rounded-sm text-base"
              onClick={() => window.open(SHOP_URL, "_blank")}
            >
              Se alt til Audi A3
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-foreground/40 text-xs mt-4">
              Gratis fragt over 999,- &middot; 50 dages returret &middot; Dansk kundeservice
            </p>
          </motion.div>
        </div>
      </section>

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
              Se alt til Audi A3
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
