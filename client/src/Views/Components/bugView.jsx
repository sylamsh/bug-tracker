import React from 'react';
import PriorityController from '../../Controllers/priorityController';

//MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OutlinedCard = (props) => {
    console.log(props.bug);
    const {name, details, steps, version, priority, assigned, creator, time} = props.bug;
    const {level, BGcolor, Tcolor} = PriorityController(props.bug.priority);
    const collapse = () => {
        props.collapse(props.bug._id);
    };

    return  <React.Fragment>
    <CardHeader
        action={
            <Button variant="contained" style={{marginTop:"10%"}}>Assign to</Button>
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
        <Typography sx={{ fontSize: 16 }} color="text.primary" style={{fontWeight:"bold"}}>
        {version}
       </Typography>
      {/* <Typography variant="h5" component="div" >
        lorem
      </Typography> */}
      <Typography sx={{ mb: 1.5 }} variant="body1">
        Steps{steps}
      </Typography>
      <Typography variant="body2">
        Details{details}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color="success" style={{margin:"0 auto"}}>Reolved!</Button>
      <Button style={{margin:"0 auto"}} onClick={collapse}>colapse</Button>
    </CardActions>
  </React.Fragment>
};

export default function BugView(props) {
    console.log(props.bug);
    return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className="bug-card">
          <OutlinedCard bug={props.bug} collapse={props.collapse}/>
      </Card>
    </Box>
  );
}
