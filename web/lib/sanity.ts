// import sanityClient from '@sanity/client';
import { SanityImageSource } from '@sanity/asset-utils';
import sanityImage from '@sanity/image-url';
import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const config = {
  projectId: 'r4oybpj1',
  dataset: 'production',
  // token: 'api-token', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
  apiVersion: '2021-11-13',
};
// const client = sanityClient({
//   projectId: 'r4oybpj1',
//   dataset: 'production',
//   // token: 'api-token', // or leave blank to be anonymous user
//   useCdn: false, // `false` if you want to ensure fresh data
//   ignoreBrowserTokenWarning: true,
//   apiVersion: '2021-11-13'
// });

// export default client;
// export const urlFor = (source: SanityImageSource) =>
//   createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const sanityClient = createClient(config);
export const imageBuilder = sanityImage(sanityClient);
