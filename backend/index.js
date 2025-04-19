const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Todo API' });
});

// Sync database and start server
async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database connected and synchronized');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer(); 