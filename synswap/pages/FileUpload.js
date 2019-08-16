import React, { useMemo, useState } from 'react';
import {Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import { useDropzone } from 'react-dropzone';
import FileTypeList from '../components/fileupload/FileTypeList';
import Header from '../components/main/Header';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(10)
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none'
    },
}));

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    minWidth: "max-content"
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export default function FileUpload(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const [options, setOptions] = useState([
        ['Excel', 'CSV'],
        [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
            'text/plain'
        ]]);
    const {
        acceptedFiles,
        rejectedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept:
            () => {
                let result = '';
                for (let i = 0; i < options[0].length; i++)
                    if (checked.indexOf(options[0][i]) !== -1) {
                        result = result + options[1][i];
                        (i !== options[0].length) ? result = result + ',' : null
                    }
                return result;
            }
        });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject
    ]);

    const acceptedFilesItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const rejectedFilesItems = rejectedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (
        <Grid container spacing={ 2 } className={ classes.root }>
            <Grid item xs={ 12 }>
                <Header
                    items={ ['Home', 'Blotter', 'New Trade'] }
                    links={ ['Home', 'Blotter', 'NewTrade'] }
                />
            </Grid>
            <Grid item xs={ 12 }>
                <Typography variant="overline" align="center"> UPLOAD NEW TRADE </Typography>
                <Divider dark={ true } />
            </Grid>
            <Grid item xs={12}>
                <FileTypeList options={ options[0] } handleToggle={ handleToggle } checked={ checked }/>
            </Grid>
            <Grid item xs={ 12 }>
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <Typography variant="overline">Drag 'n' drop some files here, or click to select files</Typography>
                    <Typography variant="overline">(Only *.jpeg and *.png images will be accepted) </Typography>
                </div>
            </Grid>
            <Grid item xs={ 12 }>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography variant="overline">Accepted files</Typography>
                    <ul>
                        {acceptedFilesItems}
                    </ul>
                    <Typography variant="overline">Rejected files</Typography>
                    <ul>
                        {rejectedFilesItems}
                    </ul>
                </div>
            </Grid>
        </Grid>
    )
}
