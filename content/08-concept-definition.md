---
title: "Defining the Problem: Mission Analysis, Stakeholder Needs, System Requirements"
part: "Part III — Technical Processes"
order: 8
minutes: 18
summary: "The first three technical processes — where the problem is framed, stakeholders are understood, and the technical view of the solution is established."
---

## The three processes that decide whether the project succeeds

Everything downstream is determined here. If the problem is framed wrongly, or a stakeholder is missed, or the system requirements say the wrong thing, no amount of excellent design and testing will save the project — you will build the wrong thing beautifully.

The three processes, in order:

1. **Business or Mission Analysis** — *what problem are we solving, and is it worth solving?*
2. **Stakeholder Needs and Requirements Definition** — *who cares, what do they need, and what must be true for them?*
3. **System Requirements Definition** — *what must the system do and be, in technical, verifiable terms?*

The movement across these three is from **problem space** to **solution space**, and from **stakeholder language** to **engineering language**.

> **On the exam:** the transition points are examined heavily. Business or Mission Analysis is in the *problem space* and is solution-independent. Stakeholder Needs and Requirements Definition is still stakeholder-facing but produces formal requirements. System Requirements Definition crosses into the *solution space* and produces the technical, verifiable specification.

---

## 1. Business or Mission Analysis

**Purpose:** to define the business or mission problem or opportunity, characterise the solution space, and determine potential solution classes that could address the problem or take advantage of the opportunity.

This is the process that asks *should we even be doing this?* It sits before any commitment to a particular kind of solution.

### Key activities

- **Define the problem or opportunity space.** What is actually wrong or missing? What is the gap in capability? Examine the enterprise context, the environment, the drivers.
- **Characterise the solution space.** What classes of solution could conceivably address this? Not "which product" — "which *kind* of approach." Procedural change? New system? Modification of an existing system? Service rather than product?
- **Evaluate alternative solution classes.** Use analysis and modelling to compare them at a high level.
- **Select the preferred alternative** and establish it as the basis for proceeding.
- **Manage the mission analysis** — maintain traceability and record the rationale.

### Outputs you will actually produce

- A **problem or opportunity statement** — the thing the whole project is for.
- The **Concept of Operations (ConOps)** — how the enterprise intends to operate, from the acquirer's or owner's perspective. Note this is broader than the system.
- **Preliminary life cycle concepts** — how the system will be acquired, deployed, operated, supported, and retired at a conceptual level.
- **Measures of Effectiveness (MOEs)** — solution-independent measures of how well the mission need is met.
- The **business or mission analysis strategy** and traceability records.

### The life cycle concepts

Introduced here and elaborated later, these are a genuinely useful practical checklist. For any system you should be able to state, early:

| Concept | Question it answers |
| --- | --- |
| **Acquisition concept** | How will we obtain it? Build, buy, modify, lease? |
| **Deployment / transition concept** | How will it be delivered, installed, and brought into service? |
| **Operational concept (OpsCon)** | How will it be used, by whom, in what scenarios? |
| **Support / sustainment concept** | How will it be maintained, supplied, and upgraded? |
| **Retirement / disposal concept** | How will it be taken out of service and disposed of? |

> **On the job:** the support and retirement concepts are the ones that get skipped, and they are also where the majority of life cycle cost lives. Asking "how will this be maintained in year twelve?" in the first month is one of the highest-leverage questions a junior systems engineer can ask. It makes you look experienced because experienced people ask it.

### Measures of Effectiveness

**MOEs** are the measures by which the *stakeholder* judges success. They are:

- **Operational** — about the mission or business outcome, not the system's internals.
- **Solution-independent** — they must be statable before you know what you will build.
- **Few** — a handful, not fifty.

Example: for an ambulance service, an MOE is "percentage of emergency calls reached within eight minutes." Note that this says nothing about vehicles, dispatch software, or staffing — any of which might be the solution.

Contrast with **MOPs** (Measures of Performance), which come later and are about the system: "vehicle top speed," "dispatch system response time." MOPs are how the chosen solution delivers the MOEs.

> **On the exam:** MOE = stakeholder/operational/solution-independent. MOP = system/technical. A TPM is a MOP tracked over time. A KPP is a critical parameter with threshold and objective values. This four-way distinction is examined reliably.

---

## 2. Stakeholder Needs and Requirements Definition

**Purpose:** to define the stakeholder requirements for a system that can provide the capabilities needed by users and other stakeholders in a defined environment.

### Who is a stakeholder?

Anyone with an interest in, or affected by, the system. New systems engineers consistently under-count. A working checklist:

- **Users** — and note there are usually several distinct kinds, with conflicting needs
- **Operators** (who run it) and **maintainers** (who fix it) — often forgotten, always important
- **The acquirer / customer / sponsor** — who pays, who may not be a user
- **Regulators and certification authorities**
- **Manufacturers and the supply chain**
- **Installers, trainers, and support staff**
- **Owners of interoperating systems**
- **The public, communities, and the environment**
- **Disposal and recycling organisations**
- **Internal**: your own management, other projects, the security function
- **Adversaries** — for safety- and security-relevant systems, hostile actors are stakeholders whose "needs" you must consider and defeat

> **On the job:** run a **stakeholder analysis** — list them, then rate each on *interest* and *influence*. High interest and high influence: engage closely and continuously. High influence, low interest: keep satisfied, they can stop you. High interest, low influence: keep informed, they are your best source of real detail. Low/low: monitor. This takes an hour and prevents the "nobody told me" disaster at acceptance.

### Key activities

- **Identify stakeholders** across the whole life cycle, not just the operational stage.
- **Elicit needs** — through interviews, observation, workshops, surveys, prototypes, analysis of existing systems, incident and complaint data, and regulation review.
- **Define the operational concept (OpsCon) and operational scenarios** — concrete narratives of use, including off-nominal and emergency cases.
- **Transform needs into stakeholder requirements** — formal, verifiable statements written from the stakeholder's viewpoint.
- **Analyse and resolve conflicts** between stakeholders. There will be conflicts. Resolving them is your job, not the customer's.
- **Validate the stakeholder requirements** — confirm with stakeholders that these correctly capture what they need.
- **Manage** — baseline them and maintain traceability.

### Elicitation is a skill, and here is the core of it

Stakeholders tell you **solutions**, not needs. "I need a bigger button" is a solution. The need might be "I mis-press the control when wearing gloves." The bigger button might be wrong; the right answer might be a guard, a different control type, or a confirmation step.

Techniques that work:

- **Ask "why" up the chain.** Why do you need that? And why does that matter? Stop when you reach a genuine business or mission outcome.
- **Ask about the bad day, not the good day.** "Tell me about the last time this went wrong" surfaces more real requirements than any amount of "what do you need."
- **Watch people work.** Observation reveals workarounds, which are unmet needs made visible.
- **Ask what they would do if the system failed.** That gives you availability, degraded-mode, and fallback requirements for free.
- **Show them something.** A sketch, a mock-up, a prototype. People are far better at criticising a concrete thing than at specifying an abstract one.
- **Ask who else is affected.** This is how you find the stakeholders nobody listed.

### Needs versus requirements

| | Need | Stakeholder requirement |
| --- | --- | --- |
| Language | Stakeholder's own | Structured, formal |
| Form | Narrative, possibly vague | "The [system] shall…" or a defined template |
| Verifiable? | Not necessarily | Yes, must be |
| Ownership | Stakeholder | Project |

The transformation from need to stakeholder requirement is a real analytical step, not a reformatting exercise. You must resolve ambiguity, remove solution bias, split compound statements, and add missing conditions.

### Outputs

- **Stakeholder requirements** (often a Stakeholder Requirements Specification, StRS)
- **OpsCon** and operational scenarios
- **Validation criteria** — how you will later confirm the system satisfies these needs
- **Stakeholder register and traceability**

---

## 3. System Requirements Definition

**Purpose:** to transform the stakeholder, user-oriented view of desired capabilities into a technical view of a solution that meets the operational needs of the user.

This is the crossing point into the solution domain. The output is the specification the engineers build against.

### Key activities

- **Define the system boundary** formally and define external interfaces.
- **Define functional requirements** — what the system must do.
- **Define performance requirements** — how well, how fast, how much, how accurately.
- **Define non-functional / quality requirements** — reliability, availability, maintainability, safety, security, usability, portability, environmental resilience.
- **Define constraints** — imposed limits: standards to comply with, technologies mandated, cost and mass caps, interfaces to legacy systems.
- **Define interface requirements** for each external interface.
- **Identify critical performance measures** — MOPs, TPMs, KPPs.
- **Analyse the requirement set** for completeness, consistency, and feasibility.
- **Verify and validate the requirement set** — check quality (are they well-formed?) and correctness (do they satisfy the stakeholder requirements?).
- **Maintain bidirectional traceability** to stakeholder requirements.

### The categories of system requirement

You should be able to recite these, because "which category is this requirement" is an examinable pattern:

| Category | Answers | Example |
| --- | --- | --- |
| **Functional** | What must it do? | The system shall record patient vital signs. |
| **Performance** | How well? | The system shall record vital signs at intervals not exceeding 2 seconds. |
| **Interface** | What does it connect to and how? | The system shall transmit records to the hospital EHR using HL7 FHIR R4. |
| **Environmental** | What conditions must it withstand? | The system shall operate in ambient temperatures from 0 °C to 45 °C. |
| **Physical** | Size, mass, form | The bedside unit mass shall not exceed 3 kg. |
| **Operational / usability** | How will it be used? | A trained nurse shall be able to complete patient admission in under 60 seconds. |
| **Reliability, availability, maintainability** | How dependable? | The system shall achieve operational availability of at least 0.995. |
| **Safety** | What must not happen? | The system shall not deliver an infusion rate exceeding the programmed limit under any single fault condition. |
| **Security** | Protection | The system shall authenticate all users prior to granting clinical data access. |
| **Constraint** | Imposed limits | The system shall comply with IEC 60601-1. |
| **Compliance / regulatory** | Which rules apply | Software shall be developed in accordance with IEC 62304 Class C. |

### The classic failure: writing the design instead of the requirement

A requirement should state **what** is needed and **why it must be true**, not **how** to achieve it — unless the how is genuinely a constraint.

- Design in a requirement: *"The system shall use a 12 V lead-acid battery."*
- Requirement: *"The system shall operate for at least 4 hours without external power."*

Unless the battery chemistry is genuinely mandated (commonality with an existing fleet, for example — in which case it is a *constraint* and should be labelled as one), the second is correct. Premature design in requirements eliminates the solution space before you have explored it.

> **On the job:** you will get pushback — "we already know we're using that battery." The answer is not to fight it. Write the capability requirement, and record the battery as a documented constraint with its rationale. You keep the traceability honest and the engineer keeps their battery.

---

## How these three processes interact

They are not a conveyor belt. In practice:

- Mission analysis reveals you need to talk to more stakeholders.
- Stakeholder elicitation reveals the problem was framed too narrowly, sending you back to mission analysis.
- Drafting system requirements exposes stakeholder requirements that are contradictory or untestable.
- Early architecture work reveals a system requirement is infeasible, forcing renegotiation of a stakeholder requirement.

This is **iteration**, and it is correct behaviour, not failure. What matters is that each loop is deliberate and that traceability is maintained, so you always know which stakeholder need a given system requirement serves.

## Common pitfalls

| Pitfall | Consequence | Defence |
| --- | --- | --- |
| Missing a stakeholder class (usually maintainers, trainers, or regulators) | Late discovery of a whole requirement set | Systematic stakeholder checklist across all life cycle stages |
| Accepting solutions as needs | Solution space closed prematurely | Ask "why" until you hit an outcome |
| No operational scenarios | Off-nominal behaviour undefined; discovered in the field | Write nominal, degraded, and emergency scenarios |
| Untraceable system requirements | Cannot justify scope; gold-plating goes unnoticed | Bidirectional traceability from day one |
| MOEs never defined | No agreed definition of success | Force agreement on three to seven MOEs early |
| Skipping support and disposal concepts | Cost blowout in operations | Require all five life cycle concepts before the concept gate |

## Key takeaways

- Business or Mission Analysis frames the problem in the problem space and is solution-independent; it produces the problem statement, ConOps, preliminary life cycle concepts, and MOEs.
- Stakeholder Needs and Requirements Definition identifies all stakeholders across the whole life cycle, elicits needs, produces the OpsCon and operational scenarios, and transforms needs into formal stakeholder requirements.
- System Requirements Definition crosses into the solution domain and produces the technical, verifiable system requirements, including functional, performance, interface, quality, and constraint requirements.
- MOE (operational, solution-independent) versus MOP (system, technical) versus TPM (a MOP tracked over time) versus KPP (critical, with threshold and objective) is a core examinable distinction.
- Stakeholders state solutions; your job is to extract the underlying need. Requirements state what and why, not how.
- These processes iterate. Iteration with maintained traceability is good practice, not rework.

## Check yourself

1. Which process produces the ConOps, and which produces the OpsCon? What is the difference in scope and viewpoint?
2. Give an MOE and a corresponding MOP for a home heating system.
3. Rewrite as a proper requirement: "The unit shall have a 30 Ah lithium battery so it can run all day."
4. List six stakeholder categories that teams commonly forget.
5. Why is iteration between these three processes a sign of health rather than failure?
