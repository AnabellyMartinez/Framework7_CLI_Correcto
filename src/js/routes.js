
import InitPage from '../AppPage/init.f7.html';
import AboutPage from '../AppPage/about.f7.html';
//import AgenciaPage from '../AppPage/Agencia.f7.html';
import NotFoundPage from '../AppPage/404.f7.html';
import {Listar_Agencia} from '../Controladores/Agencia';

//var Agenca = new Listar_Agencia();


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
    beforeEnter: Listar_Agencia(),
    component: AboutPage,
  },


];

export default routes;