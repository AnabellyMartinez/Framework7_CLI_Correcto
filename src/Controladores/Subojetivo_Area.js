// Import axios
import axios from 'axios';


function Listar() {
  
    axios({
      method: 'get',
      url: 'http://localhost/conexion_Framewor7/Subojetivo_Area/Subojetivo_Area_Select.php',
    })
      .then(response => {
      console.log(response.data);
    });
  
  }
  