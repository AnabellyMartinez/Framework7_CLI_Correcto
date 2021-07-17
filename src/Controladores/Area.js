// Import axios
import axios from 'axios';

function Listar() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Area/Area_Select.php',
    })
      .then(response => {
      console.log(response.data);
    });
  
  }
  