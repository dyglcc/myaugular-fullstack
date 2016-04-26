'use strict';

angular.module('myaugularFullstackApp.auth', [
  'myaugularFullstackApp.constants',
  'myaugularFullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
