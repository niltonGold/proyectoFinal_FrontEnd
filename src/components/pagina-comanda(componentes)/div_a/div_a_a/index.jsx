

import * as React from 'react';
import List from '@mui/material/List';

export default function Div_a_a(props){
    return(
        <div className="div_a_a">

            <List sx={{ width: '250px', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 },}} subheader={<li />} >
 
                <div className="lista_producos_comanda">

                <div>
                    <dl>
                        <dt>prod</dt>
                        <dd>hrf</dd>
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

        <div>
            ToTal : 7,90 €                            
        </div>

        <div>
            {props.listaPedido}
        </div>
    </div>
    
    )
}