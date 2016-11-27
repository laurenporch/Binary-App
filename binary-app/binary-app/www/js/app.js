// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

// State for the What is Binary lesson/html page.
  .state('app.what-is-binary', {
    url: '/what-is-binary',
    views: {
      'menuContent': {
        templateUrl: 'templates/what-is-binary.html'
      }
    }
  })

// State for the Counting in Binary lesson/html page.
  .state('app.counting-in-binary', {
      url: '/counting-in-binary',
      views: {
        'menuContent': {
          templateUrl: 'templates/counting-in-binary.html'
        }
      }
  })

// State for the Decimal to Binary lesson/html page.
  .state('app.decimal-and-binary', {
      url: '/decimal-and-binary',
      views: {
          'menuContent': {
              templateUrl: 'templates/decimal-and-binary.html'
          }
      }
  })

// State for the Binary, Octal, Hexadecimal conversion lesson/html page.
  .state('app.binary-octal-hexadecimal', {
      url: '/binary-octal-hexadecimal',
      views: {
          'menuContent': {
              templateUrl: 'templates/binary-octal-hexadecimal.html'
          }
      }
  })

// State for the One's and Two's Complement lesson/html page.
  .state('app.ones-and-twos', {
      url: '/ones-and-twos',
      views: {
          'menuContent': {
              templateUrl: 'templates/ones-and-twos.html'
          }
      }
  })

// State for calculator/converter.
     .state('app.select-options3', {
         url: '/select-options3',
         views: {
             'menuContent': {
                 templateUrl: 'templates/select-options3.html'
             }
         }
     })

/* Keeping this in case we need to make controllers.

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  */

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/what-is-binary');
});
