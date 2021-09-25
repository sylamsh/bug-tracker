import React,{ useState } from "react";
import { useSelector } from "react-redux";

//Components
import BugCard from "../Components/bugCard";
import BugView from "../Components/bugView";

//MUI
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ViewBugs({setPriorityTheme, setCurrentId}){
    const bugs = useSelector((state) => state.bugs);

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
    
    return( 
      !bugs.length ? 
        <Grid container direction="row" alignItems="center" justifyContent="center" style={{height:"80vh"}}>
          <CircularProgress sx={{margin : "0 auto"}}/> 
        </Grid> : <>

            <Box sx={{mt: -2}}>
              <ImageList variant="masonry" cols={2} gap={12}>
                {bugs.slice(0).reverse().map((bug, key) => {
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