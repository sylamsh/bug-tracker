import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import PriorityController from '../../Controllers/priorityController';

//Redux
import { useDispatch } from "react-redux";
import { deleteBug, resolveBug, devRespond } from '../../Controllers/actions/bugs';

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
import TextField from '@mui/material/TextField';

export default function BugView({bug, setCurrentId, collapse, setPriorityTheme}) {
    const dispatch = useDispatch();
    const {_id, title, details, steps, version, priority, assigned, name, createdOn, isResolved, devResponse} = bug;
    const {level} = PriorityController(priority);
    const browserHistory = useHistory();
    const [stateDevResponse, setStateDevResponse] = useState('');
    const [stateEditResponse, setStateEditResponse] = useState(devResponse);
    const user = JSON.parse(localStorage.getItem('profile'));

    const editClicked = () => {
      setCurrentId(_id)
      browserHistory.push('/form')
    }
    const deleteClicked = () => {
      dispatch(deleteBug(_id))
      collapse()
    }
    const resolveClicked = () => {
      dispatch(resolveBug(_id))
      const priorityTheme = !bug.isResolved ? (3 + parseInt(bug.priority)) : bug.priority;
      setPriorityTheme(priorityTheme)
    }
    const handleResponse = (e) => {
      setStateDevResponse(e.target.value)
    }
    const submitResponse = (e) => {
      e.preventDefault()
      dispatch(devRespond(_id, { devResponse: stateDevResponse }))
      editDevResponse()
    }
    const editDevResponse = () => {
      setStateEditResponse(!stateEditResponse)
    }

  return (
    <Box sx={{ minWidth: 463}}>
      <Card className="bug-card" variant="outlined">
          <CardHeader
            action={
                user.result.userName === name && <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} bug={bug}/>
            }
            title = {title}
            subheader = {level}
            sx={{bgcolor: "info.main", color: "primary.text"}}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" fontStyle="italic">
            created by {name}
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

          <Typography variant="h5" color="primary.main">Steps</Typography>
            <MDEditor.Markdown source={steps} />

          <Typography variant="h5" color="primary.main" sx={{mt:1}}>Details</Typography>
          <MDEditor.Markdown source={details} />
          {((user.result.role === 'admin' && devResponse) || (user.result.role !== 'admin' && stateEditResponse)) && 
                <Typography variant="h5" color="primary.main" sx={{mt:1}}>Developer Response</Typography>}
          {user.result.role === 'admin' && devResponse && <Typography>{devResponse}</Typography>}
          {user.result.role !== "admin" && (stateEditResponse ? <Typography>{devResponse}</Typography> : 
          <TextField
            value={stateDevResponse}
            onChange={handleResponse}
            sx={{mt:3}}
            label="Developer Response"
            placeholder="Working on it..."
            fullWidth
            multiline/>)}
        </CardContent>
        <CardActions>
          {/* <Button variant="contained" style={{margin:"0 auto"}}>Assign to</Button> */}
          <ButtonGroup aria-label="outlined primary button group" style={{margin:"0 auto"}} fullWidth>
            {user.result.userName === name && <Button variant="contained" color="success" onClick={resolveClicked}>{ isResolved ? 'Unresolve' : 'Resolve' }</Button>}
            {user.result.role !== "admin" && !stateEditResponse && <Button variant="contained" color="success" onClick={submitResponse}>Respond</Button>}
            {user.result.role !== "admin" && stateEditResponse && <Button variant="contained" color="success" onClick={editDevResponse}>Edit Response</Button>}
            <Button variant="outlined" onClick={collapse}>collapse</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Box>
  );
}
