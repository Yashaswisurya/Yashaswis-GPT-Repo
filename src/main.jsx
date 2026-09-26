import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const work = [
  {
    id: "cellbay",
    client: "Cellbay",
    type: "Digital Growth · Retail",
    result: "1.8K → 52K Instagram followers",
    detail: "Built a content, influencer and performance engine for a 50+ store retail network.",
    metrics: ["52K followers", "4M+ viral reel", "6.5M+ viral reel", "200+ DMs/day"],
    story: [
      "Joined when the Instagram account had 1.8K followers and had been inactive for around two months.",
      "Built an influencer-led content system using short hooks, segmented offers, regional meme pages and festival collaborations.",
      "Connected promoted products to daily CRM sales reporting so campaign activity could be tied back to store sales.",
      "Expanded the digital acquisition layer with Meta campaigns, WooCommerce sales and operational shipping through Shiprocket."
    ]
  },
  {
    id: "kapil",
    client: "Kapil Chits Karnataka",
    type: "Performance Marketing",
    result: "₹2.8 Cr conversions in 3 months",
    detail: "Three Meta campaigns focused on conversion and audience growth.",
    metrics: ["₹2.8 Cr conversions", "3 campaigns", "500 followers"],
    story: [
      "Planned and executed three Meta campaigns around conversion-focused acquisition.",
      "Used campaign structure and audience targeting to support measurable business outcomes.",
      "Built the social presence from 0 to 500 followers during the same three-month period."
    ]
  },
  {
    id: "hmtv",
    client: "HMTV",
    type: "YouTube · News",
    result: "$500 → $5,000 revenue in 2 months",
    detail: "Managed content operations and a 20+ editor team for a Telugu news ecosystem.",
    metrics: ["10× revenue", "20+ editors", "8 channels", "6K videos/month"],
    story: [
      "Managed HMTV Telugu News Live and a wider multi-channel content operation.",
      "Organised editors into specialised streams covering news, entertainment, live, movies and sports.",
      "Coordinated social media managers and production workflows at high publishing volume."
    ]
  },
  {
    id: "hans",
    client: "The Hans India",
    type: "Organic Growth",
    result: "20K Instagram followers organically",
    detail: "Scaled social and YouTube without paid media budget.",
    metrics: ["20K IG followers", "$0 → $3K YouTube", "12K subscribers"],
    story: [
      "Built an organic content and distribution approach over nine months.",
      "Grew Instagram by 20K followers without a media budget.",
      "Moved YouTube revenue from $0 to $3,000 and added 12K subscribers organically."
    ]
  },
  {
    id: "orchards",
    client: "Orchards",
    type: "Lead Generation",
    result: "7,000+ leads generated",
    detail: "Combined paid acquisition with social growth for a property-focused campaign.",
    metrics: ["7K+ leads", "300 → 3.7K followers", "₹45K/month spend"],
    story: [
      "Built lead-generation campaigns designed around qualified enquiry volume.",
      "Grew the social audience from roughly 300 to 3,700 followers.",
      "Managed campaign spend of approximately ₹45K per month."
    ]
  },
  {
    id: "aduri",
    client: "Aduri Group",
    type: "Real Estate · Lead Gen",
    result: "3 plot sales from 3 campaigns",
    detail: "Ran campaigns across Shadnagar, Gachibowli and Jubilee Hills.",
    metrics: ["3 campaigns", "3 locations", "300+ leads"],
    story: [
      "Set up lead-generation campaigns for three Hyderabad locations.",
      "Generated 300+ form leads and tracked campaign outcomes through the sales process.",
      "The user reports three plot sales attributed across the three campaign initiatives."
    ]
  },
  {
    id: "onshorekare",
    client: "Onshorekare",
    type: "Social Media · USA",
    result: "International audience growth",
    detail: "Social media and Meta campaigns for a US-based travel insurance business.",
    metrics: ["700+ follower growth", "North America", "Meta campaigns"],
    story: [
      "Worked as Social Media Specialist for a US-based travel insurance agency.",
      "Ran Meta campaigns targeting international travellers and USA-based audiences.",
      "Grew the North American social audience by roughly 700 followers between February and September."
    ]
  }
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">YS<span>.</span></a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk ↗</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">DIGITAL MARKETING MANAGER · 4+ YEARS</p>
            <h1>I turn attention<br /><em>into growth.</em></h1>
            <p className="hero-text">
              Strategy, social media, paid acquisition and content systems built around one thing:
              measurable business results.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work ↓</a>
              <a className="button ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-label">SELECTED PROOF</div>
            <div className="big-number">52K<span>+</span></div>
            <p>Instagram followers scaled from 1.8K through content, influencers and performance marketing.</p>
            <div className="mini-grid">
              <div><strong>₹2.8Cr</strong><span>3-month conversions</span></div>
              <div><strong>$5K</strong><span>monthly YouTube revenue</span></div>
            </div>
          </div>
        </section>

        <section className="ticker">
          <span>STRATEGY</span><b>✦</b><span>CONTENT</span><b>✦</b><span>PAID MEDIA</span><b>✦</b><span>GROWTH</span><b>✦</b><span>ANALYTICS</span><b>✦</b><span>ACQUISITION</span>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Work that has<br /><em>moved the numbers.</em></h2>
            </div>
            <p className="section-note">A selection of campaigns and growth systems across retail, media, real estate, travel and financial services.</p>
          </div>

          <div className="work-grid">
            {work.map((item, index) => (
              <button className={`work-card card-${index + 1}`} key={item.id} onClick={() => setSelected(item)}>
                <div className="work-top"><span>{item.type}</span><span>0{index + 1}</span></div>
                <div className="work-body">
                  <h3>{item.client}</h3>
                  <p>{item.detail}</p>
                  <strong>{item.result}</strong>
                </div>
                <div className="view">View case study <span>↗</span></div>
              </button>
            ))}
          </div>
        </section>

        <section className="proof">
          <div className="proof-intro"><p className="eyebrow">THE NUMBERS</p><h2>Growth is better<br />when you can <em>measure it.</em></h2></div>
          <div className="stats">
            <div><strong>2,800%</strong><span>Instagram growth</span></div>
            <div><strong>₹2.8Cr</strong><span>Conversions in 3 months</span></div>
            <div><strong>7K+</strong><span>Leads generated</span></div>
            <div><strong>10×</strong><span>YouTube revenue growth</span></div>
          </div>
        </section>

        <section className="about section" id="about">
          <div><p className="eyebrow">ABOUT</p><h2>Creative thinking.<br /><em>Performance mindset.</em></h2></div>
          <div className="about-copy">
            <p>I’m Yashaswi Surya, a Digital Marketing Manager focused on building systems that connect content, audiences and commercial outcomes.</p>
            <p>Across retail, media, real estate and travel, I’ve worked across Meta, Google, YouTube, influencer marketing, organic growth, lead generation and content operations.</p>
            <div className="chips"><span>Meta Ads</span><span>Google Ads</span><span>YouTube</span><span>Social Strategy</span><span>Influencer Marketing</span><span>Content Systems</span><span>Lead Generation</span><span>Analytics</span></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">CONTACT</p>
          <h2>Have a growth problem<br />worth <em>solving?</em></h2>
          <a className="contact-link" href="mailto:hello@yashaswisurya.com">hello@yashaswisurya.com ↗</a>
        </section>
      </main>

      <footer><span>© 2026 Yashaswi Surya</span><span>Digital Marketing · Growth · Strategy</span></footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <article className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>×</button>
            <p className="eyebrow">{selected.type}</p>
            <h2>{selected.client}</h2>
            <p className="modal-result">{selected.result}</p>
            <div className="modal-metrics">{selected.metrics.map((m) => <span key={m}>{m}</span>)}</div>
            <div className="story">{selected.story.map((s, i) => <p key={i}>{s}</p>)}</div>
          </article>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
