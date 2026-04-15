/*
 * DESIGN: Nardocar Brand — Dark base, red (#FF0000) accents, Poppins + Roboto
 * Hub page linking to the three landing page variants.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/nardocar-white_7eff51c9.png";

const pages = [
  {
    path: "/aesthetic",
    title: "The Aesthetic Permission Slip",
    subtitle: "Problem Unaware",
    description: "For the visual perfectionist who wants explicit permission to prioritize aesthetics. Identity-driven, emotional storytelling.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-aesthetic-dp93ZJGU8T7VyqW7SDnuxn.webp",
  },
  {
    path: "/build-journey",
    title: "The Build Journey",
    subtitle: "Problem Unaware / Problem Aware",
    description: "For the first-time builder and the obsessed engineer. Narrative-driven, showcasing the entire transformation process.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-build-journey-XKUJ69yMM7aY658E5JcN7u.webp",
  },
  {
    path: "/confidence",
    title: "Build with Confidence",
    subtitle: "Problem Aware",
    description: "For the hesitant buyer who fears fitment issues, legal problems, or making the wrong choice. Trust-driven, reassurance-focused.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-confidence-AfyfH8Nn7VSkg4koVxUiUm.webp",
  },
  {
    path: "/first-build",
    title: "First Build Frederik",
    subtitle: "Solution Aware",
    description: "For the 19-23yo stuck in research paralysis. He knows what he wants but can't decide. One recommendation, objections killed, decision collapsed.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663451266806/Erre6hcnrPtPVTwXw7nEHY/hero-build-journey-XKUJ69yMM7aY658E5JcN7u.webp",
  },
  {
    path: "/golf7best",
    title: "Golf 7 Top 3 Bestsellere",
    subtitle: "Product Aware",
    description: "For the Golf 7 owner ready to upgrade. Three bestselling products with direct links, specs, and pricing — Scorpion exhaust, AP coilovers, and RaceChip chiptuning.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2940&auto=format&fit=crop",
  },
  {
    path: "/polobest",
    title: "VW Polo Top 3 Bestsellere",
    subtitle: "Product Aware",
    description: "For Polo-ejeren klar til at opgradere. Scorpion Cat-Back, ST X gevindundervogn og RaceChip RS — de tre mest populære upgrades.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2940&auto=format&fit=crop",
  },
  {
    path: "/bmwe90best",
    title: "BMW E90 Top 3 Bestsellere",
    subtitle: "Product Aware",
    description: "For BMW E90-ejeren klar til at opgradere. TA-Technix sports bagpotte, AP gevindundervogn og RaceChip GTS 5 — de tre mest populære upgrades.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2940&auto=format&fit=crop",
  },
  {
    path: "/bmwe91best",
    title: "BMW E91 Touring Top 3 Bestsellere",
    subtitle: "Product Aware",
    description: "For BMW E91 Touring-ejeren klar til at opgradere. TA Technix udstødning, TA-Technix gevindundervogn og RaceChip GTS 5 — de tre mest populære upgrades.",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2940&auto=format&fit=crop",
  },
  {
    path: "/audia3best",
    title: "Audi A3 Top 3 Bestsellere",
    subtitle: "Product Aware",
    description: "For Audi A3-ejeren klar til at opgradere. Milltek Cat-Back, AP gevindundervogn og RaceChip RS — de tre mest populære upgrades.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2940&auto=format&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative grain-overlay">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <img
            src={LOGO_WHITE}
            alt="Nardocar"
            className="h-5"
          />
          <span className="text-muted-foreground text-sm">
            Landing Page Variants
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <p className="text-nc-red uppercase tracking-[0.3em] text-sm font-semibold mb-4 font-display">
              Top-of-Funnel Campaign Pages
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground mb-6">
              9 Landing Pages<br />
              <span className="text-nc-red">for New Audiences</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Each page targets a different awareness stage and avatar from the Nardocar
              brand strategy. Click any card below to view the full landing page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="red-streak mx-8" />

      {/* Landing Page Cards */}
      <section className="py-16 relative z-10">
        <div className="container">
          <div className="grid gap-8">
            {pages.map((page, i) => (
              <motion.div
                key={page.path}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link href={page.path}>
                  <div className="group relative overflow-hidden rounded-sm border border-border/50 bg-card hover:border-nc-red/30 transition-all duration-500">
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src={page.image}
                          alt={page.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90 md:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent md:hidden" />
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 flex flex-col justify-center relative">
                        <span className="text-nc-red uppercase tracking-[0.25em] text-xs font-semibold mb-3 font-display">
                          {page.subtitle}
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 group-hover:text-nc-red transition-colors duration-300">
                          {page.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {page.description}
                        </p>
                        <div className="flex items-center gap-2 text-nc-red font-display uppercase tracking-wider text-sm font-semibold">
                          <span>View Landing Page</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 relative z-10">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            Nardocar &mdash; Own Your Drive
          </p>
        </div>
      </footer>
    </div>
  );
}
