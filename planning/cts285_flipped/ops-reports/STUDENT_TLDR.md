# Student TL;DR — Teach Your Agent The Flow

**What you're doing:**
- You've done the Sacred Flow by hand (Issue → branch → commit → PR). Now you teach a coding agent to do the boring parts.
- Practice: tell a CLI (Claude Code, or Codex/Gemini) to open an Issue + PR for a throwaway change. **You** read the diff and merge.
- Apply: write a short brief for an agent *you'd* want to build. Have the AI draft user stories + a design from it.
- Assess: read those drafts as the *customer* and judge if they're actually what you wanted.

**Why:**
- As the course gets harder, the Flow gets *cheaper* if the agent runs the ceremony.
- The agent is fast but often confidently wrong — your job is to catch it. That judgment is the whole point.
- The corpus you write becomes the first draft of your Module 8 capstone.

**The rules:**
- The agent opens the Issue and PR. **You always merge.** Never let the bot merge `main`.
- 50 pts · self-graded (awarded by default on completion) — finish the work plus the interactive "TB-TV" walkthrough and award yourself the 50. Doesn't gate anything. Be honest with yourself.
- Need: a repo, one CLI, and `gh auth login` working. No preference? Use Claude Code.

**The whole module in one sentence:** Hand the Flow's mechanics to an agent, keep the merge and the judgment for yourself.
