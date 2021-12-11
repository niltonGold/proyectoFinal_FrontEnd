import * as React from 'react';



import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


import './style.css';
import PaginaComandaHeader from '../../components/pagina-comanda(componentes)/pagina-comanda-header';
import Div_a_a from '../../components/pagina-comanda(componentes)/div_a/div_a_a';
import Div_a_b from '../../components/pagina-comanda(componentes)/div_a/div_a_b';


let listaPedido = [];


export default function PaginaComanda(){

    const categorias = [
        <Button onClick={ () => {
                            if(categoriaBebidas){
                               setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(!categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(!categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(!categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }        
        } } color="secondary" key="one">
            Bebidas
        </Button>,


        <Button onClick={ () => {
                            if(!categoriaBebidas){
                                setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(!categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(!categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }
            
         }} key="two">
            Entrantes
        </Button>,


        <Button  onClick={ () => {
                            if(!categoriaBebidas){
                                setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(!categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(!categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }

        }} key="three">
            Segundos
        </Button>,


        <Button onClick={ () => {
                            if(!categoriaBebidas){
                                setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(!categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(!categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }

        }} key="fourt">
            Postres
        </Button>,


      ];


    const [ categoriaBebidas, setCategoriaBebidas ]  = React.useState(true);
    const [ categoriaEntrantes, setCategoriaEntrantes ]  = React.useState(true);
    const [ categoriaSegundos, setCategoriaSegundos ]  = React.useState(true);
    const [ categoriaPostres, setCategoriaProstres ]  = React.useState(true);


    const [ notaComanda, setNotaComanda ]  = React.useState([]);




    function addListComanda(h){

        notaComanda.push(h);
        console.log(listaPedido)
        setNotaComanda([...notaComanda])
        
    }  
   
// React.useEffect( () => {
//     updateComanda(listaPedido);
// }, [listaPedido]);


    return(
        
        <div>
            <PaginaComandaHeader></PaginaComandaHeader>
            <div className="comanda_principal">
                <div className="div_a">
                    {console.log(notaComanda)}
                    {notaComanda.map( (e,i) => <div key={i}>{e}</div> )}
                    <Div_a_a></Div_a_a>
                
                    <Div_a_b></Div_a_b>
                    
                </div>


                <div className="div_b">
                    2
                        <Box className="div_b_a" sx={{ '& button': { m: 1 } }}>
                            <div className={categoriaBebidas ? 'categoria--hidden' : ''}>
                                <div >
                                    <Button onClick={ () => addListComanda('bebida1') } variant="outlined" size="medium">
                                        bebida1

                                    </Button>

                                    <Button variant="outlined" size="medium">
                                        bebida2
                                    </Button>

                                </div>

                                <div>
                                    <Button variant="outlined" size="medium">
                                        bebida3
                                    </Button>
                                    <Button variant="outlined" size="medium">
                                        bebida4
                                    </Button>
    
                                </div>
                            </div>

                            <div className={categoriaEntrantes ? 'categoria--hidden' : ''}>
                                <div >
                                    <Button variant="outlined" size="medium">
                                        entran1
                                    </Button>

                                    <Button variant="outlined" size="medium">
                                        entran2
                                    </Button>

                                </div>

                                <div>
                                    <Button variant="outlined" size="medium">
                                        entran3
                                    </Button>
                                    <Button variant="outlined" size="medium">
                                        entran4
                                    </Button>
    
                                </div>
                                
                            </div>


                            <div className={categoriaSegundos ? 'categoria--hidden' : ''}>
                                <div >
                                    <Button variant="outlined" size="medium">
                                        segund1
                                    </Button>

                                    <Button variant="outlined" size="medium">
                                        segund2
                                    </Button>

                                </div>

                                <div>
                                    <Button variant="outlined" size="medium">
                                        segund3
                                    </Button>
                                    <Button variant="outlined" size="medium">
                                        segund4
                                    </Button>
    
                                </div>
                                
                            </div>


                            <div className={categoriaPostres ? 'categoria--hidden' : ''}>
                                <div >
                                    <Button variant="outlined" size="medium">
                                        postre1
                                    </Button>

                                    <Button variant="outlined" size="medium">
                                        postre2
                                    </Button>

                                </div>

                                <div>
                                    <Button variant="outlined" size="medium">
                                        postre3
                                    </Button>
                                    <Button variant="outlined" size="medium">
                                        postre4
                                    </Button>
    
                                </div>
                                
                            </div>
                        </Box>




                          
                    <Box className="div_b_b" sx={{ display: 'flex', '& > *': { m: 1, }, }} >

                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="contained" >
                                {categorias}
                            </ButtonGroup>

                    </Box>
                        
                </div>

            </div>
            
        </div>
    )
}