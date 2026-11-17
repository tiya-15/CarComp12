import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
} from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/register`,
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );

        toast.success("Account Created Successfully!");

        navigate("/login");
      } catch (error) {
        toast.error(
  error.response?.data?.message ||
    "Registration Failed"
);
      }
    }
  };

  return (
    <div className="register-page">

      {/* Left Section */}
      <div className="register-left">

        <FaUserGraduate className="hero-icon" />

        <h1>Join Career Compass</h1>

        <p>
          Create your account and start exploring
          careers, courses, and personalized
          recommendations.
        </p>

      </div>

      {/* Right Section */}
      <div className="register-right">

        <div className="register-card">

          <h2>Create Account</h2>

          <p className="register-subtitle">
            Begin your career journey today.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <span className="error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span className="error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
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
                <span className="error">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <div className="password-wrapper">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {errors.confirmPassword && (
                <span className="error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="register-btn"
            >
              Create Account
            </button>

            <button
              type="button"
              className="google-btn"
            >
              Continue with Google
            </button>

          </form>

          <div className="register-links">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;