import { useState } from "react";
import {
  login,
  register,
} from "../api/authApi";
import { saveLogin } from "../services/authService";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
   onLoginSuccess: () => void;
};

function LoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: LoginModalProps) {

  // -------------------------------
  // Mode
  // -------------------------------

  const [isRegister, setIsRegister] = useState(false);

  // -------------------------------
  // Login Fields
  // -------------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // -------------------------------
  // Register Fields
  // -------------------------------

  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // -------------------------------
  // UI States
  // -------------------------------

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  if (!isOpen) return null;

  // -------------------------------
  // Reset Form
  // -------------------------------

  const clearForm = () => {

    setEmail("");
    setPassword("");

    setName("");

    setConfirmPassword("");

    setMessage("");

    setRemember(false);

    setShowPassword(false);
  };

  // -------------------------------
  // Register Validation
  // -------------------------------

  const handleRegister = async () => {

  setMessage("");

  if (!name.trim()) {
    setIsError(true);
    setMessage("Please enter your full name.");
    return;
  }

  if (!email.trim()) {
    setIsError(true);
    setMessage("Please enter your email.");
    return;
  }

  if (!password.trim()) {
    setIsError(true);
    setMessage("Please enter your password.");
    return;
  }

  if (password.length < 8) {
    setIsError(true);
    setMessage("Password must contain at least 8 characters.");
    return;
  }

  if (password !== confirmPassword) {
    setIsError(true);
    setMessage("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {

    await register({
      name,
      email,
      password,
    });

    setLoading(false);

    setIsError(false);

    setMessage(
      "Account created successfully. Please login."
    );

    setTimeout(() => {

      clearForm();

      setIsRegister(false);

    }, 1200);

  } catch (error: any) {

    setLoading(false);

    setIsError(true);

    if (error.response?.data?.detail) {
      setMessage(error.response.data.detail);
    } else {
      setMessage("Registration failed.");
    }

  }

};

  // -------------------------------
  // Login Handler
  // -------------------------------

  const handleLogin = async () => {

  setMessage("");

  if (!email.trim()) {
    setIsError(true);
    setMessage("Please enter your email.");
    return;
  }

  if (!password.trim()) {
    setIsError(true);
    setMessage("Please enter your password.");
    return;
  }

  setLoading(true);

  try {

    const result = await login({
      email,
      password,
    });

    saveLogin(result);

    setLoading(false);

    setIsError(false);

    setMessage("Login successful.");

    onLoginSuccess();

    setTimeout(() => {

      clearForm();

      onClose();

    }, 1000);

  } catch {

    setLoading(false);

    setIsError(true);

    setMessage("Invalid email or password.");

  }

};

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 p-8">

        {/* Close */}

        <button
          onClick={() => {
            clearForm();
            onClose();
          }}
          className="absolute right-5 top-5 text-slate-400 transition hover:text-white"
        >
          ✕
        </button>

        {/* Header */}

        <div className="mb-8 flex flex-col items-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10">
            <span className="text-4xl">
              {isRegister ? "📝" : "🔒"}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white">

            {isRegister
              ? "Create Account"
              : "Welcome Back"}

          </h2>

          <p className="mt-2 text-center text-sm text-slate-400">

            {isRegister
              ? "Create your OpsNova AI account"
              : "Login to continue"}

          </p>

        </div>

        {/* Alert */}

        {message && (

          <div
            className={`mb-5 rounded-xl border px-4 py-3 text-sm ${
              isError
                ? "border-red-500 bg-red-500/10 text-red-300"
                : "border-green-500 bg-green-500/10 text-green-300"
            }`}
          >
            {message}
          </div>

        )}

        {/* Register Fields */}

        {isRegister && (

          <>

            <div className="mb-4">

              <label className="mb-2 block text-sm text-slate-300">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Full Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

            </div>

          </>

        )}

                {/* Email */}

        <div className="mb-4">

          <label className="mb-2 block text-sm text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Password */}

        <div className="mb-4">

          <label className="mb-2 block text-sm text-slate-300">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 pr-12 text-white outline-none transition focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-slate-400 hover:text-white"
            >
              {showPassword ? "🙈" : "👁"}
            </button>

          </div>

        </div>

        {/* Confirm Password */}

        {isRegister && (

          <div className="mb-4">

            <label className="mb-2 block text-sm text-slate-300">
              Confirm Password
            </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-slate-400 hover:text-white"
            >
              {showPassword ? "🙈" : "👁"}
            </button>

          </div>
        </div>

        )}

        {/* Remember */}

        {!isRegister && (

          <div className="mb-6 flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-300">

              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />

              Remember Me

            </label>

            <button
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

        )}

        {/* Buttons */}

        <button
          onClick={() => {

            if (isRegister) {

              handleRegister();

            } else {

              handleLogin();

            }

          }}
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-60"
        >

          {loading
            ? "Please wait..."
            : isRegister
            ? "Create Account"
            : "Login"}

        </button>

        {/* Divider */}

        <div className="my-6 flex items-center">

          <div className="h-px flex-1 bg-slate-700"></div>

          <span className="px-4 text-sm text-slate-500">
            or
          </span>

          <div className="h-px flex-1 bg-slate-700"></div>

        </div>

        {/* Switch */}

        <p className="text-center text-sm text-slate-400">

          {isRegister
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            onClick={() => {

              clearForm();

              setIsRegister(!isRegister);

            }}
            className="ml-2 font-semibold text-blue-400 hover:underline"
          >

            {isRegister
              ? "Login"
              : "Create Account"}

          </button>

        </p>

      </div>

    </div>

  );

}

export default LoginModal;