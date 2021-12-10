import { SanityDocument } from '@sanity/types';
import { Label } from '@models/label';
import { Body } from '@models/body';

export interface Feature extends SanityDocument {
  _type: 'feature';
  title: string;
  labels: Label[];
  body: Body[];
}
