import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import users from "../students/users.json";
import logo from "../assets/jkns-logo.png";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
  setError("");

  if (!username.trim() || !password.trim()) {
    setError("Please enter username and password");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    const user = users.find(
      (u) =>
        u.username === username.trim() &&
        u.password === password.trim()
    );
if (user) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", user.username);
  localStorage.setItem("role", user.role);

  if (remember) {
    localStorage.setItem("rememberUser", username);
  }

  navigate("/", { replace: true });

  return;
}

setLoading(false);
setError("Invalid Username or Password");
  }, 1000);
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center p-8">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full top-10 left-20"></div>

      <div className="absolute w-[450px] h-[450px] bg-blue-700/20 blur-[180px] rounded-full bottom-10 right-10"></div>

      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl grid lg:grid-cols-2">

        {/* Left Side */}
<form
  className="p-14 flex flex-col justify-center"
  onSubmit={(e) => {
    e.preventDefault();
    handleLogin();
  }}
>
          <img
            src={logo}
            alt=""
            className="w-20 mb-8"
          />

          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-400 mb-10">
            JKNS Engineering College
          </p>

          {/* Username */}

          <label className="text-gray-300 mb-2">
            Username
          </label>

          <div className="relative mb-6">

            <FaUser className="absolute left-4 top-4 text-cyan-400" />

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
            />

          </div>

          {/* Password */}

          <label className="text-gray-300 mb-2">
            Password
          </label>

          <div className="relative">

            <FaLock className="absolute left-4 top-4 text-cyan-400" />

            <input
              type={
                showPassword ? "text" : "password"
              }
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white outline-none focus:border-cyan-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-gray-400"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          <div className="flex justify-between items-center mt-5 mb-5">

            <label className="flex items-center gap-2 text-gray-300">

              <input
                type="checkbox"
                checked={remember}
                onChange={() =>
                  setRemember(!remember)
                }
              />

              Remember Me

            </label>

            <button className="text-cyan-400 hover:text-cyan-300">
              Forgot Password?
            </button>

          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg text-red-300 px-4 py-3 mb-5">
              {error}
            </div>
          )}

      <button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition duration-300 text-white font-semibold shadow-xl disabled:opacity-60"
>
  {loading ? "Signing In..." : "Sign In"}
</button>

        </form>

        {/* Right Side */}

        <div className="hidden lg:flex items-center justify-center p-10">

          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 w-full">

            <div className="flex justify-between mb-8">

              <div>

                <h2 className="text-white text-2xl font-bold">
                  Admin 
                </h2>

                <p className="text-gray-400">
                  JKNS 
                </p>

              </div>

              <img
                src={logo}
                className="w-14 h-14"
                alt=""
              />

            </div>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-gray-400">
                  Students
                </p>

                <h1 className="text-cyan-400 text-3xl font-bold">
                  335
                </h1>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-gray-400">
                  Teachers
                </p>

                <h1 className="text-green-400 text-3xl font-bold">
                  42
                </h1>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-gray-400">
                  Attendance
                </p>

                <h1 className="text-yellow-400 text-3xl font-bold">
                  96%
                </h1>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-gray-400">
                  Courses
                </p>

                <h1 className="text-pink-400 text-3xl font-bold">
                  24
                </h1>

              </div>

            </div>

            {/* Chart */}

            <div className="mt-10">

              <div className="h-40 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-end gap-2 p-5">

                {[40, 70, 55, 90, 65, 110, 80].map(
                  (v, i) => (
                    <div
                      key={i}
                      style={{
                        height: `${v}px`,
                      }}
                      className="flex-1 bg-cyan-400 rounded-t-lg"
                    />
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
</div>
    
  );
}