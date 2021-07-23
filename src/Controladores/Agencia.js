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
       "</tr>";
    }
     
      $$("#Agencia").html(Tabla);
    });
  
  }
  
export {Listar_Agencia};
  