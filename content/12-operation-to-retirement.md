---
title: "Operation, Maintenance, and Disposal"
part: "Part III — Technical Processes"
order: 12
minutes: 12
summary: "The longest and most expensive part of most systems' lives, plus the end that everyone forgets to plan for."
---

## Where the money and the years actually go

For most long-lived systems, the Utilization and Support stages dominate both the calendar and the budget. An aircraft flies for decades; a rail signalling system runs for a generation; a hospital information system outlives three IT strategies. Yet these processes get the least attention from engineers, who tend to lose interest around the time the thing starts working.

Three processes cover this territory: **Operation**, **Maintenance**, and **Disposal**. Operation and Maintenance run concurrently through the Utilization and Support stages.

---

## Operation

**Purpose:** to use the system to deliver its services.

### What the process covers

- **Prepare for operation** — staffing, training, operating procedures, the operational strategy.
- **Perform operation** — use the system in its environment to deliver the intended services.
- **Manage results** — monitor performance, record incidents and anomalies, report against operational measures.
- **Support the customer** — assistance, advice, and the handling of operational problems.

### Why the systems engineer still matters here

The system meets the world in operation, and the world is always more varied than the design assumed. Your job during operation:

- **Monitor the MOEs.** Is the system actually achieving the mission outcomes it was justified by? This is the ultimate answer to "did it work," and it is startling how rarely anyone checks.
- **Watch for operational drift.** Systems get used in ways nobody specified. Sometimes that is innovation, sometimes it is an accident in slow motion.
- **Collect and act on operational data** — failures, near misses, workarounds, user complaints, performance trends. This is your single best source of requirements for the next version.
- **Manage operational risk** as the environment, threats, and usage evolve.
- **Handle degraded modes.** Real systems run partially broken more often than anyone plans for. Whether degraded operation is safe and defined is a design question answered in operation.

### The human element

The operators are part of the system. Their training, procedures, workload, staffing levels, and shift patterns are system elements that can be inadequate exactly the way a component can be inadequate. Most "operator error" findings are, on examination, design or procedure failures wearing a disguise — an interface that invited the mistake, a procedure that did not match reality, a workload that made vigilance impossible.

> **On the job:** if you can visit the operational site once, do it. An hour watching people actually use the system will teach you more than a year of reading incident reports. You will see the sticky note over the warning light, the step everyone skips, and the spreadsheet somebody built because your system does not do the thing they need.

---

## Maintenance

**Purpose:** to sustain the capability of the system to provide a service.

### Types of maintenance

| Type | Trigger | Purpose |
| --- | --- | --- |
| **Corrective** | Something has failed | Restore function |
| **Preventive** | Scheduled by time or usage | Prevent failure before it happens |
| **Predictive / condition-based** | Monitored condition indicates impending failure | Intervene just in time, based on actual state |
| **Adaptive** | The environment changed | Keep the system usable as its context evolves — new OS, new regulation, new interfacing system |
| **Perfective** | Opportunity for improvement | Enhance performance or maintainability |

The last two matter especially for software-intensive systems, where the majority of post-delivery effort is typically adaptive and perfective rather than corrective.

### What the process covers

- **Plan maintenance** — strategy, levels of repair, spares provisioning, facilities, personnel, tooling.
- **Perform maintenance** — corrective, preventive, and other actions as required.
- **Perform logistics support** — supply chain, spares, packaging, handling, storage, transport.
- **Manage results** — record failures and repairs, analyse trends, feed back to design.

### Key concepts and measures

- **Maintainability** — the ease and speed with which the system can be restored. Designed in, not added later. Access, diagnostics, modularity, standard tools, and clear labelling are maintainability design features.
- **MTTR** — mean time to repair.
- **MTBF** — mean time between failures.
- **Availability**, inherent: `Ai = MTBF / (MTBF + MTTR)`. Operational availability additionally accounts for administrative and logistics delay time — the spare that exists but is three days away.
- **Levels of repair** — organisational (on-site, by operators), intermediate (a local workshop), depot (full overhaul facility). The **level of repair analysis** decides which faults are fixed where, trading spares cost, downtime, and facility investment.
- **Obsolescence management (DMSMS)** — diminishing manufacturing sources and material shortages. For systems with decades-long lives, the parts you designed with will stop being made. Plan for technology refresh, lifetime buys, or designed-in replaceability.
- **Sustainment engineering** — the ongoing engineering effort to keep an in-service system safe, effective, and supportable.

> **On the exam:** operational availability being reduced by logistics and administrative delay is an examinable nuance. A system with excellent inherent availability can have poor operational availability purely because of supply chain.

### The feedback loop that closes the life cycle

Maintenance and operational data are the input to the next system, the next block upgrade, and the next requirement set. Failure reporting, analysis, and corrective action systems (FRACAS) exist to make that loop real rather than theoretical. A project that does not close this loop repeats its own mistakes on the next programme.

---

## Disposal

**Purpose:** to end the existence of a system element or system for a specified intended use, appropriately handle replaced or retired elements, and properly attend to identified critical disposal needs.

### Why it is a real engineering problem

Disposal has become a first-class concern for reasons that are practical, legal, and ethical:

- **Regulation.** Hazardous materials, electronics waste, radiological materials, chemical decontamination — all heavily regulated, with personal liability in some jurisdictions.
- **Cost.** Decommissioning a nuclear plant, an offshore platform, or a chemical facility can rival the original build cost.
- **Data.** Disposing of anything with storage raises data destruction and privacy obligations. Sold-on medical devices and photocopiers have leaked patient records.
- **Environment and circular economy.** Design for disassembly, material recovery, and recycling is increasingly mandated and is a live theme in current systems engineering practice.
- **Safety.** Deactivating a system with stored energy — pressure, chemical, electrical, kinetic, radiological — is a hazardous operation in itself.

### What the process covers

- **Plan disposal** — the strategy, defined ideally during the concept stage as one of the life cycle concepts.
- **Deactivate** the system so it can be removed safely.
- **Remove** the system, its elements, and waste from use or production.
- **Destroy, recycle, store, or repurpose** elements as appropriate.
- **Remediate** the operating site — restore the environment to the required condition.
- **Manage results** — records of disposal, compliance evidence, lessons learned.

### Things engineers forget

- The **enabling systems** also need disposing of — test rigs, tooling, simulators.
- **Data and intellectual property**: records retention obligations may outlive the system by years, while other data must be destroyed.
- **Spares and inventory** left in the supply chain.
- **Personnel**: the people who operated and maintained it need redeployment or retraining.
- **Documentation archiving** for legal, warranty, and liability purposes.
- **Interoperating systems** that depended on yours and now need a replacement or a migration path.

> **On the job:** write a one-page disposal concept during the concept stage. It takes an hour, and it forces material choices, data handling provisions, and dismantling access to be considered while they are still free to change. It also marks you out as someone thinking about the whole life cycle, which is the definition of the job.

---

## The through-life mindset

If there is one habit to take from this chapter, it is to evaluate every design decision against the whole life, not just the delivery date:

| Decision | Delivery-focused question | Life cycle question |
| --- | --- | --- |
| Choose a component | Is it cheap and available now? | Will it be manufactured in fifteen years? How is it replaced in the field? |
| Choose an architecture | Does it meet performance? | Can a subsystem be upgraded without requalifying everything? |
| Choose a material | Is it strong and light? | Is it recyclable, and is it restricted under environmental regulation? |
| Choose an interface | Does it work? | Is it open and documented so a future supplier can meet it? |
| Choose a diagnostic approach | Can the test team find faults? | Can a technician at 3am, in the rain, find the fault? |

That second column is what separates a systems engineer from an excellent designer.

## Key takeaways

- Operation and Maintenance run concurrently and dominate the life span and usually the cost of long-lived systems.
- During operation the systems engineer monitors the MOEs, watches for operational drift and degraded modes, and harvests operational data as the input to the next version.
- Maintenance types: corrective, preventive, predictive/condition-based, adaptive, perfective — the last two dominate software-intensive systems.
- Availability depends on maintainability and on the supply chain: inherent availability uses MTBF and MTTR; operational availability also includes logistics and administrative delay.
- Obsolescence management is unavoidable for long-lived systems and must be planned, not discovered.
- Disposal is a regulated, costly, and hazardous engineering activity covering deactivation, removal, destruction or recycling, site remediation, data destruction, and records — and it should be conceived in the concept stage.

## Check yourself

1. Which two life cycle stages run concurrently, and which two technical processes are their main content?
2. Give the formula for inherent availability and explain what operational availability adds.
3. Distinguish adaptive from perfective maintenance with an example of each.
4. Name four things besides the system hardware that must be addressed at disposal.
5. Why is "operator error" often a misdiagnosis, and what should a systems engineer look for instead?
