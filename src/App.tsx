"use client"

import { useState } from "react"

export default function App() {
  const [isDark, setIsDark] = useState(true)

  const textMeLink = () => {
    window.location.href = "https://www.instagram.com/itsroman_25/"
  }

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center p-2 sm:p-4 lg:p-6 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full space-y-4 sm:space-y-6 lg:space-y-8 relative">
        <button
          onClick={toggleTheme}
          className={`fixed top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-50 ${
            isDark
              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 hover:from-yellow-300 hover:to-orange-400"
              : "bg-gradient-to-r from-slate-800 to-purple-900 text-white hover:from-slate-700 hover:to-purple-800"
          }`}
        >
          <span className="text-lg sm:text-xl lg:text-2xl">{isDark ? "☀️" : "🌙"}</span>
        </button>

        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-balance transition-all duration-500 px-2 ${
            isDark
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              : "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600"
          }`}
        >
          Welcome To This Website!
        </h1>

        <div
          className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-0.5 sm:p-1 transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          }`}
        >
          <div
            className={`rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm transition-all duration-500 ${
              isDark ? "bg-slate-800/90" : "bg-white/90"
            }`}
          >
            <div
              className={`rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6 transition-all duration-500 ${
                isDark
                  ? "bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm"
                  : "bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm"
              }`}
            >
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold text-center transition-all duration-500 ${
                  isDark ? "text-white drop-shadow-lg" : "text-slate-800"
                }`}
              >
                About Program
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <p
                  className={`leading-relaxed text-sm sm:text-base lg:text-lg transition-all duration-500 text-pretty ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Have you ever been in such situation, when you wanted to go class with your friends during office
                  hours but couldn't because you were invited to somewhere else? Or when you want to sign up for
                  Enrichment class (only with scholar Badge), or your grade level or something else doesn't let you sign
                  up for certain class?
                </p>

                <p
                  className={`font-semibold text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-500 text-pretty ${
                    isDark ? "text-emerald-400 drop-shadow-sm" : "text-emerald-600"
                  }`}
                >
                  That's not a problem! If you want to do any of those - just contact me by clicking the button below
                  and I can sign you up for any class you want!
                </p>
              </div>

              <div className="flex justify-center pt-4 sm:pt-5 lg:pt-6">
                <button
                  className={`relative px-6 py-3 sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 text-base sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl min-h-[44px] ${
                    isDark
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
                      : "bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500"
                  } hover:shadow-purple-500/25`}
                  onClick={textMeLink}
                >
                  <span className="relative z-10">Text Me!</span>
                  <div className="absolute inset-0 rounded-xl sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
