"use client"
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import style from '@/style/inner.module.css'
export default function AboutStudent() {
    // const router = useRouter();

    const [color, setColor] = useState('red');
    const { orange } = style;

    return (
        <div>
            <h2>About student Page</h2>
            <Link href='/login'>Go to Home psage</Link>
            <h2 className={style.mainClass}>About student Page</h2>
            <h3 id={style.orange}>asasasasas student Page</h3>
            <h3 id={orange}>orange text</h3>
            {/* <button onClick={() => router.push('login')}>Go To Login</button> */}
            {/* <Button variant="contained" color="primary">
                Click Me!
            </Button> */}

            {/* <Typography sx={{ textAlign: "center", mb: "1rem" }} >Action Alerts</Typography>
            <Stack sx={{ width: '100%' }} spacing={2} >
                <Alert onClose={() => { }}> This is a success alert — check it out! </Alert>
                <Alert
                    action={
                        <Button color="inherit" size="small" >
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            </Stack>

            <div>
                <h3>
                    {" "}
                    Using the <i> Grid </i> Component of the Material UI to add Grid in the React application {" "}
                </h3>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Paper elevation={16}> Item 1 </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={16}> Item 2 </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ width: "100%", marginTop: "1rem" }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Paper elevation={16}> Item 3 </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={16}> Item 4 </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div> */}

        </div>
    )
}