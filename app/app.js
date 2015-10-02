angular.module('checkout', [
  'ui.router',
  'ui.bootstrap',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")
  
  $stateProvider
    // .state("home", {
    //    url: "/",
    //    templateUrl: "../index.html",
    //    controller: "HomeController"
    // })
    .state("shopping-cart.js", {
      url: '/',
      templateUrl: "/app/states/shopping-cart/shopping-cart.html",
      controller: "ShoppingCart"
    })
    .state('payment-interface', {
      url: '/payment-interface',
      templateUrl: "/app/states/payment-interface/payment-interface.html",
      controller: "PaymentInterface",
    })
})
console.log("Ran!")