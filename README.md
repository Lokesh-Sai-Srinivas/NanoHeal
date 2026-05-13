# NanoHeal — AI-Powered Medical Assistant

NanoHeal is an empathetic AI healthcare companion designed to provide real-time symptom analysis and medical guidance. Originally developed for the **Smart India Hackathon (SIH) 2025**, it focuses on making healthcare more accessible to underserved rural communities through a localized, scalable approach.

## 🚀 Features

- **AI Chatbot**: Real-time conversational agent powered by **Gemini 2.5 Flash** for empathetic symptom guidance.
- **User Dashboard**: Personalized health tracking and history for individual patients.
- **Authority Dashboard**: A specialized interface for healthcare providers to monitor local health patterns and manage reports.
- **Doctor Recommendations**: Smart suggestions for verified local doctors based on specialization and symptoms.
- **Secure Authentication**: Robust user management and data security powered by **Firebase**.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons
- **Backend**: Node.js (Express)
- **AI Engine**: Google Gemini 2.5 Flash
- **Database & Auth**: Firebase / Google Cloud Firestore

## 📂 Project Structure

- `/client`: React frontend application.
- `/server`: Node.js Express backend and AI integration.

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+)
- Firebase Account
- Google AI (Gemini) API Key

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Lokesh-Sai-Srinivas/NanoHeal.git
   cd NanoHeal
   ```

2. **Backend Setup**:
   - Navigate to `/server`
   - Run `npm install`
   - Create a `.env` file with `GEMINI_API_KEY` and `FIREBASE_SERVICE_ACCOUNT_JSON`.
   - Start with `node server.js`

3. **Frontend Setup**:
   - Navigate to `/client`
   - Run `npm install`
   - Start with `npm run dev`

## ⚠️ Disclaimer

NanoHeal is an AI-driven informational tool. It is **not** a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for any medical concerns.
