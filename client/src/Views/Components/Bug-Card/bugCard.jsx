import React from 'react';
import PriorityController from '../../../Controllers/priorityController';

//MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const OutlinedCard = (props) => {
    const {name, version, details} = props.bug;

    return  <React.Fragment>
    <CardContent style={{color : props.Tcolor}}>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {props.level}
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        {version}
      </Typography>
      <Typography variant="body2">
        {details.substring(0, 200)}...
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small" style={{color : "rgba(18, 78, 120, 1)"}}>Read More</Button>
    </CardActions> */}
  </React.Fragment>
};

export default function Bugcard(props) {
    const {level, BGcolor, Tcolor} = PriorityController(props.bug.priority);
    const Clicked = () => {
        props.clicked(props.bug._id, props.bug.priority);
    }
    
    return (
    <Box sx={{ minWidth: 275 }} onClick={Clicked}>
      <Card style={{backgroundColor : BGcolor}} className="bug-card">
          <OutlinedCard bug={props.bug} level={level} Tcolor={Tcolor}/>
      </Card>
    </Box>
  );
}
