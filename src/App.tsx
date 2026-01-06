import './App.css';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TasksProvider from './tasks/TasksProvider';
import Counter from './state-management/counter/Counter';

function App() {
  return (
    <>
      <TasksProvider>
        <NavBar />
        <Counter />
        <HomePage />
      </TasksProvider>
    </>
  );
}

export default App;
