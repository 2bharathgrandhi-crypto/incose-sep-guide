---
title: "Specialty Engineering: The '-ilities' and How to Use Them"
part: "Part V — Methods and Specialties"
order: 18
minutes: 18
summary: "Reliability, maintainability, availability, safety, security, resilience, human systems integration, logistics, affordability, environmental engineering, and the rest — what each contributes and when to engage it."
---

## What specialty engineering is and why it exists

Specialty engineering covers the disciplines that address system-wide characteristics — mostly the "-ilities" — that cannot be assigned to any one element because they are **emergent properties of the whole system**.

No component is "safe." No module is "available." No part is "usable." These properties exist only at system level, and they are created or destroyed by architectural and design decisions across the whole system. That is precisely why the systems engineer owns them.

### The systems engineer's actual job here

You are not expected to be a reliability engineer, a safety engineer, a security engineer, and a human factors engineer. You are expected to:

1. **Know which specialties apply** to your system.
2. **Engage them early enough to matter.** A safety engineer brought in after CDR can only document the hazards you built in.
3. **Understand their outputs** well enough to act on them.
4. **Integrate and arbitrate** between them, because their recommendations will conflict.
5. **Make sure their requirements are in the requirement set** and are verified like any other.

> **On the job:** the specialties conflict, reliably. Security wants encryption and authentication; usability wants frictionless access; safety wants immediate emergency override; reliability wants fewer parts; maintainability wants access panels that reduce structural efficiency. **Arbitrating these conflicts with explicit, recorded trade-offs is not a distraction from systems engineering — it is the purest form of it.**

---

## Reliability, Availability, Maintainability (RAM)

Frequently treated as one integrated discipline, sometimes extended to RAMS with safety.

### Reliability

The probability that the system performs its required function, under stated conditions, for a stated period of time. Note the three qualifiers — a reliability figure without conditions and duration is meaningless.

Key measures and concepts:

- **MTBF** — mean time between failures, for repairable items.
- **MTTF** — mean time to failure, for non-repairable items.
- **Failure rate (λ)** — failures per unit time; for constant-failure-rate items, `λ = 1/MTBF`.
- **The bathtub curve** — infant mortality (decreasing rate, addressed by burn-in and screening), useful life (roughly constant rate), wear-out (increasing rate, addressed by scheduled replacement).
- **Reliability block diagrams** — series arrangements (all must work; reliability multiplies and is always lower than the worst element) versus parallel/redundant arrangements (any one suffices; reliability improves).
- **Redundancy** — active (both running), standby (hot, warm, cold), and **dissimilar** redundancy to defeat common-mode failures. Redundancy protects against random failure but **not** against design error, which is exactly what dissimilar redundancy addresses.
- **Common-cause and common-mode failure** — one cause defeating multiple redundant paths (shared power supply, shared software defect, shared maintenance error, shared environment). The thing that kills redundant systems.

Analysis methods:

- **FMEA / FMECA** — Failure Modes and Effects (and Criticality) Analysis. **Bottom-up**: for each component, what are its failure modes, what are their effects, how severe, how likely, how detectable? The **Risk Priority Number** multiplies severity × occurrence × detection.
- **Fault Tree Analysis (FTA)** — **top-down**: start from an undesired top event and work down through logic gates to the combinations of causes that produce it. Produces minimal cut sets.
- **Reliability prediction, growth modelling, and accelerated life testing.**

> **On the exam:** FMEA is bottom-up and inductive; FTA is top-down and deductive. This pairing is examined.

### Maintainability

The ease and speed of restoring the system. Measured by **MTTR** (mean time to repair) and related measures. Designed in through modularity, accessibility, diagnostics and built-in test, standard tooling, clear labelling, and interchangeability.

### Availability

The proportion of time the system is able to perform.

- **Inherent availability** `Ai = MTBF / (MTBF + MTTR)` — considers only corrective maintenance and reflects design alone.
- **Achieved availability** adds preventive maintenance.
- **Operational availability** `Ao` additionally includes **administrative and logistics delay time** — waiting for the technician, waiting for the spare, waiting for the authorisation.

The practical lesson: a beautifully reliable system with a three-week spares pipeline has poor operational availability. Availability is a supply chain property as much as a design property.

---

## System Safety

**Purpose:** to ensure the system does not cause unacceptable harm to people, property, or the environment.

Core vocabulary, and be precise because these words are used loosely in ordinary speech:

- **Hazard** — a state or condition that *can* lead to harm.
- **Mishap / accident** — the harmful event itself.
- **Risk** — the combination of the severity of the harm and the likelihood of its occurrence.
- **Safety-critical function** — a function whose failure could cause a mishap.

Process:

1. **Hazard identification** — Preliminary Hazard Analysis (PHA) early, then subsystem and system hazard analyses, operating and support hazard analysis, and hazard analysis of the human role.
2. **Risk assessment** — severity categories (catastrophic, critical, marginal, negligible) against probability levels, combined in a risk matrix, as in MIL-STD-882.
3. **Risk mitigation, in the standard order of precedence:** eliminate the hazard by design → reduce risk by design alteration → incorporate engineered safety features → provide warning devices → provide procedures and training. **Design out before you warn** — procedures and training are the weakest controls and are always last.
4. **Verification** that controls are effective, and **tracking** hazards to closure in a hazard log.
5. **The safety case** — a structured, documented argument, supported by evidence, that the system is acceptably safe for a given application in a given environment. Required in many regulated domains.

Related: **ALARP** (as low as reasonably practicable), **safety integrity levels** (SIL under IEC 61508, DAL in aerospace, ASIL in automotive), and **functional safety** as a discipline.

---

## System Security

Security engineering has moved from a bolt-on to a first-class systems engineering concern, with NIST SP 800-160 treating it as engineering integrated across the life cycle.

Core model: the **CIA triad** — Confidentiality, Integrity, Availability — often extended with authenticity, non-repudiation, and accountability.

Key activities:

- **Threat modelling** — who would attack this, with what capability and motivation, and how? STRIDE is a common enumeration: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.
- **Attack surface analysis** — every interface is an attack surface; minimising interfaces improves both security and reliability.
- **Defence in depth** — layered controls, so that one failure does not lose everything.
- **Least privilege** and **separation of duties**.
- **Zero trust** — no implicit trust based on network location.
- **Supply chain security** — the components and software you did not write are part of your attack surface.
- **Security controls** and continuous monitoring, patching, and vulnerability management across the operational life.

Note the tension with safety: safety often wants immediate, unimpeded emergency access; security wants authenticated, authorised access. Resolving that conflict for a given system is a design decision that must be made deliberately and documented.

---

## Resilience

The ability of a system to **anticipate, withstand, recover from, and adapt to** adverse conditions, disruptions, or attacks.

Distinguish from reliability: reliability is about not failing; resilience is about **continuing to deliver value despite failure**. A resilient system may fail parts of itself constantly and still deliver its mission.

Design strategies: graceful degradation, redundancy and diversity, fail-safe and fail-operational modes, rapid detection and recovery, reconfigurability, margin, and the ability to operate in a reduced mode.

---

## Human Systems Integration (HSI)

Systematically incorporating human considerations into system design. The recognised HSI domains:

| Domain | Concern |
| --- | --- |
| **Manpower** | How many people are needed |
| **Personnel** | What aptitudes and qualifications they need |
| **Training** | What skills must be developed and maintained, and how |
| **Human Factors Engineering** | Designing for human capabilities and limitations — interfaces, workload, anthropometry |
| **Environment** | Conditions people work in — noise, vibration, temperature, lighting |
| **Safety** | Protecting people from harm |
| **Occupational Health** | Long-term health effects — repetitive strain, chemical exposure, fatigue |
| **Habitability** | Living and working conditions for sustained operations |
| **Survivability** | Protecting people from hostile and hazardous events |

Human factors concepts worth knowing: **situation awareness**, **workload** (both overload and dangerous underload), **automation bias** (over-trusting the machine), **mode confusion** (the operator believes the system is in a different state than it is), **error tolerance** (does the design allow recovery from mistakes?), and **anthropometry**.

> **On the job:** the most useful HSI insight is that **"operator error" is usually a design finding.** If the design permitted the error, invited it, or made recovery impossible, the design is the cause. Systems that depend on humans never making mistakes are systems that will fail.

---

## Logistics and Integrated Logistics Support

Everything required to sustain the system in service. The classic elements:

maintenance planning; supply support and spares; support and test equipment; personnel and training; technical data and publications; packaging, handling, storage and transportation (PHS&T); facilities; computer resources support; and design interface (feeding supportability requirements back into design).

Key ideas: **level of repair analysis** (fix it where?), **provisioning** (which spares, how many, where), **obsolescence management (DMSMS)**, and **total ownership cost**.

---

## Affordability and Life Cycle Cost

- **Life cycle cost (LCC)** — total cost of acquisition, operation, support, and disposal. For many long-lived systems, acquisition is the minority of the total.
- **Total ownership cost (TOC)** — LCC plus indirect and enterprise costs.
- **Cost as an Independent Variable (CAIV)** — treating cost as a fixed constraint and trading performance against it, rather than treating cost as an output.
- **Design to cost** — allocating cost targets to elements, exactly as you allocate mass.
- **Cost estimating methods** — analogy, parametric, engineering build-up, expert judgement.
- **Cost-effectiveness analysis** — effectiveness per unit cost, the right basis for comparing alternatives.

The governing fact remains the cost commitment curve: most of the life cycle cost is committed early, by architectural decisions, long before it is spent.

---

## Environmental and Sustainability Engineering

- **Environmental impact analysis** — the effect of the system on its environment across its life.
- **Environmental requirements and qualification** — what the system must withstand: temperature, humidity, shock, vibration, salt fog, radiation, electromagnetic environment.
- **Regulatory compliance** — restricted substances, emissions, waste and recycling obligations.
- **Life cycle assessment (LCA)** — a structured method for quantifying environmental impact from raw material extraction to disposal.
- **Design for environment and circularity** — recyclability, disassembly, material choice, energy efficiency, and extending useful life.

Sustainability is an explicit and growing theme in current systems engineering practice and in the INCOSE Vision.

---

## The rest of the specialty list

Recognise these; each is a chapter elsewhere in someone's life:

- **Electromagnetic compatibility (EMC/EMI)** — does it emit interference, and does it tolerate it?
- **Interoperability analysis** — can it work with the systems it must work with?
- **Manufacturing and producibility** — can it be built repeatably at rate and yield?
- **Mass properties engineering** — mass, centre of gravity, and moments of inertia, tracked with margin. Critical in aerospace and automotive.
- **Usability engineering** — covered under HSI, but often a discipline in its own right.
- **Training needs analysis** — what must users learn, and how will they learn and retain it?
- **Value engineering** — systematically improving function per unit cost.
- **Quality engineering** — statistical process control, capability analysis, Six Sigma techniques.
- **Test and evaluation** — developmental and operational test as a discipline.

---

## When to engage each specialty

The universal answer is **earlier than you think**, but specifically:

| Specialty | Engage by | Because |
| --- | --- | --- |
| Safety | Concept | Hazards are designed in or out at architecture; a safety case cannot be retrofitted |
| Security | Concept | Trust boundaries are architectural; bolted-on security does not work |
| HSI | Concept | Function allocation between human and machine is an architectural decision |
| Reliability | Requirements/architecture | Redundancy and part count are architectural |
| Maintainability | Architecture | Access, modularity, and diagnostics are structural |
| Logistics | Architecture | Support concept drives design decisions |
| Manufacturing | Preliminary design | Producibility is cheap to design in, expensive to add |
| EMC | Preliminary design | Shielding, grounding, and layout are hard to change later |
| Environmental | Requirements | Qualification environments drive design and test cost |

A useful rule: **if a specialty's concern would change the architecture, it must be engaged before the architecture is baselined.** By that test, nearly all of them belong in the concept and early development stages.

## Key takeaways

- Specialty engineering addresses emergent, system-wide properties that no single element owns, which is why the systems engineer integrates them.
- Your job is to know which apply, engage them early, understand their outputs, arbitrate their conflicts, and get their requirements into the verified requirement set.
- RAM: reliability is probability of functioning under stated conditions for a stated time; maintainability is speed of restoration; availability combines both, and operational availability also includes logistics and administrative delay.
- FMEA is bottom-up and inductive; FTA is top-down and deductive; redundancy protects against random failure, not design error, which is why dissimilar redundancy exists.
- Safety risk mitigation follows a strict order of precedence: eliminate by design, reduce by design, engineered safety features, warnings, then procedures and training.
- Security is life cycle engineering built on the CIA triad, threat modelling, defence in depth, and least privilege; it frequently conflicts with safety and usability, and those conflicts must be resolved explicitly.
- Resilience is continuing to deliver despite failure, which is distinct from not failing.
- HSI has nine domains; "operator error" is usually a design finding.
- Most life cycle cost is committed by early architectural decisions, which is the affordability argument for front-loading specialty engagement.

## Check yourself

1. Why can specialty characteristics not be allocated to a single system element?
2. Give the formula for inherent availability and explain what operational availability adds.
3. Contrast FMEA with FTA in terms of direction and logic.
4. State the safety order of precedence for risk mitigation, and explain why training is last.
5. Name five of the nine HSI domains.
6. Give a concrete example of a conflict between two specialties and describe how you would resolve it.
