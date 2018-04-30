var HyggeNamespace = HyggeNamespace || {};

HyggeNamespace.helpers = {
  doesInclude: function(container, value) {
    var returnValue = false;
    var pos = container.indexOf(value);
    if (pos >= 0) {
      returnValue = true;
    }
    return returnValue;
  }
};
var angularSlyDemo = angular
  .module("HyggeWebApp", [
    "angular-sly",
    "LocalStorageModule",
    "angular-jwt",
    "angular-cache",
    "ngAria",
    "ngMaterial",
    "ui.select",
    "ngSanitize",
    "ngRoute",
    "ui.bootstrap",
    "mgo-angular-wizard",
    "720kb.datepicker",
    "uiSwitch",
    "ui-notification",
    "rateYo",
    "rzModule",
    "ngLetterAvatar",
    "yaru22.angular-timeago",
    "timer",
    "angular-cache",
    "md.data.table",
    "angularjs-dropdown-multiselect",
    "vsGoogleAutocomplete",
    "checklist-model",
    "dndLists",
    "720kb.socialshare",
    "angularMoment",
    "ui.bootstrap.datetimepicker",
    "mwl.confirm",
    "updateMeta",
     ])
  .config(function($routeProvider, $locationProvider, CacheFactoryProvider) {
    angular.extend(CacheFactoryProvider.defaults, {
      maxAge: 3600000,
      deleteOnExpire: "aggressive",
      capacity: 100
    });
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "views/main/main.html"
      })
      .when("/test", {
        templateUrl: "views/test/test.html"
      })
      .otherwise({
        redirectTo: "/"
      });
    $locationProvider.html5Mode(false);
});

  angular.module("HyggeWebApp").run(function($rootScope, localStorageService,  $location) {
  $rootScope.safeApply = function(fn) {
    var phase = $rootScope.$$phase;
    if (phase === "$apply" || phase === "$digest") {
      if (fn && typeof fn === "function") {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

  var userTokenFromLocalStorage = localStorageService.get("HyggeWebApp_auth");
  if (userTokenFromLocalStorage) {
    //Session.user.details = userTokenFromLocalStorage.user;
    $rootScope.isLogged = true;
    localStorage.removeItem("userRequestedURLForRedirection");
  } else {
    localStorage.setItem("userRequestedURLForRedirection", $location.url());
  }

  $rootScope.$on("$routeChangeSuccess", function(e, current, pre) {
    $rootScope.currentPageURL = $location.path();
  });

  $rootScope.$on("$locationChangeStart", function(evt, absNewUrl, absOldUrl) {
    var hashIndex = absOldUrl.indexOf("#");
    var oldRoute = absOldUrl.substr(hashIndex + 2);
    var routeData = oldRoute.split("/");
  });
});

// Methods common to Hygge-WebApp Browser JS

String.prototype.isEmpty = function() {
  return this.length === 0 || !this.trim();
};

//Number prototype
Number.prototype.between = function(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this > min && this < max;
};