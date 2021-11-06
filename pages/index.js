import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jing Dev</title>
        <meta name="description" content="Best one" />
      </Head>
      <Intro />
    </div>
  )
}
