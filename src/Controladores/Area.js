
import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Area() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Area/Area_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_Area+"</td>"+
       "<td>"+ response.data[i].Nombre_Area+"</td>"+
       "</tr>";
    }
       
      $$("#Area").html(Tabla);
    });
  
  }
  
export {Listar_Area};
  