import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBugs} from  "../../Controllers/Redux/bugSlice";
import BugCard from "./Bug-Card/bugCard";

//MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Bugcard from "./Bug-Card/bugCard";

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
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);
    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1])

    const classes = useStyles();

    return( 
    <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" spacing={2}>
            {bugs.map( (bug, key) => {
                return (
                <Grid key={key} item xs={12} sm={6}>
                    <BugCard bug={bug}/>
                </Grid>
                );
            })}
        </Grid>
    </Grid>
    )
}