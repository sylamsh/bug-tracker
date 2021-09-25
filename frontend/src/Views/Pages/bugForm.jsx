import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { createBug, updateBug } from '../../Controllers/actions/bugs';

//Models and Data
import BugModel from '../../Models/bugModel';
import { priorities, versions } from '../../Models/bugAttributeData';

//MDEditor
import MDEditor from "@uiw/react-md-editor";

//MUI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

export default function CreateForm({ currentId, setCurrentId, setPriorityTheme }) {
  const [bugObject, setBugOject] = useState(new BugModel());
  const bug = useSelector((state) => currentId ? state.bugs.find((b) => b._id === currentId) : null);
  const users = useSelector((state) => state.auth);
  const browserHistory = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(bug) setBugOject(bug);
  },[bug, dispatch])

  const changeInput = (e) => {
    setBugOject({
      ...bugObject,
      [e.target.name] : e.target.value,
    }) 
    console.log(bugObject)
  }
  
  const handlePrioritySelect = (e) => {
    setPriorityTheme(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId !== null) {
      dispatch(updateBug(currentId, { ...bugObject, name: user?.result?.userName }));
    } else {
      dispatch(createBug({ ...bugObject, name: user?.result?.userName }));
    }
    browserHistory.push('/viewBugs');
    setCurrentId(null);
    setPriorityTheme(null);
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
            Report Bug
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
            <Grid container spacing={2}>
{/* PRIORITY */}
               <Grid item sm={12} md={4}>
                <TextField
                  select
                  variant="standard"
                  label="Priority"
                  name="priority"
                  value={bugObject.priority}
                  onChange={(e) => {changeInput(e); handlePrioritySelect(e)}}
                  helperText=""
                  sx={{ width:"100%"}}>
                    {priorities.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              </Grid>
{/* VERSION */}
              <Grid item sm={12} md={4}>
                <TextField
                select
                variant="standard"
                label="Version"
                name="version"
                value={bugObject.version}
                onChange={changeInput}
                helperText=""
                sx={{ width:"100%"}}>
                  {versions.map((version, key) => (
                    <MenuItem key={key} value={version}>
                      {version}
                    </MenuItem>
                ))}
                </TextField>
              </Grid>
{/* BUG ASSIGNED TO */}
              <Grid item sm={12} md={4}>
                <TextField
                  select
                  variant="standard"
                  label="Assign to"
                  name="assigned"
                  value={bugObject.assigned}
                  onChange={changeInput}
                  helperText=""
                  sx={{ width:"100%"}}>
                    {users.map((user) => (
                     <MenuItem key={user._id} value={user.userName}>
                        {user.userName}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
{/* TITLE OF BUG */}
              <Grid item xs={12} sm={12}>
                <TextField
                  name="title"
                  value={bugObject.title}
                  onChange={changeInput}
                  required
                  fullWidth
                  id="bugTitle"
                  label="Bug Issue Title"
                  autoFocus
                  variant="standard"/>
              </Grid>
{/* STEPS MD EDITOR */}
              <Grid item xs={12} >
                <Typography variant="subtitle1" sx={{mb:1, color:"primary.main"}} gutterBottom>
                    Steps to Reproduce the Bug
                </Typography>
                <MDEditor name="steps"
                          value={bugObject.steps}
                          onChange={(val) => {
                            setBugOject(prevState => ({ 
                                  ...prevState,    
                                  steps: val       
                            }));
                          }}/>
              </Grid>
{/* DETAILS MD EDITOR */}
              <Grid item xs={12} >
                <Typography variant="subtitle1" sx={{mb:1, color:"primary.main"}} gutterBottom>
                    Details
                </Typography>
                <MDEditor name="details"
                          value={bugObject.details}
                          onChange={(val) => {
                            setBugOject(prevState => ({ 
                                  ...prevState,    
                                  details: val       
                            }));
                          }}/>
              </Grid>
            </Grid>
{/* SUBMIT BUTTON */}
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