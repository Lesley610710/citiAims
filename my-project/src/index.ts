// src/index.ts

import express from 'express';
import path from 'path';
import { ExampleController } from './controllers/exampleController';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Initialize controllers
const exampleController = new ExampleController();

// Define routes
app.get('/example', exampleController.getExample);
app.post('/example', exampleController.createExample);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});