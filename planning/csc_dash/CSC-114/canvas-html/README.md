# CSC-114 Canvas HTML Pages
## Interactive Module Pages for Canvas LMS

**Created**: January 14, 2026
**Course**: CSC-114 Artificial Intelligence I
**Instructor**: Drew Norris
**Designer**: Angela Westmoreland

---

## Purpose

These HTML pages are designed to be **copied directly into Canvas** as module overview pages. They provide:

✅ Interactive, visually appealing module introductions
✅ Print-friendly formatting for physical syllabi
✅ Consistent branding and structure across all 8 modules
✅ Collapsible sections for better organization
✅ Clear PM integration highlights
✅ Drew's authentic voice and teaching philosophy

---

## Completed Pages

| Module | Status | File | Notes |
|--------|--------|------|-------|
| **Module 1** | ✅ Complete | `Module_01_Canvas_Page.html` | ML setup + User stories intro |
| Module 2 | 🚧 Template ready | (create using template below) | Supervised learning + Estimation |
| **Module 3** | ✅ Complete | `Module_03_Canvas_Page.html` | **FIRST SPRINT** - Evaluation |
| Module 4 | 🚧 Template ready | (create using template below) | AI Agents + Sprint 2 |
| Module 5 | 🚧 Template ready | (create using template below) | Neural Networks + Sprint 3 |
| Module 6 | 🚧 Template ready | (create using template below) | Computer Vision + Ethics |
| Module 7 | 🚧 Template ready | (create using template below) | NLP + Sprint 5 |
| **Module 8** | 🚧 Template ready | (create using template below) | Capstone + Presentation |

---

## How to Use These Pages in Canvas

### Step 1: Access the HTML File
1. Open the desired module HTML file in a code editor or browser
2. Copy the entire HTML content (Ctrl+A, Ctrl+C)

### Step 2: Create Canvas Page
1. In Canvas, go to Pages → + Page
2. Name it: "Module X Overview" or "Module X: [Title]"
3. Switch to HTML editor (<> icon)
4. Paste the copied HTML

### Step 3: Update Course-Specific Links
Replace placeholder links with actual Canvas links:
- `[COURSE_ID]` → Your Canvas course ID
- `[ASSIGNMENT_ID]` → Actual assignment IDs
- `[FILE_ID]` → Uploaded file IDs
- `[QUIZ_ID]` → Quiz IDs

### Step 4: Publish
- Preview to verify formatting
- Publish the page
- Link from module overview

### Print/Copy Button
Each page includes a print button (🖨️) that:
- Hides interactive elements for clean printing
- Formats content for PDF export
- Allows easy copy/paste into other LMS platforms

---

## Design Pattern & Template

All CSC-114 module pages follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Module-specific title -->
    <!-- Shared CSS (gradient headers, cards, badges) -->
    <!-- Print styles -->
</head>
<body>
    <!-- Print Button -->
    <!-- Module Header (gradient with meta info) -->
    <!-- Learning Objectives -->
    <!-- Week Timeline / Sprint Timeline -->
    <!-- PM Integration Highlight (if applicable) -->
    <!-- Assignments Section -->
    <!-- Technical Content Preview -->
    <!-- Checklist -->
    <!-- Tips & Warnings -->
    <!-- Drew's Note (personal message) -->
    <!-- Process Grading Details -->
    <!-- Footer (CTA buttons) -->
</body>
</html>
```

---

## Module Template (Copy & Customize)

Use this template to create remaining modules:

### Module Information Needed:

**Module 2: Supervised Learning (Weeks 3-4)**
- Theme: Classification and regression + Story point estimation
- Points: 50 (2 × 25pt assignments)
- PM Integration: Story point estimation, velocity tracking intro
- Technical: Classification (spam detection), Regression (price prediction)
- CLOs: CLO1 (Implement ML), CLO5 (Document)

**Module 4: AI Agents (Weeks 7-8)**
- Theme: Autonomous agents + Sprint 2
- Points: 75 (50pt sprint + 25pt retro)
- PM Integration: Sprint 2, improved practices from Sprint 1 retro
- Technical: AI agent design, decision-making algorithms
- CLOs: CLO3 (Design agents), CLO5 (Document)

**Module 5: Neural Networks (Weeks 9-10)**
- Theme: Deep learning + Sprint 3 (PM becomes habitual)
- Points: 75 (single sprint assignment)
- PM Integration: Sprint 3, autonomous execution expected
- Technical: TensorFlow/Keras, backpropagation, gradient descent
- CLOs: CLO1 (Implement ML), CLO2 (Evaluate)

**Module 6: Computer Vision (Weeks 11-12)**
- Theme: Image classification + Ethics
- Points: 75 (single sprint assignment)
- PM Integration: Sprint 4, ethical considerations integrated
- Technical: CNNs, transfer learning, pre-trained models
- CLOs: CLO1 (Implement), CLO4 (Analyze ethics)

**Module 7: NLP & Text Processing (Weeks 13-14)**
- Theme: Natural language processing + Sprint 5
- Points: 75 (single sprint assignment)
- PM Integration: Sprint 5, performance optimization focus
- Technical: Text processing, sentiment analysis, text classification
- CLOs: CLO1 (Implement ML), CLO2 (Evaluate)

**Module 8: Capstone & Portfolio Defense (Weeks 15-16)**
- Theme: Integration project + Process portfolio
- Points: 175 (100pt capstone + 75pt presentation)
- PM Integration: Sprint 6, process portfolio (shows PM growth across semester)
- Technical: Multi-technique ML project, professional presentation
- CLOs: All CLOs (CLO1-CLO5)

---

## Color Scheme by Module

| Module | Primary Color | Gradient | Theme |
|--------|--------------|----------|-------|
| 1 | Blue (#1e88e5) | Blue gradient | Foundation & Setup |
| 2 | Purple (#7e57c2) | Purple gradient | Supervised Learning |
| 3 | Green (#43a047) | Green gradient | **First Sprint** |
| 4 | Teal (#00897b) | Teal gradient | AI Agents |
| 5 | Deep Orange (#f4511e) | Orange gradient | Neural Networks |
| 6 | Indigo (#3949ab) | Indigo gradient | Computer Vision |
| 7 | Pink (#d81b60) | Pink gradient | NLP |
| 8 | Deep Purple (#5e35b1) | Purple gradient | Capstone |

---

## Badge System

### Points Badge
```html
<span class="points-badge">25 points</span>
```
- Green (#4caf50)
- Indicates assignment point value

### Sprint Badge
```html
<span class="sprint-badge">Sprint Assignment</span>
```
- Orange (#ff9800)
- Indicates 2-week sprint deliverable

### PM Badge
```html
<span class="pm-badge">PM: 30%</span>
```
- Purple (#9c27b0)
- Shows percentage of process grading

### Due Date Badge
```html
<span class="due-date">Due: Friday, Week X</span>
```
- Orange (#ff9800)
- Clear deadline indication

---

## Key Features

### 1. Responsive Design
- Mobile-friendly layouts
- Collapsible sections on small screens
- Print-optimized styling

### 2. Accessibility
- High contrast color combinations
- Clear heading hierarchy
- Semantic HTML structure
- Screen reader compatible

### 3. Interactive Elements
- Hover effects on assignment cards
- Print button functionality
- Expandable sections (if needed)

### 4. Consistent Branding
- "Drew's voice" in personal notes
- Process-first philosophy emphasized
- PM integration clearly highlighted
- Authentic teaching approach

---

## Content Blocks Explained

### Module Header
- Gradient background (module-specific color)
- Module number, title, theme
- Meta information: duration, points, dates

### Learning Objectives
- Light background matching module color
- MLOs (Module Learning Outcomes)
- Linked CLOs (Course Learning Outcomes)

### PM Integration Highlight
- Purple/pink background (#f3e5f5)
- Explains specific PM concepts introduced
- "Why it matters" rationale
- Builds toward capstone autonomy

### Assignment Cards
- White cards with hover effects
- Clear structure: title, meta, what you'll do, skills
- Multiple CTA buttons (view, download rubric, template)

### Timeline (Sprint Modules)
- Visual day-by-day breakdown
- Numbered markers
- Content boxes with clear actions

### Checklists
- Orange/yellow theme (#fff3e0)
- Checkbox-style bullets
- Complete task list for module

### Tip Boxes (Green)
- Drew's practical advice
- Survival guides for difficult modules
- Time-saving strategies

### Warning Boxes (Red)
- Common pitfalls
- Things that trip students up
- "Don't do this" warnings

### Drew's Note
- Yellow/cream background (#fff8e1)
- Personal, authentic voice
- Honest talk about difficulty
- Encouragement and support

---

## Maintenance & Updates

### When to Update Pages:
- ✏️ Assignment point values change
- 📅 Due dates shift
- 🔗 Canvas links need updating
- 📊 Rubrics revised
- 💡 New tips/warnings from student feedback

### Version Control:
- Keep HTML files in Git
- Document changes in commit messages
- Test in Canvas before publishing updates

---

## Creating New Module Pages

1. **Copy Module 1 or Module 3 as base** (depending on sprint vs. non-sprint)
2. **Update module-specific info**:
   - Title and theme
   - Color scheme (CSS gradient)
   - Learning outcomes
   - Assignment details
3. **Customize PM integration** section
4. **Write Drew's Note** (authentic voice, module-specific advice)
5. **Update checklist** with module tasks
6. **Test print functionality**
7. **Upload to Canvas and link assignments**

---

## Quick Reference: Drew's Voice

**Characteristics**:
- ✅ Honest about difficulty ("This is hard")
- ✅ Process-focused ("How you work matters")
- ✅ Encouraging without coddling ("You'll struggle, and that's learning")
- ✅ Industry-connected ("Employers care about this")
- ✅ Slightly informal ("Don't freak out")
- ✅ Specific advice ("Set a phone reminder for standups")

**Avoid**:
- ❌ Generic motivational speak ("You can do it!")
- ❌ Overly academic tone ("Pursuant to the requirements...")
- ❌ Condescension ("This is easy if you just...")
- ❌ Vague platitudes ("Try your best")

---

## Status & Next Steps

**✅ Completed**:
- Module 1 (Foundation)
- Module 3 (First Sprint)
- Template structure documented
- Color scheme defined
- Content blocks standardized

**🚧 To Do**:
- Create Modules 2, 4, 5, 6, 7, 8 (use template above)
- Test all pages in Canvas environment
- Gather student feedback after first semester
- Refine based on usage patterns

**📊 Metrics to Track** (after launch):
- Page views per module
- Time spent on page (Canvas analytics)
- Print/download frequency
- Student feedback on clarity

---

## Technical Notes

### Browser Compatibility
- ✅ Chrome/Edge (primary Canvas browsers)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (not supported by Canvas)

### File Size
- Keep images minimal (use emoji instead when possible)
- Inline CSS for Canvas compatibility
- Each page ~15-25KB (fast loading)

### Canvas Quirks
- Some CSS may be stripped by Canvas security
- Test after pasting to verify formatting
- External links should use `target="_blank"`
- Avoid JavaScript beyond simple functions (print button OK)

---

## Credits

**Design Pattern**: Adapted from CSC-113 Canvas pages
**Color Scheme**: Custom for CSC-114 (ML theme)
**Content**: Drew Norris (instructor voice), Angela Westmoreland (structure)
**Inspiration**: Balancing technical rigor with accessibility

---

**Last Updated**: January 14, 2026
**Course Completion**: 100%
**Canvas Integration**: Ready for implementation
