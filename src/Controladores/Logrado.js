import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Logrado() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Logrado/Logrado_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_CodigoIndiador+"</td>"+
       "<td>"+ response.data[i].Id_Area_Agencias+"</td>"+
       "<td>"+ response.data[i].Meta+"</td>"+
       "<td>"+ response.data[i].Logrado+"</td>"+
       "<td>"+ response.data[i].Porcentaje_Cumplimiento+"</td>"+
       "<td>"+ response.data[i].Observacion+"</td>"+
       "<td>"+ '<a href="search" class="link icon-only"><i class="f7-icons">trash_fill</i></a>' +"</td>"+
       "<td>"+ '<a href="search" class="link icon-only"><i class="f7-icons"> pencil_circle_fill</i></a>' +"</td>"+
       "</tr>";
       "</tr>";
    }
       
      $$("#Logrado").html(Tabla);
    });
  
  }
  
export {Listar_Logrado};
  