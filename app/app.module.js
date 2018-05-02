import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import uiBootstrap from 'angular-ui-bootstrap';
import ngMaterial from "angular-material";
// css lib
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';

// css
import './scss/style.scss';
// components
import mainApp from './app.component';
import home from './components/home/home.component';
import second from './components/second/second.component';
import cvtitle from './components/cvtitle/cvtitle.component';
import cvbody from './components/cvbody/cvbody.component';
import contact from './components/contact/contact.component';
import skills from './components/skills/skills.component';
import references from './components/references/references.component';
import experience from './components/experience/experience.component';
import education from './components/education/education.component';



// services
import appService from './app.service';

// routing
import routing from './app.route';

// directives

// constants
const MODULE_NAME = 'app';
require('../index.html');

angular.module(MODULE_NAME, [uiRouter, ngSanitize, ngMaterial])
    // components
    .component('myApp', mainApp)
    .component('home', home)
    .component('second', second)
    .component('cvtitle', cvtitle)
    .component('cvbody', cvbody)
    .component('contact', contact)
    .component('skills', skills)
    .component('references', references)
    .component('experience', experience)
    .component('education', education)
    .service('appService', appService)
    .config(routing)

export default MODULE_NAME;
