---
title: "MBSE, SysML, and Digital Engineering"
part: "Part V — Methods and Specialties"
order: 16
minutes: 16
summary: "Model-based systems engineering: what it actually is, SysML and its diagrams, methodologies, digital threads and twins, and how to adopt it without failing."
---

## Why this chapter is growing in importance

Model-based systems engineering is the central theme of the INCOSE *Systems Engineering Vision*, and the 5th edition of the Handbook gives it and digital engineering substantially more weight than earlier editions. Whatever the current exam edition, **expect MBSE content, and expect it to increase.**

It also matters for your career. The transition from documents to models is the largest methodological shift the discipline has undergone, and engineers who are fluent in it are in demand.

## What MBSE is

> MBSE is the formalised application of modelling to support system requirements, design, analysis, verification, and validation activities, beginning in the conceptual design phase and continuing throughout development and later life cycle phases.

The essential shift: **the authoritative description of the system is a model, not a set of documents.** Documents become *views generated from* the model rather than the source of truth.

### Document-based versus model-based

| | Document-based | Model-based |
| --- | --- | --- |
| Source of truth | Many documents | One integrated model |
| Consistency | Manual, and always drifting | Enforced by the model; a change propagates |
| Traceability | Matrices maintained by hand | Relationships are first-class model elements |
| Change impact | Search and hope | Query the model |
| Reviews | Read the document | Navigate and query the model; generate views |
| Analysis | Re-enter data into analysis tools | Model connects to analysis |
| Ambiguity | Natural language | Formal notation with defined semantics |

### Why organisations adopt it

- **Consistency.** In a document world, the interface appears in four documents and three of them are out of date. In a model, it exists once.
- **Impact analysis.** "What breaks if we change this?" becomes a query rather than an investigation.
- **Early analysis.** Executable behaviour models let you find logic errors in the concept stage.
- **Communication.** A navigable model with generated views serves different stakeholders better than one enormous document serves all of them badly.
- **Reuse.** Model libraries, reference architectures, and patterns can be genuinely reused.
- **Continuity.** The model persists into operations and sustainment.

### The honest caveats

- MBSE has a **real learning curve**, both in tooling and in modelling discipline.
- **Tooling is expensive** and the ecosystem is still maturing.
- It is easy to produce **beautiful models nobody uses** — the modern equivalent of shelfware.
- **A model is not automatically correct.** Formal notation removes ambiguity; it does not remove being wrong.
- Migration from an existing document-based programme is genuinely hard, and partial adoption can leave you maintaining both.

> **On the job:** the reliable predictor of MBSE success is whether the model **answers questions somebody actually asks**. If the programme manager gets their status from the model, if the interface working group uses the model as the interface definition, if the test team derives cases from it — it will live. If it is maintained in parallel with the documents that people actually use, it will die, and it will be blamed on the tool.

## SysML

**SysML** (Systems Modeling Language) is a general-purpose graphical modelling language for systems engineering, defined by the Object Management Group. SysML v1 is a profile of UML — a subset of UML plus systems-specific extensions.

### The nine SysML v1 diagrams

Learn these by category; it is a common exam item.

**Structure (4)**
| Diagram | Purpose |
| --- | --- |
| **Block Definition Diagram (BDD)** | Defines blocks (system elements), their properties, operations, and relationships such as composition, generalisation, and association |
| **Internal Block Diagram (IBD)** | Shows the internal structure of a block: its parts, ports, and connectors — how elements are wired together |
| **Package Diagram** | Organises the model into packages and shows dependencies between them |
| **Parametric Diagram** | Binds constraint blocks (equations) to value properties, enabling analysis and trade-offs within the model |

**Behaviour (4)**
| Diagram | Purpose |
| --- | --- |
| **Activity Diagram** | Flow of actions, including control and object flow — good for functional flow |
| **Sequence Diagram** | Time-ordered interactions between parts, showing messages |
| **State Machine Diagram** | States, transitions, events, and guards — the system's modal behaviour |
| **Use Case Diagram** | Actors and the capabilities the system provides them, at a high level |

**Requirements (1)**
| Diagram | Purpose |
| --- | --- |
| **Requirement Diagram** | Requirements as model elements, with relationships: *satisfy*, *verify*, *derive*, *refine*, *trace*, *copy* |

Memory aid: **four structure, four behaviour, one requirement.** SysML's distinctive additions over UML are the **requirement diagram** and the **parametric diagram** — those two are what make it a *systems* language.

### The key SysML relationships

- **Satisfy** — a design element satisfies a requirement
- **Verify** — a test case verifies a requirement
- **Derive** — a requirement is derived from another
- **Refine** — an element clarifies a requirement
- **Allocate** — a behaviour, function, or requirement is allocated to a structural element
- **Trace** — a general dependency

These relationships are how traceability becomes a first-class, queryable property of the model rather than a spreadsheet.

### SysML v2

A ground-up redesign rather than a revision, notable for:

- A **new metamodel (KerML)** rather than being a UML profile
- Both **textual and graphical notations** — models can be written as text, which makes them diffable and version-controllable like source code
- A **standard API** for tool interoperability, addressing the long-standing problem that models were locked inside one vendor's tool
- More precise semantics, better support for variability, analysis, and verification

The textual notation and standard API matter practically: they make models fit into modern engineering workflows with version control, code review, and automation.

## MBSE methodologies

A language is not a method. SysML tells you how to draw; a methodology tells you what to do and in what order. Recognise these names:

| Methodology | Origin / character |
| --- | --- |
| **OOSEM** (Object-Oriented Systems Engineering Method) | INCOSE-associated; top-down, scenario-driven, integrates with object-oriented development |
| **Harmony-SE** | IBM; requirements analysis → functional analysis → design synthesis, with executable models |
| **Vitech / STRATA** | Vitech; four concurrent domains (requirements, behaviour, architecture, verification) applied by layers of abstraction |
| **ARCADIA / Capella** | Thales; open-source tooling, strong operational-to-physical layered analysis |
| **MagicGrid** | Dassault/No Magic; a grid of pillars (requirements, behaviour, structure, parametrics) against layers (problem, solution, implementation) |
| **RUP-SE** | Rational Unified Process adapted for systems |

You are unlikely to be asked deep questions about any single one, but recognising them as *methodologies* rather than languages or tools is examinable.

## Digital engineering

MBSE is one part of a broader movement.

> Digital engineering: an integrated digital approach that uses authoritative sources of system data and models as a continuum across disciplines to support life cycle activities from concept through disposal.

Key concepts:

- **Authoritative Source of Truth (ASoT)** — one governed, trusted source for each piece of system data, rather than many copies diverging quietly.
- **Digital thread** — the connected flow of data and models across the life cycle and across disciplines: requirements to design to manufacture to test to operations, all linked.
- **Digital twin** — a virtual representation of a **specific physical instance**, kept synchronised with it through operational data. Note the distinction: a *model* represents a design; a *twin* represents a particular serial-numbered thing in service, and updates as it ages, is repaired, and is modified.
- **Model curation and governance** — who owns the model, who may change it, how quality is assured, how versions are controlled. This is configuration management applied to models, and it is where digital engineering initiatives most often fail.
- **Simulation-based design and virtual verification** — replacing or supplementing physical test with credible simulation, which requires model verification, validation, and accreditation.
- **Interoperability standards** — STEP for product data, ReqIF for requirement exchange, FMI/FMU for co-simulation, OSLC for linked lifecycle data, and the SysML v2 API.

## Model verification, validation, and credibility

Before a decision rests on a model, three questions:

1. **Verification** — is the model built correctly? Does it implement the intended equations and logic without error?
2. **Validation** — does the model represent reality well enough **for this purpose**? Validated against what data, over what range?
3. **Credibility / accreditation** — is the model's fidelity, pedigree, and uncertainty documented and accepted by the authority relying on it?

A model's **domain of applicability** must be stated. The most dangerous model is an accurate one used slightly outside the range it was validated over, because it will produce plausible, confidently wrong numbers.

## Adopting MBSE without failing

If you find yourself leading or joining an adoption effort:

1. **Start with a real question.** "We keep getting interface mismatches" is a better starting point than "we should do MBSE."
2. **Pick one pilot** — a subsystem, or one aspect such as interfaces or behaviour — rather than modelling everything.
3. **Define the modelling purpose and scope explicitly.** What questions must this model answer? What is deliberately out of scope?
4. **Agree conventions early** — naming, decomposition levels, stereotype usage, what goes where. Without them a team model becomes unnavigable within weeks.
5. **Generate the artefacts people already need** from the model, so the model is on the critical path rather than beside it.
6. **Train properly.** Half-trained modellers produce models that cost more than they save.
7. **Govern the model** like a controlled configuration item, because that is what it is.
8. **Measure the benefit** in terms someone will care about: fewer interface defects, faster impact analysis, shorter review cycles.

## Key takeaways

- MBSE replaces the document as the authoritative system description with an integrated model from which views are generated.
- Its benefits are consistency, queryable traceability, early analysis, communication, and reuse; its risks are learning curve, tooling cost, and models nobody uses.
- SysML v1 has nine diagrams: four structural (BDD, IBD, package, parametric), four behavioural (activity, sequence, state machine, use case), and one requirement diagram. The requirement and parametric diagrams are SysML's distinctive additions to UML.
- SysML v2 introduces a new metamodel, textual as well as graphical notation, and a standard API for interoperability.
- Recognise MBSE methodologies — OOSEM, Harmony-SE, Vitech/STRATA, ARCADIA, MagicGrid — as distinct from the language and the tool.
- Digital engineering adds the authoritative source of truth, digital thread, and digital twin; a digital twin tracks a specific physical instance, not a design.
- Models require verification, validation, and a stated domain of applicability before decisions rest on them.

## Check yourself

1. State the difference between a model, a digital thread, and a digital twin.
2. Name the four SysML structural diagrams and the four behavioural ones.
3. Which two SysML diagram types are the distinctive systems engineering additions relative to UML, and why do they matter?
4. What is the difference between verifying a model and validating it?
5. Give three reasons an MBSE adoption fails, and the countermeasure for each.
