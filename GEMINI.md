# Project: Mini (Love Theme)

## 1. Project Overview
**Mini** is a Next.js 16 web application designed with a **"Love/Romantic" theme**. It features a minimalistic landing page, a themed design system using Rose/Pink color palettes, and specific sub-pages demonstrating various interactive elements (greetings, music player).

## 2. Technology Stack
*   **Framework:** Next.js 16.1 (App Router)
*   **Library:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **Bundler:** Turbopack (via Next.js)

## 3. Project Structure
The project follows the standard Next.js App Router directory structure:

*   **`src/app/`**: Contains the application routes and layouts.
    *   **`layout.tsx`**: Root layout including font configuration (Geist Sans/Mono) and global styles.
    *   **`page.tsx`**: The main landing page. Currently a minimalistic design with a full-screen romantic background image.
    *   **`globals.css`**: Global CSS file. Includes Tailwind v4 configuration and custom CSS variables for the color theme.
    *   **`u/`**: Directory for specific user/feature pages.
        *   **`u/ab1/page.tsx`**: A greeting page with a romantic message and animations.
        *   **`u/ab2/page.tsx`**: A simulated music player with a glassmorphism UI, gradient animations, and interactive controls.

*   **`public/`**: Static assets.
*   **`next.config.ts`**: Configuration file, currently set up to allow images from `images.unsplash.com`.
*   **`package.json`**: Dependency management and scripts.

## 4. Key Features
*   **Theming:** A comprehensive custom theme defined in `globals.css` using CSS variables (`--primary`, `--secondary`, `--background`, etc.) focused on Rose, Pink, and Deep Red tones. Supports Dark Mode.
*   **Interactive UI:** Custom components like a rotating music disk, animated heart icons, and glassmorphism cards.
*   **Responsive Design:** Fully responsive layouts using Tailwind CSS.

## 5. Development & Usage

### Prerequisites
*   Node.js (LTS recommended)
*   npm

### Key Commands
*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    Runs the app at `http://localhost:3000`.

*   **Build for Production:**
    ```bash
    npm run build
    ```
    Creates an optimized production build.

*   **Start Production Server:**
    ```bash
    npm run start
    ```
    Runs the built application.

*   **Lint Code:**
    ```bash
    npm run lint
    ```
    Runs ESLint checks.

## 6. Design System Guidelines
When adding new pages or components, adhere to the following:
*   **Colors:** Use the defined Tailwind variables (e.g., `bg-primary`, `text-foreground`, `border-secondary`).
    *   *Primary:* Rose 600 (`#E11D48`) / Rose 500 (`#F43F5E`)
    *   *Background:* Rose 50 (`#FFF1F2`) / Rose 950 (`#4C0519`)
*   **Icons:** Use inline SVGs for simple icons (Hearts, Play/Pause) or consistent icon libraries.
*   **Vibe:** Aim for "Romantic," "Soft," "Warm," and "Elegant." Use rounded corners (`rounded-full`, `rounded-3xl`), gradients, and backdrop blurs.
