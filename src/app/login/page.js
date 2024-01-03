"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
export default function Login() {
    const router = useRouter();

    const navigate = (path) => {
        router.push("/login/" + path)
    }

    return (
        <div>
            <h2>Login Page</h2>
            <Link href='/'>Go to Home page</Link>
            <br /><br />
            <button onClick={() => navigate('loginstudent')}>Go To Student Login Page</button>
            <br /><br />
            <button onClick={() => navigate('loginteacher')}>Go To Teacher Login Page</button>

        </div>
    )
}