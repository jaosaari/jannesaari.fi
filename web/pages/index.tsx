import Head from 'next/head';
import Footer from '@components/Footer';
import Featured from '@components/Featured';
import History from '@components/History';
import Header from '@components/Header';
import { Fragment } from 'react';
import Hero from '@components/Hero';
import { sanityClient, usePreviewSubscription } from '@lib/sanity';
import { featuresQuery } from '@lib/queries/features';
import { Feature } from '@models/feature';

type Props = {
  features: Feature[];
};

const Index = ({ features }: Props) => {
  console.log('features', features);
  return (
    <Fragment>
      <Head>
        <title>Janne Saari</title>
        <meta name="description" content="Janne Saaren portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Featured features={features}></Featured>
        <History></History>
      </main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Index;

export async function getStaticProps() {
  const features = await sanityClient.fetch(featuresQuery);

  // const data = { featuresData };

  return {
    props: {
      features,
    },
  };
}
