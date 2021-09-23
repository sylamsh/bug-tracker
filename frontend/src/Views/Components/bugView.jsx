import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import PriorityController from '../../Controllers/priorityController';

//Redux
import { useDispatch } from "react-redux";
import { deleteBug } from '../../Controllers/actions/bugs';
import { markResolved } from '../../Controllers/Redux/bugSlice';

//Components
import EditPanel from './editPanel';
import MDEditor from "@uiw/react-md-editor";

//MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'; 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

const OutlinedCard = ({bug, setCurrentId, collapse}) => {
    const dispatch = useDispatch();
    const {_id, name, details, steps, version, priority, assigned, creator, createdOn} = bug;
    const {level, BGcolor, Tcolor} = PriorityController(priority);
    const browserHistory = useHistory();
    const editClicked = () => {
      setCurrentId(_id);
      browserHistory.push('/form');
      console.log(_id);
    }
    const deleteClicked = () => {
      dispatch(deleteBug(_id))
      collapse()
    }

    return  <React.Fragment>
    <CardHeader
        action={
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} bug={bug}/>
        }
        title = {name}
        subheader = {level}
        style = {{backgroundColor: BGcolor, color: Tcolor}}
    />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.primary" fontStyle="italic">
        created by {creator}
        <Typography variant="inline" sx={{float: "right"}}>
        {moment(createdOn).fromNow()}
        </Typography>
      </Typography>

      <Typography sx={{ fontSize: 14 }}  color="text.primary" fontStyle="italic">
        assigned to {assigned}
      </Typography>
      
      <Typography variant="h5" color="text.primary" style={{fontWeight:"bold"}} align="right">
        {version}
      </Typography>

      <Typography variant="h5" color={BGcolor}>Steps</Typography>
        <MDEditor.Markdown source={steps} />

      <Typography variant="h5" color={BGcolor}>Details</Typography>
      <MDEditor.Markdown source={details} />
    </CardContent>
    <CardActions>
      {/* <Button variant="contained" style={{margin:"0 auto"}}>Assign to</Button> */}
      <ButtonGroup aria-label="outlined primary button group" style={{margin:"0 auto"}} fullWidth>
        <Button variant="contained" color="success" onClick={()=>{dispatch(markResolved())}}>Resolved!</Button>
        <Button variant="outlined" onClick={collapse}>collapse</Button>
      </ButtonGroup>
    </CardActions>
  </React.Fragment>
};

export default function BugView({bug, setCurrentId, collapse}) {
    return (
    <Box sx={{ minWidth: 275}}>
      <Card className="bug-card" >
          <OutlinedCard bug={bug} collapse={collapse} setCurrentId={setCurrentId}/>
      </Card>
    </Box>
  );
}
