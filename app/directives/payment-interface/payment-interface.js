angular.module("checkout")

.controller("PaymentInterfaceDir", function(){
  console.log("payment interface ran blah!")
})
.directive('payment', function() {
  return {
    restrict: "E",
    templateUrl: "app/directives/payment-interface/payment-interface.html",
    controller: "PaymentInterfaceDir"
  }
})