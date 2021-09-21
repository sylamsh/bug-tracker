import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBugs} from  "../../Controllers/Redux/bugSlice";
import BugCard from "../Components/bugCard";
import BugView from "../Components/bugView";

//MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ViewBugs(props){
    const [displayBug, setDisplayBug] = useState({
      _id : null,
    });
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);
    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1])

    function BugClicked(_id, priority) {
      setDisplayBug({
        _id : _id,
      });
      props.ChangePriorityTheme(priority);
      console.log("ya clicked ", _id);
    }

    function CollapseView(_id) {
      setDisplayBug({
        _id: null
      })
      props.ChangePriorityTheme(null);
    }
    
    const classes = useStyles();
    return( 
    <Grid container className={classes.root} spacing={2}>
        <Grid container justifyContent="space-between" spacing={2}>
            {bugs.map( (bug, key) => {
                return (
                <Grid key={key} item>
                  <Grid item xs={12} sm={12}>
                    {bug._id !== displayBug._id && <BugCard bug={bug} clicked={BugClicked}/>}
                  </Grid>
                  <Grid item xs={12}> 
                    {bug._id === displayBug._id && <BugView bug={bug} collapse={CollapseView}/>}
                  </Grid>
                </Grid>
                );
              })}
        </Grid>
    </Grid>
    )
}