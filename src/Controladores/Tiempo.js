import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Tiempo() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Tiempo/Tiempo_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_Tiempo+"</td>"+
       "<td>"+ response.data[i].Nombre_Periodo+"</td>"+
       "</tr>";
    }
       
      $$("Tiempo").html(Tabla);
    });
  
  }
  
export {Listar_Tiempo};
  