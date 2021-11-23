import { groq } from 'next-sanity';

export const experiencesQuery = groq`*[_type == 'experience'] {title, description}`;
