"use client"
import Script from "next/script";

export default function Page() {
    return (
        <>
            <Script
                src="./../../../public/lication.js"
                onLoad={() => console.log('file loaded')}
            />
            <h2>Location</h2>
        </>
    )
}