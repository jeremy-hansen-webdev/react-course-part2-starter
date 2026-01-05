import './App.css';

import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import LoginStatus from './state-management/LoginStatus';
import TaskProvider from './state-management/tasks/TasksProvider';
import AuthProvider from './state-management/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <LoginStatus />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
