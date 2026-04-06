# 🚀 Deploying Krishi Mitra (React + FastAPI)

The easiest and most common way to deploy a stack like yours for free is to host the **Frontend on Vercel** and the **Backend on Render**.

Before deploying, there are a few required changes you need to make to the codebase to ensure it works properly in production.

---

## 🛠️ Phase 1: Codebase Preparation

### 1. Update your `requirements.txt` (Backend)
Your current `requirements.txt` file in the root is completely empty! If you deploy it now, the server won't know which packages (like `fastapi`, `uvicorn`, `google-generativeai`) to install.
Run this command in the root of your project:
```bash
venv\Scripts\python -m pip freeze > requirements.txt
```
*(If you are on Mac/Linux, run `pip freeze > requirements.txt`)*

### 2. Update Hardcoded URLs in the Frontend
Right now, your frontend React components (`chat.jsx`, `Weather.jsx`, `upload.jsx`, `schemes.jsx`) are hardcoded to test locally with `http://localhost:8000` or `http://127.0.0.1:8000`. 
In production, you'll need the app to talk to the live backend URL.

**Step A:** Create a `.env` file inside the `frontend` folder and add:
```env
VITE_API_URL=http://127.0.0.1:8000
```
**Step B:** In your `.jsx` components, replace instances of `"http://127.0.0.1:8000/api/..."` with `` `${import.meta.env.VITE_API_URL}/api/...` ``.

### 3. Push to GitHub
Make sure all your changes (including the updated `requirements.txt`) are committed and pushed to your GitHub repository.
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

---

## 🌐 Phase 2: Deploying the Backend (Render)

Render provides a free tier that is perfect for Python FastAPI backends.

1. Go to [Render](https://render.com/) and sign in with your GitHub account.
2. Click on **New +** and select **Web Service**.
3. Choose **Build and deploy from a Git repository** and connect your Krishi Mitra repository.
4. **Configuration Details**:
   - **Name**: `krishi-mitra-backend`
   - **Language**: `Python 3`
   - **Branch**: `main`
   - **Root Directory**: *(Leave blank)*
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. **Environment Variables** (crucial for your app):
   - Scroll down to Environment Variables and add the keys from your local `.env` (like `OPENWEATHER_API_KEY` and `gemini_api_key`).
6. Click **Create Web Service**. 
7. Once it's live, copy the URL provided by Render (e.g., `https://krishi-mitra-backend.onrender.com`).

---

## ⚛️ Phase 3: Deploying the Frontend (Vercel)

Vercel is the easiest place to host a Vite + React app.

1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub.
2. Click **Add New...** > **Project**.
3. Import your repository.
4. **Configuration Details**:
   - **Framework Preset**: `Vite` (Vercel will usually auto-detect this)
   - **Root Directory**: Click "Edit" and select the `frontend` folder.
5. **Environment Variables**:
   - Add your newly created Render URL here so the frontend knows where the backend lives.
   - **Name**: `VITE_API_URL`
   - **Value**: `https://krishi-mitra-backend.onrender.com` *(The URL you got from Render)*
6. Click **Deploy**.

## 🎉 Done!
Your Frontend and Backend will now be seamlessly connected over the live web!
