import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';

import { useHistory } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




export default function MesasTerraza(){


    let history = useHistory();

    const handleLink = (e) =>{
        history.push(`/pagina_comanda/${e.target.parentElement.id}`);
    
    }


    return(
        <Box sx={{bgcolor: 'secondary.main', display: 'flex', flexWrap: 'wrap',  '& > :not(style)': { p: 2,  m: 2,  width: '100%', },  }} >

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}>
                    
                    <div>Rango 1</div>

                    <Stack onClick={handleLink} id="T1" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T1</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T2" spacing={2}>
                            <Button variant="contained">
                                <div className='mesa'>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T2</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T3" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T3</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T4" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T4</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T5" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T5</div>
                                </div>
                            </Button>      
                    </Stack>


                </Paper>

                <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}> 

                    <div>Rango 2</div> 

                    <Stack onClick={handleLink} id="T6" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T6</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T7" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T7</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T8" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T8</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T9" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T9</div>
                                </div>
                            </Button>      
                    </Stack>


                    <Stack onClick={handleLink} id="T10" spacing={2}>
                            <Button variant="contained">
                                <div>
                                    <TableRestaurantOutlinedIcon sx={{ fontSize: 40 }}></TableRestaurantOutlinedIcon>
                                    <div>T10</div>
                                </div>
                            </Button>      
                    </Stack>

                </Paper>
        </Box>
    )
}