import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = theme => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

class MuiVirtualizedTable extends PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight, justifyContent: "center" }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight, justifyContent: "center" }}
                align={ columns[columnIndex].numeric || false ? 'right' : 'left' }
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table height={height} width={width} {...tableProps} rowClassName={this.getRowClassName}>
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={headerProps =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

function formatColumns(columns) {
    if (columns.length === 0 || columns[0].width) {
        return columns;
    }
    let result = [];
    let width = 1800 / columns.length;
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const object = {
            width: width,
            label: column,
            dataKey: column.toString().toLowerCase().replace("\s",""),
            numeric: !isNaN(column)
        };
        result.push(object);
    }
    return result;
}

function formatRows(rows, columns) {
    if (rows.length === 0 || !rows[0].length ){
        return rows;
    }
    let result = [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let temp = [];
        for (let j = 0; j < row.length; j++) {
            let dataKey = columns[j].toString().toLowerCase().replace("\s", "");
            temp.push({ [dataKey]: row[j] });
        }
        console.log('here');
        let objectList = temp.reduce((result, item) => {
            let key = Object.keys(item)[0];
            result[key] = item[key];
            return result;
        }, {});
        result.push(objectList);
    }
    return result;
}


export default function ReactVirtualizedTable(props) {
    console.log(formatRows(props.data.rows, props.data.columns));

    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <VirtualizedTable
                rowCount={ props.data.rows.length }
                rowGetter={({ index }) => formatRows(props.data.rows, props.data.columns)[index]}
                columns={ formatColumns(props.data.columns) }
                onRowClick={ props.onRowClick }
            />
        </Paper>
    );
}
