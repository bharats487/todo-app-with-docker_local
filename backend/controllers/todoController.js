const { Todo } = require('../models');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      order: [['createdAt', 'DESC']]
    });
    return res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    return res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

// Get a single todo by id
exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    return res.json(todo);
  } catch (error) {
    console.error('Error fetching todo:', error);
    return res.status(500).json({ error: 'Failed to fetch todo' });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Todo text is required' });
    }
    
    const todo = await Todo.create({ text });
    return res.status(201).json(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    return res.status(500).json({ error: 'Failed to create todo' });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    
    const todo = await Todo.findByPk(id);
    
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    // Update fields if provided
    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    
    await todo.save();
    return res.json(todo);
  } catch (error) {
    console.error('Error updating todo:', error);
    return res.status(500).json({ error: 'Failed to update todo' });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    await todo.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting todo:', error);
    return res.status(500).json({ error: 'Failed to delete todo' });
  }
}; 