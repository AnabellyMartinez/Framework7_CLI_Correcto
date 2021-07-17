import $ from 'dom7';
import Framework7, { Dom7 } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';
// Import main metodos
import metodos from './metodos.js';
// Import main metodos
import {Listar_Agencia} from '../Controladores/Agencia.js';

// Import main app component
import App from '../app.f7.html';

// Import axios
import axios from 'axios';


var app = new Framework7({
  name: 'My Herrramienta', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
    // App metedos
    metodos: metodos,
});



//var Area = Listar_Agencia();

var $$ = Dom7;


