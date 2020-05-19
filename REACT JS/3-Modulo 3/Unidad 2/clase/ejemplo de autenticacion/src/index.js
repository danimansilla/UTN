import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route,Router} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PerfilesPage from './Pages/PerfilesPage';
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';


import registerServiceWorker from './registerServiceWorker';
import LoginPage from './Pages/LoginPage';
import PerfilPage from './Pages/PerfilPage';
import RegistroPage from './Pages/RegistroPage';

ReactDOM.render(<BrowserRouter>
    <div>
      <Route component={Menu} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/perfiles/' component={PerfilesPage} />
      <Route exact path='/perfiles/:id' component={PerfilesPage} />
      <Route exact path='/login/' component={LoginPage} />
      <Route exact path='/perfil/' component={PerfilPage} />
      <Route exact path='/registro/' component={RegistroPage} />
      <Route component={Footer} />
    </div>
  </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
