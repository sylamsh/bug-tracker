import * as React from 'react';

import Markdown from '../Components/markdown';

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
  const [priority, setPriority] = React.useState(null);
  const [version, setVersion] = React.useState(null);
  const [assignPerson, setAssignPerson] = React.useState(null);
  
  const handlePrioritySelect = (e) => {
    setPriority(e.target.value);
    props.ChangePriorityTheme(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
                value={priority}
                onChange={handlePrioritySelect}
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
                value={version}
                onChange={(e) => {setVersion(e.target.value)}}
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
                value={assignPerson}
                onChange={(e) => {setAssignPerson(e.target.value)}}
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
                  name="bugTitle"
                  required
                  fullWidth
                  id="bugTitle"
                  label="Bug Title"
                  autoFocus
                  variant="standard"
                />
              </Grid>
              
              <Grid item xs={12} >
                <Typography component="form" sx={{mb:1, color:"primary.main"}} gutterBottom>
                    Steps to Reproduce the bug
                </Typography>
                <Markdown />
              </Grid>
              <Grid item xs={12} >
                <Typography component="form" sx={{mb:1, color:"primary.main"}} gutterBottom>
                    Details
                </Typography>
                <Markdown />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Button
                variant="contained"
                sx={{ mt: 2, mb: 2, minWidth:"33%", minHeight:"10%"}}>
                Submit
                </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}