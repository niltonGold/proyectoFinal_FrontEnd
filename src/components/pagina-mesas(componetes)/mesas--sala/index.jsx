import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
import { useHistory } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function MesasSala(){



  
    let history = useHistory();

    const handleLink = (e) =>{
        history.push(`/pagina_comanda/${e.target.parentElement.id}`);
    
    }

    return(


   


        <Box sx={{bgcolor: 'secondary.main', display: 'flex', flexWrap: 'wrap',  '& > :not(style)': { p: 2,  m: 2,  width: '100%', },  }} >

            <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={4}>
                
                <div>Rango 1</div>

                <Stack onClick={handleLink} id="S1" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S1</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S2" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S2</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S3" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S3</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S4" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S4</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S5" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S5</div>
                            </div>
                         </Button>      
                </Stack>


            </Paper>

            <Paper sx={{justifyContent: 'space-around', display: 'flex',  flexWrap: 'wrap',  gap: '1rem'  }} elevation={3}> 

                <div>Rango 2</div> 

                <Stack onClick={handleLink} id="S6" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S6</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S7" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S7</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S8" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S8</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S9" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S9</div>
                            </div>
                         </Button>      
                </Stack>


                <Stack onClick={handleLink} id="S10" spacing={2}>
                        <Button variant="contained">
                            <div>
                                <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon>
                                <div>S10</div>
                            </div>
                         </Button>      
                </Stack>

            </Paper>
      </Box>

    
    )
}