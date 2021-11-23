import { groq } from 'next-sanity';

export const labelsFragment = groq`labels[]-> {title, description}`;
