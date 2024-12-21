import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {CameraAlt as CameraAltIcon} from "@mui/icons-material";
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useInfiniteScrollBottom, useInputValidation } from "6pp";
import { userNameValidator } from '../utils/validators';


const Login = () => {

    const [isLogin,setIsLogin] = useState(true);

    const toggleLogin = () => {
        if(isLogin){
            setIsLogin(false);
        }else{
            setIsLogin(true);
        }
    };

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",userNameValidator);
    const password = useInputValidation("");

  return (
    <Container
        component={"main"}
        maxWidth="xs"
        sx={{
            height:"120vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
    >
        <Paper
            elevation={3}
            sx={{
                padding:4,
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}
        >

            {
                isLogin ? 
                    <>
                        <Typography
                            variant='h5'
                        >
                            Login
                        </Typography>
                        <form style={{
                            width:"100%",
                            marginTop:"1rem"
                        }}>

                            <TextField 
                                required
                                fullWidth
                                type="text"
                                label="username"
                                margin="normal"
                                variant="outlined"
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            <TextField 
                                required
                                fullWidth
                                label="password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                sx={{
                                    marginTop:"1rem"
                                }}
                                fullWidth
                            >
                                Login
                            </Button>
                            <Typography
                                textAlign={"center"}
                                m={"1rem"}
                            >
                                OR
                            </Typography>
                            <Button
                                variant='text'
                                sx={{
                                    marginTop:"1rem"
                                }}
                                fullWidth
                                onClick={toggleLogin}
                            >
                                Register Instead
                            </Button>

                        </form>
                    </>
                    : 
                    <>
                        <Typography
                            variant='h5'
                        >
                            Register
                        </Typography>
                        <form
                            style={{
                                width:"100%",
                                marginTop:"1rem"
                            }}
                        >

                            <Stack
                                position={"relative"}
                                width={"10rem"}
                                margin={"auto"}
                            >
                                <Avatar
                                    sx={{
                                        width:"10rem",
                                        height:"10rem",
                                        objectFit:"contain"
                                    }}
                                />

                                <IconButton
                                    sx={{
                                        position:"absolute",
                                        bottom:"0",
                                        right:"0",
                                        bgcolor:"rgba(0,0,0,0.5)",
                                        color:"white",
                                        ":hover":{
                                            bgcolor:"rgba(0,0,0,0.7)"
                                        }
                                    }}
                                    component="label"
                                >
                                    <>
                                        <CameraAltIcon/>
                                        <VisuallyHiddenInput type='file'/>
                                    </>
                                </IconButton>
                            </Stack>


                            <TextField 
                                required
                                fullWidth
                                type="text"
                                label="Name"
                                margin="normal"
                                variant="outlined"
                                value={name.value}
                                onChange={name.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                type="text"
                                label="username"
                                margin="normal"
                                variant="outlined"
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            
                             <TextField 
                                fullWidth
                                type="text"
                                label="Bio"
                                margin="normal"
                                variant="outlined"
                                value={bio.value}
                                onChange={bio.changeHandler}
                            />
                            <TextField 
                                required
                                fullWidth
                                label="password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <TextField 
                                required
                                fullWidth
                                label="confirm password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                sx={{
                                    marginTop:"1rem"
                                }}
                                fullWidth
                            >
                                Register
                            </Button>

                            <Typography
                                textAlign={"center"}
                                sx={{
                                    marginTop:"1rem"
                                }}
                            >
                                OR
                            </Typography>

                            <Button
                                variant='text'
                                sx={{
                                    marginTop:"1rem"
                                }}
                                fullWidth
                                onClick={toggleLogin}
                            >
                                Login Instead
                            </Button>

                        </form>
                    </>
            }

        </Paper>

    </Container>
  )
}

export default Login;