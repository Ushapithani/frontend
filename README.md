# 🤖 AI CareerPath — AI-Based Career Recommendation System

> **AI CareerPath** is an AI/ML-powered career recommendation platform that analyzes a user's resume, skills, and interests to provide personalized career recommendations and career-readiness insights.

🌐 **Live Application:** https://frontend-nine-cyan-78.vercel.app/
💻 **Frontend Repository:** https://github.com/Ushapithani/AI-CAREER-PATH-FRONTEND
🔗 **Backend:** FastAPI-based ML backend

---

## 📌 Project Overview

Choosing the right career path can be difficult for students because they may not know which roles best match their skills, education, interests, and resume.

**AI CareerPath** addresses this problem by providing a web-based interface where users can upload their resumes and provide relevant skills/interests. The frontend communicates with a **FastAPI backend**, which processes the submitted information and returns career-related predictions and recommendations.

The project combines:

* Machine Learning
* Resume processing
* Career prediction
* React/Next.js frontend development
* REST API integration

---

# 🎯 Objectives

* Recommend suitable career paths based on user information.
* Analyze resume and skill information.
* Provide personalized career predictions.
* Present recommendations through an intuitive dashboard.
* Connect a modern frontend with an ML-powered backend.
* Make career exploration easier for students and job seekers.

---

# ✨ Key Features

## 📄 Resume Upload

Users can upload their resume through an easy-to-use interface.

### Workflow

```text
User
 ↓
Upload Resume
 ↓
Next.js Frontend
 ↓
FastAPI Backend
 ↓
Resume / Skill Processing
 ↓
ML Prediction
 ↓
Career Recommendations
 ↓
Dashboard
```

The current frontend README describes a `POST /predict` flow in which the frontend sends the uploaded resume to the backend and receives a score, detected skills, and career suggestions.

---

## 🎯 AI/ML-Based Career Recommendation

The system is designed to use an ML model on the backend to predict suitable career paths.

The frontend collects relevant user information and sends it to the FastAPI backend.

```text
Resume + Skills + Interests
          ↓
      Data Processing
          ↓
      Feature Extraction
          ↓
      ML Model
          ↓
   Career Prediction
          ↓
Career Recommendations
```

The frontend architecture explicitly describes the flow as:

**User → Next.js Frontend → FastAPI Backend → ML Model**.

---

# 🧠 Machine Learning Workflow

The conceptual ML workflow is:

### 1. Data Collection

Collect information relevant to career prediction, such as:

* Skills
* Education
* Resume information
* Interests
* Other career-related attributes

### 2. Data Preprocessing

Clean and prepare the data before passing it to the ML model.

Possible preprocessing steps include:

* Handling missing values
* Encoding categorical values
* Normalizing numerical features where required
* Converting resume information into usable features

### 3. Feature Extraction

Relevant information is converted into features that can be understood by the ML model.

For example:

```text
Python       → 1
Java         → 1
SQL          → 1
Machine Learning → 1
Web Development → 0
```

### 4. Model Prediction

The processed features are passed to the trained ML model.

```text
Input Features
      ↓
Trained ML Model
      ↓
Predicted Career
```

### 5. Recommendation

The prediction is returned by the FastAPI backend and displayed on the frontend dashboard.

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │        USER          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Next.js Frontend   │
                    │                      │
                    │ • Login              │
                    │ • Signup             │
                    │ • Resume Upload      │
                    │ • Dashboard          │
                    └──────────┬───────────┘
                               │
                          REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │   FastAPI Backend    │
                    │                      │
                    │ • Request Handling   │
                    │ • Data Processing    │
                    │ • ML Prediction      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    ML Prediction     │
                    │        Model         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Career Recommendation│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Dashboard       │
                    └──────────────────────┘
```

---

# 💻 Frontend Architecture

The frontend is built using **Next.js 14** and React.

The repository is organized around:

```text
AI-CAREER-PATH-FRONTEND/
│
├── app/
│   ├── page.tsx
│   ├── login/
│   ├── signup/
│   ├── dashboard/
│   └── upload/
│
├── lib/
│   └── api.ts
│
├── public/
│
├── types/
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

The repository currently contains `app`, `lib`, `public`, and `types` directories, along with the Next.js configuration and package files.

---

# 🛠️ Technology Stack

## Frontend

* **Next.js 14**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Framer Motion**
* **Axios / Fetch API**

## Backend

* **Python**
* **FastAPI**
* REST API

## AI / Machine Learning

* Machine Learning career prediction model
* Resume/skill-based feature processing
* Career recommendation

## Deployment

* **Vercel** — Frontend
* FastAPI backend — Separate deployment

The repository describes the frontend as Vercel-ready and configured to communicate with a FastAPI backend through `NEXT_PUBLIC_API_URL`.

---

# 🔌 API Integration

The frontend communicates with the backend using an API base URL.

Example configuration:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

For a deployed backend:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

The frontend's API layer is organized through `lib/api.ts`.

---

# 📤 Resume Prediction Flow

The main prediction workflow is:

```text
1. User logs in
        ↓
2. User uploads resume
        ↓
3. Frontend sends resume to backend
        ↓
4. Backend receives request
        ↓
5. Backend processes resume/skills
        ↓
6. ML model performs prediction
        ↓
7. Backend returns result
        ↓
8. Frontend displays career recommendation
```

The documented prediction endpoint is:

```text
POST /predict
```

The expected result includes information such as a score, detected skills, and career suggestions.

---

# 🖥️ Application Pages

### 🏠 Home

Introduces the AI CareerPath platform.

### 🔐 Login

Provides the user login interface.

### 📝 Signup

Allows users to create an account.

### 📄 Resume Upload

Allows users to upload their resume for career analysis.

### 📊 Dashboard

Displays the predicted career path and related results.

These pages are listed in the current repository documentation.

---

# 🎨 UI & User Experience

The application focuses on a modern and responsive user experience.

The frontend uses:

* Tailwind CSS for styling
* shadcn/ui for reusable UI components
* Framer Motion for animations
* Responsive layouts
* Dark/glassmorphism-inspired visual design

---

# 🚀 Getting Started

## Prerequisites

Install:

* Node.js 18+
* npm or yarn
* Running FastAPI backend

The repository currently specifies Node.js 18+ and a FastAPI backend as prerequisites.

---

## 1. Clone Repository

```bash
git clone https://github.com/Ushapithani/AI-CAREER-PATH-FRONTEND.git
cd AI-CAREER-PATH-FRONTEND
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment

Create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

## 4. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# ☁️ Deployment

The frontend can be deployed using **Vercel**.

### Deployment Steps

```text
GitHub Repository
       ↓
Import into Vercel
       ↓
Configure Environment Variable
       ↓
Build
       ↓
Deploy
```

Environment variable:

```env
NEXT_PUBLIC_API_URL=YOUR_BACKEND_URL
```

---

# 🔐 Environment Variables

Do not commit secrets or private credentials to GitHub.

Example:

```env
NEXT_PUBLIC_API_URL=your_backend_url
```

Environment-specific configuration allows the same frontend application to communicate with different backend environments.

---

# 📈 Future Improvements

Planned improvements include:

* JWT authentication
* User profile
* AI-powered career chatbot
* Resume builder
* Admin dashboard
* Database integration
* More advanced career recommendations
* Skill-gap analysis
* Personalized learning roadmap
* Job-role recommendations

The current repository also lists JWT authentication, profile functionality, resume builder, chatbot, admin dashboard, and database integration as future improvements.

---

# 🎓 AI/ML Interview Relevance

This project demonstrates practical understanding of:

* Machine Learning
* Career prediction
* Feature engineering concepts
* Resume data processing
* REST API integration
* FastAPI
* Next.js
* Frontend-backend communication
* AI-based recommendation systems

For an AI/ML internship, the important technical flow is:

```text
User Data
   ↓
Data Preprocessing
   ↓
Feature Extraction
   ↓
ML Model
   ↓
Prediction
   ↓
Career Recommendation
```

---

# 💡 Key Learning Outcomes

Through this project, I gained practical experience in:

* Building an ML-powered web application
* Connecting a Next.js frontend with FastAPI
* Designing REST API communication
* Handling resume uploads
* Integrating ML predictions into a web interface
* Creating responsive and reusable UI components
* Deploying a modern web application

---

# 👩‍💻 Developer

**Usha Pithani**

B.Tech — Artificial Intelligence & Machine Learning

GitHub: https://github.com/Ushapithani

---

## ⭐ Project

**AI CareerPath** is designed to demonstrate how Machine Learning can be integrated into a practical career recommendation application to help students make more informed career decisions.
