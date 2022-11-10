import {useState} from 'react';
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
import {createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {StyledLink,GridSvg} from '../style/style';
import {useNavigate} from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";

function Copyright(props: any) {
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
  const siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  const secretKey="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
 const [isVerfied,setisVerfied]=useState(false)
  const validateRecaptcha=()=>{
    setisVerfied(true)
  }
const navigate=useNavigate()
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
              <Grid container spacing={3}
              alignItems="center"
              justifyContent="center">
              <Grid xs={12}>
                <h4 style={{textAlign:"center",color:''}}>Forgot Password</h4>
              </Grid>

              <Grid item xs={10} md={9} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={10} md={9}>
              <Button
              disabled={!isVerfied}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2,p:1 }}
            >
              Reset pssword
            </Button>
            {/* <div style={{textAlign:"center"}}>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={validateRecaptcha}
            />
            </div> */}
           
            </Grid>
          </Grid>

             
            <Grid container justifyContent="flex-end">
              <Grid item xs={3}>
              <StyledLink onClick={()=>{navigate("/login")}} variant="body2">
                  Sign in
                </StyledLink>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid item xs={10} sm={10} md={7} textAlign='center'>
              <ReCAPTCHA
              sitekey={siteKey}
              onChange={validateRecaptcha}
            />
              </Grid>
            </Grid>

        </Grid>
             
            </Grid>
            </Container>
  </ThemeProvider>
  );
}
