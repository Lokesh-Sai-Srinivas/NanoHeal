# NanoHeal

NanoHeal is an AI-powered health assistant application designed to provide empathetic and cautious health information. It features a chat interface powered by Google's Gemini AI, a dashboard for health authorities, and user authentication via Firebase.

## Project Structure

- **`/client`**: The frontend application built with React and Vite.
- **`/server`**: The backend API built with Express and Node.js.

## Key Features

- **AI Chat Assistant**: Uses Google Gemini AI to analyze symptoms and provide general health advice.
- **Authority Dashboard**: Allows health authorities to manage health reports and track case counts.
- **User Authentication**: Secure login and signup powered by Firebase.
- **Doctor Directory**: Connects users with verified local healthcare professionals.

## Tech Stack

- **Frontend**: React, Vite, CSS.
- **Backend**: Node.js, Express.
- **AI**: Google Generative AI (Gemini).
- **Database & Auth**: Firebase Firestore and Firebase Authentication.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Firebase project and service account.
- Google Gemini API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lokesh-Sai-Srinivas/NanoHeal.git
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

### Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=3001
GEMINI_API_KEY=your_gemini_api_key
FIREBASE_SERVICE_ACCOUNT_JSON={"type": "service_account", ...}
```

Update the Firebase configuration in `client/src/App.jsx` with your web app's credentials.

### Running the App

1. Start the backend server:
   ```bash
   cd server
   node server.js
   ```

2. Start the frontend client:
   ```bash
   cd client
   npm run dev
   ```

---
⚠️ **Disclaimer**: This application is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional for medical concerns.
