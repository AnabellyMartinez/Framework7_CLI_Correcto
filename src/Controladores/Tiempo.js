// Import axios
import axios from 'axios';


function Listar() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Tiempo/Tiempo_Select.php',
    })
      .then(response => {
      console.log(response.data);
    });
  
  }
  