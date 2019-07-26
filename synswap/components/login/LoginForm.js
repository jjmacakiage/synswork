import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Link from "next/link";


const LoginLink = props => (
    <Link href="/[id]" as={`/${ props.id }`}>
        <Button color="primary" variant="outlined">{props.id}</Button>
    </Link>
);

const FormPage = () => {
    return (
        <Grid container spacing={ 8 }>
            <Grid item xs={ 12 }>
                <TextField
                    variant="outlined"
                    label="Username"
                />
            </Grid>
            <Grid item xs={ 12 }>
                <TextField
                    variant="outlined"
                    label="Password"
                />
            </Grid>
            <Grid item xs={ 12 }>
                <LoginLink id="Main"/>
            </Grid>
        </Grid>
    );
};

export default FormPage;
