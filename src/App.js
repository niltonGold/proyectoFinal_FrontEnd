
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './pages/login';
import PaginaMesas from './pages/pagina-mesas';
import PaginaComanda from './pages/pagina-comanda';

function App() {
  return (
    <div>
      <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/principal" component={PaginaMesas}/>
            <Route exact path="/pagina_comanda" component={PaginaComanda}/>
         
          </Switch>  
        
      </BrowserRouter>
    </div>  
  );
}

export default App;
