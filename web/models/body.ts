import { SanityDocument } from '@sanity/types';

export interface Body extends SanityDocument {
  _key?: string;
  _type: string;
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;

  // children?: SanityBlock[];
  // style?: string;
  // text?: string;
  // marks?: string[];
  // markDefs?: MarkDef[];
  // level?: number;
  // listItem?: "bullet";
}
