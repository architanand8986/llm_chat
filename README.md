# LLM Chat App (Groq API + React)

A lightweight, responsive chat interface powered by the [Groq API](https://groq.com/) for blazing-fast large language model responses.
Built with **React** and **Tailwind CSS**, this app supports multiple Groq models, persistent chat history, and a clean UI.
<br>
To check out the deployed app <a href = "https://llm-chat-mu.vercel.app/">Click here</a>

---

## 🚀 Features

- **Multiple LLM Models** – Choose from Groq's available models.
- **Streaming Responses** – Messages appear in real-time.
- **Persistent Chat** – Chat history stored in `localStorage`.
- **Clear Chat** – Reset conversation with one click.
- **Responsive Design** – Works on all screen sizes.

---

## 📦 Tech Stack

- **React** (Functional Components + Hooks)
- **Tailwind CSS**
- **Groq SDK** (`groq-sdk`)
- **Vite**

---

## 🛠 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/architanand8986/llm_chat.git
   cd llm_chat
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Add your Groq API Key**
   Create a `.env` file in the root directory:

   ```env
   NEXT_PUBLIC_GROQ_API_KEY=your_api_key_here
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

---

## 📂 Project Structure

```
llm_chat/
├── backend/                     # Backend logic (if any)
├── public/                      # Public assets
├── src/
│   ├── assets/                  # Images and other static files
│   ├── components/              # UI components
│   │   ├── ChatWindow.jsx
│   │   └── ModelSelection.jsx
│   ├── hooks/                   # Custom React hooks
│   │   ├── useCache.js
│   │   ├── useChat.js
│   │   └── useGroq.js
│   ├── utils/                   # Helper functions / constants
│   │   └── constants.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env                         # Environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🧠 Usage

1. Select a model from the dropdown.
2. Type your question in the input field.
3. Press **Enter** or click **Send**.
4. Use **Clear Chat** to reset the conversation.

---

## 🔧 Configuration

To update available models, edit:

```
src/utils/constants.js
```

Example:

```javascript
export const GROQ_MODELS = ["llama-3.3-70b-versatile", "llama-2-70b-chat"];
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

- [Groq](https://groq.com/) for their API.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
