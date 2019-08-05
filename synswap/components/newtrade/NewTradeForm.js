import React, {  useState } from 'react';
import {
    Button,
    Checkbox, Collapse,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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
    const [isError, changeError] = useState(false);

    const [RESULT, setRESULT] = useState({ changes: new Array(fieldList.length) });

    function handleChange(e, index) {
        const array = [...RESULT.changes];
        array.splice(index, 1, e.target.value);
        const newState = { ...RESULT, changes: array };
        setRESULT(newState);
    }

    function submitForm() {
        console.log(RESULT.changes);
        const final = [...RESULT.changes];
        final.push(tradeName);
        onSubmit(final);
    }

    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 6 }>
                    {
                        fieldList.map((label, index) => {
                            if (index < fieldList.length / 2) {
                                return (
                                    <Grid item key={ index }>
                                        <TextField
                                            id={ label.replace(/ /g,"-") }
                                            label={ label }
                                            disabled={ props.isDisabled }
                                            className={ classes.textField }
                                            value={ RESULT[index] }
                                            onChange={ e => handleChange(e, index) }
                                            margin="normal"
                                            variant="outlined"
                                            error={ isError }
                                        />
                                    </Grid>
                                );
                            }
                            else return null;
                        })
                    }
                </Grid>
                <Grid item xs={ 6 }>
                    {
                        fieldList.map((label, index) => {
                            if (index >= fieldList.length / 2) {
                                return (
                                    <Grid item key={ index }>
                                        <TextField
                                            id={ label.replace(/ /g,"-") }
                                            label={ label }
                                            disabled={ props.isDisabled }
                                            className={ classes.textField }
                                            value={ RESULT[index] }
                                            onChange={ e => handleChange(e, index) }
                                            margin="normal"
                                            variant="outlined"
                                            error={ isError }
                                        />
                                    </Grid>
                                );
                            }
                            else return null;
                        })
                    }
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
