<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" width="72" alt="Airbnb Belo Logo" />

# ✈️ Airbnb Clone

**A full-featured, pixel-perfect recreation of the Airbnb platform — crafted with clean code, modern architecture, and exceptional attention to detail.**

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br/>

[🌐 Live Demo](#) · [🐛 Report Bug](#) · [💡 Request Feature](#)

---

</div>

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [👥 Contributors](#-contributors)
- [📐 Code Standards](#-code-standards)
- [📄 License](#-license)

---

## 🏡 About The Project

> *"Belong Anywhere"* — and so should great code.

This project is a **high-fidelity clone of Airbnb**, built from the ground up as a collaborative frontend development exercise. The goal was not just to replicate the visual design, but to mirror the **interaction design**, **scroll behaviours**, **responsive layouts**, and **component architecture** that make Airbnb one of the world's most polished web products.

Every pixel, transition, and micro-interaction was implemented with care — from the two-state sticky header that morphs from a full search bar into a compact pill on scroll, to the property card gallery with image cycling, skeleton loading shimmer, and wishlist persistence.

<br/>

---

## ✨ Features

### 🔍 Smart Search Experience
- **Two-state header** — a full `Where / When / Who` search bar at the top that smoothly transitions into a compact pill on scroll, exactly matching the real Airbnb experience
- Live destination search field with clean UX focus states

### 🏠 Home Page
- **Category filter bar** — sticky, scrollable, with 10+ property categories and icon-per-item design
- **"Popular Homes in Paris"** section with a 6-column responsive property grid
- **"Featured Hotels in Paris"** section with curated hotel cards
- Section navigation arrows matching the original carousel controls

### 🃏 Property Cards
- **Square-ratio image** containers with smooth hover zoom
- **"Guest Favourite"** and **"Luxe"** badges overlaid on images
- **Heart wishlist button** with save/unsave animation and `localStorage` persistence
- **Image gallery** — hover to reveal dot pagination and prev/next arrow navigation that cycles through multiple room photos
- **Skeleton shimmer** loading animation that fades out once images load
- **Staggered entrance animation** powered by `IntersectionObserver`

### 🌓 Dark / Light Mode
- Full dark theme with smooth CSS variable transitions
- Preference saved in `localStorage` and synced with OS `prefers-color-scheme`
- Theme toggle button in both header states (full & compact)

### 📱 Fully Responsive
- Grid adapts from **6 columns → 4 → 3 → 2 → 1** across all breakpoints
- Header and search bar reflow gracefully on tablet and mobile

### 🔐 User Menu
- Animated profile + hamburger dropdown with keyboard (`Escape`) and click-outside dismissal
- Full ARIA attributes for accessibility

<br/>

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic HTML5 with full ARIA accessibility attributes |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Modular CSS with custom properties (CSS Variables) for theming |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Vanilla ES6+ — zero dependencies, maximum performance |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Circular Std — Airbnb's signature typeface |
| ![Unsplash](https://img.shields.io/badge/Unsplash-000000?style=flat-square&logo=unsplash&logoColor=white) | High-quality property photography via Unsplash API |
| ![LocalStorage](https://img.shields.io/badge/LocalStorage-FF9900?style=flat-square&logo=databricks&logoColor=white) | Client-side persistence for theme & wishlist preferences |

<br/>

---

## 📁 Project Structure

```
airbnb-clone/
│
├── 📄 index.html               # Home Page
├── 📄 search.html              # Search Results Page
├── 📄 details.html             # Property Details Page
├── 📄 profile.html             # User Profile Page
├── 📄 settings.html            # User Account settings
│
├── 📂 styles/
│   ├── nav.css                 # nav styles 
│   ├── base.css                # CSS reset, :root variables, dark theme
│   ├── layout.css              # Global layout utilities (.container, grid)
│   └── pages/
│       ├── home.css            # Home page specific styles
│       ├── search.css          # Search page styles
│       ├── details.css         # Property details styles
│       └── profile.css         # Profile page styles
│       └── settings.css        # settings page styles
│
├── 📂 scripts/
│   ├── main.js                 # Global logic: scroll, theme, dropdowns
│   └── pages/
│       ├── home.js             # Home: wishlist, gallery, animations
│       ├── search.js           # Search: filters, map toggle
│       ├── details.js          # Details: image viewer, booking widget
│       └── profile.js          # Profile: tabs, settings
│       └── settings.js         # settings: 
│
└── 📂 assets/
    └── images/                 # Static assets
```

<br/>

---

## 🚀 Getting Started

Getting the project up and running locally takes less than a minute.

### Prerequisites

All you need is a modern web browser. No build tools, no package managers, no configuration.

```
✅ Google Chrome / Firefox / Safari / Edge (latest)
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Mahmoud-B-Miqdad/airbnb-clone.git
```

**2. Navigate to the project directory**

```bash
cd airbnb-clone
```

**3. Open in your browser**

```bash
# Option A — Simply open the file
open index.html

# Option B — Serve locally with VS Code Live Server (recommended)
# Install the "Live Server" extension, then right-click index.html → Open with Live Server

```

<br/>

---

## 👥 Contributors

This project was built collaboratively by a team of four dedicated developers. Each member owned a complete page end-to-end — from HTML structure to CSS styling to JavaScript interactions.

<br/>

<div align="center">

| 👤 Name | 🎯 Role | 📄 Page | 🔧 Responsibilities |
|--------|---------|---------|-------------------|
| **Mahmoud Miqdaq** | FullStack Developer | 🏠 Home Page | Header scroll transitions, property grid, dark mode, card gallery animations |
| **Marwa Tanani** | FullStack Developer | 🔍 Search Page | Search filters, results grid, map integration, sort & filter UI |
| **Noor Shurrab** | FullStack Developer | 🏡 Property Details | Image viewer, booking widget, reviews section, host profile card |
| **Dania Isaed** | FullStack Developer | 👤 Profile Interface | User profile tabs, trip history, wishlist management, settings panel |

</div>

<br/>

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

> ⚠️ **Disclaimer:** This project is a **frontend learning exercise** and is not affiliated with, endorsed by, or connected to Airbnb, Inc. in any way. All Airbnb trademarks, logos, and brand assets belong to their respective owners.

---

<div align="center">

**Built with ❤️ by Mahmoud, Marwa, Noor & Dania**

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*

</div>
