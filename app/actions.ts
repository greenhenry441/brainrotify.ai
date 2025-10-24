'use server';

import { z } from 'zod';

// 1. Define the schema for input validation
const schema = z.object({
  name: z.string().min(2, { message: 'Please enter a name with at least 2 characters.' }).trim(),
});

// 2. Define the list of brainrot adjectives and animals
const adjectives = [
    'Gooner',
    'Skibidi',
    'Rizzler',
    'Gyatt-a-lot',
    'Sigma',
    'Fanum Taxed',
    'Kai Cenat',
    'Mewing',
    'Ohioan',
    'Grimace Shake',
];

const animals = [
    'Capybara',
    'Quokka',
    'Wombat',
    'Axolotl',
    'Red Panda',
    'Fennec Fox',
    'Blobfish',
    'Gerenuk',
    'Shoebill Stork',
    'Dumbo Octopus',
];

// 3. Define the initial state for the form
export interface FormState {
  message: string;
  errors?: {
    name?: string[];
  };
}

// 4. Create the Server Action function
export async function createBrainrotAnimal(prevState: FormState, formData: FormData): Promise<FormState> {
  
  // Get the name from the form
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
        message: '',
        errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // If validation succeeds, generate the brainrot animal name
  const name = validatedFields.data.name;

  // Simple algorithm to generate a "unique" animal based on name length
  const adjectiveIndex = name.length % adjectives.length;
  const animalIndex = name.charCodeAt(0) % animals.length;

  const randomAdjective = adjectives[adjectiveIndex];
  const randomAnimal = animals[animalIndex];

  const brainrotAnimal = `${randomAdjective} ${randomAnimal}`;

  // Return the new state with the success message
  return { message: brainrotAnimal };
}
