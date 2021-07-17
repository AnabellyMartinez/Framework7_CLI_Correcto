// Import axios
import axios from 'axios';

function Listar() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Objetivo/Objetivo_Select.php',
    })
      .then(response => {
      console.log(response.data);
    });
  
  }
  