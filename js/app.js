/**
 * The main app module
 *
 * @type {angular.Module}
 */
define(['angular', 'angular-route', 'asset!js/aerobatic-angular', 'asset!js/services/thing', 'asset!bower_components/angular-isotope/dist/angular-isotope'], function(angular) {
  'use strict';

  var app = angular.module('angular-seed', ['ngRoute', 'seedServices', 'aerobatic', 'iso.directives']);

  // Declare all the top level dependencies our app requires
  var dependencies = [
    'asset!partials/layout',
    'asset!js/controllers/searchCtrl',
    'asset!partials/search',
    'asset!js/controllers/detailCtrl',
    'asset!partials/detail'
  ];

  require(dependencies, function(layout, searchCtrl, searchView, detailCtrl, detailView) {
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        controller: searchCtrl,
        template: searchView
      }).when('/:id', {
        controller: detailCtrl,
        template: detailView
      }).otherwise({
        redirectTo: '/'
      });
    }]);

    angular.element(document).ready(function() {
      // Append an ng-view to the body to load our partial views into
      angular.element(document.body).append(angular.element(layout));
      angular.bootstrap(document, ['angular-seed']);
    });
  });
});
