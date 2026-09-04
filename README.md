# AI CareerPath – Frontend

**Next.js, React, TypeScript, Tailwind CSS, FastAPI**

AI CareerPath Frontend is a modern web interface for an **AI-powered resume analysis and career recommendation system**. It connects with a FastAPI backend to analyze uploaded resumes and display career predictions.

## 🚀 Features

* 📄 Resume upload
* 🛠️ Skills and interests input
* 🤖 AI/ML-based career prediction
* 📊 Resume score display
* 🔍 Detected skills display
* 🎯 Career recommendations
* ⚡ FastAPI REST API integration
* 📱 Responsive user interface
* 🌙 Modern dashboard interface

## 🔄 Application Workflow

```text
User
 ↓
Upload Resume
 ↓
Enter Skills / Interests
 ↓
Next.js Frontend
 ↓
FastAPI Backend
 ↓
Machine Learning Model
 ↓
Career Prediction
 ↓
Results Dashboard
```

## 🔌 Backend Integration

The frontend communicates with the FastAPI backend through REST APIs.

```text
POST /predict
```

The frontend sends the resume and relevant user information to the backend.

The backend processes the input and returns:

* Resume score
* Detected skills
* Predicted career roles

The frontend then displays these results to the user.

## 🛠️ Technology Stack

* Next.js 14
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* FastAPI
* REST APIs
* Axios / Fetch

## 📁 Project Structure

```text
AI-CAREER-PATH-FRONTEND/
│
├── app/
├── lib/
├── public/
├── types/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🎯 Objective

The objective of the frontend is to provide a simple and interactive interface where users can upload their resumes and receive **ML-based career predictions and recommendations** from the FastAPI backend.

## 👩‍💻 Author

**Usha Pithani**
