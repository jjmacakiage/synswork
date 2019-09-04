import React, { useState } from 'react';
import { Button, Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1)
    },
    card: {
        padding: 30,
    },
}));

export default function CustomiseFields(props) {
    const classes = useStyles();
    const [newFields, fieldConcat] = useState(['Field']);
    const [field, fieldName] = useState('');

    function handleAdd() {
        if (field.length !== 0) {
            const result = [...newFields];
            result.push(field);
            fieldConcat(result);
            fieldName('');
        }
    }

    function deleteField(i) {
        const remainingFields = newFields.filter((value, index) => {
            return index !== i;
        });
        fieldConcat(remainingFields);
    }

    const { addFields } = props;
    function saveChanges() {
        const changes = newFields.filter((value, index) => {
            return index !== 0;
        });
        addFields(changes);
        fieldConcat([]);
    }
    function handleChange(e) {
        fieldName(e.target.value);
    }
    return (
        <div className={ classes.root }>
            <div className={ classes.card }>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 }>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 }>
                                <TextField
                                    id="add-field"
                                    label="Add Field"
                                    value={ field }
                                    onChange={ e => handleChange(e) }
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={ 3 }>
                                <Button
                                    onClick={ handleAdd }
                                    variant="contained"
                                    color="primary"
                                >
                                    Add Field
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 6 }>
                                {
                                    newFields.map((newField, index) => {
                                        return (
                                            (index % 2 === 0) ?
                                                (
                                                    <Grid container spacing={ 2 } key={ index }>
                                                        <TextField
                                                            disabled
                                                            key={ index }
                                                            id={ newField.replace(/ /g,"-") }
                                                            label={ newField }
                                                            className={ classes.textField }
                                                            value={ newField }
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                        {
                                                            index !== 0 ?
                                                                (
                                                                    <IconButton aria-label="Delete" onClick={ () => deleteField(index) }>
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                ) : null

                                                        }
                                                    </Grid>
                                                ) : null
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item xs={ 6 }>
                                {
                                    newFields.map((newField, index) => {
                                        return (
                                            (index % 2 !== 0) ?
                                                (
                                                    <Grid container spacing={ 2 } key={ index }>
                                                        <TextField
                                                            disabled
                                                            id={ newField.replace(/ /g,"-") }
                                                            label={ newField }
                                                            className={ classes.textField }
                                                            value={ newField }
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                        {
                                                            index !== 0 ?
                                                                (
                                                                    <IconButton aria-label="Delete" onClick={ () => deleteField(index) }>
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                ) : null

                                                        }
                                                    </Grid>
                                            ) : null
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Button
                                    onClick={ saveChanges }
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}
