import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react'
import styles from '../styles/Home.module.css'
import { Layout } from "../pages/Navbar/Layout";
import NavContent from './Navbar/NavContent';

export default function Home() {
  return (
    <Layout>
      <NavContent/>
    </Layout>
    
  );
}
