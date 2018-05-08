// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'firebase';
import '@uirouter/angularjs';
import 'kmturley/angularfire';
import 'chart';
import 'jtblin/angular-chart.js';
import 'angular-loading-bar';
import 'angular-filter';
import 'jquery';
import 'ng-file-upload';

import AppController from 'src/AppController';
import Users from 'src/users/Users';
import Pages from 'src/pages/Pages';
import authentication from 'src/authentication/authentication';



export default angular.module('starter-app', ['ngFileUpload','chart.js', 'ui.router', 'ngAnimate', 'ngMaterial', 'firebase', 'angular-loading-bar', 'angular.filter', Users.name, Pages.name, authentication.name])
    .config(($mdIconProvider, $mdThemingProvider) => {
        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("dashboard", "./assets/svg/speedometer.svg", 128)
            .icon("company", "./assets/svg/building.svg", 128)
            .icon("logout", "./assets/svg/arrow.svg", 128)
            .icon("open-source", "./assets/svg/open-source.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24)
            .icon("post", "./assets/svg/icons8-edit.svg", 24)
            .icon("news", "./assets/svg/icons8-news.svg", 24);

        $mdThemingProvider.theme('default');1
            // .primaryPalette('blue')
            // .accentPalette('cyan');
    })
    .controller('AppController', AppController)
    .config(function ($stateProvider) {
        var UserDashboard = {
            name: 'UserDashboard',
            url: '/UserDashboard',
            component: 'userDashboard'
        };
        var UserProfile = {
            name: 'UserProfile',
            url: '/UserProfile',
            component: 'userProfile'
        };
        var Company = {
            name: 'Company',
            url: '/Company',
            component: 'company'
        };
        var CompanyDetail = {
            name: "CompanyDetail",
            url: "/Company/{id}",
            template: ''
        };
        var Projects = {
            name: "Projects",
            url: "/Projects",
            component: 'projects'
        };
        var News = {
            name:"News",
            url:"/News",
            component:'news'
        };
        var otherwise = {
            name: 'otherwise',
            url: '*path',
            component: 'userDashboard'
        };


        $stateProvider.state(UserDashboard);
        $stateProvider.state(UserProfile);
        $stateProvider.state(Company);
        $stateProvider.state(CompanyDetail);
        $stateProvider.state(Projects);
        $stateProvider.state(News);
        $stateProvider.state(otherwise);
    })
    .config(function () {
        var config = {
            apiKey: "****************************************",
            authDomain: "intern-master.firebaseapp.com",
            databaseURL: "https://intern-master.firebaseio.com",
            projectId: "intern-master",
            storageBucket: "intern-master.appspot.com",
            messagingSenderId: "************"
        };
        firebase.initializeApp(config);


    });
