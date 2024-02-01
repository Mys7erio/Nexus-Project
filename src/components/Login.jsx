import React , {useRef}  from 'react'
import pic from "./assets/logo.svg"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Divider from '@mui/material/Divider';
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";


// import { Typography } from '@mui/material';

import "./Style/login.css"
import GoogleIcon from "./assets/google.svg";


const SubmitButton = styled(Button)({
    backgroundColor: '#008080',
    color: 'white',
    fontSize: '1rem',
    width: '100%',
    marginTop: '1rem',
    fontFamily: 'Montserrat',
    '&:hover': {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        backgroundColor: '#046666',
    },
});

const FormStack = styled(Stack)({
    margin:'5rem auto',
    width: '35ch',
});




function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [action, setAction] = React.useState("Sign Up");
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const emailref = collection(firestore, "emails");
    const passwordref = collection(firestore, "passwords");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(false)
    setPasswordError(false)

    if (email === '') {
        setEmailError(true)
    }else { 
        let datae = {
            message: email, 
        };
        try {
            addDoc(emailref,datae);
        } 
        catch (e){
            console.log(e);
        }

    }
    if (password === '') {
        setPasswordError(true)
    }else{
        let data = {
            message: password, 
        };
        try {
            addDoc(passwordref,data);
        } 
        catch (e) {
            console.log(e);
        }
    }
}

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='main'>
        <div className="sidebar">
            <div className="top">
                <h2>Sign In</h2>
                <h2>Manage Users, Accounts Books and more</h2>
            </div>
            <div className='btm'>
                <p>Go Green</p>
                <p>Embrace Savings</p>
            </div>
        </div>
        <div className="main-form">
            <img src={pic} alt="Logo" />
            <form action="" onSubmit= {handleSubmit}>
                <FormStack spacing={2}>
                    {action === 'Sign Up' ? <FormControl>
                        <InputLabel htmlFor="outlined-adornment-name">Your Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-name"
                            // value={values.amount}
                            // onChange={handleChange}
                            endAdornment={
                            <InputAdornment position="end">
                                <AccountCircle edge="end" />
                            </InputAdornment>}
                            label="Name"
                        />
                    </FormControl> : null}
                    
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-email">College email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email"
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        
                        value={email}
                        error={emailError}
                        // value={values.amount}
                        // onChange={handleChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <MarkunreadIcon edge="end" />
                        </InputAdornment>}
                        label="Email"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        error={passwordError}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                {action==='Sign Up' ? <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Retype your password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl> : null}
                
                    <SubmitButton variant='contained' type='submit'>{action}</SubmitButton>
                    </FormStack>
                    </form>
                {action==='Sign Up' ? <Typography variant='caption' display="block" textAlign="center">Already have an account? <Link href="#" underline="hover" onClick={()=>{setAction("Sign In")}}>
                        {'Sign In'}</Link></Typography> : <Typography variant='caption' display="block" textAlign="center">Don't have an account yet? <Link href="#" underline="hover" onClick={()=> {setAction("Sign Up")}}>
                        {'Sign Up Now!'}
                    </Link></Typography>}
                        
                        <Divider>OR</Divider>


                        <Typography variant='caption' display='block' textAlign='center'>
                            You can {action} using:
                        </Typography>
                        <FormControl>
                        <Link href="#" margin="0 auto" >
                            <IconButton aria-label='Google'  >
                                <img src={GoogleIcon} alt="Google" className='icon'/>
                            </IconButton>
                        </Link>
                        </FormControl>
               
            
        </div>
    </div>
    
  )
}

export default Login