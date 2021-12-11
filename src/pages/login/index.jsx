
import * as React from 'react';
import TextField from '@mui/material/TextField';
import './style.css';
import Box from '@mui/material/Box';

import { useHistory } from "react-router-dom";

import Typography from '@mui/material/Typography';



import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useState } from 'react';

import Switch from '@mui/material/Switch';




import Button from '@mui/material/Button';

const myTheme = createTheme({
    palette:{ 
  
      primary:{
        main: '#06659c',//azul
        dark:'#0b3852'//azul oscuro
      },
  
      secondary:{
        // main: red[800],
        main: '#f0f06e',// amarillo claro
      },
  

  
  
    }  
  });
  
  
  const myDarkTheme = createTheme({
    palette:{
    //  mode:'dark',
      primary:{
        main: '#c23667',//rojo 
        dark:'#630023'// rojo oscuro
      },
  
  
      secondary:{
        // main: red[800],
        main: '#c7c70a',//amarillo oscuro
      },
  
  
  
    }
  });
  

export default function Login(){


    const [isDark, updateTheme] = useState(false); 

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

            if(e.target.checkValidity()){ 
                console.log('paso 3');
                const options = {
                    method: 'POST',
                    headers:{
                        'Content-type': 'application/json' 
                    },
                    body: JSON.stringify({
                        email: e.target.name.value,
                        password: e.target.password.value
                    })
                }

                fetch('http://localhost:3001/auth/login', options)
                .then(r => r.json() )
                .then(d => {
                    if( d.respuesta === 'ok'){
                        console.log('usuario correco')
                        history.push("/pagina_mesas");
                        console.log('despues del history');
                    }else{
                        console.log('usuario incorrecto')
                    }
                } );

            }else{
                console.log('error del formulario');
            }
    }

    return(
 
    <ThemeProvider theme={isDark ? myDarkTheme : myTheme}>   

        <div className="login_page" style={ isDark ? {backgroundColor: myDarkTheme.palette.secondary.main } : {backgroundColor: myTheme.palette.secondary.main}  }> 
        <div className="switch">
        <Switch
            color="primary"
            checked={isDark}
            onChange={() => updateTheme(!isDark)}
            inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>


            
            <div>
                      
                <Box color="primary" sx={{display: '-ms-flexbox', alignItems: 'center', '& > :not(style)': { m: 5 },}} > 
                
                    <form onSubmit={handleSubmit}>
                        <div className="login_container">

                                <Typography color="primary" align='center' variant="h5" component="div" gutterBottom>
                                            Login
                                </Typography>

                                <TextField
                                    color="primary"
                                    required    
                                    helperText="Please enter your name"
                                    id="demo-helper-text-aligned-name"
                                    label="Name"
                                    type="text"
                                    name="name"
                                />

                                <TextField
                                    color="primary"
                                    required
                                    helperText="Please enter your name"
                                    id="demo-helper-text-aligned-password"
                                    label="Password"
                                    type="password"
                                    name="password"
                                />

                              
                                
                                <Button  type="submit"  color="primary" variant="contained" disableElevation>
                                Iniciar Sesion
                                </Button>
                        </div>


                    </form>

                </Box>
            </div>
            


            

        </div>


    </ThemeProvider>   

    )
}