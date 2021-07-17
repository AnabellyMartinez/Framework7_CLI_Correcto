// Import axios
import axios from 'axios';

function Listar() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Usuario/Usuario_Select.php',
    })
      .then(response => {
      console.log(response.data);
    });
  
  }
  