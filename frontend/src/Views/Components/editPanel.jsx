import React from 'react'

//MUI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function EditPanel({ editClicked, deleteClicked }) {
    return (
        <ButtonGroup variant="text" aria-label="outlined primary button group" style={{marginTop:"8%"}}>
            <Button sx={{color:"primary.text"}} onClick={editClicked}>Edit</Button>
            <Button sx={{color:"primary.text"}} onClick={deleteClicked}>Delete</Button>
        </ButtonGroup>
    )
}
