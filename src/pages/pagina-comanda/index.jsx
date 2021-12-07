import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CalculateIcon from '@mui/icons-material/Calculate';
import EuroIcon from '@mui/icons-material/Euro';


// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

// import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

import './style.css';
import PaginaComandaHeader from '../../components/pagina-comanda(componentes)/pagina-comanda-header';



const CustomButtonRoot = styled('button')`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}




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


    const [ notaComanda ]  = React.useState([]);




    return(
        
        <div>
            <PaginaComandaHeader></PaginaComandaHeader>
            
            <div className="comanda_principal">
                <div className="div_a">
                    1
                    <div className="div_a_a">
                        1.1
                            <List
                                sx={{ width: '250px', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 },}}
                                subheader={<li />} >

                               
                                <div className="lista_producos_comanda">
                                    <div>
                                        <dl>
                                            <dt>prod</dt>
                                                <dd>ggg</dd>
                                                <dd>hamburguesa</dd>
                                                <dd>pollo</dd>
                                                <dd>hamburguesa</dd>
                                                <dd>pollo</dd>
                                                <dd>hamburguesa</dd>
                                                <dd>pollo</dd>
                                                <dd>hamburguesa</dd>
                                                <dd>pollo</dd>
                                                <dd>hamburguesa</dd>
                                                <dd>pollo</dd>
                                                <dd>hamburguesa</dd>
                                        </dl>
                                    </div>

                                    <div>
                                        <dl>
                                            <dt>imp</dt>
                                                <dd>12</dd>
                                                <dd>15</dd>
                                                <dd>12</dd>
                                                <dd>15</dd>
                                                <dd>12</dd>
                                                <dd>15</dd>
                                                <dd>12</dd>
                                                <dd>15</dd>
                                                <dd>12</dd>
                                                <dd>15</dd>
                                                <dd>12</dd>
                                                <dd>15</dd>
                                        </dl>
                                    </div>

                                </div>    
                                
                                

                            </List>






                    </div>

                    <div className="div_a_b">
                        1.2
                        <div className="div_a_b_a">
                            ToTal : 7,90 €                            
                        </div>

                        <div className="div_a_b_b">
                            
                                
                                <Stack spacing={3} direction="row" >
                                    <div className="div_botones_funciones">
                                    <CustomButton size='small' >INV</CustomButton>
                                    <CustomButton size='small' > <DeleteForeverIcon></DeleteForeverIcon> </CustomButton>
                                    <CustomButton size='small' > <CalculateIcon ></CalculateIcon> </CustomButton>
                                    <CustomButton size='small' > <EuroIcon></EuroIcon> </CustomButton>
                                    </div>
                                </Stack> 
                            

                            {/* <div> <button  >2</button> </div>
                            <div> <button>3</button> </div>
                            <div> <button>4</button> </div> */}
                                                        
                        </div>
                    </div>
                    
                </div>


                <div className="div_b">
                    2

                        {/* <Box className="div_b_a" sx={{ '& button': { m: 1 } }}> */}
                        <Box className="div_b_a" sx={{ '& button': { m: 1 } }}>
                            <div className={categoriaBebidas ? 'categoria--hidden' : ''}>
                                <div >
                                    <Button onClick={()=> console.log('bebida') } variant="outlined" size="medium">
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