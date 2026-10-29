"use client";

import { useForm } from "react-hook-form";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#030907] px-4 py-10 text-white selection:bg-emerald-400/30 selection:text-emerald-100 sm:px-8 lg:py-16">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] animate-pulse rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] animate-pulse rounded-full bg-green-400/10 blur-[140px] [animation-delay:1.5s]" />

        <div className="absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] animate-pulse rounded-full bg-teal-500/10 blur-[130px] [animation-delay:3s]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030907_85%)]" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(52,211,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.3)_1px,transparent_1px)] [background-size:55px_55px]" />

        <div className="absolute left-[8%] top-[18%] h-2 w-2 animate-ping rounded-full bg-emerald-300 opacity-70" />

        <div className="absolute right-[12%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-green-300 shadow-[0_0_25px_6px_rgba(52,211,153,0.4)]" />

        <div className="absolute bottom-[18%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-teal-300 shadow-[0_0_25px_5px_rgba(45,212,191,0.4)] [animation-delay:700ms]" />
      </div>

      <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Brand section */}
          <section className="mx-auto w-full max-w-lg animate-[fadeIn_0.8s_ease-out_both] lg:mx-0">
            <div className="mb-12 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-400/10 shadow-[0_0_35px_rgba(16,185,129,0.12)] transition-all duration-300 hover:rotate-6 hover:scale-110 hover:border-emerald-300/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]">
                <span className="text-xl font-black tracking-tighter text-emerald-300">
                  FA
                </span>
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-white">
                  Green<span className="text-emerald-400">Space</span>
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-100/40">
                  Create your future
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/[0.12]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium tracking-wide text-emerald-200/90">
                  YOUR NEXT CHAPTER STARTS HERE
                </span>
              </div>

              <h1 className="text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl">
                Build your
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent">
                  better future.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                Great things begin with a single step. Create your account and
                become part of something extraordinary.
              </p>
            </div>

            {/* Feature cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:shadow-[0_12px_35px_rgba(16,185,129,0.08)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-emerald-300/50 group-hover:bg-emerald-400/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-emerald-200">
                    Fast &amp; Secure
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Your information stays protected.
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:shadow-[0_12px_35px_rgba(16,185,129,0.08)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-emerald-300/50 group-hover:bg-emerald-400/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12 2 2 4-4"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-emerald-200">
                    Simple &amp; Easy
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    A smooth experience from day one.
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:shadow-[0_12px_35px_rgba(16,185,129,0.08)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-emerald-300/50 group-hover:bg-emerald-400/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-emerald-200">
                    Grow Together
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Make room for what's next.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <div className="h-px w-12 bg-gradient-to-r from-emerald-400/60 to-transparent" />
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-600">
                Designed for your next move
              </p>
            </div>
          </section>

          {/* Registration card */}
          <section className="relative mx-auto w-full max-w-2xl transition duration-500 ease-out hover:-translate-y-1">
            <div className="absolute -inset-px rounded-[30px] bg-gradient-to-br from-emerald-400/35 via-white/[0.04] to-teal-400/20 opacity-80 blur-[1px]" />

            <div className="relative overflow-hidden rounded-[29px] border border-emerald-300/20 bg-[#07110e]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_60px_rgba(16,185,129,0.09)] backdrop-blur-2xl transition duration-500 hover:border-emerald-300/35 hover:shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_70px_rgba(16,185,129,0.13)] sm:p-8 md:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/[0.07] blur-[70px]" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-teal-400/[0.05] blur-[60px]" />

              <div className="relative mb-8 flex items-start gap-4 sm:mb-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-400/20 to-emerald-400/[0.03] text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 hover:scale-110 hover:rotate-3 sm:h-16 sm:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 21v-2a8 8 0 0 1 16 0v2"
                    />
                  </svg>
                </div>

                <div className="min-w-0 flex-1 pt-1">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-400">
                    GET STARTED TODAY
                  </p>

                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Create your{" "}
                    <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                      account.
                    </span>
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                    Fill in your details to get started.
                  </p>
                </div>
              </div>

              <form
                action="#"
                onSubmit={handleSubmit(onSubmit, onError)}
                className="relative flex flex-col gap-5"
              >
                {/* First name and Last name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group flex flex-col gap-2">
                    <label className="ml-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-focus-within:text-emerald-300">
                      First name
                    </label>

                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-[#0b1713]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-slate-600 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/[0.025] focus:-translate-y-0.5 focus:border-emerald-300/80 focus:bg-emerald-400/[0.045] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.08)]"
                      placeholder="e.g. Alex"
                      {...register("firstname", {
                        required: "Please enter your firstname!",
                        minLength: {
                          value: 3,
                          message:
                            "Your firstname must contain at least 3 letters!",
                        },
                      })}
                    />

                    {errors.firstname ? (
                      <p className="text-xs leading-relaxed text-rose-400 transition-colors duration-300">
                        ⚠ {errors.firstname.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="group flex flex-col gap-2">
                    <label className="ml-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-focus-within:text-emerald-300">
                      Last name
                    </label>

                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-[#0b1713]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-slate-600 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/[0.025] focus:-translate-y-0.5 focus:border-emerald-300/80 focus:bg-emerald-400/[0.045] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.08)]"
                      placeholder="e.g. Morgan"
                      {...register("lastname", {
                        required: "Please enter your lastname!",
                        minLength: {
                          value: 3,
                          message:
                            "Your lastname must contain at least 3 letters!",
                        },
                      })}
                    />

                    {errors.lastname ? (
                      <p className="text-xs leading-relaxed text-rose-400 transition-colors duration-300">
                        ⚠ {errors.lastname.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Phone and Age */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group flex flex-col gap-2">
                    <label className="ml-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-focus-within:text-emerald-300">
                      Phone number
                    </label>

                    <input
                      type="number"
                      className="w-full rounded-xl border border-white/10 bg-[#0b1713]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-slate-600 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/[0.025] focus:-translate-y-0.5 focus:border-emerald-300/80 focus:bg-emerald-400/[0.045] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.08)]"
                      placeholder="09xxxxxxxxx"
                      {...register("phone", {
                        required: "Please enter your contact number!",
                        pattern: {
                          value: /^09\d{9}$/,
                          message:
                            "Your contact number must consist of 11 digits and start with 09!",
                        },
                      })}
                    />

                    {errors.phone ? (
                      <p className="text-xs leading-relaxed text-rose-400 transition-colors duration-300">
                        ⚠ {errors.phone.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="group flex flex-col gap-2">
                    <label className="ml-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-focus-within:text-emerald-300">
                      Age
                    </label>

                    <input
                      type="age"
                      className="w-full rounded-xl border border-white/10 bg-[#0b1713]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-slate-600 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/[0.025] focus:-translate-y-0.5 focus:border-emerald-300/80 focus:bg-emerald-400/[0.045] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.08)]"
                      placeholder="Your age"
                      {...register("age", {
                        required: "Please enter your age!",
                        min: {
                          value: 18,
                          message: "You must be at least 18 years old!",
                        },
                      })}
                    />

                    {errors.age ? (
                      <p className="text-xs leading-relaxed text-rose-400 transition-colors duration-300">
                        ⚠ {errors.age.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Email */}
                <div className="group flex flex-col gap-2">
                  <label className="ml-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-focus-within:text-emerald-300">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-[#0b1713]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-slate-600 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/[0.025] focus:-translate-y-0.5 focus:border-emerald-300/80 focus:bg-emerald-400/[0.045] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.08)]"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Please enter your email!",
                    })}
                  />

                  {errors.email ? (
                    <p className="text-xs leading-relaxed text-rose-400 transition-colors duration-300">
                      ⚠ {errors.email.message}
                    </p>
                  ) : null}
                </div>

                {/* Password */}
                <div className="group flex flex-col gap-2">
                  <label className="ml-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-focus-within:text-emerald-300">
                    Password
                  </label>

                  <input
                    type="password"
                    className="w-full rounded-xl border border-white/10 bg-[#0b1713]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-slate-600 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/[0.025] focus:-translate-y-0.5 focus:border-emerald-300/80 focus:bg-emerald-400/[0.045] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.08)]"
                    placeholder="Create a password"
                    {...register("password", {
                      required: "Please enter your password!",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character!",
                      },
                    })}
                  />

                  {errors.password ? (
                    <p className="text-xs leading-relaxed text-rose-400 transition-colors duration-300">
                      ⚠ {errors.password.message}
                    </p>
                  ) : null}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <input
                    type="submit"
                    value="Create account  →"
                    className="w-full cursor-pointer rounded-xl border border-emerald-300/50 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 px-5 py-4 text-sm font-bold text-[#03110a] shadow-[0_8px_30px_rgba(16,185,129,0.20)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-200 hover:from-emerald-300 hover:via-green-300 hover:to-emerald-400 hover:shadow-[0_14px_45px_rgba(16,185,129,0.32)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center gap-4 py-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
                    A fresh start
                  </span>

                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <p className="text-center text-xs leading-6 text-slate-500">
                  By continuing, you are ready to take your next step.
                  <span className="mt-1 block text-emerald-400/80">
                    Your future starts with you.
                  </span>
                </p>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default page;
