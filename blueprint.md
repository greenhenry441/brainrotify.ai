# Brainrot Animal Generator - Blueprint

## 1. Overview

The Brainrot Animal Generator is a simple, modern web application designed to generate a unique and humorous "brainrot" animal name based on user input. It's built with Next.js using the App Router and leverages React Server Components and Server Actions for a fast, interactive experience. The design is dark-themed, responsive, and includes subtle animations and modern styling.

## 2. Design and Style Guide

- **Theme:** Dark mode, with a base background of `gray-900` (`#111827`).
- **Accent Colors:** A gradient of `purple`, `indigo`, and `pink` is used for the main headline to create a vibrant, eye-catching effect.
- **Typography:** The primary font is `Inter`, as configured in `layout.tsx`.
    - **Headline:** Large, bold (`text-4xl` to `text-5xl`), and uses a gradient text effect.
    - **Body Text:** A clean, readable size (`text-lg`) with a light gray color (`gray-300`).
- **UI Components:**
    - **Main Card:** The central UI element is a `max-w-md` card with a `gray-800` background, rounded corners (`rounded-2xl`), and a prominent box-shadow. It has a subtle `hover` effect to scale up slightly and gain a shadow from the accent color.
    - **Input Field:** A `text` input with a `gray-700` background, rounded corners, and a `focus` state that highlights it with the `indigo` accent color.
    - **Button:** A full-width button with a bold `indigo-600` background. It features a `hover` transform effect to scale up and a `focus` ring for accessibility. The `disabled` state is a muted gray.
    - **Result Display:** When the result is shown, it appears in a `gray-700` container with an animated fade-in effect. The generated animal name is large, bold, and uses a green-to-blue gradient for emphasis.
- **Layout:** Centered, single-column layout using Flexbox (`flex items-center justify-center min-h-screen`).
- **Animation:** 
    - The headline has a `pulse` animation.
    - The result display uses a `fade-in-up` animation.

## 3. Features & Implementation

- **Framework:** Next.js 14+ with App Router.
- **Styling:** Tailwind CSS.
- **UI Components:**
    - `app/page.tsx`: The main page component. It is a Client Component (`"use client"`) to manage form state using the `useFormState` hook.
    - `SubmitButton`: A separate Client Component that uses the `useFormStatus` hook to show a "pending" state while the form is submitting.
- **Logic:**
    - `app/actions.ts`: Contains the primary server-side logic.
    - `createBrainrotAnimal`: A Server Action (`"use server"`) that takes the form data, validates it, and returns the result.
    - **Validation:** Uses the `zod` library to ensure the user provides a name that is at least two characters long.
    - **Generation Algorithm:** A simple, deterministic algorithm that uses the length of the user's name and the character code of the first letter to pick an adjective and an animal from predefined lists. This ensures the same name always produces the same result.
- **Error Handling:** If validation fails, the Server Action returns an error message that is displayed on the UI.

## 4. Project Structure

```
/
|-- app/
|   |-- globals.css         # Global styles, including Tailwind directives.
|   |-- layout.tsx          # Root layout.
|   |-- page.tsx            # The main page UI.
|   |-- actions.ts          # Server Action for form submission.
|-- public/
|-- tailwind.config.ts      # Tailwind CSS configuration.
|-- package.json
|-- blueprint.md            # This file.
```
