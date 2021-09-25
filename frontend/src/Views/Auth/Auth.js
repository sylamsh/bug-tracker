import React,{useState, useEffect} from 'react';
import UserModel from '../../Models/userModel';
import { useDispatch } from 'react-redux';
import { signup, signin } from '../../Controllers/actions/auth';

//MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function AuthForm({setUser}) {
  const [userObject, setUserObject] = useState(new UserModel());
  const [Signup, setSignup] = useState({
    state: false,
    header: "Login"
  });
  const [emailError, setEmailError] = useState({
    error: false,
    message: ""
  });
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: ""
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

  const switchMode = () => {
    setSignup({
      ...Signup,
      state: !Signup.state,
      header: !Signup.state ? "Sign Up" : "Login"
    })
    setDisableSubmit(true)
    setEmailError({
        ...emailError,
        error: false,
        message: ""
      })
    setPasswordError({
      ...emailError,
      error: false,
      message: ""
    })
  }

  const handleChange = (e) => {
     setUserObject({
       ...userObject,
       [e.target.name]: e.target.value,
     })
     if(e.target.name === "email") {
       setEmailError({
        ...emailError,
        error: false,
        message: ""
      })
     }
     if(e.target.name === "password") {
       setPasswordError({
        ...emailError,
        error: false,
        message: ""
      })
     }
  }
  useEffect(() => {
    let signupParamsBool = userObject.role !== '' && userObject.userName !== '';
    let loginParamsBool = userObject.email !== '' && userObject.password !== '';
    if((Signup.state && signupParamsBool && loginParamsBool) || (!Signup.state && loginParamsBool)) {
      setDisableSubmit(false);
    }
  })

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userObject.email)){
      setEmailError({
        ...emailError,
        error: true,
        message: "Please enter a valid email"
      })
    } else if (Signup.state) {
      dispatch(signup({...userObject}, setUser, setEmailError, setSignup));
    } else {
      dispatch(signin({...userObject}, setUser, setEmailError, setPasswordError, setSignup));
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h5">
            {Signup.header}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {Signup.state && <Grid item xs={12} sm={12}>
                <TextField
                  name="userName"
                  value={userObject.userName}
                  onChange={handleChange}
                  label="User Name"
                  helperText=""
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>}
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userObject.email}
                  onChange={handleChange}
                  autoComplete="email"
                  helperText={emailError.message}
                  error={emailError.error}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  value={userObject.password}
                  onChange={handleChange}
                  label="Password"
                  type="password"
                  error={passwordError.error}
                  helperText={passwordError.message}
                  required
                  fullWidth
                />
              </Grid>
              
              {Signup.state && <Grid item xs={12} display="flex" justifyContent="space-between">
                <FormLabel component="legend">Role</FormLabel>
                <RadioGroup row name="role" value={userObject.role} onChange={handleChange}>
                  <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                  <FormControlLabel value="developer" control={<Radio />} label="Developer" sx={{ml:5}}/>
                </RadioGroup>
              </Grid>}
            </Grid>
            
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disableSubmit}>
              {Signup.state ? "Sign Up" : "Login"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {Signup.state ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

