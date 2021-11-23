import { groq } from 'next-sanity';
import { labelsFragment } from './labels';

export const experiencesQuery = groq`*[_type == 'experience'] { ${labelsFragment}, company, position, location, body, dates }`;
