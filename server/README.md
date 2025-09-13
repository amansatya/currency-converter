# Server Folder – Currency Converter

## Overview

The `server` folder contains the **backend** codebase for the Currency Converter project. This folder is responsible for handling all server-side logic, such as processing API requests, integrating with external currency APIs, and (optionally) interacting with a database to store conversion history. It acts as the bridge between the frontend (client) and external services, ensuring secure and efficient data handling.

---

## What Does the Server Folder Contain?

- **API Endpoints:**  
  Hosts Express.js routes to serve supported currencies, handle currency conversion, and (optionally) provide conversion history.

- **External API Integration:**  
  Contains logic to communicate with real-time currency exchange APIs (like ExchangeRate-API, Open Exchange Rates, etc.) to fetch up-to-date rates.

- **Backend Configuration:**  
  Contains configuration files for code quality, dependencies, and environment settings.

---

## How Does the Server Folder Help the Project?

- **Processes Client Requests:**  
  Receives HTTP requests from the frontend for currency data and conversions, processes them, and sends structured responses.

- **Secures API Keys:**  
  Handles sensitive API keys and secrets server-side, ensuring they are not exposed in the frontend code.

- **Centralizes Business Logic:**  
  All currency conversion calculations and data fetching logic are handled here, keeping the frontend lightweight and secure.

- **Extensible for New Features:**  
  Structured to easily support future backend features like user authentication, advanced analytics, or logging.

---

## File Structure and Details

```
server/
├── .gitignore                  # Ignore node_modules, logs, etc.
├── eslint.config.js            # ESLint rules for code linting
├── package.json                # Project metadata, scripts, dependencies
├── package-lock.json           # Locked dependency versions
├── server.js                   # Main Express server entry point
├── routes/
│   └── currencyRoutes.js       # Defines REST API endpoints for currencies and conversion
└── utils/
    └── currencyAPI.js          # Functions to call external currency rate APIs
```

### File/Folder Details

- **.gitignore:** Prevents sensitive and unnecessary files (like node_modules) from being tracked by Git.
- **eslint.config.js:** Ensures code follows consistent style and best practices.
- **package.json / package-lock.json:** Manage backend dependencies (Express, Axios, dotenv, MongoDB driver, etc.) and scripts.
- **server.js:** Initializes the Express application, applies middleware, sets up routes, and starts the server.
- **routes/currencyRoutes.js:** Contains Express route handlers for:
    - `GET /api/currencies` – List all supported currencies.
    - `POST /api/convert` – Perform currency conversion.
- **utils/currencyAPI.js:** Encapsulates logic for:
    - Fetching live rates from external APIs.
    - Processing and formatting API responses.
    - (Optionally) Handling fallback or error scenarios.

---

## Why Are These Tools and Structures Used?

- **Express.js:** Minimal, flexible Node.js web framework for creating robust APIs quickly.
- **Axios (or native fetch):** For making HTTP requests to external currency APIs.
- **dotenv:** To securely manage environment variables like API keys.
- **Modular Structure:** Separates routes, utilities, and server configuration for maintainability and scalability.
- **ESLint:** Maintains code quality and consistency.

---

## Summary

The `server` folder powers the backend of your Currency Converter project. It is responsible for:

- Exposing secure, RESTful API endpoints for the frontend
- Fetching and processing real-time currency data
- Managing sensitive configuration and secrets
- Handling business logic and optional database features

If you want to add features like user authentication, rate limiting, or advanced analytics, this is where you'll build them!

---