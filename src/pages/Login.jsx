import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGraduationCap } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/login`,
          {
            email,
            password,
          }
        );

        localStorage.setItem("token", response.data.token);

        toast.success("Login Successful!");
navigate("/");
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Login Failed"
        );
      }
    }
  };

  return (
    <div className="login-page">

      {/* Left Section */}
      <div className="login-left">
        <FaGraduationCap className="hero-icon" />

        <h1>Career Compass</h1>

        <p>
          Discover your ideal career path, explore courses,
          and shape your future with confidence.
        </p>
      </div>

      {/* Right Section */}
      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back</h2>

          <p className="login-subtitle">
            Login to continue your journey.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {errors.password && (
                <span className="error">{errors.password}</span>
              )}

              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <button
              type="button"
              className="google-btn"
            >
              Continue with Google
            </button>

          </form>

          <div className="login-links">
            <p>
              Don't have an account?{" "}
              <Link to="/register">
                Create Account
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;