import { SanityDocument } from '@sanity/types';
import { Label } from '@models/label';

export interface Feature extends SanityDocument {
  _type: 'feature';
  title: string;
  labels: Label[];
}
