// Import axios
import axios from 'axios';


function Listar() {
  
  axios({
    method: 'get',
    url: 'http://localhost/conexion_Framewor7/Agencia/Agencia_Select.php',
  })
    .then(response => {
    console.log(response.data);
  });

}
