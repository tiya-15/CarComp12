import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import toast from "react-hot-toast";
import "../pages/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
  localStorage.removeItem("token");

  toast.success("Logged Out Successfully!");

  navigate("/");
};
  return (
    <header className="navbar">

      {/* Logo */}

      <Link to="/" className="navbar-logo">
        <FaCompass className="logo-icon" />

        <div className="logo-text">
          <span className="career">Career</span>
          <span className="compass">Compass</span>
        </div>
      </Link>

      {/* Navigation */}

      <nav className="navbar-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/careers"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Careers
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Courses
        </NavLink>

        <NavLink
          to="/exams"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Exams
        </NavLink>

        <NavLink
          to="/assistant"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Assistant
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          FAQ
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          History
        </NavLink>
      </nav>

      {/* Right Section */}

      <div className="navbar-actions">

        <Link
          to="/navigator"
          className="assessment-btn"
        >
          Take Assessment
        </Link>

        {token ? (
          <button
            className="login-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>
        )}



      </div>

    </header>
  );
}

export default Navbar;