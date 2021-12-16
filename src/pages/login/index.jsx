
import * as React from 'react';
import TextField from '@mui/material/TextField';
import './style.css';
import Box from '@mui/material/Box';

import { useHistory } from "react-router-dom";

import Typography from '@mui/material/Typography';



import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useState } from 'react';

import Switch from '@mui/material/Switch';
import ThemeProvider from '../../theming/theme-provider';


import {useTranslation} from "react-i18next";

import Button from '@mui/material/Button';
import SwichtButton from '../../components/swich';



export default function Login(){
    const [t, i18n] = useTranslation('common');

    // const [isDark, updateTheme] = useState(false); 
    const [ respuestaFromMongo, setRespuestaFromMongo] = useState('');

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
                    let posicionDelPunto = d.respuesta.indexOf('.');
                    let mensaje = d.respuesta.slice(0,posicionDelPunto)
                    if( mensaje === 'SessionIniciada'){
                        console.log('usuario correco');
                        let token = d.respuesta.slice( (posicionDelPunto + 1), (d.respuesta.length - 1));
                        console.log(token);
                        sessionStorage.setItem('token', token);
                        history.push("/pagina_mesas");
                    }else if( mensaje === 'UsuarioEnSesion' ) {
                        setRespuestaFromMongo('Sesion ya Iniciada');
                    }else if( mensaje === 'UsuarioIncorrecto' ){
                        setRespuestaFromMongo('Usuario incorrecto ');
                    }
                } );

            }else{
                console.log('error del formulario');
            }
    }


    const handleIniciarSesion = () => {
        setRespuestaFromMongo('');
    }





    return(

       <Box className="login_page"  sx={{ backgroundColor: 'secondary.main' }}  > 
        
                <Box color="primary" sx={{display: '-ms-flexbox', alignItems: 'center', '& > :not(style)': { m: 5 },}} > 
                
                    <form onSubmit={handleSubmit}>
                        <div className="login_container">

                                <Typography color="primary" align='center' variant="h5" component="div" gutterBottom>
                                    {t('login.title')}
                                </Typography>
                                <div className='usuario_incorrecto'>{respuestaFromMongo}</div>
                                <TextField
                                    color="primary"
                                    required    
                                    helperText="Please enter your name"
                                    id="demo-helper-text-aligned-name"
                                    label="Name"
                                    type="email"
                                    name="name"
                                    onClick={handleIniciarSesion}
                                />

                                <TextField
                                    color="primary"
                                    required
                                    helperText="Please enter your name"
                                    id="demo-helper-text-aligned-password"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onClick={handleIniciarSesion}
                                />

                              
                                
                                <Button onClick={handleIniciarSesion} type="submit"  color="primary" variant="contained" disableElevation>
                                Iniciar Sesion
                                </Button>
                        </div>


                    </form>

                </Box>
         
            


            

        </Box> 

    )
}