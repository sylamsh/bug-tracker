import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Components
import NumBugsCard from '../Components/DashBoard/numBugsCard';

//MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';

export default function DashBoard() {
    const bugs = useSelector((state) => state.bugs);

    let Resolvedcounts = []
    let Unresolvedcounts = []
    if (bugs !== undefined) {
        for(let i = 0; i<3; i++) {
            Resolvedcounts.push(filterBugs(i+1, false))
        }
        for(let i = 0; i<3; i++) {
            Unresolvedcounts.push(filterBugs(i+1, true))
        }
    }

    function filterBugs(priority, isResolved) {
        let priorityBugs = bugs.filter((bug) => {
            return parseInt(bug.priority) === priority && bug.isResolved === isResolved
        })
        return priorityBugs.length
    }
    const browserHistory = useHistory()
    function redirect() {
        browserHistory.push('/viewbugs')
    }

    return (
    <>
        <Typography  variant="h4" justifyContent="center" sx={{mt:3, mb: 1}}>
            Active
        </Typography>
        <Grid container justifyContent="space-between" spacing={0} sx={{mt: "20%"}}>
            {Resolvedcounts.map((bugCount, key) => {
                return <Grid item xs={12} sm={4} key={key}>
                    <NumBugsCard priority={key+1} count={bugCount} clicked={redirect}/>
                </Grid>
            })}
        </Grid>
        <Typography  variant="h4" justifyContent="center" sx={{mt:5, mb: 1}}>
            Resolved
        </Typography>
        <Grid container justifyContent="space-between" spacing={0} sx={{mt: "20%"}}>
            {Unresolvedcounts.map((bugCount, key) => {
                return <Grid item xs={12} sm={4} key={key}>
                    <NumBugsCard priority={key+4} count={bugCount} clicked={redirect}/>
                </Grid>
            })}
        </Grid>
    </>
    )
}

