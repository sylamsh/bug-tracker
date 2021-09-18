import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OutlinedCard = (props) => {
    const {name, priority, version, details} = props.bug;
    return  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        priority : {priority}
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {version}
      </Typography>
      <Typography variant="body2">
        {details.substring(0, 100)}...
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Read More</Button>
    </CardActions>
  </React.Fragment>
};

export default function Bugcard(props) {
    const Clicked = () => {
        props.clicked(props.bug.name);
    }
    
    return (
    <Box sx={{ minWidth: 275 }} onClick={Clicked}>
      <Card variant="outlined">
          <OutlinedCard bug={props.bug}/>
      </Card>
    </Box>
  );
}
