import React from 'react'

import PriorityController from '../../../Controllers/priorityController';

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function NumBugsCard(props) {
    const {level, BGcolor, Tcolor} = PriorityController(props.priority);

    return (
        <Card sx={{borderRadius : 0, bgcolor : BGcolor, minHeight: "12vh"}} variant="outlined" onClick={props.clicked}>
            <CardContent style={{color : Tcolor}} sx={{paddingLeft: "2%", paddingTop:"1%"}}>
                <Typography justifyContent="center" sx={{fontSize:"125%"}}>
                    {level}
                </Typography>
                <Typography variant="h3" justifyContent="center" align="center">
                    {props.count}
                </Typography>
            </CardContent>
        </Card>
    )
}
