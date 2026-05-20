# Claude Managed Agents on the Anthropic Console: Instructor Research Report for CSC-114

## TL;DR
- **Managed Agents is the right fit for CSC-114, but with caveats.** It is Anthropic's hosted, beta agent harness (launched April 8, 2026, requires the `managed-agents-2026-04-01` beta header) that lets each student build a Claude-powered agent in the Claude Console with a system prompt, tools, MCP servers, attached Skills, and a sandboxed cloud container — no Docker, no agent loop, no state management to write. For domain bots like an academic advisor or a subnetting calculator, students can ship a working prototype in roughly 15–30 minutes through the visual builder at `platform.claude.com/workspaces/default/agent-quickstart/`.
- **Plan for real, per-student costs.** Pricing is consumption-based: standard Claude token rates plus **$0.08 per session-hour** of active runtime; web search inside a session is an extra $10 / 1,000 searches. New Anthropic API accounts get $5 in trial credits after phone verification, there is no dedicated free tier for Managed Agents, and the lowest-friction path is for the instructor to either (a) request Anthropic education credits, (b) route students through AWS Educate → Claude on Bedrock, or (c) issue API keys from a single departmental workspace with hard per-key spend caps.
- **The number-one student pitfall is the default-blocked outbound network for MCP servers.** A new environment will silently fail to reach external MCP endpoints unless the student toggles "Allow MCP server network access" (or, in JSON, sets `networking: {type: unrestricted}` or a `limited` allowlist with `allow_mcp_servers: true`). Combined with the beta-stability warning, the mandatory beta header on all direct HTTP calls, and the fact that Skills + Files for knowledge bases are read-only mounts (not a managed vector store), these are the three things to address in your first lecture.

## Key Findings

1. **What it is.** Managed Agents is a suite of REST APIs and a Console visual builder that runs Claude as an autonomous agent inside Anthropic-managed gVisor-sandboxed Linux containers. Anthropic supplies the agent loop ("harness"), prompt caching/compaction, tool execution, per-session container, state persistence across disconnects, and end-to-end event tracing in the Console. The same agent definition can be reused across many sessions. It is a separate product from the Messages API (raw prompting), the Claude Agent SDK (bring-your-own loop in Python/TS), and Claude Code (developer CLI).

2. **Models supported.** Any current first-party Claude model: Claude Opus 4.7 (best long-horizon agent reasoning), Claude Sonnet 4.6 (recommended default — best price/performance), and Claude Haiku 4.5 (fast and cheapest). Models are pinned by ID (e.g., `claude-sonnet-4-6`, `claude-opus-4-7`, `claude-haiku-4-5-20251001`). Opus 4.6/4.7 optionally support a `speed: "fast"` mode at roughly 6× standard rates. Non-Anthropic models are not supported — this is one of the platform's hard lock-in points.

3. **Four core concepts students must internalize.** (a) **Agent** = versioned config (model + system prompt + tools + MCP servers + Skills); (b) **Environment** = a container template (pre-installed pip/npm packages, networking policy, mounted files); (c) **Session** = a running instance combining one agent with one environment to execute a task — each session gets its own isolated container, and file system state is **not** shared between sessions; (d) **Events** = the SSE stream of user messages, agent messages, tool uses, and status updates.

4. **Built-in tool suite (`agent_toolset_20260401`).** Enabling this single toolset gives the agent: `bash` (shell in container), file operations (`read`, `write`, `edit`, `glob`, `grep`), `web_search`, and `web_fetch`. Tools can be allowlisted/scoped per agent via permission policies, and each tool can be set to `auto` (run without asking) or `confirmation` (pause for approval) — useful for graded student demos.

5. **MCP integration.** Agents can connect to remote MCP servers over streamable HTTP. The agent definition declares server name + URL; credentials are supplied at *session* creation time via a **Credential Vault** (a workspace-level secret store), so the agent code never sees the token. OAuth and bearer-token flows are both supported. Default environment networking blocks outbound MCP calls — this must be explicitly enabled. The public **Connectors Directory** lists 375+ MCP servers (Google Drive, Slack, Notion, Stripe, Jira, Figma, Adobe Creative Cloud, etc.), and students can also stand up their own MCP server (e.g., Firecrawl, a class roster API).

6. **"Knowledge base" is not RAG out-of-the-box.** There is no managed vector database. Students give an agent persistent domain knowledge in three ways: (a) write it directly into the system prompt; (b) upload PDFs/CSVs/Markdown via the **Files API** and mount them read-only into the session's container at a path like `/workspace/policies.pdf` — the agent reads them with file tools; or (c) author an **Agent Skill** (a folder with a `SKILL.md` and supporting scripts, name ≤ 64 chars, description ≤ 1024 chars) and attach it to the agent. Each session supports **up to 20 Skills total** across all agents in the session. There is also a beta **Memory tool / memory_store** (and a "Dreaming" research-preview feature that mines past sessions for patterns) for cross-session learning.

7. **Console visual builder ("Prototype in Console").** Sidebar items in the workspace are **Agents, Environments, Sessions, Credential Vaults, Skills, Files, Memory Stores, Batches**, plus usage/cost analytics. The agent-quickstart page presents a four-step flow with a template gallery (e.g., "Blank agent", "Incident commander") + a "create an agent by describing it" chat input. The agent builder form has dedicated fields for model dropdown, full-width system prompt editor, MCP server list (name + URL), tool toggles, and Skill attachments; a side panel shows the **equivalent API request** that students can paste into Python/TypeScript. Agents are immutable per version — editing creates a new version, and existing sessions stay pinned to the version they were started with.

8. **Inline session runner.** After saving an agent, students can launch a test session in the same page, send a user message, and watch events arrive in two views: a high-level **Transcript** (readable conversation) and a **Debug** view (every tool call, parameters, raw responses, and live token counts). This is the only debugging interface most students will ever need.

9. **Pricing.** Standard Claude token rates apply (Opus 4.6 input $5/Mtok, output $25/Mtok; Sonnet 4.6 input $3/Mtok, output $15/Mtok; Haiku 4.5 ~$1/Mtok input) PLUS **$0.08 per session-hour** of active runtime (millisecond-billed; idle/waiting time is free). Web search inside a session is **$10 per 1,000 calls**. Prompt caching can cut input costs by up to 90% on cache hits. Anthropic's own worked example: a one-hour Opus 4.6 coding session with 50k input + 15k output tokens = **$0.705**, dropping to **$0.525** with prompt caching active. For a typical student bot that runs a handful of 1–3 minute sessions per assignment week, expect $1–5 in total spend per student per semester at Sonnet 4.6.

10. **Rate limits & beta stability.** Anthropic's official docs set per-organization caps at **300 RPM on create endpoints, 600 RPM on read/stream endpoints**, on top of tier-based token-per-minute limits. (Note: WaveSpeed's launch-week guide cited **60 RPM** on creates, which conflicts with the docs — I cite Anthropic's published figure but flag the discrepancy.) The product is in **public beta**; all direct HTTP requests must include the `managed-agents-2026-04-01` beta header (the official SDKs add it automatically). "Outcomes" (self-evaluation) and "Multiagent" orchestration are gated **research previews** requiring a separate access request — these will not be available out-of-the-box for students.

## Details

### 1. General Capabilities

Claude Managed Agents is positioned by Anthropic as a hosted "agent harness" — the infrastructure layer (sandbox, agent loop, tool dispatcher, context manager, state persistence) that historically every team had to rebuild before they could ship an agent. Anthropic's official launch blog states: *"In internal testing around structured file generation, Managed Agents improved outcome task success by up to 10 points over a standard prompting loop, with the largest gains on the hardest problems."* A May 8, 2026 follow-up adds per-filetype detail (task success rising by 8.4% on .docx and 10.1% on .pptx in Anthropic's internal benchmarks). For CSC-114 the more relevant point is that the same harness underlies what Notion, Vibecode, Sentry, and Rakuten ship today (with Asana also publicly demonstrating "AI Teammate" agents on top of it) — so students are learning a production pattern rather than a toy.

**What an agent definition contains** (POST `/v1/agents`):
- `model` — string ID or `{id, speed}` object (`speed: fast` only for Opus 4.6/4.7).
- `system` — system prompt, full-width markdown editor in the Console.
- `tools` — array; the simplest production-ready value is `[{type: "agent_toolset_20260401"}]` which turns on bash + file ops + web_search + web_fetch. Each entry can carry a `permission_policy` (e.g., `always_allow`, `require_confirmation`).
- `mcp_servers` — array of `{type: "url", name, url}` references. No tokens here; tokens are attached per session via vaults.
- `skills` — array of Skill IDs (Anthropic prebuilt: pptx, xlsx, docx, pdf; or workspace-uploaded custom).
- `metadata` — free-form key/value bag for tagging (useful for grading: tag each student's agent with their NetID).

**How it differs from raw API access.** With the Messages API, the student writes their own while-loop that calls `client.messages.create`, inspects `stop_reason == "tool_use"`, executes the tool, appends a `tool_result` block, and loops — plus they have to host that loop, run the tool sandbox safely, and persist state. With Managed Agents that loop is gone: the student writes a system prompt, picks tools, opens a session, sends a user message, and consumes SSE events. The trade-off is reduced fine-grained control: you cannot rewrite the harness, swap in a non-Claude model, or run the sandbox in your own VPC (without going to Claude Platform on AWS).

### 2. Workflow Through the Console

The recommended student workflow is fully visual; CLI/SDK use can be deferred until later in the term.

1. **Account + key.** Each student signs up at `console.anthropic.com` (now redirects to `platform.claude.com`), verifies phone (no credit card required for the $5 trial credit), and generates an API key from Settings → API Keys. Adding payment is required once trial credits exhaust.

2. **Open the visual builder.** Navigate to **Agents** in the left sidebar → **New Agent**, or go directly to `/workspaces/default/agent-quickstart/`. The quickstart page offers a four-step flow with a "Browse templates" gallery (e.g., "Blank agent", "Incident commander") and a "create an agent by describing it" chat input.

3. **Pick a template or start blank.** For CSC-114 the "Blank agent" template is cleanest. The form then exposes:
   - **Name** + **Description** (visible in agent lists).
   - **Model** dropdown — default to `claude-sonnet-4-6` for cost; switch to `claude-opus-4-7` only if the task fails at Sonnet.
   - **System prompt** — full-width editor. This is where the academic-advising bot gets its course catalog rules and the subnetting bot gets its constraint that "show calculations in CIDR notation; reject inputs that aren't valid IPv4."
   - **Tools** — toggle the pre-built agent toolset; advanced students can scope to read-only.
   - **MCP servers** — add by name + URL (e.g., a Firecrawl MCP, a school-API MCP, the Notion connector). The form will warn that the environment must allow outbound MCP traffic.
   - **Skills** — pick from Anthropic prebuilts (PowerPoint, Excel, Word, PDF) or workspace-uploaded custom Skills.
   - A side panel shows the equivalent JSON/YAML and Python/TypeScript code, which students can copy.

4. **Create a Credential Vault first if MCP is needed.** Even though Vaults appear last in the sidebar, the practical order is: create vault → add credential (bearer token or OAuth flow) → reference vault when creating the session. Students must check "I own or am authorized to use this vault" — this is a workspace-shared resource, so anyone with workspace access can use the credential.

5. **Create an Environment.** **Environments** → **Add Environment** (or **New Environment**). Set:
   - `type: cloud` (this is the only currently supported type).
   - `packages` — list of pip/apt/npm/go/cargo/gem packages to pre-install; cached across sessions sharing this environment.
   - `networking` — **this is the critical field**. Default-restrictive blocks all egress. For most class projects use `type: unrestricted`; for production-style hardening use `type: limited` with `allowed_hosts: [...]` and the flags `allow_mcp_servers: true` and `allow_package_managers: true`. Students who forget this will see "MCP server host blocked" in the session error log.

6. **Start a Session.** **Sessions** → **Create Session**, pick the agent and environment, optionally attach files via the Files API or a GitHub repo. The inline session runner opens.

7. **Test by sending a message.** Type a prompt. The Console shows two synchronized views:
   - **Transcript** — chat-like, what the agent says to the user.
   - **Debug** — every `agent.tool_use` with its inputs and raw outputs (e.g., `firecrawl_search` triggered with limit 10), every `agent.message`, status transitions, and live token counters.
   When the agent emits `session.status_idle`, the run is done. The session can be resumed by clicking **Actions → Send Event**.

8. **Iterate.** To change the system prompt or tools, do NOT use the "Ask Claude" input at the top of the page (it tries to LLM-edit the config and is unreliable in beta, especially around custom MCP servers). Instead: Agents tab → select agent → three-dot menu → **Guided Edit**, which opens the JSON editor with a help panel. Every save creates a new immutable version; in-flight sessions stay on their pinned version.

9. **Promote to code.** Copy the `agent.id` (and `environment.id`) from the Console; reference them in the student's Python/Node app:
   ```python
   session = client.beta.sessions.create(
       agent=agent_id,
       environment_id=env_id,
       resources=[{"type": "file", "file_id": file.id, "mount_path": "/workspace/catalog.pdf"}],
   )
   with client.beta.sessions.events.stream(session.id) as stream:
       client.beta.sessions.events.send(session.id, events=[{"type": "user.message", ...}])
       for event in stream: ...
   ```
   All requests must include `anthropic-beta: managed-agents-2026-04-01`.

### 3. What to Look Out For / Pitfalls

The recurring pitfalls reported in launch-era tutorials and community posts:

- **Default-blocked MCP egress.** Far and away the most-reported beginner failure. Symptom: session fails or stalls; error log says the MCP host is blocked. Fix: edit environment → toggle "Allow MCP server network access" → save → re-create the session. (The default exists for security; in a class context, just turn it on or use `allow_mcp_servers: true` in JSON.)
- **Missing/wrong beta header.** Direct HTTP calls without `anthropic-beta: managed-agents-2026-04-01` return 400. Mostly invisible if you stay on the SDK, but bites students who copy curl snippets.
- **Token cost dominates, not session-hour cost.** Anthropic's own example shows session-hour runtime is ~11% of cost; tokens are ~89%. The single biggest cost lever is **prompt caching** on the system prompt (cache reads are 10% of standard input price). Teach students to design a stable, cacheable system prompt and to switch to Haiku 4.5 for high-volume simple turns. A 24-agent fleet running 8 hr/day is ~$15/day in runtime overhead before tokens, but a single student's homework session is pennies.
- **Web search is metered separately at $10 / 1,000 searches.** A research-style agent that fires off dozens of searches per session will feel this. Cap the web_search tool with permission policies or remove it for agents that don't need it.
- **No managed vector store / RAG.** "Knowledge base" in Managed Agents means files mounted into the container or Skills attached to the agent. There is no built-in chunker, embedder, or retrieval API. For a course-catalog bot, students should either (a) keep the catalog under ~50 pages and mount the PDF/Markdown directly, or (b) write a tiny custom Skill that runs grep/Python over the mounted files.
- **Mounted files are read-only.** The agent can read them but can't modify the original uploaded file. To produce outputs, the agent writes to a new path in the container's writable workspace and the student downloads via the Files API.
- **Sessions are isolated.** File system state is NOT shared between sessions, even if they reference the same environment. For multi-turn persistence across sessions, students must either use the **Memory tool** (beta) or save state externally (e.g., write to their own database via an MCP).
- **Rate limits.** Per Anthropic's official docs, org-level limits are 300 RPM on create endpoints and 600 RPM on read/stream endpoints, on top of standard tier rate limits. For a 30-student class, the create-endpoint limit is irrelevant unless everyone hits "create session" simultaneously. The bigger concern is per-tier TPM (tokens per minute) on the underlying model calls — Tier 1 is fairly low.
- **Beta-instability.** Anthropic warns "behaviors may be refined between releases to improve outputs." Don't lock a graded rubric to a brittle behavior. The `managed-agents-2026-04-01` beta header may version-bump mid-semester.
- **Research-preview features are gated.** "Multiagent sessions" (orchestrator → sub-agents), "Outcomes" (self-evaluation with success criteria), and "Dreaming" (memory curation across sessions) require a separate access request. Don't promise them as part of an assignment unless you've already been approved.
- **gVisor sandbox is strong; defaults are permissive.** Out of the box: all 8 tools enabled, auto-execution, unrestricted networking, no human-in-the-loop. For student demos that's fine. For anything that touches a real institutional API, lock down with `limited` networking + an allowlist + `permission_policy: require_confirmation` on `bash` and write tools.
- **Credential sharing.** Saving an MCP credential to a vault shares it across the entire workspace. The Console actually shows a warning: anyone with API key access to the workspace can use that credential. For class use, give each student their own workspace, or use scoped tokens (read-only GitHub fine-grained PATs, scoped Notion integrations, etc.).
- **Hardcoded secrets are visible to the agent.** Vault credentials are injected by the proxy and never enter the sandbox. But anything passed via environment variables, mounted files, or the system prompt is fully visible to the agent — and therefore to any successful prompt injection. Teach students "vaults yes, env vars no."
- **"Knowledge base" goes stale.** A common conceptual mistake: students bake the course catalog into the system prompt at the start of the term and forget about it. Build assignments that require the student to demonstrate either a refresh workflow or a file-mount pattern that points at an updatable source.
- **Date staleness.** Without an explicit date in the system prompt, agents have been observed searching for outdated material (e.g., searching for "AI news in 2025" in a 2026 demo). Add `The current date is {today}.` to every system prompt.

### 4. Educational Context

**Suitability across technical abilities.** The Console "Prototype in Console" flow is genuinely usable by students with no prior backend experience: pick a model, type a prompt, toggle tools, click Create. The visual session runner gives them immediate, legible feedback — they don't need to understand SSE or the Messages API to see their agent work. For an instructor, this means the first two weeks of CSC-114 can be entirely in the Console (no Python yet), with the back half of the term promoting to SDK code using the agent and environment IDs they already created.

The hard prerequisite is **prompt engineering discipline**, not coding. The students who struggle with Managed Agents are not the ones who can't write JSON — they're the ones who write a vague system prompt and then complain that the agent "hallucinates." Recommended pre-work: Anthropic's free "Introduction to agent skills" and "Introduction to subagents" courses on Skilljar (anthropic.skilljar.com), plus their prompt-engineering tutorial.

**Setup students need:**
1. A Claude Console account (`platform.claude.com`) + phone-verified $5 trial credit.
2. A funded billing relationship OR an instructor-issued API key (preferred for a class — see below).
3. For SDK work in the back half of the course: Python 3.10+ with a beta-supporting version of the `anthropic` SDK, or Node 18+ with `@anthropic-ai/sdk`. Optionally the `ant` CLI (Homebrew or curl install).
4. Optional but recommended: a free Firecrawl/Tavily key for web-grounded agents, a free Notion or GitHub OAuth app for MCP exercises.

**Free / educational pricing options (as of May 2026):**
- **No dedicated free tier for Managed Agents specifically.** Standard $5 API trial credits apply to all new accounts.
- **No published student discount on Pro/Max chat plans** (those are consumer plans and don't grant API access anyway).
- **Claude Builder Clubs** — Anthropic-supported student clubs that bundle Pro access + monthly API credits (the University of Florida club, for example, gives members unlimited Pro + $50/month in API credits). If your campus has one, students can plug in for free.
- **Claude Campus Ambassadors** — Anthropic-supported student program with Pro + API credits; applications are cohort-based.
- **AWS Educate → Amazon Bedrock → Claude.** AWS Educate is free for verified students and includes AWS credits that work with Bedrock-hosted Claude. Managed Agents specifically is also offered on the **Claude Platform on AWS** (billed in Claude Consumption Units at $0.01/CCU through AWS Marketplace) — a useful path if your institution already has AWS Educate. Some Managed Agents features differ on AWS; verify your specific assignment works there.
- **Anthropic Research Credit Program / institutional agreements** — Anthropic offers university-wide plans negotiated with the institution, not the individual student. Worth a call to Anthropic sales or your campus IT before the semester starts.
- **Stacking startup/hackathon programs** is a documented strategy on third-party sites (e.g., AI Perks, which aggregates programs), but those are not student-specific and require eligibility most undergrads won't have.

**Recommended classroom setup.** Create a single Anthropic organization for the course, then either: (a) one workspace per student with a hard monthly spend limit set at the org level (workspace caps cannot exceed org caps), and the instructor as admin on each; or (b) one shared workspace with per-student API keys and tag-based usage attribution via the `metadata` field on agents. Option (a) is cleaner for grading and budget enforcement; option (b) is simpler to set up. Watch the org-level Usage and Cost dashboard weekly.

## Recommendations

**For the first lecture (CSC-114 week 1):**
1. Demo the Console quickstart end-to-end live, including the MCP networking gotcha (deliberately leave outbound blocked, hit the error, then fix it). Students will remember the error.
2. Hand out three things: a one-page "model selection" cheat (Sonnet 4.6 default, Haiku 4.5 if simple, Opus 4.7 only if Sonnet fails), a system-prompt template that includes the current-date placeholder, and a screenshot tour of the sidebar (Agents/Environments/Sessions/Vaults/Skills/Files).
3. Require Sonnet 4.6 for the first assignment. Don't let students burn budget on Opus until they have a working baseline.

**Assignment design:**
- Start in the Console; promote to SDK in the second half. Have students submit both the Console agent ID + version AND the equivalent Python.
- For an academic-advising bot, mount a catalog PDF via the Files API, use file-read tools + Skills (the prebuilt `pdf` skill), and require an MCP integration with a simple read-only Google Sheets connector for prerequisite data.
- For a subnetting bot, no MCP needed — pure system prompt + `bash` tool. Grade on correctness of CIDR math and refusal behavior on invalid IPs.
- Require students to set `permission_policy: require_confirmation` on `bash` in any agent that touches external systems. Build the "approve tool call" habit early.

**Budget and access:**
- Budget $5–15 per student per semester at Sonnet 4.6 with prompt caching; double that if you allow Opus 4.7 for the final project. For a 30-student class, $300–500 in API credits is enough for a full term.
- Apply now for institutional credits via Anthropic education / sales. If denied, route the class through AWS Educate → Bedrock — same models, same Managed Agents (with some feature deltas).
- Set a per-workspace spend cap at $20–30; cheaper than refunding emergency overages.

**Triggers to change recommendation:**
- If Managed Agents leaves beta and changes the beta header / endpoints mid-semester, pause student-facing assignments and pin a known-working SDK version.
- If your class needs RAG over hundreds of documents, Managed Agents is the wrong primitive — pair it with an external vector store via custom MCP, or switch to the Claude Agent SDK where you control retrieval.
- If you need cross-model comparisons or off-Claude flexibility, use the Messages API or an open framework (LangGraph, CrewAI) instead — Managed Agents is Claude-only.

## Caveats

- The platform is **public beta** (launched April 8, 2026). The beta header `managed-agents-2026-04-01` is mandatory; Anthropic explicitly warns behavior may change between releases. Re-verify the quickstart in week 0 of each new term.
- Several capability claims circulating in the community originate from third-party SEO/affiliate posts rather than Anthropic. The most reliable primary sources are `platform.claude.com/docs/en/managed-agents/*`, `claude.com/blog/claude-managed-agents`, and `anthropic.com/engineering/managed-agents`. Anthropic's "10x faster to production" and "+10 points on structured file tasks" come from Anthropic's own internal testing and should be presented to students as marketing/vendor benchmarks, not independent measurements.
- One concrete conflict in the public record: Anthropic's docs list per-org rate limits as **300 RPM (create)** and **600 RPM (read)**, while WaveSpeed's launch-week guide cited **60 RPM** on creates. I have used the docs figure; verify before scaling a class of >30 to simultaneous deploys.
- "Dreaming," self-evaluating "Outcomes," and "Multiagent" coordination are research-preview features requiring separate access requests, and Anthropic's announced May 2026 dev-day features (Claude Finance, Microsoft add-ins) may not be available to a standard educational account.
- Pricing figures (token rates, $0.08/session-hour, $10/1k web searches, 50 free code-execution hours/day per org) are current as of May 14, 2026 and are explicitly described by Anthropic as beta-era pricing that may change at GA.
- Managed Agents is currently Claude-only. Building course infrastructure on it is a one-vendor commitment; if Anthropic deprecates a model or changes pricing, migration is non-trivial.
- All "what the Console looks like" details in this report are sourced from Anthropic's docs and from third-party walkthroughs from April–May 2026 (Firecrawl, AI Blew My Mind, azukiazusa.dev, BetterStack, Pluto Security, hi120ki, WaveSpeed); the UI may have shifted by the time of class.