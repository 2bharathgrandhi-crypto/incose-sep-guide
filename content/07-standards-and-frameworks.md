---
title: "The Standards Landscape and the 30 Processes"
part: "Part II — Foundations"
order: 7
minutes: 14
summary: "ISO/IEC/IEEE 15288 and its four process groups, the companion standards you must recognise, and the complete 30-process map that structures the rest of this guide."
---

## The one standard that matters most

**ISO/IEC/IEEE 15288, *Systems and software engineering — System life cycle processes***, is the backbone of modern systems engineering and of the INCOSE Handbook. The Handbook is, in large part, an explanatory companion to this standard: it takes each process and explains purpose, inputs, activities, and outputs in practical terms.

Its history in brief: first published in 2002, significantly revised in 2008, revised again in **2015** (the edition behind Handbook 4th edition, which established the 30-process structure), and revised again in **2023**.

What the standard actually does: it defines a **common process framework and vocabulary** for the life cycle of systems. It does not tell you how to design a bridge. It tells you that there exists a process called Architecture Definition, what its purpose is, and what it should produce — so that two organisations on opposite sides of the world can contract with each other and mean the same thing.

**The standard is descriptive of good practice and is meant to be tailored.** It is not a compliance checklist and it explicitly says so.

## The four process groups

This is the structural map of the entire discipline. Learn it as a picture.

```
                    ORGANIZATIONAL PROJECT-ENABLING (6)
         Life Cycle Model Mgmt · Infrastructure Mgmt · Portfolio Mgmt
         Human Resource Mgmt · Quality Mgmt · Knowledge Mgmt
                                    |
                            provides to projects
                                    |
   AGREEMENT (2)  ---->   +------------------------------------+
   Acquisition            |   TECHNICAL MANAGEMENT (8)         |
   Supply                 |   Project Planning                 |
                          |   Project Assessment and Control   |
                          |   Decision Management              |
                          |   Risk Management                  |
                          |   Configuration Management         |
                          |   Information Management           |
                          |   Measurement                      |
                          |   Quality Assurance                |
                          +------------------------------------+
                                    |
                              directs and controls
                                    |
                          +------------------------------------+
                          |   TECHNICAL (14)                   |
                          |   Business or Mission Analysis     |
                          |   Stakeholder Needs and Reqts Def. |
                          |   System Requirements Definition   |
                          |   Architecture Definition          |
                          |   Design Definition                |
                          |   System Analysis                  |
                          |   Implementation                   |
                          |   Integration                      |
                          |   Verification                     |
                          |   Transition                       |
                          |   Validation                       |
                          |   Operation                        |
                          |   Maintenance                      |
                          |   Disposal                         |
                          +------------------------------------+
```

**2 + 6 + 8 + 14 = 30.** If you remember nothing else structural, remember those four numbers and which group each belongs to.

### What each group is for, in one line

- **Agreement Processes (2)** — establish agreements between organisations. Two sides of one coin: Acquisition and Supply.
- **Organizational Project-Enabling Processes (6)** — the **organisation** provides the environment, resources, and governance that projects need. These operate above the project.
- **Technical Management Processes (8)** — **manage the technical effort** on a project: plan it, control it, decide, handle risk, control configuration, manage information, measure, and assure quality.
- **Technical Processes (14)** — **do the engineering**: understand the problem, define the solution, build it, prove it, operate it, retire it.

### The distinctions that get examined

Three pairs sit across group boundaries and are tested constantly:

1. **Quality Management (organisational) vs Quality Assurance (technical management).** Quality Management establishes the organisation's quality system and policy. Quality Assurance applies it on a project to assure products and processes meet requirements.
2. **Knowledge Management (organisational) vs Information Management (technical management).** Knowledge Management captures and reuses organisational knowledge and skills across projects. Information Management handles the project's information items — creating, storing, distributing, and maintaining designated information.
3. **Portfolio Management (organisational) vs Project Planning (technical management).** Portfolio Management decides which projects exist and get funded. Project Planning plans the technical effort within one of them.

A fourth worth adding: **Life Cycle Model Management (organisational)** defines and maintains the organisation's *set* of life cycle models and processes; the project then *tailors and selects* from them.

## The companion standards

You do not need to read these, but you must recognise what each one is for. They appear in exam questions as "which standard addresses…".

| Standard | Subject | Why you care |
| --- | --- | --- |
| **ISO/IEC/IEEE 15288** | System life cycle processes | The backbone — 30 processes, 4 groups |
| **ISO/IEC/IEEE 12207** | Software life cycle processes | The software sibling of 15288; harmonised with it |
| **ISO/IEC/IEEE 24748** | Life cycle management (multi-part) | Guidance on life cycles and stages; part 4 covers systems engineering planning (the SEMP) |
| **ISO/IEC/IEEE 29148** | Requirements engineering | The authoritative source for requirement characteristics and requirement document contents |
| **ISO/IEC/IEEE 42010** | Architecture description | Stakeholders, concerns, viewpoints, views, models, correspondences |
| **ISO/IEC/IEEE 15939** | Measurement process | The information-need-driven measurement model |
| **ISO/IEC/IEEE 16085** | Risk management (systems and software) | Risk process detail |
| **ISO/IEC/IEEE 15289** | Content of life cycle information items | What goes in which document |
| **ISO 9001** | Quality management systems | The organisational quality baseline |
| **ISO 31000** | Risk management guidelines | Generic risk framework |
| **ISO/IEC/IEEE 21839 / 21840 / 21841** | System of systems | SoS considerations, applying 15288 to SoS, SoS taxonomy |
| **ANSI/EIA-649** | Configuration management | The CM principles reference |
| **ISO/IEC/IEEE 15026** | Systems and software assurance | Assurance cases |
| **NIST SP 800-160** | Systems security engineering | Security engineering integrated into the life cycle |
| **IEC 61508** | Functional safety | Safety integrity levels for E/E/PE systems |
| **MIL-STD-882** | System safety | Hazard severity/probability and the system safety process |
| **CMMI** | Capability maturity model integration | Process maturity appraisal, includes systems engineering practices |
| **EIA-632 / IEEE 1220** | Earlier systems engineering process standards | Historical predecessors; largely superseded by 15288 |

> **On the exam:** the ones that recur most are 15288 (processes), 29148 (requirements), 42010 (architecture description), 15939 (measurement), and 24748 (life cycle / planning). Learn that shortlist first.

## Other bodies of knowledge and references

- **SEBoK** — the Guide to the Systems Engineering Body of Knowledge. Free, online, community-maintained, jointly stewarded by INCOSE, the IEEE Systems Council, and the Stevens Institute. Excellent for depth on any topic in this guide, and free is a good price.
- **INCOSE Guide to Writing Requirements (GtWR)** — the practical companion for requirement characteristics and writing rules. Enormously useful at work.
- **INCOSE Needs and Requirements Manual (NRM)** — a fuller treatment of the needs-to-requirements transformation.
- **INCOSE Systems Engineering Vision** — a forward-looking statement of where the discipline is heading, notably the **Vision 2035** themes: model-based and digital engineering as the norm, systems engineering applied to social and environmental challenges, greater automation and AI support, and a broadened scope beyond traditional defence and aerospace.
- **Domain handbooks** — NASA's Systems Engineering Handbook (NASA/SP-6105) and the equivalent defence, rail, medical device, and automotive guidance. These are where you go for domain-specific depth once you know the general frame.

## How the standard is meant to be used

Four ideas the standard is explicit about, all examinable:

1. **Tailoring is expected.** Organisations and projects select, adapt, and scale the processes. Applying all 30 at full rigour to a two-person project would be malpractice.
2. **Processes are applied iteratively, recursively, and concurrently** — not once, not in sequence, and not level by level.
3. **The standard defines purpose, outcomes, and activities**, not methods or tools. How you do architecture definition — with documents, with SysML, with a whiteboard — is your choice.
4. **The processes apply to any system** — hardware, software, services, enterprises, and combinations, in any domain and at any scale.

## The 30 processes: purpose in one line each

Use this as your revision sheet. Each is expanded in the chapters that follow.

### Agreement (2)
1. **Acquisition** — obtain a product or service that meets the acquirer's needs.
2. **Supply** — provide a product or service that meets the acquirer's agreed requirements.

### Organizational Project-Enabling (6)
3. **Life Cycle Model Management** — define, maintain, and assure availability of policies, processes, and models for the organisation's projects.
4. **Infrastructure Management** — provide the facilities, tools, and services projects need.
5. **Portfolio Management** — initiate, sustain, redirect, or terminate projects to meet the organisation's strategy.
6. **Human Resource Management** — provide the organisation with people who have the needed skills.
7. **Quality Management** — assure products, services, and processes meet organisational quality objectives and achieve customer satisfaction.
8. **Knowledge Management** — create the capability to reuse knowledge, skills, and assets across the organisation.

### Technical Management (8)
9. **Project Planning** — produce and coordinate effective, workable plans for the technical effort.
10. **Project Assessment and Control** — determine status against plans and direct execution to keep it on track.
11. **Decision Management** — provide a structured, analytical framework for selecting among alternatives.
12. **Risk Management** — identify, analyse, treat, and monitor risks (and opportunities) continuously.
13. **Configuration Management** — establish and maintain the integrity of system elements and their configuration information over the life cycle.
14. **Information Management** — generate, obtain, confirm, transform, retain, retrieve, disseminate, and dispose of designated information.
15. **Measurement** — collect, analyse, and report objective data and information to support effective management and demonstrate product quality.
16. **Quality Assurance** — help assure the effective application of the Quality Management process to the project.

### Technical (14)
17. **Business or Mission Analysis** — define the problem or opportunity space and characterise the solution space.
18. **Stakeholder Needs and Requirements Definition** — define stakeholder requirements for a system that can provide the needed capabilities.
19. **System Requirements Definition** — transform stakeholder requirements into a technical view of a solution that meets operational needs.
20. **Architecture Definition** — generate system architecture alternatives, select one, and express it in views.
21. **Design Definition** — provide sufficient detailed data and information about the system and its elements to enable implementation.
22. **System Analysis** — provide rigorous data and information for technical understanding to aid decision-making across the life cycle.
23. **Implementation** — realise a specified system element.
24. **Integration** — synthesise a set of system elements into a realised system that satisfies architecture and design requirements.
25. **Verification** — provide objective evidence that a system or element fulfils its specified requirements and characteristics.
26. **Transition** — establish a capability to provide services in the operational environment.
27. **Validation** — provide objective evidence that the system, when in use, fulfils its business or mission objectives and stakeholder requirements.
28. **Operation** — use the system to deliver its services.
29. **Maintenance** — sustain the capability of the system to provide a service.
30. **Disposal** — end the existence of a system element or system for a specified intended use, and handle waste responsibly.

> **Study tip:** cover the right-hand side of that list and recite the purposes. Then reverse it — read a purpose and name the process. When you can do both directions without hesitation, you have neutralised a large fraction of the exam.

## Key takeaways

- ISO/IEC/IEEE 15288 defines 30 processes in 4 groups: Agreement (2), Organizational Project-Enabling (6), Technical Management (8), Technical (14).
- The Handbook is the practical companion to that standard, which is why the exam maps so cleanly onto this structure.
- Know the cross-group confusions cold: Quality Management vs Quality Assurance, Knowledge Management vs Information Management, Portfolio Management vs Project Planning.
- Recognise the companion standards by subject: 29148 requirements, 42010 architecture description, 15939 measurement, 24748 life cycle and planning, 12207 software.
- The standard defines purpose and outcomes, not methods; it expects tailoring; and its processes apply iteratively, recursively, and concurrently to any kind of system.

## Check yourself

1. State the four process groups and the number of processes in each, from memory.
2. Which group does Decision Management belong to? Which group does Knowledge Management belong to?
3. Which standard would you consult for the characteristics of a well-formed requirement? For the definition of a viewpoint?
4. Name three processes whose purpose statements you could not recite, and go learn them now.
