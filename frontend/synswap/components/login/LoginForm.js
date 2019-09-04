import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";



const FormPage = (props) => {
    return (
        <Grid container spacing={ 8 }>
            <Grid item xs={ 12 }>
                <TextField
                    variant="outlined"
                    value={ props.username }
                    onChange={ props.changeUsername }
                />
            </Grid>
            <Grid item xs={ 12 }>
                <TextField
                    variant="outlined"
                    value={ props.password }
                    onChange={ props.changePassword }
                    type="password"
                />
            </Grid>
            <Grid item xs={ 12 }>
                <Button onClick={ props.onClick }>
                    Login
                </Button>
            </Grid>
        </Grid>
    );
};

export default FormPage;
