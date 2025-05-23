const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// GET /api/todos - Get all todos
router.get('/', todoController.getAllTodos);

// GET /api/todos/:id - Get a single todo
router.get('/:id', todoController.getTodoById);

// POST /api/todos - Create a new todo
router.post('/', todoController.createTodo);

// PUT /api/todos/:id - Update a todo
router.put('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router; 