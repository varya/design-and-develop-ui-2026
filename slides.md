<!-- Source: /Users/varya/WebDev/Talks/design-and-develop-ui-2025/index.mdx -->

<!-- .slide: class="cover" -->

<p class="cover-eyebrow">design-and-develop-ui · 30 September 2026</p>
<h1 class="cover-title">Designing and Developing UI</h1>
<p class="cover-tagline">From CSS scale pain to design systems, and why AI makes the system even more necessary.</p>
<p class="cover-meta"><strong>Varya Stepanova</strong> &nbsp;·&nbsp; 30 September 2026</p>

---

<!-- .slide: class="about-me" -->

<img src="pictures/selfie.jpg" class="photo" alt="Varya Stepanova" />

### Varya Stepanova
<p class="role"><strong>Design Systems Architect</strong><br/>
<small>engineering manager, frontend architect, independent consultant</small></p>

#### Contacts
<div class="contacts">
  <a href="https://bridge-the-gap.dev/" target="_blank" rel="noopener noreferrer"><svg class="btg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.13 24.412" fill="currentColor" aria-hidden="true"><path d="M0 0h47.13v24.412h-6.024v-9.54c0-6.262-2.582-9.64-7.445-9.64h-.067c-4.862 0-7.411 3.444-7.411 10.136v9.044h-6.358v-7.527c0-6.162-2.548-9.474-7.11-9.474h-.066c-4.192 0-6.54 2.948-6.54 8.017v8.984H0z"/></svg><span>Bridge-the-Gap.dev</span></a>
  <a href="https://www.linkedin.com/in/varyastepanova/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i><span>linkedin.com/in/varyastepanova</span></a>
  <a href="https://varya.me" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe" aria-hidden="true"></i><span>varya.me</span></a>
</div>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Who I am</span></div>

Note:
My name is Varya. I work as an independent consultant on design systems with major focus on frontend development. I started with libraries of components about 15 years ago, before the term "design systems" even emerged.

By that time, my own understanding and the community's was more technical. We were paying a lot of attention to how to code the components, how to document them.

Slightly by today, I changed my focus to more process and people oriented. I realised that the biggest obstacle on the way is the gap between specialists: designers and developers, product people and business people. In the meanwhile I got a design education that helped me to see the picture at scale.

Nowadays, even though I am still doing a lot of hands-on and architectural frontend work related to the design systems, I shift to engineering & project management, educating, and enganging people.

---

<p class="eyebrow">The arc</p>

## What we cover today

<div class="tiers">
  <div class="tier">
    <span class="tier-label">01 · Scale pain</span>
    <p class="tier-title">Why large UI projects break</p>
  </div>
  <div class="tier t2">
    <span class="tier-label">02 · CSS &amp; JS</span>
    <p class="tier-title">What is actually hard</p>
  </div>
  <div class="tier">
    <span class="tier-label">03 · Components</span>
    <p class="tier-title">Encapsulation as the fix</p>
  </div>
  <div class="tier t2">
    <span class="tier-label">04 · Design systems</span>
    <p class="tier-title">From tech to a system</p>
  </div>
  <div class="tier t3">
    <span class="tier-label">05 · AI &amp; MCP</span>
    <p class="tier-title">Why structure matters more</p>
  </div>
</div>

<p class="closer">I have given a version of this lecture for about ten years. The spine stayed. The ending moved.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">The arc</span></div>

Note:
Jubilee angle: started around component development in CSS (2015 talk), now design systems plus AI. Continuity and evolution.

---

<p class="eyebrow">Scale</p>

## Large projects hurt in predictable ways

<div class="cards">
  <div class="card b">
    <span class="num">01</span>
    <h3>Complex codebases</h3>
    <p>Intricate structures and dependencies. Hard to navigate, harder to change safely.</p>
  </div>
  <div class="card">
    <span class="num">02</span>
    <h3>Large dynamic teams</h3>
    <p>Many styles of coding. Consistency becomes a coordination problem, not a taste problem.</p>
  </div>
  <div class="card r">
    <span class="num">03</span>
    <h3>Evolving requirements</h3>
    <p>The product moves. The UI has to move with it without rotting the codebase.</p>
  </div>
</div>

<p class="closer">Maintenance is the fourth pain: keeping it organized, efficient, and bug-free over years.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Scale &nbsp;·&nbsp; ↓ CSS</span></div>

Note:
These four challenges are why we need better ways to design and develop UI. Next: where CSS and JS actually break at scale.

---

<p class="eyebrow">CSS</p>

<p class="statement">People say CSS is hard because of centering.</p>

<p class="lede">Vertical centering, equal-height columns, browser quirks, memorised tricks. You can look those up. That is not what breaks large projects.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">CSS &nbsp;·&nbsp; ↓ what is hard</span></div>

>>>

<p class="eyebrow">CSS · what is hard</p>

## What really makes CSS hard

<ul class="dotted">
  <li><strong>No scoping.</strong> Everything is global. One rule can touch the whole site.</li>
  <li><strong>Specificity conflicts.</strong> You escalate selectors until you hit <code>!important</code>.</li>
  <li><strong>Non-deterministic matches.</strong> Selectors describe shapes, not addresses.</li>
  <li><strong>No real dependency management.</strong> <code>@import</code> is not enough.</li>
  <li><strong>Unused code.</strong> On 100 pages, can you delete this rule safely?</li>
</ul>

<p class="closer">The properties are not the hard part. The selectors are.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">What really makes CSS hard</span></div>

Note:
Analogy: deterministic address is Konemiehentie 2, Espoo. CSS is "a house on a small street with a green tree and the sea two blocks away." Specificity hell: navbar rules fighting id selectors fighting !important.

---

<p class="eyebrow">JavaScript</p>

## Old-school JS at scale

<div class="blocks">
  <div class="block b">
    <span class="block-label">DOM</span>
    <h3>Direct manipulation</h3>
    <p>Select nodes, mutate them, hope nothing else depended on that structure.</p>
  </div>
  <div class="block">
    <span class="block-label">Events</span>
    <h3>Listener soup</h3>
    <p>Many callbacks, unclear ownership, hard to reason about order.</p>
  </div>
  <div class="block r">
    <span class="block-label">State</span>
    <h3>No single source</h3>
    <p>UI and data drift. Updates become inconsistent by default.</p>
  </div>
</div>

<p class="closer">Then maintenance mayhem: fear of changing anything, similar pieces diverge, growth gets expensive.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">JavaScript</span></div>

Note:
Spaghetti code without clear structure. Risky updates because of unknown dependencies. Same components start to look and behave differently over time.

---

<p class="eyebrow">Components</p>

## Component-driven development

<p class="lede">Break the interface into reusable, independent pieces. Bundle markup, style, and behaviour in one unit.</p>

<div class="cards">
  <div class="card b">
    <span class="num">01</span>
    <h3>Breakdown</h3>
    <p>Independent components instead of page-sized blobs.</p>
  </div>
  <div class="card">
    <span class="num">02</span>
    <h3>Encapsulation</h3>
    <p>Functionality and styling live together.</p>
  </div>
  <div class="card r">
    <span class="num">03</span>
    <h3>Consistency</h3>
    <p>Same building blocks, same behaviour across the product.</p>
  </div>
</div>

<p class="closer">Reusability, easier testing, better collaboration, faster iteration. Frameworks (React, Angular, Vue, Web Components) all aim here.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Components &nbsp;·&nbsp; ↓ styling</span></div>

>>>

<p class="eyebrow">Components · styling</p>

## How we scoped CSS again

<div class="compare">
  <div class="then">
    <h3>Scoped approaches</h3>
    <ul>
      <li>CSS Modules (unique class names by default)</li>
      <li>CSS-in-JS (Emotion, JSS; some libs now maintenance-mode)</li>
      <li>Utility-first (Tailwind, UnoCSS)</li>
    </ul>
  </div>
  <div class="now">
    <h3>What they buy you</h3>
    <ul>
      <li>Local scope instead of global collisions</li>
      <li>Styles next to the component that owns them</li>
      <li>Composition without selector wars</li>
    </ul>
  </div>
</div>

<p class="closer">Technology alone is not a system. Next step is how the whole team builds UI.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Styling approaches</span></div>

Note:
Styled-components and Stitches: mention as historical / maintenance where relevant. Emotion and utility-first are still in active use. Modular design practices: single responsibility, composability, naming.

---

<p class="eyebrow">The reframe</p>

<p class="statement">Design and UI need a systematic approach.</p>

<p class="lede">A car is not a pile of parts. An interface is not a pile of pages. Products are systems. As soon as we stop perceiving them as pages, the better. (Anna Debenham)</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">The reframe &nbsp;·&nbsp; ↓ design systems</span></div>

---

<p class="eyebrow">Design systems</p>

## What a design system is

<p class="statement">A systematic approach for creating, implementing, and maintaining user interfaces.</p>

<p class="lede">Not only a component library. Reusable components, patterns, and guidelines so products stay cohesive across platforms and teams.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Definition &nbsp;·&nbsp; ↓ parts</span></div>

>>>

<p class="eyebrow">Design systems · parts</p>

## Four layers that stack

<div class="tiers">
  <div class="tier">
    <span class="tier-label">Tokens</span>
    <p class="tier-title">Colors, type, spacing</p>
    <p class="tier-desc">The smallest shared decisions. Change a token, the system updates together.</p>
  </div>
  <div class="tier t2">
    <span class="tier-label">Components</span>
    <p class="tier-title">Buttons, forms, cards, navigation</p>
    <p class="tier-desc">Reusable UI built on tokens. Same look, same behaviour.</p>
  </div>
  <div class="tier t3">
    <span class="tier-label">Patterns &amp; guidelines</span>
    <p class="tier-title">Layouts, interactions, usage rules</p>
    <p class="tier-desc">How pieces combine. Accessibility, responsive rules, brand voice.</p>
  </div>
</div>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Four layers</span></div>

Note:
Buttons that look the same but behave differently: classic failure without a system (Andrey Okonetchnikov demo). Catalogs: designsystems.surf, component.gallery, public systems like Fluent, Carbon, Polaris, GOV.UK.

---

<p class="eyebrow">Why it matters</p>

## What design systems change

<div class="blocks">
  <div class="block b">
    <span class="block-label">Product</span>
    <h3>Consistency</h3>
    <p>One look and feel across products. Users recognise the brand. Teams stop reinventing the same button.</p>
  </div>
  <div class="block">
    <span class="block-label">People</span>
    <h3>Shared language</h3>
    <p>Designers and developers stop talking past each other. Onboarding gets shorter.</p>
  </div>
  <div class="block r">
    <span class="block-label">Pace</span>
    <h3>Faster delivery</h3>
    <p>Pre-built pieces cut design and build time. Time to market drops. More time for the real product work.</p>
  </div>
</div>

<p class="closer">The design–development disconnect (tools, mental models, org structure) is structural. A system is how you bridge it.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Why it matters &nbsp;·&nbsp; ↓ process</span></div>

>>>

<p class="eyebrow">Why · process</p>

## Old handoff vs shared system

<div class="compare">
  <div class="then">
    <h3>Old school</h3>
    <ul>
      <li>Static mockups</li>
      <li>Thrown over the wall</li>
      <li>Developers recreate from scratch</li>
      <li>Inconsistency by default</li>
    </ul>
  </div>
  <div class="now">
    <h3>With a design system</h3>
    <ul>
      <li>Shared library of components</li>
      <li>Designers and developers pull from the same source</li>
      <li>Faster, more consistent shipping</li>
      <li>UI composition from reusable parts</li>
    </ul>
  </div>
</div>

<p class="closer">I wrote my IDBM master thesis at Aalto (2021) on aligning UX designers and UI developers with design systems.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Process shift</span></div>

Note:
Dashed process (more back-and-forth) is better than pure handoff but still not systematic. Tools: Figma, Storybook, Style Dictionary, Chromatic, etc. Maturity grows over time. Start simple, move right.

---

<p class="eyebrow">Hard mode</p>

## Advanced challenges (after you have a system)

<ul class="dotted">
  <li><strong>Maintain and scale.</strong> The system has to stay alive as products grow.</li>
  <li><strong>API design.</strong> What designers can set should match what developers can code.</li>
  <li><strong>Standardisation vs customisation.</strong> Too rigid and teams fork. Too loose and you lose the system.</li>
  <li><strong>Automation.</strong> Tokens, docs, visual tests. Manual sync does not survive.</li>
</ul>

<p class="closer">Aligning APIs across design and engineering is often the real bridge. Configuration layers beat one-size-fits-all.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Advanced challenges</span></div>

Note:
Arnaud's comment: align APIs so design access matches dev. Spotify article on multiple layers of abstraction is a good illustration of config vs customisation.

---

<p class="eyebrow">AI</p>

<p class="statement">Design systems are AI-friendly because they are structured.</p>

<p class="lede">An agent can introduce tokens and build components "by analogy". Automations speed variants, tests, and docs. Without a system, AI just accelerates the mess.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">AI &nbsp;·&nbsp; ↓ the problem</span></div>

>>>

<p class="eyebrow">AI · the problem</p>

## Uncontrolled generation

<div class="cards">
  <div class="card b">
    <span class="num">01</span>
    <h3>Agents everywhere</h3>
    <p>Teams generate UI code quickly. Speed is not the scarce resource anymore.</p>
  </div>
  <div class="card">
    <span class="num">02</span>
    <h3>Ad-hoc solutions</h3>
    <p>Without guidance: Tailwind one-offs, custom CSS, new patterns every ticket.</p>
  </div>
  <div class="card r">
    <span class="num">03</span>
    <h3>Adoption drops</h3>
    <p>Brand coherence breaks. The design system gets bypassed for "faster" shortcuts.</p>
  </div>
</div>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">Uncontrolled AI</span></div>

>>>

<p class="eyebrow">AI · MCP</p>

## Tame AI with a design-system MCP

<p class="lede">A Model Context Protocol server gives agents structured access to your system: components, tokens, usage rules. Correct usage becomes the default path.</p>

<ul class="dotted">
  <li><strong>Component registry</strong> with current APIs and guidelines</li>
  <li><strong>Multi-model testing</strong> (Claude, GPT, Gemini behave differently)</li>
  <li><strong>Usage analytics</strong> on what agents request</li>
  <li><strong>Continuous sync</strong> when the system changes</li>
</ul>

<p class="closer">Infrastructure investment. Brand coherence in an AI-driven workflow depends on it.</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">MCP for design systems</span></div>

Note:
Credit Pierre Bremell for MCP schema framing if showing a diagram later. Future trends: more automation, dynamic theming, smarter testing, easier product adoption.

---

<p class="eyebrow">A question</p>

<p class="statement">When your team ships UI with AI next week, will it pull from the system, or invent another button?</p>

<div class="footer"><span class="url">design-and-develop-ui</span><span class="mark">A question</span></div>

---

<!-- .slide: class="closing" -->

<h2 class="closing-title">Designing and Developing UI</h2>
<p class="closing-sub">If you want to dig into design systems, process, or MCP setups, drop me a line. Happy to talk.</p>
<p class="closing-contact">
  Varya Stepanova &nbsp;·&nbsp;
  <a href="mailto:mail@varya.me">mail@varya.me</a> &nbsp;·&nbsp;
  <a href="https://varya.me">varya.me</a> &nbsp;·&nbsp;
  <a href="https://bridge-the-gap.dev/">bridge-the-gap.dev</a>
</p>
