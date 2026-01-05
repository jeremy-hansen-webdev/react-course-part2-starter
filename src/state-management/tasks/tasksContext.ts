import { Dispatch } from 'react';
import { Task, TaskAction } from './tasksReducer';
import React from 'react';

interface TasksContextType {
  tasks: Task[];
  taskDispatch: Dispatch<TaskAction>;
}

export const TasksContent = React.createContext<TasksContextType>(
  {} as TasksContextType
);
