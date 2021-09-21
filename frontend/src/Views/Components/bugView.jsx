import React,{useState} from 'react';
import {useDispatch} from "react-redux";

import PriorityController from '../../Controllers/priorityController';
import {markResolved} from '../../Controllers/Redux/bugSlice';

import EditPanel from './editPanel';

//MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OutlinedCard = (props) => {
    const dispatch = useDispatch();
    const {name, details, steps, version, priority, assigned, creator, time} = props.bug;
    const {level, BGcolor, Tcolor} = PriorityController(priority);
    const collapse = () => {
        props.collapse(props.bug._id);
    };
    const editClicked = () => {}
    const deleteClicked = () => {}

    return  <React.Fragment>
    <CardHeader
        action={
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} bug={props.bug}/>
        }
        title = {name}
        subheader = {level}
        style = {{backgroundColor: BGcolor, color: Tcolor}}
    />
    <CardContent>
            <Typography 
            sx={{ fontSize: 14 }} 
            color="text.primary"
            fontStyle="italic">
            created by {creator} on {time}
            </Typography>
            <Typography 
            sx={{ fontSize: 14 }} 
            color="text.primary"
            fontStyle="italic">
            assigned to {assigned}
            </Typography>
        <Typography variant="h5" color="text.primary" style={{fontWeight:"bold"}} align="right">
        {version}
       </Typography>
      <Typography variant="h5">
        Steps
      </Typography>
      <Typography sx={{ mb: 1.5 }} variant="body1">
        {steps}
      </Typography>
      <Typography variant="h5">
        Details
      </Typography>
      <Typography variant="body2">
        {details}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" style={{margin:"0 auto"}}>Assign to</Button>
      <Button variant="contained" color="success" style={{margin:"0 auto"}} onClick={()=>{dispatch(markResolved())}}>Resolved!</Button>
      <Button variant="outlined" style={{margin:"0 auto"}} onClick={collapse}>collapse</Button>
    </CardActions>
  </React.Fragment>
};

export default function BugView(props) {
    return (
    <Box sx={{ minWidth: 275}}>
      <Card className="bug-card" >
          <OutlinedCard bug={props.bug} collapse={props.collapse}/>
      </Card>
    </Box>
  );
}
