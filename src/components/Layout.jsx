import Header from './Header'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='mt-4'>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  )
}

export default Layout