import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Meta() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Meta/Meta_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_CodigoIndiador+"</td>"+
       "<td>"+ response.data[i].Id_Area_Agencia+"</td>"+
       "</tr>";
    }
       
      $$("Meta").html(Tabla);
    });
  
  }
  
export {Listar_Meta};
  