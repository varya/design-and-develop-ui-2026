# Speaker Cheat Sheet: Designing and Developing UI in 2026

## Slide 1: Designing and Developing UI in 2026 (Cover)
- *(Title slide, no specific notes)*

## Slide 2: Varya Stepanova
- **Intro:** Software engineer, frontend focus, independent consultant.
- **Experience:** 15 years, started before the term "design systems" existed.
- **Evolution:** Shifted from purely technical focus to process/people oriented.
- **Goal:** Bridge the gap between designers, developers, and business.

## Slide 3: Summary
- **Outline:** Properties of large UI projects, industry solutions, design systems (planning, governance, business), and AI's role.
- **Core message:** Tools were built for smaller jobs, components divide work, a system is more than a library, shared interface, governance, cost, AI, and what to study.

## Slide 4: Scale
- **The Problem:** Scale makes UI production special.
- **CSS:** 30 years old, originally for bold text/alignment, now used for complex UIs.
- **JS:** DOM manipulation is messy for complex UIs (shared tree, state piles up).
- **Mismatch:** Design hands over pictures, engineering needs systems.

## Slide 5: CSS Memes (Window frame)
- **Point:** The intention of people who write CSS often doesn't match reality.

## Slide 6: UI Production (Peter Griffin blinds)
- **Point:** One confident pull, and the whole thing comes down wrong.

## Slide 7: Shared UI (Doctor knee tap)
- **Point:** Operating large UI codebases: you touch one place, another moves.
- **Cause:** Non-deterministic CSS (scoping, tokens).

## Slide 8: Components (Divide the work)
- **Solution:** Divide work, tackle each piece at once.
- **Action:** Componentize interfaces across all technologies.

## Slide 9: Without components
- **Problem:** Reinventing solutions for every piece.
- **Result:** Leads to inconsistency and maintenance nightmares.

## Slide 10: Across technologies
- **Point:** Component approach works across JS (React, Angular, Vue), CSS (CSS-in-JS, modules, Tailwind), and native browser elements.

## Slide 11: System (Car parts)
- **Point:** Composing systems out of parts. A pile of components alone is not a system; it's just the first step.

## Slide 12: The reframe
- **Point:** Products are systems, not a pile of pages. Stop perceiving them as pages.

## Slide 13: The old way
- **Process:** Waterfall (design whole view -> code -> release).
- **Reality:** Mismatches, design breakdowns, delays, undelivered work.

## Slide 14: The new way
- **Process:** Iterative process where each component has its own development cycle.
- **Action:** Small design ideas implemented fast. Both sides pull from one library.

## Slide 15: Components sit inside patterns
- **Point:** Need patterns to produce new components.
- **Tokens:** Design tokens (colors, spaces) sit outside and feed components.

## Slide 16: A pattern library is a kit
- **Point:** Communicates rules and examples of patterns (e.g., forms, search).

## Slide 17: A style guide wraps the kit
- **Point:** Adds design principles, visual language, and documentation.

## Slide 18: Processes, methodology, and tools
- **Point:** Adding processes and tools creates a true design system. It is more than just the style guide.

## Slide 19: When we need a design system
- **Point:** Needed for large organizations with product portfolios to ensure coherent UX, or for single massive products (like Facebook).

## Slide 20: What we mean by a design system
- **Definition:** A systematic approach for creating, implementing, and maintaining user interfaces.

## Slide 21: What design systems change
- **Product:** Consistency.
- **People:** Shared language, faster delivery.
- **AI:** Makes it easier for AI agents to follow.

## Slide 22: Buttons from the same project
- **Example:** Real website where buttons look alike but behave differently.
- **Point:** A simple problem scales into a mess with dozens of components.

## Slide 23: Examples
- **Action:** Show examples of design systems to study. Mention catalogs.

## Slide 24: The work (Two worlds. One component.)
- **Point:** Design and engineering must coexist and work together.

## Slide 25: The disconnect
- **Problem:** Designers and engineers use different tools and mental models.
- **Org:** Often in separate departments, which is illogical since engineers build the end product.

## Slide 26: The same anatomy, and the same API
- **Solution:** Design systems solve the disconnect.
- **Point:** Coherent API and anatomy across design mode and code mode.

## Slide 27: One interface
- **Point:** Stay coherent with native HTML elements (e.g., `disabled`, `checked`).
- **Action:** Use the same names across the system and HTML controls.

## Slide 28: Two strings and other trade-offs
- **Point:** Not an ideal world; design and code sometimes mismatch.
- **Action:** Room for trade-offs (e.g., `isLoading` in file vs `loading` in code).

## Slide 29: Governance (A library alone is not enough)
- **Point:** Governance is a huge part of the work. Someone has to be allowed to make the system.

## Slide 30: Team models
- **Models:** Solitary enthusiast, central team, or federated contributions.

## Slide 31: A central team, plus contributors
- **Point:** Most successful model in large orgs is a combination of central and federated.

## Slide 32: Who the team is allowed to be
- **Roles:** Guiding UI direction, working with product teams, or serving them.
- **Point:** If unstated, designers will walk around the system.

## Slide 33: They go around you
- **Problem:** Product teams need changes fast. If blocked, they wrap components and ship without asking.

## Slide 34: Build with one team, then offer it on
- **Strategy:** Partner with one product team to build a real feature. Prove it in production, then offer it to others.

## Slide 35: They come to you
- **Point:** High quality releases bring organic adoption.
- **Action:** Still need to monitor (surveys, metrics) to find the silent teams who never ask.

## Slide 36: You go to them
- **Strategy:** Proactive rituals (clinics, planning) to reach hundreds outside the ecosystem.
- **Point:** Marketing the system is a significant part of the job.

## Slide 37: The price
- **Point:** Connecting the system to business stakeholders. Justifying existence used to be hard; now it's about tool costs and ROI.

## Slide 38: Their hour, times every team
- **Action:** Calculate time saved by the design system.

## Slide 39: Helsinki
- **Example:** Public data from City of Helsinki: one button used 972 times across 55 services.

## Slide 40: A button, five projects, three years
- **Calculation:** Assess time to create separately vs in the system (e.g., 10h to produce, 20h to support, 2h to integrate).

## Slide 41: Same button, with numbers
- **Point:** Figures aren't a status report; they buy the meeting to negotiate with stakeholders.

## Slide 42: What you ask them for
- **Action:** Use the hours to open the meeting. Ask for staff, a mandate, a partner product, and written decisions.

## Slide 43: AI has two jobs here
- **Point:** AI is not just Copilot; MCP is plumbing.

## Slide 44: AI in producing components
- **Point:** Producing UI with AI is like general code production (spec-driven). The interesting part is what happens next.

## Slide 45: Review did not shrink
- **Point:** AI doesn't magically solve all problems. Random code production isn't enough; writing got faster, shipping didn't.

## Slide 46: Without guidance, speed is just debt
- **Point:** AI hallucinates and needs guidance. Design systems are very good at taming AI agents.

## Slide 47: A long rules file will not be followed
- **Point:** Giving AI too much context (especially cheaper models) causes more hallucinations. Needs a systematic approach.

## Slide 48: AI-friendly documentation
- **Action:** Provide machine-friendly formats: component contracts, Markdown, llms.txt. Use tests to verify AI code.

## Slide 49: Delivering knowledge to agents
- **Action:** Use an MCP server to deliver knowledge (e.g., Storybook can serve MCP for free).

## Slide 50: Conclusion
- **Summary:** AI needs a structured system to avoid technical debt. Documentation must be machine-readable. Human judgment and review are still required for shipping.

## Slide 51: What to study
- **Fundamentals:** CSS/JS to spot bad AI workarounds, Git.
- **Design:** Basics (hierarchy, typography) to make decisions AI can't.
- **Soft skills:** Collaborate with experts instead of trying to replace them.

## Slide 52: Designing and Developing UI in 2026 (Closing)
- **Optional close:** Ask "Will your team pull from the system or invent another button next week?"
