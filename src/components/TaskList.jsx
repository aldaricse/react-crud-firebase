import { useEffect, useState } from 'react'
import { getOnSnapshotTasks } from '../api/tasks.api'
import TaskCard from '../components/TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getAllTasks = () => {
      // const querySnapshot = await getTasks()
      getOnSnapshotTasks(querySnapshot => {
        let doctasks = []
        querySnapshot.forEach(doc => {
          doctasks.push({ ...doc.data(), id: doc.id })
        });

        const orderDoctasks = doctasks.sort((a, b) => b.createdAt - a.createdAt);
        setTasks(orderDoctasks);
      })
    }
    getAllTasks()
  }, [])

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1>Task list</h1>
      </div>
      <div className="row mt-4">
        {
          tasks?.map(task => <TaskCard key={task.id} {...task} />)
        }
      </div>
    </div>
  )
}

export default TaskList