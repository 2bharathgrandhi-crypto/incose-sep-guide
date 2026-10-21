---
title: "Building and Proving It: Implementation, Integration, Verification, Transition, Validation"
part: "Part III — Technical Processes"
order: 11
minutes: 19
summary: "The right-hand side of the Vee — realising elements, assembling them, proving they meet requirements, putting the system into service, and confirming it satisfies the need."
---

## The five realisation processes

| Process | One-line purpose |
| --- | --- |
| **Implementation** | Realise a specified system element |
| **Integration** | Synthesise realised elements into a system that satisfies architecture and design |
| **Verification** | Provide objective evidence the system fulfils its specified requirements |
| **Transition** | Establish the capability to provide services in the operational environment |
| **Validation** | Provide objective evidence the system fulfils its business/mission objectives and stakeholder requirements in use |

**Note the order carefully: Verification comes before Transition; Validation comes after.** This trips people up, and it is examined. The logic: you verify against the specification in a controlled setting before you move the system; you validate in the real operational environment with real users, which can only happen once it is there.

In practice both processes are applied throughout — you can validate concepts and prototypes early, and you verify continuously at every level — but the *process ordering in the standard* reflects that primary sequence.

---

## Implementation

**Purpose:** to realise a specified system element.

This is where the thing gets made: software is coded, boards are assembled, parts are machined, procedures are written, people are trained, commercial items are purchased and configured.

### Activities

- Prepare for implementation: define the strategy, obtain enabling systems (tooling, build environments, test equipment), establish criteria.
- Perform implementation to the design definition.
- Record evidence: as-built configuration, non-conformances, deviations and waivers.
- Package and store the element for later integration.

### Points that matter

- **Implementation produces one element.** If you are joining things together, that is Integration.
- **People and procedures are implemented too.** Training a crew and writing an operating procedure are implementation activities for those system elements.
- **The as-built configuration must be recorded.** What was actually built, with which parts, to which drawing revision, with which deviations. Without this, later fault investigation is guesswork.
- **Deviation vs waiver:** a *deviation* is authorised departure from a requirement granted *before* manufacture; a *waiver* accepts a non-conforming item *after* it has been produced. Both are configuration-controlled decisions with recorded rationale.

---

## Integration

**Purpose:** to synthesise a set of system elements into a realised system (product or service) that satisfies system requirements, architecture, and design.

### The core insight

Integration is not assembly. Assembly is bolting things together. Integration is **making the interactions work** — and it is where emergent properties first appear, both the ones you designed for and the ones you didn't.

### Integration strategies

| Strategy | How it works | Trade-off |
| --- | --- | --- |
| **Big bang** | Assemble everything, then test | Cheap to plan, catastrophic to debug — many simultaneous unknowns |
| **Top-down** | Integrate high-level elements first, using **stubs** for lower ones | Early validation of overall behaviour; needs stubs |
| **Bottom-up** | Integrate lowest-level elements first, using **drivers** to exercise them | Solid foundations; system behaviour visible late |
| **Incremental / continuous** | Add one element at a time to a working baseline | Each failure has one obvious suspect; needs a stable baseline and frequent testing |
| **Functional thread / capability-based** | Integrate everything needed for one end-to-end capability, then the next | Delivers demonstrable capability early; excellent for stakeholder confidence |

> **On the job:** incremental integration is almost always right. The reason is diagnostic, not philosophical: when you add one thing and it breaks, you know what broke it. In a big-bang integration with fifteen new elements, you are debugging fifteen-way interactions with no baseline. Every hour saved in planning is repaid tenfold in debugging.

### Planning integration properly

- Define the **integration sequence** and justify it — usually driven by interface risk, availability dates, and the need to demonstrate capability early.
- Identify **enabling systems**: test rigs, simulators, stubs, drivers, harnesses, instrumentation, facilities. These must be designed and built ahead of need, and they frequently are not.
- Define **entry and exit criteria** for each integration step.
- Plan for **interface verification at each step**.
- Sequence to **retire the biggest technical risks earliest**. If the novel sensor and the legacy database are your two riskiest interfaces, integrate those first, not last.

### The integration facility question

Where does integration happen? Options include a dedicated integration lab, a systems integration rig with representative hardware, a digital environment with simulated elements, or the operational site. This is a real planning decision with cost, fidelity, and schedule consequences — and it needs to be made early enough for the facility to exist.

---

## Verification

**Purpose:** to provide objective evidence that a system or system element fulfils its specified requirements and characteristics.

**"Did we build the system right?"**

### The four methods

Know these cold, including the boundaries between them.

| Method | What it is | When to use | Example |
| --- | --- | --- | --- |
| **Inspection** | Examination without operating the system: visual, dimensional, document review, code review | Physical characteristics, markings, documentation, workmanship | Confirming the label is present and legible; measuring a housing dimension |
| **Analysis** | Mathematical or logical reasoning: calculation, modelling, simulation, or similarity to a previously qualified design | When testing is impossible, unsafe, prohibitively expensive, or covers conditions you cannot create | Proving structural margin by finite element analysis; extrapolating life from accelerated test data |
| **Demonstration** | Operating the system and observing that it performs as intended, **qualitatively**, without detailed instrumentation | Basic functional operation, operability, usability | Showing the alarm sounds when the button is pressed |
| **Test** | Operating under **controlled, defined conditions** and collecting **quantitative** data compared against acceptance criteria | Performance and quantitative requirements | Measuring response time under specified load with instrumentation |

The critical discriminators:

- **Inspection vs demonstration:** inspection does not operate the system; demonstration does.
- **Demonstration vs test:** demonstration is qualitative observation; test produces quantitative measured data against criteria.
- **Analysis** includes **similarity** (this design is sufficiently like one already qualified) and **simulation**.

Some frameworks add **Certification** (a recognised authority attests compliance) and treat **Simulation** separately. The exam's core four are Inspection, Analysis, Demonstration, Test.

> **On the exam:** expect a scenario and "which method?" The giveaways: *calculated/modelled/simulated/similar* → Analysis. *Examined/reviewed/measured without operating* → Inspection. *Operated and observed, no data* → Demonstration. *Measured data against criteria under controlled conditions* → Test.

### Verification planning

Verification is planned **when the requirements are written**, not when the hardware arrives. For every requirement: which method, at which level, in which environment, against what pass/fail criteria, using what enabling systems.

The **verification matrix** (or verification cross-reference matrix, VCRM) maps every requirement to its method, level, and the evidence that satisfies it. It is the primary artefact of the process and the primary evidence at the system verification review.

### Levels and types of verification

- **Levels:** component, element, subsystem, system, system of systems.
- **Qualification** — proving the *design* meets requirements, often under extreme or margin conditions.
- **Acceptance** — proving a *specific delivered unit* conforms, usually a lighter test set applied to every unit.
- **Regression** — re-verifying after a change that nothing previously working has broken.
- **First article inspection** — thorough verification of the first production unit.

### Evidence and independence

Verification produces **objective evidence**: recorded, traceable, repeatable results. "The engineer says it works" is not evidence. Records must include the configuration tested, the environment, the procedure and its revision, the instrumentation and its calibration status, the raw results, and any anomalies.

In safety-critical and regulated domains, verification is often required to be performed or witnessed **independently** of the team that designed the item.

---

## Transition

**Purpose:** to establish a capability for a system to provide services specified by stakeholder requirements in the operational environment.

Transition is the most under-planned process in systems engineering. It covers everything between "we have a verified system" and "the users are successfully using it."

### What it includes

- **Site preparation** — power, space, network, environmental conditions, civil works.
- **Delivery, installation, and assembly** on site.
- **Installation checkout** — confirming it survived the journey and works in place.
- **Training** for operators, maintainers, and support staff.
- **Delivery of enabling products**: spares, consumables, manuals, tools, test equipment, licences.
- **Migration** from the legacy system — data migration, parallel running, cut-over planning, and a rollback plan.
- **Handover** to the operating organisation, with acceptance and formal transfer of responsibility.
- **Activation** of support arrangements: help desk, maintenance contracts, supply chain.

> **On the job:** transition is where perfectly good systems fail visibly and publicly. The technology works; the training did not happen, the data did not migrate cleanly, the support contract was not signed, and nobody planned the cut-over weekend. Start transition planning in the concept stage — the deployment concept is one of the five life cycle concepts for exactly this reason. Ask early and often: **who operates this on day one, and who do they call at 3am?**

---

## Validation

**Purpose:** to provide objective evidence that the system, when in use, fulfils its business or mission objectives and stakeholder requirements, achieving its intended use in its intended operational environment.

**"Did we build the right system?"**

### Verification versus validation, settled

| | Verification | Validation |
| --- | --- | --- |
| Question | Did we build the system right? | Did we build the right system? |
| Compares against | **Specified requirements** | **Stakeholder needs and intended use** |
| Environment | Controlled, often representative | **Operational / intended** |
| Performed with | Engineers and test equipment | **Users and stakeholders** |
| Typical finding | "Requirement 4.2.7 is not met" | "It meets every requirement and is unusable in the rain" |
| Failure means | The build is wrong | The **requirements** were wrong |

That last row is the one that makes the distinction matter. **A validation failure is usually a requirements failure, not a build failure** — which is why validation failures found late are so expensive and why early validation activities (prototypes, mock-ups, user trials, simulations, operational scenario walkthroughs) are worth so much.

### Validation activities

- **Operational trials** in the real environment with real users.
- **User acceptance testing** against operational scenarios.
- **Pilot deployments** to a limited population.
- **Demonstration against the MOEs** defined back in mission analysis.
- **Early validation** — prototypes, mock-ups, simulations, and stakeholder walkthroughs performed long before there is a system, to validate concepts and requirements.

### Validation planning

Like verification, it is planned early. The **validation criteria** come from stakeholder requirements and the MOEs, and are defined during Stakeholder Needs and Requirements Definition — not invented at the end.

### Related terms

- **Acceptance** — the customer's formal agreement that the system satisfies the agreement, often the contractual trigger for payment and transfer of ownership.
- **Certification** — a recognised authority's formal attestation that the system meets defined standards, typically drawing on verification and validation evidence.
- **Accreditation** — an authority's formal authorisation to operate the system for a specific purpose in a specific environment. Common in security and in modelling and simulation.

> **On the exam:** verification/validation is the most-examined pair in the entire syllabus. Fix it with one sentence you never forget: **verification is against the specification, validation is against the need.**

---

## How the right side of the Vee actually runs

A realistic sequence for a medium system:

1. Elements are implemented and each is **verified** at element level against its element requirements.
2. Elements are **integrated** incrementally; each integration step includes **interface verification**.
3. The integrated system is **verified** against the system requirements — the formal qualification campaign, closing out the verification matrix.
4. A **System Verification Review / Functional Configuration Audit** confirms the verification evidence is complete; a **Physical Configuration Audit** confirms the as-built matches the product baseline.
5. The system is **transitioned**: installed, migrated, trained, handed over.
6. The system is **validated** in operation against stakeholder requirements and MOEs, culminating in acceptance.
7. Any **certification** or **accreditation** is obtained using this evidence.

Throughout: configuration is controlled, anomalies are recorded and dispositioned, and traceability from requirement to evidence is maintained.

## Key takeaways

- Implementation realises one element; Integration assembles elements so their interactions work and emergent behaviour appears.
- Incremental integration is usually right because it keeps the number of simultaneous unknowns at one.
- The four verification methods are Inspection (examine, don't operate), Analysis (calculate, model, simulate, similarity), Demonstration (operate, observe qualitatively), and Test (operate under controlled conditions, measure quantitatively).
- Verification is planned when requirements are written; the verification matrix maps every requirement to method, level, and evidence.
- Transition is chronically under-planned and covers installation, training, migration, support activation, and handover — plan it from the concept stage.
- Validation confirms fitness for intended use in the real environment with real users; a validation failure usually indicates a requirements failure.
- Process order: Verification → Transition → Validation.

## Check yourself

1. State the difference between Implementation and Integration in one sentence each.
2. You must prove a pressure vessel withstands a load that would destroy it if tested. Which verification method, and why is it legitimate?
3. Why is incremental integration usually preferable to big bang?
4. A system passes every acceptance test and is then rejected by operators as unusable in their workflow. What failed, and at which process?
5. Name five things that belong in a transition plan.
6. Explain the difference between qualification and acceptance verification.
