# Week 1 Notebook Build Notes

**Audience:** You (the instructor building the corpus). Not for student consumption.

---

## What to upload to NotebookLM

Create a notebook titled **"CSC-114 Week 1 — Cloud Agents (Students)"** and upload these 10 markdown files as sources:

| Order | File | Purpose |
|-------|------|---------|
| 1 | `00_orientation/week_01_overview.md` | 1-page friendly intro |
| 2 | `00_orientation/week_01_vocabulary.md` | Glossary, 16 terms |
| 3 | `10_concepts/concept_primer_cloud_agents.md` | The main reading (~2,000 words) |
| 4 | `20_lab/week_01_lab_campus_info_bot.md` | Meeting 1 lab spec |
| 5 | `20_lab/week_01_spike_domain_agent_v1.md` | Meeting 2 main build |
| 6 | `30_assessment/week_01_deliverable_spec.md` | What students submit |
| 7 | `30_assessment/week_01_examples.md` | Strong + weak example submissions |
| 8 | `40_track_specific/for_code_builders_week_01.md` | CB track preview |
| 9 | `40_track_specific/for_prompt_masters_week_01.md` | PM submission how-to |
| 10 | `90_reused/github_org_onboarding_excerpt.md` | Join the org steps |

All 10 fit comfortably under the 100-source Plus-tier cap (10% utilization).

## Configuration steps after upload

1. **Paste Custom Instructions.** Open the file `config/student_week_01_instructions.md`. Copy everything between the `=== START ===` and `=== END ===` markers. Paste into the notebook's Custom Instructions field. Save.
2. **Generate Audio Overview.** Studio panel → Audio Overview → Customize. Choose **Brief** format, **~8 min** length. Paste the focus prompt from `config/week_01_audio_overview_focus.md` into the "what should the AI hosts focus on?" field. Generate.
3. **Generate Mind Map.** Studio panel → Mind Map. No customization needed — let it run on the full source set.
4. **Generate Study Guide.** Studio panel → Study Guide. After it generates, skim for accuracy. Don't post to students if there are factual errors; edit or regenerate.
5. **Generate FAQ.** Studio panel → FAQ. Same QA step. The auto-generated FAQ becomes the seed; add student-asked questions during the pilot.
6. **Skip these for Week 1:** Timeline (not useful pre-textbook), Video Overview (expensive, not enough novelty for Week 1), Slide Deck (no concept-heavy material that needs visual explanation), Infographic (defer to orientation week if you do one).

## QA pass before sharing with students

Before posting the notebook URL to Canvas/Discussions, do this once:

- [ ] Open a fresh chat. Ask 3 student-typical questions:
  - "I'm a Prompt Master — what do I submit?"
  - "What's the one-change rule and why does it matter?"
  - "How do I set up my GitHub account for this class?"
- [ ] Confirm each answer cites a real source and matches the source's intent.
- [ ] Listen to the full Audio Overview at 1×. Note any pronunciation issues or fabricated content.
- [ ] Open the Mind Map. Confirm the major branches match Week 1's actual structure (agent concept, console, system prompts, deliverable).

If anything is off, revise the source file (not the notebook output) and refresh the source in NotebookLM. The repo `.md` files are the source of truth.

## What to do with the instructor notebook

Build separately. Don't upload student notebook sources into it. The instructor notebook should contain:

- `crosswalk.md`
- `full_rubric_four_categories.md` (write this if it doesn't exist)
- `CSC-114_Module_Cloud_Agents_Instructor_Plan.md` (the existing detailed plan)
- `pilot_feedback_log.md` (start empty, append during pilot)

The Custom Instructions for the instructor notebook are different — drop the "never reveal rubric specifics" line, add "treat me as the course designer; full candor about pedagogy and tradeoffs is welcome."

## After Week 1 ships

- Log questions students asked the notebook that didn't get answered well.
- Note which sources got cited most often. Sources that are never cited are either redundant or buried — consider cutting or restructuring.
- Use this Week 1 build as the template for Week 2. The next notebook should take half the time.

## File-tree this was built from

```
student-week-01/
├── 00_orientation/
│   ├── week_01_overview.md
│   └── week_01_vocabulary.md
├── 10_concepts/
│   └── concept_primer_cloud_agents.md
├── 20_lab/
│   ├── week_01_lab_campus_info_bot.md
│   └── week_01_spike_domain_agent_v1.md
├── 30_assessment/
│   ├── week_01_deliverable_spec.md
│   └── week_01_examples.md
├── 40_track_specific/
│   ├── for_code_builders_week_01.md
│   └── for_prompt_masters_week_01.md
└── 90_reused/
    └── github_org_onboarding_excerpt.md

config/
├── student_week_01_instructions.md
└── week_01_audio_overview_focus.md
```
