---
title: "Life Cycles, Life Cycle Models, and Decision Gates"
part: "Part II — Foundations"
order: 6
minutes: 16
summary: "The six generic life cycle stages, the major life cycle models from Vee to agile, how to choose between them, and how decision gates and technical reviews actually work."
---

## Stages are not processes — get this straight first

The most common conceptual confusion in systems engineering, and a reliable exam trap:

- A **life cycle stage** is a **period of time** in the system's life, with a purpose and a defined end point.
- A **life cycle process** is a **set of activities** that can be applied in *any* stage, as often as needed.

Verification is not a phase that happens after development. Verification is a process you apply throughout: verifying requirements in the concept stage, verifying design in development, verifying components as they are built, verifying the integrated system before transition.

> **On the exam:** if an answer option implies "the Verification process occurs during the Verification phase," be suspicious. Processes are applied across stages, iteratively, recursively, and concurrently.

## The six generic life cycle stages

The generic stages used by the Handbook and ISO/IEC/IEEE 24748:

| Stage | Purpose | Typical decision at the end |
| --- | --- | --- |
| **Concept** | Identify stakeholder needs, explore concepts, propose feasible solutions | Is this worth developing? Which concept? |
| **Development** | Refine requirements, create the solution, build and verify the system | Is the design ready to produce? |
| **Production** | Produce the system, inspect and verify production units | Is it ready to deliver? |
| **Utilization** | Operate the system to satisfy users' needs | Continue, upgrade, or retire? |
| **Support** | Provide sustained system capability — maintenance, logistics, spares | Continue supporting, or retire? |
| **Retirement** | Store, archive, or dispose of the system | Is disposal complete and compliant? |

Two facts that get examined:

1. **Utilization and Support run concurrently**, not sequentially. While the system is being used, it is being maintained and supplied.
2. **These are generic.** Real industries use different names — a pharmaceutical life cycle, a DoD acquisition life cycle, and an automotive programme all map onto these six but none of them uses these exact words. The Handbook's stages are a reference model to map to, not a mandate.

Memory hook: **C-D-P-U-S-R** — "Concept, Develop, Produce, Use, Support, Retire."

## Life cycle models

A life cycle model organises the stages and processes into a plan of attack. There is no universally correct one; choosing well is a real engineering decision.

### Waterfall (sequential)

Each stage completes before the next begins. Documented, reviewed, frozen, handed over.

- **Good when:** requirements are genuinely stable and well understood, the domain is mature, regulation demands documented sequential evidence.
- **Bad when:** requirements are uncertain, technology is novel, or feedback from users would change the design. Which is most of the time.
- **Reality:** pure waterfall rarely survives contact with a real project. It survives in contracting structures more than in engineering practice.

### The Vee model

The single most recognisable image in systems engineering. The left leg descends through decomposition and definition; the bottom is implementation; the right leg ascends through integration and verification.

```
Stakeholder needs                              Operational validation
   \                                                       /
    Stakeholder requirements  <---validates---  System validation
      \                                                  /
       System requirements   <---verifies---  System verification
         \                                             /
          Architecture       <---verifies---  Subsystem verification
            \                                        /
             Design          <---verifies---  Unit verification
               \                                   /
                \______ Implementation ______/
```

The crucial insight is the **horizontal correspondence**: each level on the left is matched by a level on the right. The verification for a given level is planned **when that level is defined**, not later. If you write a system requirement on Tuesday, you decide on Tuesday how you will prove it.

Variants you may meet: the **double Vee** or **3V** (adding model and simulation verification alongside), and the **incremental Vee** (a series of Vees, one per increment).

- **Good when:** you need clear traceability and disciplined verification, common in safety-critical and regulated domains.
- **Watch out:** the Vee is often *drawn* as sequential and *taught* as if verification comes last. That is a misreading. The left and right legs are linked by planning from the start.

### Incremental

The system is delivered in successive increments, each adding capability, each usable. Requirements for the whole are broadly known up front; delivery is chunked.

- **Good when:** you want value early, or you want to reduce integration risk by integrating continuously.

### Iterative

The solution is repeatedly refined through cycles, with each cycle improving understanding and the design. Distinguished from incremental: incremental *adds* functionality; iterative *refines* it. Most real projects are both.

### Spiral

Boehm's model: repeated cycles, each consisting of determining objectives, evaluating alternatives and **identifying and resolving risks**, developing and verifying, and planning the next cycle.

- **The defining feature is that it is risk-driven.** Each cycle attacks the largest remaining risk. Prototyping is used explicitly to buy down risk.
- **Good when:** high novelty and high uncertainty.

### Evolutionary

The system evolves over successive fielded versions as understanding and needs change; requirements for later versions are deliberately deferred.

### Agile

Short timeboxed cycles, working product increments, close customer involvement, responsiveness to change over following a fixed plan. Originating in software, now adapted for systems through approaches such as scaled agile frameworks and agile systems engineering practice.

- **Good when:** requirements are volatile, feedback is cheap and fast, the product is largely software or digital.
- **Harder when:** the product involves long-lead hardware, certification, or physical manufacturing — you cannot re-spin a cast housing every two weeks.
- **In practice:** hybrid "dual-cadence" approaches are common — a slower cadence for hardware and architecture, a faster one for software, synchronised at integration points.

Agile systems engineering is treated properly in **Agile and Lean Systems Engineering**.

### Choosing a model

| Situation | Lean toward |
| --- | --- |
| Requirements stable, domain mature, heavy regulation | Vee, sequential |
| High technical novelty and uncertainty | Spiral, prototyping |
| Need value delivered early | Incremental |
| Requirements expected to change; fast feedback available | Agile, iterative |
| Long-lead hardware plus fast-moving software | Hybrid, dual cadence |
| Very large system of systems | Evolutionary, with agreed interfaces |

The selection criteria the Handbook points to: system complexity, technology maturity, requirement volatility, risk profile, regulatory context, contract structure, and organisational capability.

> **On the exam:** expect to be asked which model is characterised by **risk-driven cycles** (spiral), which emphasises **correspondence between definition and verification levels** (Vee), and which delivers **usable capability in successive portions** (incremental).

## Decision gates and technical reviews

A **decision gate** is a formal point in the life cycle where a decision is made about whether to continue, continue with conditions, or stop. Gates are where the organisation exercises control over technical progress.

Key properties of a well-run gate:

- **Defined entry and exit criteria**, agreed in advance and written in the plan, not invented on the day.
- **Objective evidence** presented against those criteria.
- **An authorised decision-maker** who can actually say no.
- **A recorded decision** with actions and owners.

> **On the job:** the failure mode is the review as theatre — a slide pack, no criteria, a foregone conclusion, and a hundred "actions" nobody tracks. The test of a real gate is whether "no" is a possible outcome. If it is not, it is a status meeting with catering.

### The common technical reviews

Names vary by sector; these are the widely used set and you should recognise them.

| Review | When | What it establishes |
| --- | --- | --- |
| **MCR / MDR** — Mission Concept / Mission Definition Review | Early concept | The mission need and concept are sound |
| **SRR** — System Requirements Review | End of requirements definition | System requirements are complete, consistent, and feasible; often establishes the **functional baseline** |
| **SFR / SDR** — System Functional / System Design Review | After functional architecture | The functional decomposition and allocation are sound |
| **PDR** — Preliminary Design Review | After preliminary design | The design approach will meet requirements with acceptable risk; often establishes the **allocated baseline** |
| **CDR** — Critical Design Review | After detailed design | The design is complete and ready to build; initiates the **product baseline** |
| **TRR** — Test Readiness Review | Before formal testing | Test articles, procedures, facilities, and personnel are ready |
| **SVR / FCA** — System Verification Review / Functional Configuration Audit | After verification | The system meets its specified requirements — verification evidence is complete |
| **PCA** — Physical Configuration Audit | Before production/delivery | The as-built configuration matches the product baseline documentation |
| **PRR** — Production Readiness Review | Before production | Manufacturing processes, tooling, and supply chain are ready |
| **ORR** — Operational Readiness Review | Before operational use | The system, people, procedures, and support are ready to operate |
| **FRR** — Flight/Field Readiness Review | Immediately before first operational use | Final go/no-go |

> **On the exam:** the baseline-to-review associations are frequently tested. The pattern to remember: **functional baseline around SRR, allocated baseline around PDR, product baseline from CDR onward**. Also remember FCA is *functional* (does it meet requirements) and PCA is *physical* (does the as-built match the documentation).

### Reviews as risk instruments

The purpose of a review is not to produce a slide pack. It is to answer one question: **is the technical risk of proceeding acceptable?**

A useful mental model: each gate is where the organisation decides to spend the next, larger tranche of money. Everything before it was cheap. Everything after is not. The evidence you present should be evidence about risk.

## Life cycle cost and the early-decision effect

Because it belongs here as well as in the affordability discussion: the majority of a system's total life cycle cost is **committed** during the concept and early development stages, while most is **spent** during production and operations. Support and operations frequently dominate total cost over the life of long-lived systems — for many capital systems, the acquisition price is a minority of total ownership cost.

The engineering implication: **decisions about architecture, maintainability, and supportability made in the concept stage determine most of the money.** This is why the technical processes front-load analysis, and why "we'll figure out support later" is the most expensive sentence in engineering.

## Key takeaways

- Stages are periods of time; processes are activity sets applied across stages iteratively, recursively, and concurrently. Do not conflate them.
- The six generic stages are Concept, Development, Production, Utilization, Support, Retirement — with Utilization and Support concurrent.
- Know the defining characteristic of each model: Vee = level correspondence between definition and verification; spiral = risk-driven cycles; incremental = successive usable deliveries; iterative = successive refinement; agile = short cycles with change responsiveness.
- Model choice is driven by complexity, novelty, requirement volatility, risk, regulation, and contract structure.
- Decision gates need entry and exit criteria, objective evidence, an empowered decider, and a recorded outcome — and "no" must be a genuine possibility.
- Learn the review-to-baseline mapping: SRR/functional, PDR/allocated, CDR/product; FCA is functional, PCA is physical.

## Check yourself

1. Why is it wrong to say "verification happens in the verification phase"?
2. Which two generic life cycle stages run concurrently, and why?
3. A programme runs four cycles, each of which begins by identifying and resolving the largest current risk. Which life cycle model is this?
4. Which baseline is typically established at PDR, and what does it contain?
5. What is the difference between a Functional Configuration Audit and a Physical Configuration Audit?
6. Your project has long-lead custom hardware and a large, fast-changing software component. What life cycle approach would you propose, and why?
