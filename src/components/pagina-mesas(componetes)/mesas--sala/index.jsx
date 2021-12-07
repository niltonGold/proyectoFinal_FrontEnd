
import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
// import { Link } from 'react-router-dom';
import { Fragment } from "react/cjs/react.production.min";
// import { useHistory } from "react-router-dom";

export default function MesasSala(){

    // let history = useHistory();

    // const handleLink = () => {
    //         console.log('link click');
    //         history.push("/pagina_comanda");
    //       }

    return(
    <Fragment>


            <div className="grip_container1">
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S1</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S2</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S3</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S4</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S5</div> </button>
            {/* </div>

            <div className="grip_container2"> */}
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S6</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S7</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S8</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S9</div> </button>
                <button className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon sx={{ fontSize: 40 }}></TableBarOutlinedIcon> <div>S10</div> </button>
            </div>




            {/* <div className="mesas_fila">
                <button onClick={handleLink}>
                <div className="mesa" onClick={ () => console.log('hola')} > <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                </button>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
            </div>

            <div className="mesas_fila">
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
                <div className="mesa" onClick={ () => console.log('hola')}> <TableBarOutlinedIcon></TableBarOutlinedIcon> </div>
            </div> */}

    </Fragment>
    )
}