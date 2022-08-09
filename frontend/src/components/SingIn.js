import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/usersActions'
import GoogleSignIn from './signInGoogle';
import { useNavigate } from 'react-router-dom'
import { Link as LinkRouter } from "react-router-dom";




export default function SignInSide() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      from: "signUpForm"
    }
    const res = await dispatch(userActions.SignIn(data))
    if (res.success) {
      navigate('/')
    }
  };
 

  return (

    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="SignUpIn" component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal" className='firstName'
              onChange={e => setEmail(e.target.value)}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
            />
            <TextField className='firstName'
              margin="normal"
              onChange={e => setPassword(e.target.value)}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
            />

            <Button className="learn-more botonform"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box sx={{ m: 1 }}>Or</Box>
            <GoogleSignIn />
            <Grid container className='S9gUrf-YoZ4jf'>
              <Grid item>
                <LinkRouter to="/SignUp">
                  <Button sx={{ m: 2 }}>"Don't have an account? Sign Up"</Button>
                </LinkRouter>
                <LinkRouter className="txt_back_login" to="/Users">

                </LinkRouter>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Grid>
    </Grid>

  );
};