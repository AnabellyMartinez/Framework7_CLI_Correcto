// Import axios
import axios from 'axios';

function Listar() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Indicadores/Indicadores_Select.php',
    })
      .then(response => {
      console.log(response.data);
    });
  
  }
  