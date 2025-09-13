# Client Folder – Currency Converter

## Overview

The `client` folder contains the **frontend** codebase for the Currency Converter project. This is a modern web application built with React, Tailwind CSS, and Vite. The frontend is what users interact with: entering amounts, selecting currencies, and viewing conversion results—delivering a responsive, user-friendly experience.

---

## What Does the Client Folder Contain?

- **Project Configuration:**  
  Contains essential files for code formatting, linting, and build tool setup (`.prettierrc`, `eslint.config.js`, `tailwind.config.js`, `vite.config.js`, etc.).

- **Static Assets:**  
  The `public/` and `src/assets/` folders hold images and static files used by the UI.

- **Source Code:**  
  The `src/` folder contains all React components, pages, utilities, and main entry points for the application.

---

## How Does the Client Folder Help the Project?

- **User Interface:**  
  All visual elements and interactions are implemented here—everything the user sees and interacts with, from input fields to conversion results and loaders.

- **API Integration:**  
  The client securely communicates with the backend API (in the `/server` folder) to fetch supported currencies, perform conversions, and (optionally) retrieve conversion history.

- **Component Reusability:**  
  The code is organized into modular, reusable components, making the project easier to maintain and extend (e.g., adding new features or pages).

- **Modern Development Workflow:**  
  Tools like Vite, Tailwind, Prettier, and ESLint ensure fast development, consistent code style, and a pleasant developer experience.

---

## File Structure and Details

```
client/
├── .gitignore               # Ignore node_modules, build outputs, etc.
├── .prettierrc              # Prettier config for code formatting
├── README.md                # (This file)
├── eslint.config.js         # ESLint rules for code linting
├── index.html               # Main HTML template used by Vite
├── package.json             # Project metadata, scripts, dependencies
├── package-lock.json        # Locked dependency versions
├── public/
│   └── vite.svg             # Static files (e.g., favicons, images)
├── src/
│   ├── App.jsx              # Root React component, app layout
│   ├── assets/
│   │   └── react.svg        # Logo and additional static assets
│   ├── components/
│   │   ├── AmountInput.jsx      # Currency amount input box
│   │   ├── ConvertButton.jsx    # Button to trigger conversion
│   │   ├── CurrencySelector.jsx # Dropdowns for currency selection
│   │   ├── Loader.jsx           # Loading spinner during requests
│   │   └── ResultCard.jsx       # Displays conversion result
│   ├── index.css            # Global styles and Tailwind imports
│   ├── main.jsx             # App entry point, mounts React to DOM
│   ├── pages/
│   │   └── Home.jsx         # Main page with all UI components
│   └── utils/
│       └── api.js           # Functions for communicating with backend API
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite build and dev server configuration
```

---

## Why Are These Tools and Structures Used?

- **React**: Enables flexible, component-based UIs and fast updates.
- **Vite**: Ultra-fast build tool for instant feedback during development.
- **Tailwind CSS**: Utility-first CSS for concise, maintainable, and responsive styling.
- **Axios**: Makes HTTP API calls clean and simple (used in `utils/api.js`).
- **ESLint & Prettier**: Keeps code clean, consistent, and error-free.
- **Component Organization**: Encourages reusability and separation of concerns—each UI element does one thing well.

---

## Summary

The `client` folder powers the entire frontend experience of your Currency Converter project. It is responsible for:

- Presenting a beautiful and interactive UI
- Handling user input and form validation
- Communicating with the backend API for currency data and conversions
- Organizing code for maintainability and scalability

If you want to add features (like conversion history, dark mode, or animations), this is where you'll do it!

---