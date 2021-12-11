import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';

import { useHistory } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function MesasBarra(){

    let history = useHistory();

    const handleLink = (e) =>{
        history.push(`/pagina_comanda/${e.target.parentElement.id}`);
    
    }



    return(
        <Box sx={{bgcolor: 'secondary.main', display: 'flex', flexWrap: 'wrap',  '& > :not(style)': { p: 2,  m: 2,  width: '100%', },  }} >

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}>
                    
                    <div>Rango 1</div>

                    <Stack onClick={handleLink} id="B1" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B1</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B2" spacing={2}>
                            <Button variant="contained">
                                <div className='mesa'>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B2</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B3" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B3</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B4" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B4</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B5" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B5</div>
                                </div>
                            </Button>      
                    </Stack>


                </Paper>

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}> 

                    <div>Rango 2</div> 

                    <Stack onClick={handleLink} id="B6" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B6</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B7" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B7</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B8" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B8</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B9" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B9</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="B10" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <LocalBarOutlinedIcon sx={{ fontSize: 40 }}></LocalBarOutlinedIcon>
                                    <div>B10</div>
                                </div>
                            </Button>      
                    </Stack>

                </Paper>
        </Box>
    )
}