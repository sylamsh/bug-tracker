import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {signIn} from "../../Controllers/Redux/authSlice"
import "./login.css";

//MUI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Login(){
  const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name : "",
        password : "",
    })

    const inputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.value,
        })
    }
    const submit = (e) => {
        dispatch(signIn(formInput))
        e.preventDefault();
    }

  return (
    <div className="loginBG">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              Hello {formInput.name}
            </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="name"
                    required
                    fullWidth
                    id="firstName"
                    label="Username"
                    autoFocus
                    onChange={inputChange} 
                    value={formInput.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={inputChange} 
                    value={formInput.password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}