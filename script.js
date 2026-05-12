const LUMA_URL = "https://luma.com/calendar/cal-Lz8YkYPCTUZPX9t";
const INSTAGRAM_URL = "https://www.instagram.com/DesignDemoNights";

const events = [
  {
    id: "event-04",
    title: "Design Demo Nights 04",
    startsAt: "2026-06-15T18:30:00+05:30",
    location: "Bengaluru",
    theme: "Designing with agents",
    themeColor: "#b557df",
    applyUrl: LUMA_URL,
    demos: []
  },
  {
    id: "event-03",
    title: "Design Demo Nights 03",
    startsAt: "2026-04-20T18:30:00+05:30",
    location: "Bengaluru",
    theme: "Systems that talk back",
    themeColor: "#76c7d9",
    recap:
      "Edition 03 covered trust, AI-assisted interface design, music tools, Sketch as an LLM-friendly canvas, founder sprints, portfolio archetypes, and a couple of bonus demos.",
    demos: [
      {
        title: "Safe Food Guide",
        speaker: "Santrupti",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/santrupti" }
        ],
        demoUrl: "",
        preview: "A look at food decisions, trust, and the product thinking behind Safe Food Guide.",
        details:
          "Santrupti walked through the decisions, habits, and trust gaps that shape how people choose what to eat. The demo unpacked how those observations led to Safe Food Guide, a product direction focused on making food choices feel more informed and less anxious."
      },
      {
        title: "Playground",
        speaker: "Kshitij",
        speakerLinks: [],
        demoUrl: "https://getplayground.app",
        preview: "A collaborative canvas for designing interfaces beyond the usual AI chatbox pattern.",
        details:
          "Kshitij demoed getplayground.app, a collaborative way to design interfaces with AI in the loop. The interesting move is that Playground treats AI-assisted design as a shared visual workspace, not just a chatbox that occasionally produces screens."
      },
      {
        title: "Music Production App",
        speaker: "Rhiddit",
        speakerLinks: [],
        demoUrl: "",
        preview: "A new music production app with a beautifully skeuomorphic interface shaped with Codex.",
        details:
          "Rhiddit showed an app for people who want to get into music production without being buried under the usual wall of controls. Codex helped produce a polished skeuomorphic interface, giving the tool a tactile, studio-like quality."
      },
      {
        title: "Sketch as an AI Canvas",
        speaker: "Arjun",
        speakerLinks: [],
        demoUrl: "",
        preview: "A reminder that Sketch's JSON support makes it surprisingly well suited to LLM-generated design.",
        details:
          "Arjun made the case for looking at Sketch again. Because Sketch supports JSON, and LLMs are effective at generating structured JSON, it may be a stronger canvas for AI-generated design than many newer AI-first tools with smaller design toolsets."
      },
      {
        title: "A Week at Next Door Company",
        speaker: "Sankalp",
        speakerLinks: [],
        demoUrl: "",
        preview: "A look inside a week-long sprint and how distribution shapes the business around the product.",
        details:
          "Sankalp shared how a week-long sprint looks while building Next Door Company. The demo moved between product work and business reality, especially how distribution choices affect what gets built and how the company grows."
      },
      {
        title: "Portfolio Archetypes",
        speaker: "Anirudh",
        speakerLinks: [],
        demoUrl: "",
        preview: "A visualization project for understanding recurring patterns in design portfolios.",
        details:
          "Anirudh showcased a visualization project built to identify design portfolio archetypes. The work turns a fuzzy question into something more inspectable: what kinds of portfolios exist, how they differ, and where a designer's body of work might fit."
      },
      {
        title: "Lumina and Finance App",
        speaker: "Atishay",
        speakerLinks: [],
        demoUrl: "https://lumina-design.xyz",
        preview: "A bonus demo of Lumina Design plus an in-progress finance management app.",
        details:
          "A couple of no-shows opened up time for Atishay to show Lumina Design and a finance management app still in progress. The bonus demos gave the room a quick look at both a public design tool and a more practical personal finance workflow."
      }
    ]
  },
  {
    id: "event-02",
    title: "Design Demo Nights 02",
    startsAt: "2026-04-06T18:30:00+05:30",
    location: "Bengaluru",
    theme: "Prototype weather",
    themeColor: "#e86635",
    recap:
      "A Friday night in Indiranagar brought 35 designers together, with seven community speakers showing tools, prototypes, agents, games, writing apps, and a few power-cut-resistant demos.",
    demos: [
      {
        title: "Skills vs Agents 101",
        speaker: "Kenneth",
        speakerLinks: [
          { platform: "twitter", url: "https://x.com/kenneth" }
        ],
        demoUrl: "",
        preview: "A quick opening primer on skills, agents, and sub-agents for designers entering the space.",
        details:
          "Kenneth opened the meetup with a short intro to Design Demo Nights and a Skills vs Agents 101. What seemed like it might be too basic turned out to be useful context, since only a handful of people in the room had used skills or sub-agents before."
      },
      {
        title: "Disposable Tools for Designers",
        speaker: "Gyanl",
        speakerLinks: [],
        demoUrl: "",
        preview: "Small code-made utilities and richer graphic exploration interfaces built for design work.",
        details:
          "Gyanl showed a collection of disposable tools, plus a few that felt less disposable than expected. The demos ranged from small color-tool apps written in code to more complex interfaces for graphic exploration."
      },
      {
        title: "Claude Artifacts for RBAC",
        speaker: "Veethika",
        speakerLinks: [],
        demoUrl: "",
        preview: "Using Claude to make role-based access designs feel real through quick artifact prototypes.",
        details:
          "Veethika shared the complexity of designing for a role-based access product, where permissions, states, and user roles can get hard to reason about quickly. She showed how Claude helps her make fast artifact prototypes that make the design feel concrete enough to test and discuss."
      },
      {
        title: "Agent Memory and Mini Apps",
        speaker: "Shuvam",
        speakerLinks: [],
        demoUrl: "",
        preview: "A speedrun through agent memory experiments, reusable mini-apps, and a battle chess game.",
        details:
          "Shuvam speed-ran through a set of demos he has been exploring since 2021-22. The set included prototyping memory for agents, using agents to build reusable mini-apps, and a battle chess game."
      },
      {
        title: "Solacy",
        speaker: "Harsh",
        speakerLinks: [],
        demoUrl: "",
        preview: "A Figma agent that acts like a design intern for simple, repetitive design tasks.",
        details:
          "Harsh walked through Solacy, a design-intern-style Figma agent he is building to help with simple tasks. The demo focused on the practical middle ground where agents can reduce repetitive design work without pretending to replace the designer."
      },
      {
        title: "Unslop",
        speaker: "Mustafa",
        speakerLinks: [],
        demoUrl: "",
        preview: "A writer app shaped by a broader journey into making useful things.",
        details:
          "Mustafa shared a bit of his journey into making things, then showed Unslop, a writer app with ambitions of being the possibly ultimate writing tool. The demo was less about novelty and more about giving writing software a sharper point of view."
      },
      {
        title: "Cooperatify",
        speaker: "Atishay",
        speakerLinks: [
          { platform: "website", url: "https://cooperatify.pro" }
        ],
        demoUrl: "https://cooperatify.pro",
        preview: "A bonus walkthrough of how Atishay uses Claude, with Cooperatify in action.",
        details:
          "With a little time left, Atishay shared how he uses Claude in his own workflow. The highlight was seeing Cooperatify.pro in action, a tool that felt immediately useful for people thinking through collaboration and product work."
      },
      {
        title: "Pixel Spaceships and Sarvam AI Animations",
        speaker: "Jaljith",
        speakerLinks: [],
        demoUrl: "",
        preview: "A childhood-flavored pixel spaceship game followed by an app for exploring Sarvam AI animations.",
        details:
          "Jaljith closed the night by taking the room back to childhood with a pixel spaceship game, then forward again with an app built to explore Sarvam AI animations. It was a fitting end to a night that moved easily between playful prototypes and serious tools."
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

  const image = makeLogoElement({ variant: "card", accent: event.themeColor });

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
  button.addEventListener("click", () => openDialog(demo, event));
  return button;
}

const CHEVRON_LEFT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';
const CHEVRON_RIGHT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

function wrapWithCarouselNav(carousel, count) {
  const wrap = document.createElement("div");
  wrap.className = "carousel-wrap";

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

  wrap.append(carousel, prev, next);
  window.setTimeout(() => initCarousel(wrap, count), 0);
  return wrap;
}

function initCarousel(wrap, count) {
  const carousel = wrap.querySelector(".demo-carousel");
  const track = wrap.querySelector(".demo-carousel-track");
  const prev = wrap.querySelector(".carousel-nav-prev");
  const next = wrap.querySelector(".carousel-nav-next");
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
    skipSnaps: false
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
    }),
    Object.assign(document.createElement("span"), { textContent: event.title })
  );

  const cards = document.createElement("div");
  cards.className = "demo-carousel";
  const track = document.createElement("div");
  track.className = "demo-carousel-track";
  event.demos.forEach((demo) => track.append(makeDemoCard(demo, event)));
  cards.append(track);

  section.append(date);
  if (event.demos.length) {
    section.append(wrapWithCarouselNav(cards, event.demos.length));
  } else {
    const empty = document.createElement("p");
    empty.className = "archive-empty";
    empty.textContent = event.recap;
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
  dialogImage.replaceChildren(
    makeLogoElement({ variant: "hero", accent: event.themeColor })
  );
  dialogSpeaker.textContent = `${demo.speaker} / ${event.title}`;
  dialogTitle.textContent = demo.title;
  dialogDescription.textContent = demo.details;
  dialogLinks.replaceChildren();

  if (demo.speakerLinks && demo.speakerLinks.length) {
    const socials = document.createElement("div");
    socials.className = "speaker-socials";
    socials.setAttribute("role", "group");
    socials.setAttribute("aria-label", `${demo.speaker} on social media`);
    demo.speakerLinks.forEach(({ platform, url }) => {
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

function togglePower() {
  if (!brandLogo) return;
  const state = brandLogo.dataset.power || "on";
  if (state === "powering-off" || state === "powering-on") return;

  const crtGlow = brandLogo.querySelector(".crt-glow");
  if (!crtGlow) return;

  const next = state === "on" ? "off" : "on";
  brandLogo.dataset.power = next === "off" ? "powering-off" : "powering-on";

  const finish = () => {
    crtGlow.removeEventListener("animationend", finish);
    clearTimeout(safety);
    brandLogo.dataset.power = next;
  };
  const safety = setTimeout(finish, 1500);
  crtGlow.addEventListener("animationend", finish);
}

brandButton?.addEventListener("click", togglePower);

renderUpcoming();
renderArchive();
syncFromHash();
