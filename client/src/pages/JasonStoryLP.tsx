/*
 * PAGE: Jason's Story — Golf 7 GTI (Owner Story, first-person editorial)
 * TONE: A real builder's page — Speedhunters / Stanceworks / Petrolicious feel.
 * COMMERCIAL: One italic line at the very end. No CTAs, no trust badges, no sales copy.
 */
import { useEffect, useRef } from "react";

const HERO_IMG = "/images/jason-hero-faf.jpg";          /* A7404822 — front at FAF silo */
const WIDE_IMG = "/images/jason-faf-wide.jpg";           /* A7404841 — wide 3/4 with silo */
const INTERIOR_IMG = "/images/jason-interior.jpg";       /* A7404836 — carbon steering */
const SEAT_IMG = "/images/jason-seat.jpg";               /* A7404835 — GTI plaid seat */
const FRONT_DETAIL_IMG = "/images/jason-front-detail.jpg"; /* A7404823 — front crop red stripe */
const SIDE_SUNSET_IMG = "/images/jason-side-sunset.jpg"; /* A7404826 — sunset side profile */
const REAR_IMG = "/images/jason-rear-water.jpg";         /* A7404829 — rear 3/4 at water */
const FRONT_CLOSE_IMG = "/images/jason-front-water.jpg"; /* A7404833 — front close, VW logo */

export default function JasonStoryLP() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Document meta
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Jason — 7. GTI";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const description =
      "Jason, 22. Golf 7 GTI. Syv biler, én læreplads, og en drøm om Nürburgring.";
    const desc = setMeta("description", description);
    const og1 = setMeta("og:title", "Jason — 7. GTI", "property");
    const og2 = setMeta("og:description", description, "property");
    const og3 = setMeta("og:image", HERO_IMG, "property");
    const og4 = setMeta("og:type", "article", "property");

    return () => {
      document.title = prevTitle;
      desc.remove();
      og1.remove();
      og2.remove();
      og3.remove();
      og4.remove();
    };
  }, []);

  // Scroll-linked reveals via IntersectionObserver
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="js-root">
      <style>{css}</style>

      {/* Subtle grain overlay */}
      <div className="js-grain" aria-hidden="true" />

      {/* ───────── HERO ───────── */}
      <section className="js-hero">
        <img
          src={HERO_IMG}
          alt="Jasons hvide Golf 7 GTI foran FAF-siloen i Odense havn"
          className="js-hero-img"
        />
        <div className="js-hero-veil" aria-hidden="true" />

        <div className="js-hero-stamps">
          <span className="js-stamp">● Jason · Golf 7 GTI</span>
          <span className="js-stamp">Odense · 2026</span>
        </div>

        <div className="js-hero-body">
          <h1 className="js-h1" data-reveal>
            Den 7. bil.
          </h1>
          <div className="js-rule" data-reveal />
          <p className="js-hero-quote" data-reveal>
            “Jeg har altid drømt om at bygge den perfekte banebil. Så parkerede
            jeg ved siden af drømmen — nu ved jeg hvad målet er.”
          </p>
          <p className="js-hero-sig" data-reveal>
            <strong>Jason</strong>, 22. Betalt af egne penge fra lærepladsen.
          </p>
        </div>

        <div className="js-hero-foot">
          <div className="js-scroll-cue">
            <span className="js-scroll-line" />
            <span>Scroll</span>
          </div>
          <span className="js-stamp">01 / Historien</span>
        </div>
      </section>

      {/* ───────── READING 1 — opener with drop cap ───────── */}
      <section className="js-read js-read--first">
        <p className="js-p js-p--opener" data-reveal>
          <span className="js-dropcap">J</span>eg købte min Golf 7 GTI som
          22-årig. Det er min 7. bil, og jeg har efterhånden haft lidt af hvert.
          Bilerne har jeg købt for penge jeg sparede op på arbejde ved siden af
          min læreplads.
        </p>
        <p className="js-p" data-reveal>
          Bilen har aldrig været en drømmebil for mig, men en bil jeg har set
          på YouTube og i Top Gear. Det var også en bil jeg aldrig havde troet
          jeg skulle eje, da jeg altid har kørt baghjulstrukne biler eller
          firehjulstrukne biler. Men en lille drengedrøm om en hatchback har
          dog altid været der.
        </p>
      </section>

      {/* Full-bleed: wide */}
      <figure className="js-fullbleed" data-reveal>
        <img
          src={WIDE_IMG}
          loading="lazy"
          alt="Golf 7 GTI, wide-shot med FAF-siloen i baggrunden"
          className="js-img"
        />
      </figure>

      {/* ───────── READING 2 ───────── */}
      <section className="js-read">
        <p className="js-p" data-reveal>
          Men efter at have haft den i noget tid — vasket den flere gange om
          ugen, renset sæderne — kørte jeg den på arbejde, i fitness, hen til
          mine venner. Og rundt for hyggen.
        </p>
        <p className="js-p" data-reveal>
          Med målet om at lave den til en trackday-bil, så jeg rigtigt kan
          udnytte dens størrelse på Padborgpark og Nürburgring, gror den på mig
          hver dag.
        </p>
      </section>

      {/* Two-up: interior + seat */}
      <div className="js-twoup" data-reveal>
        <figure className="js-twoup-cell">
          <img
            src={INTERIOR_IMG}
            loading="lazy"
            alt="Golf 7 GTI interiør med carbon-rat"
            className="js-img"
          />
        </figure>
        <figure className="js-twoup-cell">
          <img
            src={SEAT_IMG}
            loading="lazy"
            alt="Close-up af GTI tern-sæde"
            className="js-img"
          />
        </figure>
      </div>

      {/* ───────── READING 3 ───────── */}
      <section className="js-read">
        <p className="js-p" data-reveal>
          Jeg har altid tænkt meget over modificeringer. Stance, fitment, wheel
          gap — at bilen sagde fedt, og at den blev gjort til min egen. Med
          nogle skørter og fede fælge.
        </p>
        <p className="js-p" data-reveal>
          Men drømmen om race vokser mere og mere efter hver gang jeg har været
          ved ringen.
        </p>
      </section>

      {/* Full-bleed: front-detail */}
      <figure className="js-fullbleed" data-reveal>
        <img
          src={FRONT_DETAIL_IMG}
          loading="lazy"
          alt="Front-detalje af Golf 7 GTI — rød stribe og GTI-badge"
          className="js-img"
        />
      </figure>

      {/* ───────── READING 4 — lifted paragraph ───────── */}
      <section className="js-read">
        <p className="js-p js-p--lifted" data-reveal>
          Som erfaring med sænkede og tunede biler gror, vokser bevidstheden
          også i hvad man ønsker at få på sin bil.
        </p>
        <p className="js-p" data-reveal>
          De rigtige mærker skaber de rigtige tider og den største respekt til
          træf. Realiteten var bare, at pengene ikke var der fra start. Så en
          billig undervogn og en hjemmesvejset udstødning — det er det man
          starter med.
        </p>
      </section>

      {/* Pull quote */}
      <aside className="js-pull" data-reveal>
        <p className="js-pull-line">
          “De rigtige mærker skaber de rigtige tider.”
        </p>
        <p className="js-pull-line js-pull-line--red">
          “Og den største respekt til træf.”
        </p>
        <p className="js-pull-sig">
          <span className="js-pull-sig-rule" />
          Jason
        </p>
      </aside>

      {/* Full-bleed: side-sunset */}
      <figure className="js-fullbleed" data-reveal>
        <img
          src={SIDE_SUNSET_IMG}
          loading="lazy"
          alt="Golf 7 GTI side-profil i solnedgang"
          className="js-img"
        />
      </figure>

      {/* ───────── READING 5 ───────── */}
      <section className="js-read">
        <p className="js-p" data-reveal>
          Nu har jeg fundet min balance i at bygge biler i god kvalitet. En
          sænkning med fjedre, fra et anerkendt mærke som KW, Eibach eller
          Vogtland — skaber en mere balanceret bil på banen end en billig
          undervogn som ikke er godkendt.
        </p>
        <p className="js-p" data-reveal>
          En udstødning som er E-mærket, så den får den rigtige tone, men uden
          at man skal være bange for at blive stoppet efter hvert lyskryds.
          Gør oplevelsen i en bygget bil federe og mere personlig, efter min
          mening.
        </p>
      </section>

      {/* Full-bleed: rear */}
      <figure className="js-fullbleed" data-reveal>
        <img
          src={REAR_IMG}
          loading="lazy"
          alt="Golf 7 GTI bagparti med diffuser ved vandet"
          className="js-img"
        />
      </figure>

      {/* ───────── READING 6 — closing ───────── */}
      <section className="js-read">
        <p className="js-p" data-reveal>
          Jeg ville bestemt mene at Nardo er en af de bedste steder at anskaffe
          dele, hvis man er samme sted som mig. Man vil gerne bygge en fed bil
          — men med godkendelserne i orden.
        </p>
        <p className="js-p" data-reveal>
          Med en blanding mellem den billige løsning og den helt dyre løsning
          kan man skabe en helt unik bil. I mange forskellige prisklasser. Så
          der er god grobund for at opgradere hen ad vejen. Som man får skrabet
          sammen.
        </p>
      </section>

      {/* Full-bleed: front-close (no bottom margin) */}
      <figure className="js-fullbleed js-fullbleed--last" data-reveal>
        <img
          src={FRONT_CLOSE_IMG}
          loading="lazy"
          alt="Close-up af Golf 7 GTI — VW-logo, rød stribe, forlygte"
          className="js-img"
        />
      </figure>

      {/* Tail — only commercial line */}
      <section className="js-tail">
        <p className="js-tail-line">
          <em>
            Jason køber sine dele hos{" "}
            <a
              href="https://nardocar.dk"
              className="js-tail-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              nardo
            </a>
            .
          </em>
        </p>
        <hr className="js-hairline" />
      </section>

      {/* Footer */}
      <footer className="js-footer">
        <span className="js-wordmark">
          NARDO<span className="js-wordmark-red">CAR</span>
        </span>
        <span className="js-footer-right">Own Your Drive · nardocar.dk</span>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   Page-scoped styles — brand-aligned, editorial.
   Palette from brand guidelines: #FF0000 red, paper-white text.
══════════════════════════════════════════════════════ */
const css = `
.js-root {
  --bg: #0a0a0a;
  --paper: #e8e6e3;
  --white: #ffffff;
  --muted: #6d6863;
  --dim: #403c38;
  --red: #ff0000;
  --hairline: rgba(255, 255, 255, 0.07);

  background: var(--bg);
  color: var(--paper);
  font-family: "Inter", system-ui, -apple-system, Segoe UI, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  font-size: 19px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.js-root * { box-sizing: border-box; }
.js-root img { display: block; max-width: 100%; }

/* Grain */
.js-grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 100;
  mix-blend-mode: overlay;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Scroll reveal */
.js-root [data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 1.2s cubic-bezier(.2,.7,.2,1), transform 1.2s cubic-bezier(.2,.7,.2,1);
  will-change: opacity, transform;
}
.js-root [data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── HERO ── */
.js-hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 720px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
}
.js-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  filter: contrast(1.08) saturate(0.82);
  z-index: 0;
}
.js-hero-veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.1) 100%),
    linear-gradient(to right, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0) 40%);
  z-index: 1;
}
.js-hero-stamps {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 28px 32px;
}
.js-stamp {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--paper);
  opacity: 0.75;
}
.js-hero-body {
  position: relative;
  z-index: 2;
  align-self: end;
  padding: 0 32px 56px 32px;
  max-width: 860px;
}
.js-h1 {
  font-family: "Saira Condensed", "Inter", sans-serif;
  font-style: italic;
  font-weight: 800;
  font-size: clamp(38px, 6vw, 88px);
  line-height: 1.0;
  letter-spacing: -0.01em;
  color: var(--white);
  margin: 0;
  max-width: 14ch;
}
.js-rule {
  width: 30px;
  height: 2px;
  background: var(--red);
  margin: 22px 0 18px 0;
}
.js-hero-quote {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: var(--paper);
  max-width: 62ch;
  margin: 0 0 18px 0;
}
.js-hero-sig {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
  margin: 0;
}
.js-hero-sig strong {
  color: var(--paper);
  font-weight: 600;
}
.js-hero-foot {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 24px 32px;
}
.js-scroll-cue {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--paper);
  opacity: 0.75;
}
.js-scroll-line {
  display: inline-block;
  width: 28px;
  height: 1px;
  background: var(--paper);
  transform-origin: left center;
  animation: js-cue 2.4s ease-in-out infinite;
}
@keyframes js-cue {
  0%, 100% { transform: scaleX(0.8); opacity: 0.4; }
  50%      { transform: scaleX(1.2); opacity: 1.0; }
}

/* ── READING COLUMN ── */
.js-read {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px;
}
.js-read--first {
  margin-top: 160px;
}
.js-read + .js-fullbleed,
.js-read + .js-twoup,
.js-read + .js-pull {
  margin-top: 80px;
}
.js-fullbleed + .js-read,
.js-twoup + .js-read,
.js-pull + .js-read {
  margin-top: 80px;
}

.js-p {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.75;
  color: var(--paper);
  margin: 0 0 28px 0;
}
.js-p:last-child { margin-bottom: 0; }

.js-p--opener {
  font-size: 22px;
  line-height: 1.55;
  color: var(--white);
  margin-bottom: 32px;
}
.js-p--lifted {
  font-size: 22px;
  line-height: 1.5;
  color: var(--white);
  margin-bottom: 40px;
  padding-top: 16px;
}

.js-dropcap {
  float: left;
  font-family: "Saira Condensed", "Inter", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 96px;
  line-height: 0.82;
  color: var(--red);
  padding: 6px 14px 0 0;
}

/* ── FULL-BLEED PHOTO ── */
.js-fullbleed {
  margin: 0;
  width: 100%;
}
.js-fullbleed--last {
  margin-bottom: 0;
}
.js-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: contrast(1.08) saturate(0.82);
}

/* ── TWO-UP PHOTO PAIR ── */
.js-twoup {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}
.js-twoup-cell {
  margin: 0;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}
.js-twoup-cell .js-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── PULL QUOTE ── */
.js-pull {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: left;
}
.js-pull-line {
  font-family: "Saira Condensed", "Inter", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(30px, 4.5vw, 56px);
  line-height: 1.04;
  color: var(--white);
  margin: 0 0 8px 0;
}
.js-pull-line--red { color: var(--red); }
.js-pull-sig {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 28px 0 0 0;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}
.js-pull-sig-rule {
  display: inline-block;
  width: 40px;
  height: 1px;
  background: var(--red);
}

/* ── TAIL ── */
.js-tail {
  max-width: 640px;
  margin: 96px auto 0 auto;
  padding: 0 24px 28px 24px;
}
.js-tail-line {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 22px 0;
}
.js-tail-link {
  color: var(--paper);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 0, 0, 0.45);
  padding-bottom: 1px;
  transition: border-color 0.25s ease, color 0.25s ease;
}
.js-tail-link:hover {
  border-bottom-color: var(--red);
  color: var(--white);
}
.js-hairline {
  border: 0;
  height: 1px;
  background: var(--hairline);
  margin: 0;
}

/* ── FOOTER ── */
.js-footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 28px 32px 36px 32px;
  gap: 16px;
}
.js-wordmark {
  font-family: "Saira Condensed", "Inter", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: var(--white);
  line-height: 1;
}
.js-wordmark-red { color: var(--red); }
.js-footer-right {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--dim);
}

/* ── RESPONSIVE ── */
@media (max-width: 680px) {
  .js-root { font-size: 18px; }
  .js-hero { min-height: 620px; }
  .js-hero-stamps { padding: 20px 20px; }
  .js-hero-body { padding: 0 20px 40px 20px; }
  .js-hero-foot { padding: 0 20px 20px 20px; }
  .js-hero-quote { font-size: 16px; }
  .js-read--first { margin-top: 96px; }
  .js-read + .js-fullbleed,
  .js-read + .js-twoup,
  .js-read + .js-pull,
  .js-fullbleed + .js-read,
  .js-twoup + .js-read,
  .js-pull + .js-read { margin-top: 56px; }
  .js-p { font-size: 17px; }
  .js-p--opener, .js-p--lifted { font-size: 19px; }
  .js-dropcap { font-size: 76px; padding-right: 10px; }
  .js-tail { margin-top: 64px; }
  .js-footer { padding: 22px 20px 28px 20px; }
}
`;
