

import { Fragment } from "react/cjs/react.production.min";
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';

export default function MesasBarra(){
    return(
    <Fragment>


            <div className="mesas_fila">
                <div className="mesa" onClick={ () => console.log('hola')} > <LocalBarOutlinedIcon></LocalBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <LocalBarOutlinedIcon></LocalBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <LocalBarOutlinedIcon></LocalBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <LocalBarOutlinedIcon></LocalBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <LocalBarOutlinedIcon></LocalBarOutlinedIcon> </div>
            </div>

    </Fragment>
    )
}