import React from 'react';
import moment from 'moment';
import PriorityController from '../../Controllers/priorityController';

//MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const OutlinedCard = (props) => {
    const {title, version, name, assigned, createdOn} = props.bug;

    return  <React.Fragment>
    <CardContent style={{color : props.Tcolor}}>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {props.level}
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        {version}
      </Typography>
      <Typography variant="body2">
        created by {name}
        <Typography variant="inline" sx={{float: "right"}}>
          {moment(createdOn).fromNow()}
        </Typography>
      </Typography>
      {/* <Typography variant="body2">
        assigned to {assigned}
      </Typography> */}
    </CardContent>
  </React.Fragment>
};

export default function Bugcard(props) {
    const priorityTheme = props.bug.isResolved ? (3 + parseInt(props.bug.priority)) : props.bug.priority;
    const {level, BGcolor, Tcolor} = PriorityController(priorityTheme);
    const Clicked = () => {
        props.clicked(props.bug._id, priorityTheme);
    }
    
    return (
    <Box sx={{ minWidth: 275 }} onClick={Clicked}>
      <Card style={{backgroundColor : BGcolor}} className="bug-card">
          <OutlinedCard bug={props.bug} level={level} Tcolor={Tcolor}/>
      </Card>
    </Box>
  );
}