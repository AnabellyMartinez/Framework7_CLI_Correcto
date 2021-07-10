import InitPage from '../AppPage/init.f7.html';
import AboutPage from '../AppPage/about.f7.html';


import NotFoundPage from '../AppPage/404.f7.html';

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

];

export default routes;