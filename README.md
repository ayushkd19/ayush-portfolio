# Ayush Kumar (AYUSH KD) — B.Tech ECE Developer Portfolio

A modern, high-contrast, tactile developer portfolio designed with an **editorial field-notebook & print technical aesthetic** inspired by [Sujal Chaudhary's portfolio (sujal.info)](https://www.sujal.info/).

Customized specifically for an **Electronics & Communication Engineering (ECE)** student bridging low-level microcontroller firmware (ESP32, Arduino, C/C++) with modern automation scripts, blockchain data verification, and web dashboards.

---

## 🎨 Design System & Color Palette (Referenced from `sujal.info`)

- **Paper Canvas (`--paper`)**: `rgb(247, 246, 241)` (`#f7f6f1`) — Warm tactile editorial paper.
- **Print Ink (`--ink`)**: `rgb(26, 28, 35)` (`#1a1c23`) — Sharp, crisp high-contrast print typography and borders.
- **Cobalt Blue (`--blue`)**: `rgb(37, 71, 244)` (`#2547f4`) — Signature electric technical blue for primary CTAs, active badges, and interactive markers.
- **Red Notebook Margin (`--red`)**: `rgb(217, 72, 43)` (`#d9482b`) — Vertical rule line along the left margin and hand-drawn SVG loop highlights.
- **Muted Charcoal (`--muted`)**: `rgb(80, 84, 95)` (`#50545f`) — Clean, readable body copy and technical metadata.
- **Tactile Shadows (`shadow-print`)**: Solid hard drop-shadows (`shadow-[4px_4px_0_0_#1a1c23]`) with interactive physical button-press indentation on hover/active.

---

## ⚡ Key Highlights in This Version

1. **Prominently Highlighted Name Line**:
   - High-contrast black print stamp: `AYUSH KUMAR` with blue print drop-shadow.
   - Distinct cobalt badge: `AYUSH KD`.
   - Balanced ECE subtitle: *"B.Tech ECE · Hardware & Software Systems"*.
2. **Re-engineered Hero Section**:
   - Headline: *"I like working on new & innovative ideas and engineering them into bare-metal & cloud reality."*
   - Hand-drawn SVG marker loop around *"new & innovative ideas"*.
   - Right-hand technical Polaroid figure card with live telemetry specs and an annotated *"that's me"* arrow.
3. **Marquee Ticker Ribbon**:
   - Animated continuous ticker dividing sections with `✳` asterisk markers.
4. **Floating Translucent Tech Stack**:
   - Tactile cards for **Python**, **C Programming**, **AutoCAD**, **Photoshop**, and **Git**.
5. **Editorial "Field Notes" About Section**:
   - Alternating story rows with figure captions (`fig. 01 — the developer`, `fig. 02 — academic foundation`, etc.).
   - 4-step first-principles problem-solving framework.
   - Live research and learning areas.
6. **"Toolbox" Skills Section**:
   - Categorized into Programming, Hardware & IoT, Developer Tools, and Design/CAD.
7. **"Build Log" Projects Section**:
   - Interactive modal popup with full pinout specs, software architecture, and benchmark metrics.

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd C:\Users\Ayush\.gemini\antigravity\scratch\ayush-portfolio

# Start the development server
npm run dev
```

Visit `http://localhost:3000` (or the port Vite outputs) in your browser.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── BackgroundEffects.jsx   # Notebook paper grid, left red margin line & pencil doodle
│   ├── Navbar.jsx              # Fixed header with tactile links & rotating star accent
│   ├── Hero.jsx                # Highlighted name line, SVG marker loop, CTAs & figure
│   ├── FloatingTechStack.jsx   # Tactile cards (Python, C, AutoCAD, Photoshop, Git)
│   ├── About.jsx               # Editorial field notes, education, approach & stats
│   ├── Skills.jsx              # Toolbox with category filters & level badges
│   ├── Projects.jsx            # Build log with live demo links & deep-dive triggers
│   ├── ProjectModal.jsx        # Architecture, protocols & benchmark modal
│   ├── Contact.jsx             # Open line form with 1-click email copy & confetti
│   └── Footer.jsx              # Minimalist editorial footer with back-to-top button
├── data/
│   └── portfolioData.js        # Centralized text, projects, and skills data
├── App.jsx                     # Top-level composition
├── index.css                   # Tailwind directives & CSS variables
└── main.jsx                    # Application entry
```
