"use client"
import Link from "next/link";
// import { useRouter } from 'next/navigation';


export default function AboutStudent() {
    // const router = useRouter();

    return (
        <div>
            <h2>About student Page</h2>
            <Link href='/login'>Go to Home page</Link>
            {/* <button onClick={() => router.push('login')}>Go To Login</button> */}

        </div>
    )
}