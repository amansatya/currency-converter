# Currency Converter

A basic, full-stack web application for converting currencies in real time. Built with the MERN stack (MongoDB, Express, React, Node.js), this project demonstrates modern web development practices, clean UI/UX, and integration with live currency exchange APIs.

---

## 🚀 Features

- **Real-time Currency Conversion:**  
  Instantly convert between global currencies using up-to-date exchange rates.

- **Clean, Responsive Interface:**  
  Simple, mobile-friendly UI built with React and Tailwind CSS.

- **API-Driven Architecture:**  
  Backend securely fetches exchange rates from trusted external APIs.

- **Error Handling & Loading States:**  
  User-friendly feedback for API errors, invalid input, and network issues.

- **Extensible & Modular:**  
  Easily add features like login, currency charts, or export capabilities.

---

## 🛠️ Tech Stack

| Layer               | Technology                | Purpose                                |
|---------------------|---------------------------|----------------------------------------|
| **Frontend**        | React, Tailwind CSS, Vite | UI, state management, fast dev tooling |
| **Backend**         | Node.js, Express.js       | REST API, server logic                 |
| **API Integration** | Axios, dotenv             | Secure calls to currency APIs          |
| **Tooling**         | ESLint, Prettier          | Code quality & formatting              |

---

## 📁 Project Structure

```
currency-converter/
├── .gitignore
├── LICENSE
├── README.md         
├── client/           # All frontend code (React)
│   ├── src/
│   ├── public/
│   └── ...           # See client/README.md for details
├── server/           # All backend code (Node/Express)
│   ├── routes/
│   ├── utils/
│   └── ...           # See server/README.md for details
└── ...               # Root config files
```

### Folder Details

- **client/**  
  Contains the React app, all UI components, styling, and logic for interacting with the backend API.

- **server/**  
  Contains Express server, API routes, external API integration.

---

## 🔗 How It Works

1. **User Interface:**  
   Users interact with a form to enter an amount and select source/target currencies.

2. **API Request:**  
   On submission, the frontend sends a request to the backend (Express).

3. **Currency Conversion:**  
   The backend retrieves current exchange rates from a third-party API, performs the conversion, and responds with the result.

4. **Display Results:**  
   The frontend displays the converted value and handles errors or loading states.

---

## 🧩 Key Files & Their Purpose

- **client/src/components/**
    - `AmountInput.jsx`: Input for the amount to convert
    - `CurrencySelector.jsx`: Dropdowns for selecting currencies
    - `ConvertButton.jsx`: Button to trigger conversion
    - `ResultCard.jsx`: Displays conversion results
    - `Loader.jsx`: Shows loading spinner

- **client/src/utils/api.js**  
  Centralizes all HTTP calls to the backend API.

- **server/server.js**  
  Main entry point for the backend. Sets up Express, middleware, and routes.

- **server/routes/currencyRoutes.js**  
  Handles REST API endpoints for getting currencies, converting, and (optionally) history.

- **server/utils/currencyAPI.js**  
  Encapsulates logic for calling third-party currency APIs.

---

---

## 🌐 View Project (Live Demo)

Want to see it in action?  
👉 **[View Currency Converter Live](https://currency-converter-satya.vercel.app/)**

---

## 🏁 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node)

### 1. Clone the Repository

```bash
git clone https://github.com/amansatya/currency-converter.git
cd currency-converter
```

### 2. Setup Backend

```bash
cd server
npm install
# Create a .env file with your API key, e.g.:
# CURRENCY_API_KEY=your_key_here
npm start
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

### 4. Open in Browser

Visit [http://localhost:5173](http://localhost:5173) (Vite default)  
Backend runs on [http://localhost:5000](http://localhost:5000) (or as configured)

---

## ⚙️ Configuration

- **.env (server):**  
  Store your external API key here (never commit this to Git).

- **API Endpoints:**
    - `GET /api/currencies` – List supported currencies
    - `POST /api/convert` – Convert currencies
    - `GET /api/history` – (Optional) Retrieve conversion history


## 🤝 Contributing

Pull requests and suggestions are welcome!  
See [client/README.md](client/README.md) and [server/README.md](server/README.md) for more details about each layer.

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 🙏 Acknowledgements

- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Open Exchange Rates](https://openexchangerates.org/)
- [CurrencyFreaks](https://currencyfreaks.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)