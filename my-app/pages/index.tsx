import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpha Slayers</title>
        <meta name="description" content="A DAO made by ED/JL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Navbar/>
    
      <main className={styles.main}>
        <h1 className={styles.title}>Alpha Slayers Guild</h1>
        <p className={styles.description}>Welcome to Alpha Slayers. A DAO made for learning and researching.</p>
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
