import { useLocation, Link } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link className="navbar-brand" to="/">Tasks Firebase</Link >
          {
            location.pathname === '/' && <Link to="/add" className="btn btn-primary btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Header