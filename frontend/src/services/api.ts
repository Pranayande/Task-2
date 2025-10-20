import axios from 'axios';
import { Task, CreateTaskRequest } from '../types/Task';

// Point directly to Spring Boot backend; controller has @CrossOrigin enabled
const API_BASE_URL = 'http://localhost:8081/Tasks';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskApi = {
  // Get all tasks
  getAllTasks: async (): Promise<Task[]> => {
    const response = await api.get('');
    return response.data;
  },

  // Get task by ID
  getTaskById: async (id: string): Promise<Task> => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  // Create/Update task
  saveTask: async (task: CreateTaskRequest): Promise<Task> => {
    const response = await api.post('/add', task);
    return response.data;
  },

  // Delete task
  deleteTask: async (id: string): Promise<Task> => {
    const response = await api.delete(`/Delete/${id}`);
    return response.data;
  },

  // Search tasks by name
  searchTasksByName: async (name: string): Promise<Task[]> => {
    const response = await api.get(`/Search/${encodeURIComponent(name)}`);
    return response.data;
  },

  // Execute task
  executeTask: async (id: string): Promise<Task> => {
    const response = await api.put(`/Execute/${id}`);
    return response.data;
  },
};

export default api;

