import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const [status, setStatus] = useState("Sign Up");
  const [passwordStrength, setPasswordStrength] = useState({ percent: 0, color: "#ff6b6b" });
  const [passwordMatch, setPasswordMatch] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
    if (name === "confirmPassword") {
      setPasswordMatch(value === form.password ? "Passwords match!" : "Passwords don't match!");
    }
    if (name === "password" && form.confirmPassword) {
      setPasswordMatch(form.confirmPassword === value ? "Passwords match!" : "Passwords don't match!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    setStatus("Creating...");
    setTimeout(() => {
      setStatus("Account Created!");
      setTimeout(() => setStatus("Sign Up"), 1500);
    }, 1500);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/(?=.*[a-z])/.test(password)) strength++;
    if (/(?=.*[A-Z])/.test(password)) strength++;
    if (/(?=.*[0-9])/.test(password)) strength++;
    if (/(?=.*[!@#$%^&*])/.test(password)) strength++;

    const colors = ["#ff6b6b", "#ffa502", "#feca57", "#1dd1a1", "#2ecc71"];
    const percent = Math.min(strength * 25, 100);
    return { percent, color: colors[strength - 1] || colors[0] };
  };

  return (
    <div className="signup-gradient min-screen-center">
      <div className="signup-card">
        <div className="signup-inner">
          <div className="signup-header">
            <div className="signup-icon floating">
              <i className="fas fa-user"></i>
            </div>
            <h2>Create Account</h2>
            <p>Join our community</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-row">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <i className="fas fa-user"></i>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <i className="fas fa-lock"></i>
              <div
                className="password-strength"
                style={{
                  width: `${passwordStrength.percent}%`,
                  backgroundColor: passwordStrength.color,
                }}
              ></div>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              <i className="fas fa-lock"></i>
              <div className={`password-match ${passwordMatch.includes("don't") ? "error" : "success"}`}>
                {passwordMatch}
              </div>
            </div>

            <div className="signup-options">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />{" "}
                Remember me
              </label>
              {/* <a href="#">Forgot password?</a> */}
            </div>

            <button type="submit" className="signup-btn pulse">
              {status}
            </button>
          </form>

          <div className="signup-divider">
            <span>Or continue with</span>
          </div>

          <div className="signup-socials">
            <button className="social-btn facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-btn google">
              <i className="fab fa-google"></i>
            </button>
            <button className="social-btn twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>

          <p className="signup-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
