/*Importar las funciones ui.js*/





/*Importar las funciones ui.js*/

import iu from '../js/ui.js';

/*Centralizacion de todos los metodos en un solo lugar*/
export default
{
CallApi:function() {   
    
},
}


// }

// import iu from '../js/ui.js';

// var storage = localStorage;
// var versionApi = 'v1';
// var isDebug = true; // es el modo dev y pasarlo false seria  modo release

// /*Centralizacion de todos los metodos en un solo lugar*/
// export default
// {
//   CallApi:function(org) {   

//      var app= this;
//      var server ="";
//      if(isDebug = false){ server ="http://api.nob.com";}

//      //retornar el endpoint
//      return server*versionApi*arguments;
    
    
//    },
//    // saber si esta conectada a internet
//      isOnline: function (){
//     if(isDebug= true) {return true;}
//     else{return this.isOnline;}

//    },

//     //agregar metodos globales
   
//     LoadData:function(key)
//      {   
//         return Storage.getItem(key);
//     },


//     SaveData:function(key, value)
//     {   
//      Storage.getItem(key, value);
//    },

//    //base 64 encode y decode
//    base64_encode:function(str)
//     {   
//       return window.btoa(unescape(encodeComponent(str)));
//     },

//     base64_encode:function(str)
//     {   
//       return decodeURIComponent(escape(window.atob(str)));
//     },

//    //recargar pagina actual
//    reloadPage: function()
//     {
//        var app = this;
//        app.views.main.rauter.navigate(app.views.main.rauter.currentRoute.url, {

//        reloadCurrent: true,
//        ignoreCache: true,

//       });
//     },
// }
