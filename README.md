
AI CAREER PATH - FRONTEND
Frontend for the AI-Based Career Recommendation and Resume Analyzer project. This UI allows users to sign up and login, upload their resume, enter skills, degree and interests, get AI career recommendations, and view resume analysis results.
It connects to a FastAPI backend for resume processing and predictions.

Features

Modern responsive UI
Login and Signup pages
Resume upload interface
Career recommendation dashboard
Dark theme with glassmorphism UI
API integration with FastAPI backend
Ready for deployment on Vercel


Project Architecture
User → Frontend (Next.js) → Backend API (FastAPI) → ML Model
Frontend sends resume and skills, backend returns score, skills detected, and career predictions.

Tech Stack
Frontend

Next.js 14
React
Tailwind CSS
ShadCN UI
Framer Motion (animations)
Axios / Fetch API

Backend (separate repo)

FastAPI
Python
ML Model


Folder Structure
frontend/
│
├── app/
│   ├── page.tsx
│   ├── login/
│   ├── signup/
│   ├── dashboard/
│   └── upload/
│
├── components/
│   ├── Navbar.tsx
│   ├── ResumeUpload.tsx
│   ├── CareerCard.tsx
│
├── lib/
│   └── api.ts
│
├── public/
├── styles/
└── package.json

Installation
Step 1 — Clone the repo
bashgit clone https://github.com/Ushapithani/frontend.git
cd frontend
Step 2 — Install dependencies
bashnpm install
Step 3 — Run locally
bashnpm run dev
```

Open browser at:
```
http://localhost:3000
```

---

## Backend Connection

Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

If using deployed backend:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

---

## Resume Upload Flow

1. User logs in
2. Uploads resume
3. Frontend sends file to `POST /predict`
4. Backend returns score, skills, and career suggestions
5. Dashboard displays the result

---

## Pages Included

- Home page
- Login page
- Signup page
- Resume upload page
- Career dashboard

---

## UI Preview

Add screenshots here:
```
/screenshots/home.png
/screenshots/dashboard.png

Deployment
Deploy to Vercel
bashnpm run build
```

Push to GitHub, import in Vercel, and deploy.

Add environment variable in Vercel:
```
NEXT_PUBLIC_API_URL=your_backend_url

Developer
Madhu / Usha Pithani — AI and Full Stack Developer

Backend: https://github.com/Ushapithani/backend
Frontend: https://github.com/Ushapithani/frontend


Future Improvements

JWT authentication
Profile page
Resume builder
Chatbot career guide
Admin dashboard
Database integration



GitHub
If you find this project useful, give it a star on GitHub! Sonnet 4.6
