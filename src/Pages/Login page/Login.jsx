import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import forgotPassword from "../ForgotPasswordpage/forgot";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1000);
      }, 1500);
    }
  };

return (
    <div className="gradient-bg min-h-auto flex items-center justify-center pt-14 pb-14">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] mx-auto flex items-center justify-center mb-4 shadow-lg">
                            <i className="fas fa-user text-white text-3xl"></i>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600">Login to your account</p>
                    </div>

                    <form id="loginForm" className="space-y-6" onSubmit={handleLogin}>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none"
                                placeholder="Email Address"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fas fa-envelope text-[#00c9ff]"></i>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none"
                                placeholder="Password"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fas fa-lock text-[#00c9ff]"></i>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#00c9ff] focus:ring-[#92fe9d] border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link
                                    to="/forgotPassword"
                                    className="font-medium text-[#00c9ff] hover:text-[#92fe9d] transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`btn-gradient w-full py-3 px-4 rounded-lg text-white font-bold uppercase tracking-wider pulse`}
                                id="loginBtn"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>
                                        <i className="fas fa-spinner fa-spin"></i> Logging in...
                                    </span>
                                ) : success ? (
                                    <span>
                                        <i className="fas fa-check"></i> Success!
                                    </span>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div>
                                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200 transition-colors">
                                    <i className="fab fa-facebook-f text-[#00c9ff]"></i>
                                </button>
                            </div>
                            <div>
                                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200 transition-colors">
                                    <i className="fab fa-google text-[#00c9ff]"></i>
                                </button>
                            </div>
                            <div>
                                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200 transition-colors">
                                    <i className="fab fa-twitter text-[#00c9ff]"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?
                            <Link
                                to="/SignUp"
                                className="font-medium text-[#00c9ff] hover:text-[#92fe9d] transition-colors"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;
