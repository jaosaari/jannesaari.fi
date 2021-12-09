import { groq } from 'next-sanity';
import { labelsFragment } from './labels';

export const experiencesQuery = groq`*[_type == 'experience'] { company, position, location, body, dates, ${labelsFragment} }`;
