# 🧠 Smart Size Recommendation Widget – Kxpos

A seamless, AI-enhanced size recommendation solution designed to improve user confidence and reduce returns in school uniform e-commerce. Built for **Kxpos**’ Shopify storefront, this widget leverages user measurements and historical fit data to provide personalized size suggestions across mobile, web, and chatbot interfaces.

---

## 🔍 Overview

This project includes:

- 🧑‍💬 **Chatbot Screens** – Engaging conversational UI guiding users through smart size selection  
- 🖥️ **Web View** – Desktop-optimized recommendation experience integrated with the product detail page  
- 📱 **Mobile View** – Lightweight and intuitive interface for handheld devices  
- ✅ All views are marked **Ready for Dev**, following finalized Figma designs.

---

## ✨ Features

- ✅ **AI-Powered Fit Recommendations**  
  Based on age, height, weight, and gender using match scoring logic.

- 🎯 **Confidence Score Visualization**  
  Displayed via animated circular progress indicator with match explanation.

- 🔁 **Alternate Size Suggestions**  
  Users can view snugger or looser fit options with confidence levels.

- 👪 **Multi-Child Profile Support**  
  Store and manage multiple child profiles under one session.

- 🛒 **Cart Integration**  
  Add recommended sizes directly to Shopify cart with quantity selection.

- 🔄 **Start Over Option**  
  Easily reset flow and start a new recommendation.

---

## 📁 Project Structure

/
├── components/
│ ├── CircularProgress.tsx # Circular match score indicator
│ ├── Recommendation.tsx # Main result screen with add-to-cart
│ ├── AddProfile.tsx # Multi-profile selector
│ ├── Finder.tsx # Measurement input form
│ └── BottomNavigator.tsx # Shared bottom navigation component
│
├── assets/ # Icons and style assets
├── routes/ # Page routes and transitions
├── App.tsx # Route controller
├── index.tsx # Vite + React entry point
└── README.md # Project documentation



---

## 🧩 Tech Stack

- **Framework:** React (with Vite)
- **Animation:** Framer Motion
- **Navigation:** React Router
- **Design System:** TailwindCSS + Lucide Icons
- **Data Storage:** Local state (with potential to extend to Firebase or Shopify metafields)
- **Platform:** Shopify integration-ready

---

## 🖼️ Screens Overview

### 🔸 Chatbot Screens
Guides the user via conversational steps with validation and results.

### 🔸 Web View
Integrated directly within Shopify’s desktop product page, aligned to UX best practices.

### 🔸 Mobile View
Optimized for handheld usage with larger tap targets, simplified navigation, and fast interactions.

---

## 🧪 Status

- ✅ UI Screens (All views) – *Ready for development*
- ✅ Component Code – *Implemented and tested*
- 🔜 Backend Integration – *Optional next phase for profile saving, calendar sync, or real-time sizing data.*

---

## 🚀 Getting Started (Dev)

```bash
# 1. Clone the project
git clone https://github.com/yourusername/kxpos-size-widget.git

# 2. Install dependencies
cd kxpos-size-widget
npm install

# 3. Run development server
npm run dev
