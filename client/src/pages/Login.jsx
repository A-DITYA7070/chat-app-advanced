import { Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


const Login = () => {

    const [isLogin,setIsLogin] = useState(true);

  return (
    <Container
        component={"main"}
        maxWidth="sx"
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
                        <form>
                            <TextField 
                                required
                                fullWidth
                                type="text"
                                label="username"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField 
                                required
                                fullWidth
                                label="password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                            />

                        </form>
                    </>
                    : 
                    <>
                        <Typography
                            variant='h5'
                        >
                            Register
                        </Typography>
                        <form>
                            <TextField 
                                required
                                fullWidth
                                type="text"
                                label="username"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField 
                                required
                                fullWidth
                                label="password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField 
                                required
                                fullWidth
                                label="confirm password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                            />

                        </form>
                    </>
            }

        </Paper>

    </Container>
  )
}

export default Login;