# 🌿 पीक आरोग्य सहाय्यक (Krishi Mitra)

**Krishi Mitra** is an intelligent, bilingual (Marathi/English), full-stack agricultural assistant designed to empower farmers with modern technology. By addressing grassroots problems like crop disease, accurate weather forecasting, and market accessibility, Krishi Mitra bridges the gap between traditional farming and artificial intelligence.

Built specifically for the project competition with a premium, mobile-first design, it ensures an intuitive user experience tailored for farmers.

---

## ✨ Key Features
1. **🩺 Crop Disease Detection**: Upload a photo of a diseased plant leaf. The integrated ML model on the backend instantly identifies the disease and suggests preventive care.
2. **🤖 KrushiMitra AI Voice Assistant**: A conversational AI powered by Gemini that understands both text and native voice commands (set up for **Marathi** and English). It answers agricultural queries accurately and seamlessly.
3. **🌦️ Hyperlocal Weather Forecasts**: Integrated with the OpenWeather API to provide timely warnings and actionable weather insights specifically for farming operations.
4. **🏛️ Government Schemes Navigator**: A comprehensive, easy-to-read list of state and central agricultural schemes to help farmers check their eligibility quickly.
5. **📈 APMC Market Prices (Bazaar Bhav)**: Crucial tracking of crop prices across various market committees so farmers know the true value of their yield.
6. **📅 Interactive Crop Calendar**: Stage-by-stage scheduling and planning for seasonal crops (covering preparation, sowing, fertilizing, and harvesting).

## 🛠️ Technology Stack
- **Frontend**: React 19, Vite, Tailwind CSS, React Router DOM (Dynamic Mobile-First UI)
- **Backend**: Python, FastAPI
- **AI & ML Integrations**: 
  - Custom ML Models for image based disease detection
  - Generative AI via Google Gemini (`ai_service.py`)
  - Webkit Speech Recognition for native audio conversion (`mr-IN`)

---

## 🚀 Quick Start / How to Run Locally

### 1. Backend Setup
Navigate to the root directory and ensure you have Python installed.

1. Create and activate a Virtual Environment
   ```bash
   python -m venv venv
   source venv/Scripts/activate # Windows: venv\Scripts\activate
   ```
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Setup your Environment Variables (`.env`):
   Create a `.env` file in the root directory and add your API keys:
   ```env
   OPENWEATHER_API_KEY=your_openweathermap_key
   gemini_api_key=your_gemini_key
   ```
4. Start the FastAPI System:
   ```bash
   uvicorn app.main:app --reload
   ```
   *The backend will be running at `http://127.0.0.1:8000`*

### 2. Frontend Setup (`/frontend`)
Open a completely new terminal instance and navigate to the `frontend` directory.

1. Install the node modules:
   ```bash
   cd frontend
   npm install
   ```
2. Start the Vite Development Server:
   ```bash
   npm run dev
   ```
   *The web application will be accessible at `http://localhost:5173`*

---

### 🏆 Project Objective
Developed for the upcoming Project Competition to demonstrate a meaningful, real-world application of Artificial Intelligence and robust Web Architecture directly contributing to the domain of Indian Agriculture.
