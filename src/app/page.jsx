"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login");
  const [profile, setProfile] = useState(null);
  const [apiError, setApiError] = useState("");

  const islogin = mode == "login";

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    const url = islogin ? "/api/auth/login" : "/api/auth/signup";
    const body = islogin
      ? { email: data.email, password: data.password }
      : data;

    try {
      const respone = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await respone.json();
      console.log(result);

      if (!respone.ok) {
        setError("root.serverError", { message: result.message });
      }
    } catch {}
  };

  const getProfile = async () => {
    setApiError("");
    setProfile(null);
    try {
      const respone = await fetch("/api/user/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const result = await respone.json();
      if (!respone.ok) {
        setApiError(`${respone.status} : ${result.message}`);
      }
      setProfile(result.user);
    } catch (error) {
      setApiError("Not connect to the server!");
    }
  };

  const switchMode = () => {
    setMode(islogin ? "signup" : "login");
    reset();
  };

  if (user) {
    return (
      <main className="min-h-screen bg-[#f5f1e9] flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-2xl border border-[#d8c9a5] bg-white p-8 shadow-[0_20px_60px_rgba(30,40,55,0.10)]">
          <h1 className="mb-6 text-3xl font-serif font-bold text-[#17263c]">
            سلام {user.name}
          </h1>
          <p className="mb-2 text-sm font-semibold text-[#9b7b3c]">
            Access Token
          </p>
          <p className="mb-6 break-all rounded-xl bg-[#f8f5ef] p-4 text-sm text-[#555]">
            {accessToken}
          </p>
          {apiError && (
            <p className="mb-4 rounded-lg bg-red-50 p-3 text-red-600">
              {apiError}
            </p>
          )}
          {profile && (
            <p className="break-all rounded-xl bg-[#f8f5ef] p-4 text-sm text-[#555]">
              {JSON.stringify(profile)}
            </p>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f1e9] px-5 py-12">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#e8ddc8]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#d9d0bd]/40 blur-3xl" />

      {/* Main Card */}
      <div className="relative w-full max-w-[460px] overflow-hidden rounded-[28px] border border-[#d8c9a5] bg-[#fffefa] px-7 py-10 shadow-[0_25px_80px_rgba(30,40,55,0.12)] sm:px-12 sm:py-12">
        {/* Top Decoration */}
        <div className="mb-9 flex flex-col items-center text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d9c49b] bg-[#17263c] shadow-lg shadow-[#17263c]/15">
            <span className="font-serif text-3xl font-bold text-[#d8b978]">
              L
            </span>
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[5px] text-[#a68a55]">
            LUXURY MEMBERSHIP
          </p>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#17263c]">
            {islogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-3 max-w-xs text-sm leading-7 text-[#8b8982]">
            {islogin
              ? "Welcome back! Please enter your details to access your account."
              : "Join our community and experience something extraordinary."}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#e9dfcc]" />
          <span className="text-xs text-[#b49a69]">✦</span>
          <div className="h-px flex-1 bg-[#e9dfcc]" />
        </div>

        {/* Form */}
        <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {!islogin && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <label className="mb-2 block text-xs font-semibold tracking-wide text-[#344158]">
                FULL NAME
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Entering the name is required!",
                })}
                className="w-full rounded-xl border border-[#e5ddcf] bg-[#faf8f3] px-4 py-4 text-sm text-[#17263c] outline-none transition-all duration-300 placeholder:text-[#b6b0a4] hover:border-[#c6ae7d] focus:border-[#b6975b] focus:bg-white focus:ring-4 focus:ring-[#c6ae7d]/15"
              />

              {errors.name && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="mb-2 block text-xs font-semibold tracking-wide text-[#344158]">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Entering an email address is required!",
              })}
              className="w-full rounded-xl border border-[#e5ddcf] bg-[#faf8f3] px-4 py-4 text-sm text-[#17263c] outline-none transition-all duration-300 placeholder:text-[#b6b0a4] hover:border-[#c6ae7d] focus:border-[#b6975b] focus:bg-white focus:ring-4 focus:ring-[#c6ae7d]/15"
            />

            {errors.email && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold tracking-wide text-[#344158]">
              PASSWORD
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Entering a password is required!",
              })}
              className="w-full rounded-xl border border-[#e5ddcf] bg-[#faf8f3] px-4 py-4 text-sm text-[#17263c] outline-none transition-all duration-300 placeholder:text-[#b6b0a4] hover:border-[#c6ae7d] focus:border-[#b6975b] focus:bg-white focus:ring-4 focus:ring-[#c6ae7d]/15"
            />

            {errors.password && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {errors.root?.serverError && (
            <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errors.root.serverError.message}
            </p>
          )}

          <input
            type="submit"
            value={islogin ? "Sign In" : "Create Account"}
            className="group mt-3 w-full cursor-pointer rounded-xl bg-[#17263c] px-5 py-4 text-sm font-semibold tracking-widest text-[#e8d3a6] shadow-lg shadow-[#17263c]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#253a57] hover:shadow-xl hover:shadow-[#17263c]/25 active:translate-y-0 active:scale-[0.98]"
          />
        </form>

        {/* Switch Mode */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#929087]">
            {islogin ? "Don't have an account?" : "Already have an account?"}
          </p>

          <button
            type="button"
            onClick={switchMode}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#a1844e] transition-all duration-300 hover:gap-3 hover:text-[#17263c]"
          >
            {islogin ? "Create an account" : "Sign in instead"}
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-[#eee6d8] pt-6 text-center">
          <p className="text-[10px] font-medium tracking-[3px] text-[#aaa18f]">
            ELEGANCE IN EVERY DETAIL
          </p>
        </div>
      </div>
    </main>
  );
}

export default Page;
