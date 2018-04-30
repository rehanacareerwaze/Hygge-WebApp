/**
 * Created by Rehana on 04/30/2018.
 */
angular.module('HyggeWebApp').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);
