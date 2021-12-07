

import MesasSala from "../../components/pagina-mesas(componetes)/mesas--sala";
import './style.css';
import PaginaMesasHeader from "../../components/pagina-mesas(componetes)/pagina-mesas-header";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './style.css';
import MesasTerraza from "../../components/pagina-mesas(componetes)/mesas--terraza";
import MesasBarra from "../../components/pagina-mesas(componetes)/mesas--barra";
// import PaginaComanda from "../pagina-comanda";

export default function PaginaMesas(){
    return(
        <div>
            <BrowserRouter>


                   

                    <PaginaMesasHeader></PaginaMesasHeader>
                    <div className="a">
                    <Switch>

                        <Route path="/mesas_sala">
                            
                            <MesasSala></MesasSala>
                            
                        </Route>

                        <Route path="/mesas_terraza">
                            <MesasTerraza></MesasTerraza> 
                        </Route>

                        <Route path="/mesas_barra">
                            <MesasBarra></MesasBarra>
                        </Route>

                        <Route path="*">
                            <MesasSala></MesasSala>
                        </Route>


                    </Switch>
                    </div>
                    
            </BrowserRouter>
            

        </div>
    )
}