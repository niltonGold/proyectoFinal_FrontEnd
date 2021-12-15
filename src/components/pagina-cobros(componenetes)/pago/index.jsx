import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

import './style.css';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
};




export function Pago(props){

    // const[saldoCalculado, setSaldoCalculado] = React.useState(props.precioTotal);


    // function SaldoPendiente(num){
        // console.log('saldo cuenta: '+saldoCalculado);
        // console.log('pago efectivo: ' +num);
        // let numAux = parseInt(saldoCalculado) + parseInt(num);
        // console.log(numAux);
        // setSaldoCalculado(numAux);
    //  }



    //  React.useEffect( ()=>{
    //     SaldoPendiente(props.dineroCapturado);
    //     console.log('se ha actualizado');
    // },[props.dineroCapturado] ) 




    function handleReinicio(){
        props.reiniciar();
    }






    
    return(
        <React.Fragment>
            <div className='contenedor_pagos'>
                 
                   
                <Box className='caja1'   sx={{ ...commonStyles, borderRadius: 1, display: 'flex', justifyContent: 'center', width:'60%' }}>
                    Total a pagar {props.precioTotal}€
                </Box>
            
                <Box className='caja1'   sx={{ ...commonStyles, borderRadius: 1, display: 'flex', justifyContent: 'center', width:'60%', height: '30%' }}>
                <dl>
                    <dt>Entregado</dt>
                    <dd>Efectivo {props.pagoEfectivo}</dd>
                    <dd>Tarjeta {props.pagoTarjeta}</dd>
                    <button onClick={handleReinicio}>Reinicio</button>
                </dl>
                
                </Box>
            
                <Box className='caja1'   sx={{ ...commonStyles, borderRadius: 1, bgcolor: 'red', display: 'flex', justifyContent: 'center', width:'60%', height: '10%'  }}>
                    Pendiente {props.precioPendiente} €
                </Box>
                          
                <Box className='caja1'   sx={{ ...commonStyles, borderRadius: 1, bgcolor: 'red', display: 'flex', justifyContent: 'center', width:'60%', height: '10%'  }}>
                    <Button sx={{width: '100%'}} variant="contained" disableElevation>
                        Cobrar
                        <PointOfSaleIcon/>
                    </Button>
                </Box>
            </div>
            
        </React.Fragment>

    )
}