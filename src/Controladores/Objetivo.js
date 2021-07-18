import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Objetvo() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Objetivo/Objetivo_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].id_Objetivo+"</td>"+
       "<td>"+ response.data[i].Nombre_objetivo+"</td>"+
       "<td>"+ response.data[i].Porcentaje_Objetivo+"</td>"+
       "</tr>";
    }
       
      $$("Objetivo").html(Tabla);
    });
  
  }
  
export {Listar_Objetivo};
  