import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return(
        <nav className={styles.mainnav}>
            <ul>
                <Link href='../profile'><li>About</li></Link>
                <Link href='../rankings'><li>Blog</li></Link>
                <Link href='../projects'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}