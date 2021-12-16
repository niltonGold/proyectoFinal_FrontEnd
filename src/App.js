
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


import ThemeProvider from '../src/theming/theme-provider';
import SwichtButton from '../src/components/swich';

import {useTranslation} from "react-i18next";
import PrivateRoute from './pages/privateRoutes';

function App() {

  const [t, i18n] = useTranslation('common');

  return (
    <ThemeProvider > 
    <Router>
          <SwichtButton></SwichtButton>
          <div>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
            <button onClick={() => i18n.changeLanguage('es')}>es</button>
          </div>
          <Switch>


            <PrivateRoute path="/pagina_mesas">

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

            </PrivateRoute>


            <PrivateRoute path="/pagina_comanda/:id">     
                    <PaginaComanda></PaginaComanda>
            </PrivateRoute>


            <PrivateRoute path="/pagina_cobro/:cuentaTotal">     
                    <PaginaCobro></PaginaCobro>
            </PrivateRoute>

            <Route path="/">
              <Login></Login>  
            </Route> 

          </Switch>  
        
      </Router>
      
      </ThemeProvider>   

  );
}

export default App;
