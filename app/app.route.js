routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
        .state('home', {
          url: '/home',
          template: '<home></home>'
        })
        .state('second', {
          url: '/second',
          template: '<second></second>'
        })
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(false);
}
