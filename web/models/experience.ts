import { SanityDocument } from '@sanity/types';
import { Body } from '@models/body';
export interface Experience extends SanityDocument {
  _type: 'experience';
  title: string;
  description?: string;
  body: Body[];
}
