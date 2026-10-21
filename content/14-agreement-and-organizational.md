---
title: "Agreement and Organizational Project-Enabling Processes"
part: "Part IV — Management and Organisation"
order: 14
minutes: 14
summary: "Acquisition and Supply, and the six processes by which an organisation enables its projects — plus the practical craft of working with suppliers."
---

## Two groups, one theme: the world outside the project

The eight technical management processes govern what happens *inside* a project. This chapter covers the two groups that connect a project to everything else: the **agreements** it makes with other organisations, and the **enabling environment** its own organisation provides.

---

# The Agreement Processes (2)

These two are mirror images of the same relationship. In any agreement, one party acquires and the other supplies. Note that both processes exist in the standard because your organisation will be on both sides at different times — often simultaneously, as a supplier to your customer and an acquirer from your own suppliers.

## Acquisition

**Purpose:** to obtain a product or service in accordance with the acquirer's requirements.

### Activities

- **Prepare for acquisition** — define the acquisition strategy, determine what will be acquired versus made in house, and define the acquisition requirements.
- **Advertise and select the supplier** — issue the request (RFI, RFP, RFQ, ITT), define evaluation criteria in advance, evaluate responses, select.
- **Establish the agreement** — negotiate and record terms: scope, requirements, deliverables, acceptance criteria, schedule, price, intellectual property, warranties, data rights, and change mechanisms.
- **Monitor the agreement** — track supplier progress and technical performance, conduct reviews, manage change.
- **Accept the product or service** — verify and validate against the agreement, accept formally, and make payment.

### Practical craft

- **Acceptance criteria belong in the agreement, written unambiguously.** The most common commercial dispute in engineering is two parties with different beliefs about what "done" means. Write the verification method into the contract.
- **Buy data rights deliberately.** If you cannot obtain the interface definitions, source code, or design data, you have bought a system you cannot maintain, modify, or re-compete. This is the single most consequential procurement decision for long-lived systems, and it is usually made by people who will not be there to suffer the consequences.
- **Evaluate for the whole life.** Purchase price is a fraction of total ownership cost. Weigh supplier longevity, spares, obsolescence commitments, and support.
- **Flow requirements down correctly.** A supplier's specification is derived from your system requirements, with traceability maintained across the boundary. Requirements that are simply copied down without tailoring produce suppliers solving the wrong problem.
- **Define the interface and the integration responsibility explicitly.** Who integrates? Who owns the interface definition? Who pays when it does not fit?

## Supply

**Purpose:** to provide an acquirer with a product or service that meets agreed requirements.

### Activities

- **Prepare for supply** — determine the existence of an opportunity, decide whether to bid, define the supply strategy.
- **Respond to the request** — prepare the proposal, including technical approach, price, and schedule.
- **Establish the agreement** — negotiate and sign.
- **Execute the agreement** — deliver per the agreement, report progress, manage change.
- **Deliver and support** — hand over, obtain acceptance, provide agreed support, and close.

### Practical craft

- **Bid/no-bid is an engineering decision as much as a commercial one.** Can we actually do this, with the people we have, in that time?
- **Record your assumptions in the proposal.** When the customer's context turns out to differ, documented assumptions are what makes a change negotiation possible rather than a dispute.
- **The proposal is the first systems engineering artefact of the project.** Requirements analysis performed during bidding is how you avoid winning a contract you cannot execute. Teams that treat bidding as a sales activity discover the requirements problems after signature, when they are expensive.

> **On the exam:** Acquisition and Supply are the two Agreement processes. The acquirer acquires; the supplier supplies. Straightforward, and worth free marks.

---

# The Organizational Project-Enabling Processes (6)

These operate at the **organisation** level, above any individual project. The organisation runs them so that projects have what they need. A useful test: if the process would still exist when there are no projects running, it is organisational.

## 1. Life Cycle Model Management

**Purpose:** to define, maintain, and assure availability of policies, life cycle processes, life cycle models, and procedures for use by the organisation.

The organisation maintains a **process asset library** — its standard life cycle models, process definitions, templates, checklists, and tailoring guidelines. Projects then select and tailor from that set rather than inventing from nothing.

Also covers **process improvement**: assessing how processes perform, gathering feedback from projects, and improving the standard set. Capability maturity frameworks such as CMMI, and process assessment standards, live here.

> **On the job:** if your organisation has no process asset library, building even a minimal one — a requirement template, a review checklist, a risk register template, a SEMP skeleton — is a disproportionately high-value contribution for a junior engineer. It is visible, useful, and teaches you the processes as you build it.

## 2. Infrastructure Management

**Purpose:** to provide the infrastructure and services to projects to support organisation and project objectives throughout the life cycle.

Facilities, laboratories, test equipment, IT systems, networks, engineering tools, licences, model repositories, secure environments. For systems engineers specifically: the requirements management tool, the modelling environment, the configuration management system, the simulation infrastructure, and the integration lab.

Infrastructure has lead time. A test facility that is needed in month fourteen must be commissioned in month eight. This is routinely discovered in month thirteen.

## 3. Portfolio Management

**Purpose:** to initiate and sustain necessary, sufficient, and suitable projects in order to meet the strategic objectives of the organisation.

Deciding **which projects exist**: starting them, funding them, redirecting them, and — critically — terminating them. Portfolio management is where the organisation balances its investments across risk, return, strategic fit, and resource capacity.

> **On the exam:** Portfolio Management (organisational, which projects) versus Project Planning (technical management, how one project runs) is an examinable contrast.

The uncomfortable but important function here is **terminating projects that should stop**. Organisations are bad at this; sunk cost reasoning and reputational concerns keep doomed programmes alive. A functioning portfolio process makes stopping a normal, respectable outcome.

## 4. Human Resource Management

**Purpose:** to provide the organisation with necessary human resources and to maintain their competencies consistent with business needs.

Recruitment, skills development, training, competency management, career paths, and retention.

For systems engineering specifically, the relevant artefact is the **INCOSE Systems Engineering Competency Framework**, which defines competencies across groups covering core systems engineering principles, professional behaviours, technical competencies, management competencies, and integrating competencies. Each is assessed at proficiency levels — typically described as awareness, supervised practitioner, practitioner, lead practitioner, and expert.

> **On the job:** use the competency framework on yourself. Rate your current level in each area, identify the two you most need for your next role, and propose specific development actions to your manager. It converts "I want to grow" into a concrete, fundable conversation — and it happens to be exactly the evidence structure a CSEP application wants.

## 5. Quality Management

**Purpose:** to assure that products, services, and implementations of quality management meet organisational and project quality objectives and achieve customer satisfaction.

The organisation's **quality management system** — policy, objectives, standard practices, and the framework of audits and improvement. Typically aligned with ISO 9001, and in regulated sectors with the domain equivalent (for example the medical device or aerospace quality standards).

Remember the pairing: Quality Management is organisational and establishes the system; **Quality Assurance** is technical management and applies it on a project.

## 6. Knowledge Management

**Purpose:** to create the capability and assets that enable the organisation to exploit opportunities to re-apply existing knowledge.

Capturing and reusing knowledge, skills, and assets across projects: lessons learned, design patterns, reusable components and models, expertise directories, communities of practice, and mentoring.

The systems engineering-relevant assets: reusable requirement sets, reference architectures, model libraries, standard interface definitions, lessons-learned databases, and estimating history.

> **On the job:** the honest state of lessons learned in most organisations is a document written at project close, filed, and never read. What actually works is smaller and more local: a short lessons review after each major milestone while memory is fresh, with findings turned into concrete changes to templates and checklists. A lesson that changes an artefact you will definitely use is learned; a lesson in a report is a lesson recorded.

Remember the pairing: Knowledge Management is organisational and cross-project; **Information Management** is technical management and handles a project's information items.

---

## The four cross-group pairs, one more time

These are the most examined relationships in the whole framework, so here they are collected:

| Organisational (enterprise level) | Technical management (project level) |
| --- | --- |
| **Quality Management** — establishes the quality system | **Quality Assurance** — applies it to the project |
| **Knowledge Management** — reuse of knowledge across the organisation | **Information Management** — handling this project's information items |
| **Portfolio Management** — which projects exist | **Project Planning** — how this project's technical effort runs |
| **Life Cycle Model Management** — maintains the organisation's process and model set | *(Tailoring)* — the project selects and adapts from that set |

## Key takeaways

- The two Agreement processes are Acquisition (acquirer's side) and Supply (supplier's side); they are two views of the same relationship and your organisation is usually on both sides at once.
- Acceptance criteria, verification methods, data rights, and integration responsibility belong explicitly in the agreement — ambiguity here becomes commercial dispute later.
- The six organisational project-enabling processes are Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management, and Knowledge Management.
- These operate above projects: the organisation provides processes, infrastructure, funding decisions, people, the quality system, and reusable knowledge.
- The INCOSE Systems Engineering Competency Framework is the reference for assessing and developing systems engineering capability, and doubles as a structure for your own development plan.
- Memorise the four cross-group pairs; they are among the most reliable exam questions available.

## Check yourself

1. Which process group contains Acquisition and Supply, and how many processes are in that group?
2. Name the six organizational project-enabling processes without looking.
3. Your project needs an environmental test chamber in eight months. Which organisational process is responsible for providing it, and when should you raise it?
4. Explain the difference between Portfolio Management and Project Planning.
5. Why are data rights one of the most consequential acquisition decisions for a long-lived system?
6. Which organisational process owns the lessons-learned repository, and which technical management process owns the project's document control?
