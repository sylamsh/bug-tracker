import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getBugs} from '../../Controllers/Redux/bugSlice';
import NumBugsCard from '../Components/DashBoard/numBugsCard';


import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';

export default function DashBoard() {
    const dispatch = useDispatch()
    const bugs = useSelector(state=>state.bugs)
    let highCount = 0
    let moderateCount = 0
    let lowCount = 0
    if (bugs != undefined) {
        highCount = filterBugs(1);
        moderateCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function filterBugs(priority) {
        return bugs.filter((bug) => {return bug.priority === priority})
    }

    useEffect(() => {
        dispatch(getBugs())
    }, [bugs === undefined])

    const browserHistory = useHistory()
    function redirect() {
        browserHistory.push('/viewbugs')
    }

    return (
    <Grid container justifyContent="center">
        <Typography  variant="h4" justifyContent="center" align="center" sx={{mb: 1}}>
            Active
        </Typography>
        <Grid container spacing={2} sx={{mt: "20%"}}>
            <Grid container justifyContent="space-between" spacing={0}>
                <Grid item xs={12} sm={4}>
                    <NumBugsCard priority={1} count={highCount.length} clicked={redirect}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumBugsCard priority={2} count={moderateCount.length} clicked={redirect}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumBugsCard priority={3} count={lowCount.length} clicked={redirect}/>
                </Grid>
            </Grid>
        </Grid>
        <Typography  variant="h4" justifyContent="center" align="center" sx={{mt:3, mb: 1}}>
            Resolved
        </Typography>
        <Grid container spacing={2} sx={{mt: "20%"}}>
            <Grid container justifyContent="space-between" spacing={0}>
                <Grid item xs={12} sm={4}>
                    <NumBugsCard priority={1} count={highCount.length} clicked={redirect}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumBugsCard priority={2} count={moderateCount.length} clicked={redirect}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumBugsCard priority={3} count={lowCount.length} clicked={redirect}/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}

