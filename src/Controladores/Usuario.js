import  { Dom7 } from 'framework7/bundle';
// Import axios
import axios from 'axios';


var $$ = Dom7;

function Listar_Usuario() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Usuario/Usuario_Select.php',
    })
      .then(response => {

        var jlh = response.data.length;
        var i = "";
        var Tabla="";
       for(i= 0; i < jlh; i++){
        Tabla+="<tr>"+
       "<td>"+ response.data[i].Id_Usuario+"</td>"+
       "<td>"+ response.data[i].Email+"</td>"+
       "<td>"+ response.data[i].Contraseña+"</td>"+
       "<td>"+ response.data[i].Id_Area+"</td>"+
       "<td>"+ response.data[i].Usuario_Tipo+"</td>"+
       "<td>"+ response.data[i].Id_Agencia+"</td>"+
       "</tr>";
    }
       
      $$("Usuario").html(Tabla);
    });
  
  }
  
export {Listar_Usuario};
  