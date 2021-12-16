import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


 export const myTheme = createTheme({
        palette:{ 

                    primary:{
                        main: '#000000',
                        dark:'#e91e63' 
                    },

                    secondary:{
                        main: red[100],
                        dark:'#000000'  
                    },

        }  
});


export const myDarkTheme = createTheme({
        palette:{


                primary:{
                    main: '#4B77D6'//azul
                  },
                  secondary:{
                    main: red[500],
                    dark:'#e91e63'  
                },

        }
});