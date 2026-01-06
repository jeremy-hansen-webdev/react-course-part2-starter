import { ReactNode, useReducer } from 'react';
import { TasksContext } from './tasksContext';

export interface Task {
  id: number;
  title: string;
}
interface AddTask {
  type: 'ADD_TASK';
  task: Task;
}
interface DeleteTask {
  type: 'DELETE_TASK';
  taskId: number;
}

interface Props {
  children: ReactNode;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  const { type } = action;
  switch (type) {
    case 'ADD_TASK':
      return [action.task, ...tasks];
    case 'DELETE_TASK':
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TasksContext.Provider>
    </div>
  );
};

export default TasksProvider;
