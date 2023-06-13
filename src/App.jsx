import Layout from './components/Layout';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>

  )
}

export default App