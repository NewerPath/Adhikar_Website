# 🏛️ Adhikar — National Citizen Schemes AI & Verification Portal

Adhikar is a modern Civic Tech platform designed for Indian citizens to discover government welfare schemes, get tailored multilingual guidance, and detect fraudulent messages/subsidies in real-time.

---

## ✨ Features & Upgraded Civic Tech UI

- **🇮🇳 Modern Civic Tech Aesthetics**: Clean national palette (Ashoka Indigo, Saffron, and India Green micro-accents), frosted-glass navbar, responsive cards with smooth elevation, and refined typography.
- **📚 Verified Scheme Directory (`/schemes`)**: Comprehensive database across Agriculture, Healthcare, Education, Finance, Housing, and Social welfare with live search, category counts, and direct links to official `.gov.in` portals.
- **🤖 Sarkari Sahayak AI (`/assistant`)**: Natural citizen assistant supporting English, Hindi, and Marathi with 1-click prompt starters and tailored guidance on eligibility, documents, and schemes like PM-KISAN, Ayushman Bharat, and Mudra loans.
- **🛡️ SchemeGuard Scam Scanner (`/guard`)**: Fraud detection engine with an interactive Trust Score gauge (0–100%), safe advice, and pre-configured sample test scenarios (fake laptop scam vs. genuine PM-KISAN notice).
- **📋 Citizen Feedback (`/feedback`) & Activity Trail (`/history`)**: Private on-device audit logging and feedback submission.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Set up environment variables
cp .env.example .env.local

# 3. Start development server
npm run dev
# Open http://localhost:3000 in your browser
```

> **Note:** The app works 100% out-of-the-box in smart heuristic/mock mode without requiring any API keys.

---

## 🌐 Deploying to Netlify (Step-by-Step)

Adhikar is configured for seamless deployment on **Netlify** using `@netlify/plugin-nextjs` and `netlify.toml`, supporting Next.js 14 App Router, Server Components, and API routes.

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: modern civic tech UI upgrade for Adhikar"
   git branch -M main
   git remote add origin https://github.com/<your-username>/adhikar.git
   git push -u origin main
   ```
2. **Import to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com) and log in.
   - Click **"Add new site"** → **"Import an existing project"**.
   - Select **GitHub** and authorize access to your repository.
   - Netlify will automatically detect `netlify.toml` with:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
3. **Environment Variables (Optional)**:
   - In Site Configuration → **Environment variables**, optionally add:
     - `GEMINI_API_KEY` (Google AI Studio) or `OPENROUTER_API_KEY`
     - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy Site**. Your site will build and be live with a free SSL `.netlify.app` domain!

---

### Option 2: Deploy via Netlify CLI

You can also deploy directly from your local terminal:

```bash
# 1. Log in to Netlify
npx netlify login

# 2. Initialize and deploy
npx netlify init

# 3. Deploy to production
npx netlify deploy --build --prod
```

---

## 🔑 Environment Variables Reference

Copy `.env.example` to `.env.local` to configure your keys:
```bash
cp .env.example .env.local
```

| Variable | Description | Where to Get | Required? |
| :--- | :--- | :--- | :--- |
| `GEMINI_API_KEY` | Google Gemini API key for live AI assistant & scam scans | [Google AI Studio](https://aistudio.google.com/app/apikey) | Optional (smart heuristic fallback provided) |
| `OPENROUTER_API_KEY` | Alternative LLM provider key | [OpenRouter Keys](https://openrouter.ai/keys) | Optional |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL for live database & auth | [Supabase Dashboard](https://supabase.com/dashboard) → Settings → API | Optional (mock auth and local database provided) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous public API key | [Supabase Dashboard](https://supabase.com/dashboard) → Settings → API | Optional |

> **Note:** The application includes full mock modes for both AI inference and database operations. If no keys are provided, all core features (scheme discovery, scam scanner, voice interface, and citizen assistant) run seamlessly out of the box.
