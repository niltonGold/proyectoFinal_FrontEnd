import * as React from 'react';

import './style.css';
import PaginaComandaHeader from '../../components/pagina-comanda(componentes)/pagina-comanda-header';
import ListaPlatosElegidos from '../../components/pagina-comanda(componentes)/lista-platos-elegidos';
import ListaPlatosCategorias from '../../components/pagina-comanda(componentes)/lista-platos-categorias';





export default function PaginaComanda(){

   
    // const [ notaComanda, setNotaComanda ]  = React.useState([]);




    // function addListComanda(h){

    //     notaComanda.push(h);
    //     console.log(listaPedido)
    //     setNotaComanda([...notaComanda])
        
    // }  
   
    const [ listaComanda , setListaComanda ] = React.useState([]);


    function recibirLista(lista){
        setListaComanda(lista);
        console.log('page_coman'+listaComanda[0]?.nombre)
    }

    function borraItem(id){
        console.log('elemento borrado: '+id)
        let newComanda = listaComanda;
        newComanda.splice(id,1);
        setListaComanda(newComanda);
        console.log('comanda previa');
        listaComanda.forEach((e)=> console.log(e.nombre));

        console.log('comanda nueva');
        newComanda.forEach((e)=> console.log(e.nombre));
    }


    return(
        <div>    
            <PaginaComandaHeader></PaginaComandaHeader>

            <div className='pagina_comanda_body'>
                    
                        <div className="lista_platos_elegidos">
                        {/* <div>{console.log(ho[0]?.bebida.precio)}</div> */}
                        <ListaPlatosElegidos deleteItem={borraItem} listaItems={listaComanda}></ListaPlatosElegidos>
                            
                        

                        </div>



                        <div className="lista_platos_categorias">
                                
                           <ListaPlatosCategorias listaItems={recibirLista}></ListaPlatosCategorias>

                        </div>

            </div>
   
        </div>
    )
}