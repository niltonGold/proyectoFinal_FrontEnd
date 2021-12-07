

import { Fragment } from "react/cjs/react.production.min";
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';

export default function MesasTerraza(){
    return(
    <Fragment>


            <div className="mesas_fila">
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
            </div>

            <div className="mesas_fila">
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableRestaurantOutlinedIcon></TableRestaurantOutlinedIcon></div>
            </div>

    </Fragment>
    )
}