import { useContext } from 'react';
import TaskList from '../tasks/TaskList';
import { AuthContext } from './auth/authContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>{user ? 'Hello ' + user : null}</h1>
      <TaskList />
    </>
  );
};

export default HomePage;
