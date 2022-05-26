import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface Props {
  children: JSX.Element | JSX.Element[] 
}  
export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
         
          <Head>
            <title>Home page</title>
            <meta name="description" content="Home page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
            
            { children }
    
          </main>
    
        </div>
      )
}
