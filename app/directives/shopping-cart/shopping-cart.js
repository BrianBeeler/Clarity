angular.module("checkout")
.controller("ShoppingCartDir", function() {
  console.log("Shopping cart directive!")
})
.directive("cart", function() {
  return {
    restrict: "E",
    templateUrl: "app/directives/shopping-cart/shopping-cart.html",
    controller: "ShoppingCartDir"
  }
})