import { useState } from "react";

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {isLoginForm && (
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Welcome back
          </h2>
        )}

        <form className="space-y-4">
          {!isLoginForm && (
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            {isLoginForm ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLoginForm
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            onClick={() => setIsLoginForm(!isLoginForm)}
            className="text-orange-500 font-medium ml-1 hover:underline"
          >
            {isLoginForm ? "Create Account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
