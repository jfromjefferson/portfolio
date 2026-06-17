# Portfolio

![Repo Size](https://img.shields.io/github/repo-size/jfromjefferson/portfolio)
![License](https://img.shields.io/github/license/jfromjefferson/portfolio)

A personal portfolio with a PyCharm-inspired UI, built with React + TypeScript.

## Demo

Live version: https://magenta-fox-5d5416.netlify.app

## Features

- PyCharm-like IDE layout with sidebar, editor, and terminal
- Sections for projects, skills, and contact info
- Responsive design for mobile devices
- CSS Modules for scoped styling
- CSS Grid for layout

## Tech Stack

- **React 18** with TypeScript 5
- **Vite 5** for blazing-fast builds
- **SCSS Modules** for style encapsulation
- **react-icons** for iconography
- **ESLint + Prettier** for code quality

## Getting Started

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Type-check
yarn typecheck

# Lint
yarn lint

# Format
yarn format

# Production build
yarn build

# Preview build
yarn preview
```

## Project Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Root component with CSS Grid layout
├── App.module.scss       # App-level styles
├── global.scss           # CSS variables and resets
├── data/                 # Static data files
│   └── contact.ts        # Contact information
└── components/
    ├── IdeOptions/       # Top IDE toolbar
    ├── Sidebar/          # Left project sidebar
    ├── Terminal/         # Bottom terminal panel
    └── editor/           # Main code editor area
```

## License

[MIT](LICENSE)
