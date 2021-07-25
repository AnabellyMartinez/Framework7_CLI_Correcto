import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Agencia() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Agencia/Agencia_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_Agencia+"</td>"+
       "<td>"+ response.data[i].Nombre_agencia+"</td>"+
       "<td>"+ '<a href="search" class="link icon-only"><i class="f7-icons">trash_fill</i></a>' +"</td>"+
       "<td>"+ '<a href="search" class="link icon-only"><i class="f7-icons"> pencil_circle_fill</i></a>' +"</td>"+
       "</tr>";
       "</tr>";
    }
     
      $$("#Agencia").html(Tabla);
    });
  
  }
  
export {Listar_Agencia};
  