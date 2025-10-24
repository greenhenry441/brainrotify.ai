"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createBrainrotAnimal } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out disabled:bg-gray-500 disabled:cursor-not-allowed transform hover:scale-105 active:scale-100"
      aria-disabled={pending}
    >
      {pending ? "Generating..." : "Generate My Brainrot Animal"}
    </button>
  );
}

export default function Home() {
  const initialState = {
    message: "",
  };
  const [state, formAction] = useFormState(createBrainrotAnimal, initialState);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-indigo-500/40">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 animate-pulse">
            Brainrot Animal Generator
          </h1>
          <p className="text-gray-300 text-lg">
            What cursed creature are you? Enter your name and embrace the rot.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              placeholder="Your name..."
            />
          </div>
          <SubmitButton />
        </form>

        {state?.message && (
          <div className="text-center bg-gray-700 rounded-lg p-6 mt-8 animate-fade-in-up">
            <p className="text-lg text-gray-300 mb-2">Your brainrot animal is:</p>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500">
              {state.message}
            </p>
          </div>
        )}
         {state?.errors?.name && (
          <div className="text-center bg-red-900/50 border border-red-500 rounded-lg p-4 mt-8 animate-fade-in-up">
            <p className="text-lg text-red-300">
              {state.errors.name[0]}
            </p>
          </div>
         )}
      </div>
    </main>
  );
}
