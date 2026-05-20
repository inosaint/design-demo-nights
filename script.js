const LUMA_URL = "https://luma.com/calendar/cal-Lz8YkYPCTUZPX9t";
const INSTAGRAM_URL = "https://www.instagram.com/DesignDemoNights";

function track(eventName, properties = {}) {
  try {
    window.posthog?.capture?.(eventName, properties);
  } catch {
    // Analytics should never interrupt the page experience.
  }
}
window.track = track;

const events = [
  {
    id: "4",
    title: "Design Demo Nights 04",
    startsAt: "2026-06-15T18:30:00+05:30",
    location: "Bengaluru",
    themeColor: "#b557df",
    applyUrl: LUMA_URL,
    demos: []
  },
  {
    id: "3",
    title: "Design Demo Nights 03",
    startsAt: "2026-04-20T18:30:00+05:30",
    location: "Bengaluru",
    themeColor: "#76c7d9",
    demos: [
      {
        title: "Safe Food Guide",
        speaker: "Santrupti",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/santacandesign" },
          { platform: "instagram", url: "https://instagram.com/santruptip" },
          { platform: "website", url: "https://santacandesign.github.io/portfolio2026/index.html" }
        ],
        demoUrl: "",
        photo: "santa.jpeg",
        preview: "A look at food decisions and trust behind Safe Food Guide.",
        details:
          "Santrupti walked through the decisions, habits, and trust gaps that shape how she chooses what to eat. The demo unpacked how those observations led to Safe Food Guide, a product that narrows the choices to eat, to a few trusted places around town."
      },
      {
        title: "AI Verse",
        speaker: "Kshitij",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/okkshitij" },
          { platform: "instagram", url: "https://instagram.com/okkshitij" },
          { platform: "website", url: "" }
        ],
        demoUrl: "https://getplayground.app",
        photo: "kshitij.jpeg",
        preview: "A collaborative canvas for designing interfaces beyond the usual AI chatbox pattern.",
        details:
          "Kshitij demoed getplayground.app, a collaborative canvas to explore and design interfaces with AI in the loop." 
      },
      {
        title: "Transient - Music Production App",
        speaker: "Rhiddit",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/RhiddhitPaul" },
          { platform: "instagram", url: "https://instagram.com/_not_reddit" },
          { platform: "website", url: "https://www.rhidos.com" }
        ],
        demoUrl: "",
        photo: "rhiddhit.jpeg",
        preview: "A music production app with a beautifully skeuomorphic interface shaped with Codex and Claude Code.",
        details:
          "Rhiddhit showed an app for people who want to get into analysing music and songs without being buried under the usual wall of controls. A combination of Claude Code and ChatGPT helped produce a polished skeuomorphic interface, giving the tool a tactile, studio-like quality."
      },
      {
        title: "Sketch as an AI Canvas",
        speaker: "Arjun",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/arjunphlox" },
          { platform: "instagram", url: "https://instagram.com/arjunphlox" },
          { platform: "website", url: "https://arjunphlox.com" }
        ],
        demoUrl: "",
        photo: "arjun.jpeg",
        preview: "A reminder that Sketch's JSON support makes it surprisingly well suited to LLM-generated design.",
        details:
          "Arjun made the case for looking at Sketch again. Because Sketch supports JSON, and LLMs are effective at generating structured JSON, it may be a stronger canvas for AI-generated design than many newer AI-first tools with smaller design toolsets."
      },
      {
        title: "A Week at Next Door Company",
        speaker: "Sankalp",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/sankalpdomore" },
          { platform: "instagram", url: "https://instagram.com/sankalpdomore" },
          { platform: "website", url: "https://sankalpsinha.com/" }
        ],
        demoUrl: "https://nextdoor.company",
        photo: "sankalp.jpeg",
        preview: "A look inside a week-long sprint and how distribution shapes the business around the product.",
        details:
          "Sankalp shared how a week-long sprint looks while building Next Door Company. The demo moved between product work and business reality, especially how distribution choices affect what gets built and how the company grows."
      },
      {
        title: "Portfolio Archetypes",
        speaker: "Anirudh",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/anirudhux" },
          { platform: "instagram", url: "https://instagram.com/anirudhshrinivas" },
          { platform: "website", url: "" }
        ],
        demoUrl: "",
        photo: "anirudh.jpeg",
        preview: "A visualization project for understanding recurring patterns in design portfolios.",
        details:
          "Anirudh showcased a visualization project built to identify design portfolio archetypes. The work turns a fuzzy question into something more inspectable: what kinds of portfolios exist, how they differ, and where a designer's body of work might fit."
      },
      {
        title: "Lumina and Finance App",
        speaker: "Atishay",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/geekyboiiii" },
          { platform: "instagram", url: "https://instagram.com/_geekyboiiii_" },
          { platform: "website", url: "https://atishay.site" }
        ],
        demoUrl: "https://lumina-design.xyz",
        photo: "atishay.jpeg",
        preview: "A demo of Lumina Design plus an in-progress finance management app.",
        details:
          "Atishay showcased Lumina Design and a finance management app still in progress. Lumina lets you configure a custom design system and export it as per your needs."
      }
    ]
  },
  {
    id: "2",
    title: "Design Demo Nights 02",
    startsAt: "2026-04-13T18:30:00+05:30",
    location: "Bengaluru",
    themeColor: "#e86635",
    demos: [
      {
        title: "Teaching Designers to Code",
        speaker: "Rasagy",
        speakerLinks: [
              { platform: "twitter", url: "https://x.com/rasagy" },
              { platform: "instagram", url: "https://instagram.com/rasagy" },
              { platform: "website", url: "https://rasagy.in" }
        ],
        demoUrl: "https://rasagy.in/imitat10n/",
        photo: "rasagy.jpg",
        preview: "An approach to teaching design students about coding — and why it changes how they think.",
        details:
          "Rasagy shared his approach to introducing coding to design students, exploring how programming literacy reshapes the way designers reason about products, systems, and constraints. Less about syntax, more about a new way of seeing."
      },
      {
        title: "Blade: Figma to Code",
        speaker: "Rama Krushna",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/rkdotdesign" },
          { platform: "instagram", url: "https://instagram.com/rkdotdesign" },
          { platform: "website", url: "https://www.ramakrushna.xyz/" }
        ],
        demoUrl: "",
        photo: "ram.jpg",
        preview: "How Razorpay's Blade design system evolved",
        details:
          "Rama Krushna walked through the evolution of Blade, Razorpay's design system, from Figma plugins toward a code-first workflow. The guiding principle: ship functionality first, let the UI follow. The broader takeaway was that there are many valid paths to the same outcome — the right one depends on your team and moment."
      },
      {
        title: "LLM Confidence and AI Psychosis",
        speaker: "Anirudh",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/anirudhux" },
          { platform: "instagram", url: "https://instagram.com/anirudhshrinivas" },
          { platform: "website", url: "" }
        ],
        demoUrl: "https://pitch.com/v/confidentlai-cff5by",
        photo: "anirudh.jpg",
        preview: "How LLMs signal false confidence — illustrated by a model that refused to believe iOS 26 exists.",
        details:
          "Anirudh explored how language models express certainty even when they're wrong, using the concrete example of an LLM that flatly denied iOS 26 existed. The talk offered grounding techniques for designers working with AI tools — ways to stay anchored to reality when the model pushes back on what you know to be true."
      },
      {
        title: "Marketing App for SMBs",
        speaker: "Khyati",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/khyati_shekhar" },
          { platform: "instagram", url: "https://instagram.com/khyati.shekhar" },
          { platform: "website", url: "https://khyatis.com" }
        ],
        demoUrl: "",
        photo: "khyati.jpg",
        preview: "An app built to help her mom market local products in Kharagpur through Instagram banners and story posters.",
        details:
          "Khyati built a tool specifically for her mother's small business in Kharagpur, generating Instagram banners and story-sized posters to market products locally."
      },
      {
        title: "Not Everything Smart is a LLM",
        speaker: "Shreyas",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/wutamelonshrey" },
          { platform: "instagram", url: "https://instagram.com/wutamelonshrey" },
          { platform: "website", url: "https://shrey.fyi" }
        ],
        demoUrl: "https://cherrypicked.supply",
        photo: "shrey.jpg",
        preview: "AI experiments behind cherrypicked.supply.",
        details:
          "Shreyas who comes from an ML background pushed back on the assumption that every intelligent feature needs a language model. Walking through his work on cherrypicked.supply, he showed how the DOM and accessibility tree (axtree) can power smart, structured behaviour at a fraction of the cost and complexity of an LLM — and often more reliably."
      },
      {
        title: "Experimental Personal Site",
        speaker: "Diya",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/absurdiya_" },
          { platform: "instagram", url: "https://instagram.com/absurdiya_" },
          { platform: "website", url: "https://absurdiya.com" }
        ],
        demoUrl: "",
        photo: "diya.jpg",
        preview: "Diya explored what a personal site could feel like if it was designed as an experience rather than a page.",
        details:
          "Diya explored what a personal site could feel like if it was designed as an experience rather than a page. The result was a modular, customizable interface with a music layer, shaped with AI assistance."
      },
      {
        title: "Splitfree",
        speaker: "Sakshi",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/sakshi_026" },
          { platform: "instagram", url: "https://instagram.com/sakshi026" },
          { platform: "website", url: "https://sakshi-gupta.notion.site/Hey-I-m-Sakshi-158cff78f70080f2aba9dba284ba19c3" }
        ],
        demoUrl: "https://splitfree-tbc.vercel.app",
        photo: "sakshi.jpg",
        preview: "Splitfree lets you track shared expenses, settle debts instantly, stay friends forever.",
        details: "Splitfree, built as a a free alternative for Splitwise, is designed to make tracking shared expenses and settling debts easier."
      },
      {
        title: "Building Blrbloom",
        speaker: "Faris",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/pkmfaris" },
          { platform: "instagram", url: "https://instagram.com/notsofaris" },
          { platform: "website", url: "" }
        ],
        demoUrl: "https://blrbloom.com/",
        photo: "faris.jpg",
        preview: "Blrbloom.com lets you track blooming trees around Bangalore.",
        details: "What started as a way for Faris to learn Claude Code turned into Blrbloom. During the talk, we got to see the behind the scenes of building; the explorations and decisions taken to create the viral product. "
      },
      {
        title: "Pixels, Prompts & Prototypes ",
        speaker: "Kenneth",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/kenneth" },
          { platform: "instagram", url: "https://instagram.com/kennethmdesouza" },
          { platform: "website", url: "https://kenneth.dsouza.im/" }
        ],
        demoUrl: "",
        photo: "kenneth.jpg",
        preview: "Showcasing all the tiny games I've been making",
        details:
        "Kenneth's AI journey started with making mini games on Spielwerk and has since got him into making single page html games"
      }
    ]
  },
  {
    id: "1",
    title: "Design Demo Nights 01",
    startsAt: "2026-04-06T18:30:00+05:30",
    location: "Bengaluru",
    themeColor: "#b557df",
    demos: [
      {
        title: "Skills vs Agents 101",
        speaker: "Kenneth",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/kenneth" },
          { platform: "instagram", url: "https://instagram.com/kennethmdesouza" },
          { platform: "website", url: "https://kenneth.dsouza.im/" }
        ],
        demoUrl: "",
        photo: "kenneth.jpeg",
        preview: "A quick opening primer on skills, agents, and sub-agents for designers entering the space.",
        details:
          "Kenneth spoke about his journey making the tiger-parent eval skill and how it helped him understand the differences betweenskills vs agents."
      },
      {
        title: "Disposable Tools for Designers",
        speaker: "Gyan",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/gyanl" },
          { platform: "instagram", url: "https://instagram.com/gyanl" },
          { platform: "website", url: "https://gyanl.com/" }
        ],
        demoUrl: "",
        photo: "gyan.jpeg",
        preview: "Small code-made utilities and richer graphic exploration interfaces built for design work.",
        details:
          "Gyan showed a collection of disposable tools, plus a few that felt less disposable than expected. The demos ranged from small color-tool apps written in code to more complex interfaces for graphic exploration."
      },
      {
        title: "Prototyping complex role-based access designs",
        speaker: "Veethika",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/veethikaa" },
          { platform: "instagram", url: "https://instagram.com/veethikaa" },
          { platform: "website", url: "https://www.linkedin.com/in/veethika/" }
        ],
        demoUrl: "",
        photo: "veethika.jpeg",
        preview: "Using Claude to make role-based access designs feel real through quick artifact prototypes.",
        details:
          "Veethika shared the complexity of designing for a role-based access product, where permissions, states, and user roles can get hard to reason about quickly and how Claude helps her explore designs faster."
      },
      {
        title: "Agent Memory and Mini Apps",
        speaker: "Shuvam",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/shuvam360" },
          { platform: "instagram", url: "https://instagram.com/the_distorted_aura" },
          { platform: "website", url: "https://shuvam.xyz/" }
        ],
        demoUrl: "",
        photo: "shuvam.jpeg",
        preview: "A speedrun through agent memory experiments, reusable mini-apps, and a battle chess game.",
        details:
          "Shuvam speed-ran through a set of demos he has been exploring since 2021-22. The set included prototyping memory for agents, using agents to build reusable mini-apps, and a battle chess game."
      },
      {
        title: "Solacy",
        speaker: "Harsh",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/harsh_logs" },
          { platform: "instagram", url: "https://instagram.com/hsrambo.fig" },
          { platform: "website", url: "https://harsh-work-09.super.site/" }
        ],
        demoUrl: "https://www.solacy.design",
        photo: "harsh.jpeg",
        preview: "A Figma agent that acts like a design intern for simple, repetitive design tasks.",
        details:
          "Harsh walked through Solacy, a design-intern-style Figma agent he is building to help with simple tasks. The demo focused on the practical middle ground where agents can reduce repetitive design work without pretending to replace the designer."
      },
      {
        title: "Unslop",
        speaker: "Mustafa",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/ghuubear" },
          { platform: "instagram", url: "https://instagram.com/ghuubear" },
          { platform: "website", url: "https://snakeoilsalesman.in/" }
        ],
        demoUrl: "",
        photo: "mustafa.jpeg",
        preview: "Making Unslop – an AI assisted writer app.",
        details:
          "Mustafa shared a bit of his journey into making things, then showed Unslop, a writer app with ambitions of being the possibly ultimate writing tool."
      },
      {
        title: "Cooperatify",
        speaker: "Atishay",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/geekyboiiii" },
          { platform: "instagram", url: "https://instagram.com/_geekyboiiii_" },
          { platform: "website", url: "https://atishay.site" }
        ],
        demoUrl: "https://cooperatify.pro",
        photo: "atishay.jpeg",
        preview: "Cooperatify lets you convert your emotions to professional speak",
        details:
          "Atishay shared how Cooperatify.pro, a tool that rewrites your words or craft a reply instead of crashing out."
      },
      {
        title: "Pixel Spaceships and Sarvam AI Animations",
        speaker: "Jaljith",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/jwbabwy" },
          { platform: "instagram", url: "" },
          { platform: "website", url: "" }
        ],
        demoUrl: "",
        photo: "jaljith.jpeg",
        preview: "A pixel spaceship game and an app for exploring Sarvam AI animations.",
        details:
          "Jaljith closed the night by taking the room back to childhood with a pixel spaceship game, then forward again with an app built to explore Sarvam AI animations."
      }
    ]
  }
];

const upcomingSlot = document.querySelector("#upcoming-event");
const archiveList = document.querySelector("#archive-list");
const backdrop = document.querySelector("[data-dialog-backdrop]");
const closeButton = document.querySelector("[data-dialog-close]");
const dialogImage = document.querySelector("[data-dialog-image]");
const dialogSpeaker = document.querySelector("[data-dialog-speaker]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogDescription = document.querySelector("[data-dialog-description]");
const dialogLinks = document.querySelector("[data-dialog-links]");
let lastFocusedElement = null;

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(new Date(value));
}

function isUpcoming(event) {
  return new Date(event.startsAt).getTime() > Date.now();
}

function truncate(text, limit = 132) {
  if (!text) return "";
  if (text.length <= limit) return text;
  return `${text.slice(0, limit).trim()}...`;
}

function byMostRecent(a, b) {
  return new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime();
}

const LOGO_INNER_HTML = `
  <span class="scene-scale">
    <div class="scene">
      <div class="computer-unit">
        <div class="face front">
          <div class="screen-inset">
            <div class="crt">
              <div class="crt-glow">
                <div class="crt-ui graffiti-container">
                  <div class="graffiti-text">DESIGN<br>DEMO<br>NIGHTS</div>
                  <div class="subtitle-text">for designers</div>
                </div>
              </div>
            </div>
          </div>
          <div class="floppy-slot"></div>
          <div class="grill">
            <div class="vent"></div><div class="vent"></div><div class="vent"></div><div class="vent"></div>
            <div class="vent"></div><div class="vent"></div><div class="vent"></div><div class="vent"></div>
          </div>
          <div class="sticker sticker-starburst"></div>
          <div class="sticker sticker-bengaluru">Bengaluru</div>
        </div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="keyboard-assembly">
          <div class="kb-base">
            <div class="keys-grid">
              <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
              <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
              <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
              <div class="key wide"></div><div class="key"></div><div class="key"></div><div class="key"></div>
              <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
              <div class="key"></div><div class="key wide"></div>
              <div class="key"></div><div class="key"></div><div class="key space"></div><div class="key"></div><div class="key"></div><div class="key"></div>
            </div>
          </div>
          <div class="kb-front"></div>
          <div class="kb-back"></div>
          <div class="kb-left"></div>
          <div class="kb-right"></div>
          <div class="kb-shadow"></div>
        </div>
      </div>
    </div>
  </span>
`;

function makeLogoElement({ variant, accent, editionNumber } = {}) {
  const el = document.createElement("span");
  el.className = variant ? `brand-logo brand-logo--${variant}` : "brand-logo";
  el.setAttribute("aria-hidden", "true");
  if (accent) el.style.setProperty("--accent", accent);
  el.innerHTML = LOGO_INNER_HTML;
  if (editionNumber) {
    el.classList.add("brand-logo--edition");
    const text = el.querySelector(".graffiti-text");
    const subtitle = el.querySelector(".subtitle-text");
    if (text) text.textContent = editionNumber;
    if (subtitle) subtitle.textContent = "edition";
  }
  return el;
}

function editionNumber(event) {
  return event.title.match(/\d+/)?.[0] || "";
}

function renderUpcoming() {
  const upcoming = events.filter(isUpcoming).sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))[0];

  if (!upcoming) {
    upcomingSlot.replaceChildren();
    return;
  }

  const label = Object.assign(document.createElement("p"), {
    className: "section-label",
    textContent: "Upcoming event"
  });

  const card = document.createElement("article");
  card.className = "upcoming-card";

  const title = Object.assign(document.createElement("h2"), { textContent: upcoming.title });
  const meta = Object.assign(document.createElement("p"), {
    className: "event-meta",
    textContent: `${formatDate(upcoming.startsAt)} · ${upcoming.location}`
  });
  const cta = Object.assign(document.createElement("a"), {
    className: "button button-compact",
    href: upcoming.applyUrl,
    textContent: "Apply"
  });
  cta.addEventListener("click", () => {
    track("apply_clicked", { event_id: upcoming.id, event_title: upcoming.title });
  });

  const text = document.createElement("div");
  text.className = "upcoming-card-text";
  text.append(title, meta);

  card.append(
    makeLogoElement({ variant: "upcoming", accent: upcoming.themeColor }),
    text,
    cta
  );

  upcomingSlot.replaceChildren(label, card);
}

function makeDemoCard(demo, event) {
  const button = document.createElement("button");
  button.className = "demo-card";
  button.type = "button";
  button.setAttribute("aria-label", `${demo.title} by ${demo.speaker} — open details`);

  let image;
  if (demo.photo) {
    image = document.createElement("img");
    image.className = "demo-card-photo";
    image.src = `assets/events/${event.id}/photos/${demo.photo}`;
    image.alt = demo.speaker;
    image.loading = "lazy";
  } else {
    image = makeLogoElement({ variant: "card", accent: event.themeColor });
  }

  const body = document.createElement("span");
  body.className = "demo-card-body";

  const speaker = Object.assign(document.createElement("span"), {
    className: "speaker",
    textContent: demo.speaker
  });
  const title = Object.assign(document.createElement("span"), {
    className: "title",
    textContent: demo.title
  });
  const preview = Object.assign(document.createElement("span"), {
    className: "preview",
    textContent: truncate(demo.preview)
  });

  body.append(speaker, title, preview);
  button.append(image, body);
  button.addEventListener("click", () => {
    track("demo_card_clicked", {
      speaker: demo.speaker,
      demo_title: demo.title,
      event_id: event.id,
      event_title: event.title
    });
    openDialog(demo, event);
  });
  return button;
}

const CHEVRON_LEFT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';
const CHEVRON_RIGHT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

function initCarousel(wrap, count, prev, next) {
  const carousel = wrap.querySelector(".demo-carousel");
  const track = wrap.querySelector(".demo-carousel-track");
  if (!carousel || !track || !prev || !next) return;

  if (count < 2 || typeof EmblaCarousel !== "function") {
    const step = (dir) => {
      const card = track.querySelector(".demo-card");
      if (!card) return;
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap) || 0;
      const cardWidth = card.getBoundingClientRect().width + gap;
      carousel.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    };
    prev.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));
    return;
  }

  const embla = EmblaCarousel(carousel, {
    align: "start",
    containScroll: false,
    dragFree: false,
    loop: true,
    skipSnaps: false,
    draggable: true
  });

  prev.addEventListener("click", () => embla.scrollPrev());
  next.addEventListener("click", () => embla.scrollNext());
}

function makeArchiveEvent(event) {
  const section = document.createElement("article");
  section.className = "archive-event";

  const date = document.createElement("div");
  date.className = "archive-date";
  date.append(
    makeLogoElement({
      variant: "thumb",
      accent: event.themeColor,
      editionNumber: editionNumber(event)
    })
  );

  const cards = document.createElement("div");
  cards.className = "demo-carousel";
  const track = document.createElement("div");
  track.className = "demo-carousel-track";
  event.demos.forEach((demo) => track.append(makeDemoCard(demo, event)));
  cards.append(track);

  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "carousel-nav carousel-nav-prev";
  prev.setAttribute("aria-label", "Previous demo");
  prev.innerHTML = CHEVRON_LEFT;

  const next = document.createElement("button");
  next.type = "button";
  next.className = "carousel-nav carousel-nav-next";
  next.setAttribute("aria-label", "Next demo");
  next.innerHTML = CHEVRON_RIGHT;

  date.append(prev, next);
  section.append(date);

  if (event.demos.length) {
    const wrap = document.createElement("div");
    wrap.className = "carousel-wrap";
    wrap.append(cards);
    section.append(wrap);
    window.setTimeout(() => initCarousel(wrap, event.demos.length, prev, next), 0);
  } else {
    const empty = document.createElement("p");
    empty.className = "archive-empty";
    empty.textContent = "";
    section.append(empty);
  }
  return section;
}

function renderArchive() {
  const archiveEvents = events.filter((event) => !isUpcoming(event)).sort(byMostRecent);
  archiveList.replaceChildren(...archiveEvents.map(makeArchiveEvent));
}

const SOCIAL_ICONS = {
  twitter:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.16 17.52h1.832L7.084 4.126H5.117L17.083 19.77Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></svg>',
  website:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>'
};

const PLATFORM_LABELS = {
  twitter: "X",
  instagram: "Instagram",
  website: "Website"
};

function openDialog(demo, event, { skipHistory = false } = {}) {
  lastFocusedElement = document.activeElement;
  if (demo.photo) {
    const img = document.createElement("img");
    img.className = "dialog-speaker-photo";
    img.src = `assets/events/${event.id}/photos/${demo.photo}`;
    img.alt = demo.speaker;
    dialogImage.replaceChildren(img);
  } else {
    dialogImage.replaceChildren(
      makeLogoElement({ variant: "hero", accent: event.themeColor })
    );
  }
  dialogSpeaker.textContent = `${demo.speaker} / ${event.title}`;
  dialogTitle.textContent = demo.title;
  dialogDescription.textContent = demo.details;
  dialogLinks.replaceChildren();

  const validLinks = demo.speakerLinks.filter(({ url }) => url.trim() !== "");
  if (validLinks.length) {
    const socials = document.createElement("div");
    socials.className = "speaker-socials";
    socials.setAttribute("role", "group");
    socials.setAttribute("aria-label", `${demo.speaker} on social media`);
    validLinks.forEach(({ platform, url }) => {
      const a = document.createElement("a");
      a.className = "speaker-social";
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute(
        "aria-label",
        `${demo.speaker} on ${PLATFORM_LABELS[platform] || platform}`
      );
      a.innerHTML = SOCIAL_ICONS[platform] || SOCIAL_ICONS.website;
      a.addEventListener("click", () => {
        track("speaker_link_clicked", {
          speaker: demo.speaker,
          platform,
          url,
          demo_title: demo.title,
          event_id: event.id,
          event_title: event.title
        });
      });
      socials.append(a);
    });
    dialogLinks.append(socials);
  }

  if (demo.demoUrl) {
    const cta = document.createElement("a");
    cta.className = "button";
    cta.href = demo.demoUrl;
    cta.target = "_blank";
    cta.rel = "noopener";
    cta.textContent = "View demo";
    cta.addEventListener("click", () => {
      track("demo_link_clicked", {
        speaker: demo.speaker,
        demo_title: demo.title,
        url: demo.demoUrl,
        event_id: event.id,
        event_title: event.title
      });
    });
    dialogLinks.append(cta);
  }

  backdrop.hidden = false;
  closeButton.focus();
  document.body.style.overflow = "hidden";

  if (!skipHistory) {
    const slug = slugify(demo.title);
    if (location.hash !== `#${slug}`) {
      history.pushState({ slug }, "", `#${slug}`);
    }
  }
}

function closeDialog({ skipHistory = false } = {}) {
  backdrop.hidden = true;
  document.body.style.overflow = "";
  if (!skipHistory && location.hash) {
    history.pushState({}, "", location.pathname + location.search);
  }
  if (lastFocusedElement) lastFocusedElement.focus();
}

closeButton.addEventListener("click", () => closeDialog());
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !backdrop.hidden) closeDialog();
});

/* ─── Slug-based URLs for demos ─────────────────────────── */
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function findDemoBySlug(slug) {
  for (const event of events) {
    for (const demo of event.demos || []) {
      if (slugify(demo.title) === slug) return { demo, event };
    }
  }
  return null;
}

function syncFromHash() {
  const slug = location.hash.replace(/^#/, "");
  if (!slug) {
    if (!backdrop.hidden) closeDialog({ skipHistory: true });
    return;
  }
  const match = findDemoBySlug(slug);
  if (match) openDialog(match.demo, match.event, { skipHistory: true });
}

window.addEventListener("hashchange", syncFromHash);

/* ─── Brand monitor: power toggle ───────────────────────── */
const brandButton = document.querySelector(".brand");
const brandLogo = brandButton?.querySelector(".brand-logo");

/* ─── CRT power sound ────────────────────────────────────── */
function playBzzt(type = "on") {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const t = ctx.currentTime;

    if (type === "off") {
      /* TV turn-off: initial click → descending whine (flyback transformer
         winding down) → low thump (capacitor discharge) */

      // 1. Sharp click at the moment of power cut
      const clickLen = Math.floor(ctx.sampleRate * 0.018);
      const clickBuf = ctx.createBuffer(1, clickLen, ctx.sampleRate);
      const cd = clickBuf.getChannelData(0);
      for (let i = 0; i < clickLen; i++) cd[i] = (Math.random() * 2 - 1) * (1 - i / clickLen);
      const click = ctx.createBufferSource();
      click.buffer = clickBuf;
      const clickG = ctx.createGain();
      clickG.gain.setValueAtTime(0.9, t);
      click.connect(clickG); clickG.connect(ctx.destination);
      click.start(t);

      // 2. Descending sine sweep — 2 kHz → 30 Hz over 650 ms
      const whine = ctx.createOscillator();
      whine.type = "sine";
      whine.frequency.setValueAtTime(2000, t + 0.018);
      whine.frequency.exponentialRampToValueAtTime(30, t + 0.65);
      const whineG = ctx.createGain();
      // Multi-amplitude: quick rise to peak, slight sustain, then tail off
      whineG.gain.setValueAtTime(0, t + 0.018);
      whineG.gain.linearRampToValueAtTime(0.55, t + 0.07);
      whineG.gain.linearRampToValueAtTime(0.38, t + 0.22);
      whineG.gain.exponentialRampToValueAtTime(0.001, t + 0.68);
      whine.connect(whineG); whineG.connect(ctx.destination);
      whine.start(t + 0.018); whine.stop(t + 0.68);

      // 3. Second harmonic layer — adds richness to the sweep
      const whine2 = ctx.createOscillator();
      whine2.type = "sawtooth";
      whine2.frequency.setValueAtTime(3800, t + 0.018);
      whine2.frequency.exponentialRampToValueAtTime(55, t + 0.42);
      const whine2G = ctx.createGain();
      whine2G.gain.setValueAtTime(0, t + 0.018);
      whine2G.gain.linearRampToValueAtTime(0.18, t + 0.055);
      whine2G.gain.exponentialRampToValueAtTime(0.001, t + 0.42);
      whine2.connect(whine2G); whine2G.connect(ctx.destination);
      whine2.start(t + 0.018); whine2.stop(t + 0.42);

      // 4. Low-frequency thump — capacitor discharge
      const thump = ctx.createOscillator();
      thump.type = "sine";
      thump.frequency.setValueAtTime(85, t + 0.28);
      thump.frequency.exponentialRampToValueAtTime(18, t + 0.72);
      const thumpG = ctx.createGain();
      thumpG.gain.setValueAtTime(0, t + 0.28);
      thumpG.gain.linearRampToValueAtTime(0.75, t + 0.33);
      thumpG.gain.exponentialRampToValueAtTime(0.001, t + 0.72);
      thump.connect(thumpG); thumpG.connect(ctx.destination);
      thump.start(t + 0.28); thump.stop(t + 0.72);

      whine.onended = () => ctx.close();

    } else {
      /* TV turn-on: low thump → ascending electrical hum building up */
      const dur = 0.32;

      // Initial thump as power surges in
      const pop = ctx.createOscillator();
      pop.type = "sine";
      pop.frequency.setValueAtTime(140, t);
      pop.frequency.exponentialRampToValueAtTime(35, t + 0.18);
      const popG = ctx.createGain();
      popG.gain.setValueAtTime(0.65, t);
      popG.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      pop.connect(popG); popG.connect(ctx.destination);
      pop.start(t); pop.stop(t + 0.18);

      // Ascending sawtooth sweep — circuits energising
      const rise = ctx.createOscillator();
      rise.type = "sawtooth";
      rise.frequency.setValueAtTime(55, t + 0.02);
      rise.frequency.exponentialRampToValueAtTime(900, t + dur);
      const riseG = ctx.createGain();
      riseG.gain.setValueAtTime(0, t + 0.02);
      riseG.gain.linearRampToValueAtTime(0.28, t + 0.06);
      riseG.gain.exponentialRampToValueAtTime(0.001, t + dur);
      rise.connect(riseG); riseG.connect(ctx.destination);
      rise.start(t + 0.02); rise.stop(t + dur);

      rise.onended = () => ctx.close();
    }
  } catch (_) {}
}

function togglePower() {
  if (!brandLogo) return;
  const state = brandLogo.dataset.power || "on";
  if (state === "powering-off" || state === "powering-on") return;

  const crtGlow = brandLogo.querySelector(".crt-glow");
  if (!crtGlow) return;

  const next = state === "on" ? "off" : "on";
  track("monitor_toggled", { action: next === "off" ? "power_off" : "power_on" });
  brandLogo.dataset.power = next === "off" ? "powering-off" : "powering-on";
  playBzzt(next);

  const finish = () => {
    crtGlow.removeEventListener("animationend", finish);
    clearTimeout(safety);
    brandLogo.dataset.power = next;
  };
  const safety = setTimeout(finish, 1500);
  crtGlow.addEventListener("animationend", finish);
}

brandButton?.addEventListener("click", togglePower);

//renderUpcoming();
renderArchive();
syncFromHash();

/* ─── Retro OS Easter Egg ────────────────────────────────── */

/* Wrap each character of the boot logo in a span for wave animation */
(function () {
  const logo = document.querySelector(".ros-boot-logo");
  if (!logo) return;
  logo.innerHTML = [...logo.textContent].map((ch, i) =>
    ch === " "
      ? " "
      : `<span style="animation-delay:${(i * 0.09).toFixed(2)}s">${ch}</span>`
  ).join("");
})();

const ros = {
  el: document.getElementById("retro-os"),
  boot: document.getElementById("ros-boot"),
  desktop: document.getElementById("ros-desktop"),
  iconGrid: document.getElementById("ros-icon-grid"),
  windowsEl: document.getElementById("ros-windows"),
  led: null,
  zTop: 100,
  clockTimer: null,
  prevFocus: null,
};

/* Key sequence: type D-D-N anywhere on the page */
const ROS_KEYS = ["d", "d", "n"];
let rosBuf = [];
let rosBufTimer;

document.addEventListener("keydown", (e) => {
  if (ros.el?.classList.contains("is-open")) return;
  if (e.target.matches("input,textarea,[contenteditable]")) return;
  const k = e.key.toLowerCase();
  if (k === ROS_KEYS[rosBuf.length]) {
    rosBuf.push(k);
  } else {
    rosBuf = k === ROS_KEYS[0] ? [k] : [];
  }
  clearTimeout(rosBufTimer);
  rosBufTimer = setTimeout(() => { rosBuf = []; }, 2000);
  if (rosBuf.length === ROS_KEYS.length) {
    rosBuf = [];
    triggerGlitchAndLaunch();
  }
});

function triggerGlitchAndLaunch() {
  if (window.innerWidth <= 768) return;
  document.documentElement.classList.add("page-glitching");
  setTimeout(() => {
    document.documentElement.classList.remove("page-glitching");
    launchRetroOS();
  }, 600);
}

function launchRetroOS() {
  if (!ros.el) return;
  ros.prevFocus = document.activeElement;
  ros.el.classList.add("is-open");
  ros.boot.hidden = false;
  ros.desktop.hidden = true;
  if (ros.led) ros.led.classList.add("is-on");
  document.body.style.overflow = "hidden";
  playBzzt("on");
  const crt = document.getElementById("ros-crt");
  if (crt) crt.setAttribute("data-state", "powering-on");
  track("retro_os_opened", {});
}

function showDesktop() {
  ros.boot.hidden = true;
  ros.desktop.hidden = false;
  renderDesktopIcons();
  updateClock();
  track("retro_desktop_shown", {});
}

function closeRetroOS() {
  if (!ros.el) return;
  document.body.style.overflow = "";
  clearTimeout(ros.clockTimer);
  playBzzt("off");
  const crt = document.getElementById("ros-crt");
  if (crt) {
    crt.setAttribute("data-state", "powering-off");
    const finish = () => {
      ros.el.classList.remove("is-open");
      crt.removeAttribute("data-state");
      if (ros.led) ros.led.classList.remove("is-on");
      ros.prevFocus?.focus();
    };
    crt.addEventListener("animationend", finish, { once: true });
    setTimeout(finish, 700);
  } else {
    ros.el.classList.remove("is-open");
    if (ros.led) ros.led.classList.remove("is-on");
    ros.prevFocus?.focus();
  }
  track("retro_os_closed", {});
}

function updateClock() {
  const el = document.getElementById("ros-clock");
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  ros.clockTimer = setTimeout(updateClock, 10000);
}

/* ─── Desktop icons ─── */

function renderDesktopIcons() {
  if (!ros.iconGrid) return;
  ros.iconGrid.innerHTML = "";
  const past = events.filter((ev) => !isUpcoming(ev) && ev.demos.length > 0)
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
  past.forEach((ev, i) => {
    const btn = makeDesktopIcon(ev, i);
    ros.iconGrid.appendChild(btn);
  });
}

function makeDesktopIcon(ev, index) {
  const btn = document.createElement("button");
  btn.className = "ros-icon";
  btn.type = "button";
  btn.style.setProperty("--folder-color", ev.themeColor);
  btn.style.animationDelay = `${index * 80}ms`;
  const num = editionNumber(ev);
  const label = `EDITION\n${String(num).padStart(2, "0")}`;
  btn.innerHTML = `<span class="ros-icon-img" aria-hidden="true"></span><span class="ros-icon-label">${label.replace("\n", "<br>")}</span>`;
  btn.setAttribute("aria-label", `Open ${ev.title}`);
  let clickTimer;
  btn.addEventListener("click", () => {
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { /* single click: select visual */ }, 200);
  });
  btn.addEventListener("dblclick", () => {
    clearTimeout(clickTimer);
    openFolderWindow(ev);
  });
  return btn;
}

/* ─── Window factory ─── */

function makeWindow({ id, title, content, large = false }) {
  const existing = document.getElementById("ros-win-" + id);
  if (existing) {
    if (existing.style.display === "none") {
      existing.style.display = "";
      document.getElementById("ros-taskbar-apps")
        ?.querySelector(`[data-win-id="${existing.id}"]`)?.remove();
    }
    bringToFront(existing);
    return;
  }
  if (!ros.windowsEl) return;

  const offset = Math.min(ros.windowsEl.children.length * 20, 60);
  const win = document.createElement("div");
  win.id = "ros-win-" + id;
  win.className = "ros-win";
  if (large) {
    win.style.cssText = `width: 70%; height: 68%; left: calc(15% + ${offset}px); top: calc(6% + ${offset}px); z-index: ${++ros.zTop}`;
  } else {
    win.style.cssText = `left: ${60 + offset}px; top: ${30 + offset}px; z-index: ${++ros.zTop}`;
  }

  const titlebar = document.createElement("div");
  titlebar.className = "ros-win-titlebar";

  /* Traffic-light buttons */
  const btnGroup = document.createElement("div");
  btnGroup.className = "ros-win-btns";

  const closeBtn = document.createElement("button");
  closeBtn.className = "ros-win-btn ros-win-btn--close";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.addEventListener("click", () => {
    document.getElementById("ros-taskbar-apps")
      ?.querySelector(`[data-win-id="${win.id}"]`)?.remove();
    win.remove();
  });

  const minBtn = document.createElement("button");
  minBtn.className = "ros-win-btn ros-win-btn--min";
  minBtn.type = "button";
  minBtn.setAttribute("aria-label", "Minimize");
  minBtn.addEventListener("click", () => {
    win.style.display = "none";
    const apps = document.getElementById("ros-taskbar-apps");
    if (!apps || apps.querySelector(`[data-win-id="${win.id}"]`)) return;
    const pill = document.createElement("button");
    pill.className = "ros-taskbar-app";
    pill.dataset.winId = win.id;
    pill.textContent = title;
    pill.addEventListener("click", () => {
      win.style.display = "";
      bringToFront(win);
      pill.remove();
    });
    apps.appendChild(pill);
  });

  const maxBtn = document.createElement("button");
  maxBtn.className = "ros-win-btn ros-win-btn--max";
  maxBtn.type = "button";
  maxBtn.setAttribute("aria-label", "Maximize");
  maxBtn.addEventListener("click", () => {
    win.classList.toggle("is-maximized");
  });

  minBtn.textContent = "─";
  maxBtn.textContent = "□";
  closeBtn.textContent = "×";
  btnGroup.append(minBtn, maxBtn, closeBtn);

  const titleSpan = document.createElement("span");
  titleSpan.textContent = title;

  titlebar.append(titleSpan, btnGroup);

  const body = document.createElement("div");
  body.className = "ros-win-body";
  if (typeof content === "string") {
    body.innerHTML = content;
  } else {
    body.appendChild(content);
  }

  ["nw", "ne", "sw", "se"].forEach((dir) => {
    const handle = document.createElement("div");
    handle.className = `ros-win-resize ros-win-resize--${dir}`;
    win.appendChild(handle);
  });

  win.append(titlebar, body);
  win.addEventListener("pointerdown", () => bringToFront(win));
  initDrag(win);
  initResize(win);
  ros.windowsEl.appendChild(win);
}

function bringToFront(win) {
  win.style.zIndex = ++ros.zTop;
}

function initDrag(win) {
  const bar = win.querySelector(".ros-win-titlebar");
  bar.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".ros-win-btns")) return;
    if (win.classList.contains("is-maximized")) return;
    const container = ros.windowsEl;
    const containerRect = container.getBoundingClientRect();
    const startX = e.clientX - containerRect.left - win.offsetLeft;
    const startY = e.clientY - containerRect.top - win.offsetTop;

    bar.setPointerCapture(e.pointerId);

    const onMove = (ev) => {
      const maxX = container.offsetWidth - win.offsetWidth;
      const maxY = container.offsetHeight - win.offsetHeight;
      win.style.left = Math.max(0, Math.min(ev.clientX - containerRect.left - startX, maxX)) + "px";
      win.style.top  = Math.max(0, Math.min(ev.clientY - containerRect.top - startY, maxY)) + "px";
    };
    bar.addEventListener("pointermove", onMove);
    bar.addEventListener("pointerup", () =>
      bar.removeEventListener("pointermove", onMove), { once: true });
  });
}

function initResize(win) {
  const container = ros.windowsEl;
  const dirs = ["nw", "ne", "sw", "se"];
  dirs.forEach((dir) => {
    const handle = win.querySelector(`.ros-win-resize--${dir}`);
    if (!handle) return;
    handle.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      if (win.classList.contains("is-maximized")) return;
      handle.setPointerCapture(e.pointerId);
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = win.offsetLeft;
      const startTop = win.offsetTop;
      const startW = win.offsetWidth;
      const startH = win.offsetHeight;

      const onMove = (ev) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        let newLeft = startLeft, newTop = startTop;
        let newW = startW, newH = startH;

        if (dir.includes("e")) newW = Math.max(200, startW + dx);
        if (dir.includes("s")) newH = Math.max(80, startH + dy);
        if (dir.includes("w")) { newW = Math.max(200, startW - dx); newLeft = startLeft + (startW - newW); }
        if (dir.includes("n")) { newH = Math.max(80, startH - dy); newTop = startTop + (startH - newH); }

        win.style.left = Math.max(0, newLeft) + "px";
        win.style.top  = Math.max(0, newTop) + "px";
        win.style.width  = newW + "px";
        win.style.height = newH + "px";
        win.style.maxHeight = "none";
      };
      handle.addEventListener("pointermove", onMove);
      handle.addEventListener("pointerup", () =>
        handle.removeEventListener("pointermove", onMove), { once: true });
    });
  });
}

/* ─── Folder window ─── */

function openFolderWindow(ev) {
  const num = editionNumber(ev);
  const title = `EDITION_${String(num).padStart(2, "0")}`;
  makeWindow({ id: "folder-" + ev.id, title, content: makeFolderContent(ev), large: true });
  track("retro_folder_opened", { edition: ev.id });
}

function makeFolderContent(ev) {
  const grid = document.createElement("div");
  grid.className = "ros-file-grid";

  /* README.MD for the edition */
  const readme = makeFileIcon({ label: "README.MD", type: "doc" });
  readme.addEventListener("dblclick", () => openReadmeWindow(ev));
  grid.appendChild(readme);

  /* One file per demo */
  ev.demos.forEach((demo) => {
    const name = slugify(demo.title).toUpperCase().replace(/-/g, "_") + ".TXT";
    const icon = makeFileIcon({ label: name, type: "photo", photo: demo.photo, eventId: ev.id });
    icon.addEventListener("dblclick", () => openDemoWindow(demo, ev));
    grid.appendChild(icon);
  });

  return grid;
}

function makeFileIcon({ label, type, photo, eventId }) {
  const btn = document.createElement("button");
  btn.className = "ros-file";
  btn.type = "button";
  btn.setAttribute("aria-label", label);

  const icon = document.createElement("span");
  icon.className = type === "photo" ? "ros-file-icon ros-file-icon--photo" : "ros-file-icon";

  if (type === "photo" && photo && eventId) {
    const img = document.createElement("img");
    img.src = `assets/events/${eventId}/photos/${photo}`;
    img.alt = "";
    img.loading = "lazy";
    icon.appendChild(img);
  }

  const nameEl = document.createElement("span");
  nameEl.textContent = label;

  btn.append(icon, nameEl);
  return btn;
}

/* ─── Demo window ─── */

function openDemoWindow(demo, ev) {
  const id = "demo-" + slugify(demo.title);
  const title = slugify(demo.title).toUpperCase().replace(/-/g, "_") + ".TXT";
  makeWindow({ id, title, content: makeDemoContent(demo, ev) });
  track("retro_demo_viewed", { demo: demo.title, edition: ev.id });
}

function makeDemoContent(demo, ev) {
  const wrap = document.createElement("div");

  if (demo.photo) {
    const img = document.createElement("img");
    img.className = "ros-demo-photo";
    img.src = `assets/events/${ev.id}/photos/${demo.photo}`;
    img.alt = demo.speaker;
    wrap.appendChild(img);
  }

  const kicker = document.createElement("p");
  kicker.className = "ros-demo-kicker";
  kicker.textContent = `${demo.speaker} / ${ev.title}`;

  const titleEl = document.createElement("p");
  titleEl.className = "ros-demo-title";
  titleEl.textContent = demo.title;

  const hr = document.createElement("hr");
  hr.style.cssText = "border:none;border-top:1px solid #3a2060;margin:8px 0 10px";

  const body = document.createElement("p");
  body.className = "ros-demo-body";
  body.textContent = demo.details;

  wrap.append(kicker, titleEl, hr, body);

  const validLinks = (demo.speakerLinks || []).filter(({ url }) => url.trim());
  if (validLinks.length || demo.demoUrl) {
    const links = document.createElement("div");
    links.className = "ros-demo-links";
    validLinks.forEach(({ platform, url }) => {
      const a = document.createElement("a");
      a.className = "ros-demo-link";
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = (PLATFORM_LABELS[platform] || platform).toUpperCase();
      a.addEventListener("click", () => track("retro_link_clicked", { platform, demo: demo.title }));
      links.appendChild(a);
    });
    if (demo.demoUrl) {
      const cta = document.createElement("a");
      cta.className = "ros-demo-link ros-demo-link--cta";
      cta.href = demo.demoUrl;
      cta.target = "_blank";
      cta.rel = "noopener";
      cta.textContent = "VIEW DEMO";
      cta.addEventListener("click", () => track("retro_demo_link_clicked", { demo: demo.title }));
      links.appendChild(cta);
    }
    wrap.appendChild(links);
  }

  return wrap;
}

/* ─── README window ─── */

function openReadmeWindow(ev) {
  const id = "readme-" + ev.id;
  const num = editionNumber(ev);
  const title = `EDITION_${String(num).padStart(2, "0")}_README.MD`;
  const content = `<div class="ros-readme"><strong>${ev.title}</strong>\n\n` +
    `Date: ${formatDate(ev.startsAt)}\n` +
    `Location: ${ev.location}\n` +
    `Demos: ${ev.demos.length}\n\n` +
    ev.demos.map((d, i) => `${i + 1}. ${d.title} — ${d.speaker}`).join("\n") +
    `</div>`;
  makeWindow({ id, title, content });
}

/* ─── Event wiring ─── */

document.getElementById("ros-power")?.addEventListener("click", closeRetroOS);

/* Click anywhere on the boot screen to start */
ros.boot?.addEventListener("click", showDesktop);

document.addEventListener("keydown", (e) => {
  if (!ros.el?.classList.contains("is-open")) return;
  if (e.key === "Escape") { closeRetroOS(); return; }
  /* Any other key while boot screen is visible → go to desktop */
  if (ros.boot && !ros.boot.hidden) showDesktop();
});
