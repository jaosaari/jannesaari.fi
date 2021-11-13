import Head from 'next/head';
import Footer from '@components/Footer';
import Featured from '@components/Featured';
import History from '@components/History';
import Header from '@components/Header';
import { Fragment } from 'react';
import Hero from '@components/Hero';
import groq from 'groq';
import client from '../lib/sanity';

type Props = {
  data: {
    featuresData: {
      title: string;
      labels: {
        title: string;
        description: string;
      }[];
    }[];
  };
};

const Index = ({ data }: Props) => {
  const { featuresData } = data;
  console.log('featuresData', featuresData);
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
        <Featured features={featuresData}></Featured>
        <History></History>
      </main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Index;

const featuresQuery = groq`*[_type == 'feature'] {title, labels[]->{title, description}}`;

export async function getStaticProps() {
  const featuresData = await client.fetch(featuresQuery);

  const data = { featuresData };

  return {
    props: {
      data,
    },
  };
}
