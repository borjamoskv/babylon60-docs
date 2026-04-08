import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// CORTEX Schema Extension (moskv-editorial-omega)
// Enforces Epistemological Confidence and Thermodynamic Exergy.
export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(), 
		schema: docsSchema({
			extend: z.object({
				confidence: z.enum(['C1', 'C2', 'C3', 'C4', 'C5', 'C5-Dynamic']).default('C4'),
				exergy_cost: z.number().default(0),
				vector_id: z.string().optional(),
			})
		}) 
	}),
};
