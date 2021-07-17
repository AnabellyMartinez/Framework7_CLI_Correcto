import InitPage from '../AppPage/init.f7.html';
import AboutPage from '../AppPage/about.f7.html';
import NotFoundPage from '../AppPage/404.f7.html';
import {Listar_Agencia} from '../Controladores/Agencia.js';


var routes = [
  {
    path: '/',
    component: InitPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  
  {
    path: '(.*)',
    component: NotFoundPage,
  },

  {
    path: '/Agencia/',
    component: AboutPage,

    on: {
      pageAfterIn: function test (e, page) {
        // do something after page gets into the view
      },
      pageInit: function Listar_Agencia (e, page) {
        // do something when page initialized
      },
    }
  },

];

export default routes;