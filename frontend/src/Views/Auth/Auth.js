import React,{useState} from 'react';
import UserModel from '../../Models/userModel';
import { useDispatch } from 'react-redux';
import { signup, signin } from '../../Controllers/actions/auth';

//MUI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


export default function SignUp() {
  const [userObject, setUserObject] = useState(new UserModel());
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const switchMode = () => {
    setSignup(prevState => !prevState)
    setShowPassword(false)
  }

  const handleChange = (e) => {
     setUserObject({
       ...userObject,
       [e.target.name]: e.target.value,
     })
  }

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup) {
      dispatch(signup({...userObject}));
    } else {
      dispatch(signin({...userObject}));
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {isSignup && <Grid item xs={12} sm={12}>
                <TextField
                  name="userName"
                  value={userObject.userName}
                  onChange={handleChange}
                  autoComplete="uname"
                  required
                  fullWidth
                  label="User Name"
                  autoFocus
                />
              </Grid>}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userObject.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={userObject.password}
                  onChange={handleChange}
                  label="Password"
                  type={showPassword ? "text" : "password"} 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}/>
              </Grid>
              {isSignup && <Grid item xs={12} display="flex" justifyContent="space-between">
                <FormLabel component="legend">Role</FormLabel>
                <RadioGroup row name="role" value={userObject.role} onChange={handleChange}>
                  <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                  <FormControlLabel value="developer" control={<Radio />} label="Developer" sx={{ml:5}}/>
                </RadioGroup>
              </Grid>}
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

