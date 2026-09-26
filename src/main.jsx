import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const work = [
  {
    id: "cellbay",
    client: "Cellbay",
    type: "FLAGSHIP CASE STUDY · RETAIL",
    result: "1.8K → 52K Instagram followers",
    detail: "Built a content, influencer and performance engine for a 50+ store retail network.",
    metrics: ["52K followers", "4M+ reel", "6.5M+ reel", "200+ DMs/day"],
    period: "2023 — 2025 · 1.9 years",
    role: "Digital Marketing Manager",
    startingPoint: ["1.8K Instagram followers", "2-person team", "No Google Ads account", "No Google Business locations"],
    approach: ["Influencer marketing + regional creators", "3-second hooks + segmented offers", "CRM-led product sales tracking", "Meta acquisition + WooCommerce funnel"],
    evidence: ["First influencer reel: ₹2–3L reported revenue", "Realme GT5: 5 units sold at Khammam in 30 days", "50 mobiles sold across stores for the promoted product", "21,642 followers recorded in a May 2024 working log"],
    story: [
      "Joined when Instagram had 1.8K followers and had been inactive for around two months.",
      "Built an influencer-led content engine using short hooks, segmented offers, regional meme pages and festival collaborations.",
      "Connected promoted products to daily CRM sales reporting so content and campaigns could be tied back to store sales.",
      "Expanded acquisition through Meta campaigns, WooCommerce and operational fulfilment through Shiprocket."
    ]
  },
  {
    id: "kapil",
    client: "Kapil Chits Karnataka",
    type: "PERFORMANCE MARKETING",
    result: "₹2.8 Cr conversions in 3 months",
    detail: "Three Meta campaigns focused on conversion and audience growth.",
    metrics: ["₹2.8Cr conversions", "3 campaigns", "0 → 500 followers"],
    focus: ["Meta conversion campaigns", "Audience acquisition", "Social growth"],
    story: [
      "Planned and executed three Meta campaigns around conversion-focused acquisition.",
      "Used campaign structure and audience targeting to support measurable business outcomes.",
      "Built the social presence from 0 to 500 followers during the same three-month period."
    ]
  },
  {
    id: "hmtv",
    client: "HMTV",
    type: "YOUTUBE · NEWS · OPERATIONS",
    result: "$500 → $5,000 revenue in 2 months",
    detail: "Managed content operations and a 20+ editor team across a Telugu news ecosystem.",
    metrics: ["10× revenue", "20+ editors", "8 channels", "6K videos/month"],
    focus: ["YouTube monetization", "Editorial operations", "Multi-channel publishing"],
    story: [
      "Managed HMTV Telugu News Live and a wider multi-channel content operation.",
      "Organised editors into specialised streams covering news, entertainment, live, movies and sports.",
      "Coordinated social media managers and production workflows at high publishing volume."
    ]
  },
  {
    id: "hans",
    client: "The Hans India",
    type: "ORGANIC GROWTH",
    result: "20K Instagram followers organically",
    detail: "Scaled social and YouTube without a paid media budget.",
    metrics: ["20K IG followers", "$0 → $3K YouTube", "12K subscribers"],
    focus: ["Organic social", "YouTube growth", "Content distribution"],
    story: [
      "Built an organic content and distribution approach over nine months.",
      "Grew Instagram by 20K followers without a media budget.",
      "Moved YouTube revenue from $0 to $3,000 and added 12K subscribers organically."
    ]
  },
  {
    id: "orchards",
    client: "Orchards",
    type: "LEAD GENERATION",
    result: "7,000+ leads generated",
    detail: "Combined paid acquisition with social growth for a property-focused campaign.",
    metrics: ["7K+ leads", "300 → 3.7K followers", "₹45K/month"],
    focus: ["Lead generation", "Paid acquisition", "Audience growth"],
    story: [
      "Built lead-generation campaigns designed around qualified enquiry volume.",
      "Grew the social audience from roughly 300 to 3,700 followers.",
      "Managed campaign spend of approximately ₹45K per month."
    ]
  },
  {
    id: "aduri",
    client: "Aduri Group",
    type: "REAL ESTATE · LEAD GEN",
    result: "3 plot sales from 3 campaigns",
    detail: "Ran campaigns across Shadnagar, Gachibowli and Jubilee Hills.",
    metrics: ["3 campaigns", "3 locations", "300+ leads"],
    focus: ["Real-estate lead generation", "Location-based campaigns", "Sales attribution"],
    story: [
      "Set up lead-generation campaigns for three Hyderabad locations.",
      "Generated 300+ form leads and tracked campaign outcomes through the sales process.",
      "Three plot sales were reported across the three campaign initiatives."
    ]
  },
  {
    id: "onshorekare",
    client: "Onshorekare",
    type: "SOCIAL MEDIA · USA",
    result: "International audience growth",
    detail: "Social media and Meta campaigns for a US-based travel insurance business.",
    metrics: ["700+ follower growth", "North America", "Meta campaigns"],
    focus: ["Social media", "Meta campaigns", "North America audience"],
    story: [
      "Worked as Social Media Specialist for a US-based travel insurance agency.",
      "Ran Meta campaigns targeting international travellers and USA-based audiences.",
      "Grew the North American social audience by roughly 700 followers between February and September."
    ]
  }
];

const capabilities = [
  ["01", "Strategy", "Audience, positioning, channel strategy and campaign planning."],
  ["02", "Content", "Hooks, social formats, creator collaborations and content systems."],
  ["03", "Performance", "Meta campaigns, lead generation, conversion and acquisition."],
  ["04", "Growth", "Organic social, YouTube, communities and distribution."],
  ["05", "Measurement", "Platform analytics, CRM signals, leads, sales and revenue."],
  ["06", "Operations", "Teams, editors, workflows and high-volume publishing."]
];

function App() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">YS<span>.</span></a>
        <nav>
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">DIGITAL MARKETING MANAGER · 4+ YEARS</p>
              <h1>I make brands<br /><span>hard to ignore.</span></h1>
              <p className="hero-text">
                I build digital growth systems across social, content, paid media and YouTube —
                then connect the work to the numbers that matter.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">See the work <span>↓</span></a>
                <a className="button ghost" href="#contact">Let's talk <span>↗</span></a>
              </div>
              <div className="hero-trust">
                <span>SELECTED RESULTS</span>
                <b>52K</b><i>followers</i>
                <b>₹2.8Cr</b><i>conversions</i>
                <b>7K+</b><i>leads</i>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit orbit-one"></div>
              <div className="hero-orbit orbit-two"></div>
              <div className="hero-proof-card">
                <div className="card-top"><span>01 / 07</span><span>FLAGSHIP</span></div>
                <div className="hero-proof-label">CELLBAY</div>
                <div className="hero-proof-number">1.8K <small>→</small> 52K</div>
                <p>Instagram growth through content, influencers and performance marketing.</p>
                <div className="proof-row"><span>4M+</span><span>6.5M+</span><span>200+</span></div>
                <div className="proof-row-labels"><span>REEL VIEWS</span><span>REEL VIEWS</span><span>DMS / DAY</span></div>
              </div>
              <div className="floating-tag tag-one">CONTENT × PERFORMANCE</div>
              <div className="floating-tag tag-two">RESULTS FIRST</div>
            </div>
          </div>
          <div className="scroll-cue"><span></span> SCROLL TO EXPLORE</div>
        </section>

        <section className="ticker">
          <span>STRATEGY</span><b>✦</b><span>CONTENT</span><b>✦</b><span>PAID MEDIA</span><b>✦</b><span>GROWTH</span><b>✦</b><span>YOUTUBE</span><b>✦</b><span>ANALYTICS</span><b>✦</b><span>ACQUISITION</span>
        </section>

        <section className="featured" id="work">
          <div className="section-kicker"><span>01</span><span>FEATURED CASE STUDY</span></div>
          <div className="featured-head">
            <div>
              <p className="eyebrow">CELLBAY · 2023 — 2025</p>
              <h2>The account was quiet.<br /><em>The growth wasn't.</em></h2>
            </div>
            <p>From an inactive 1.8K-follower account to a reported 52K peak — with creator partnerships, sharp hooks, CRM tracking and paid acquisition working together.</p>
          </div>

          <div className="featured-stage">
            <div className="featured-left">
              <div className="featured-big">52<span>K</span></div>
              <p>reported Instagram follower peak</p>
              <div className="featured-meta"><span>START</span><strong>1.8K</strong><span>TEAM</span><strong>2 → 4</strong><span>NETWORK</span><strong>50+ STORES</strong></div>
            </div>
            <div className="featured-right">
              <div className="signal"><span>VIRAL REEL</span><strong>4M+</strong><small>views</small></div>
              <div className="signal"><span>VIRAL REEL</span><strong>6.5M+</strong><small>views</small></div>
              <div className="signal"><span>DAILY ACQUISITION</span><strong>200+</strong><small>reported DMs / day</small></div>
              <button className="featured-button" onClick={() => setSelected(work[0])}>Open full case study <span>↗</span></button>
            </div>
          </div>

          <div className="featured-bottom">
            <span>WHAT CHANGED</span>
            <p>Influencer marketing became a repeatable acquisition channel. Product content was connected to store-level sales reporting. Regional creators, meme pages and festival campaigns kept the brand culturally relevant.</p>
          </div>
        </section>

        <section className="work section">
          <div className="section-head">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Different industries.<br /><em>Same obsession: results.</em></h2>
            </div>
            <p className="section-note">Open a project to see the context, approach and documented outcomes.</p>
          </div>
          <div className="work-grid">
            {work.slice(1).map((item, index) => (
              <button className="work-card" key={item.id} onClick={() => setSelected(item)}>
                <div className="work-top"><span>{item.type}</span><span>0{index + 2}</span></div>
                <div className="work-body">
                  <div className="card-arrow">↗</div>
                  <h3>{item.client}</h3>
                  <p>{item.detail}</p>
                  <strong>{item.result}</strong>
                </div>
                <div className="view">View case study <span>↗</span></div>
              </button>
            ))}
          </div>
        </section>

        <section className="proof" id="proof">
          <div className="proof-intro">
            <p className="eyebrow">THE RECEIPTS</p>
            <h2>Numbers tell the story<br />when the <em>work backs them.</em></h2>
            <p>Selected outcomes from campaigns, working logs and reported client results. Where records are incomplete or confidential, figures are presented with context rather than invented precision.</p>
          </div>
          <div className="stats">
            <div><strong>2,800%</strong><span>Instagram growth · 1.8K → 52K</span></div>
            <div><strong>₹2.8Cr</strong><span>Reported conversions · 3 months</span></div>
            <div><strong>7K+</strong><span>Leads generated · paid acquisition</span></div>
            <div><strong>10×</strong><span>YouTube revenue · $500 → $5K</span></div>
          </div>
        </section>

        <section className="capabilities section">
          <div className="section-head">
            <div><p className="eyebrow">WHAT I ACTUALLY DO</p><h2>Strategy is only useful<br /><em>when it ships.</em></h2></div>
            <p className="section-note">I work across the full loop — from deciding what to say to proving what happened after it went live.</p>
          </div>
          <div className="cap-grid">
            {capabilities.map(([num, title, copy]) => (
              <div className="cap" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div><p className="eyebrow">ABOUT YASHASWI</p><h2>Creative brain.<br /><em>Performance mindset.</em></h2></div>
          <div className="about-copy">
            <p className="about-lead">I’m Yashaswi Surya, a Digital Marketing Manager who likes the part of marketing where creative ideas meet a spreadsheet.</p>
            <p>Across retail, media, real estate and travel, I’ve worked across Meta, Google, YouTube, influencer marketing, organic growth, lead generation and large-scale content operations.</p>
            <p>My strength is connecting the pieces: the hook, the audience, the campaign, the content team, the CRM signal and the commercial outcome.</p>
            <div className="chips"><span>Meta Ads</span><span>Google Ads</span><span>YouTube</span><span>Social Strategy</span><span>Influencer Marketing</span><span>Content Systems</span><span>Lead Generation</span><span>Analytics</span></div>
          </div>
        </section>

        <section className="process section">
          <div className="section-head">
            <div><p className="eyebrow">HOW I WORK</p><h2>Find the signal.<br /><em>Build around it.</em></h2></div>
            <p className="section-note">A practical loop that keeps strategy close to execution and execution close to measurement.</p>
          </div>
          <div className="process-grid">
            <div><span>01</span><h3>Diagnose</h3><p>Audience, offer, funnel and the business metric that matters.</p></div>
            <div><span>02</span><h3>Build</h3><p>Content, campaign structure and channel systems around the insight.</p></div>
            <div><span>03</span><h3>Distribute</h3><p>Organic, paid, creator and platform-native distribution.</p></div>
            <div><span>04</span><h3>Measure</h3><p>Analytics, CRM, leads, sales and revenue — then iterate.</p></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">NEXT PROJECT</p>
            <h2>Got a growth problem<br />worth <em>solving?</em></h2>
            <p>Let's talk about the audience, the number you want to move and what it will take to get there.</p>
            <div className="contact-actions">
              <a className="contact-link" href="https://github.com/Yashaswisurya" target="_blank" rel="noreferrer">Open GitHub profile <span>↗</span></a>
              <a className="contact-secondary" href="https://github.com/Yashaswisurya/Yashaswis-GPT-Repo" target="_blank" rel="noreferrer">View source <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Yashaswi Surya</span><span>Digital Marketing · Growth · Strategy</span></footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <article className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)} aria-label="Close">×</button>
            <div className="modal-head"><p className="eyebrow">{selected.type}</p><span>{selected.period || "SELECTED PROJECT"}</span></div>
            <h2>{selected.client}</h2>
            <p className="modal-result">{selected.result}</p>
            <div className="modal-metrics">{selected.metrics.map((m) => <span key={m}>{m}</span>)}</div>
            <div className="case-detail-grid">
              <div><p className="case-label">{selected.id === "cellbay" ? "STARTING POINT" : "FOCUS"}</p>{(selected.id === "cellbay" ? selected.startingPoint : selected.focus).map((x) => <span className="case-pill" key={x}>{x}</span>)}</div>
              <div><p className="case-label">{selected.id === "cellbay" ? "APPROACH" : "SCOPE"}</p>{(selected.id === "cellbay" ? selected.approach : selected.focus).map((x) => <span className="case-pill" key={x}>{x}</span>)}</div>
            </div>
            <div className="story"><p className="case-label">CASE STUDY</p>{selected.story.map((s, i) => <p key={i}>{s}</p>)}</div>
            {selected.id === "cellbay" && <div className="evidence"><p className="case-label">WORKING EVIDENCE</p>{selected.evidence.map((x) => <div key={x}>✓ {x}</div>)}</div>}
            <p className="modal-disclaimer">Selected figures are based on campaign records, working logs and reported outcomes. Some client details and supporting assets are omitted or generalized where confidentiality/NDA restrictions apply.</p>
          </article>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
