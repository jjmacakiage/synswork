import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

/**
 * @function createRows
 * @param data
 * takes data and maps each field to corresponding data input
 */
export function createRows(data, fields) {
    const result = [];
    for (let i = 0; i < fields.length; i++) {
        const row = [fields[i], data[i]];
        result.push(row);
    }
    return result;
}

/**
 * @class TabContainer
 * @param props
 * @return {*}
 * @constructor
 */

export function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
