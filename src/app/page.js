"use client"
import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route)
  }
  return (
    <main>
      {/* <h1>Events, functions and state {name}</h1>
      <br />
      <Link href='/login'>Go to Login page</Link>
      <br />
      <Link href='/about'>Go to About page</Link>
      <div>Hello </div>
      <button onClick={() => navigate('login')}>Go To Login</button>
      <button onClick={() => navigate('about')}>Go To About</button> */}
      {/* <Link href='/productlist'>Go to Product List</Link> */}
      <h1>Style and CSS with Next js</h1>
      <h2>Style and CSS with Next js</h2>

    </main>
  )
}

const User = (props) => {
  return (
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  )
}
