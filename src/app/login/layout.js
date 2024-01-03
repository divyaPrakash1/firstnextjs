"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./login.css"

export default function LoginLayout({ children }) {
    const pathName = usePathname();
    // console.log('pathName', pathName);
    return (
        <div>
            {/* <h1>Common Layout for Login screens</h1> */}
            {pathName.includes('loginteacher') ? <Link href='/'>Go to Main page</Link> : (<ul className="login-menu">
                <li><Link href="/login">Login Main</Link> </li>
                <li><Link href="/login/loginstudent">Student Login</Link> </li>
                <li><Link href="/login/loginteacher">Teacher Login</Link> </li>
            </ul>)}
            {children}
        </div>
    )
}