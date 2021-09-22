import React,{useState, useEffect} from 'react';
import BugModel from '../../Models/bugModel';

import MDEditor from "@uiw/react-md-editor";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
 
const priorities = [
  {
    value: '1',
    label: 'High',
  },
  {
    value: '2',
    label: 'Moderate',
  },
  {
    value: '3',
    label: 'Low',
  },
];
const versions = ["1.0.0", "1.0.1", "1.1.0", "1.2.0", "1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5"];

export default function CreateForm(props) {
  const [bugObject, setBugOject] = useState(new BugModel(props.bug));
  const [stepsValue, setStepsValue] = useState("");
  const [detailsValue, setDetailsValue] = useState("");
  
  useEffect(()=>{
    setBugOject({
      ...bugObject,
      steps : stepsValue,
      details : detailsValue,
    })
    console.log("steps : " + bugObject.steps);
    console.log("details : " + bugObject.details);
  },[stepsValue, detailsValue])


  const changeInput = (e) => {
    if(e !== undefined) {
      setBugOject({
        ...bugObject,
        [e.target.name] : e.target.value,
      })
      console.log("id : " + bugObject._id);
      console.log("name : " + e.target.name);
      console.log("value : " + e.target.value);
    } 
  }

  const handlePrioritySelect = (e) => {
    props.ChangePriorityTheme(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bugObject);
  };

  return (
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Issue a Bug
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
            <Grid container spacing={2}>

               <Grid item xs={12} sm={4}>
                <TextField
                id="outlined-select-currency"
                select
                variant="standard"
                label="Priority"
                name="priority"
                value={bugObject.priority}
                onChange={(e) => {changeInput(e); handlePrioritySelect(e)}}
                helperText=""
                sx={{ width:"100%"}}
                >
                {priorities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                id="outlined-select-currency"
                select
                variant="standard"
                label="Version"
                name="version"
                value={bugObject.version}
                onChange={changeInput}
                helperText=""
                sx={{ width:"100%"}}
                >
                  {versions.map((version, key) => (
                      <MenuItem key={key} value={version}>
                      {version}
                      </MenuItem>
                ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                id="outlined-select-currency"
                select
                variant="standard"
                label="Assign to"
                name="assigned"
                value={bugObject.assigned}
                onChange={changeInput}
                helperText=""
                sx={{ width:"100%"}}
                >
                  {priorities.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                ))}
                </TextField>
              </Grid>
            
              <Grid item xs={12} sm={12}>
                <TextField
                  name="name"
                  value={bugObject.name}
                  onChange={changeInput}
                  required
                  fullWidth
                  id="bugTitle"
                  label="Bug Title"
                  autoFocus
                  variant="standard"
                />
              </Grid>
              
              <Grid item xs={12} >
                <Typography variant="subtitle1" sx={{mb:1, color:"primary.main"}} gutterBottom>
                    Steps to Reproduce the bug
                </Typography>
                <MDEditor
                  name="steps"
                  value={stepsValue}
                  onChange={setStepsValue}/>
              </Grid>
              <Grid item xs={12} >
                <Typography variant="subtitle1" sx={{mb:1, color:"primary.main"}} gutterBottom>
                    Details
                </Typography>
                <MDEditor
                  name="details"
                  value={detailsValue}
                  onChange={setDetailsValue}/>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Button
                variant="contained"
                type="submit"
                sx={{ mt: 2, mb: 2, minWidth:"33%", minHeight:"10%"}}>
                    Submit
                </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}