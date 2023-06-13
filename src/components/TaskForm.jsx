import { useEffect, useState } from 'react'
import { addTask, getTask, updateTask } from '../api/tasks.api';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const initialState = {
  title: '',
  description: ''
}

const TaskForm = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [task, setTask] = useState(initialState)

  useEffect(() => {
    if (params?.id) {
      getTaskEdit(params.id)
    }
  }, [params.id])

  const getTaskEdit = async (id) => {
    const doc = await getTask(id)
    const { title, description } = doc.data()
    setTask({ title, description, id: doc.id })
  }

  const handleChangeInputs = (e) => setTask({ ...task, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    let error = false
    Object.keys(task).forEach(key => {
      if (task[key].trim() === '') {
        error = true
        return
      }
    })

    if (error) {
      toast.error('Title or Description are required')
      return
    }

    if (params.id) {
      handleUpdateTask()
    } else {
      handleAddTask()
    }
  }

  const handleAddTask = async () => {
    try {
      await addTask({ ...task, createdAt: Date.now() })
      setTask(initialState)
      toast.success('Task saved successfully')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdateTask = async () => {
    try {
      await updateTask(params.id, task)
      toast.success('Task updated successfully')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <div className="text-left mb-4">
        <Link to='/' className='btn-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Ir a inicio</span>
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <h2 className='text-center'>{params.id ? 'Edit' : 'New'} task</h2>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                className='form-control'
                type="text"
                id='title'
                name="title"
                onChange={handleChangeInputs}
                value={task.title}
                maxLength={150}
                autoFocus
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="description">Description:</label>
              <textarea
                className='form-control'
                rows="3"
                id="description"
                name="description"
                onChange={handleChangeInputs}
                value={task.description}
                maxLength={500}
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button className='btn btn-primary btn-lg' type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TaskForm