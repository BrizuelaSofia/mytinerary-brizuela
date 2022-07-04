import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import  userActions from '../redux/actions/usersActions'
import GoogleSignUp from './signUpGoogle';
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";






const theme = createTheme();

export default function SignUp() {
 
  const [country, setCountry] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line
    axios.get(`https://restcountries.com/v3.1/all`).then((api) => setCountry(api.data));
  }, []);
  const countrySelect = country.map(res => res.name.common).sort()
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUser, setImageUser] = useState("");
  const [password, setPassword] = useState("");
  const [selectCountry, setSelectCountry] = useState(null);

  function selected(event) {
    // console.log(event.target.value)
    setSelectCountry(event.target.value)
  }

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    const data =
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUser:imageUser,
      password: password,
      country: selectCountry,
      from: "signUpForm"
    };
    // console.log(data)
    //dispatch(usersActions.signUpUsers(data))
     dispatch(userActions.SignUp(data))
    
  }; 
  return (
    <div className='fondosignuppp' >
    <Box sx={{display:'flex',  justifyContent:'center' }} >
      <Box sx={{ m:2, borderRadius:'50px', width:'20rem', flexDirection:'column', backgroundImage: 'url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F88%2F35%2F83%2F88358363a25c1b3fa002e00fa8c95094.jpg&imgrefurl=https%3A%2F%2Fco.pinterest.com%2Fpin%2F639581584571748035%2F&tbnid=6JKqVoev49InuM&vet=1&docid=zGYIy6VEDP9sFM&w=640&h=799&itg=1&source=sh%2Fx%2Fim)',
            backgroundRepeat: 'no-repeat', }}>
      <Box
            sx={{
              m:1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
      <Avatar sx={{ m: 1, bgcolor: 'violet' }}>
              <LockOutlinedIcon />
            </Avatar>
            
            <Typography  component="h1" variant="h5">
                Sign Up
              </Typography>
              </Box>
              </Box>
              </Box>
    
              
      <Box sx={{m:5}}>Select your country to continue registration</Box>
      

      <FormControl className="inputcountry" fullWidth> 
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
         <Select className='borderradius'
          required
          fullWidth
          id="country"
          label="country"
          name="country"
          autoComplete="country"
          onChange={selected}
          defaultValue=""
        >
       
          <MenuItem value=""></MenuItem>
          {countrySelect && countrySelect.map((country, index) => <MenuItem key={index}
            value={country}>{country}</MenuItem>)}

        </Select>

      </FormControl>
      
      {selectCountry &&
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius:'50px'
              }}
            >
              
              <Box component="form" className="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}  >
                  <Grid item xs={12} sm={6}>
                    <TextField  className='firstName' 
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={e =>setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField className='firstName'
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={e =>setLastName(e.target.value)}
                      value={lastName}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField className='firstName'
                      
                      fullWidth
                      id="imageUser"
                      label="imageUser"
                      name="imageUser"
                      autoComplete="imageUser"
                      onChange={e =>setImageUser(e.target.value)}
                      value={imageUser}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField className='firstName'
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={e =>setEmail(e.target.value)}
                      value={email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField className='firstName'
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={e =>setPassword(e.target.value)}
                      value={password}
                    />
                  </Grid>
                </Grid>
                <Button className='learn-more botonform'
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Box sx={{m:2}}>Or</Box>
                <GoogleSignUp selectCountry={selectCountry} />

              </Box>
            </Box>
          </Container>
        
        </ThemeProvider>
      }
      <LinkRouter className="txt_back_login" to="/Users">
       <Button sx={{m:2}}> Already have an account? Sign in</Button>
      </LinkRouter>
    </div>
  )
}
