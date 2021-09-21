import React from 'react'
import { Link } from "react-router-dom";
import BugModel from "../../Models/bugModel";

//MUI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function EditPanel(props) {

    const toForm = () => {
        console.log(new BugModel(props.bug));
    }

    return (
        <ButtonGroup variant="text" aria-label="outlined primary button group" style={{marginTop:"8%"}}>
            <Link to='/form'>
                <Button color="warning" onClick={toForm}>Edit</Button>
            </Link>
            <Button color="error" onClick={toForm}>Delete</Button>
        </ButtonGroup>
    )
}
