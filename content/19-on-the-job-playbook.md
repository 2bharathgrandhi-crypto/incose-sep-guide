---
title: "The On-the-Job Playbook"
part: "Part VI — Practice"
order: 19
minutes: 17
summary: "Your first 90 days, the artefacts you will actually produce, how to run reviews and meetings that work, how to influence without authority, and the failure patterns to watch for."
---

## This chapter is the one you will come back to

Everything so far describes the discipline. This describes the job: what to do on Monday, how to be useful before you are expert, and how to avoid the mistakes that make good new systems engineers ineffective.

---

## Your first 90 days

### Weeks 1–2: understand the system and the people

**Read, in this order:**

1. The **SEMP** or equivalent technical plan. It tells you what the project claims it is doing.
2. The **ConOps / OpsCon** and any operational scenarios. This tells you what the system is *for*.
3. The **system requirements**. Skim for scope and read the top-level ones properly.
4. The **architecture description** and any interface documents.
5. The **risk register**. This tells you what the project is actually worried about, which is often the most honest document available.
6. The **schedule**, to learn what the next three milestones are.

**Draw your own context diagram.** Do not copy the existing one. Draw it from your own understanding, then compare. The differences are your learning list.

**Meet people and ask the same five questions** of each:

1. What does this system actually do, in one sentence?
2. What worries you most about it?
3. What do you wish had been decided differently?
4. Who should I talk to that I haven't?
5. Where is the information I'd need to do your job?

The second and third questions get you the real state of the project in a way no document will. The fourth question, repeated, builds you a genuine stakeholder map in two weeks.

### Weeks 3–6: find and fill a gap

New systems engineers add value fastest by finding something nobody owns. Common unowned things, in rough order of how often they are lying around:

- **Interfaces that are not written down.** Build the N² diagram. Ask each team what they think crosses each boundary. Collect the disagreements. This one activity has launched many careers.
- **Requirements with no verification method.** Go through the requirement set and add the missing verification attribute. You will find several requirements that cannot be verified at all — which is a finding worth raising.
- **Risks with no owner or no next action.** Clean up the register and make it live.
- **Undocumented decisions.** Start the decision log. Backfill the last six months by asking.
- **TBDs with no owner or date.** Count them, chart them, get owners assigned.
- **A missing traceability link set** between stakeholder and system requirements.

Each of these is unglamorous, immediately useful, requires no authority, and teaches you the system faster than any amount of reading.

### Weeks 7–12: take an area and own it

By now you should be able to hold a defined scope: an interface, a subsystem's requirements, the verification plan for one capability. Ask for it explicitly. Owning something small and doing it visibly well is how you earn the next thing.

---

## The artefacts you will actually produce

Not a comprehensive list of what exists — a realistic list of what lands on a working systems engineer's desk.

| Artefact | What good looks like |
| --- | --- |
| **Context diagram** | One page, all external entities, every interaction labelled with what flows |
| **Stakeholder register** | Who, their interest, their influence, their concerns, who talks to them |
| **OpsCon / operational scenarios** | Narratives including off-nominal and emergency cases, written in the user's language |
| **Requirement set** | Uniquely identified, with rationale, verification method, priority, and traces |
| **Interface definitions / ICDs** | One definition, two named owners, units and timing explicit, off-nominal behaviour defined |
| **Architecture views** | Functional and physical, with allocation shown, and rationale recorded |
| **Trade study reports** | Criteria and weights fixed before evaluation, sensitivity analysis included, decision recorded |
| **Risk register entries** | If/then/resulting-in statements, named owners, dated next actions |
| **Verification matrix** | Every requirement mapped to method, level, and evidence |
| **Decision log** | Date, decision, alternatives, criteria, assumptions, decider |
| **Budgets** | Mass, power, timing, cost: allocated, consumed, margin remaining, trend |
| **Review packages** | Evidence against defined entry/exit criteria, not a narrative of activity |

> **On the job:** the **budget with a trend line** is the most under-used artefact in systems engineering and one of the most persuasive. A chart showing mass allocation, current estimate, and margin over the last six months makes a technical argument that no amount of prose will. Build them for mass, power, timing, memory, cost — whatever your system's scarce resource is.

---

## Running meetings and reviews that work

### Technical reviews

The difference between a real review and theatre:

| Theatre | Real review |
| --- | --- |
| Agenda is a list of presentations | Agenda is a list of criteria to be satisfied |
| Material distributed on the day | Material distributed with enough lead time to read |
| The outcome was decided beforehand | "Not yet" is a genuine possible outcome |
| Actions recorded, never tracked | Actions have owners, dates, and a closure process |
| Everyone attends | The people who can find problems attend |

**Entry criteria** should be enforced. If the material is not ready, postpone. A review held on incomplete material consumes everyone's time and produces false confidence, which is worse than no confidence.

### Peer reviews and inspections

Cheaper and often more effective than formal reviews. The rules that make them work:

- **Review the work product, not the person.** Discipline this hard, immediately, every time.
- Use a **checklist** — for requirements, the characteristics list; for interfaces, the interface aspects list.
- **Limit scope** — reviewing 200 requirements in one session guarantees the last 150 get no attention.
- **Record defects, do not fix them in the meeting.** The fix discussion always expands to fill the time.
- **Track defect data** over time. It is your best process improvement input.

### The daily craft

- **Write the summary email after every important technical conversation.** "As discussed, we agreed X, with the assumption Y, and Z will confirm by Friday." This single habit resolves an extraordinary number of later disputes and costs three minutes.
- **When two people disagree, get both to state the other's position** before arguing. Half the time they are agreeing in different vocabularies.
- **Ask the naive question.** You are new, so you can ask "why does it do that?" without cost. Use that window while you have it; the answer is surprisingly often "nobody knows."

---

## Influence without authority

Most systems engineers have responsibility for system outcomes and authority over nobody. This is the structural condition of the job, and there are things that reliably work.

**Be the person with the accurate picture.** Influence follows from being the one who knows how the pieces fit, who has the current numbers, and who is right about the consequences. This is earned by doing the unglamorous work.

**Bring data, not opinions.** "I'm worried about mass" is ignorable. "Mass margin has fallen from 12% to 4% over five months and at this rate we breach the limit in September" is not.

**Make the trade explicit rather than advocating.** "If we do A, we gain X and lose Y; if we do B, the reverse. Here is my recommendation and why." This gets you invited back. Pure advocacy gets you categorised as a stakeholder with an agenda.

**Give the credit away.** You will often be improving other people's work. The improvement being *theirs* makes the next one easier.

**Escalate rarely, and never by surprise.** Warn the person first. An escalation they saw coming is a professional disagreement; one they did not is an attack, and you will pay for it for years.

**Pick your battles by consequence.** You will find dozens of things that are not ideal. Fight for the ones that are expensive or irreversible; let the rest go, visibly and gracefully. A systems engineer who objects to everything is filtered out as noise.

---

## Failure patterns to recognise

| Pattern | Early signs | What to do |
| --- | --- | --- |
| **Requirements not converging** | TBD count flat, volatility not decreasing late | Chart it and escalate with the chart; force closure decisions with owners and dates |
| **Interface ambiguity** | Teams describe the same interface differently | Build the N² diagram; get one controlled definition per interface |
| **Integration deferred** | "We'll integrate at the end"; no integration lab | Push for the earliest possible end-to-end thread, however thin |
| **Optimistic reporting** | Everything green until suddenly red | Track objective measures, not opinions; look for the parameters nobody reports |
| **Margin quietly consumed** | Nobody can tell you the current margin | Build and publish the budget chart |
| **Specialty engineering late** | Safety/security/HSI engaged after CDR | Escalate with the cost-of-change argument, which is unanswerable |
| **Review theatre** | No entry criteria; no possible "no" | Propose written entry/exit criteria for the next gate |
| **Silent assumption divergence** | Two teams confidently contradicting each other | Write assumptions down and circulate them for explicit confirmation |
| **Heroic individuals** | One person holds the system in their head | Get it written down; that person will leave or burn out |
| **Documentation theatre** | Artefacts produced for audit, read by nobody | Apply the lean test: who reads this, and what decision does it change? |

---

## Sharpening the saw

- **Keep an experience log.** Monthly, one paragraph: what you worked on, which processes you performed, what you learned. This is your CSEP application, your performance review, and your CV, written in advance.
- **Use the INCOSE competency framework** to self-assess and choose what to develop next.
- **Join your local INCOSE chapter.** Chapter meetings are the cheapest way to meet experienced practitioners, and volunteering is a fast route to visibility and to professional development credit.
- **Read outside your domain.** The failure modes are the same across industries; the stories are more instructive when they are not yours.
- **Study accidents.** Public accident reports — aviation, rail, nuclear, medical — are the richest systems engineering case studies available, and they are free. Every one of them is a story about interfaces, assumptions, human factors, and organisational drift.
- **Find a mentor and, sooner than you feel ready, mentor someone.** Teaching exposes exactly what you do not understand.

---

## A closing thought

The uncomfortable truth about this job is that when you do it well, nothing dramatic happens. The integration goes smoothly. The requirement was clear. The interface fitted. Nobody writes a report about the crisis that did not occur.

Good systems engineering is the absence of expensive surprises, and absences are hard to take credit for. Learn to be comfortable with that, keep your budgets and risk charts so you can show the trend you protected, and take your satisfaction from the fact that the thing works.

Most of what goes wrong in complex projects is knowable in advance by someone willing to ask uncomfortable questions early and write the answers down. That is the job. It is a genuinely good one.

## Key takeaways

- In your first weeks, read the SEMP, ConOps, requirements, architecture, and risk register; draw your own context diagram; and ask everyone what worries them.
- Add value early by owning something unowned: interfaces, verification methods, risk actions, the decision log, or TBD closure.
- The artefacts that matter most in practice are the context diagram, interface definitions, the requirement set with attributes, the verification matrix, the risk register, the decision log, and resource budgets with trends.
- A real review has enforced entry criteria, pre-read material, a possible "no," and tracked actions.
- Influence comes from having the accurate picture, bringing data, framing trades rather than advocating, escalating rarely and never by surprise, and choosing battles by consequence.
- Learn the failure patterns and their early signs; most are visible months before they become crises.
- Keep an experience log from day one — it is your certification application and your career record.

## Check yourself

1. What are the first five documents you would read on joining a new project, and what does each tell you?
2. Name three unowned gaps you could fill in your first month without any authority.
3. What distinguishes a real technical review from theatre?
4. Rewrite "I'm worried the design is getting too heavy" as a statement that will actually change a decision.
5. Which failure pattern is most present on your current project, and what is the next concrete action?
