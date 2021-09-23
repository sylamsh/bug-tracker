import React from 'react'

//MUI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function EditPanel({ editClicked, deleteClicked }) {
    return (
        <ButtonGroup variant="text" aria-label="outlined primary button group" style={{marginTop:"8%"}}>
            <Button color="warning" onClick={editClicked}>Edit</Button>
            <Button color="error" onClick={deleteClicked}>Delete</Button>
        </ButtonGroup>
    )
}
