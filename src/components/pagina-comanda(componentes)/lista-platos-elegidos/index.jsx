import * as React from 'react';
import List from '@mui/material/List';
import './style.css';    
import MostrarLosPedido from '../mostrarUnPedido';
import { Link } from "react-router-dom";

export default function ListaPlatosElegidos(props){

    const [ listaComanda, setListaComanda ] = React.useState([]);
    const [ hasChange , setHasChange ] = React.useState(false);

    const [ precioTotal, setPrecioTotal ] = React.useState(0);

    // function ActualizarArray(param){
    //     setListaComanda(param);
    //     console.log(listaComanda);
    // }

    function BorrarLista(id){
        // let index = 0;
        // index = listaComanda.findIndex( (e) => e.id === id )
        // console.log(listaComanda);
        // console.log(index);
        // listaComanda.splice(index,1);
        setHasChange(!hasChange);
        props.deleteItem(id);
    }
 







    
    function SumarPrecio(precio){
        let num = precioTotal+ precio;
        setPrecioTotal(num);
    }
 




    React.useEffect( ()=>{
        // ActualizarArray(props.listaItems);
        console.log('se ha actualizado');
    },[hasChange] )
    // console.log('DATA: ',listaComanda)
    // console.log('DATA_TIPE: ', typeof listaComanda)
    return(
        
        <div className='list_container_total_cobrar'>

                <List sx={{ marginTop: 3,width: '60%', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 },}} subheader={<li />} >
                {/* <List sx={{ marginTop: 3,width: '300px', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 },}} subheader={<li />} > */}


                       <div className='titulos'>
                           <div>productos</div>
                           <div>importe</div>
                       </div>

                       <div>
                           
                            {props.listaItems.map((e,i) => <MostrarLosPedido sumarPrecio={SumarPrecio} key={i} id={i} borrarItem={BorrarLista} pedido={e}></MostrarLosPedido>)}

                       </div>
 

                </List>
            

                <div>

                    ToTal : {precioTotal} €                            
                </div>

                <Link to={`/pagina_cobro/${precioTotal}`}>
                        <button >
                            COBRAR €
                        </button>
                </Link>
    </div>
    )
}