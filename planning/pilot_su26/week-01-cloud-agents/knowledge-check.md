Quiz title: Week 1 Knowledge Check — Cloud Agents
Quiz description: Vocabulary check for the Cloud Agents module — chatbot vs assistant vs agent, the Console, the five-section system prompt, testing discipline, and tool rationale. Unlimited attempts; the goal is mastery, not test-taking. Read the explanations on anything you miss.


1.  What's the most important distinction that makes a Claude Managed Agent an "agent" rather than a "chatbot"?
*a) The agent can use tools to take actions and decide what to do next, not just respond to messages.
b)  The agent has a longer memory than a chatbot.
c)  The agent runs on more expensive hardware.
d)  The agent uses a different programming language.
... Chatbots respond to messages — they take input, produce output, no autonomous action. Agents have agency: they can use tools (search a knowledge base, query an API, read a file, run code), make decisions about which tool to call, observe results, and decide what to do next. Memory and hardware aren't the distinguishing features; the ability to act in the world is.


2.  What does the "system prompt" of your agent actually do?
a)  It's the greeting the agent shows users when a session starts.
*b) It's the persistent instructions the agent reads at the start of every session — its identity, what it knows, how to behave, what not to do.
c)  It's the API endpoint the agent calls to fetch responses.
d)  It's only used for testing — the production agent ignores it.
... The system prompt is your agent's "always-true" context. The model reads it before any user message and treats it as authoritative. This is where you specify who the agent is, what it knows, what tone to use, what's off-limits, and how to handle unknowns. A weak system prompt is the most common cause of an agent misbehaving — strong system prompts are the difference between "neat demo" and "useful tool."


3.  When you enable a "tool" for your agent (like web search or file access), what does that actually let the agent do?
a)  It lets the user manually run those tools alongside the agent.
b)  It changes the model from Claude to a different one.
*c) It gives the agent the ability to call that tool autonomously when it decides the tool is needed — the agent invokes the tool and reads the result.
d)  It speeds up the agent's response time.
... Tools are how an agent acts beyond just generating text. When a tool is enabled, the agent can choose — based on the user's request — to call that tool, wait for the result, read it, and incorporate it into its next response. The agent decides *when* to use a tool, not the user. That choosing-when-to-act is what "autonomous action" means in practice.


4.  You want to create your first Claude Managed Agent in the Console. Where do you start?
a)  Settings → Add API Key.
*b) Agents → New Agent.
c)  Sessions → Create Session.
d)  Models → Configure Claude.
... New Agent is created from the Agents section in the left sidebar of the Console. You give it a name, pick a model (Claude Sonnet 4.6 for this course), write a system prompt, and decide which tools it can access. Sessions come after — a session is one conversation with an already-created agent. Settings is for account-level configuration like API keys.


5.  For all CSC-114 work, you must use the `claude-sonnet-4-6` model when creating agents. Why does the course mandate a specific model rather than letting you choose?
a)  It's the only model that can run in the Claude Console.
*b) Different models have different costs, speeds, and capabilities. Mandating one model means everyone's results are comparable — when a classmate's agent works and yours doesn't, the model isn't the variable.
c)  `claude-sonnet-4-6` has the longest context window of any AI model.
d)  Other models would refuse to follow course instructions.
... Multiple Claude models are available (Haiku, Sonnet, Opus, different generations) — each with different tradeoffs in speed, capability, and cost per token. For a class where students compare results, debug each other's agents, and build a shared mental model, fixing the model removes a confounding variable. Once you're comfortable, exploring different models is a great extension exercise — but during the structured part of the course, consistency is the goal.


6.  In the 5-section system prompt template (Identity → Behavioral Constraints → Domain Knowledge → Output Format → Context), what's the job of the *Identity and Role* section?
a)  It lists every tool the agent can use.
*b) It tells the agent what it is and who it serves — e.g., "You are a helpful information assistant for the Math department at FTCC."
c)  It records what tests have been run on the agent.
d)  It controls the agent's response speed.
... Identity is the anchor for everything else. By stating "You are X, serving Y," you establish the agent's frame of reference, which influences tone, scope, and what counts as in-domain. A clear identity makes the agent better at saying "that's outside my area" rather than hallucinating answers about things it shouldn't speak to.


7.  Why does the 5-section system prompt template include a *Behavioral Constraints* section with rules like "Never make up information" and "If you don't know, say so"?
a)  To make the agent's responses shorter.
b)  To prevent the agent from learning anything new during a session.
*c) To set explicit limits on what the agent will and won't do — turning vague "be helpful" instincts into concrete rules the model can follow consistently.
d)  To make the agent grammatically correct.
... Without explicit constraints, agents default to "be helpful" — which often means making something up when they're uncertain. Behavioral Constraints flip that default: "When uncertain, say so — don't guess." Once you state the rule clearly, the model has something to follow. Vague good intentions aren't enough; specific rules are.


8.  What's the *Domain Knowledge* section in a 5-section system prompt for?
a)  A list of every fact the agent might ever encounter.
b)  The agent's chat history from previous sessions.
*c) The specific facts the agent should treat as authoritative — the office hours, the procedures, the people, the URLs that are part of the agent's expertise.
d)  A list of competing agents you should beat.
... Domain Knowledge is where you embed the agent's "expert" content — the things you want it to know and answer from, rather than guess at. For a Math department info bot, that's the chair's name, office hours, course numbers, etc. Rule of thumb: if a student would ask about it and the answer is stable, it goes here. If the answer is dynamic (changes daily), use a tool instead.


9.  You're testing your agent and want to figure out why it's giving an unhelpful answer. What does the "one-change-rule" tell you to do?
a)  Restart the entire agent from scratch every time.
*b) Change exactly one thing (one section of the system prompt, one tool setting, one wording) at a time, then test again — so you know what caused any change in behavior.
c)  Test the agent only once, then deploy.
d)  Always change all five sections of the system prompt together.
... This is the same discipline as a controlled experiment. If you change the identity, the constraints, and the domain knowledge all at once and the agent behaves differently, you don't know which change caused the difference. Change one thing, observe, then decide whether to keep it. This habit is the most useful thing you'll build this term — and it generalizes far beyond agents.


10. You're running a test session on your agent. Which of the following makes the session most useful to learn from later?
a)  Sending one quick "Hello!" message and seeing if the agent responds.
b)  Sending random unrelated questions to see how the agent handles them.
*c) Sending a small set of planned questions (some you expect to work, some edge cases), recording the agent's exact responses, and noting your observations alongside each one.
d)  Letting a friend chat with the agent without watching what they say.
... A useful test is one you can compare to a future test. That means writing down what you sent, what came back, what surprised you, and what you'd change. Random poking might surface a problem but doesn't help you reason about it. Disciplined logging turns each session into evidence — and evidence is what the one-change-rule depends on.


11. Your agent is a Math department info bot. The Console offers tools like web search, file access, and code execution. Why might you disable some of these tools rather than turn them all on?
a)  Disabled tools save you money on Claude API charges.
*b) Tools the agent doesn't need are extra surface area — they let the agent answer questions it shouldn't, make decisions about tools it wasn't designed for, and behave unpredictably. Least-privilege agents are easier to reason about and test.
c)  Canvas requires every agent to use exactly two tools.
d)  Disabled tools make the agent's responses longer.
... "Least privilege" is the principle: give the agent exactly the tools it needs to do its job, nothing more. If your info bot doesn't need to run code, code execution is just a way for it to surprise you. The fewer tools, the smaller the space of things the agent can do — which means easier debugging, more predictable behavior, and fewer ways for things to go wrong. (Cost is real but secondary; the main reason is predictability.)


12. An agent has every Console tool enabled by default — web search, code execution, file access, image generation, the lot. What's the most likely failure mode?
a)  The agent runs out of memory.
*b) The agent answers off-topic questions (because it has the tools to do so), takes unintended actions, or invents elaborate solutions when a simple "I don't know" would have been correct.
c)  The agent refuses to answer any questions at all.
d)  The agent shuts itself down for safety.
... When an agent has every tool, every user request looks like a problem it can solve — even if it shouldn't. Asked about the weather? It'll search the web. Asked to write code? It'll fire up code execution. The result is an agent that drifts from its purpose, takes actions you didn't expect, and gives confident answers in domains it has no business addressing. Scoping tools deliberately is a guardrail.


13. This Knowledge Check (and others like it in CSC-114) allows unlimited attempts. What's the main reason for that?
a)  To make grades higher than they otherwise would be.
b)  Because the quiz is easy and one attempt is enough.
*c) To make the quiz a learning tool — you can try, read the explanation when you miss something, look it up, and try again — rather than a one-shot assessment.
d)  Because the instructor doesn't have time to grade re-takes.
... Knowledge checks here are calibration, not gating. If you miss a question, the explanation tells you exactly what was being asked and why your answer was off — go back to the reading, fix the gap, and retake. That loop (try, fail, learn, retry) is what builds understanding. Save the test anxiety for assessments that actually need it; here, your goal is mastery, not test-taking.
