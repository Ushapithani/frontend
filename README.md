
---

# 🎨 AI CareerPath – Frontend

Welcome to the AI CareerPath Frontend project! This modern Next.js application allows users to upload their resume, enter skills and interests, and get AI-powered career recommendations connected to a FastAPI backend.

---

## ✨ Features

- 🖥️ **Modern Responsive UI:** Clean and beautiful interface for all devices.
- 🔐 **Login and Signup:** Secure user authentication pages.
- 📄 **Resume Upload:** Easy drag and drop resume upload interface.
- 💼 **Career Dashboard:** View AI career recommendations in one place.
- 🌙 **Dark Theme:** Glassmorphism dark UI design.
- 🔌 **API Integration:** Seamlessly connects with FastAPI backend.
- 🚀 **Vercel Ready:** Optimized for deployment on Vercel.

---

## 📦 Requirements

- Node.js 18+
- npm or yarn
- Next.js 14
- FastAPI backend running

---

## 🧠 Project Architecture

```
User → Frontend (Next.js) → Backend API (FastAPI) → ML Model
```

Frontend sends resume and skills, backend returns score, skills detected, and career predictions.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** — React framework
- **React** — UI library
- **Tailwind CSS** — styling
- **ShadCN UI** — component library
- **Framer Motion** — animations
- **Axios / Fetch API** — API calls

### Backend (separate repo)
- **FastAPI** — Python backend
- **ML Model** — career prediction

---

## 📁 Folder Structure

```
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
```

---

## ⚙️ Installation

### Step 1 — Clone the repo
```bash
git clone https://github.com/Ushapithani/frontend.git
cd frontend
```

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Run locally
```bash
npm run dev
```

Open browser at:
```
http://localhost:3000
```

---

## 🔌 Backend Connection

Create `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

If using deployed backend:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

---

## 📤 Resume Upload Flow

1. User logs in
2. Uploads resume PDF
3. Frontend sends file to `POST /predict`
4. Backend returns score, skills, and career suggestions
5. Dashboard displays the result

---

## 🎯 Pages Included

- 🏠 **Home page** — landing page
- 🔐 **Login page** — user login
- 📝 **Signup page** — user registration
- 📄 **Upload page** — resume upload
- 📊 **Dashboard** — career recommendations

---

## 🖼️ UI Preview

Add screenshots here:

```
/screenshots/home.png
/screenshots/dashboard.png
```

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm run build
```

Push to GitHub, import in Vercel, and deploy.

Add environment variable in Vercel:

```
NEXT_PUBLIC_API_URL=your_backend_url
```

---

## 🔮 Future Improvements

- 🔑 JWT authentication
- 👤 Profile page
- 📝 Resume builder
- 🤖 Chatbot career guide
- 📊 Admin dashboard
- 🗄️ Database integration

---

## 👩‍💻 Developer

**Usha Pithani** — AI and Full Stack Developer

- Backend: https://github.com/Ushapithani/backend
- Frontend: https://github.com/Ushapithani/frontend

---

## 🏁 Project

This project is built as an AI-Based Career Recommendation System using ML. Suitable for Final Year Project, Hackathon, and Portfolio.
