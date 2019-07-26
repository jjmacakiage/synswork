import React, { useEffect, useState } from 'react';
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        marginLeft: theme.spacing(1)
    }
}));


export default function NewTradeForm(props) {
    const classes = useStyles();
    const { onSubmit, fieldList } = props;
    const [tradeName, changeName] = useState('');
    const [fields, setFields] = useState([]);
    const [isError, changeError] = useState(false);
    let temp = [];
    const [RESULT, setRESULT] = useState({ changes: temp });

    useEffect(() => {
        generateGrids();
        temp = resultInit();
    }, [fieldList]);

    function resultInit() {
        const result = [];
        for (let i = 0; i < fieldList.length; i++) {
            let value = '';
            result.push(value);
        }
        return result;
    }

    function handleChange(e, index) {
        const newState = { ...RESULT, changes: RESULT.changes[index] = e.target.value };
        setRESULT(newState);

    }

    function submitForm() {
        for (let i = 0; i < RESULT.changes.length; i++) {
            if (RESULT.changes[i] === '' || RESULT.changes[i] === null) {
                changeError(true);
                return;
            }
        }
        changeError(false);
        if (isError === false) {
            const final = [...RESULT.changes];
            final.push(tradeName);
            onSubmit(final);
        }
    }
    function generateGrids() {
        setFields(fieldList.map((label, index) => {
                return (
                    <Grid item key={ index }>
                        <TextField
                            id={ label.replace(/ /g,"-") }
                            label={ label }
                            disabled={ props.isDisabled }
                            className={ classes.textField }
                            value={ RESULT.changes[index] }
                            onChange={ e => handleChange(e, index) }
                            margin="normal"
                            variant="outlined"
                            error={ isError && value === ''}
                        />
                    </Grid>
                );
            }
        ));

    }



    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 6 }>
                    { fields.slice(0, fields.length / 2) }
                </Grid>
                <Grid item xs={ 6 }>
                    { fields.slice(fields.length / 2, fields.length) }
                </Grid>
                <Grid item xs={ 3 }>
                    <TextField
                        id="trade-name"
                        key={ -1 }
                        label="Name"
                        className={ classes.textField }
                        value={ tradeName }
                        onChange={ e => changeName(e.target.value) }
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={ 3 }>
                    <Button
                        onClick={ submitForm }
                        variant="contained"
                        color="primary"
                        className={ classes.button }
                    >
                        Submit New Trade
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
