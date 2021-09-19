import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBugs} from  "../../Controllers/Redux/bugSlice";
import BugCard from "../Components/Bug-Card/bugCard";
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

export default function ViewBugs(){
    const [displayBug, setDisplayBug] = useState({
      _id : null,
      isDisplay : false,
    });
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);
    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1])

    function BugClicked(_id) {
      setDisplayBug({
        _id : _id,
        isDisplay : !displayBug.isDisplay,
      });
      console.log("ya clicked ", _id);
    }
    
    const classes = useStyles();
    return( 
    <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" spacing={2}>
            {bugs.map( (bug, key) => {
                return (
                <Grid key={key} item>
                  <Grid item xs={12} sm={6}>
                    {bug._id !== displayBug._id && <BugCard bug={bug} clicked={BugClicked}/>}
                  </Grid>
                  <Grid item xs={12}> 
                    {displayBug.isDisplay && bug._id === displayBug._id && <BugView bug={bug} />}
                  </Grid>
                </Grid>
                );
              })}
        </Grid>
    </Grid>
    )
}