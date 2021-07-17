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


conexion();

function conexion() {
  app.request.json('http://localhost/conexion_Framewor7/conexion.php', function(data){
    var jlh = data.length;
    var i = "";
    console.log(data);
    var buatTabel="";
    for(i= 0; i < jlh; i++){
      buatTabel+="<tr>"+
       "<td>"+ data[i].Id_Area+"</td>"+
       "<td>"+ data[i].Nombre_Area+"</td>"+
       "</tr>";
    }
     $$("#Area").html(buatTabel);

  });
}

prueba3();
function prueba3() {
  
  axios({
    method: 'get',
    url: 'http://localhost/conexion_Framewor7/conexion.php',
  })
    .then(response => {
    console.log(response.data);
  });

}


var $$ = Dom7;


