
import * as React from 'react';
import TextField from '@mui/material/TextField';
import './style.css';
import Box from '@mui/material/Box';

import { useHistory } from "react-router-dom";

import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    width: theme.spacing(24),
  }));

export default function Login(){

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

    //   e.preventDefault();
    //   if ( e.target.name.value === 'nil' ){
    //     history.push("/principal");
    //   }else{
    //       console.log('usuario incorrecto');
    //   }

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
                        history.push("/principal");
                    }else{
                        console.log('usuario incorrecto')
                    }
                } );

            }else{
                console.log('error del formulario');
            }
    }

    return(
        <div className="login_page"> 


            
            <div>
                <Box sx={{display: '-ms-flexbox', alignItems: 'center', '& > :not(style)': { m: 5 },}} > 
                
                <div>
                    <Div align="center" >{"Login"}</Div>
                </div>
                    
                    <form onSubmit={handleSubmit}>

                        <TextField
                            required    
                            helperText="Please enter your name"
                            id="demo-helper-text-aligned-name"
                            label="Name"
                            type="text"
                            name="name"
                        />

                        <TextField
                            required
                            helperText="Please enter your name"
                            id="demo-helper-text-aligned-password"
                            label="Password"
                            type="password"
                            name="password"
                        />

                        <div className="iniciar_sesion">
                            <button type="submit">Iniciar Sesión</button>
                        </div>


                    </form>



                </Box>
            </div>
            


            

        </div>
    )
}