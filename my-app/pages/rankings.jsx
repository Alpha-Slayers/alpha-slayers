import React from 'react'
import styles from '../styles/Home.module.css'
import NavContent from './Navbar/NavContent';

export default function Rankings() {
    return(<div className={styles.container}>

        <NavContent/>
        <main className={styles.main}>
        
          <h1 className={styles.title}>
            Rankings
          </h1>
  
          <p className={styles.description}>
            Coming Soon.
          </p>
          
       
        </main>
  

      </div>

        
    )
}