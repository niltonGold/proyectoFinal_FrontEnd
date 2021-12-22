
import * as React from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css';

export default function Ticket(){

    const [ precioTotal, setPrecioTotal ] = React.useState(sessionStorage.getItem('totalApagar'));
    const [ pagoTarjeta, setPagoTarjeta ] = React.useState(sessionStorage.getItem('tarjeta'));
    const [ pagoEfectivo, setPagoEfectivo ] = React.useState(sessionStorage.getItem('efectivo'));
    const [ devolverAlCliente, setDevolverAlCliente ] = React.useState(sessionStorage.getItem('devolverAlCliente'));
    const [ listaProductosConsumidos, setListaProducosConsumidos ] = React.useState([]);
    

    let history = useHistory();

    function Lista(){
        let list = sessionStorage.getItem('listacomanda');
        list = JSON.parse(list)
        console.log(list)
        setListaProducosConsumidos(list);
    } 



    const handleExit = () => {
        sessionStorage.removeItem('totalApagar');
        sessionStorage.removeItem('devolverAlCliente');
        sessionStorage.removeItem('tarjeta');
        sessionStorage.removeItem('efectivo');
        sessionStorage.removeItem('listacomanda');
        sessionStorage.removeItem('token');

        history.push("/");
        
    }

React.useEffect( ()=>{
        Lista();
    },[] )

    return (
        
            <Box sx={{ display: 'flex', justifyContent: 'center',  flexWrap: 'wrap', '& > :not(style)': {  m: 1, width: '70%',  height: '90%', },  }}>

                <Paper sx={{ textAlign: 'center'  }} elevation={6} > 
                    <div>ticket</div>
                    {console.log(precioTotal)}
                    {console.log(pagoTarjeta)}
                    {console.log(pagoEfectivo)}
                    <div>total consumido:{precioTotal}</div>
                    <div>efectivo:{pagoEfectivo}</div>
                    <div>tarjeta:{pagoTarjeta}</div>
                    <div>devolver:{devolverAlCliente}</div>
                    <div>{listaProductosConsumidos.map((e) => <div>{e.nombre}</div> )}</div>
                    <button onClick={handleExit}>Exit</button>
                </Paper>
            </Box>

    )
}