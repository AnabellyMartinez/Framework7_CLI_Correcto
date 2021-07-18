import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Indicadores() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Indicadores/Indicadores_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_CodigoIndiador+"</td>"+
       "<td>"+ response.data[i].Id_subobjetivos+"</td>"+
       "<td>"+ response.data[i].Nombre_Indicador+"</td>"+
       "<td>"+ response.data[i].Proceso+"</td>"+
       "<td>"+ response.data[i].Nombre_Indicador+"</td>"+
       "<td>"+ response.data[i].Formula+"</td>"+
       "<td>"+ response.data[i].Detalle+"</td>"+
       "<td>"+ response.data[i].Id_Tiempo+"</td>"+
       "<td>"+ response.data[i].Estado+"</td>"+
       "<td>"+ response.data[i].Responsables+"</td>"+
       "</tr>";
    }
       
      $$("#Indicadores").html(Tabla);
    });
  
  }
  
export {Listar_Indicadores};
  