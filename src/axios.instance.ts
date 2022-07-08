import axios from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
