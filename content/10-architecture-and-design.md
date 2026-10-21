---
title: "Architecture Definition, Design Definition, and System Analysis"
part: "Part III — Technical Processes"
order: 10
minutes: 19
summary: "How the solution takes shape: architecture concepts and views, ISO 42010, functional and physical decomposition, allocation, interface definition, design, and the analyses that inform every decision."
---

## Three processes, one job: turning requirements into a solution

- **Architecture Definition** — generate alternative architectures, select one, and express it in views. *What elements, with what responsibilities and relationships, and why?*
- **Design Definition** — provide sufficient detail about the system and its elements to enable implementation. *How is each element actually built?*
- **System Analysis** — provide rigorous technical data to support decisions throughout. *What do the numbers say?*

System Analysis is not sequenced after the others. It is a service process invoked continuously — during mission analysis, requirements, architecture, design, verification, and operation.

---

## Architecture Definition

**Purpose:** to generate system architecture alternatives, to select one or more alternatives that frame stakeholder concerns and meet system requirements, and to express this in a consistent set of views.

Note what is in that purpose statement: **alternatives** (plural — generating only one architecture is a failure of the process), **stakeholder concerns** (architecture answers to people, not only to requirements), and **views** (the architecture is communicated through multiple representations).

### What architecture is

> Architecture: the fundamental concepts or properties of a system in its environment, embodied in its elements, relationships, and the principles of its design and evolution.

Practically, an architecture answers:

- What are the **elements**, and what is each **responsible for**?
- How do they **relate and interact**?
- What **principles and patterns** govern the structure?
- What **properties** does the structure give the whole — and which emergent properties does it enable or prevent?
- **Why this structure** rather than the alternatives?

That last one matters. An architecture without recorded rationale is a diagram, not an architecture.

### ISO/IEC/IEEE 42010 — the architecture description model

This standard gives you the vocabulary that the exam uses. Learn these five terms precisely:

| Term | Definition |
| --- | --- |
| **Stakeholder** | Someone with an interest in the system |
| **Concern** | An interest of a stakeholder relevant to the system — performance, cost, safety, maintainability, regulatory approval |
| **Viewpoint** | A *specification* of the conventions for constructing and using a view: what it contains, what notation, what rules. A viewpoint frames one or more concerns. |
| **View** | An actual *representation* of the system from the perspective of a viewpoint, addressing specific concerns |
| **Model** | A component of a view; a view is made up of one or more models |

The relationship, said plainly: **a viewpoint is the template; a view is the filled-in instance.** A "deployment viewpoint" defines how to express deployment; the "deployment view of System X" is the actual diagram.

Also in 42010: an **architecture description (AD)** is the work product expressing an architecture; **correspondences** and **correspondence rules** relate elements across views to keep them consistent.

> **On the exam:** viewpoint versus view is examined almost every time. Viewpoint = specification/convention/template. View = the representation itself. And views exist to address stakeholder **concerns**.

### Common viewpoints

You will meet these under various names in various frameworks:

- **Operational / mission** — how the system is used to achieve the mission
- **Functional / behavioural** — what functions the system performs and in what sequence
- **Logical** — solution-independent structure of the elements and their responsibilities
- **Physical** — the actual hardware, software, and people that realise the logical elements
- **Data / information** — what information exists, flows, and is stored
- **Interface** — the boundaries and what crosses them
- **Deployment / distribution** — where things physically live
- **Security** — trust boundaries, threats, and protections
- **Safety** — hazards, barriers, and mitigations

**Architecture frameworks** prescribe a set of viewpoints for a domain: DoDAF, MODAF, NAF (defence), TOGAF (enterprise IT), UAF (Unified Architecture Framework, which unified several of these), and the Zachman framework. Know the names and what domain each serves.

### Functional versus physical architecture

A core systems engineering distinction.

- **Functional architecture** — what the system *does*: the functions, their decomposition, their inputs and outputs, their sequencing and control logic. It is solution-independent. A function is "maintain cabin temperature," not "run the HVAC controller."
- **Physical architecture** — the *things* that do it: hardware, software, humans, procedures.
- **Allocation** — the mapping between them. Each function is assigned to one or more physical elements.

Why separate them? Because it keeps the solution space open long enough to consider alternatives. The same functional architecture can be realised several ways, and the allocation is where the interesting trades live: do it in hardware or software? Automate it or leave it to the operator? Centralise or distribute?

> **On the job:** "human or machine?" is one of the most consequential allocation decisions you will make, and it is routinely made by default rather than by analysis. Humans are flexible, adaptive, and good at novel situations; machines are consistent, fast, and tireless. Allocating a boring, high-vigilance monitoring task to a human is a well-documented way to generate accidents.

### Decomposition and the key heuristics

Decomposition splits the system into elements. Do it badly and you will pay forever. The heuristics that matter:

- **High cohesion within elements** — everything in an element belongs together.
- **Loose coupling between elements** — minimise the number, complexity, and criticality of interfaces.
- **Partition to minimise interface complexity.** If two things talk constantly, they probably belong in the same element.
- **Align with likely change.** Put things that change together in the same element, and things that change at different rates in different elements. The volatile user interface should not be entangled with the stable control algorithm.
- **Align with organisational and supplier boundaries.** Conway's law is real: your system will resemble your communication structure. You can use this deliberately.
- **Consider the specialty concerns** — safety partitioning, security trust boundaries, and certification scope often dictate decomposition more than function does.
- **Design for testability.** If an element cannot be tested in isolation, integration will be painful.

### Interface definition — the highest-value activity in architecture

Most system failures are interface failures. Interface work is unglamorous and disproportionately valuable.

For every interface, define:

| Aspect | Questions |
| --- | --- |
| **Physical/logical form** | Connector, protocol, API, mechanical fit, data format |
| **What flows** | Data, power, force, fluid, heat, signals, control |
| **Direction and initiation** | Who initiates, who responds, is it push or pull |
| **Timing and rates** | Latency, update rate, jitter, timeouts, ordering |
| **Units, ranges, precision** | *Units.* Always units. Spacecraft have been lost over this. |
| **Error and off-nominal behaviour** | What happens on failure, loss of signal, out-of-range value, restart |
| **Ownership** | Who owns each side; who owns the interface definition itself |
| **Standards** | Which standard governs it |

Tools of the trade:

- **Interface Control Document (ICD)** — the agreed definition of an interface, jointly owned by both sides.
- **Interface Requirements Specification (IRS)** — requirements on the interface.
- **N² diagram (N-squared chart)** — a matrix with elements on the diagonal and interfaces in the off-diagonal cells; flows in one direction appear above the diagonal and the other below. Excellent for spotting missing or surprise interfaces.
- **Context diagram** — external interfaces only.
- **Interface management** — the ongoing activity of controlling changes to interfaces, usually via an interface control working group.

> **On the job:** the rule that prevents the most pain is **"an interface has two owners and one definition."** The most common real-world failure is two teams each holding their own version of the truth, both confident, both partly wrong. Establish a single controlled interface definition, baseline it, and route changes through both parties.

### Architecture patterns and reference architectures

Reuse where you can:

- **Layered** — each layer uses the one below; common in software and communication stacks.
- **Client–server**, **publish–subscribe**, **service-oriented**, **microservices** — interaction patterns.
- **Federated** — independent systems cooperating, typical of systems of systems.
- **Redundancy patterns** — dual redundant, triple modular redundant with voting, hot/warm/cold standby, dissimilar redundancy for common-mode protection.
- **Modular open systems approach (MOSA)** — a deliberate strategy of modular design with open, published interfaces to enable competition, technology refresh, and upgrade over the life. Increasingly mandated in defence procurement.
- **Product line architecture** — a common core architecture with planned variation points across a family of products.
- **Reference architecture** — a domain-standard structure to specialise from.

---

## Design Definition

**Purpose:** to provide sufficient detailed data and information about the system and its elements to enable implementation consistent with architectural entities defined in models and views of the system architecture.

Where architecture decides *what elements and why*, design decides *how each element works*, in enough detail that someone can build it.

### Activities

- **Determine the technologies** required for each element and the design characteristics that must be met.
- **Assess design alternatives** for each element — build, buy, modify, reuse.
- **Manage the design** — capture design rationale and maintain traceability to requirements and architecture.
- **Define the design characteristics** with sufficient precision: drawings, schematics, software detailed design, materials, tolerances, algorithms, interface details.
- **Derive requirements** where design decisions create new needs, and feed them back.

### Make, buy, reuse

An explicit and consequential decision for every element. Considerations: cost, schedule, in-house capability, strategic importance, intellectual property, supplier risk and longevity, certification evidence availability, obsolescence, and the cost of the integration and verification work that a bought item still requires.

> **On the job:** the standard trap is "buy is cheaper" — comparing purchase price against build cost while ignoring integration effort, adaptation, licensing over the life, supplier dependency, and the verification evidence you may have to generate anyway. Compare *total life cycle cost* including the integration burden.

### Design heuristics worth carrying

- **Design for the whole life cycle**, not only for function: manufacture, assembly, test, install, operate, maintain, upgrade, dispose.
- **Keep margin** and know where it is. Margin that is not tracked is margin that is already spent.
- **Prefer the simple option** when performance is otherwise comparable. Complexity has a permanent carrying cost.
- **Make the failure modes benign.** Ask "what happens when this breaks?" for every element.
- **Design for diagnosis.** If a maintainer cannot tell which element failed, availability collapses regardless of reliability.
- **Standardise and reuse parts** — fewer part numbers means cheaper spares, simpler training, and fewer supply chain risks.

---

## System Analysis

**Purpose:** to provide a rigorous basis of data and information for technical understanding, to aid decision-making across the life cycle.

This process supplies the numbers behind everything else.

### What it covers

- **Performance analysis** — will it meet the performance requirements? Modelling, simulation, calculation.
- **Trade-off analysis** — comparing alternatives against weighted criteria.
- **Effectiveness analysis** — how well does the solution achieve the MOEs?
- **Cost analysis** — life cycle cost estimation and cost-effectiveness.
- **Technical risk analysis** — quantifying the technical risks.
- **Feasibility and sensitivity analysis** — is it achievable, and which assumptions dominate the result?

### Trade studies, done properly

A trade study is the workhorse. The disciplined sequence:

1. **Define the decision** and who owns it.
2. **Define the criteria and their weights — before evaluating alternatives.** This is the step that keeps the study honest. Defining criteria after you have seen the options is how you produce a study that confirms what you already wanted.
3. **Generate a genuine set of alternatives**, including the do-nothing and the extreme options. Two alternatives where one is obviously bad is not a trade study; it is a justification.
4. **Define the evaluation method** and the measurement scales.
5. **Evaluate** each alternative against each criterion, using real analysis where available and documented judgement where not.
6. **Perform sensitivity analysis.** If a small change in a weight flips the answer, say so — the decision is not robust and you should report that.
7. **Recommend, decide, and record the rationale.**

Techniques you should recognise:

- **Weighted decision matrix** — the standard: criteria, weights, scores, weighted sum.
- **Pugh matrix (controlled convergence)** — score alternatives as better/same/worse against a datum. Fast, good for early screening.
- **Analytic Hierarchy Process (AHP)** — pairwise comparisons producing weights with a consistency check.
- **Multi-Objective / Multi-Attribute Decision Analysis (MODA/MADA)** — value functions over each attribute, aggregated formally.
- **Utility theory** — capturing non-linear preference and risk attitude.
- **Cost–benefit analysis** and **cost-effectiveness analysis**.
- **Set-based design** — keep multiple options alive and progressively narrow by eliminating infeasible regions, rather than picking early and iterating on one point design.

> **On the exam:** the rule that criteria and weights are established *before* evaluating alternatives is a favourite. So is the point that sensitivity analysis is part of a competent trade study, and that the **rationale must be recorded**.

### Modelling and simulation

Analysis increasingly means models. Know the categories:

- **Physics-based models** — thermal, structural, fluid, electromagnetic.
- **Discrete-event simulation** — queues, logistics, throughput, maintenance operations.
- **Monte Carlo simulation** — propagating uncertainty through a model to get distributions rather than point answers.
- **Agent-based models** — emergent behaviour from interacting autonomous entities.
- **Hardware-in-the-loop and human-in-the-loop** — real components or real people embedded in the simulation.
- **Digital twin** — a model of a specific instance, kept synchronised with the real thing through operational data.

Every model needs **verification** (is the model built correctly?), **validation** (does it represent reality well enough for this purpose?), and a stated **domain of applicability**. A model used outside the range over which it was validated is a hazard, not an asset.

## Key takeaways

- Architecture Definition generates *alternatives*, selects among them, and expresses the result in views addressing stakeholder concerns; recorded rationale is part of the deliverable.
- ISO/IEC/IEEE 42010 vocabulary: stakeholders have concerns, viewpoints specify how to build views, views represent the system, and views are made of models.
- Separate functional from physical architecture, and treat allocation — including human versus machine — as an analysed decision.
- Decompose for high cohesion, loose coupling, alignment with change, testability, and specialty concerns.
- Interface definition is the highest-return architecture activity: one definition, two owners, explicit units, timing, and off-nominal behaviour.
- Design Definition adds implementation-level detail, including make/buy/reuse decisions judged on total life cycle cost, not purchase price.
- System Analysis runs throughout; competent trade studies set criteria and weights before evaluation, include a real alternative set, perform sensitivity analysis, and record rationale.

## Check yourself

1. State the difference between a viewpoint and a view, and say what both exist to serve.
2. Why is it valuable to define a functional architecture before a physical one?
3. What are the five most important things to pin down when defining an interface?
4. Your trade study produces a winner by 2% on a weighted score. What must you do before recommending it?
5. Give three decomposition heuristics and explain the consequence of violating each.
6. Why is "buy is cheaper than build" frequently wrong?
