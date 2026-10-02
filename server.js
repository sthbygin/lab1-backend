// server.js - Simple Express Server 
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 5000; 
  
// Middleware to read JSON data 
app.use(express.json()); 
// Health-check endpoint 
app.get('/', (req, res) => { 
res.status(200).json({ 
message: 'Welcome to Web Backend & Database Lab 1 API!', 
status: 'Success', 
timestamp: new Date() 
}); 
}); 
app.get('/api/health', (req, res) => { 
res.status(200).json({ status: 'OK', uptime: process.uptime() }); 
}); 
const server = app.listen(PORT, () => { 
console.log(`Server is running at: http://localhost:${PORT}`); 
}); 
server.on('error', (err) => { 
if (err.code === 'EADDRINUSE') { 
console.error(`[ERROR] Port ${PORT} is already in use. Please choose a different port 
or close the application currently using it.`); 
} else { 
console.error(`[ERROR] Failed to start server:`, err.message); 
} 
process.exit(1); 
}); 