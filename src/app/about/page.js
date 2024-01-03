"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';


export default function About() {
    const router = useRouter();

    return (
        <div>
            <h2>About Page</h2>
            <button onClick={() => router.push('login')}>Go To Home Page</button>
            <br />
            <Link href="/about/aboutcollege">Go to About College Page</Link>
            <br />
            <br />
            <Link href="/about/aboutstudent">Go to About Student Page</Link>
        </div>
    )
}