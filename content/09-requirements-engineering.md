---
title: "Requirements Engineering in Depth"
part: "Part III — Technical Processes"
order: 9
minutes: 19
summary: "What makes a requirement good, the ISO 29148 and INCOSE characteristics, writing patterns, traceability, attributes, requirements management, and the pitfalls that sink projects."
---

## Why this gets its own chapter

Requirements are where systems engineering meets the rest of the organisation, and where most of the damage is done. Industry studies of project failure consistently put requirements problems — incomplete, ambiguous, changing, or misunderstood requirements — at or near the top of root causes.

It is also the skill most likely to be your first real systems engineering responsibility, and the one that most improves with deliberate practice. Writing a good requirement is a craft. It is learnable in an afternoon and mastered over years.

## What a requirement is

> A requirement is a statement that translates or expresses a need and its associated constraints and conditions, expressed in a form that can be verified.

Two words carry the weight: **need** (it must trace to something someone actually requires) and **verified** (you must be able to prove objectively whether the delivered system satisfies it).

If you cannot say how you would prove it, it is not a requirement yet.

## The characteristics of a good requirement

ISO/IEC/IEEE 29148 and the INCOSE *Guide to Writing Requirements* define characteristics for individual requirements and for the requirement set. Learn both lists — they are directly examinable and immediately useful.

### For an individual requirement

| Characteristic | Meaning | Failure example |
| --- | --- | --- |
| **Necessary** | Removing it would leave a deficiency; it defines an essential capability, characteristic, or constraint | "The interface shall be modern." Remove it — nothing is lost. |
| **Appropriate** | Stated at the right level of abstraction for the entity it applies to, without over-constraining | A system-level requirement dictating a component's resistor value |
| **Unambiguous** | Exactly one interpretation | "The system shall respond quickly." Quickly to whom? |
| **Complete** | Needs no further amplification; contains all necessary conditions | "The system shall record temperature." Under what conditions? At what rate? |
| **Singular** | States one and only one capability or constraint | "The system shall log events **and** alert the operator." Two requirements. |
| **Feasible** | Achievable within constraints of cost, schedule, technology, law, and physics | "The system shall have 100% availability." |
| **Verifiable** | Can be proven by inspection, analysis, demonstration, or test | "The system shall be user-friendly." |
| **Correct** | Accurately represents the need it came from | Faithfully mistranscribed from a workshop |
| **Conforming** | Follows the organisation's approved template, style, and terminology | Free-form prose in a structured specification set |

Memory hook: **N-A-U-C-S-F-V-C-C** — or remember the practical filter: *one thing, clear, needed, doable, provable, traceable, in the house style*.

### For the requirement set

| Characteristic | Meaning |
| --- | --- |
| **Complete** | The set covers everything needed; there are no gaps and no TBDs at baseline |
| **Consistent** | No requirement contradicts another; terminology is uniform |
| **Feasible** | The set as a whole can be achieved — individually feasible requirements can be collectively impossible |
| **Comprehensible** | The set is understandable by its intended readers |
| **Able to be validated** | It can be confirmed that the set correctly reflects the stakeholder needs |
| **Correct** | The set accurately represents the needs |

> **On the exam:** the trap here is *feasible* at set level. Every requirement can be individually achievable while the combination — lightest, cheapest, fastest, most reliable, by Tuesday — is not. Set-level feasibility is a separate check.

## How to write one

### The basic pattern

```
[Condition] the [Subject] shall [Action] [Object] [Performance] [Constraint].
```

Worked up from bad to good:

> **Bad:** The system should be able to handle a decent number of users quickly.

- "should" is not binding
- "be able to handle" is vague
- "decent number" is unmeasurable
- "quickly" is unmeasurable
- no conditions

> **Better:** The system shall support 500 concurrent users.

- Now singular, binding, and measurable — but incomplete. Supporting them doing what? With what response?

> **Good:** When operating in nominal mode, the Booking System shall complete a seat-reservation transaction within 2 seconds for up to 500 concurrent users, measured at the 95th percentile.

Conditions, subject, action, object, performance, and the measurement basis are all present. You could write the test case straight from it.

### The modal verbs, and they are not interchangeable

| Verb | Meaning | Use |
| --- | --- | --- |
| **shall** | Binding requirement | Requirements. Only requirements. |
| **should** | Goal, preference, non-binding | Objectives, recommendations |
| **will** | Statement of fact or intent, often about something outside the system | "The operator will be trained." |
| **may** | Permission, optional | Allowed but not required |
| **must** | Avoid — ambiguous in many organisations, sometimes reserved for external constraints | Use per house style only |

> **On the job:** "shall" being reserved for binding requirements is near-universal, and reviewers *will* count your shalls. A specification with "should" scattered through it creates contractual ambiguity. Fix it at review time, not at acceptance time.

### Words that should trigger alarm

Ban these from requirement text unless you immediately quantify them:

**Vague:** adequate, appropriate, efficient, flexible, modern, quickly, reliable, robust, seamless, state-of-the-art, sufficient, user-friendly, easy, minimal, maximum where undefined

**Escape hatches:** as appropriate, as required, if practical, to the extent possible, where necessary, etc., and so on, including but not limited to

**Ambiguous conjunctions:** and/or, and where it joins two capabilities (split them), or where it leaves a choice undefined

**Unbounded comparatives:** better, faster, improved, optimal, maximised, minimised

**Ambiguous pronouns:** it, they, this — always name the entity

> **On the job:** run a search for that list before every requirements review. It takes ten minutes and catches a shocking proportion of defects. Many requirements tools will do it automatically.

### Negative requirements

"The system shall not…" is hard to verify — proving a negative requires exhaustive testing. Prefer to state the positive constraint. Where a negative is genuinely the right expression (safety and security often demand it), pair it with a defined fault condition, a verification approach, and an acceptance criterion.

## Requirement attributes

A requirement is not just its text. Each requirement carries **attributes** — metadata that makes the set manageable. The essential set:

| Attribute | Why it exists |
| --- | --- |
| **Unique identifier** | Never reused, never renumbered. Traceability depends on stability. |
| **Rationale** | *Why* this requirement exists. The single most valuable attribute and the most often omitted. |
| **Source / owner** | Who needs it, who can change it |
| **Verification method** | Inspection, analysis, demonstration, or test — decided when written |
| **Verification level** | Component, subsystem, system, operational |
| **Priority** | Essential, important, desirable — drives descoping decisions |
| **Status** | Proposed, approved, implemented, verified |
| **Risk / criticality** | Safety, security, or mission criticality classification |
| **Trace links** | Up to parent needs, down to children, across to design and tests |
| **Version / change history** | What changed, when, and why |

> **On the job:** **rationale is the attribute that saves you in year three**, when someone asks why the response time is 2 seconds and not 5, and the only person who knew has left. A one-sentence rationale written at the time costs thirty seconds and is worth days later. Make it mandatory in your template.

## Traceability

**Bidirectional traceability** means every requirement can be traced both upward to its source and downward to what implements and verifies it.

The chain:

```
Business/mission need
      ↓
Stakeholder requirement
      ↓
System requirement
      ↓
Subsystem / element requirement
      ↓
Design element
      ↓
Verification (test case, analysis, inspection)
      ↓
Verification result / evidence
```

What traceability buys you:

- **Impact analysis.** A stakeholder changes their mind: which requirements, designs, and tests are affected? Without traces, this is archaeology.
- **Coverage.** Is every stakeholder requirement satisfied by at least one system requirement? Is every system requirement verified by at least one verification activity?
- **Orphan detection.** A requirement with no parent is either gold-plating or an undocumented need. Both need resolving.
- **Certification evidence.** In regulated domains, traceability *is* a deliverable.
- **Descoping.** When the budget is cut, traceability tells you what capability you actually lose.

> **On the job:** the pathology to avoid is the traceability matrix maintained for audit and consulted by nobody. The test of a live trace is whether anyone has run an impact analysis with it this quarter. If not, you are paying the cost and getting none of the benefit.

## Requirements management

Requirements change. Managing that change is a permanent activity, not a phase.

**Baselining.** At a defined point, the requirement set is approved and placed under configuration control. After that, changes go through a change process — assessed for impact on cost, schedule, technical performance, risk, and other requirements, then approved or rejected by an authorised body.

**Change control.** Every change request should answer: what changes, why, what is the impact on cost/schedule/other requirements/verification, and who approves. Uncontrolled change is **requirements creep** — the slow accretion of unbudgeted scope that arrives one reasonable-sounding email at a time.

**Volatility measurement.** Track the rate of requirement change. A high and *not decreasing* rate late in development is one of the most reliable leading indicators of programme trouble.

**Tooling.** Small projects can manage in a structured spreadsheet with unique IDs and trace columns — and doing it that way once teaches you what the tools are for. Larger projects use dedicated requirements management tools (DOORS/DOORS Next, Jama, Polarion, codebeamer, Cameo/Teamwork Cloud with SysML, Innoslate, ReqIF for exchange). The tool is not the discipline; a bad process in an expensive tool is still a bad process.

## Requirements verification and validation

Two distinct checks on the requirements themselves — and note this is about the *requirements*, not the system:

- **Requirements verification** — are they well-formed? Do they satisfy the characteristics: unambiguous, singular, verifiable, conforming? This is a quality check on the writing.
- **Requirements validation** — are they the *right* requirements? Do they correctly and completely reflect stakeholder needs? This is a correctness check with the stakeholders.

Techniques: peer review and inspection, checklists against the characteristics, prototypes and mock-ups, modelling and simulation, stakeholder walkthroughs of operational scenarios, and formal requirement analysis in tools.

## Special topics worth knowing

### Derived requirements

Requirements that arise from design decisions rather than directly from stakeholder needs. Choosing a hydraulic actuator derives a requirement for hydraulic pressure supply. Derived requirements are legitimate and necessary — but they must be recorded, traced to the decision that produced them, and reviewed, because they carry cost that nobody asked for.

### Allocation and flow-down

**Allocation** assigns a requirement to a system element. **Flow-down** (or derivation) transforms a parent requirement into child requirements at the next level. A 3 kg system mass budget is *allocated* across elements: 1.2 kg housing, 0.8 kg electronics, 1.0 kg battery. Now each element team has a requirement they own, and the systems engineer owns the budget and its margin.

**Budgets and margins** — mass, power, thermal, timing, bandwidth, accuracy, cost — are among the most practically useful systems engineering artefacts. Hold explicit margin at system level; release it deliberately; never let it be consumed silently.

### TBD and TBR

**TBD** (To Be Determined) and **TBR** (To Be Reviewed/Resolved) are honest placeholders. Rules for using them safely: every TBD has an owner and a resolution date; TBDs are tracked as a visible count; and **a baseline should not be declared with open safety- or interface-critical TBDs**. A TBD count that is not falling is a schedule risk wearing a disguise.

### Requirements for the things that are not the system

Remember to write requirements for enabling systems too — test equipment, training, packaging, and documentation. These are commonly forgotten and then procured in a panic.

## The pitfalls, collected

| Pitfall | Why it hurts | Defence |
| --- | --- | --- |
| Design in requirements | Closes the solution space too early | State what and why; record genuine mandates as constraints |
| Compound requirements | Partially verifiable; ambiguous status | One requirement, one capability. Split on "and". |
| Unverifiable adjectives | Argument at acceptance | Ban the vague-words list; quantify |
| Missing rationale | Cannot evaluate change requests later | Make rationale a mandatory field |
| No priority | Cannot descope rationally under pressure | Classify essential / important / desirable up front |
| Requirements creep | Budget and schedule erosion | Baseline, change control, impact assessment |
| Traceability as an audit artefact | All cost, no benefit | Use it for real impact analysis regularly |
| Copy-paste from a previous programme | Inherits requirements for a different system | Review every reused requirement against *this* need |
| Over-specification | Buys unnecessary cost | Ask "what happens if this is not met?" for every requirement |
| Requirements written by one person alone | Misses stakeholder viewpoints; no buy-in | Review with users, testers, and implementers |

> **On the job:** the single best requirements-review question is *"how would you verify this?"* Asked of every requirement, it exposes vagueness, compounds, infeasibility, and missing conditions in one move. The second best is *"what happens if we don't do this?"* — which finds the unnecessary ones.

## Key takeaways

- A requirement translates a need into a verifiable statement; if you cannot state how to prove it, it is not yet a requirement.
- Individual requirement characteristics: necessary, appropriate, unambiguous, complete, singular, feasible, verifiable, correct, conforming. Set characteristics: complete, consistent, feasible, comprehensible, able to be validated, correct.
- Use the condition–subject–action–object–performance pattern, reserve "shall" for binding requirements, and eliminate vague words and escape hatches.
- Attributes matter as much as text; rationale, verification method, priority, and stable unique IDs are non-negotiable.
- Bidirectional traceability enables impact analysis, coverage checking, orphan detection, and certification evidence — and is only worth its cost if actually used.
- Baseline, control change, and watch requirement volatility as a leading indicator of trouble.
- Derived requirements, allocation, budgets with explicit margin, and disciplined TBD management are everyday systems engineering practice.

## Check yourself

1. List the nine characteristics of an individual requirement.
2. Why can a set of individually feasible requirements be infeasible as a set?
3. Rewrite: "The system shall be highly available and shall notify users of outages promptly."
4. What is a derived requirement, and why must it be traced to a decision?
5. Which requirement attribute most often saves a project years later, and why?
6. What does a flat or rising requirement volatility curve late in development tell you?
