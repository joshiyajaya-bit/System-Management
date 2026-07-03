import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          JKNS Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}