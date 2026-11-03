# ⚡ Sports Club — Premier Athletic Club & High Performance Center

A cutting-edge, ultra-responsive, modern frontend web application built for **Sports Club**. Featuring high-octane sports visuals, Lenis smooth scrolling with hidden scrollbars, Google Outfit typography, comprehensive multi-page React Router navigation, interactive booking/registration forms with field validation, celebratory confetti, and dedicated arenas for **Cricket, Football, Basketball, Badminton, and Tennis**.

---

## 🌟 Key Features

1. **Lenis Smooth Scrolling & Clean UI**
   - Implemented Lenis smooth momentum scrolling across the entire application.
   - Customized zero-scrollbars CSS across modern browsers while preserving fluid scroll functionality.
   - Global Outfit font typography from Google Fonts.

2. **Premier Floating Glassmorphism Navbar**
   - Active route pill indicator with ambient volt highlights.
   - Real-time campus opening hours status indicator.
   - Quick "Book Court" and "Join Now" CTA triggers.
   - Responsive mobile navigation drawer with smooth animations.

3. **High-Octane Dynamic Hero Section**
   - Dynamic slide switcher for **Cricket, Football, Basketball, Racquet Sports**, and the **Multi-Sport Complex**.
   - Interactive sport tabs that instantly update hero imagery, arena badges, and live stats.
   - Prominent "Join Sports Club Now" and "Book Trial Slot" action buttons.

4. **Dedicated Pages & Modules**
   - **Home Page (`/`)**: Hero carousel, statistics & accreditations (FIFA, ICC, FIBA, BWF), featured sports spotlight, membership preview, master coach roster, upcoming events teaser, and athlete reviews.
   - **About Us (`/about`)**: Club history, mission & vision, core athletic values, interactive milestone timeline (2012–present), and arena construction specs.
   - **Sports & Activities (`/sports`)**: Full-featured showcase of **Cricket, Football, Basketball, Badminton, and Tennis** + Gym & Recovery, with technical court dimensions, surface specs, timings, amenities, and interactive detail modals.
   - **Membership (`/membership`)**: 4-tier transparent pricing (Rookie Starter, Club Athlete, Pro Champion, Family All-Star), Monthly/Annual toggle (20% discount), feature comparison matrix table, and a complete registration form with instant digital member ID card generation.
   - **Coaches & Trainers (`/coaches`)**: Certified master coaching roster with filter by sport, live search by name/license, experience credentials, and 1-on-1 private clinic booking.
   - **Events & Tournaments (`/events`)**: Championship calendar, filter by sport, cash prize pool badges, participant limit tracking, registration modals, and Hall of Fame past champions.
   - **Contact Us (`/contact`)**: Multi-department contact form with client-side validation, direct hotline numbers, operating hours, and interactive campus map mockup with transit and parking instructions.
   - **404 Out of Bounds Page**: Themed fallback error page.

5. **Interactive Booking & Registration Modals**
   - Real-time slot reservation modal for courts and private trainer sessions.
   - Membership registration modal with input validation, error messaging, and celebratory confetti upon submission.

---

## 🛠️ Technology Stack

- **React.js 19**
- **Vite 8**
- **Tailwind CSS 3**
- **React Router DOM 7**
- **Lenis Smooth Scroll** (`lenis`)
- **Lucide React** (high-performance vector sports icons)
- **Canvas Confetti** (`canvas-confetti`)
- **Google Fonts** (`Outfit`)

---

## 📁 Project Folder Structure

```
sports-website/
├── public/
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx          # Interactive court & trainer slot booking modal
│   │   ├── CoachCard.jsx             # Coach profile card with credentials & ratings
│   │   ├── EventCard.jsx             # Tournament card with countdown & prize badges
│   │   ├── Footer.jsx                # Multi-column footer with bulletin newsletter & social links
│   │   ├── Hero.jsx                  # Dynamic multi-sport hero section
│   │   ├── Navbar.jsx                # Glassmorphic floating navbar with mobile drawer
│   │   ├── NotificationBanner.jsx    # Top bulletin announcement ticker
│   │   ├── RegistrationModal.jsx     # Membership signup modal with digital pass generation
│   │   ├── ScrollToTop.jsx           # Route change scroll reset handler
│   │   ├── SportCard.jsx             # Sport showcase card with specs & booking trigger
│   │   └── StatsSection.jsx          # Club stats & tournament accreditation badges
│   ├── data/
│   │   └── sportsData.js             # Comprehensive dataset for sports, coaches, plans & events
│   ├── hooks/
│   │   └── useLenis.js               # Custom hook managing Lenis smooth scroll
│   ├── pages/
│   │   ├── AboutPage.jsx             # History, mission, vision, values & timeline
│   │   ├── CoachesPage.jsx           # Coach profiles, filter & search
│   │   ├── ContactPage.jsx           # Contact form, direct phone/email & campus map
│   │   ├── EventsPage.jsx            # Tournaments calendar & Hall of Fame
│   │   ├── HomePage.jsx              # Landing page overview
│   │   ├── MembershipPage.jsx        # Plans, comparison table & registration
│   │   ├── NotFoundPage.jsx          # 404 error page
│   │   └── SportsPage.jsx            # Cricket, Football, Basketball, Badminton, Tennis
│   ├── App.jsx                       # Root application routes & state
│   ├── index.css                     # Tailwind directives, Lenis CSS, Outfit font & scrollbar hiding
│   └── main.jsx                      # App root render with BrowserRouter
├── index.html                        # HTML5 entry with Google Font 'Outfit'
├── tailwind.config.js                # Custom theme, brand volt palette, animations
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure **Node.js** (v18 or higher) and **npm** are installed on your machine.

### Installation

1. Clone or download the repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd "sports website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📤 GitHub Submission Guide

1. Create a new repository on your GitHub account named `sports-club-website`.
2. Link your local project to your remote repository:
   ```bash
   git remote add origin https://github.com/<your-username>/sports-club-website.git
   git branch -M main
   git push -u origin main
   ```
3. Share the repository link as your project deliverable.
