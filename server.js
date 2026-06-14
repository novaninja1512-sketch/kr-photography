import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from './api/inquiry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API route mapping to match Vercel Serverless Function
app.post('/api/inquiry', (req, res) => {
  handler(req, res);
});

// Serve compiled React build in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Middleware to serve index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Local Express Server listening on http://localhost:${PORT}`);
});
