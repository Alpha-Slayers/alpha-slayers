import React from 'react'
import styles from '../styles/Home.module.css'
import NavContent from './Navbar/NavContent';

export default function Projects() {
    return(<div className={styles.container}>

        <NavContent/>
        <main className={styles.main}>
        
          <h1 className={styles.title}>
            Projects
          </h1>
  
          <p className={styles.description}>
            Coming Soon.
          </p>
          
       
        </main>
  

      </div>

        
    )
}