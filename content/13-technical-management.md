---
title: "The Eight Technical Management Processes"
part: "Part IV — Management and Organisation"
order: 13
minutes: 22
summary: "Planning, assessment and control, decision management, risk, configuration management, information management, measurement, and quality assurance — where most real projects actually succeed or fail."
---

## Why this chapter deserves your attention

Engineers under-invest here. The technical processes feel like "real engineering" and these feel like paperwork. That instinct is wrong, and expensively so: most failed programmes did not fail because someone could not solve the equations. They failed because risks went unmanaged, configurations diverged, decisions were relitigated, or nobody measured the right thing until it was too late.

These eight processes also carry substantial exam weight. They are concrete and list-heavy, which makes them very learnable.

The eight, with the mnemonic **P-A-D-R-C-I-M-Q**:

1. **P**roject Planning
2. **P**roject **A**ssessment and Control
3. **D**ecision Management
4. **R**isk Management
5. **C**onfiguration Management
6. **I**nformation Management
7. **M**easurement
8. **Q**uality Assurance

---

## 1. Project Planning

**Purpose:** to produce and coordinate effective and workable plans.

In the systems engineering context, this is the planning of the **technical effort** — which is why it appears in a systems engineering standard rather than being left entirely to project management.

### Key outputs

- **Work Breakdown Structure (WBS)** — a hierarchical, deliverable-oriented decomposition of the total scope of work. Every element of work appears exactly once. The **100% rule**: the WBS captures 100% of the work and no more. The lowest level is the **work package**, which has an owner, an estimate, and a deliverable.
- **Systems Engineering Management Plan (SEMP)** — the plan for the technical effort. Contents typically include: technical scope and objectives, the chosen life cycle model, which processes apply and how they are tailored, organisation and responsibilities, technical reviews and decision gates with entry/exit criteria, the approach to requirements, architecture, V&V, risk, configuration, interfaces, measurement, and specialty engineering, plus tools and the technical schedule. Sometimes called SEP or ISEMP depending on sector.
- **Schedule** — activities, durations, dependencies, and the **critical path** (the longest chain of dependent activities, which determines the minimum project duration). Related: **float/slack** (how long an activity can slip without delaying the project) and the **critical chain** approach (resource-constrained, with explicit buffers).
- **Estimates** — effort, cost, and resources.
- **Technical strategies** for each process area.

### Estimation techniques worth recognising

- **Analogy** — based on a similar past project, adjusted. Fast, needs relevant history.
- **Parametric** — statistical models driven by parameters (mass, lines of code, function points). Examples: COCOMO for software, various hardware cost models.
- **Engineering build-up ("bottom-up")** — estimate each work package and sum. Accurate when the WBS is mature; optimistic when it is not, because omitted work is estimated at zero.
- **Expert judgement** — including structured methods such as **Delphi** and **Wideband Delphi**, which use anonymous rounds to reduce anchoring and dominance effects.
- **Three-point estimation** — optimistic, most likely, pessimistic, combined (for example the PERT weighting) to reflect uncertainty.

> **On the job:** the most common estimation failure is not optimism about the tasks you listed. It is the tasks you did not list — integration, rework, documentation, reviews, travel, and waiting for other people. Bottom-up estimates of an incomplete WBS are systematically low.

---

## 2. Project Assessment and Control

**Purpose:** to determine the status of the project and direct execution to ensure performance is according to plans and schedules, within projected budgets, and satisfying technical objectives.

Plan versus actual, and doing something about the gap.

### Key mechanisms

- **Technical reviews and decision gates** — the formal checkpoints.
- **Technical Performance Measurement (TPM)** — tracking selected technical parameters against a planned profile over time. More on this under Measurement.
- **Earned Value Management (EVM)** — integrating scope, schedule, and cost into one status picture.
- **Variance analysis and corrective action** — identifying deviations, determining cause, deciding and tracking action.
- **Replanning** — when the plan is no longer achievable, changing the plan rather than pretending.

### Earned Value Management essentials

Three base quantities:

| Term | Modern name | Meaning |
| --- | --- | --- |
| **PV** (BCWS) | Planned Value | Budgeted cost of work **scheduled** — what you planned to have done by now |
| **EV** (BCWP) | Earned Value | Budgeted cost of work **performed** — the budgeted value of what you actually completed |
| **AC** (ACWP) | Actual Cost | Actual cost of work performed — what you actually spent |

Derived:

- **Schedule Variance** `SV = EV − PV`. Negative means behind schedule.
- **Cost Variance** `CV = EV − AC`. Negative means over budget.
- **Schedule Performance Index** `SPI = EV / PV`. Below 1.0 means behind.
- **Cost Performance Index** `CPI = EV / AC`. Below 1.0 means over budget.
- **Budget at Completion (BAC)** — the total planned budget.
- **Estimate at Completion** `EAC = BAC / CPI` (the common assumption that current cost efficiency persists).

> **On the exam:** know that negative variances and indices below 1.0 are bad, and be able to compute SPI and CPI. Also know the conceptual limitation: **schedule variance in EVM is expressed in cost units**, and it converges to zero at project completion regardless of lateness — which is why EVM schedule metrics must be read alongside a real schedule analysis.

---

## 3. Decision Management

**Purpose:** to provide a structured, analytical framework for identifying, characterising, and evaluating a set of alternatives for a decision at any point in the life cycle, and to select the most beneficial course of action.

### The process

1. **Identify the decision** — and determine that a formal decision analysis is warranted. Not every decision needs one; criteria for invoking formal analysis are usually based on cost, risk, irreversibility, and contention.
2. **Define the decision strategy** — who decides, who advises, what method, by when.
3. **Identify alternatives** — a genuine set, generated before evaluation.
4. **Define evaluation criteria and weights** — **before** evaluating.
5. **Evaluate** alternatives against criteria.
6. **Perform sensitivity analysis** on weights and scores.
7. **Select** and **record** the decision, the rationale, the assumptions, and the alternatives rejected.

### Why recording rationale is the whole point

Eighteen months later somebody will ask why. If the rationale is recorded with its assumptions, you can check whether the assumptions still hold and make a fast, sound decision. If it is not, the team re-argues the whole thing from scratch with worse information.

> **On the job:** keep a **decision log**. One row per significant technical decision: date, decision, alternatives considered, criteria, who decided, key assumptions, and where the analysis lives. It costs minutes and is the artefact that most reliably makes a project look and behave professionally.

Common biases to guard against: **anchoring** on the first option, **confirmation bias** in evidence gathering, **sunk cost** reasoning ("we've already spent so much on this approach"), **groupthink** where dissent is socially costly, and **HiPPO** decisions (highest paid person's opinion) dressed up as analysis.

---

## 4. Risk Management

**Purpose:** to identify, analyse, treat, and monitor risks continually.

### Definitions

- **Risk** — an uncertain future event or condition with a **negative** effect on objectives. Characterised by **likelihood** (probability) and **consequence** (impact/severity).
- **Opportunity** — an uncertain future event with a **beneficial** effect.
- **Issue** — a risk that has **occurred**. Its probability is 1. Issues are managed and resolved, not assessed for likelihood.

> **On the exam:** the risk/issue distinction is a reliable question. A problem that has already happened is an issue, not a risk.

### The process

1. **Plan risk management** — define the approach, the scales, the thresholds, the roles, the cadence.
2. **Identify risks** — brainstorming, checklists, lessons learned, assumption analysis, FMEA, hazard analysis, expert interviews, and reviewing the WBS and architecture for exposure.
3. **Analyse risks** — assess likelihood and consequence, qualitatively (usually a 5×5 matrix) or quantitatively (expected value, Monte Carlo, decision trees). Prioritise.
4. **Treat risks** — select and implement handling strategies.
5. **Monitor** — track status, watch trigger conditions, re-assess as the project evolves, close risks that are gone.

### Risk statement format

A good risk statement is a conditional:

> **If** [cause or condition], **then** [event] **resulting in** [consequence].

For example: *If the qualification of the new sensor slips past March, then integration testing cannot start on schedule, resulting in a delay to the delivery milestone of up to eight weeks.*

Compare with the useless version most risk registers contain: *"Sensor risk."*

### Handling strategies

| Strategy | Meaning | Example |
| --- | --- | --- |
| **Avoid** | Change the plan so the risk cannot occur | Choose a proven technology instead of the novel one |
| **Transfer / Share** | Move the risk to a party better able to bear it | Insurance, warranty, contract structure, a supplier with the expertise |
| **Mitigate / Control / Reduce** | Reduce likelihood or consequence | Build a prototype early; add redundancy; increase margin |
| **Accept** | Consciously take it, usually with a contingency and triggers | Low-consequence risks, with reserve set aside |

Some frameworks add **Research** as an interim strategy: invest in reducing uncertainty before choosing a permanent response. For **opportunities**, the mirrored strategies are exploit, enhance, share, and accept/ignore.

Memory hook for the core four: **ATMA** — Avoid, Transfer, Mitigate, Accept.

### The risk register

Each entry: unique ID, risk statement, category, likelihood, consequence, resulting rating, owner (**a named person, not a team**), handling strategy, specific actions with dates, trigger conditions, current status, and history.

### Concepts worth knowing

- **Risk exposure** — likelihood × consequence, giving an expected value for quantitative risks.
- **Risk appetite / tolerance** — how much risk the organisation will knowingly accept.
- **Residual risk** — what remains after treatment.
- **Secondary risk** — a new risk created by your treatment of another.
- **Contingency and management reserve** — budget or schedule held to cover realised risks. Contingency typically covers identified risks; management reserve covers unknown-unknowns.
- **Risk burndown** — a chart of planned versus actual risk reduction over time. Very effective in reviews.
- **Technical risk vs programmatic risk** — will it work, versus will it be delivered on time and budget.

> **On the job:** the failure mode is the register as a museum. Risks are entered at kick-off, never re-scored, and reviewed in a meeting where everyone reads the same slide. The remedy is brutal: every risk has a named owner, a next action with a date, and gets reviewed on a cadence where risks are actively closed and new ones added. A register whose contents never change is not being used.

---

## 5. Configuration Management

**Purpose:** to manage and control system elements and configurations over the life cycle, and to control changes and make configuration information available.

### The four functions

Learn these four as a list — it is a classic exam item.

1. **Configuration identification** — select the configuration items, define their structure, assign unique identifiers, establish baselines.
2. **Configuration change management (change control)** — control changes to baselined items through a defined process, typically a change control board that assesses impact and approves or rejects.
3. **Configuration status accounting** — record and report the current status of configuration items, approved changes, and their implementation status. Answers "what configuration is unit 47 in, right now?"
4. **Configuration verification and audit** — confirm that the product conforms to its configuration documentation. The **Functional Configuration Audit (FCA)** verifies the item meets its requirements; the **Physical Configuration Audit (PCA)** verifies the as-built matches the documentation.

### Baselines

| Baseline | Typically established at | Contains |
| --- | --- | --- |
| **Functional** | System Requirements Review | System-level functional and performance requirements |
| **Allocated** | Preliminary Design Review | Requirements allocated to system elements, with interfaces |
| **Product** | Critical Design Review, completed through realisation | Detailed design and as-built definition |

### Terms

- **Configuration item (CI)** — an entity designated for configuration management, treated as a single unit.
- **Change request / engineering change proposal** — the formal vehicle for a proposed change.
- **Deviation** — authorised departure from a requirement granted *before* production.
- **Waiver** — acceptance of an item that already departs from requirements, granted *after* production.
- **Version, revision, variant** — successive states, corrections, and alternative forms.
- **As-designed / as-built / as-maintained / as-deployed** configurations — these diverge over time, and keeping them reconciled is the real work of CM in service.

> **On the job:** the moment configuration management becomes real is the first time you must answer "which software version was on the unit that failed in the field, and what was different about it?" If the answer takes longer than an hour, your CM is not working.

---

## 6. Information Management

**Purpose:** to generate, obtain, confirm, transform, retain, retrieve, disseminate, and dispose of information to designated stakeholders.

Not the same as knowledge management (organisational) and not the same as configuration management, though they interlock.

Covers: identifying the information items to be managed, defining their form and content, assigning responsibility and access rights, maintaining them, controlling retention and archiving, and disposing of them at end of life (including secure destruction and legal retention obligations).

**Information items** include specifications, plans, models, drawings, test reports, meeting records, decision logs, and the system model itself. ISO/IEC/IEEE 15289 defines the content of typical life cycle information items.

> **On the exam:** Information Management is a **technical management** process; Knowledge Management is an **organizational project-enabling** process. This is one of the most frequently tested distinctions in the whole framework.

---

## 7. Measurement

**Purpose:** to collect, analyse, and report objective data and information to support effective management and demonstrate the quality of products, services, and processes.

Aligned with ISO/IEC/IEEE 15939, the core discipline is that measurement starts from an **information need** — a question someone needs answered to make a decision — and works down to what to collect. Measuring what is easy to collect and hoping it is useful is the standard anti-pattern.

### The measurement model

```
Information need  →  Measurable concept  →  Base measures  →  Derived measures  →  Indicator  →  Decision
```

- **Base measure** — a single attribute measured directly (defects found, hours expended, mass in kilograms).
- **Derived measure** — a function of two or more base measures (defect density, cost per unit, percentage of requirements verified).
- **Indicator** — an estimate or evaluation that provides a basis for decision-making, usually with a target or threshold (defect density against the historical baseline, trended over time).

### Measures systems engineers actually track

- **Requirements:** total count, growth rate, volatility, percentage approved, percentage traced, percentage verified, TBD count and its trend.
- **Technical Performance Measures (TPMs):** selected key parameters tracked against a planned profile with tolerance bands, so that a trend toward breaching a threshold is visible early.
- **Margins:** mass, power, thermal, timing, memory, bandwidth — planned versus consumed.
- **Interfaces:** defined, agreed, verified.
- **Verification:** requirements verified, tests passed/failed, closure rate against plan.
- **Defects:** found, fixed, open, escape rate, discovery rate by phase.
- **Risk:** count by severity, burndown against plan.
- **Reviews:** action items raised and closed.
- **Effort and cost:** EVM indices, systems engineering effort as a fraction of total.
- **Maturity:** technology readiness levels for critical technologies.

### Technical Performance Measurement in detail

A TPM has: a parameter, a current estimated or measured value, a planned profile over time, a tolerance band, a **threshold** (the minimum acceptable) and often an **objective** (the desired). Tracking the trend lets you act while action is still cheap. A mass estimate that has grown every month for six months will not stop growing because the schedule says it must.

### Good measurement practice

- Few measures, actually used. A dashboard of forty indicators is a dashboard nobody reads.
- Every measure traces to an information need and a decision.
- Define collection and calculation precisely so numbers are comparable over time.
- Trend over time; single points are nearly meaningless.
- **Do not use measures to evaluate individuals.** The instant you do, the data becomes fiction. This is the fastest way to destroy a measurement programme.

---

## 8. Quality Assurance

**Purpose:** to help ensure the effective application of the organisation's Quality Management process to the project.

Quality Assurance is project-level and process-focused. It asks: are we following the processes we said we would, and are the products meeting their requirements?

### Activities

- Plan and perform **process evaluations and product evaluations** against defined criteria.
- **Audit** — internal and supplier audits.
- Manage **non-conformances** and corrective actions to closure.
- Provide **independent reporting** to management — QA must be able to report bad news without being filtered by the project it is assessing.
- Maintain **quality records** as evidence.

### Concepts

- **Quality Assurance vs Quality Control.** QA is process-oriented and preventive — building confidence that quality will result. QC is product-oriented and detective — inspecting and testing actual outputs. Both are needed.
- **Prevention over detection.** Finding defects is good; not creating them is better and cheaper.
- **Cost of quality** — prevention and appraisal costs versus internal and external failure costs. External failure is by far the most expensive category.
- **Independence.** QA effectiveness depends on organisational independence from the project being assured.

> **On the exam:** Quality Assurance is a **technical management** process applied to the project; **Quality Management** is an **organizational project-enabling** process that establishes the quality system the project operates within.

---

## How these eight hang together

A realistic week:

- **Measurement** produces the numbers.
- **Project Assessment and Control** reads them against the plan from **Project Planning** and calls for corrective action.
- A corrective action requires choosing between options, which invokes **Decision Management**.
- The chosen option changes a baselined design, which invokes **Configuration Management**.
- The change creates a new uncertainty, which enters **Risk Management**.
- All of the resulting documents, models, and records are handled by **Information Management**.
- **Quality Assurance** periodically checks that all of the above actually happened the way the plan said it would.

They are one interlocking system, not eight separate chores.

## Key takeaways

- The eight technical management processes are Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement, and Quality Assurance.
- The WBS follows the 100% rule; the SEMP is the plan for the technical effort and is the systems engineer's core planning artefact.
- EVM: SV = EV − PV, CV = EV − AC, SPI = EV/PV, CPI = EV/AC, EAC = BAC/CPI; below 1.0 is bad.
- Decision Management requires criteria and weights defined before evaluation, sensitivity analysis, and recorded rationale.
- Risk = future and negative; opportunity = future and positive; issue = already happened. Handling: Avoid, Transfer, Mitigate, Accept.
- Configuration Management has four functions: identification, change management, status accounting, and verification/audit — with functional, allocated, and product baselines.
- Measurement begins with an information need and flows through base and derived measures to indicators; TPMs track key parameters against a planned profile.
- Information Management is technical management; Knowledge Management is organisational. Quality Assurance is technical management; Quality Management is organisational.

## Check yourself

1. Write a properly formed risk statement for a real risk on your current project.
2. Your project reports EV = 800k, PV = 1000k, AC = 900k. Compute SV, CV, SPI, CPI, and say what is happening.
3. Name the four functions of configuration management and give an example question each one answers.
4. What is the difference between a deviation and a waiver?
5. Which baseline is established at PDR and what does it contain?
6. Why should measurement data never be used to evaluate individuals?
7. Distinguish Quality Assurance from Quality Control, and both from Quality Management.
