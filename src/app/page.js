"use client"
import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import style from './style.module.css'

// import Image from 'next/image';
// import Profile from './../../public/vercel.svg';
// import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//   weight: '100',
//   subsets: ['latin'],
//   display: 'swap'
// })

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
      {/* <h1>Style and CSS with Next js</h1>
      <h2>Style and CSS with Next js</h2> */}
      {/* <h1 style={{ fontFamily: 'Roboto', fontWeight: 200 }}>Condition with style</h1> */}
      {/* <Image
        src={Profile}
      /> */}
      {/* <Image
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
        height={400}
        width={600}
      /> */}

      {/* <h1 className={roboto.className}>Font with </h1> */}

      {/* <h1>Meta data implementation in Nextjs </h1> */}

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
