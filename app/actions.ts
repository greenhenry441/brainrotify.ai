'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
})

const adjectives = ['Stanky', 'Goated', 'Based', 'Rizzler', 'Glow-up', 'Skibidi', 'Sigma', 'Cringe', 'Bussin'', 'Fanum Tax'];
const animals = ['Capybara', 'Gyatt', 'Kai Cenat', 'Doge', 'Quokka', 'Possum', 'Raccoon', 'Cat', 'Red Panda', 'Hampter'];

export async function generateBrainrotAnimal(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
    })

    if (!validatedFields.success) {
        return {
            animalName: '',
            imageUrl: '',
            audioUrl: '',
            message: 'error',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const name = validatedFields.data.name;

    try {
        // Simulate AI-powered generation
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        const animalName = `${randomAdjective} ${name} ${randomAnimal}`;
        const imageUrl = `https://via.placeholder.com/400x400.png?text=${encodeURIComponent(animalName)}`;
        
        // In a real app, you would generate audio here.
        const audioUrl = ''

        return {
            animalName,
            imageUrl,
            audioUrl,
            message: 'success',
            errors: null,
        }
    } catch (error) {
        return {
            animalName: '',
            imageUrl: '',
            audioUrl: '',
            message: 'error',
            errors: { _errors: ['Something went wrong. Please try again.'] },
        }
    }
}
