
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import  userActions from '../redux/actions/usersActions'
import GoogleSignUp from './signUpGoogle';





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch()
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
//  const [imageUser, setImageUser] = useState("");
 const [password, setPassword] = useState("");
 const [country, setCountry] = useState("");





  const handleSubmit = async (event) => {
    event.preventDefault();
    const data =
    { firstName: firstName,
      lastName: lastName,
      email: email,
    
      password: password,
      country: country,
      from: "signUpForm"
    }
   const res = await dispatch(userActions.SignUp(data))
   console.log(res)
  }



  
 


  

  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={e =>setFirstName(e.target.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e =>setLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                />
               
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={e =>setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                />
                {/* <Grid item xs={12}> 
                <TextField
                 onChange={}
          id="imageUser"
          label="imageUser"
          placeholder="imageUser"
           name="imageUser"
          multiline
          value={imageUser}
        /></Grid> */}
               
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={e =>setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                />
                 <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
         onChange={e =>setCountry(e.target.value)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"    
        >
          <MenuItem value={"Argentina"}>Argentina</MenuItem>
          <MenuItem value={"United States"}>United States</MenuItem>
          <MenuItem value={"Chile"}>Chile</MenuItem>
        </Select>
      </FormControl>
    </Box>
                
              </Grid>
             
              </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <GoogleSignUp />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
