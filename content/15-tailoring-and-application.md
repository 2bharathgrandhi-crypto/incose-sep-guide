---
title: "Tailoring and Applying Systems Engineering in Different Contexts"
part: "Part V — Methods and Specialties"
order: 15
minutes: 13
summary: "How to right-size the process, and how systems engineering changes for services, enterprises, product lines, systems of systems, and very small organisations."
---

## Tailoring is a required skill, not a shortcut

The standard defines 30 processes. Applying all of them, at full rigour, to a six-person project building a test fixture would be absurd — and the standard says so. **Tailoring is an explicit, sanctioned activity**, and knowing how to do it well is a mark of an experienced systems engineer.

The two failure modes are symmetrical and both common:

- **Under-tailoring** — applying heavyweight process to a small, low-risk project. Produces documents nobody reads, reviews nobody prepares for, and a team that concludes systems engineering is bureaucracy. This is how the discipline earns its bad reputation.
- **Over-tailoring** — stripping process from a project that needed it. Produces the integration crisis, the missed requirement, the certification failure. This is how the discipline earns its budget back, painfully.

## What tailoring actually means

> Tailoring: adapting the life cycle processes to the specific needs of a project, organisation, or context — by deleting, adding, or modifying process activities and their rigour.

Related but distinct: **scaling** adjusts the *depth and rigour* of application; tailoring adjusts *which activities apply at all*. In practice you do both.

### Sources of tailoring authority

Tailoring usually happens at two levels:

1. **Organisational tailoring** — Life Cycle Model Management produces the organisation's standard process set, already tailored from the standard for the organisation's domain and scale.
2. **Project tailoring** — the project tailors from the organisational set, documenting the result in the SEMP.

Tailoring decisions should be **recorded with rationale** and, where the process set is contractually or regulatorily mandated, **approved** by the appropriate authority.

## Factors that drive tailoring

| Factor | Pushes toward more rigour | Pushes toward less |
| --- | --- | --- |
| **Consequence of failure** | Safety-critical, mission-critical, irreversible | Inconvenience only |
| **Complexity** | Many elements, many interactions, many stakeholders | Simple, well-bounded |
| **Novelty / technology maturity** | New technology, unproven concepts | Proven, repeat build |
| **Scale and duration** | Large, long, many organisations | Small, short, one team |
| **Regulatory environment** | Certification required, audited evidence | Unregulated |
| **Contract structure** | Fixed price, multiple suppliers, formal acceptance | Internal, collaborative |
| **Team experience** | New team, new domain | Experienced team, familiar domain |
| **Requirement volatility** | Stable requirements support heavier up-front definition | Volatile requirements favour iterative, lighter definition |
| **Cost of change** | Long-lead hardware, high rework cost | Software, cheap iteration |
| **Distributed development** | Many sites, many suppliers, handovers | Co-located single team |

### The tailoring question

For each process, ask the only question that matters:

> **What risk does applying this activity reduce, and is that risk present here at a level worth the cost?**

If the answer is "none, we do it because the template has a section for it," delete the section. If the answer is "it prevents the integration failure that cost us six months last time," keep it and resource it properly.

### Tailoring guidance in practice

- Never delete the *purpose* of a process, only the *ceremony*. A two-person project still needs to know what it is building, control its configuration, and prove it works. It just does not need a fifty-page SEMP and a change control board with seven members.
- Combine artefacts rather than dropping content. On a small project, one document can legitimately hold the ConOps, the requirements, the architecture, and the verification plan.
- Reduce review formality before reducing review frequency. Frequent, informal technical reviews beat rare, heavy ones on almost every small project.
- Do not tailor away traceability. It is cheap to maintain from the start and very expensive to reconstruct.
- Revisit tailoring at each decision gate. A project that grows in scope or criticality should re-tailor upward.

> **On the exam:** know that tailoring is legitimate and expected, that it is recorded and justified, and that ISO/IEC/IEEE 24748-1 provides guidance on it. Expect questions on the *drivers* of tailoring — complexity, criticality, novelty, regulation, scale.

---

## Applying systems engineering in different contexts

The Handbook devotes attention to how practice shifts across application domains. The processes do not change; their emphasis does.

### Product systems

The classic case the discipline was built for: a tangible deliverable, often hardware plus software, produced and delivered to a customer.

Emphasis on: requirements specification, physical architecture, manufacturing and producibility, qualification testing, configuration control of a physical baseline, spares and logistics.

### Service systems

A service delivers value through performance rather than through a delivered artefact — a transport service, a cloud platform, a healthcare pathway, a maintenance contract.

What shifts:

- **People and processes are primary system elements**, not supporting cast. Staffing levels, training, and procedures are design parameters.
- **Capacity, availability, and responsiveness** dominate the requirement set, often expressed as service level agreements.
- **The customer is often inside the system**, participating in service delivery.
- **The system is continuously delivered and continuously changed**; there is no "delivery date" in the traditional sense.
- **Validation is continuous**, through service performance monitoring rather than a one-off acceptance event.

### Enterprise systems

Systems engineering applied to an organisation itself: its structure, processes, information flows, and capabilities.

What shifts: extremely high human and political content, fuzzy boundaries, multiple simultaneous change initiatives, and objectives that are contested rather than merely unknown. Enterprise architecture frameworks (TOGAF, Zachman) and soft systems approaches become relevant. The "requirements" are frequently negotiated positions rather than technical statements.

### Systems of systems

Covered in **Systems Thinking and Core Concepts**; the practical consequences for process:

- You **negotiate** rather than **direct**, unless the SoS is Directed.
- **Interfaces and standards are the primary engineering artefact**, because they are the only real lever you have over systems you do not own.
- **Evolutionary development** is the norm — the SoS is never finished, and constituent systems change on their own schedules without asking you.
- **Emergent behaviour is the point** and also the main hazard; SoS-level testing and operational trials matter disproportionately.
- **Governance and agreements** carry weight equal to the technical work.

### Product lines and families

A **product line** is a set of products sharing a common, managed set of features and a common architecture, developed from a common set of core assets.

Key concepts: **commonality** (what is shared), **variability** (what differs), **variation points** (where in the architecture variation is permitted), and **core assets** (the shared architecture, components, requirements, and test assets).

The economics: higher up-front investment in the platform, much lower marginal cost per product variant. The engineering discipline required is significantly higher, because a defect in a core asset propagates to the whole family — and because the temptation to let one product's urgent need corrupt the shared core is constant.

### Very small entities and small projects

Small organisations and teams still need systems engineering — arguably more, because they have no slack to absorb failures. What they need is a proportionate version. ISO/IEC 29110 addresses life cycle profiles for very small entities and is worth knowing by name.

A credible minimum systems engineering set for a small project:

1. A one-page problem statement and context diagram.
2. A stakeholder list and a short set of prioritised needs.
3. A requirement set, however short, with rationale and verification method attributes.
4. An architecture diagram with interfaces named and owned.
5. A risk list with owners and next actions.
6. Version control and a defined change process, however lightweight.
7. A verification matrix mapping requirements to evidence.

That is perhaps a week of effort spread over a project and it captures the overwhelming majority of the value.

### Software-intensive systems

Where most modern systems now live. The shifts: faster iteration, cheaper change, continuous integration and deployment, and life cycle models that reflect that. But the systems engineering does not disappear — it moves to architecture, interfaces, data, security, and the physical and human context the software sits in. ISO/IEC/IEEE 12207 is the software-life-cycle counterpart to 15288 and is harmonised with it.

### Regulated and safety-critical domains

Aerospace, medical devices, nuclear, rail, automotive, defence. The shift is toward **evidence**: everything must be demonstrable to a third party, traceability is a deliverable rather than a convenience, independence of verification is often mandated, and the applicable domain standard effectively dictates much of the tailoring.

The practical implication for tailoring: in these domains you tailor **upward** from the standard, not downward, and your tailoring decisions are subject to external approval.

## Key takeaways

- Tailoring is an expected, legitimate activity — recorded, justified, and revisited at gates. Under-tailoring produces bureaucracy; over-tailoring produces failure.
- Tailoring drivers: consequence of failure, complexity, novelty, scale, regulation, contract structure, team experience, requirement volatility, and cost of change.
- The tailoring test: what risk does this activity reduce, and is that risk present here at a level worth the cost?
- Never tailor away a process's purpose — only its ceremony. Combine artefacts rather than dropping content.
- Service systems make people and processes primary elements and shift validation to continuous monitoring; enterprise systems add political and human complexity; systems of systems make interfaces, agreements, and governance the main levers.
- Product lines trade higher platform investment for lower marginal cost per variant, and demand stronger discipline over the shared core.
- Small projects need a proportionate minimum set, not an exemption.

## Check yourself

1. Give the one question you should ask of every process activity when tailoring.
2. Name five factors that push a project toward greater process rigour.
3. What changes about systems engineering when the deliverable is a service rather than a product?
4. Define commonality, variability, and variation point in a product line context.
5. List the minimum systems engineering artefacts you would insist on for a three-person, six-month project.
