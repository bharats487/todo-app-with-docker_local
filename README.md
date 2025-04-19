# Todo App with Docker

A simple Todo application with React frontend, Express backend, and PostgreSQL database, all containerized with Docker-Desktop (Need to install on window machine).

![Todo App Screenshot](./screenshot.png)

## Prerequisites

- Docker Desktop installed and running

## Getting Started

1. Clone this repository
2. Start the application:

```bash
docker-compose up
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Features

- Create, read, update, and delete todo items
- Mark todos as completed or active
- Data persistence using PostgreSQL
- Containerized deployment with Docker

## Project Structure

```
.
├── docker-compose.yml        # Docker Compose configuration
├── frontend/                 # React frontend application
│   ├── Dockerfile
│   ├── public/
│   └── src/
├── backend/                  # Express backend API
│   ├── Dockerfile
│   ├── controllers/
│   ├── models/
│   └── routes/
```

## API Endpoints

- **GET /api/todos** - Get all todos
- **GET /api/todos/:id** - Get a specific todo
- **POST /api/todos** - Create a new todo
- **PUT /api/todos/:id** - Update a todo
- **DELETE /api/todos/:id** - Delete a todo

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where it's running, or run:

```bash
docker-compose down
```

To completely remove the volumes (database data) as well:

```bash
docker-compose down -v
``` 
