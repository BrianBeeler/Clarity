angular.module('checkout', [
  'ui.router',
  'ui.bootstrap',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")
  
  $stateProvider
    .state("/", {
      url: "/",
      templateUrl: "/app/states/dummy/dummy.html",
      constroller: "Main"
    })
    .state("shopping-cart", {
      url: '/shopping-cart',
      templateUrl: "/app/states/shopping-cart/shopping-cart.html",
      controller: "ShoppingCart",
    })
    .state('payment-interface', {
      url: '/payment-interface',
      templateUrl: "/app/states/payment-interface/payment-interface.html",
      controller: "PaymentInterface",
    })
})
console.log()