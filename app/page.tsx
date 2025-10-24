"use client";
import { useFormState } from "react-dom";
import { generateBrainrotAnimal } from "./actions";
import { SubmitButton } from "../components/submit-button";
import { ResultCard } from "@/components/result-card";

export default function Home() {
  const [state, formAction] = useFormState(generateBrainrotAnimal, {
    animalName: "",
    imageUrl: "",
    audioUrl: "",
    message: "",
    errors: null,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4 sm:p-8 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-3 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient-x">
          Brainrot Animal Generator
        </h1>
        <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl mx-auto">
          Discover your inner brainrot beast. What legendary creature do you become when your name goes full goblin mode?
        </p>
      </div>

      <form action={formAction} className="w-full max-w-md space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Enter your name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name, king"
            className="w-full px-5 py-4 bg-gray-800 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 text-lg"
          />
          {state.errors?.name && (
            <div className="text-red-400 text-sm mt-2" aria-live="polite">
              {state.errors.name.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>
        <SubmitButton />
      </form>

      <div className="mt-10 w-full max-w-md">
        {state.message === 'success' && (
          <ResultCard
            animalName={state.animalName}
            imageUrl={state.imageUrl}
            audioUrl={state.audioUrl}
          />
        )}
        {state.errors?._errors && (
            <div className="text-red-400 text-center mt-4 bg-red-900/50 border border-red-500/50 rounded-lg p-4" aria-live="assertive">
              {state.errors._errors.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
      </div>
    </main>
  );
}

// Add this to your globals.css or a new CSS file imported into your layout
/*
@keyframes gradient-x {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 5s ease infinite;
}
*/
