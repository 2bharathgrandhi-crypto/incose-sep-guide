---
title: "Glossary and Acronyms"
part: "Part VI — Practice"
order: 21
minutes: 15
summary: "The vocabulary, defined for recall. Use this as your flashcard source in the final weeks."
---

## How to use this

Cover the right-hand column and define the term. Then reverse it: read the definition and name the term. Both directions matter, because the exam asks both ways.

Terms are grouped by theme rather than alphabetically, because related terms are best learned against each other.

---

## Core system concepts

| Term | Definition |
| --- | --- |
| **System** | An arrangement of parts or elements that together exhibit behaviour or meaning that the individual constituents do not |
| **System element** | A discrete part of a system that can be implemented to fulfil specified requirements; may be hardware, software, data, humans, processes, procedures, facilities, materials, or naturally occurring entities |
| **System of interest (SoI)** | The system whose life cycle is under consideration |
| **Enabling system** | A system that supports the system of interest during its life cycle but does not form part of it — test rigs, production lines, training simulators |
| **Interoperating system** | A system the SoI must work with but does not control |
| **Constituent system** | A system that is a member of a system of systems, retaining its own management and purpose |
| **System of systems (SoS)** | An arrangement of independently useful systems integrated to deliver unique capabilities; constituents have operational and managerial independence |
| **Boundary** | The separation between the system of interest and its environment |
| **Context / operational environment** | Everything outside the boundary that the system interacts with or operates within |
| **Emergence** | Properties arising from interactions between elements that cannot be attributed to any element alone |
| **Aggregate property** | A property that is a simple sum or combination of element properties, such as mass |
| **Holism** | The principle that a system must be understood as a whole |
| **Encapsulation** | Hiding internal detail behind a defined interface |
| **Modularity** | Structuring a system as discrete, substitutable modules with defined interfaces |
| **Coupling** | The degree of interdependence between elements — loose coupling is generally desirable |
| **Cohesion** | The degree to which elements within a module belong together — high cohesion is desirable |
| **Suboptimisation** | Optimising parts independently, producing a worse whole |
| **Requisite variety** | A controller must have at least as much variety as the system it controls (Ashby's law) |
| **Equifinality** | In an open system, the same end state can be reached by different paths |
| **Iteration** | Repeating a process or activity on the same entity to refine the result |
| **Recursion** | Applying the same processes at successive levels of the system hierarchy |
| **Concurrency** | Performing processes or activities at the same time |

## System of systems types

| Term | Definition |
| --- | --- |
| **Directed SoS** | Built and managed to fulfil a specific purpose by a central authority; constituents are subordinated |
| **Acknowledged SoS** | Recognised objectives, designated manager and resources; constituents retain their own ownership and objectives |
| **Collaborative SoS** | No central authority; constituents voluntarily cooperate toward a shared purpose |
| **Virtual SoS** | No central authority and no agreed purpose; behaviour is emergent |

## Life cycle

| Term | Definition |
| --- | --- |
| **Life cycle** | The evolution of a system from conception through retirement |
| **Life cycle stage** | A period within the life cycle relating to the state of the system description or the system itself |
| **Life cycle model** | A framework of processes and activities organised into stages, serving as a common reference |
| **The six generic stages** | Concept, Development, Production, Utilization, Support, Retirement (Utilization and Support are concurrent) |
| **Vee model** | A life cycle model showing definition on the descending leg and integration and verification on the ascending leg, with correspondence between levels |
| **Spiral model** | Risk-driven, cyclic model in which each cycle identifies and resolves the largest current risk |
| **Incremental** | Delivering capability in successive usable portions |
| **Iterative** | Refining the solution through repeated cycles |
| **Evolutionary** | Allowing the system to evolve over fielded versions as needs and understanding change |
| **Decision gate** | A formal point at which a decision is made to continue, continue with conditions, or stop |
| **Entry / exit criteria** | Predefined conditions to be met before entering or leaving an activity or review |

## Reviews, baselines, and audits

| Term | Definition |
| --- | --- |
| **SRR** | System Requirements Review — requirements complete, consistent, feasible; often sets the functional baseline |
| **PDR** | Preliminary Design Review — design approach will meet requirements at acceptable risk; often sets the allocated baseline |
| **CDR** | Critical Design Review — detailed design complete and ready to build; initiates the product baseline |
| **TRR** | Test Readiness Review — readiness to begin formal testing |
| **SVR** | System Verification Review — verification evidence complete |
| **FCA** | Functional Configuration Audit — the item meets its specified requirements |
| **PCA** | Physical Configuration Audit — the as-built matches the product baseline documentation |
| **PRR** | Production Readiness Review — manufacturing and supply readiness |
| **ORR** | Operational Readiness Review — system, people, procedures, and support ready to operate |
| **Functional baseline** | Approved system-level functional and performance requirements |
| **Allocated baseline** | Requirements allocated to system elements, including interfaces |
| **Product baseline** | Detailed design and as-built definition |

## Requirements

| Term | Definition |
| --- | --- |
| **Need** | A stakeholder's expression of what they require, in their own language |
| **Requirement** | A statement that translates a need and its constraints into a verifiable form |
| **Stakeholder requirement** | A requirement expressed from the stakeholder's viewpoint, in the problem domain |
| **System requirement** | A technical, verifiable requirement in the solution domain |
| **Derived requirement** | A requirement arising from a design decision rather than directly from a stakeholder need |
| **Constraint** | An imposed limitation on the solution — standard, technology, cost, interface |
| **Allocation** | Assigning a requirement or function to a system element |
| **Flow-down** | Transforming parent requirements into child requirements at the next level |
| **Traceability** | Recorded relationships between requirements and their sources, implementations, and verifications |
| **Bidirectional traceability** | Traceability maintained both upward to sources and downward to implementation and verification |
| **Baseline** | An approved, fixed reference state of a set of items at a point in time |
| **TBD / TBR** | To Be Determined / To Be Reviewed — tracked placeholders, each requiring an owner and a resolution date |
| **Requirements creep** | Uncontrolled accretion of requirements outside the change process |
| **Requirement characteristics (individual)** | Necessary, appropriate, unambiguous, complete, singular, feasible, verifiable, correct, conforming |
| **Requirement set characteristics** | Complete, consistent, feasible, comprehensible, able to be validated, correct |
| **Rationale** | The recorded reason a requirement exists |

## Measures

| Term | Definition |
| --- | --- |
| **MOE** | Measure of Effectiveness — operational, stakeholder-facing, solution-independent measure of mission success |
| **MOP** | Measure of Performance — a technical attribute of the system |
| **TPM** | Technical Performance Measure — a selected MOP tracked over time against a planned profile |
| **KPP** | Key Performance Parameter — a critical capability, usually with threshold and objective values |
| **Base measure** | A single attribute measured directly |
| **Derived measure** | A function of two or more base measures |
| **Indicator** | An estimate or evaluation supporting decision-making, usually with a target or threshold |
| **Margin** | The difference between allocated capacity and current consumption of a resource |
| **TRL** | Technology Readiness Level — a 1-to-9 maturity scale from basic principles observed to proven in operation |

## Architecture and design

| Term | Definition |
| --- | --- |
| **Architecture** | Fundamental concepts or properties of a system in its environment, embodied in its elements, relationships, and principles of design and evolution |
| **Architecture description (AD)** | The work product expressing an architecture |
| **Concern** | An interest of a stakeholder relevant to the system |
| **Viewpoint** | A specification of the conventions for constructing and using a view; frames one or more concerns |
| **View** | A representation of the system from the perspective of a viewpoint |
| **Model** | A component of a view; a representation of a system or aspect of it |
| **Functional architecture** | The arrangement of functions, their decomposition, and their flows — solution independent |
| **Physical architecture** | The arrangement of physical elements that realise the functions |
| **Reference architecture** | A standard architecture for a domain, to be specialised |
| **Architecture framework** | A prescribed set of viewpoints for a domain — DoDAF, MODAF, NAF, TOGAF, UAF, Zachman |
| **MOSA** | Modular Open Systems Approach — modular design with open published interfaces to enable competition and upgrade |
| **Product line** | A set of products sharing a common managed architecture and core assets, with defined variation points |
| **ICD** | Interface Control Document — the agreed definition of an interface |
| **N² diagram** | A matrix showing elements on the diagonal and interfaces in off-diagonal cells |
| **Set-based design** | Keeping multiple design options alive and progressively eliminating infeasible regions |

## Realisation and proof

| Term | Definition |
| --- | --- |
| **Verification** | Objective evidence that a system fulfils its **specified requirements** — "did we build the system right?" |
| **Validation** | Objective evidence that the system fulfils its **intended use and stakeholder needs** in the operational environment — "did we build the right system?" |
| **Inspection** | Verification by examination without operating the system |
| **Analysis** | Verification by calculation, modelling, simulation, or similarity |
| **Demonstration** | Verification by operating the system and observing qualitatively |
| **Test** | Verification by operating under controlled conditions and collecting quantitative data |
| **Qualification** | Verification that the design meets requirements, often at margin conditions |
| **Acceptance** | Formal agreement that the delivered system satisfies the agreement |
| **Certification** | Formal attestation by a recognised authority that the system meets defined standards |
| **Accreditation** | Formal authorisation to operate a system for a specific purpose in a specific environment |
| **Regression testing** | Re-verifying after change that previously working behaviour still works |
| **Stub / driver** | Temporary elements used in top-down and bottom-up integration respectively |
| **Deviation** | Authorised departure from a requirement granted before production |
| **Waiver** | Acceptance of a non-conforming item after production |

## Technical management

| Term | Definition |
| --- | --- |
| **SEMP** | Systems Engineering Management Plan — the plan for the technical effort |
| **WBS** | Work Breakdown Structure — deliverable-oriented hierarchical decomposition of the total work; follows the 100% rule |
| **Work package** | The lowest-level WBS element, with an owner, estimate, and deliverable |
| **Critical path** | The longest chain of dependent activities, determining minimum project duration |
| **Float / slack** | How long an activity can slip without delaying the project |
| **EVM** | Earned Value Management — integrating scope, schedule, and cost |
| **PV / EV / AC** | Planned Value, Earned Value, Actual Cost |
| **SV / CV** | Schedule Variance = EV − PV; Cost Variance = EV − AC |
| **SPI / CPI** | Schedule Performance Index = EV/PV; Cost Performance Index = EV/AC |
| **BAC / EAC** | Budget at Completion; Estimate at Completion (commonly BAC/CPI) |
| **Risk** | An uncertain future event with negative consequence, characterised by likelihood and consequence |
| **Opportunity** | An uncertain future event with beneficial consequence |
| **Issue** | A risk that has occurred |
| **Residual risk** | Risk remaining after treatment |
| **Secondary risk** | A new risk created by treating another risk |
| **Risk handling strategies** | Avoid, Transfer/Share, Mitigate/Control, Accept (sometimes plus Research) |
| **Contingency / management reserve** | Resources held for identified risks / for unknown-unknowns |
| **Configuration item (CI)** | An entity designated for configuration management |
| **CM functions** | Configuration identification, change management, status accounting, verification and audit |
| **Change control board** | The body that assesses and approves changes to baselined items |

## Specialty engineering

| Term | Definition |
| --- | --- |
| **Reliability** | Probability of performing the required function under stated conditions for a stated time |
| **MTBF / MTTF / MTTR** | Mean time between failures / mean time to failure / mean time to repair |
| **Inherent availability** | Ai = MTBF / (MTBF + MTTR) |
| **Operational availability** | Availability including administrative and logistics delay time |
| **Maintainability** | The ease and speed with which the system can be restored |
| **FMEA / FMECA** | Failure Modes and Effects (and Criticality) Analysis — bottom-up, inductive |
| **FTA** | Fault Tree Analysis — top-down, deductive, from an undesired top event |
| **Common-cause failure** | A single cause defeating multiple redundant elements |
| **Dissimilar redundancy** | Redundant elements of different design, to defeat common-mode design errors |
| **Hazard** | A condition that can lead to harm |
| **Mishap** | The harmful event itself |
| **Safety order of precedence** | Eliminate by design → reduce by design → engineered safety features → warnings → procedures and training |
| **ALARP** | As Low As Reasonably Practicable |
| **Safety case** | A structured, evidence-supported argument that a system is acceptably safe in a given application and environment |
| **CIA triad** | Confidentiality, Integrity, Availability |
| **STRIDE** | Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege |
| **Defence in depth** | Layered security controls so that one failure does not lose everything |
| **Resilience** | Ability to anticipate, withstand, recover from, and adapt to adverse conditions |
| **HSI** | Human Systems Integration — manpower, personnel, training, human factors engineering, environment, safety, occupational health, habitability, survivability |
| **Situation awareness** | The operator's accurate perception and understanding of system and environment state |
| **Mode confusion** | The operator believes the system is in a different state than it is |
| **ILS** | Integrated Logistics Support |
| **DMSMS** | Diminishing Manufacturing Sources and Material Shortages — obsolescence |
| **LCC / TOC** | Life Cycle Cost / Total Ownership Cost |
| **CAIV** | Cost as an Independent Variable |
| **LCA** | Life Cycle Assessment — quantifying environmental impact across the life |

## Methods and modelling

| Term | Definition |
| --- | --- |
| **MBSE** | Model-Based Systems Engineering — formalised application of modelling to support the life cycle, with the model as the authoritative description |
| **SysML** | Systems Modeling Language; v1 is a UML profile with nine diagram types |
| **SysML structural diagrams** | Block definition, internal block, package, parametric |
| **SysML behavioural diagrams** | Activity, sequence, state machine, use case |
| **SysML requirement diagram** | Requirements as model elements with satisfy, verify, derive, refine, trace relationships |
| **Digital thread** | The connected flow of data and models across the life cycle and disciplines |
| **Digital twin** | A virtual representation of a specific physical instance, synchronised with it through operational data |
| **ASoT** | Authoritative Source of Truth |
| **OOSEM / Harmony-SE / ARCADIA / MagicGrid / STRATA** | MBSE methodologies (distinct from languages and tools) |
| **IPPD / IPT** | Integrated Product and Process Development / Integrated Product Team |
| **Concurrent engineering** | Developing product and its production and support processes simultaneously |
| **QFD** | Quality Function Deployment — translating customer needs to engineering characteristics (House of Quality) |
| **IDEF0** | Function modelling notation using inputs, controls, outputs, mechanisms |
| **FFBD** | Functional Flow Block Diagram |
| **TRIZ** | Structured inventive problem-solving method based on patterns of contradiction resolution |
| **DoE** | Design of Experiments |
| **Lean principles** | Specify value, map the value stream, create flow, establish pull, pursue perfection |
| **Tailoring** | Adapting life cycle processes to project needs by deleting, adding, or modifying activities, with recorded justification |

## Processes and organisations

| Term | Definition |
| --- | --- |
| **Agreement processes (2)** | Acquisition, Supply |
| **Organizational project-enabling processes (6)** | Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management, Knowledge Management |
| **Technical management processes (8)** | Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement, Quality Assurance |
| **Technical processes (14)** | Business or Mission Analysis, Stakeholder Needs and Requirements Definition, System Requirements Definition, Architecture Definition, Design Definition, System Analysis, Implementation, Integration, Verification, Transition, Validation, Operation, Maintenance, Disposal |
| **ConOps** | Concept of Operations — how the *enterprise* intends to operate, from the acquirer's viewpoint |
| **OpsCon** | Operational Concept — how the *system of interest* will be used, from the user's viewpoint |
| **INCOSE** | International Council on Systems Engineering |
| **SEBoK** | Guide to the Systems Engineering Body of Knowledge |
| **ASEP / CSEP / ESEP** | Associate / Certified / Expert Systems Engineering Professional |

---

## Acronym quick list

| | |
| --- | --- |
| **AC** Actual Cost | **ALARP** As Low As Reasonably Practicable |
| **ASoT** Authoritative Source of Truth | **BAC** Budget at Completion |
| **CAIV** Cost as an Independent Variable | **CDR** Critical Design Review |
| **CI** Configuration Item | **CM** Configuration Management |
| **ConOps** Concept of Operations | **CPI** Cost Performance Index |
| **CV** Cost Variance | **DMSMS** Diminishing Manufacturing Sources |
| **DoE** Design of Experiments | **EAC** Estimate at Completion |
| **EMC** Electromagnetic Compatibility | **EV** Earned Value |
| **EVM** Earned Value Management | **FCA** Functional Configuration Audit |
| **FFBD** Functional Flow Block Diagram | **FMEA** Failure Modes and Effects Analysis |
| **FTA** Fault Tree Analysis | **HSI** Human Systems Integration |
| **ICD** Interface Control Document | **ILS** Integrated Logistics Support |
| **IPT** Integrated Product Team | **KPP** Key Performance Parameter |
| **LCA** Life Cycle Assessment | **LCC** Life Cycle Cost |
| **MBSE** Model-Based Systems Engineering | **MOE** Measure of Effectiveness |
| **MOP** Measure of Performance | **MOSA** Modular Open Systems Approach |
| **MTBF** Mean Time Between Failures | **MTTR** Mean Time To Repair |
| **OpsCon** Operational Concept | **ORR** Operational Readiness Review |
| **PCA** Physical Configuration Audit | **PDR** Preliminary Design Review |
| **PV** Planned Value | **QFD** Quality Function Deployment |
| **RAM** Reliability, Availability, Maintainability | **SEBoK** SE Body of Knowledge |
| **SEMP** Systems Engineering Management Plan | **SoI** System of Interest |
| **SoS** System of Systems | **SPI** Schedule Performance Index |
| **SRR** System Requirements Review | **SV** Schedule Variance |
| **SVR** System Verification Review | **SysML** Systems Modeling Language |
| **TBD** To Be Determined | **TOC** Total Ownership Cost |
| **TPM** Technical Performance Measure | **TRL** Technology Readiness Level |
| **TRR** Test Readiness Review | **WBS** Work Breakdown Structure |
