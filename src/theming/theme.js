import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


 export const myTheme = createTheme({
        palette:{ 

                    primary:{
                        main: '#67b000'
                    },

                    secondary:{
                        main: red[800],
                        dark:'#e91e63'  
                    },

        }  
});


export const myDarkTheme = createTheme({
        palette:{
                mode:'dark',
                warning:{
                    main: '#ff0000',
                },

        }
});