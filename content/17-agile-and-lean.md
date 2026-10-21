---
title: "Agile, Lean, and Other Cross-Cutting Methods"
part: "Part V — Methods and Specialties"
order: 17
minutes: 13
summary: "Agile systems engineering, lean principles and enablers, integrated product and process development, prototyping, set-based design, and interface management as a method."
---

## The cross-cutting methods

Alongside the life cycle processes, the Handbook describes methods that cut across them. These are the "how," complementing the processes' "what." The big ones are MBSE (its own chapter), agile, lean, integrated product and process development, prototyping, and interface management.

---

## Agile systems engineering

### The mindset, honestly stated

Agile emerged in software as a reaction to heavyweight sequential process. Its core commitments — working product over documentation, customer collaboration over contract negotiation, responding to change over following a plan, individuals and interactions over processes and tools — are not anti-engineering. They are a bet that in uncertain domains, **fast feedback beats up-front prediction**.

The relevance to systems engineering is that the bet is often right, and increasingly so as systems become software-dominated.

### What transfers well to systems

- **Short, timeboxed increments** producing something demonstrable.
- **Backlogs** with continuous prioritisation, so the most valuable work happens first and descoping is a normal act rather than a crisis.
- **Continuous stakeholder involvement**, which catches requirements errors in weeks rather than at acceptance.
- **Continuous integration**, which is really just incremental integration with the frequency turned up — and it is straightforwardly good systems engineering.
- **Retrospectives**, which are lessons learned applied at a useful cadence.
- **Definition of done**, which is acceptance criteria under a different name.

### What does not transfer unmodified

- **Long-lead hardware.** You cannot re-spin a casting, a custom ASIC, or a certified airframe component every two weeks. Physical items have irreducible lead times and high change costs.
- **Certification and regulatory evidence.** Regulators want traceable, complete, reviewed evidence. This is compatible with agile but requires deliberate design of the evidence flow — it does not happen by accident.
- **Architecture.** Purely emergent architecture works for a web application and fails for an aircraft. System-level architectural decisions have to be made early because they are expensive to reverse.
- **Safety analysis.** Hazard analysis needs a stable enough design to analyse, and safety cases need coherence across the whole.

### How real programmes reconcile it

- **Dual-cadence / multi-speed development.** Hardware on a slow cadence, software on a fast one, synchronised at defined integration points. Increasingly the default for cyber-physical systems.
- **Architecture runway.** Invest ahead in the architectural foundation that future increments will need, so increments do not each require architectural rework.
- **Rolling-wave planning.** Plan the near term in detail and the far term coarsely, refining as you go.
- **Incremental commitment.** Commit resources in stages as uncertainty reduces — the Incremental Commitment Spiral Model formalises this.
- **Scaled frameworks.** SAFe and similar frameworks attempt to coordinate many agile teams within a larger programme structure; they are widely used and widely criticised, and you should know what they are.
- **Continuous verification.** Automated regression on every build, so verification is a continuous state rather than a late campaign.

### Agility as a system property

There is a second, deeper meaning worth distinguishing. Beyond *agile development process*, there is **system agility** — designing systems that can themselves adapt to changing needs. This is achieved through modularity, open interfaces, margin, reconfigurability, and upgrade paths. A system built with a modular open systems approach is agile in the field regardless of how it was developed.

> **On the exam:** expect agile to be treated as one life cycle approach among several, suited to volatile requirements and fast feedback, with known limitations for long-lead hardware and certification. Do not expect advocacy in either direction.

---

## Lean systems engineering

Lean comes from manufacturing (the Toyota Production System) and targets **waste** — anything consuming resources without creating stakeholder value.

### The five lean principles

1. **Specify value** from the end customer's perspective.
2. **Map the value stream** and identify the waste in it.
3. **Create flow** — eliminate stops, queues, and batching.
4. **Establish pull** — produce in response to actual demand rather than forecast.
5. **Pursue perfection** — continuous improvement.

### Waste in engineering

The classic manufacturing wastes translate directly and uncomfortably:

| Waste | In engineering |
| --- | --- |
| Overproduction | Documents nobody reads; analysis beyond decision need; gold-plating |
| Waiting | Blocked on approvals, reviews, information, test slots |
| Transport / handoffs | Work passing between teams, losing context each time |
| Over-processing | Excessive formality; rework of reviewed material; repeated re-formatting |
| Inventory | Large batches of work in progress; requirements written long before use |
| Motion | Hunting for information across scattered systems |
| Defects | Rework caused by errors, ambiguity, and missing information |
| Unused talent | Expertise not brought to bear; decisions made far from knowledge |

**INCOSE's Lean Enablers for Systems Engineering** codify practices against these, organised under the lean principles. You should recognise the name and the theme: value, flow, pull, perfection, applied to engineering work rather than to a factory.

> **On the job:** the highest-yield lean question for a systems engineer is *"who reads this, and what decision does it change?"* If the honest answer is "nobody" and "none," you have found overproduction. This is also the single best defence against the document-theatre failure mode of systems engineering.

---

## Integrated Product and Process Development (IPPD)

A management approach in which **product design and the processes that will produce and support it are developed concurrently**, by an **Integrated Product Team (IPT)** containing all relevant disciplines.

Core ideas:

- **Concurrent engineering** — manufacturing, test, logistics, and support engineers are involved *during* design, not handed a finished design and asked to cope.
- **Integrated Product Teams** — cross-functional teams organised around a product element rather than a discipline, with the authority and skills to make decisions.
- **Early and continuous stakeholder involvement.**
- **Design for X** — designing simultaneously for manufacturability, assembly, testability, reliability, maintainability, safety, and cost.

Why it works: the manufacturing engineer who sees the design at concept can prevent the tolerance stack that would have made it unbuildable. The same person seeing it at release can only report the problem.

---

## Prototyping

Building something partial to learn something specific. The discipline is in knowing *what question the prototype answers* before you build it.

| Type | Purpose |
| --- | --- |
| **Proof of concept** | Does this idea work at all? |
| **Throwaway / exploratory** | Learn something, then discard it |
| **Evolutionary** | Progressively refine the prototype into the product |
| **Operational / field** | Learn how it behaves with real users in real conditions |
| **Virtual / digital** | Learn through simulation rather than physical build |
| **Mock-up** | Explore form, ergonomics, and layout without function |

Prototyping is primarily a **risk reduction** technique, which is why it features so heavily in the spiral model. A prototype that does not reduce an identified risk or answer a specific question is a hobby.

**Risk to watch:** the throwaway prototype that quietly becomes the product because it "already works." The prototype was built without the non-functional requirements, without the error handling, and without the quality process. This happens constantly, and it is worth naming out loud when you see it starting.

---

## Set-based design

Instead of choosing a point design early and iterating on it (point-based design), **keep multiple design options alive** and progressively eliminate regions of the design space that are shown to be infeasible, converging on a solution late.

- **Advantage:** you avoid the expensive rework cycle of committing early to a design that later proves infeasible; decisions are made when you know most.
- **Cost:** you carry more parallel work for longer.
- **Origin:** associated with Toyota's product development and with lean approaches.

It pairs naturally with modelling: a parametric model lets you eliminate infeasible regions analytically rather than by building.

---

## Interface management as a method

Worth restating as a standalone method because of its outsized effect:

- Identify every interface, internal and external, and record it — an N² diagram is the standard tool for finding the ones nobody mentioned.
- Assign **an owner on each side** and **one controlled definition** in the middle.
- Baseline interface definitions early and manage changes through an **Interface Control Working Group** with both parties present.
- Verify interfaces **at each integration step**, not only at the end.
- Pay particular attention to units, timing, error behaviour, and initialisation and shutdown sequences — the four places interface defects concentrate.

---

## Other methods you should recognise

- **Functional flow block diagrams (FFBD)** and **enhanced FFBD** — classic functional decomposition and sequencing notation.
- **IDEF0** — function modelling notation using inputs, controls, outputs, and mechanisms (ICOM).
- **Quality Function Deployment (QFD)** and the **House of Quality** — a structured method for translating customer needs into engineering characteristics, with a correlation matrix showing where characteristics conflict.
- **Design of Experiments (DoE)** — statistically efficient experimentation to understand the effect of multiple factors.
- **Robust design / Taguchi methods** — designing to be insensitive to variation rather than trying to eliminate variation.
- **TRIZ** — a structured inventive problem-solving method based on patterns in patents, useful for resolving apparent contradictions.
- **Value engineering** — systematic improvement of the ratio of function to cost.
- **Technology Readiness Levels (TRL)** — a 1-to-9 scale for technology maturity, from basic principles observed (1) to actual system proven in operation (9). Related scales exist for manufacturing readiness (MRL) and integration readiness (IRL).

> **On the exam:** TRL is worth knowing as a 1-to-9 maturity scale where the mid-range involves laboratory and relevant-environment demonstration and the top of the range is proven operational use. QFD/House of Quality and IDEF0 appear as recognition-level items.

## Key takeaways

- Agile suits volatile requirements and fast feedback; it adapts poorly, unmodified, to long-lead hardware, certification evidence, and architectural decisions that are expensive to reverse.
- Practical reconciliation comes through dual-cadence development, architecture runway, rolling-wave planning, incremental commitment, and continuous verification.
- Distinguish agile *development* from system *agility* — the latter is designed in through modularity, open interfaces, and margin.
- Lean targets waste: specify value, map the value stream, create flow, establish pull, pursue perfection. The most useful engineering question it offers is "who reads this and what decision does it change?"
- IPPD develops product and its production/support processes concurrently using cross-functional integrated product teams.
- Prototyping is risk reduction; know which question the prototype answers, and beware the throwaway that becomes the product.
- Set-based design keeps options alive and eliminates infeasible regions, deferring commitment until knowledge is greatest.
- Interface management deserves standing as a method: one definition, two owners, verified at every integration step.

## Check yourself

1. Name three things agile transfers well to systems engineering and three that need modification.
2. What is an architecture runway and what problem does it solve?
3. List the five lean principles and give an engineering example of three wastes.
4. What is the defining characteristic of IPPD, and what is an IPT?
5. Explain set-based design and say when its extra cost is justified.
6. What does TRL 9 mean?
