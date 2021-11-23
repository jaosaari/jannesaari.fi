import { SanityDocument } from '@sanity/types';

export interface Experience extends SanityDocument {
  _type: 'experience';
  title: string;
  description?: string;
}
