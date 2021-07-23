
import InitPage from '../AppPage/init.f7.html';
import AgenciaPage from '../AppPage/Agencia/agencia.f7.html';
import NotFoundPage from '../AppPage/404.f7.html';
import AgregarPage from '../AppPage/Indicadores/agregar.f7.html';
import {Listar_Agencia} from '../Controladores/Agencia';
import AboutPage from '../AppPage/Agencia/agencia.f7.html';
import ObjetivosPage from '../AppPage/Objetivos/Objetivos.f7.html';




var routes = [
  {
    path: '/',
    component: InitPage,
  },
  {
    path: '/about/',
    component: AgenciaPage,
  },
  
  {
    path: '/agregar/',
    component: AgregarPage,
  },
  {
    path: '/agencia/',
    component: AgenciaPage,
  },
   {
    path: '/Objetivos/',
    component: ObjetivosPage,
  },

 {
    path: '(.*)',
    component: NotFoundPage,
  },

];

export default routes;