import React, { useState } from "react";
import "./forgot.css";
import { Link } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css"; // or fontawesome CDN in index.html

const  ForgotPassword = () =>{
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({ new: false, confirm: false });
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Reset Password");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    setLoading(true);
    setButtonText("Resetting...");

    setTimeout(() => {
      setButtonText("Password Changed!");
      setTimeout(() => {
        setButtonText("Reset Password");
        setNewPassword("");
        setConfirmPassword("");
        setLoading(false);
      }, 1500);
    }, 2000);
  };

  return (
    <div className="gradient-bg min-h-full flex items-center justify-center p-2">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
          <div className="p-4">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] mx-auto flex items-center justify-center mb-4 floating pulse">
                <i className="fas fa-key text-white text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
              <p className="text-gray-600">Create a new secure password</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  className="input-field w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => ({ ...prev, new: !prev.new }))}
                >
                  <i className={`fas ${showPassword.new ? "fa-unlock" : "fa-lock"} text-[#00c9ff]`}></i>
                </div>
              </div>

              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  className="input-field w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
                >
                  <i className={`fas ${showPassword.confirm ? "fa-unlock" : "fa-lock"} text-[#00c9ff]`}></i>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600">
                Password must be at least 8 characters long
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-gradient w-full py-3 px-4 rounded-lg text-white font-bold uppercase tracking-wider pulse relative overflow-hidden"
                  disabled={loading}
                >
                  <span className="relative z-10">
                    {loading ? <i className="fas fa-spinner fa-spin"></i> : null} {buttonText}
                  </span>
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["facebook-f", "google", "twitter"].map((icon, index) => (
                  <div key={index}>
                    <button
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                      onMouseEnter={(e) => {
                        const colors = ["#00c9ff", "#92fe9d", "#ff6b6b", "#ffa502", "#7d5fff"];
                        e.currentTarget.querySelector("i").style.color =
                          colors[Math.floor(Math.random() * colors.length)];
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.querySelector("i").style.color = "#00c9ff";
                      }}
                    >
                      <i className={`fab fa-${icon} text-[#00c9ff]`}></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#00c9ff] hover:text-[#92fe9d] transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;