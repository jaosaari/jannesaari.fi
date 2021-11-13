import { SanityDocument } from '@sanity/types';

export interface Label extends SanityDocument {
  title: string;
  description: string;
  // publishedAt: string;
  // slug: Slug;
  // author: Person;
  // title: string;
  // excerpt: SimpleBlockContent;
  // keywords?: string[];
  // meta?: MetaFields;
  // featuredImage?: Image;
  // content?: PostSections[];
}
