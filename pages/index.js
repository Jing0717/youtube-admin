import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({ services }) {
  console.log(services)
  return (
    <div>
      <Head>
        <title>Jing Dev</title>
        <meta name="description" content="Best one" />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  )
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};