"use client"

import { useState } from "react"


export default function Page() {
    const [h3Style, setH3Style] = useState({ backgroundColor: "blue" });
    return (
        <>
            <h1 style={h3Style}>user Page</h1>
            <h2>user Page</h2>
            <h3> Heading 3 for user</h3>
            <button onClick={() => setH3Style({ backgroundColor: "red" })}>Update Style</button>
        </>
    )
}