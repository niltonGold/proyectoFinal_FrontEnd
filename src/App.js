
import './App.css';
import Login from './pages/login';
import PaginaComanda from './pages/pagina-comanda';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MesasTerraza from './components/pagina-mesas(componetes)/mesas--terraza';
import MesasSala from './components/pagina-mesas(componetes)/mesas--sala';
import MesasBarra from './components/pagina-mesas(componetes)/mesas--barra';
import PaginaMesas from './pages/pagina-mesas';
import { PaginaCobro } from './pages/pagina-cobro';

function App() {

  return (
    
    <Router>

          <Switch>


            <Route path="/pagina_mesas">

                <PaginaMesas></PaginaMesas>
              
                <Route path="/pagina_mesas/mesas_sala">     
                    <MesasSala></MesasSala>
                </Route>

                <Route path="/pagina_mesas/mesas_terraza">
                    <MesasTerraza></MesasTerraza> 
                </Route>

            
                <Route path="/pagina_mesas/mesas_barra">
                    <MesasBarra></MesasBarra>
                </Route>

            </Route>

            <Route path="/pagina_comanda/:id">     
                    <PaginaComanda></PaginaComanda>
            </Route>


            <Route path="/pagina_cobro/:cuentaTotal">     
                    <PaginaCobro></PaginaCobro>
            </Route>

            <Route path="/">
              <Login></Login>  
            </Route> 

          </Switch>  
        
      </Router>
      


  );
}

export default App;
