import {useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GridSvg,GoogleXs,StyledAnchor,GoogleSm,StyledLink} from '../style/style';
import {FcGoogle} from 'react-icons/fc'
import {useLoginMutation} from '../service/user_api'
// import Link from '@mui/material/Link';
import {useNavigate,Link} from "react-router-dom"
// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const [login,{data,isLoading}]=useLoginMutation()
  const navigate=useNavigate()
  const loginHandler = () => {
    if(email&&password)
    {
      console.log(email,password)
        login({
          email,
          password,
        })
    }
  };

useEffect(()=>{
if(data&&data?.success&&data?.auth){
  navigate('/home')
}
},[data])
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
              justifyContent="center"
              >
              <Grid xs={12}>
                <h3 style={{textAlign:"center",marginTop:'20px'}}>
                Welcome back to COMPANY NAME
             Log in to your account and start creating
                  Login to your account</h3>
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
           <StyledAnchor href='http://localhost:7000/auth/facebook'>Facebook</StyledAnchor> 
            </GoogleSm>
              </Grid>

              <Grid item xs={12} md={10} mt={2}>
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
              <Grid item xs={12} md={10}>
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
              <Grid item xs={12} md={10}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remeber me."
                />
              </Grid>

              <Grid item xs={5} sm={3} textAlign='center'>
                <StyledLink onClick={()=>{navigate("/forgotpassword")}} variant="body2">
                  Forgot password?
                </StyledLink>
              </Grid>

              <Grid item xs={12} md={10}>
              <Button
              onClick={loginHandler}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2,p:1 }}
            >
              Log in
            </Button>
            </Grid>
          </Grid>
            <Grid container bg-color='blue' justifyContent="flex-end">
              <Grid item  md={5} textAlign='center'>
                <StyledLink style={{textAlign:'end'}} onClick={()=>{navigate("/signup")}} variant="body2">
                  Create new account
                </StyledLink>
              </Grid>
            </Grid>
        </Grid>
             
            </Grid>
            </Container>
  </ThemeProvider>
  );
}
