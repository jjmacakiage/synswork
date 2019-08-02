import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import {fade, makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import {InputBase} from "@material-ui/core";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Barbados' },
    { label: 'Benin' },
    { label: 'Bermuda' },
];

function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;
    return (
        <InputBase
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

renderInput.propTypes = {
    classes: PropTypes.object.isRequired,
    InputProps: PropTypes.object,
};

function renderSuggestion(suggestionProps) {
    const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}

renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
    index: PropTypes.number.isRequired,
    itemProps: PropTypes.object.isRequired,
    selectedItem: PropTypes.string.isRequired,
    suggestion: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
};

function getSuggestions(value, { showEmpty = false } = {}) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0 && !showEmpty
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

            if (keep) {
                count += 1;
            }

            return keep;
        });
}
const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:onFocus': {
                width: 200,
            },
        },
    },
    divider: {
        height: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function SearchList() {
    const classes = useStyles();

    return (
        <Downshift id="downshift-simple">
            {({
                  getInputProps,
                  getItemProps,
                  getLabelProps,
                  getMenuProps,
                  highlightedIndex,
                  inputValue,
                  isOpen,
                  selectedItem,
              }) => {
                const {onBlur, onFocus, ...inputProps} = getInputProps({
                    placeholder: 'Search...',
                });

                return (
                    <div className={classes.container}>
                        { renderInput({
                            fullWidth: true,
                            classes,
                            label: 'Country',
                            InputLabelProps: getLabelProps({shrink: true}),
                            InputProps: {onBlur, onFocus},
                            inputProps,
                        }) }

                        <div {...getMenuProps()}>
                            {isOpen ? (
                                <Paper className={classes.paper} square>
                                    {getSuggestions(inputValue).map((suggestion, index) =>
                                        renderSuggestion({
                                            suggestion,
                                            index,
                                            itemProps: getItemProps({item: suggestion.label}),
                                            highlightedIndex,
                                            selectedItem,
                                        }),
                                    )}
                                </Paper>
                            ) : null}
                        </div>
                    </div>
                );
            }}
        </Downshift>
    )
}
