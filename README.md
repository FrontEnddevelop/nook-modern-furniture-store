# NOOK | Modern Furniture Store

A responsive, animated furniture store frontend built with **Next.js**, **Tailwind CSS** and **Motion (Framer Motion)**.

This is a practice project: a UI clone of the [Wonder](https://wonder-theme-interior.myshopify.com/) Shopify interior theme, built to learn animations, responsive layout and component structure in a real-world design. It is not affiliated with the original theme or its creators.

> **Status:** Work in progress. Frontend only for now (UI, animations, static data). Backend comes later.

## Live Demo

(https://nook-modern-furniture-store.vercel.app/)

## Screenshots

<!-- Add screenshots to /public/screenshots and update the paths below -->
<img width="1920" height="930" alt="image" src="https://github.com/user-attachments/assets/089fa049-c95d-417f-bfe0-d4cdf37bfd1e" />

<img width="1920" height="946" alt="image" src="https://github.com/user-attachments/assets/2732f6bc-038a-4f52-849c-490b77f7762a" />

<img width="1920" height="938" alt="image" src="https://github.com/user-attachments/assets/f7a9d9c0-06aa-4e65-94d7-e87935209fee" />

<img width="1912" height="930" alt="image" src="https://github.com/user-attachments/assets/13698328-709c-4a15-903e-68e7a86f2372" />

<img width="1920" height="974" alt="image" src="https://github.com/user-attachments/assets/51bdf108-7581-4b12-85ae-793c934e36e7" />

<img width="1920" height="894" alt="image" src="https://github.com/user-attachments/assets/9d492f43-63ba-4094-bbf4-10c9ab87786b" />

<img width="445" height="617" alt="image" src="https://github.com/user-attachments/assets/59243637-5fe5-4a44-a06b-4008fac194f5" />

<img width="1914" height="895" alt="image" src="https://github.com/user-attachments/assets/e2403aba-28d6-48f1-91fa-a34dba7f663b" />

<img width="1920" height="511" alt="image" src="https://github.com/user-attachments/assets/65b4f52e-e138-472d-958a-f79068d1de93" />


## Features

- **Smart navbar:** a fixed top bar plus a secondary navigation that is detected with `IntersectionObserver`. When the secondary nav scrolls out of view, a button in the fixed bar brings it back with a slide animation.
- **Mobile menu:** a single shared menu state with a blurred backdrop on small screens.
- **Hero slider:** auto-playing slider with arrow/mouse-direction navigation, dot indicators and smooth Motion transitions.
- **Search overlay:** full-screen search with trending searches and popular products, scrollable on small screens.
- **Fully responsive:** mobile-first design using Tailwind breakpoints.
- **Static data:** products and banners are loaded from local data files (no backend yet).

## Tech Stack

| Area       | Tools                              |
| ---------- | ---------------------------------- |
| Framework  | Next.js (React)                    |
| Styling    | Tailwind CSS                       |
| Animation  | Motion (`motion/react`)            |
| Language   | JavaScript (JSX)                   |
| Deployment | Vercel (planned)                   |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Husnainawm/nook-modern-furniture-store.git

# Go to the project folder
cd nook-modern-furniture-store

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── public/              # Static assets (images, logo)
├── Components/
│   ├── Navbar/          # NavbarOne, NavbarTwo and helpers
│   └── ...              # Hero slider, search, sections
├── app/                 # Next.js app router pages
└── README.md
```

> The folder names above are a general overview. Adjust them to match the actual repository.


## What I Learned

- Building scroll-aware UI with `IntersectionObserver`
- Animating mount/unmount with `AnimatePresence`
- Mobile-first responsive design with Tailwind
- Managing shared UI state across components
- Basic Git workflow, including resolving rejected pushes

## Author

**Husnain Ali**
GitHub: [@Husnainawm](https://github.com/Husnainawm)

## Acknowledgements

- Design inspiration: [Wonder theme by Shopify](https://wonder-theme-interior.myshopify.com/)
- Product and banner images belong to their respective owners and are used here for learning purposes only.
