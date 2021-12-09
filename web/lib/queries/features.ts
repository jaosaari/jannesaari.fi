import { groq } from 'next-sanity';
import { labelsFragment } from './labels';
export const featuresQuery = groq`*[_type == 'feature'] { title, body, photos{...,}, ${labelsFragment}}`;
