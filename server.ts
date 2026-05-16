import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cors());

  // Initialize Gemini
  const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API Routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not set in the environment.' });
      }

      const chat = genAI.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are an AI Medical Insurance Assistant for MedClaim (VibeCode InsureMed).
          Your goal is to help users understand their medical insurance policies, explain common insurance terms (deductibles, premiums, co-payments), and guide them through the claim simulation process.
          Be professional, empathetic, and clear. 
          If a user asks about specific medical advice, tell them to consult a professional doctor.
          You can reference features like "Claim Simulator", "Document Center", and "My Policies" available in the app.`,
        },
      });

      const response = await chat.sendMessage({ message });
      
      res.json({ text: response.text });
    } catch (error: unknown) {
      console.error('Gemini API Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
      res.status(500).json({ error: errorMessage });
    }
  });

  // Use Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
