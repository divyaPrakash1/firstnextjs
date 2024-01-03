"use client"
import Link from "next/link";

export default function StudentDetail({ params }) {
    console.log('params', params)
    return (
        <div>
            <h1>Student Detail</h1>
            <div>Name - {params.student}</div>
            {/* <ul>
                <li><Link href='/studentlist/1'>Divya</Link></li>
                <li><Link href='/studentlist/2'>Amendra</Link></li>
                <li><Link href='/studentlist/3'>Sunil</Link></li>
                <li><Link href='/studentlist/4'>Akash</Link></li>
            </ul> */}
        </div>
    )
}