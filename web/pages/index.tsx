import Head from 'next/head';
import { Fragment } from 'react';
import Header from '@components/Header';
import Hero from '@components/Hero';
import History from '@components/History';
import Featured from '@components/Featured';
import Footer from '@components/Footer';
import ContactMe from '@components/ContactMe';
import { sanityClient, usePreviewSubscription } from '@lib/sanity';
import { featuresQuery } from '@lib/queries/features';
import { experiencesQuery } from '@lib/queries/experiences';
import { Feature } from '@models/feature';
import { Experience } from '@models/experience';

type Props = {
  features: Feature[];
  experiences: Experience[];
};

const Index = ({ features, experiences }: Props) => {
  console.log('experiences', experiences);
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
        <History experiences={experiences}></History>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Index;

export async function getStaticProps() {
  const features = await sanityClient.fetch(featuresQuery);
  const experiences = await sanityClient.fetch(experiencesQuery);

  // const data = { featuresData };

  return {
    props: {
      features,
      experiences,
    },
  };
}
