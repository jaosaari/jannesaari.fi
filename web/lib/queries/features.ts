import { groq } from 'next-sanity';

export const featuresQuery = groq`*[_type == 'feature'] {title, labels[]->{title, description}}`;
