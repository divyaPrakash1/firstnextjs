"use client"
import Link from "next/link";
// import { useRouter } from 'next/navigation';


export default function AboutCollege() {
    // const router = useRouter();

    return (
        <div>
            <h2>About Page</h2>
            <Link href='/about'>Go to Login page</Link>
            {/* <button onClick={() => router.push('login')}>Go To Login</button> */}

        </div>
    )
}