import * as React from 'react';



import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import './style.css';





export default function ListaPlatosCategorias(props){

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
        setNotaComanda([...notaComanda])
        props.listaItems(notaComanda);
    }  
   
    const bebida = 
        { 'bebidas' :[
            {    
            'nombre': 'cocacola',
            'id': 1,
            'precio':3
            },
            {
                'nombre': 'fantaNan',
                'id': 2,
                'precio':4
            }
        ]
        }




    return(
        
        <div className='categoria_elegida'>                    
                <Box sx={{ width:'25vw' ,'& button': { m: 1 } }}>
                    {/* <div>{console.log(bebida.bebidas[0])}</div> */}
                    
                    <div className={categoriaBebidas ? 'categoria--hidden' : ''}>
                            <div >
                                    <Button onClick={ () => addListComanda( bebida.bebidas[0] ) } variant="outlined" size="medium">
                                        bebida1

                                    </Button>

                                    <Button onClick={ () => addListComanda( bebida.bebidas[1] ) } variant="outlined" size="medium">
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




                          
                <Box className='botones_lista_categorias' sx={{ display: 'flex', '& > *': { m: 1, }, }} >

                        <ButtonGroup className='button_group' orientation="vertical" aria-label="vertical contained button group" variant="contained" >
                                {categorias}
                        </ButtonGroup>
                </Box>
    </div> 

                        
    )
}