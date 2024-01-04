// "use client"

// import { useState } from "react";
// import custom from './../custom.module.css';
// import other from './../other.module.css'
// import inner from '@/style/inner.module.css'


export default function Page() {
    // const [h3Style, setH3Style] = useState({ backgroundColor: "blue" });
    return (
        <>
            <h2>user Page</h2>
            {/* <h1 style={h3Style}>user Page</h1>
            <h3 className={custom.mainClass}> Heading 3 for user</h3>
            <h2 className={other.mainClass}> Heading 2 for user</h2>
            <h4 className={inner.mainClass}> Heading 4 for user</h4>
            <button onClick={() => setH3Style({ backgroundColor: "red" })}>Update Style</button> */}
        </>
    )
}

export function generateMetadata() {
    return {

        title: 'user page title',
        description: 'asdfasdfasd'
    }

}