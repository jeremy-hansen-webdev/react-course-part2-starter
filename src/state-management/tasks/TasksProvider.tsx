import { ReactNode, useReducer } from 'react';
import { TasksContent } from './tasksContext';

export interface Task {
    id: number;
    title: string
}
interface AddTask {
  type: 'ADD';
  task: Task;
}
interface DeleteTasks {
    type: 'DELETE'
    taskId: number
}

export type TaskAction = AddTask | DeleteTasks

export const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.task, ...tasks];
    case 'DELETE':
        return tasks.filter(t => t.id !== action.taskId)
  }
};


interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  return (
    <TasksContent.Provider value={{ tasks, taskDispatch }}>
      {children}
    </TasksContent.Provider>
  );
};

export default TasksProvider;
