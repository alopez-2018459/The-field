import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '../components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Main heading='Discovering Sports Talent' title='The Global Platform for Talent and Sports Organizations' />
   </>
  )
}
