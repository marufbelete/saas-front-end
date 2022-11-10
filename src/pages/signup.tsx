import {useEffect,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {FcGoogle} from 'react-icons/fc'
import { GridSvg,GoogleXs,StyledAnchor,GoogleSm,StyledLink} from '../style/style';
import {useNavigate} from "react-router-dom"
import {useRegisterMutation} from '../service/user_api'

const theme = createTheme();
export default function SignUp() {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [register,{data, isLoading}]=useRegisterMutation()
  const navigate=useNavigate()

  const registerHandler = () => {
    if(firstName&&lastName&&email&&password&&confirmPassword)
    {
      if(confirmPassword===password)
      {
        console.log(firstName,lastName,email,password,confirmPassword)
        register({
          firstName,
          lastName,
          email,
          password,
          confirmPassword
        })
      }
    }
  };
  useEffect(()=>{
if(data&&data?.success){
  navigate('/login')
}
},[data])
    // const {data,error,isLoading,isFetching,isSuccess,refetch}=useGetUsersQuery()
console.log(data)
  return (
    <ThemeProvider theme={theme}>
   <Container>
      <Grid container spacing={2} 
      alignItems="center"
     justifyContent="center"
     style={{ minHeight: '100vh' }}>
              <GridSvg item sm={6}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
              </GridSvg>
            <Grid item sm={6} xs={12}>
              <Grid container spacing={2}
               alignItems="center"
               justifyContent="center">
              <Grid xs={12}>
                <h1 style={{textAlign:"center"}}>Create your New Account</h1>
              </Grid>

              <Grid item sm={6} md={5}>        
              <GoogleSm>
              <FcGoogle size={27} style={{float:'left'}}/> 
              <StyledAnchor href='http://localhost:7000/auth/google'>Google</StyledAnchor>

            </GoogleSm>
              </Grid>

              <Grid item sm={6} md={5}>
              <GoogleSm>
           <FacebookIcon style={{color:"#3B5998",fontSize:'27px',float:'left'}}/>
           <StyledAnchor href='http://localhost:7000/api/auth/facebook'>Facebook</StyledAnchor> 
            </GoogleSm>
              </Grid>

                <Grid item xs={10} sm={6} md={5}>
                <TextField
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={10} sm={6} md={5}>
                <TextField
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={10} sm={12} md={10}>
                <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={10} sm={12} md={10}>
                <TextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={10} sm={12} md={10}>
                <TextField
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={10} sm={12} md={10}>
              <Button
              onClick={registerHandler}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,p:1 }}
            >
              Sign Up
            </Button>
            </Grid>

          </Grid>
          
            <Grid container justifyContent="flex-end">
              <Grid item md={5} textAlign='center'>
                <StyledLink onClick={()=>{navigate("/login")}} variant="body2">
                  Already have an account? Sign in
                </StyledLink>
              </Grid>
            </Grid>
        </Grid>
             
            </Grid>
            </Container>
  </ThemeProvider>
  );
}
