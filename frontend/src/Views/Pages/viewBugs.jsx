import React,{ useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { priorities, versions } from '../../Models/bugAttributeData';

//Components
import BugCard from "../Components/bugCard";
import BugView from "../Components/bugView";

//MUI
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function ViewBugs({setPriorityTheme, setCurrentId}){
    const bugs = useSelector((state) => state.bugs);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [assignedBugs, setAssignedBugs] = useState(true);
    const [filterValues, setFilterValues] = useState({
      version: 'All',
      status: false,
      priority: 'All',
    });

    // Theme Controller
    const [displayBug, setDisplayBug] = useState(null);
    function BugClicked(_id, priority) {
      setDisplayBug(_id);
      setPriorityTheme(priority);
    }
    function CollapseView() {
      setDisplayBug(null);
      setPriorityTheme(null);
    }
    const changeFilter = (e) => {
      setFilterValues({
        ...filterValues,
        [e.target.name]: e.target.value,
      })
      console.log(filterValues)
    }
    const filter = (bug) => {
      return  (user.result.role !== 'admin' ? (assignedBugs ? (bug.assigned === user.result.userName) : bug) : bug) &&
              (filterValues.version === 'All' ? bug : bug.version === filterValues.version) &&
              (filterValues.status === 'All' ? bug : bug.isResolved === filterValues.status) &&
              (filterValues.priority === 'All' ? bug : bug.priority === filterValues.priority)
    }


    return( 
      !bugs.length ? 
        <Grid container direction="row" alignItems="center" justifyContent="center" style={{height:"80vh"}}>
          <CircularProgress sx={{margin : "0 auto"}}/> 
        </Grid> : <>

           <Grid container spacing={2}>
{/* PRIORITY */}
               <Grid item sm={12} md={user.result.role === 'admin' ? 4 : 3}>
                <TextField
                  select
                  label="Priority"
                  name="priority"
                  value={filterValues.priority}
                  onChange={(e) => {changeFilter(e); setPriorityTheme(e.target.value !== 'All' ? e.target.value : null)}}
                  sx={{ width:"100%"}}>
                  <MenuItem value="All">
                      All
                    </MenuItem>
                    {priorities.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              </Grid>
{/* VERSION */}
              <Grid item sm={12} md={user.result.role === 'admin' ? 4 : 3}>
                <TextField
                select
                label="Status"
                name="status"
                value={filterValues.status}
                onChange={changeFilter}
                helperText=""
                sx={{ width:"100%"}}>
                  {/* {versions.map((version, key) => ( */}
                    <MenuItem value="All">
                      All
                    </MenuItem>
                    <MenuItem value={false}>
                      Active
                    </MenuItem>
                    <MenuItem value={true}>
                      Resolved
                    </MenuItem>
                {/* ))} */}
                </TextField>
              </Grid>
              <Grid item sm={12} md={user.result.role === 'admin' ? 4 : 3}>
                <TextField
                select
                label="Version"
                name="version"
                value={filterValues.version}
                onChange={changeFilter}
                helperText=""
                sx={{ width:"100%"}}>
                  <MenuItem value="All">
                      All
                    </MenuItem>
                  {versions.map((version, key) => (
                    <MenuItem key={key} value={version}>
                      {version}
                    </MenuItem>
                ))}
                </TextField>
              </Grid>
              {user.result.role !== 'admin' &&  <FormControlLabel
                                                  control={<Switch color="primary" value={assignedBugs} onClick={() => setAssignedBugs(p => !p)} defaultChecked/>}
                                                  label="Assigned"
                                                  labelPlacement="start"
                                                  sx={{float:"center"}}/>}
            </Grid>
            <Box>
              <ImageList variant="masonry" cols={2} gap={12}>
                {bugs.slice(0).reverse().filter((bug) => filter(bug)).map((bug, key) => {
                    return (
                      <ImageListItem key={key}>
                        {bug._id !== displayBug && <BugCard bug={bug} clicked={BugClicked}/>}
                        {bug._id === displayBug && <BugView bug={bug} 
                                                            collapse={CollapseView} 
                                                            setCurrentId={setCurrentId}
                                                            setPriorityTheme={setPriorityTheme}/>}
                      </ImageListItem>
                  );
                })}
            </ImageList>
          </Box>
        </>
    )
}