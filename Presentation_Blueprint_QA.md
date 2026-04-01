# 🌿 Krishi Mitra (पीक आरोग्य सहाय्यक) - Presentation Blueprint & complete Q&A Guide

Welcome to your competition preparation guide! This document is broken down into four parts:
1. **The Core Story (Elevator Pitch)**
2. **System Architecture Deep Dive**
3. **Step-by-Step Demo Guide**
4. **Q&A Bank (Technical & Non-Technical)**

---

## 1. The Core Story (Elevator Pitch)
*Memorize this or use it to open your presentation.*

**"Krishi Mitra is an intelligent, bilingual AI agricultural assistant designed to bridge the gap between rural farming and bleeding-edge technology. Farmers face grassroots problems: crop disease misdiagnosis, unpredictable weather, lack of market knowledge, and complex scheme navigation. We built a mobile-first platform that uses Machine Learning to accurately diagnose crop diseases from images, and Generative AI to provide a voice-first Marathi-speaking assistant. It’s an end-to-end ecosystem that empowers farmers with actionable, hyper-local insights in their native tongue."**

---

## 2. System Architecture Deep Dive
You need to know your stack inside out if judges ask about technical decisions.

### 🎨 Frontend (The User Experience)
- **Tech Stack:** React 19, Vite, Tailwind CSS, React Router DOM.
- **Why this stack?** React combined with Vite offers blazing fast rendering and dynamic routing, which is crucial for a smooth Mobile-First experience. Tailwind allows for rapid, premium UI development without heavy CSS files.
- **Key Features:** It's designed specifically for mobile devices (how farmers will actually use it), featuring seamless transitions via a bottom navigation bar. It maps the Webkit Speech Recognition API directly in the browser to ingest Marathi voice inputs (`mr-IN`).

### ⚙️ Backend (The Core Engine)
- **Tech Stack:** Python, FastAPI.
- **Why FastAPI?** It is asynchronously built, robust, and specifically optimized for building fast REST APIs. Since we do heavy I/O operations (calling OpenWeather, Gemini API, and processing images through an ML model), FastAPI's async nature prevents blocking.

### 🧠 AI & Machine Learning Integrations
1. **Crop Disease ML Model:**
   - **How it works:** We use a HuggingFace `AutoModelForImageClassification` model via the `transformers` library. The model is built on top of PyTorch.
   - **Process:** An image is sent as bytes > Converted via `PIL` > Preprocessed by `AutoImageProcessor` > Passed into the PyTorch model (`torch.no_grad()` for inference) > We extract the `confidence` score and map the predicted label to **Marathi** using a custom dictionary (`label_map_marathi`).
   - **Failsafe:** If the confidence is below 0.4 (40%), the model returns "निश्चित ओळख नाही" (No definite identification) rather than giving wrong advice.
2. **Generative AI Chatbot (Gemini):**
   - **How it works:** We use Google's Gemini API integrated in the backend service (`orchestrator`). It handles text queries. The frontend captures voice (via Webkit), converts it to text, and sends it here.
3. **External APIs:**
   - **OpenWeather API:** For hyperlocal, real-time weather forecasts based on geolocation.

---

## 3. Step-by-Step Demo Guide
*How to flow through the project during the presentation.*

1. **The Hook (1 min):** Start with the problem. Emphasize how hard it is for a farmer to understand diseases without an expert.
2. **Feature 1: AI Chatbot (1 min):** Hit the microphone. Speak in Marathi (e.g., "माझ्या पिकाला खत कधी देऊ?"). Show how fast and natural the text/voice response is.
3. **Feature 2: Crop Disease Detection (1.5 min) [HERO FEATURE]:** 
   - Upload an infected leaf photo (have a pre-downloaded image of *Potato Early Blight* or *Wheat Yellow Rust* ready).
   - Show how the backend identifies the disease, displays the confidence score, and gives actionable advice **in Marathi**.
4. **Feature 3: Weather & Market (Bazaar Bhav) (1 min):** Briefly show the hyperlocal weather and APMC market prices. Explain how this stops middlemen from exploiting farmers.
5. **Feature 4: Schemes & Calendar (30 sec):** Show how farmers can easily read government schemes formatted nicely, and check the crop calendar.
6. **Closing (30 sec):** Summarize the impact (empowerment, native language, AI for good).

---

## 4. Q&A Bank (Technical)

**Q. Why did you use Huggingface transformers for the model instead of simple CNNs from scratch?**
*A. We wanted transfer learning capabilities to get high accuracy on leaf detection without needing millions of images to train from scratch. The HuggingFace Transformers architecture allows us to use state-of-the-art vision models and fine-tune them, giving us high confidence scores and robustness against bad image quality.*

**Q. How do you handle language translation?**
*A. We handle this at two levels. For the ML classifications, we mapped the model outputs (e.g., "Wheat___Brown_Rust") explicitly to Marathi in a backend dictionary to ensure precise agricultural terminology. For conversational queries, we rely on the Google Gemini API, which has native, high-quality multilingual support.*

**Q. What happens if a farmer uploads a random image (like a car) instead of a leaf?**
*A. Our system has confidence thresholds. If the model's prediction confidence is below 40% (0.4), it defaults to saying "निश्चित ओळख नाही" (No definite identification) and advises the user to upload a clear photo or consult an expert.*

**Q. Why FastAPI over Django or Flask?**
*A. FastAPI supports asynchronous endpoints out of the box (`async def`). Since our app handles file uploads (images) and waits for third-party API responses (Google Gemini, OpenWeather), async prevents the server from freezing for other users while waiting.*

**Q. Where is the data stored?**
*A. Currently, we focused heavily on an API-driven stateless architecture for AI processing to maintain high performance and low latency.*

---

## 5. Q&A Bank (Non-Technical / Business)

**Q. What is the main problem Krishi Mitra solves?**
*A. Information asymmetry. A farmer today has a smartphone but no agricultural expert on the field. Krishi Mitra acts as an agronomist in their pocket, speaking their native language.*

**Q. How is this different from existing apps?**
*A. Many apps are in English or just provide static blogs. Krishi Mitra is highly interactive—you talk to it, you show it pictures, and it responds with hyper-personalized data (local weather, localized disease care).*

**Q. How do you plan to scale it to farmers who are not tech-savvy?**
*A. That is exactly why we built the **Voice Assistant**. Farmers don't need to type; they just tap the microphone and speak in **Marathi**. The UI is heavily icon-based and mobile-first, mimicking apps they already know.*

**Q. What is the future scope of this project?**
*A. 1) Integrating local SMS alerts for farmers without constant internet. 2) Integrating direct links to buy the specific fertilizers recommended by the ML model. 3) Expanding language support to Hindi and Kannada.*
